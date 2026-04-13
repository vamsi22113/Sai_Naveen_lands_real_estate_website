import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle } from "lucide-react";
import { places } from "@/data/places";
import Navbar from "@/components/Navbar";

const PlaceDetail = () => {
  const { slug } = useParams();
  const place = places.find((p) => p.slug === slug);

  if (!place) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Place not found</h1>
          <Link to="/#places" className="mt-4 inline-block text-primary underline">Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <Link to="/#places" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Places
          </Link>
          <h1 className="font-serif text-4xl text-white sm:text-6xl drop-shadow-lg">{place.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-white/80">
            <MapPin size={16} /> {place.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-foreground">About This Location</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{place.description}</p>

            <h3 className="mt-10 font-serif text-xl text-foreground">Highlights</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {place.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-secondary shrink-0" /> {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-lg h-fit">
            <Link
              to="/book-visit"
              className="mt-6 block w-full rounded-lg bg-primary py-3 text-center text-sm font-medium text-primary-foreground transition-all hover:bg-primary-deep hover:shadow-[0_0_20px_hsl(42_47%_54%/0.3)]"
            >
              Book Site Visit
            </Link>
            <a
              href="tel:+919490908639"
              className="mt-3 block w-full rounded-lg border border-border py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
