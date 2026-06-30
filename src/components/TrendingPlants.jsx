import SectionTitle from "./SectionTitle";
import PlantCard from "./PlantCard";
import { trendingPlants } from "../data/products";

const SeeAllBtn = () => (
  <button className="border border-flora-border text-flora-muted rounded-full px-6 py-2.5 text-sm cursor-pointer hover:border-flora-green hover:text-flora-green transition-all duration-200 bg-transparent whitespace-nowrap">
    View All →
  </button>
);

const TrendingPlants = ({ onAdd }) => (
  <section id="trending" className="bg-flora-bg" style={{padding:"80px 60px"}}>
    <SectionTitle
      label="Curated for you"
      title="Our Trendy Plants"
      subtitle="The most loved indoor plants, selected for beauty, care ease, and air quality."
      right={<SeeAllBtn />}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {trendingPlants.map(p => <PlantCard key={p.id} {...p} onAdd={onAdd} />)}
    </div>
  </section>
);
export default TrendingPlants;