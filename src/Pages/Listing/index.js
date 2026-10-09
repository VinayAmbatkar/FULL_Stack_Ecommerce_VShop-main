import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { apiRequest } from "../../api";
import { useShop } from "../../ShopContext";
import ProductsItem from "../../Components/ProductsItems";

export default function Listing() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const pathname = useLocation().pathname;
  const [searchText, setSearchText] = useState(searchParams.get("q") || "");
  const { location } = useShop();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    const params = new URLSearchParams({
      page: "1",
      perPage: "100",
      location,
    });
    apiRequest(`/api/products?${params}`)
      .then((result) => {
        if (active) setProducts(Array.isArray(result?.products) ? result.products : []);
      })
      .catch((requestError) => {
        if (!active) return;
        console.error("Unable to load products.", requestError);
        setError(requestError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [location]);

  const query = (searchParams.get("q") || "").trim().toLowerCase();
  const category = (searchParams.get("category") || "").toLowerCase();
  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesQuery =
          !query ||
          `${product.name} ${product.description} ${product.catName}`
            .toLowerCase()
            .includes(query);
        const matchesCategory =
          !category ||
          `${product.catName} ${product.subCatName}`.toLowerCase() === category;
        const matchesRouteCategory =
          !id ||
          product.catId === id ||
          product.subCatId === id ||
          product.category?._id === id ||
          product.catName?.toLowerCase() === id.toLowerCase();
        return matchesQuery && matchesCategory && matchesRouteCategory;
      }),
    [products, query, category, id]
  );

  const title = query
    ? `Search results for “${query}”`
    : category || filteredProducts[0]?.catName || "Shop products";
  const submitSearch = (event) => {
    event.preventDefault();
    const next = new URLSearchParams(searchParams);
    if (searchText.trim()) next.set("q", searchText.trim());
    else next.delete("q");
    setSearchParams(next);
  };

  return (
    <section className="storePageSection">
      <div className="container">
        <div className="storeBreadcrumb">Home <span>/</span> {title}</div>
        <div className="storeListingHeading">
          <div>
            <span className="eyebrow">Discover something good</span>
            <h1>{title}</h1>
            <p>{filteredProducts.length} products</p>
          </div>
          {pathname === "/search" && (
            <form className="pageSearchForm" onSubmit={submitSearch}>
              <input
                aria-label="Search products"
                placeholder="Search for products..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          )}
        </div>

        {error && (
          <div className="storeError" role="alert">
            Products could not be loaded: {error}
          </div>
        )}
        {loading ? (
          <p className="storeEmptyHint">Loading products…</p>
        ) : filteredProducts.length ? (
          <div className="storeProductGrid">
            {filteredProducts.map((product) => (
              <ProductsItem key={product._id || product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="storeEmptyState">
            <span aria-hidden="true">🔎</span>
            <h2>No products found</h2>
            <p>Try a different search or browse all products.</p>
          </div>
        )}
      </div>
    </section>
  );
}
