import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Globe, Handshake, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Comprehensive Business & Investment Services
            </h1>
            <p className="body-lg text-white/90">
              Four core pillars designed to accelerate SME growth and maximize investor returns
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: TrendingUp, title: "Funding Access", count: "01" },
              { icon: DollarSign, title: "Capital Raising", count: "02" },
              { icon: Globe, title: "Market Expansion", count: "03" },
              { icon: Handshake, title: "Strategic Partnerships", count: "04" }
            ].map((service, index) => (
              <Card key={index} className="card-professional text-center group cursor-pointer">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-muted mb-4">{service.count}</div>
                  <service.icon className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services */}
          <div className="space-y-20">
            {/* Funding Access */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">01</span>
                  <h2 className="heading-md">Funding Access</h2>
                </div>
                <p className="body-md mb-6">
                  Connect SMEs with our curated network of impact-driven investors through 
                  comprehensive matching and introduction services.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Investor network access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Deal flow optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Funding strategy development</span>
                  </li>
                </ul>
                <Button className="btn-hero">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Funding Types Available</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Seed Funding</h5>
                      <p className="text-sm text-muted-foreground">€50K - €500K for early-stage validation</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Series A</h5>
                      <p className="text-sm text-muted-foreground">€500K - €5M for growth acceleration</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Revenue-Based</h5>
                      <p className="text-sm text-muted-foreground">Flexible financing based on revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Capital Raising */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="card-professional order-2 md:order-1">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Capital Raising Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                      <span>Business assessment & valuation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                      <span>Investor pitch preparation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                      <span>Due diligence support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                      <span>Term sheet negotiation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-accent mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">02</span>
                  <h2 className="heading-md">Capital Raising</h2>
                </div>
                <p className="body-md mb-6">
                  End-to-end capital raising support from initial planning through to 
                  successful fund closure and ongoing investor relations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Pitch deck development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Financial modeling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Legal documentation support</span>
                  </li>
                </ul>
                <Button className="btn-accent">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Market Expansion */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-secondary mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">03</span>
                  <h2 className="heading-md">Market Expansion</h2>
                </div>
                <p className="body-md mb-6">
                  Strategic guidance and practical support for businesses looking to expand 
                  into new markets, sectors, or geographical regions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Market research & analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Go-to-market strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Local partnership facilitation</span>
                  </li>
                </ul>
                <Button className="btn-hero">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Expansion Opportunities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "UK Market",
                      "European Union", 
                      "North America",
                      "Asia Pacific",
                      "Digital Channels",
                      "B2B Sales",
                      "Retail Partnerships",
                      "E-commerce"
                    ].map((market, index) => (
                      <div key={index} className="bg-muted rounded-lg p-3 text-center text-sm font-medium">
                        {market}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Strategic Partnerships */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="card-professional order-2 md:order-1">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Partnership Types</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-medium">Strategic Alliances</h5>
                      <p className="text-sm text-muted-foreground">Long-term partnerships for mutual growth</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-medium">Joint Ventures</h5>
                      <p className="text-sm text-muted-foreground">Collaborative business ventures</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-medium">Distribution Partners</h5>
                      <p className="text-sm text-muted-foreground">Channel expansion opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <Handshake className="w-8 h-8 text-accent mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">04</span>
                  <h2 className="heading-md">Strategic Partnerships</h2>
                </div>
                <p className="body-md mb-6">
                  Facilitate meaningful business partnerships that create synergies, 
                  reduce risks, and accelerate growth for all parties involved.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Partnership opportunity identification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Negotiation support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Ongoing relationship management</span>
                  </li>
                </ul>
                <Button className="btn-accent">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;