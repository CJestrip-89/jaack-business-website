import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="font-bold text-lg">JAACK & CO</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Connecting ambitious SMEs with impact-driven investors for sustainable growth and meaningful partnerships.
            </p>
          </div>

          {/* For Businesses */}
          <div>
            <h3 className="font-semibold mb-4">For Businesses</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/services/funding-access" className="hover:text-secondary transition-colors">Funding Access</Link></li>
              <li><Link to="/services/capital-raising" className="hover:text-secondary transition-colors">Capital Raising</Link></li>
              <li><Link to="/services/market-expansion" className="hover:text-secondary transition-colors">Market Expansion</Link></li>
              <li><Link to="/services/partnerships" className="hover:text-secondary transition-colors">Partnerships</Link></li>
            </ul>
          </div>

          {/* For Investors */}
          <div>
            <h3 className="font-semibold mb-4">For Investors</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/investors" className="hover:text-secondary transition-colors">Investment Opportunities</Link></li>
              <li><Link to="/subsidiaries" className="hover:text-secondary transition-colors">Our Portfolio</Link></li>
              <li><Link to="/insights" className="hover:text-secondary transition-colors">Market Insights</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link to="/insights" className="hover:text-secondary transition-colors">Insights</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} JAACK & CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;