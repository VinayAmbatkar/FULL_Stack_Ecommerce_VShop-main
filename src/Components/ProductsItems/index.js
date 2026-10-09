import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatPrice, getProductImage } from "../../api";
import { useShop } from "../../ShopContext";

export default function ProductsItem({ product, itemView = "four" }) {
  const { addToCart, myList, toggleMyList } = useShop();
  if (!product) return null;

  const id = product._id || product.id;
  const price = Number(product.price) || 0;
  const oldPrice = Number(product.oldPrice) || 0;
  const discount =
    Number(product.discount) ||
    (oldPrice > price && oldPrice > 0
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0);
  const isSaved = myList.some((item) => (item._id || item.id) === id);
  const stock = Number(product.countInStock) || 0;

  return (
    <article className={`productItem buildProductItem ${itemView}`}>
      <div className="productImageFrame">
        <Link to={`/product/${id}`} className="productImageLink">
          <img src={getProductImage(product)} alt={product.name || "Product"} />
        </Link>
        {discount > 0 && <span className="productDiscount">{discount}%</span>}
        <button
          className={`productWishlistButton${isSaved ? " isSaved" : ""}`}
          type="button"
          onClick={() => toggleMyList(product)}
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isSaved}
        >
          <FaRegHeart />
        </button>
      </div>
      <div className="productCardInfo">
        <Link to={`/product/${id}`} className="productTitle">
          {product.name}
        </Link>
        <span className={stock > 0 ? "productStock" : "productStock outOfStock"}>
          {stock > 0 ? "In Stock" : "Out of stock"}
        </span>
        <Rating
          name={`rating-${id}`}
          value={Number(product.rating) || 0}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="productPriceRow">
          {oldPrice > price && (
            <span className="productOldPrice">{formatPrice(oldPrice)}</span>
          )}
          <strong>{formatPrice(price)}</strong>
        </div>
        <Button
          className="productAddButton"
          onClick={() => addToCart(product)}
          disabled={stock < 1}
          aria-label={`Add ${product.name} to cart`}
        >
          <FaCartPlus />
          <span>Add to cart</span>
        </Button>
      </div>
    </article>
  );
}
