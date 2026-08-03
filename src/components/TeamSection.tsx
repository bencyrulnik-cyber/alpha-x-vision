import { useEffect, useRef, useState } from "react";
import prabhavImg from "@/assets/team/prabhav.jpg";
import khalifaImg from "@/assets/team/khalifa.jpg";
import benImg from "@/assets/team/ben.jpg";
import shashankImg from "@/assets/team/shashank.jpg";
import angeleImg from "@/assets/team/angele.jpg";

const leaders = [
  {
    name: "Prabhav Sharma",
    role: "CHAIRMAN & GROUP CHIEF EXECUTIVE OFFICER",
    photo: prabhavImg,
  },
  {
    name: "Khalifa Mohamed Al Fahim",
    role: "EXECUTIVE DIRECTOR - INVESTMENTS & STRATEGY",
    photo: khalifaImg,
  },
  {
    name: "Ben Cyrulnik",
    role: "EXECUTIVE VICE PRESIDENT - INVESTMENTS",
    photo: benImg,
  },
  {
    name: "Angele Giuliano",
    role: "REGIONAL LEAD - EUROPE",
    photo: angeleImg,
  },
  {
    name: "Shashank Parihar",
    role: "EXECUTIVE VICE PRESIDENT - INVESTMENTS",
    photo: shashankImg,
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-24 md:py-36 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Editorial header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end pb-12 md:pb-16 border-b border-border">
          <div className="md:col-span-7">
            <p
              className={`text-xs md:text-sm tracking-[0.25em] text-muted-foreground mb-5 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              OUR TEAM
            </p>
            <h2
              className={`text-[2rem] leading-[1.15] md:text-5xl lg:text-[3.25rem] font-serif text-foreground transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <em className="text-accent">Leadership</em> that combines capital,
              operating depth, and global relationships.
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-6">
            <p
              className={`text-sm md:text-base text-muted-foreground font-light leading-relaxed transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              A senior team of operators and investors, partnering closely with
              founders and institutions across every stage of a transaction.
            </p>
          </div>
        </div>

        {/* Roster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {leaders.map((leader, i) => (
            <article
              key={leader.name}
              className={`group flex flex-col pt-10 md:pt-14 pb-2 sm:pr-8 xl:pr-6 border-b border-border/60 sm:border-b-0 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + i * 90}ms` }}
            >
              <div className="overflow-hidden rounded-sm bg-muted aspect-[3/4] mb-6">
                <img
                  src={leader.photo}
                  alt={`${leader.name}, ${leader.role.toLowerCase()} at AlphaX`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[900ms] ease-out"
                />
              </div>
              <span className="block w-8 h-px bg-accent/60 mb-5 transition-all duration-500 group-hover:w-14" />
              <h3 className="text-xl md:text-[1.35rem] font-serif text-foreground leading-snug">
                {leader.name}
              </h3>
              <p className="mt-3 text-[10px] md:text-[11px] tracking-[0.2em] text-accent leading-relaxed uppercase sm:min-h-[2.4rem] xl:min-h-[3.4rem]">
                {leader.role}
              </p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );

};

export default TeamSection;
