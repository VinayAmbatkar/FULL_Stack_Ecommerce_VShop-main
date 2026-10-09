import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Listing from "../Listing";
import { apiRequest, formatPrice, getProductImage } from "../../api";
import { useShop } from "../../ShopContext";
import myListImage from "../../assets/images/mylist.gif";

export function SearchPage() {
  const [params] = useSearchParams();
  return (
    <div className="storeSearchPage">
      <Listing key={`${params.get("q") || ""}-${params.get("category") || ""}`} />
    </div>
  );
}

export function MyListPage() {
  const { myList, toggleMyList, addToCart } = useShop();

  return (
    <section className="storePageSection">
      <div className="container">
        <div className="storeBreadcrumb">Home <span>/</span> My List</div>
        <div className="storeListingHeading">
          <div>
            <span className="eyebrow">Saved for later</span>
            <h1>My List</h1>
            <p>{myList.length} products in your My List</p>
          </div>
        </div>
        {myList.length ? (
          <div className="storeProductGrid">
            {myList.map((product) => (
              <div className="wishlistProduct" key={product._id || product.id}>
                <button
                  type="button"
                  className="wishlistRemove"
                  onClick={() => toggleMyList(product)}
                  aria-label={`Remove ${product.name} from My List`}
                >
                  ×
                </button>
                <Link to={`/product/${product._id || product.id}`}>
                  <img src={getProductImage(product)} alt={product.name} />
                  <h2>{product.name}</h2>
                </Link>
                <strong>{formatPrice(product.price)}</strong>
                <Button
                  className="btn-blue btn-round"
                  onClick={() => addToCart(product)}
                  disabled={!Number(product.countInStock)}
                >
                  Add to cart
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="storeEmptyState">
            <img className="emptyMyListImage" src={myListImage} alt="" />
            <span aria-hidden="true">♡</span>
            <h2>My List is currently empty</h2>
            <p>Save your favourite products and they will show up here.</p>
            <Button component={Link} to="/" className="btn-blue btn-round">
              Continue shopping
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export function CheckoutPage() {
  const { cart, cartTotal, clearCart, user } = useShop();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phoneNumber: user?.phone || "",
    address: "",
    pincode: "",
    paymentMethod: "COD",
  });

  const update = (event) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const placeOrder = async (event) => {
    event.preventDefault();
    setError("");
    if (!user) {
      navigate("/signIn");
      return;
    }
    if (!cart.length) {
      setError("Your cart is empty.");
      return;
    }

    setSubmitting(true);
    try {
      await apiRequest("/api/orders/create", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          amount: String(cartTotal),
          paymentId: form.paymentMethod,
          userid: user._id || user.id,
          products: cart.map((item) => ({
            productId: item._id || item.id,
            productTitle: item.name,
            quantity: item.quantity || 1,
            price: Number(item.price) || 0,
            image: getProductImage(item),
            subTotal: (Number(item.price) || 0) * (item.quantity || 1),
          })),
        }),
      });
      clearCart();
      navigate("/orders");
    } catch (requestError) {
      console.error("Unable to place order.", requestError);
      setError(`Your order could not be placed: ${requestError.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="storePageSection">
      <div className="container">
        <div className="storeBreadcrumb">Home <span>/</span> Checkout</div>
        <div className="storeListingHeading">
          <div>
            <span className="eyebrow">Almost yours</span>
            <h1>Checkout</h1>
          </div>
        </div>
        {error && <div className="storeError" role="alert">{error}</div>}
        {!user && (
          <p className="checkoutLoginNotice">
            Please <Link to="/signIn">sign in</Link> to place your order.
          </p>
        )}
        <form className="checkoutLayout" onSubmit={placeOrder}>
          <div className="checkoutForm">
            <h2>BILLING DETAILS</h2>
            {[
              ["name", "Full name", "text"],
              ["email", "Email address", "email"],
              ["phoneNumber", "Phone number", "tel"],
              ["address", "Street address", "text"],
              ["pincode", "PIN code", "text"],
            ].map(([name, label, type]) => (
              <label key={name}>
                {label} *
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={update}
                  required
                />
              </label>
            ))}
            <fieldset className="paymentOptions">
              <legend>Payment Method</legend>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={form.paymentMethod === "COD"}
                  onChange={update}
                />
                Cash on delivery
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online Payment"
                  disabled
                />
                Online payment (not configured)
              </label>
            </fieldset>
          </div>
          <aside className="checkoutSummary">
            <h2>YOUR ORDER</h2>
            {cart.map((item) => (
              <div className="checkoutSummaryRow" key={item._id || item.id}>
                <span>{item.name} × {item.quantity || 1}</span>
                <strong>{formatPrice((Number(item.price) || 0) * (item.quantity || 1))}</strong>
              </div>
            ))}
            <div className="checkoutSummaryRow checkoutTotal">
              <span>Total:</span><strong>{formatPrice(cartTotal)}</strong>
            </div>
            <Button
              type="submit"
              className="btn-blue btn-round"
              disabled={submitting || cart.length === 0}
            >
              {submitting ? "Placing order…" : "Place Order"}
            </Button>
          </aside>
        </form>
      </div>
    </section>
  );
}

export function OrdersPage() {
  const { user } = useShop();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(Boolean(user));

  useEffect(() => {
    if (!user) return undefined;
    let active = true;
    apiRequest(`/api/orders?userid=${encodeURIComponent(user._id || user.id)}`)
      .then((result) => {
        if (active) setOrders(Array.isArray(result) ? result : []);
      })
      .catch((requestError) => {
        if (!active) return;
        console.error("Unable to load orders.", requestError);
        setError(requestError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [user]);

  return (
    <section className="storePageSection">
      <div className="container">
        <div className="storeBreadcrumb">Home <span>/</span> Orders</div>
        <div className="storeListingHeading">
          <div><span className="eyebrow">Your purchases</span><h1>Orders</h1></div>
        </div>
        {!user ? (
          <div className="storeEmptyState">
            <h2>Sign in to view your orders</h2>
            <Button component={Link} to="/signIn" className="btn-blue btn-round">Sign In</Button>
          </div>
        ) : loading ? (
          <p className="storeEmptyHint">Loading orders…</p>
        ) : error ? (
          <div className="storeError" role="alert">Orders could not be loaded: {error}</div>
        ) : orders.length ? (
          <div className="orderList">
            {orders.map((order) => (
              <article className="orderCard" key={order._id || order.id}>
                <div>
                  <span>Order Id</span>
                  <strong>{order._id || order.id}</strong>
                </div>
                <div><span>Order Status</span><strong>{order.status || "Pending"}</strong></div>
                <div><span>Total Amount</span><strong>{formatPrice(order.amount)}</strong></div>
                <div><span>Address</span><strong>{order.address}, {order.pincode}</strong></div>
                {(order.products || []).map((product) => (
                  <div className="orderProduct" key={product.productId}>
                    {product.productTitle} × {product.quantity}
                  </div>
                ))}
              </article>
            ))}
          </div>
        ) : (
          <div className="storeEmptyState">
            <h2>No orders yet</h2>
            <p>Your placed orders will appear here.</p>
            <Button component={Link} to="/" className="btn-blue btn-round">Start shopping</Button>
          </div>
        )}
      </div>
    </section>
  );
}

export function AccountPage() {
  const { user, saveUser } = useShop();
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPass: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const logout = () => {
    saveUser(null);
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  const changePassword = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    if (passwordForm.newPass !== passwordForm.confirmPassword) {
      setError("Password and confirmation do not match.");
      return;
    }
    try {
      await apiRequest(`/api/user/changePassword/${encodeURIComponent(user._id || user.id)}`, {
        method: "PUT",
        body: JSON.stringify({
          password: passwordForm.oldPassword,
          newPass: passwordForm.newPass,
          name: user.name,
          phone: user.phone,
          email: user.email,
        }),
      });
      setMessage("Password updated.");
      setPasswordForm({ oldPassword: "", newPass: "", confirmPassword: "" });
    } catch (requestError) {
      console.error("Unable to change password.", requestError);
      setError(requestError.message);
    }
  };

  return (
    <section className="storePageSection">
      <div className="container">
        <div className="storeBreadcrumb">Home <span>/</span> My Account</div>
        <div className="storeListingHeading">
          <div><span className="eyebrow">Manage your account</span><h1>My Account</h1></div>
        </div>
        {!user ? (
          <div className="storeEmptyState">
            <h2>Sign in to manage your account</h2>
            <Button component={Link} to="/signIn" className="btn-blue btn-round">Sign In</Button>
          </div>
        ) : (
          <div className="accountLayout">
            <aside className="accountSidebar">
              <strong>{user.name || "VShop customer"}</strong>
              <Link to="/orders">Orders</Link>
              <Link to="/my-list">My List</Link>
              <button type="button" onClick={logout}>Log out</button>
            </aside>
            <div className="accountDetails">
              <h2>Profile</h2>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <h2>Change Password</h2>
              {error && <p className="formError" role="alert">{error}</p>}
              {message && <p className="formSuccess" role="status">{message}</p>}
              <form className="accountPasswordForm" onSubmit={changePassword}>
                {[
                  ["oldPassword", "Old password"],
                  ["newPass", "New password"],
                  ["confirmPassword", "Confirm password"],
                ].map(([name, label]) => (
                  <label key={name}>
                    {label}
                    <input
                      type="password"
                      name={name}
                      value={passwordForm[name]}
                      onChange={(event) =>
                        setPasswordForm((current) => ({
                          ...current,
                          [name]: event.target.value,
                        }))
                      }
                      required
                    />
                  </label>
                ))}
                <Button type="submit" className="btn-blue btn-round">Update password</Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
