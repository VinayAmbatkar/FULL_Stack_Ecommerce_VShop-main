import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Searchbox() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();
    const value = query.trim();
    if (value) navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <form className="storeSearch" onSubmit={search} role="search">
      <input
        aria-label="Search for products"
        placeholder="Search for products..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit" aria-label="Search">
        <IoSearchOutline />
      </button>
    </form>
  );
}
