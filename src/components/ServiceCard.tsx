import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
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
      onClick={() => navigate(`/services/${service.slug}`)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(201,162,77,0.3)] hover:border-primary/50 transition-all duration-300 bg-card flex flex-col h-full border border-border"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(0) perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.03 : 1})`
          : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.5s ease`,
        willChange: "transform, opacity",
      }}
    >
      {/* Image */}
      <div className="h-52 shrink-0 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointers-events-none" />
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {service.shortDescription}
          </p>
        </div>
        <button className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-deep group-hover:shadow-[0_0_15px_hsl(42_47%_54%/0.3)]">
          Explore Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
