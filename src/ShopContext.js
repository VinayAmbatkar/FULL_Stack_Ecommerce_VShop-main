import React, { createContext, useContext, useState } from "react";

function readStoredValue(key, fallback) {
  const value = localStorage.getItem(key);
  if (value === null) return fallback;

  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(`Unable to read saved ${key} data.`, error);
    return fallback;
  }
}

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => readStoredValue("vshop-cart", []));
  const [myList, setMyList] = useState(() => readStoredValue("vshop-my-list", []));
  const [user, setUser] = useState(() => readStoredValue("user", null));
  const [location, setLocation] = useState(
    () => localStorage.getItem("vshop-location") || "India"
  );

  const updateCart = (nextCart) => {
    setCart(nextCart);
    localStorage.setItem("vshop-cart", JSON.stringify(nextCart));
  };

  const clearCart = () => updateCart([]);

  const addToCart = (product, quantity = 1) => {
    if (!product?._id && !product?.id) return;
    const id = product._id || product.id;
    const existing = cart.find((item) => (item._id || item.id) === id);
    updateCart(
      existing
        ? cart.map((item) =>
            (item._id || item.id) === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...cart, { ...product, quantity }]
    );
  };

  const changeQuantity = (id, quantity) => {
    if (quantity < 1) {
      updateCart(cart.filter((item) => (item._id || item.id) !== id));
      return;
    }
    updateCart(
      cart.map((item) =>
        (item._id || item.id) === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) =>
    updateCart(cart.filter((item) => (item._id || item.id) !== id));

  const updateMyList = (nextList) => {
    setMyList(nextList);
    localStorage.setItem("vshop-my-list", JSON.stringify(nextList));
  };

  const toggleMyList = (product) => {
    if (!product?._id && !product?.id) return;
    const id = product._id || product.id;
    const exists = myList.some((item) => (item._id || item.id) === id);
    updateMyList(
      exists
        ? myList.filter((item) => (item._id || item.id) !== id)
        : [...myList, product]
    );
  };

  const saveUser = (nextUser) => {
    setUser(nextUser);
    if (nextUser) localStorage.setItem("user", JSON.stringify(nextUser));
    else localStorage.removeItem("user");
  };

  const saveLocation = (nextLocation) => {
    setLocation(nextLocation);
    localStorage.setItem("vshop-location", nextLocation);
  };

  const value = {
    cart,
    myList,
    user,
    location,
    cartCount: cart.reduce((count, item) => count + (item.quantity || 1), 0),
    cartTotal: cart.reduce(
      (total, item) => total + (Number(item.price) || 0) * (item.quantity || 1),
      0
    ),
    addToCart,
    clearCart,
    changeQuantity,
    removeFromCart,
    toggleMyList,
    saveUser,
    saveLocation,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
}
