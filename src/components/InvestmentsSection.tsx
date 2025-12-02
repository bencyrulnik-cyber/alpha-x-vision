import { useEffect, useRef, useState } from "react";
import { Rocket, Cpu, Heart, Dna, Leaf, Building2, UtensilsCrossed, Gem } from "lucide-react";

const investmentAreas = [
  {
    icon: Rocket,
    title: "Space & Aerospace",
    description: "Pioneering ventures beyond earth's atmosphere",
  },
  {
    icon: Cpu,
    title: "Deep Tech",
    description: "Foundational technologies reshaping industries",
  },
  {
    icon: Heart,
    title: "Health & Healthtech",
    description: "Advancing human wellness through innovation",
  },
  {
    icon: Dna,
    title: "Biotech & Lifesciences",
    description: "Breakthrough science for better lives",
  },
  {
    icon: Leaf,
    title: "Clean Tech & Energy Transition",
    description: "Sustainable solutions for tomorrow's world",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Strategic properties with enduring value",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    description: "Exceptional experiences, global reach",
  },
  {
    icon: Gem,
    title: "Luxury Goods",
    description: "Heritage brands with timeless appeal",
  },
];

const InvestmentsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="investments" className="py-24 md:py-32 bg-card" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p
            className={`text-sm tracking-[0.2em] text-muted-foreground mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            INVESTMENT FOCUS
          </p>
          <h2
            className={`text-3xl md:text-5xl font-serif text-foreground leading-tight transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Partnering with visionaries across sectors that shape our future.
          </h2>
        </div>

        {/* Investment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {investmentAreas.map((area, index) => (
            <div
              key={area.title}
              className={`bg-card p-8 md:p-10 group hover:bg-secondary/50 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 75}ms` }}
            >
              <area.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-serif text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deal Size Note */}
        <div
          className={`mt-16 md:mt-24 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            We focus on <span className="text-foreground">mid-to-large size deals</span>,
            evaluated on a case-by-case basis with rigorous due diligence and a
            commitment to long-term partnership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
