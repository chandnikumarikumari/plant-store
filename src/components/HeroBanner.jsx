
import Button from "./Button";
import { useEffect, useRef } from "react";

const heroPlantImg = "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600";

const HeroBanner = () => {
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => ref.current?.classList.add("opacity-100", "translate-y-0"), 100);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ padding: "120px 60px 80px" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(76,175,80,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="flex-1 max-w-xl relative z-10 opacity-0 translate-y-8 transition-all duration-700"
      >
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-flora-green/10 border border-flora-green/25 rounded-full px-4 py-1.5 text-xs font-semibold text-flora-green uppercase tracking-widest mb-7">
          <span className="w-1.5 h-1.5 bg-flora-green rounded-full animate-pulse"></span>
          🌿 For Your Desks &amp; Decorations
        </div>

        <h1
          className="font-playfair font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)" }}
        >
          Earth's <span className="text-flora-green">Exhale</span>,<br />
          Your Indoor Sanctuary
        </h1>

        <p className="text-flora-muted text-base leading-relaxed max-w-md mb-10">
          Handpicked indoor plants that purify your air, calm your mind, and bring
          the living world into every room. Delivered fresh, thriving, and loved.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button
            onClick={() =>
              document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Plants
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              document.getElementById("o2")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our O₂ Range
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-14 flex-wrap">
          {[
            { num: "2,400+", label: "Plants Delivered" },
            { num: "98%", label: "Satisfaction Rate" },
            { num: "150+", label: "Plant Varieties" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-playfair text-3xl font-bold">{s.num}</span>
              <span className="text-flora-muted text-xs mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className="flex-1 justify-center items-center relative z-10 hidden md:flex">
        <div className="relative w-96 h-96">
          <div
            className="absolute inset-0 rounded-full border border-flora-green/15 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute inset-8 rounded-full border border-flora-green/10 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
          <div
            className="absolute inset-10 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: "radial-gradient(circle, rgba(76,175,80,0.15) 0%, transparent 70%)",
            }}
          >
            <img
              src={heroPlantImg}
              alt="Hero Plant"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute top-10 -right-4 bg-flora-card border border-flora-border rounded-xl px-4 py-2.5 text-xs font-semibold text-flora-green">
            🌱 Air Purifier
          </div>
          <div className="absolute bottom-14 -left-8 bg-flora-card border border-flora-border rounded-xl px-4 py-2.5">
            <div className="text-flora-muted text-xs">Monstera Deliciosa</div>
            <div className="text-flora-green font-playfair text-base font-bold">₹ 299</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;