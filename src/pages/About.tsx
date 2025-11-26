import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">About Jaack & co</h1>
            <p className="body-lg text-white/90">
              We are a private funding and business support company that helps small businesses secure capital and
              expand their market reach. We operate as both a financial resource and a strategic growth partner. Our
              focus is to bridge the gap between entrepreneurs who need funding and investors seeking meaningful
              opportunities. We help clients access non traditional financing, build partnerships, and grow their
              businesses with long term stability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="body-md mb-6">
                Our mission is to empower entrepreneurs by giving them access to capital, resources, and long lasting
                business relationships. We aim to create opportunities that help small businesses grow while ensuring
                investors feel secure and rewarded. Every decision is guided by responsibility, integrity, and a
                commitment to building partnerships that last.
              </p>
              {/* <p className="body-md text-muted-foreground">
                We believe that with the right partnerships, every business has the potential to create lasting value
                for all stakeholders.
              </p> */}
            </div>
            <div>
              <h2 className="heading-lg mb-6">Our Vision</h2>
              <p className="body-md mb-6">
                To become the leading platform connecting growth-stage SMEs with impact-focused investors across Europe,
                fostering a new generation of sustainable business partnerships.
              </p>
              <p className="body-md text-muted-foreground">
                We envision a future where access to capital is matched with strategic expertise to accelerate
                responsible business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="body-lg max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Impact First</h3>
                <p className="text-muted-foreground">
                  We prioritize sustainable growth and meaningful impact in every partnership we facilitate.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Trust & Transparency</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships through honest communication and transparent processes.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Delivering exceptional service and maintaining the highest standards of professionalism.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Growth Mindset</h3>
                <p className="text-muted-foreground">
                  Continuously learning and adapting to better serve our community of businesses and investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Leadership Team</h2>
            <p className="body-lg max-w-3xl mx-auto">
              Experienced professionals with deep expertise in finance, business development, and investment management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "James Anderson",
                role: "Founder & Managing Partner",
                bio: "15+ years in private equity and venture capital with a focus on European SME growth investments.",
              },
              {
                name: "Anna Chen",
                role: "Investment Director",
                bio: "Former investment banking analyst with expertise in due diligence and financial structuring.",
              },
              {
                name: "Carlos Rodriguez",
                role: "Head of Business Development",
                bio: "Serial entrepreneur and business advisor with deep networks in the European startup ecosystem.",
              },
            ].map((member, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
