const SectionTitle = ({ label, title, subtitle, right }) => (
  <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
    <div>
      <span className="text-flora-green text-xs font-semibold uppercase tracking-widest mb-3 block">
        ✦ {label}
      </span>
      <h2 className="font-playfair font-bold leading-tight"
        style={{fontSize:"clamp(1.8rem,3vw,2.6rem)"}}>
        {title}
      </h2>
      {subtitle && <p className="text-flora-muted text-sm leading-relaxed max-w-lg mt-2">{subtitle}</p>}
    </div>
    {right && right}
  </div>
);
export default SectionTitle;