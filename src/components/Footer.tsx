const Footer = () => {
  return (
    <footer className="bg-deep-charcoal border-t border-primary-foreground/10">
      {/* Legal Disclaimers */}
      <div className="py-10 border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <h4 className="text-xs font-medium tracking-[0.15em] text-primary-foreground/50 mb-4">
              IMPORTANT DISCLOSURES
            </h4>
            <div className="space-y-4 text-[11px] leading-relaxed text-primary-foreground/35">
              <p>
                This website is for informational purposes only and does not constitute an offer to sell, 
                a solicitation of an offer to buy, or a recommendation for any security, nor does it constitute 
                an offer to provide investment advisory or other services by Alpha X Holding or its affiliates.
              </p>
              <p>
                Past performance is not indicative of future results. Any investment involves risk, including 
                the possible loss of principal. There is no guarantee that any investment strategy will achieve 
                its objectives. Investors should consult with their financial, legal, and tax advisors before 
                making any investment decisions.
              </p>
              <p>
                Alpha X Holding and its affiliates do not provide tax, legal, or accounting advice. This material 
                has been prepared for informational purposes only, and is not intended to provide, and should not 
                be relied on for, tax, legal, or accounting advice.
              </p>
              <p>
                Securities offered through Alpha X Holding are not deposits or obligations of, or guaranteed or 
                endorsed by, any bank; are not federally insured by the FDIC, Federal Reserve Board, or any other 
                agency; and involve investment risks, including possible loss of the principal amount invested.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-xs tracking-wide">
            <span>© {new Date().getFullYear()} Alpha X Holding. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                Regulatory Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
