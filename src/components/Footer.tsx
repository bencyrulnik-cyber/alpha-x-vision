const Footer = () => {
  return <footer className="bg-deep-charcoal border-t border-primary-foreground/10">
      {/* Legal Disclaimers */}
      <div className="py-10 border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <h4 className="text-xs font-medium tracking-[0.15em] text-primary-foreground/50 mb-4">
              IMPORTANT DISCLOSURES
            </h4>
            <div className="space-y-4 text-[11px] leading-relaxed text-primary-foreground/35">
              <p>This website is for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation for any investment opportunity. Nothing on this website should be construed as investment, legal, tax, or financial advice.</p>
              <p>
                All investments involve risk, including the potential loss of principal. Past performance is not indicative 
                of future results. There can be no assurance that any investment will achieve its objectives or avoid losses. 
                Prospective investors should carefully consider their own financial situation and risk tolerance before making 
                any investment decisions.
              </p>
              <p>The information presented on this website may contain forward-looking statements and projections. Such statements are based on current expectations and assumptions that are subject to risks and uncertainties, and actual results may differ materially.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-xs tracking-wide">
            <span>© {new Date().getFullYear()} AlphaX Holding. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;