import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TrendingUp, Shield, Target, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import heroInvestorsImage from "@/assets/hero-investors.jpg";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Investors = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('full-name') as string,
      professionalTitle: formData.get('title') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      organization: formData.get('organization') as string,
      investmentSize: formData.get('ticket-size') as string,
      investmentFocus: formData.get('investment-focus') as string,
      investmentExperience: formData.get('experience') as string,
    };

    try {
      const { data: result, error } = await supabase.functions.invoke('submit-investor-form', {
        body: data,
      });

      if (error) throw error;

      toast.success("Application submitted successfully! We'll be in touch soon.");
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary/95 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroInvestorsImage} alt="Investment opportunities" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Impact-Driven Investment Opportunities
            </h1>
            <p className="body-lg text-white/90 mb-8">
              Join our network of sophisticated investors accessing vetted, high-growth SME 
              opportunities with sustainable returns and meaningful impact.
            </p>
            <Button className="btn-secondary-hero">
              Schedule Investment Discussion
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Invest with JAACK & CO</h2>
            <p className="body-lg max-w-3xl mx-auto">
              Professional due diligence, curated opportunities, and ongoing portfolio support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <Shield className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="heading-sm">Rigorous Due Diligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-md mb-4">
                  Every opportunity undergoes comprehensive financial, market, and 
                  management assessment by our expert team.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Financial analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Market validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Management assessment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <Target className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="heading-sm">Curated Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-md mb-4">
                  Access carefully selected opportunities across sectors with 
                  strong growth potential and impact alignment.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Sector diversification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Growth stage variety
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Impact measurement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="heading-sm">Active Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-md mb-4">
                  Ongoing portfolio company support and regular investor 
                  updates to maximize success potential.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Portfolio monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Strategic guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Regular reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Investment Focus Areas</h2>
              <p className="body-lg">
                We focus on high-growth sectors with sustainable competitive advantages
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { sector: "FinTech", description: "Financial technology and services innovation" },
                { sector: "HealthTech", description: "Healthcare technology and digital health" },
                { sector: "SaaS", description: "Software as a Service and enterprise tech" },
                { sector: "E-commerce", description: "Digital commerce and marketplace platforms" }
              ].map((item, index) => (
                <Card key={index} className="card-professional text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{item.sector}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Application */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Join Our Investor Network</h2>
              <p className="body-lg">
                Complete the form below to access our exclusive investment opportunities.
              </p>
            </div>

            <Card className="card-professional">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="full-name">Full Name *</Label>
                      <Input id="full-name" name="full-name" placeholder="Your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="title">Professional Title</Label>
                      <Input id="title" name="title" placeholder="e.g., Managing Partner, CEO" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="investor@company.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" name="organization" placeholder="Investment firm, family office, etc." />
                    </div>
                    <div>
                      <Label htmlFor="ticket-size">Typical Investment Size</Label>
                      <Input id="ticket-size" name="ticket-size" placeholder="e.g., €100K - €1M" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="investment-focus">Investment Focus & Criteria</Label>
                    <Textarea 
                      id="investment-focus"
                      name="investment-focus"
                      placeholder="Tell us about your investment preferences, sectors of interest, and criteria..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Investment Experience</Label>
                    <Textarea 
                      id="experience"
                      name="experience"
                      placeholder="Brief overview of your investment background and experience..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="text-center">
                    <Button type="submit" className="btn-accent px-12" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Our team will review your application and schedule a confidential discussion.
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

export default Investors;