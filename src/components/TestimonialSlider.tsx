import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, MapPin } from "lucide-react";
import { reviews } from "@/data/reviews";

const TestimonialSlider = () => {
  // Use align: 'center' so the active card is centered, especially on mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  // Auto-slide logic
  useEffect(() => {
    if (!emblaApi) return;
    
    // Auto-slide every 2 seconds (faster speed)
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="w-full relative cursor-grab active:cursor-grabbing pt-4">
      <div className="overflow-hidden -my-14 py-14" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              // Fixed-ish widths preventing stretching. 
              // Mobile: almost full width but fixed max. Tablet: 50%. Desktop: 33% but capped to ensure modern proportions.
              className="pl-4 md:pl-6 flex-[0_0_92%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="h-full flex flex-col justify-between min-h-[320px] max-w-[400px] mx-auto rounded-2xl bg-white/70 backdrop-blur-md border-[2px] border-[#C9A24D]/50 p-8 shadow-md transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(201,162,77,0.3)] hover:border-[#C9A24D] relative overflow-hidden">
                
                {/* Content Container */}
                <div className="flex flex-col items-center text-center h-full">
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#C9A24D" color="#C9A24D" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-base sm:text-lg leading-relaxed text-muted-foreground italic drop-shadow-sm line-clamp-6">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Author Details */}
                  <div className="mt-8 pt-6 border-t border-neutral-200/50 w-full">
                    <h4 className="font-serif text-xl tracking-wide text-foreground">
                      {review.name}
                    </h4>
                    {review.location && (
                      <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mt-2">
                        <MapPin size={14} className="text-muted-foreground/80" />
                        {review.location}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
