import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import ProductsItem from "../../Components/ProductsItems";
import { apiRequest } from "../../api";
import { useShop } from "../../ShopContext";
import newsletterArt from "../../assets/images/newsletter.png";
import banner from "../../assets/images/Banners/Banner3.png";

function getItems(result) {
  if (Array.isArray(result)) return result;
  if (Array.isArray(result?.products)) return result.products;
  return [];
}

export default function Home() {
  const { location } = useShop();
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  useEffect(() => {
    let active = true;
    const locationParam = encodeURIComponent(location);

    Promise.all([
      apiRequest("/api/category"),
      apiRequest(`/api/products/featured?location=${locationParam}`),
      apiRequest(`/api/products?page=1&perPage=8&location=${locationParam}`),
    ])
      .then(([categoryResult, featuredResult, productsResult]) => {
        if (!active) return;
        setCategories(categoryResult?.categoryList || []);
        setFeaturedProducts(getItems(featuredResult));
        setNewProducts(getItems(productsResult));
        setErrors([]);
      })
      .catch((error) => {
        if (!active) return;
        console.error("Unable to load storefront content.", error);
        setErrors([error.message]);
      });

    return () => {
      active = false;
    };
  }, [location]);

  const subscribe = (event) => {
    event.preventDefault();
    setNewsletterMessage(
      email.trim()
        ? "Newsletter signups are not connected yet."
        : "Enter your email address to continue."
    );
  };

  return (
    <>
      <HomeBanner />
      <HomeCat categories={categories} />

      <section className="homeProducts buildHomeProducts">
        <div className="container">
          <div className="homeSectionHeading">
            <div>
              <span className="eyebrow">Tranding Products</span>
              <h2>POPULAR PRODUCTS</h2>
              <p>Do not miss the current offers until the end of March.</p>
            </div>
            <Link to="/search" className="viewAllLink">
              View All <span aria-hidden="true">›</span>
            </Link>
          </div>

          {errors.length > 0 && (
            <div className="storeError" role="alert">
              Products could not be loaded: {errors.join(", ")}. Check that the
              server is running and the database is connected.
            </div>
          )}

          {featuredProducts.length > 0 ? (
            <div className="storeProductGrid popularProductGrid">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductsItem key={product._id || product.id} product={product} />
              ))}
            </div>
          ) : (
            !errors.length && (
              <p className="storeEmptyHint">
                Featured products will appear here when available.
              </p>
            )
          )}

          <div className="homeSectionHeading newProductHeading">
            <div>
              <span className="eyebrow">Just landed</span>
              <h2>NEW PRODUCTS</h2>
              <p>New products with updated stocks.</p>
            </div>
            <Link to="/search" className="viewAllLink">
              View All <span aria-hidden="true">›</span>
            </Link>
          </div>
          {newProducts.length > 0 ? (
            <div className="storeProductGrid">
              {newProducts.slice(0, 8).map((product) => (
                <ProductsItem key={product._id || product.id} product={product} />
              ))}
            </div>
          ) : (
            !errors.length && (
              <p className="storeEmptyHint">No new products are available.</p>
            )
          )}

          <div className="homePromoBanner">
            <img src={banner} alt="Shop the latest VShop offers" />
          </div>
        </div>
      </section>

      <section className="newsletterSection">
        <div className="container newsletterInner">
          <div>
            <span className="eyebrow">20% discount for your first order</span>
            <h2>Join our newsletter and get more</h2>
            <p>Get updates on promotions and coupons.</p>
            <form onSubmit={subscribe} className="newsletterForm">
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button type="submit" className="btn-blue btn-round">
                Subscribe
              </Button>
            </form>
            {newsletterMessage && (
              <p className="newsletterMessage" role="status">
                {newsletterMessage}
              </p>
            )}
          </div>
          <img className="newsletterArt" src={newsletterArt} alt="" />
        </div>
      </section>
    </>
  );
}
