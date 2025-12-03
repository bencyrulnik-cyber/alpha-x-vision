import { useEffect, useRef, useState } from "react";
import { Rocket, Cpu, Heart, Dna, Leaf, Building2, UtensilsCrossed, Gem } from "lucide-react";

// Media logos
import businessInsiderLogo from "@/assets/media/business-insider.png";
import ceoWeeklyLogo from "@/assets/media/ceo-weekly.png";
import benzingaLogo from "@/assets/media/benzinga.png";
import ibtimesLogo from "@/assets/media/ibtimes.png";
import laWeeklyLogo from "@/assets/media/la-weekly.png";
import entrepreneurLogo from "@/assets/media/entrepreneur.png";
import khaleejTimesLogo from "@/assets/media/khaleej-times.png";
import appleNewsLogo from "@/assets/media/apple-news.png";
import nyWeeklyLogo from "@/assets/media/ny-weekly.png";
import forbesLogo from "@/assets/media/forbes.png";
import gulfNewsLogo from "@/assets/media/gulf-news.png";
import marketsInsiderLogo from "@/assets/media/markets-insider.png";

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

        {/* Select Media Section */}
        <div
          className={`mt-24 md:mt-32 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="text-sm tracking-[0.2em] text-muted-foreground mb-8 text-center">
            SELECT MEDIA
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-10 justify-items-center items-center">
            {[
              { name: "Business Insider", logo: businessInsiderLogo, url: "https://markets.businessinsider.com/news/stocks/prabhav-sharma-highlights-the-90-10-rule-of-investments-showcasing-the-power-law-of-wealth-creation-1035188412" },
              { name: "CEO Weekly", logo: ceoWeeklyLogo, url: "https://ceoweekly.com/prabhav-sharma-analyzes-potential-bank-collapses/" },
              { name: "Benzinga", logo: benzingaLogo, url: "https://www.benzinga.com/opinion/23/06/32694882/chatgpt-a-game-changer-for-private-equity-and-venture-capital-investors-featuring-expert-insights-fr" },
              { name: "IB Times", logo: ibtimesLogo, url: "https://www.ibtimes.sg/navigating-rising-interest-rates-prabhav-sharmas-expert-guidance-investors-70436" },
              { name: "LA Weekly", logo: laWeeklyLogo, url: "https://www.laweekly.com/investing-in-business-vs-investing-in-people-prabhav-sharmas-holistic-approach/" },
              { name: "Entrepreneur", logo: entrepreneurLogo, url: "https://www.entrepreneur.com/en-in/news-and-trends/unveiling-the-momentum-investors-flocking-to-us-mid-stage/464113" },
              { name: "Khaleej Times", logo: khaleejTimesLogo, url: "https://www.khaleejtimes.com/kt-network/private-equity-and-venture-capital-investor-prabhav-sharma-illuminates-the-path-of-risk-management-a" },
              { name: "Apple News", logo: appleNewsLogo, url: "https://apple.news/A3ppIjnOCSNyAE-WfhqP-Tw" },
              { name: "NY Weekly", logo: nyWeeklyLogo, url: "https://nyweekly.com/tech/prabhav-sharmas-visionary-understanding-of-ais-global-market-influence-a-butterfly-effect-unleashed/" },
              { name: "Forbes", logo: forbesLogo, url: "https://forbes.ge/en/prabhav-sharma-s-take-on-how-the-2024-u-s-presidential-race-could-impact-private-equity-and-venture-capital-across-the-globe/" },
              { name: "Gulf News", logo: gulfNewsLogo, url: "https://gulfnews.com/business/corporate-news/prabhav-sharma-speaks-on-family-office-20-at-adfo-summit-in-abu-dhabi-1.1718788859888" },
              { name: "Markets Insider", logo: marketsInsiderLogo, url: "https://markets.businessinsider.com/news/stocks/ai-s-impact-on-investment-and-financial-management-strategic-analysis-from-investment-professional-prabhav-sharma-1033513318" },
            ].map((media) => (
              <a
                key={media.name}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={media.logo} 
                  alt={media.name} 
                  className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
