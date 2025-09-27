import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Calendar } from "lucide-react";

const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: "TechFlow Solutions",
      sector: "SaaS",
      founded: "2021",
      description: "AI-powered workflow automation platform for SMEs, reducing operational overhead by 40%.",
      metrics: {
        revenue: "€2.3M ARR",
        growth: "+180% YoY",
        employees: "35 people"
      },
      status: "Series A"
    },
    {
      name: "GreenLogistics Europe",
      sector: "Climate Tech",
      founded: "2020", 
      description: "Sustainable last-mile delivery solutions with carbon-neutral fleet management.",
      metrics: {
        revenue: "€5.1M ARR", 
        growth: "+120% YoY",
        employees: "78 people"
      },
      status: "Series B"
    },
    {
      name: "HealthBridge Digital",
      sector: "HealthTech",
      founded: "2022",
      description: "Digital health platform connecting patients with specialist healthcare providers.",
      metrics: {
        revenue: "€1.8M ARR",
        growth: "+240% YoY", 
        employees: "28 people"
      },
      status: "Seed+"
    },
    {
      name: "FinanceFirst",
      sector: "FinTech",
      founded: "2021",
      description: "SME-focused financial management and cash flow optimization platform.",
      metrics: {
        revenue: "€3.2M ARR",
        growth: "+160% YoY",
        employees: "42 people"
      },
      status: "Series A"
    },
    {
      name: "RetailConnect",
      sector: "E-commerce",
      founded: "2020",
      description: "B2B marketplace connecting independent retailers with wholesale suppliers.",
      metrics: {
        revenue: "€4.7M ARR",
        growth: "+95% YoY", 
        employees: "56 people"
      },
      status: "Series A+"
    },
    {
      name: "EduTech Innovation",
      sector: "EdTech",
      founded: "2022",
      description: "Professional skills training platform with AI-powered personalized learning paths.",
      metrics: {
        revenue: "€1.2M ARR",
        growth: "+310% YoY",
        employees: "24 people"
      },
      status: "Seed"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Our Portfolio Companies
            </h1>
            <p className="body-lg text-white/90 mb-8">
              Showcase of successful partnerships - high-growth SMEs we've supported 
              through funding, strategic guidance, and market expansion.
            </p>
            <div className="flex justify-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm">Active Companies</div>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">€18M+</div>
                <div className="text-sm">Total ARR</div>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">165%</div>
                <div className="text-sm">Avg Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((company, index) => (
              <Card key={index} className="card-professional group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-secondary transition-colors">
                        {company.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {company.sector}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {company.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {company.description}
                  </p>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">Founded {company.founded}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">{company.metrics.employees}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-foreground">{company.metrics.revenue}</div>
                          <div className="text-xs text-muted-foreground">Annual Revenue</div>
                        </div>
                        <div>
                          <div className="font-semibold text-success flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {company.metrics.growth}
                          </div>
                          <div className="text-xs text-muted-foreground">Growth Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Portfolio Success Highlights</h2>
            <p className="body-lg max-w-3xl mx-auto">
              Key achievements and milestones from our portfolio companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Market Leadership</h3>
                <p className="text-muted-foreground mb-4">
                  3 portfolio companies achieved market-leading positions in their respective sectors within 18 months.
                </p>
                <Badge variant="secondary">TechFlow, GreenLogistics, FinanceFirst</Badge>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Team Growth</h3>
                <p className="text-muted-foreground mb-4">
                  Portfolio companies collectively grew from 89 to 263 employees, creating 174 new jobs.
                </p>
                <Badge variant="secondary">+174 Jobs Created</Badge>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Market Expansion</h3>
                <p className="text-muted-foreground mb-4">
                  Successfully facilitated expansion into 12 new markets across Europe and North America.
                </p>
                <Badge variant="secondary">12 New Markets</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Subsidiaries;