import { useState, useEffect } from "react";

const Navbar = ({ cartCount = 3 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "trending", "topselling", "reviews", "o2"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) setActiveSection(id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { label: "Home", id: "hero" },
    { label: "Trending", id: "trending" },
    { label: "Shop", id: "topselling" },
    { label: "Reviews", id: "reviews" },
    { label: "O₂ Plants", id: "o2" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-flora-bg/85 backdrop-blur-md border-b border-flora-border"
        style={{ padding: "18px 60px" }}
      >
        <div className="font-playfair text-2xl font-bold tracking-tight">
          Flora<span className="text-flora-green">Vision</span>
        </div>

        <ul className="hidden md:flex gap-9 list-none">
          {links.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => scrollTo(l.id)}
                className={`text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  activeSection === l.id ? "text-flora-green" : "text-flora-muted hover:text-white"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="hidden md:block bg-transparent border-none text-flora-muted hover:text-white cursor-pointer text-lg transition-colors"
          >
            🔍
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative bg-flora-green hover:bg-flora-glow text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer border-none transition-colors text-base"
          >
            🛒
            <span className="absolute -top-1 -right-1 bg-flora-pink text-white rounded-full w-4 h-4 text-xs flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden md:block bg-transparent border-none text-flora-muted hover:text-white cursor-pointer text-lg transition-colors"
          >
            👤
          </button>

          <button
            type="button"
            aria-label="Menu"
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white rounded transition-all"></span>
            <span className="block w-6 h-0.5 bg-white rounded transition-all"></span>
            <span className="block w-6 h-0.5 bg-white rounded transition-all"></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[70px] left-0 right-0 z-40 bg-flora-bg2 border-b border-flora-border flex flex-col gap-5 px-8 py-6">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollTo(l.id)}
              className="text-left text-base font-medium text-flora-muted hover:text-flora-green bg-transparent border-none cursor-pointer transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;