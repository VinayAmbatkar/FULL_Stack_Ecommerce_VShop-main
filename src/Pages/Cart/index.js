import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useShop } from "../../ShopContext";
import { formatPrice, getProductImage } from "../../api";
import emptyCartImage from "../../assets/images/emptycart.gif";

export default function Cart() {
  const { cart, cartTotal, changeQuantity, removeFromCart } = useShop();

  return (
    <section className="storePageSection cartPage buildCartPage">
      <div className="container">
        <div className="storeBreadcrumb">Home <span>/</span> Your Cart</div>
        <div className="storeListingHeading">
          <div>
            <span className="eyebrow">Review your items</span>
            <h1>Your Cart</h1>
            <p>{cart.length} products in your cart</p>
          </div>
        </div>

        {cart.length ? (
          <div className="cartLayout">
            <div className="cartItems">
              {cart.map((item) => {
                const id = item._id || item.id;
                const quantity = item.quantity || 1;
                return (
                  <article className="cartItem" key={id}>
                    <Link to={`/product/${id}`} className="cartItemImage">
                      <img src={getProductImage(item)} alt={item.name} />
                    </Link>
                    <div className="cartItemDescription">
                      <Link to={`/product/${id}`}>{item.name}</Link>
                      <span>{item.brand || item.catName || "VShop product"}</span>
                      <strong>{formatPrice(item.price)}</strong>
                    </div>
                    <div className="cartQuantity">
                      <button
                        type="button"
                        onClick={() => changeQuantity(id, quantity - 1)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(id, quantity + 1)}
                        disabled={quantity >= (Number(item.countInStock) || 1)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <strong className="cartSubtotal">
                      {formatPrice((Number(item.price) || 0) * quantity)}
                    </strong>
                    <button
                      type="button"
                      className="cartRemove"
                      onClick={() => removeFromCart(id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <IoCloseOutline />
                    </button>
                  </article>
                );
              })}
            </div>
            <aside className="cartSummary">
              <h2>CART TOTALS</h2>
              <div className="cartSummaryRow">
                <span>Subtotal</span><strong>{formatPrice(cartTotal)}</strong>
              </div>
              <div className="cartSummaryRow">
                <span>Shipping</span><strong>Free</strong>
              </div>
              <div className="cartSummaryRow cartGrandTotal">
                <span>Total</span><strong>{formatPrice(cartTotal)}</strong>
              </div>
              <Button component={Link} to="/checkout" className="btn-blue btn-round">
                Checkout
              </Button>
              <Link className="continueShoppingLink" to="/">Continue shopping</Link>
            </aside>
          </div>
        ) : (
          <div className="storeEmptyState emptyCartState">
            <img src={emptyCartImage} alt="" />
            <h2>Your Cart is currently empty</h2>
            <p>Looks like you haven’t added anything to your cart yet.</p>
            <Button component={Link} to="/" className="btn-blue btn-round">
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
