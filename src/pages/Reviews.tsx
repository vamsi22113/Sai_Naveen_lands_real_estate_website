import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/TestimonialSlider";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ── Dark Hero Header ── */}
      <div className="bg-[#163A22] pb-16 text-center rounded-b-[40px] shadow-lg mb-10">
        <Navbar activePage="reviews" />
        
        <section className="px-6 pt-16 md:px-8">
          <div className="animate-fade-rise mx-auto max-w-3xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A24D]">
              Testimonials
            </span>
            <h1 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl drop-shadow-sm">
              What Our Clients Say
            </h1>
            <p className="animate-fade-rise-delay mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Trusted by investors and families across premium locations. Read about their experiences working with Sai Naveen Lands.
            </p>
          </div>
        </section>
      </div>

      {/* ── Main Content Area ── */}
      <main className="flex-1 px-6 pb-24 md:px-8 max-w-7xl mx-auto w-full flex flex-col justify-center">

        {/* Slider Section */}
        <section className="animate-fade-rise-delay w-full">
          <TestimonialSlider />
        </section>

      </main>
    </div>
  );
};

export default Reviews;
