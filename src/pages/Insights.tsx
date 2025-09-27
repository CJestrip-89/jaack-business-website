import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const Insights = () => {
  const featuredArticles = [
    {
      title: "The Future of SME Funding in 2024: Trends and Opportunities",
      excerpt: "Exploring how alternative funding models are reshaping the SME landscape and creating new opportunities for growth-focused businesses.",
      category: "Market Analysis",
      readTime: "8 min read",
      date: "Dec 15, 2023",
      featured: true
    },
    {
      title: "Impact Investing: Balancing Returns with Purpose",
      excerpt: "How sophisticated investors are increasingly prioritizing sustainable impact alongside financial returns in their SME investment strategies.",
      category: "Investment Strategy",
      readTime: "6 min read", 
      date: "Dec 10, 2023"
    },
    {
      title: "Due Diligence Best Practices for SME Investments",
      excerpt: "A comprehensive guide to evaluating SME investment opportunities, from financial analysis to market validation and management assessment.",
      category: "Investment Guide",
      readTime: "12 min read",
      date: "Dec 5, 2023"
    }
  ];

  const recentArticles = [
    {
      title: "Series A Funding: What SMEs Need to Know",
      excerpt: "Key considerations for businesses preparing for their Series A round, including valuation, investor expectations, and common pitfalls.",
      category: "Funding Guide",
      readTime: "7 min read",
      date: "Nov 28, 2023"
    },
    {
      title: "Building Strategic Partnerships for Growth",
      excerpt: "How to identify, evaluate, and structure partnerships that accelerate business growth and create competitive advantages.",
      category: "Growth Strategy", 
      readTime: "9 min read",
      date: "Nov 20, 2023"
    },
    {
      title: "Market Expansion Strategies for European SMEs",
      excerpt: "Practical approaches to expanding into new markets, including market research, regulatory considerations, and partnership strategies.",
      category: "Market Expansion",
      readTime: "10 min read",
      date: "Nov 15, 2023"
    },
    {
      title: "The Rise of Revenue-Based Financing",
      excerpt: "Understanding how revenue-based financing is becoming an attractive alternative to traditional equity funding for cash-flow positive SMEs.",
      category: "Funding Alternatives",
      readTime: "6 min read", 
      date: "Nov 8, 2023"
    },
    {
      title: "ESG Considerations in SME Investment Decisions",
      excerpt: "How environmental, social, and governance factors are increasingly influencing investment decisions in the SME space.",
      category: "ESG & Impact",
      readTime: "8 min read",
      date: "Nov 1, 2023"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Insights & Thought Leadership
            </h1>
            <p className="body-lg text-white/90">
              Expert analysis, market insights, and practical guidance for SMEs and investors 
              navigating the evolving funding landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="heading-lg mb-4">Featured Insight</h2>
            </div>
            
            <Card className="card-professional mb-16 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary to-secondary p-12 text-white flex items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
                      {featuredArticles[0].category}
                    </Badge>
                    <h3 className="heading-md mb-4">{featuredArticles[0].title}</h3>
                    <p className="body-md text-white/90 mb-6">{featuredArticles[0].excerpt}</p>
                    <div className="flex items-center text-white/80 text-sm mb-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredArticles[0].date} • {featuredArticles[0].readTime}
                    </div>
                    <Button className="btn-secondary-hero">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-accent/20 to-secondary/20 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-24 h-24 text-secondary mx-auto mb-4 opacity-50" />
                    <div className="text-lg font-semibold text-muted-foreground">Market Trends</div>
                    <div className="text-sm text-muted-foreground">2024 Outlook</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Article Categories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Explore by Category</h2>
              <p className="body-lg">
                Discover insights tailored to your interests and needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-professional text-center group cursor-pointer">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-3">Funding Strategies</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Expert guidance on raising capital, from seed funding to Series A and beyond.
                  </p>
                  <Button variant="outline" size="sm">
                    Explore Articles <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional text-center group cursor-pointer">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-3">Market Analysis</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    In-depth market research and trends shaping the SME and investment landscape.
                  </p>
                  <Button variant="outline" size="sm">
                    Explore Articles <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional text-center group cursor-pointer">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-3">Growth Strategies</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Practical advice on scaling businesses, partnerships, and market expansion.
                  </p>
                  <Button variant="outline" size="sm">
                    Explore Articles <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="heading-lg">Recent Articles</h2>
              <Button variant="outline">
                View All Articles <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <Card key={index} className="card-professional group cursor-pointer">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {article.category}
                    </Badge>
                    <h3 className="font-semibold mb-3 group-hover:text-secondary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-4">Stay Informed</h2>
            <p className="body-lg text-white/90 mb-8">
              Subscribe to our newsletter for the latest insights on SME funding, 
              investment trends, and growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground"
              />
              <Button className="btn-accent px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time. Read our privacy policy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Insights;