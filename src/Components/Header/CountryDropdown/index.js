import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useShop } from "../../../ShopContext";

const locations = ["India", "All"];

export default function CountryDropdown() {
  const [open, setOpen] = useState(false);
  const { location, saveLocation } = useShop();

  return (
    <div className="locationPicker">
      <button
        className="locationTrigger"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        <span>
          <small>Your Location</small>
          <strong>{location}</strong>
        </span>
        <FaAngleDown />
      </button>
      {open && (
        <div className="locationMenu">
          <strong>Choose your delivery location</strong>
          <p>Choose a location to see products available in your area.</p>
          {locations.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                saveLocation(value);
                setOpen(false);
              }}
            >
              {value === "All" ? "All locations" : value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
