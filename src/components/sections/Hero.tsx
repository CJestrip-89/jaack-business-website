import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import heroBusinessImage from "@/assets/hero-business.jpg";
import heroInvestorsImage from "@/assets/hero-investors.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-24 pb-8 md:pb-12">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in leading-tight">
            Bridging Ambition with
            <span className="text-gradient-accent"> Opportunity</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 animate-slide-up px-2">
            JAACK & CO powers partnerships between ambitious SMEs and impact-focused investors — combining capital,
            strategy, and long-term growth into one platform.
          </p>
        </div>

        {/* Dual Lane Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
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
            <div className="relative z-10 flex flex-col items-center text-center p-4 md:p-8">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-secondary mr-2 md:mr-3 drop-shadow-lg" />
                </motion.div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground drop-shadow-md">For Businesses</h2>
              </div>
              <p className="text-sm md:text-base mb-4 md:mb-6 text-foreground/90 drop-shadow-sm max-w-md mx-auto px-2">
                Access funding, strategic growth partnerships, and market expansion opportunities tailored to your
                business ambitions.
              </p>
              <ul className="space-y-1.5 md:space-y-2 mb-6 md:mb-8 text-xs md:text-sm text-foreground/80 drop-shadow-sm max-w-md mx-auto">
                <motion.li
                  className="flex items-center justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-secondary mr-1.5 md:mr-2 flex-shrink-0" />
                  </motion.div>
                  Funding Access & Capital Raising
                </motion.li>
                <motion.li
                  className="flex items-center justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-secondary mr-1.5 md:mr-2 flex-shrink-0" />
                  </motion.div>
                  Strategic Growth Partnerships
                </motion.li>
                <motion.li
                  className="flex items-center justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-secondary mr-1.5 md:mr-2 flex-shrink-0" />
                  </motion.div>
                  Market Expansion Support
                </motion.li>
              </ul>
              <Link to="/businesses" className="w-full max-w-md mx-auto block px-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button className="btn-hero w-full group text-xs md:text-sm lg:text-base py-2 md:py-3">
                    <span className="hidden sm:inline">Explore Business Solutions</span>
                    <span className="sm:hidden">Business Solutions</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* For Investors */}
          <div
            className="card-professional group relative overflow-hidden animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img
                src={heroInvestorsImage}
                alt="Investment and growth visualization"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
            <div className="relative z-10 flex flex-col items-center text-center p-4 md:p-8">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-accent mr-2 md:mr-3 drop-shadow-lg" />
                </motion.div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground drop-shadow-md">For Investors</h2>
              </div>
              <p className="text-sm md:text-base mb-4 md:mb-6 text-foreground/90 drop-shadow-sm max-w-md mx-auto px-2">
                Discover vetted investment opportunities in high-growth SMEs with sustainable impact and strong returns
                potential.
              </p>
              <ul className="space-y-1.5 md:space-y-2 mb-6 md:mb-8 text-xs md:text-sm text-foreground/80 drop-shadow-sm max-w-md mx-auto">
                <motion.li
                  className="flex items-center justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-accent mr-1.5 md:mr-2 flex-shrink-0" />
                  </motion.div>
                  Curated Investment Opportunities
                </motion.li>
                <motion.li
                  className="flex items-center justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-accent mr-1.5 md:mr-2 flex-shrink-0" />
                  </motion.div>
                  Impact-Driven Portfolio Building
                </motion.li>
                <motion.li
                  className="flex items-center justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-accent mr-1.5 md:mr-2 flex-shrink-0" />
                  </motion.div>
                  Professional Due Diligence
                </motion.li>
              </ul>
              <Link to="/investors" className="w-full max-w-md mx-auto block px-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button className="btn-accent w-full group text-xs md:text-sm lg:text-base py-2 md:py-3">
                    <span className="hidden sm:inline">Explore Investment Opportunities</span>
                    <span className="sm:hidden">Investment Opportunities</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-8 md:mt-16 animate-fade-in max-w-4xl mx-auto px-2" style={{ animationDelay: "0.4s" }}>
          <div className="card-professional p-4 md:p-8 backdrop-blur-md bg-white/5 border-white/10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 md:mb-2">Backed by Results</h2>
            <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8">Trusted by ambitious businesses and impact-focused investors</p>
            <div className="flex justify-center items-center space-x-6 md:space-x-12 text-white/70">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-white mb-0.5 md:mb-1">50+</div>
                <div className="text-xs md:text-base">SMEs Funded</div>
              </motion.div>
              <div className="w-px h-12 md:h-16 bg-white/20" />
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-white mb-0.5 md:mb-1">€25M+</div>
                <div className="text-xs md:text-base">Capital Raised</div>
              </motion.div>
              <div className="w-px h-12 md:h-16 bg-white/20" />
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-white mb-0.5 md:mb-1">15+</div>
                <div className="text-xs md:text-base">Active Investors</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
