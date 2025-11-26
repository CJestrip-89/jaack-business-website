import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Globe, Handshake, ArrowRight, CheckCircle, Users } from "lucide-react";

const Services = () => {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Comprehensive Business & Investment Services</h1>
            <p className="body-lg text-white/90">
              Five core pillars designed to accelerate Small Enterprise growth and maximum investor returns
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            {[
              { icon: TrendingUp, title: "Alternative & Private Funding", count: "01" },
              { icon: DollarSign, title: "Capital Raising", count: "02" },
              { icon: Users, title: "Investor Matching", count: "03" },
              { icon: Globe, title: "Business Growth", count: "04" },
              { icon: Handshake, title: "Partnership Development", count: "05" },
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
            {/* Alternative and Private Funding */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">01</span>
                  <h2 className="heading-md">Alternative and Private Funding</h2>
                </div>
                <p className="body-md mb-6">
                  We help small businesses access non traditional financing by connecting them with private investors
                  and alternative funding channels. We structure deals that support expansion, operations, and project
                  development.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Private investor connections</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Alternative funding channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Deal structuring and support</span>
                  </li>
                </ul>
                {/* <Button className="btn-hero">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
              </div>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Funding Applications</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Business Expansion</h5>
                      <p className="text-sm text-muted-foreground">Capital for scaling operations and growth</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Operational Support</h5>
                      <p className="text-sm text-muted-foreground">Funding for day-to-day business needs</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Project Development</h5>
                      <p className="text-sm text-muted-foreground">Financing for specific initiatives</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Capital Raising and Deployment */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="card-professional order-2 md:order-1">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Capital Deployment Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        1
                      </div>
                      <span>Raise capital from network</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        2
                      </div>
                      <span>Vet business opportunities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        3
                      </div>
                      <span>Deploy funds responsibly</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        4
                      </div>
                      <span>Monitor sustainable growth</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-accent mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">02</span>
                  <h2 className="heading-md">Capital Raising and Deployment</h2>
                </div>
                <p className="body-md mb-6">
                  We raise capital from our client and investor network and deploy those funds into vetted business
                  opportunities. Our team ensures that capital is placed responsibly for sustainable growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Network capital raising</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Business opportunity vetting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Responsible fund deployment</span>
                  </li>
                </ul>
                {/* <Button className="btn-accent">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
              </div>
            </div>

            {/* Investor and Entrepreneur Matching */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-secondary mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">03</span>
                  <h2 className="heading-md">Investor and Entrepreneur Matching</h2>
                </div>
                <p className="body-md mb-6">
                  We act as a bridge between businesses and investors. We assist with interest alignment, preparation,
                  and due diligence so both sides feel secure and confident.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Interest alignment services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Preparation and readiness</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Comprehensive due diligence</span>
                  </li>
                </ul>
                {/* <Button className="btn-hero">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
              </div>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Matching Benefits</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Aligned Interests</h5>
                      <p className="text-sm text-muted-foreground">Ensure both parties share common goals</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Enhanced Security</h5>
                      <p className="text-sm text-muted-foreground">Thorough vetting creates confidence</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Strategic Fit</h5>
                      <p className="text-sm text-muted-foreground">Perfect matches for long-term success</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Growth and Market Expansion */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="card-professional order-2 md:order-1">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Growth Strategies</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        1
                      </div>
                      <span>Client acquisition strategies</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        2
                      </div>
                      <span>Market expansion planning</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        3
                      </div>
                      <span>Visibility enhancement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        4
                      </div>
                      <span>Long-term stability focus</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-accent mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">04</span>
                  <h2 className="heading-md">Business Growth and Market Expansion</h2>
                </div>
                <p className="body-md mb-6">
                  We support businesses by helping them reach new clients and scale operations. Our strategies focus on
                  increasing visibility, expanding markets, and achieving long term stability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Client reach expansion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Operations scaling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Market visibility strategies</span>
                  </li>
                </ul>
                {/* <Button className="btn-accent">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
              </div>
            </div>

            {/* Partnership Development */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Handshake className="w-8 h-8 text-secondary mr-3" />
                  <span className="text-4xl font-bold text-muted mr-4">05</span>
                  <h2 className="heading-md">Partnership Development</h2>
                </div>
                <p className="body-md mb-6">
                  We help build strong long term relationships between investors, entrepreneurs, and partners. These
                  relationships become the foundation for ongoing collaboration and growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Long-term relationship building</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Multi-party collaboration facilitation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>Foundation for ongoing growth</span>
                  </li>
                </ul>
                {/* <Button className="btn-hero">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
              </div>
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h4 className="font-semibold mb-4">Partnership Benefits</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Strong Relationships</h5>
                      <p className="text-sm text-muted-foreground">Build trust and lasting connections</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Collaborative Growth</h5>
                      <p className="text-sm text-muted-foreground">Mutual success through cooperation</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-medium">Sustainable Network</h5>
                      <p className="text-sm text-muted-foreground">Ecosystem for continuous opportunity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
