import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-background pt-24 pb-12 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="animate-fade-rise font-serif text-4xl text-foreground sm:text-5xl">
            Our Services
          </h2>
          <p className="animate-fade-rise-delay mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            From land selection to final registration — end-to-end real estate
            solutions designed for investors and home buyers alike.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/services")}
            className="inline-block rounded-full border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
