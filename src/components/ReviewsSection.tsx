import TestimonialSlider from "@/components/TestimonialSlider";

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-background pt-0 pb-24 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="animate-fade-rise mx-auto max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-secondary">
              Testimonials
            </span>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl md:text-6xl drop-shadow-sm">
              What Our Clients Say
            </h2>
            <p className="animate-fade-rise-delay mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Trusted by investors and families across premium locations. Read about their experiences working with Sai Naveen Lands.
            </p>
            
            {/* Decorative divider */}
            <div className="animate-fade-rise-delay mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-border" />
              <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <div className="h-px w-16 bg-border" />
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="animate-fade-rise-delay w-full">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
