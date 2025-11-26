import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().max(50).optional(),
  company: z.string().max(200).optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const { data: response, error } = await supabase.functions.invoke("submit-contact-form", {
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          inquiry_type: data.inquiryType,
          message: data.message,
        },
      });

      if (error) throw error;

      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Let's Build Something Together</h1>
            <p className="body-lg text-white/90">
              Whether you need funding, investors, or business support, JAACK & CO is ready to help you grow. Reach out
              and our team will get back to you soon.
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
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company/Organization</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Inquiry Type *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select inquiry type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="business-funding">Business Funding</SelectItem>
                                  <SelectItem value="investor-opportunities">Investment Opportunities</SelectItem>
                                  <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                                  <SelectItem value="general">General Information</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your business, funding needs, or investment interests..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-center">
                        <Button type="submit" className="btn-hero px-12" disabled={form.formState.isSubmitting}>
                          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <p className="text-sm text-muted-foreground mt-4">
                          We typically respond within 24 hours during business days.
                        </p>
                      </div>
                    </form>
                  </Form>
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
                        <div className="font-medium mb-1">Miami Office</div>
                        <div className="text-sm text-muted-foreground">
                          999 Brickell Ave
                          <br />
                          Miami FL, 33131
                          <br />
                          USA
                        </div>
                      </div>
                    </div>

                    {/* <div className="flex items-start">
                      <Phone className="w-5 h-5 text-secondary mr-3 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Phone</div>
                        <div className="text-sm text-muted-foreground">+44 20 7946 0958</div>
                      </div>
                    </div> */}

                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-secondary mr-3 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Email</div>
                        <div className="text-sm text-muted-foreground">contact@jaackco.com</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-secondary mr-3 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Business Hours</div>
                        <div className="text-sm text-muted-foreground">
                          Monday - Friday
                          <br />
                          8:00 AM - 5:00 PM ETC
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

              {/* <Card className="card-professional">
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
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
