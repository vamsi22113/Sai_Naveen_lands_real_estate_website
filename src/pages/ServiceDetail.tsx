import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight, Phone, Calendar } from "lucide-react";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Service not found</h1>
          <Link to="/#services" className="mt-4 inline-block text-primary underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO IMAGE ── */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <Link to="/#services" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <h1 className="font-serif text-4xl text-white sm:text-6xl drop-shadow-lg">{service.title}</h1>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">

          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-foreground">About This Service</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.description}</p>

            <h3 className="mt-10 font-serif text-xl text-foreground">Key Benefits</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-serif text-xl text-foreground">Our Process</h3>
            <div className="mt-6 space-y-6">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground">{step.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-lg h-fit">
            <h3 className="font-serif text-2xl text-foreground">Ready to Begin?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Talk to one of our experts today and take the first step toward your land ownership journey.
            </p>
            
            <a
              href="tel:+919490908639"
              className="mt-6 flex w-full justify-center items-center gap-2 rounded-lg bg-primary py-3 text-center text-sm font-medium text-primary-foreground transition-all hover:bg-primary-deep hover:shadow-[0_0_20px_hsl(42_47%_54%/0.3)]"
            >
              <Phone size={16} />
              Call Us Now
            </a>
            
            <Link
              to="/book-visit"
              className="mt-3 flex w-full justify-center items-center gap-2 rounded-lg border border-border py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Calendar size={16} />
              Book Consultation
            </Link>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase">Explore Other Services</p>
              <ul className="mt-3 space-y-2">
                {services.filter(s => s.slug !== service.slug).slice(0, 4).map(s => (
                  <li key={s.id}>
                    <Link to={`/services/${s.slug}`} className="text-sm text-primary hover:underline flex items-center gap-1">
                      <ChevronRight size={14} /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
