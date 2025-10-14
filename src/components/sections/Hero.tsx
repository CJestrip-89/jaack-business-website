import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import heroBusinessImage from "@/assets/hero-business.jpg";
import heroInvestorsImage from "@/assets/hero-investors.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-16">
          <h1 className="heading-xl text-white mb-6 animate-fade-in">
            Bridging Ambition with
            <span className="text-gradient-accent"> Opportunity</span>
          </h1>
          <p className="body-lg text-white/90 max-w-3xl mx-auto mb-8 animate-slide-up">
            JAACK & CO connects growth-focused SMEs with impact-driven investors, 
            creating sustainable partnerships that drive meaningful business transformation.
          </p>
        </div>

        {/* Dual Lane Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Businesses */}
          <div className="card-professional group relative overflow-hidden animate-scale-in">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img 
                src={heroBusinessImage}
                alt="Professional business environment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-secondary mr-3 drop-shadow-lg" />
                <h2 className="heading-sm text-foreground drop-shadow-md">For Businesses</h2>
              </div>
              <p className="body-md mb-6 text-foreground/90 drop-shadow-sm">
                Access funding, strategic growth partnerships, and market expansion 
                opportunities tailored to your business ambitions.
              </p>
              <ul className="space-y-2 mb-8 text-foreground/80 drop-shadow-sm">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-secondary mr-2" />
                  Funding Access & Capital Raising
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-secondary mr-2" />
                  Strategic Growth Partnerships
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-secondary mr-2" />
                  Market Expansion Support
                </li>
              </ul>
              <Link to="/businesses">
                <Button className="btn-hero w-full group">
                  Explore Business Solutions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* For Investors */}
          <div className="card-professional group relative overflow-hidden animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img 
                src={heroInvestorsImage}
                alt="Investment and growth visualization" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-accent mr-3 drop-shadow-lg" />
                <h2 className="heading-sm text-foreground drop-shadow-md">For Investors</h2>
              </div>
              <p className="body-md mb-6 text-foreground/90 drop-shadow-sm">
                Discover vetted investment opportunities in high-growth SMEs with 
                sustainable impact and strong returns potential.
              </p>
              <ul className="space-y-2 mb-8 text-foreground/80 drop-shadow-sm">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-accent mr-2" />
                  Curated Investment Opportunities
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-accent mr-2" />
                  Impact-Driven Portfolio Building
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-accent mr-2" />
                  Professional Due Diligence
                </li>
              </ul>
              <Link to="/investors">
                <Button className="btn-accent w-full group">
                  Explore Investment Opportunities
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-white/80 mb-4">Trusted by ambitious businesses and impact-focused investors</p>
          <div className="flex justify-center items-center space-x-8 text-white/60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm">SMEs Funded</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">€25M+</div>
              <div className="text-sm">Capital Raised</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm">Active Investors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;