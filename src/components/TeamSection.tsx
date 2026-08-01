import { useEffect, useRef, useState } from "react";
import prabhavImg from "@/assets/team/prabhav.jpg";
import khalifaImg from "@/assets/team/khalifa.jpg";
import benImg from "@/assets/team/ben.jpg";
import shashankImg from "@/assets/team/shashank.jpg";
import angeleImg from "@/assets/team/angele.jpg";

const leaders = [
  {
    name: "Prabhav Sharma",
    role: "CHAIRMAN & GCEO",
    desc: "Entrepreneur and investor with global experience building investment platforms.",
    photo: prabhavImg,
  },
  {
    name: "Khalifa Mohamed Al Fahim",
    role: "EXECUTIVE DIRECTOR — INVESTMENTS & STRATEGIC RELATIONS",
    desc: "Investments leadership and strategic relations across key markets.",
    photo: khalifaImg,
  },
  {
    name: "Ben Cyrulnik",
    role: "EXECUTIVE VICE PRESIDENT",
    desc: "Strategic partnerships, deal sourcing, and global investment development.",
    photo: benImg,
  },
  {
    name: "Shashank Parihar",
    role: "EXECUTIVE VICE PRESIDENT — INVESTMENTS",
    desc: "Investment execution and portfolio development across strategic sectors.",
    photo: shashankImg,
  },
  {
    name: "Angele Giuliano",
    role: "REGIONAL LEAD",
    desc: "Leading regional expansion strategy and partnership development.",
    photo: angeleImg,
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
    <section id="team" className="py-24 md:py-32 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p
            className={`text-sm tracking-[0.2em] text-muted-foreground mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            OUR TEAM
          </p>
          <h2
            className={`text-3xl md:text-5xl font-serif text-foreground leading-tight transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <em className="text-accent">Leadership</em> that combines capital,
            operating depth, and global relationships.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div className="overflow-hidden rounded-sm mb-5 bg-muted">
                <img
                  src={leader.photo}
                  alt={`${leader.name}, ${leader.role.toLowerCase()} at AlphaX`}
                  loading="lazy"
                  className="w-full h-[300px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-lg font-serif text-foreground leading-tight">
                {leader.name}
              </h3>
              <p className="mt-2 text-[10px] tracking-[0.15em] text-accent">
                {leader.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">
                {leader.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
