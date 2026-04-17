import { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Linkedin } from "lucide-react";
const ContactSection = () => {
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
  return <section id="contact" className="py-24 md:py-32 bg-deep-charcoal text-primary-foreground" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left - CTA */}
          <div className={`space-y-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-sm tracking-[0.2em] text-primary-foreground/60">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Let's explore
              <br />
              <em>what's possible.</em>
            </h2>
            <p className="text-primary-foreground/70 font-light max-w-md leading-relaxed">
              We welcome conversations with founders, partners, and visionaries
              building the future. Reach out to begin a dialogue.
            </p>
            <a href="mailto:office@alphaxholding.com" className="flex items-center gap-3 text-sm tracking-wide border-b border-primary-foreground/30 pb-2 hover:border-primary-foreground transition-colors group w-fit my-[15px]">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              office@alphaxholding.com
            </a>
            <div className="flex items-center gap-4 -mt-4 mx-0 my-[12px]">
              <a href="https://www.linkedin.com/company/alphax-holding/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-70 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/alphaxholding" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Locations */}
          <div className={`space-y-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{
          transitionDelay: "200ms"
        }}>
            <p className="text-sm tracking-[0.2em] text-primary-foreground/60">
              OUR OFFICES
            </p>

            <div className="space-y-10">
              {/* Abu Dhabi */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-serif mb-2">Abu Dhabi</h4>
                  <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">
                    Al Maryah Island, Al Maqam Tower   <br />
                    Abu Dhabi Global Market<br />
                    United Arab Emirates
                  </p>
                </div>
              </div>

              {/* New York */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-serif mb-2">New York</h4>
                  <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">
                    Park Avenue<br />
                    Manhattan, NY 10022<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;