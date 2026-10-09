const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:5000" : "");

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const contentType = response.headers.get("content-type") || "";
  const body = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      typeof body === "object" && body !== null
        ? body.message || body.msg
        : body;
    throw new Error(message || `Request failed (${response.status})`);
  }

  return body;
}

export function getProductImage(product) {
  const image = product?.images?.[0] || product?.image;
  return typeof image === "string" && image.trim()
    ? image
    : "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80";
}

export function getProductPrice(product) {
  return Number(product?.price) || 0;
}

export function formatPrice(value) {
  return `Rs ${Number(value || 0).toLocaleString("en-IN")}`;
}
