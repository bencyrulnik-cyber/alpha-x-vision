import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Majestic mountain landscape at golden hour"
          width={1545}
          height={1088}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/40 via-transparent to-deep-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-serif font-light text-primary-foreground transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Investing in
          <br />
          <em className="not-italic font-light">tomorrow's legacy.</em>
        </h1>
      </div>

      {/* Location Bar */}
      <div className="absolute bottom-0 left-0 right-0 py-6 px-6 md:px-12">
        <div className="container mx-auto flex justify-center gap-8 md:gap-16">
          <div
            className={`flex items-center gap-8 md:gap-12 text-primary-foreground/80 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-sm tracking-[0.2em] font-light">ABU DHABI</span>
            <span className="text-xs opacity-50">•</span>
            <span className="text-sm tracking-[0.2em] font-light">NEW YORK</span>
            <span className="text-xs opacity-50">•</span>
            <span className="text-sm tracking-[0.2em] font-light">LONDON</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
