import { useState } from "react";
import PlaceCard from "./PlaceCard";
import { places } from "@/data/places";

const locations = ["All", ...new Set(places.map((p) => p.location))];

const PlacesSection = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? places : places.filter((p) => p.location === filter);

  return (
    <section id="places" className="bg-background py-24 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="animate-fade-rise font-serif text-4xl text-foreground sm:text-5xl">
            Explore Our Locations
          </h2>
          <p className="animate-fade-rise-delay mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Discover premium land opportunities in nature-rich hill destinations.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setFilter(loc)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                filter === loc
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((place, i) => (
            <PlaceCard key={place.id} place={place} index={i} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default PlacesSection;
