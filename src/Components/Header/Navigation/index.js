import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  ["Fashion", "👗"],
  ["Fruits", "🍓"],
  ["Books", "📚"],
  ["Grocery", "🛒"],
  ["Electronics", "📱"],
  ["Beverage", "🥤"],
  ["Gym", "🏋️"],
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="storeNavigation">
      <div className="container storeNavigationInner">
        <button
          className="allCategoriesButton"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
        >
          <FaBars />
          <span>All Categories</span>
          <FaChevronDown />
        </button>
        <nav className={`categoryLinks${menuOpen ? " isOpen" : ""}`}>
          {categories.map(([name, icon]) => (
            <Link
              key={name}
              to={`/search?category=${encodeURIComponent(name)}`}
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden="true">{icon}</span>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
