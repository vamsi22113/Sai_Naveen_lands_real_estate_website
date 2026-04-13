const HeroSection = () => {
  return (
    <section
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-40 text-center"
      style={{ paddingTop: "calc(8rem - 75px)" }}
    >
      {/* Headline */}
      <h1
        className="animate-fade-rise max-w-7xl font-serif text-5xl font-normal sm:text-7xl md:text-8xl"
        style={{ lineHeight: 0.95, letterSpacing: "-2px" }}
      >
        <span className="text-white drop-shadow-lg">Land. Life. </span>
        <span className="text-secondary drop-shadow-lg">Legacy.</span>
      </h1>

      {/* Description */}
      <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg drop-shadow-sm">
        Own premium land in nature-rich destinations. Secure your future with
        high-growth investment opportunities in scenic hill regions.
      </p>

      {/* CTA */}
      <a
        href="#places"
        className="animate-fade-rise-delay-2 mt-32 sm:mt-40 inline-block rounded-full border border-white/30 bg-white/20 px-14 py-5 text-base text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:scale-[1.03]"
      >
        Explore Places
      </a>
    </section>
  );
};

export default HeroSection;
