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
            <h1 className="heading-xl text-white mb-6">
              Accelerate Your Business Growth
            </h1>
            <p className="body-lg text-white/90 mb-8">
              Partner with JAACK & CO to access strategic funding, growth expertise, 
              and market expansion opportunities designed for ambitious SMEs.
            </p>
            <Button className="btn-secondary-hero">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
                  Connect with our network of impact-driven investors and access 
                  tailored funding solutions for your growth stage.
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
                  Expert guidance on market positioning, operational excellence, 
                  and strategic planning for sustainable growth.
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
                  Leverage our network and expertise to expand into new markets 
                  and build strategic partnerships.
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

      {/* Application Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Apply for Funding</h2>
              <p className="body-lg">
                Ready to accelerate your growth? Tell us about your business and funding needs.
              </p>
            </div>

            <Card className="card-professional">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your company name" required />
                    </div>
                    <div>
                      <Label htmlFor="founder">Founder Name *</Label>
                      <Input id="founder" placeholder="Your name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="founder@company.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="stage">Funding Stage *</Label>
                      <Input id="stage" placeholder="e.g., Seed, Series A" required />
                    </div>
                    <div>
                      <Label htmlFor="amount">Funding Amount *</Label>
                      <Input id="amount" placeholder="e.g., €500K - €2M" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Business Description *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Tell us about your business, market, and growth plans..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="use-of-funds">Use of Funds *</Label>
                    <Textarea 
                      id="use-of-funds" 
                      placeholder="How will you use the funding to grow your business?"
                      className="min-h-[100px]"
                      required 
                    />
                  </div>

                  <div className="text-center">
                    <Button className="btn-hero px-12">
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      We'll review your application and get back to you within 48 hours.
                    </p>
                  </div>
                </form>
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