import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Dark Hero Header ── */}
      <div className="bg-[#163A22] pb-24 text-center pb-24 rounded-b-[40px] shadow-lg mb-10">
        <Navbar activePage="services" />
        <section className="px-6 pt-16 md:px-8">
          <div className="animate-fade-rise mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="animate-fade-rise-delay mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Complete real estate solutions from land selection to ownership —
              tailored for your investment goals.
            </p>
            <div className="animate-fade-rise-delay mt-8 flex justify-center">
              <Link to="/#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20">
                &larr; Back to Main Services Section
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── Services Grid ── */}
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-card border border-border px-8 py-14 text-center shadow-lg md:px-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Get in Touch
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Ready to Start Your Land Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Our experts are here to guide you from the first enquiry to the
              final registration. Let's find the perfect land for your vision.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+919490908639"
                 className="inline-block rounded-lg bg-primary py-3 px-8 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-deep hover:shadow-[0_0_20px_hsl(42_47%_54%/0.3)]"
              >
                Call Us Now
              </a>
              <Link
                to="/book-visit"
                className="inline-block rounded-lg border border-border py-3 px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Book a Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
