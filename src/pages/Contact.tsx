import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Get In Touch
            </h1>
            <p className="body-lg text-white/90">
              Ready to explore funding opportunities or discuss investment partnerships? 
              Our team is here to help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h2 className="heading-md mb-6">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input id="company" placeholder="Your company name" />
                      </div>
                      <div>
                        <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                        <select 
                          id="inquiry-type" 
                          required
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="business-funding">Business Funding</option>
                          <option value="investor-opportunities">Investment Opportunities</option>
                          <option value="partnership">Partnership Inquiry</option>
                          <option value="general">General Information</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your business, funding needs, or investment interests..."
                        className="min-h-[150px]"
                        required 
                      />
                    </div>

                    <div className="text-center">
                      <Button className="btn-hero px-12">
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-secondary mr-3 mt-1" />
                      <div>
                        <div className="font-medium mb-1">London Office</div>
                        <div className="text-sm text-muted-foreground">
                          25 Bank Street<br />
                          Canary Wharf<br />
                          London E14 5JP<br />
                          United Kingdom
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-secondary mr-3 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Phone</div>
                        <div className="text-sm text-muted-foreground">
                          +44 20 7946 0958
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-secondary mr-3 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Email</div>
                        <div className="text-sm text-muted-foreground">
                          hello@jaackandco.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-secondary mr-3 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Business Hours</div>
                        <div className="text-sm text-muted-foreground">
                          Monday - Friday<br />
                          9:00 AM - 6:00 PM GMT
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule a Call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-4">Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email inquiries</span>
                      <span className="font-medium">&lt; 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Funding applications</span>
                      <span className="font-medium">&lt; 48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Investment discussions</span>
                      <span className="font-medium">&lt; 72 hours</span>
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

export default Contact;