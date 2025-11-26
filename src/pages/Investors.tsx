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
import { z } from "zod";

const investorFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Full name must be less than 100 characters"),
  professionalTitle: z
    .string()
    .trim()
    .min(1, "Professional title is required")
    .max(100, "Professional title must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  organization: z
    .string()
    .trim()
    .min(1, "Organization is required")
    .max(100, "Organization must be less than 100 characters"),
  investmentSize: z.string().trim().min(1, "Investment size is required"),
  investmentFocus: z
    .string()
    .trim()
    .min(1, "Investment focus is required")
    .max(500, "Investment focus must be less than 500 characters"),
  investmentExperience: z
    .string()
    .trim()
    .min(1, "Investment experience is required")
    .max(1000, "Investment experience must be less than 1000 characters"),
});

const Investors = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const form = e.currentTarget; // Store form reference before async operations
    const formData = new FormData(form);
    const data = {
      fullName: formData.get("full-name") as string,
      professionalTitle: formData.get("title") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      organization: formData.get("organization") as string,
      investmentSize: formData.get("ticket-size") as string,
      investmentFocus: formData.get("investment-focus") as string,
      investmentExperience: formData.get("experience") as string,
    };

    try {
      // Validate form data
      const validatedData = investorFormSchema.parse(data);

      const { data: result, error } = await supabase.functions.invoke("submit-investor-form", {
        body: validatedData,
      });

      console.log("Function response:", { result, error });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      // The result should contain {success: true, message: "...", recordId: "..."}
      if (result && typeof result === "object" && "success" in result && result.success) {
        toast.success("Application submitted successfully! We'll be in touch soon.");
        form.reset();
        setErrors({});
      } else {
        const errorMsg =
          result && typeof result === "object" && "error" in result
            ? String(result.error)
            : "Failed to submit application";
        throw new Error(errorMsg);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fill in all required fields correctly");
      } else {
        console.error("Error submitting form:", error);
        toast.error("Failed to submit application. Please try again.");
      }
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
            <h1 className="heading-xl text-white mb-6">Impact-Driven Investment Opportunities</h1>
            <p className="body-lg text-white/90 mb-8">
              Join our network of sophisticated investors accessing vetted, high-growth Small Enterprise opportunities
              with sustainable returns and meaningful impact.
            </p>
            {/* <Button className="btn-secondary-hero">
              Schedule Investment Discussion
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button> */}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Why Invest with Jaack & co</h2>
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
                  Every opportunity undergoes comprehensive financial, market, and management assessment by our expert
                  team.
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
                  Access carefully selected opportunities across sectors with strong growth potential and impact
                  alignment.
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
                  Ongoing portfolio company support and regular investor updates to maximize success potential.
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
      {/* <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Investment Focus Areas</h2>
              <p className="body-lg">We focus on high-growth sectors with sustainable competitive advantages</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { sector: "FinTech", description: "Financial technology and services innovation" },
                { sector: "HealthTech", description: "Healthcare technology and digital health" },
                { sector: "SaaS", description: "Software as a Service and enterprise tech" },
                { sector: "E-commerce", description: "Digital commerce and marketplace platforms" },
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
      </section> */}

      {/* Investor Application */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Join Our Investor Network</h2>
              <p className="body-lg">Complete the form below to access our exclusive investment opportunities.</p>
            </div>

            <Card className="card-professional">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="full-name">Full Name *</Label>
                      <Input id="full-name" name="full-name" placeholder="Your full name" required />
                      {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="title">Professional Title *</Label>
                      <Input id="title" name="title" placeholder="e.g., Managing Partner, CEO" required />
                      {errors.professionalTitle && (
                        <p className="text-sm text-destructive mt-1">{errors.professionalTitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="investor@company.com" required />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="Investment firm, family office, etc."
                        required
                      />
                      {errors.organization && <p className="text-sm text-destructive mt-1">{errors.organization}</p>}
                    </div>
                    <div>
                      <Label htmlFor="ticket-size">Typical Investment Size *</Label>
                      <Input id="ticket-size" name="ticket-size" placeholder="e.g., €100K - €1M" required />
                      {errors.investmentSize && (
                        <p className="text-sm text-destructive mt-1">{errors.investmentSize}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="investment-focus">Investment Focus & Criteria *</Label>
                    <Textarea
                      id="investment-focus"
                      name="investment-focus"
                      placeholder="Tell us about your investment preferences, sectors of interest, and criteria..."
                      className="min-h-[120px]"
                      required
                    />
                    {errors.investmentFocus && (
                      <p className="text-sm text-destructive mt-1">{errors.investmentFocus}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="experience">Investment Experience *</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      placeholder="Brief overview of your investment background and experience..."
                      className="min-h-[100px]"
                      required
                    />
                    {errors.investmentExperience && (
                      <p className="text-sm text-destructive mt-1">{errors.investmentExperience}</p>
                    )}
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
