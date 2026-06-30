const Footer = () => (
  <footer className="bg-flora-bg2 border-t border-flora-border" style={{padding:"60px 60px 30px"}}>
    
    {/* Newsletter */}
    <div className="bg-flora-bg3 border border-flora-border rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10 mb-16 flex-wrap" style={{padding:"56px 60px"}}>
      <div>
        <span className="text-flora-green text-xs font-semibold uppercase tracking-widest mb-2 block">✦ For Every Update</span>
        <h2 className="font-playfair font-bold" style={{fontSize:"clamp(1.4rem,2.5vw,2rem)"}}>
          Get the freshest plant<br/>
          <span className="text-flora-green">drops in your inbox</span>
        </h2>
      </div>
      <div className="flex flex-1 max-w-sm min-w-64">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-flora-bg border border-flora-border border-r-0 rounded-l-full px-5 py-3 text-white text-sm outline-none font-inter placeholder-flora-muted focus:border-flora-green"
        />
        <button className="bg-flora-green hover:bg-flora-glow text-white border-none rounded-r-full px-6 py-3 text-sm font-semibold cursor-pointer transition-colors whitespace-nowrap font-inter">
          Subscribe
        </button>
      </div>
    </div>

    {/* Footer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div>
        <div className="font-playfair text-xl font-bold mb-3">
          Flora<span className="text-flora-green">Vision</span>
        </div>
        <p className="text-flora-muted text-xs leading-relaxed mb-6">
          From lush indoor greens to vibrant flowering plants — FloraVision brings nature's finest to your doorstep, with love and care in every leaf.
        </p>
        <div className="flex gap-2.5">
          {["📸","📘","🐦","▶️"].map((icon,i) => (
            <a key={i} href="#" className="bg-flora-card border border-flora-border rounded-lg w-9 h-9 flex items-center justify-center text-sm hover:bg-flora-green hover:border-flora-green transition-all duration-200 no-underline">
              {icon}
            </a>
          ))}
        </div>
      </div>

      {[
        { title:"Quick Links",    links:["Home","Trending","Shop","Reviews","O₂ Plants"] },
        { title:"Types Of Plant's", links:["Indoor Plants","O₂ Plants","Desk Plants","Flowering Plants","Succulents"] },
        { title:"Contact",        links:["Privacy Policy","Terms of Service","Shipping Policy","Return Policy","Contact Us"] },
      ].map(col => (
        <div key={col.title}>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">{col.title}</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {col.links.map(l => (
              <li key={l}><a href="#" className="text-flora-muted text-xs hover:text-flora-green transition-colors no-underline">{l}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom */}
    <div className="border-t border-flora-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <p className="text-flora-muted text-xs">© FloraVision — All rights reserved 2026</p>
      <div className="flex gap-6">
        {["Privacy","Terms","Cookies"].map(l => (
          <a key={l} href="#" className="text-flora-muted text-xs hover:text-flora-green transition-colors no-underline">{l}</a>
        ))}
      </div>
    </div>
  </footer>
);
export default Footer;