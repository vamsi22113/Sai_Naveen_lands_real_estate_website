import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { Place } from "@/data/places";

interface PlaceCardProps {
  place: Place;
  index: number;
}

const PlaceCard = ({ place, index }: PlaceCardProps) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 25;
    const y = -(e.clientX - rect.left - rect.width / 2) / 25;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onClick={() => navigate(`/places/${place.slug}`)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(0) perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.03 : 1})`
          : "translateY(30px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
        willChange: "transform, opacity",
      }}
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div>
          <h3 className="font-serif text-xl text-foreground">{place.name}</h3>
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={12} />
          {place.location}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {place.shortDescription}
        </p>
        <button className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-deep group-hover:shadow-[0_0_20px_hsl(42_47%_54%/0.3)]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
