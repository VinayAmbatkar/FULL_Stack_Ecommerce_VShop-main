import { Link } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";
import { IoPricetagOutline } from "react-icons/io5";
import { TbShoppingBagDiscount, TbTruckDelivery } from "react-icons/tb";

const footerGroups = [
  {
    title: "FRUIT & VEGETABLES",
    links: ["Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Cuts & Sprouts", "Exotic Fruits & Veggies", "Packaged Produce", "Party Trays"],
  },
  {
    title: "BREAKFAST & DAIRY",
    links: ["Milk & Flavoured Milk", "Butter and Margarine", "Cheese", "Eggs", "Honey", "Yogurt"],
  },
  {
    title: "MEAT & SEAFOOD",
    links: ["Fresh Meat", "Chicken", "Fish", "Prawns", "Frozen Seafood"],
  },
  {
    title: "BEVERAGES",
    links: ["Water", "Soft Drinks", "Juices", "Tea & Coffee", "Energy Drinks"],
  },
  {
    title: "BREADS & BAKERY",
    links: ["Bread", "Cakes", "Cookies", "Bakery Snacks", "Breakfast"],
  },
];

export default function Footer() {
  return (
    <footer className="storeFooter">
      <div className="container">
        <div className="footerBenefits">
          <div><GiFruitBowl /><span>Everyday fresh products</span></div>
          <div><TbTruckDelivery /><span>Free delivery for order over $70</span></div>
          <div><TbShoppingBagDiscount /><span>Daily Mega Discounts</span></div>
          <div><IoPricetagOutline /><span>Best price on the market</span></div>
        </div>
        <div className="footerLinkGroups">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((label) => (
                <Link key={label} to={`/search?q=${encodeURIComponent(label)}`}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footerCopyright">
          <span>Developed By Akansha Salwan · All rights reserved.</span>
          <div>
            <Link to="/my-account">My Account</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/my-list">My List</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
