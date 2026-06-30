import SectionTitle from "./SectionTitle";
import { reviews } from "../data/products";

const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

const CustomerReviews = () => (
  <section id="reviews" className="bg-flora-bg" style={{padding:"80px 60px"}}>
    <SectionTitle
      label="What people say"
      title="Customer Reviews"
      subtitle="Real words from real plant parents who brought nature home."
      right={
        <div className="flex items-center gap-2 text-flora-gold text-sm font-semibold whitespace-nowrap">
          ★★★★★ <span className="text-flora-muted font-normal">4.9 / 5 (824 reviews)</span>
        </div>
      }
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map(r => (
        <div key={r.id} className="bg-flora-card border border-flora-border rounded-2xl p-7 hover:border-flora-green/30 transition-colors duration-300">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-12 h-12 rounded-full bg-flora-bg3 border-2 border-flora-border flex items-center justify-center text-2xl flex-shrink-0">
              {r.avatar}
            </div>
            <div>
              <div className="font-semibold text-sm">{r.name}</div>
              <div className="text-flora-muted text-xs mt-0.5">{r.date}</div>
            </div>
          </div>
          <div className="text-flora-gold text-sm tracking-wider mb-3">{stars(r.rating)}</div>
          <p className="text-flora-muted text-sm leading-relaxed">"{r.text}"</p>
          <div className="text-flora-green text-xs font-semibold mt-4">✓ Verified Purchase</div>
        </div>
      ))}
    </div>
  </section>
);
export default CustomerReviews;