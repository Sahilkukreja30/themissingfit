import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import DressCard from "./DressCard";
import DressDetailModal from "./DressDetailModal";
import axios from "axios";

const API = "http://localhost:3000/api/v1/dress";

const CollectionSection = () => {
  const [dresses, setDresses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDress, setSelectedDress] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DRESSES ================= */
  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const res = await axios.get(API);
        setDresses(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch dresses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDresses();
  }, []);

  /* ================= DYNAMIC CATEGORIES ================= */
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(dresses.map((d) => d.category))
    );

    return [
      { id: "all", name: "All" },
      ...uniqueCategories.map((cat) => ({
        id: cat,
        name: cat,
      })),
    ];
  }, [dresses]);

  /* ================= FILTERED DRESSES ================= */
  const filteredDresses =
    activeCategory === "all"
      ? dresses
      : dresses.filter((d) => d.category === activeCategory);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">Loading collection...</p>
      </section>
    );
  }

  return (
    <section id="collection" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our <span className="text-gradient-gold">Curated Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From timeless traditional wear to contemporary Indo-western pieces,
            discover outfits that make every moment memorable.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "gold" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Dress Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredDresses.map((dress) => (
            <DressCard
              key={dress._id}
              dress={dress}
              onViewDetails={setSelectedDress}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredDresses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No dresses found in this category.
            </p>
          </div>
        )}

        {/* Dress Detail Modal */}
        <DressDetailModal
          dress={selectedDress}
          isOpen={!!selectedDress}
          onClose={() => setSelectedDress(null)}
        />
      </div>
    </section>
  );
};

export default CollectionSection;
