import { Link } from "react-router-dom";

const defaults = [
  { name: "Fashion", icon: "👗" },
  { name: "Fruits", icon: "🍓" },
  { name: "Books", icon: "📚" },
  { name: "Grocery", icon: "🛒" },
  { name: "Electronics", icon: "📱" },
  { name: "Beverage", icon: "🥤" },
  { name: "Gym", icon: "🏋️" },
  { name: "Trending Products", icon: "📈" },
];

function flattenCategories(categories) {
  return categories.reduce((items, category) => {
    items.push(category);
    if (Array.isArray(category.children)) {
      items.push(...flattenCategories(category.children));
    }
    return items;
  }, []);
}

export default function HomeCat({ categories = [] }) {
  const items = flattenCategories(categories).slice(0, 8);
  const visibleCategories = items.length ? items : defaults;

  return (
    <section className="featuredCategories">
      <div className="container">
        <h2>FEATURED CATEGORIES</h2>
        <div className="categoryCardRow">
          {visibleCategories.map((category, index) => {
            const name = category.name || category.catName || "Category";
            const id = category._id || category.id || name;
            return (
              <Link
                className="categoryCard"
                to={`/products/category/${encodeURIComponent(id)}`}
                key={id}
              >
                <span className="categoryCardIcon" aria-hidden="true">
                  {category.images?.[0] ? (
                    <img src={category.images[0]} alt="" />
                  ) : (
                    defaults[index % defaults.length].icon
                  )}
                </span>
                <span>{name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
