import SectionTitle from "./SectionTitle";
import { topSellingPlants } from "../data/products";
import { useState } from "react";

const TopCard = ({ image, emoji, name, sub, price, onAdd }) => {
  const [added, setAdded] = useState(false);

  const handle = () => {
    setAdded(true);
    onAdd?.();
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-flora-card border border-flora-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-flora-green/25 group">
      
      {/* Image Area */}
      <div className="h-44 bg-flora-bg3 flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
            {emoji}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-3.5">
        <h3 className="font-semibold text-sm text-white mb-0.5">{name}</h3>
        <p className="text-flora-muted text-xs mb-3">{sub}</p>
        <div className="flex justify-between items-center">
          <span className="text-flora-green font-bold text-base">₹{price}</span>
          <button
            onClick={handle}
            className={`rounded-md w-7 h-7 flex items-center justify-center text-sm font-bold border-none cursor-pointer transition-all duration-200 ${
              added ? "bg-flora-glow text-white" : "bg-flora-green hover:bg-flora-glow text-white"
            }`}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

const SeeAllBtn = () => (
  <button className="border border-flora-border text-flora-muted rounded-full px-6 py-2.5 text-sm cursor-pointer hover:border-flora-green hover:text-flora-green transition-all duration-200 bg-transparent whitespace-nowrap">
    View All →
  </button>
);

const TopSelling = ({ onAdd }) => (
  <section id="topselling" className="bg-flora-bg2" style={{ padding: "80px 60px" }}>
    <SectionTitle
      label="Best sellers"
      title="Our Top Selling Plants"
      subtitle="Plants that customers keep coming back for — proven, popular, and thriving."
      right={<SeeAllBtn />}
    />
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {topSellingPlants.map((p) => (
        <TopCard key={p.id} {...p} onAdd={onAdd} />
      ))}
    </div>
  </section>
);

export default TopSelling;