import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import jaackLogo from "@/assets/jaack-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/subsidiaries", label: "Our Subsidiaries" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLinks = ({ mobile = false, onClose = () => {} }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClose}
          className={`transition-colors hover:text-secondary ${
            location.pathname === item.href 
              ? "text-secondary font-semibold" 
              : "text-foreground"
          } ${mobile ? "block py-2 text-lg" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={jaackLogo} 
              alt="JAACK & CO Logo" 
              className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/businesses">
              <Button variant="outline" size="sm">
                For Businesses
              </Button>
            </Link>
            <Link to="/investors">
              <Button className="btn-hero text-sm px-4 py-2">
                For Investors
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks mobile onClose={() => setIsOpen(false)} />
                <div className="pt-4 space-y-3">
                  <Link to="/businesses" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      For Businesses
                    </Button>
                  </Link>
                  <Link to="/investors" onClick={() => setIsOpen(false)}>
                    <Button className="btn-hero w-full">
                      For Investors
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;