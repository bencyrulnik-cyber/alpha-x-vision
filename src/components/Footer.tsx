const Footer = () => {
  return (
    <footer className="py-8 bg-deep-charcoal border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-xs tracking-wide">
          <span>© {new Date().getFullYear()} Alpha X Holding. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
