import { useEffect, useState } from "react";
import { Button, Rating } from "@mui/material";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { apiRequest, formatPrice, getProductImage } from "../../../api";
import { useShop } from "../../../ShopContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart, toggleMyList, myList } = useShop();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    apiRequest(`/api/products/${encodeURIComponent(id)}`)
      .then((result) => {
        if (active) setProduct(result);
      })
      .catch((requestError) => {
        if (!active) return;
        console.error("Unable to load product details.", requestError);
        setError(requestError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return <section className="storePageSection"><div className="container">Loading product…</div></section>;
  }
  if (error || !product) {
    return (
      <section className="storePageSection">
        <div className="container">
          <div className="storeError" role="alert">
            {error ? `Product could not be loaded: ${error}` : "This product could not be found."}
          </div>
          <Link to="/">Return to shop</Link>
        </div>
      </section>
    );
  }

  const productId = product._id || product.id;
  const inStock = Number(product.countInStock) > 0;
  const saved = myList.some((item) => (item._id || item.id) === productId);

  return (
    <section className="storePageSection productDetailPage">
      <div className="container">
        <div className="storeBreadcrumb">
          <Link to="/">Home</Link> <span>/</span> {product.name}
        </div>
        <div className="productDetailLayout">
          <div className="productDetailImage">
            <img src={getProductImage(product)} alt={product.name} />
            {Number(product.discount) > 0 && (
              <span className="productDiscount">{product.discount}%</span>
            )}
          </div>
          <div className="productDetailInfo">
            <span className="eyebrow">{product.brand || product.catName || "VShop"}</span>
            <h1>{product.name}</h1>
            <div className="productDetailRating">
              <Rating value={Number(product.rating) || 0} readOnly precision={0.5} size="small" />
              <span>{Number(product.rating) ? `${product.rating} rating` : "No reviews yet"}</span>
            </div>
            <div className="productDetailPrice">
              {Number(product.oldPrice) > Number(product.price) && (
                <del>{formatPrice(product.oldPrice)}</del>
              )}
              <strong>{formatPrice(product.price)}</strong>
            </div>
            <span className={inStock ? "productStock" : "productStock outOfStock"}>
              {inStock ? "In Stock" : "Out of stock"}
            </span>
            <p className="productDetailDescription">
              {product.description || "Find out more about this product by contacting the VShop team."}
            </p>
            <div className="productPurchaseActions">
              <div className="cartQuantity">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.min(Number(product.countInStock) || 1, current + 1)
                    )
                  }
                  disabled={quantity >= Number(product.countInStock)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <Button
                className="btn-blue btn-round"
                onClick={() => addToCart(product, quantity)}
                disabled={!inStock}
              >
                <FaCartShopping /> Add to cart
              </Button>
              <button
                type="button"
                className={`productWishlistButton detailWishlist${saved ? " isSaved" : ""}`}
                onClick={() => toggleMyList(product)}
                aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
                aria-pressed={saved}
              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
        <div className="productDetailTabs">
          <div className="productTabButtons" role="tablist">
            {["description", "additional", "reviews"].map((tab) => (
              <button
                type="button"
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab === "additional" ? "Additional info" : tab}
              </button>
            ))}
          </div>
          {activeTab === "description" && <p>{product.description || "No product description provided."}</p>}
          {activeTab === "additional" && (
            <dl className="productAdditionalInfo">
              <div><dt>Brand</dt><dd>{product.brand || "—"}</dd></div>
              <div><dt>Category</dt><dd>{product.catName || "—"}</dd></div>
              <div><dt>Availability</dt><dd>{inStock ? `${product.countInStock} in stock` : "Out of stock"}</dd></div>
            </dl>
          )}
          {activeTab === "reviews" && (
            <p>Customer reviews will appear here when they are available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
