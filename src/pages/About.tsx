import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Handshake, Award, TrendingUp } from "lucide-react";

const About = () => {
  const [expandedBios, setExpandedBios] = useState<{ [key: number]: boolean }>({});

  const toggleBio = (index: number) => {
    setExpandedBios((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

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
                Our vision is to become a trusted partner for entrepreneurs and investors by building a portfolio of
                high-performing businesses with strong fundamentals, real-world utility, and sustainable growth
                potential. We aim to create environments where smart capital meets disciplined execution, where
                businesses thrive through strategic support, and where every partnership is grounded in clarity,
                accountability, and long-term value creation.
              </p>
              {/* <p className="body-md text-muted-foreground">
                We envision a future where access to capital is matched with strategic expertise to accelerate
                responsible business growth.
              </p> */}
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
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Trust and Transparency</h3>
                <p className="text-muted-foreground">
                  We prioritize clear and honest communication with clients and investors. Every step is taken with
                  accountability and openness.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Empowerment and Growth</h3>
                <p className="text-muted-foreground">
                  We believe in empowering small businesses with the resources they need to grow while creating
                  sustainable investment opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Responsibility and Integrity</h3>
                <p className="text-muted-foreground">
                  We manage client funds with the highest level of care. Ethical practices and responsible financial
                  decision making guide all our actions.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="p-8">
                <Handshake className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Long Term Relationships</h3>
                <p className="text-muted-foreground">
                  We focus on building lasting partnerships that create long term success for everyone involved.
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
                name: "Jerry Lorseille",
                role: "Founder and CEO",
                bio: "Jerry Lorseille is a business strategist with a strong foundation in accounting, financial analysis and entrepreneurial leadership. He excels at identifying opportunities, designing scalable models and shaping the strategic direction of the firm. Jerry brings sharp analytical thinking and practical decision making to Jaack & co, ensuring bold vision is paired with disciplined execution and sustainable value creation.",
              },
              {
                name: "Albert Francois",
                role: "Founder and CFO",
                bio: "Albert Francois is a financial leader whose expertise in finance, capital structuring and investment evaluation drives the economic foundation of the firm. With a deep understanding of financial planning and risk optimization, he ensures that every business initiative is backed by strong fiscal discipline and intelligent capital deployment. Albert brings confidence, clarity and financial foresight to Jaack & co.",
              },
              {
                name: "Alex Jean",
                role: "Founder and COO",
                bio: "Alex Jean is an operations and engineering specialist who transforms strategy into seamless execution. With a technical background and strong operational mindset, he builds efficient systems, optimizes processes and ensures reliable performance across every venture. Alex is the force that grounds vision into practical action, connecting engineering precision with real world operations.",
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
                  <p className="text-muted-foreground text-sm mb-4">
                    {expandedBios[index] ? member.bio : truncateText(member.bio)}
                  </p>
                  <button
                    onClick={() => toggleBio(index)}
                    className="text-secondary hover:text-secondary/80 font-medium text-sm mb-4 transition-colors"
                  >
                    {expandedBios[index] ? "Read less" : "Read more"}
                  </button>
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-muted-foreground font-medium text-sm">{member.role}</p>
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
