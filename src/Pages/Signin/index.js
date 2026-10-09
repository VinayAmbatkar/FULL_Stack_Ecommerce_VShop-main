import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { apiRequest } from "../../api";
import { useShop } from "../../ShopContext";

export default function SignIn({ initialMode = "signin" }) {
  const [isSignIn, setIsSignIn] = useState(initialMode !== "signup");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { setIsLogin } = useContext(MyContext);
  const { saveUser } = useShop();
  const navigate = useNavigate();

  const update = (event) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    if (!isSignIn && form.password !== form.confirmPassword) {
      setError("Password and confirmation do not match.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await apiRequest(`/api/user/${isSignIn ? "signin" : "signup"}`, {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          password: form.password,
        }),
      });

      if (!result?.user || !result?.token) {
        throw new Error(result?.msg || "The server did not return a valid account.");
      }
      const safeUser = { ...result.user };
      delete safeUser.password;
      saveUser(safeUser);
      localStorage.setItem("token", result.token);
      setIsLogin(true);
      navigate("/");
    } catch (requestError) {
      console.error("Unable to authenticate.", requestError);
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="storePageSection authPage">
      <div className="authCard">
        <span className="eyebrow">Welcome to VShop</span>
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <p>{isSignIn ? "Access your orders and saved items." : "Create an account to start shopping."}</p>
        {error && <div className="storeError" role="alert">{error}</div>}
        <form onSubmit={submit} className="authForm">
          {!isSignIn && (
            <>
              <label>
                Full name
                <input name="name" autoComplete="name" value={form.name} onChange={update} required />
              </label>
              <label>
                Phone number
                <input name="phone" autoComplete="tel" value={form.phone} onChange={update} required />
              </label>
            </>
          )}
          <label>
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update}
              required
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete={isSignIn ? "current-password" : "new-password"}
              value={form.password}
              onChange={update}
              required
            />
          </label>
          {!isSignIn && (
            <label>
              Confirm password
              <input
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={update}
                required
              />
            </label>
          )}
          {isSignIn && <button type="button" className="forgotPasswordLink" disabled>Forgot Password?</button>}
          <Button type="submit" className="btn-blue btn-round authSubmit" disabled={submitting}>
            {submitting ? "Please wait…" : isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
        <p className="authToggle">
          {isSignIn ? "Not Registered?" : "Already have an account?"}{" "}
          <button type="button" onClick={() => setIsSignIn((current) => !current)}>
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
        <div className="socialLoginDivider">Or continue with social account</div>
        <Button className="socialLoginButton" disabled>
          Social sign-in is not configured
        </Button>
        <Link className="backToShop" to="/">Continue shopping</Link>
      </div>
    </section>
  );
}
