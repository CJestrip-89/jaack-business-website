import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TrendingUp, Target, Handshake, ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import heroBusinessImage from "@/assets/hero-business.jpg";

const Businesses = () => {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBusinessImage} alt="Business growth" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Accelerate Your Business Growth</h1>
            <p className="body-lg text-white/90 mb-8">
              Partner with JAACK & CO to access strategic funding, growth expertise, and market expansion opportunities
              designed for ambitious SMEs.
            </p>
            {/* <Button className="btn-secondary-hero">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Business Services</h2>
            <p className="body-lg max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate growth and maximize business potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="heading-sm">Funding Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-md mb-4">
                  Connect with our network of impact-driven investors and access tailored funding solutions for your
                  growth stage.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Seed to Series A funding</li>
                  <li>• Revenue-based financing</li>
                  <li>• Strategic partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <Target className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="heading-sm">Growth Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-md mb-4">
                  Expert guidance on market positioning, operational excellence, and strategic planning for sustainable
                  growth.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Market analysis & positioning</li>
                  <li>• Operational optimization</li>
                  <li>• Strategic planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <Handshake className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="heading-sm">Market Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-md mb-4">
                  Leverage our network and expertise to expand into new markets and build strategic partnerships.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Market entry strategy</li>
                  <li>• Partnership facilitation</li>
                  <li>• International expansion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Businesses;
