import { useEffect, useRef, useState } from "react";
import desertImage from "@/assets/desert-dunes.jpg";
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="about" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <p className={`text-sm tracking-[0.2em] text-muted-foreground mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            OUR PHILOSOPHY
          </p>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>AlphaX Holding is a private investment office bridging innovation with lasting value.<em className="text-accent"> bridging innovation</em> with lasting value.
          </h2>
        </div>

        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={`relative overflow-hidden rounded-sm transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <img src={desertImage} alt="Golden desert dunes at sunset" className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          <div className={`space-y-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              A global perspective with regional roots.
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              With offices in Abu Dhabi and New York, we combine strategic insight
              with deep sector expertise. Our approach is deliberate, patient, and
              focused on partnerships that generate enduring returns.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              We evaluate mid-to-large size deals on a case-by-case basis, seeking
              exceptional opportunities across industries poised to define the future.
            </p>
            <div className="pt-4">
              <span className="inline-block text-xs tracking-[0.15em] text-accent border-b border-accent pb-1 cursor-pointer hover:opacity-70 transition-opacity">
                LEARN MORE ABOUT OUR APPROACH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;