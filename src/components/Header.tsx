import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl font-serif tracking-tight text-primary-foreground group-hover:opacity-80 transition-opacity">
            AlphaX
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#about"
            className="text-sm font-light tracking-wide text-primary-foreground/90 link-underline hover:text-primary-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#investments"
            className="text-sm font-light tracking-wide text-primary-foreground/90 link-underline hover:text-primary-foreground transition-colors"
          >
            Investments
          </a>
          <a
            href="#contact"
            className="text-sm font-light tracking-wide text-primary-foreground/90 link-underline hover:text-primary-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
