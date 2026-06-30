import { useState } from "react";

const PlantCard = ({ image, emoji, name, type, price, oldPrice, badge, badgeColor, onAdd }) => {
  const [wished, setWished] = useState(false);
  const [added, setAdded]   = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAdd?.();
    setTimeout(() => setAdded(false), 1200);
  };

  const badgeClass = {
    pink:   "bg-flora-pink",
    green:  "bg-flora-green",
    orange: "bg-orange-500",
  }[badgeColor] || "bg-flora-pink";

  return (
    <div className="bg-flora-card border border-flora-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-flora-green/30 group">

      {/* ── Image Area ── */}
      <div className="relative h-52 bg-flora-bg3 flex items-center justify-center overflow-hidden">

        {/* Real image OR emoji fallback */}
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-8xl transition-transform duration-500 group-hover:scale-110">
            {emoji}
          </span>
        )}

        {/* Badge — Trending / New / Sale */}
        {badge && (
          <span
            className={`absolute top-3 left-3 ${badgeClass} text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide`}
          >
            {badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setWished(!wished);
          }}
          className={`absolute top-3 right-3 bg-flora-bg/70 backdrop-blur-sm border-none rounded-full w-9 h-9 flex items-center justify-center cursor-pointer text-base transition-all duration-200 ${
            wished
              ? "text-flora-pink"
              : "text-flora-muted hover:text-flora-pink"
          }`}
        >
          {wished ? "♥" : "♡"}
        </button>
      </div>

      {/* ── Card Body ── */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-1">{name}</h3>
        <p className="text-flora-muted text-xs mb-3">{type}</p>

        <div className="flex justify-between items-center">

          {/* Price */}
          <div className="font-playfair text-flora-green font-bold text-lg">
            {oldPrice && (
              <span className="text-flora-muted text-xs font-normal line-through mr-1.5 font-inter">
                ₹{oldPrice}
              </span>
            )}
            ₹{price}
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAdd}
            className={`border rounded-lg px-3 py-2 text-xs font-semibold cursor-pointer transition-all duration-200 ${
              added
                ? "bg-flora-green border-flora-green text-white"
                : "bg-flora-green/15 border-flora-green/30 text-flora-green hover:bg-flora-green hover:text-white hover:border-flora-green"
            }`}
          >
            {added ? "✓ Added" : "+ Add"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default PlantCard;