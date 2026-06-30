import Button from "./Button";

const O2Plants = () => (
  <section
    id="o2"
    className="bg-flora-bg2 flex flex-col md:flex-row items-center gap-20"
    style={{ padding: "80px 60px" }}
  >

    {/* ── Left Visual ── */}
    <div className="flex-1 flex justify-center">
      <div
        className="relative w-80 h-80 rounded-full flex items-center justify-center border border-flora-green/10 overflow-hidden"
        style={{ background: "radial-gradient(circle, rgba(76,175,80,0.12) 0%, transparent 70%)" }}
      >
        {/* Plant Image — replace src with your real image */}
        <img
          src="C:\Users\CHANDNI\OneDrive\Pictures\Desktop\plant-store\src\assets\images\o2-plant.png"
          alt="O2 Plant"
          className="w-56 h-56 object-contain"
        />

        {/* O2 Badge */}
        <div className="absolute top-4 -right-2 bg-flora-green text-white rounded-full w-16 h-16 flex flex-col items-center justify-center font-extrabold text-base leading-tight">
          O₂
          <small className="text-xs font-medium opacity-85">Plants</small>
        </div>
      </div>
    </div>

    {/* ── Right Content ── */}
    <div className="flex-1">
      <span className="text-flora-green text-xs font-semibold uppercase tracking-widest mb-3 block">
        ✦ Breathe better
      </span>

      <h2
        className="font-playfair font-bold leading-tight mb-4"
        style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
      >
        Our Best O₂<br />Plant Collection
      </h2>

      <p className="text-flora-muted text-sm leading-relaxed max-w-md mb-6">
        We Have Great And Best O₂ Plants Collections — scientifically proven
        to improve indoor air quality, reduce toxins, and boost focus and mood.
      </p>

      <ul className="flex flex-col gap-3 mb-9">
        {[
          "Removes CO₂ and releases fresh oxygen 24/7",
          "Filters VOCs, benzene, and formaldehyde",
          "Increases humidity naturally in dry rooms",
          "Proven to reduce stress and improve focus",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3 text-flora-muted text-sm">
            <span className="w-5 h-5 rounded-full bg-flora-green/10 text-flora-green text-xs flex items-center justify-center font-bold flex-shrink-0">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <Button>Shop O₂ Plants</Button>
    </div>
  </section>
);

export default O2Plants;
