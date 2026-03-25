import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  { label: "Battery Replacement", href: "/services/battery-replacement" },
  { label: "Alternator Repair", href: "/services/alternator-repair" },
  { label: "Starter Motor Repair", href: "/services/starter-motor-repair" },
  { label: "Car Electrical Diagnostics", href: "/services/car-electrical-diagnostics" },
  { label: "EV Charging Installation", href: "/services/ev-charging-installation" },
  { label: "Wiring Harness Repair", href: "/services/wiring-harness-repair" },
];

const locations = [
  { label: "Florida", href: "/locations/florida" },
  { label: "California", href: "/locations/california" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-hero-gradient text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5 animate-bolt-flash" />
            Expert Car Electrical Services Across the USA
          </span>
          <a href="tel:+1-800-555-VOLT" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            1-800-555-VOLT
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-card sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="USA Car Volts Logo" className="h-10 w-10" width={40} height={40} />
            <span className="font-heading text-xl font-bold text-foreground">
              USA <span className="text-primary">Car Volts</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[240px] animate-fade-in">
                  {services.map((s) => (
                    <Link key={s.href} to={s.href} className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="relative group" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Locations <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
                  {locations.map((l) => (
                    <Link key={l.href} to={l.href} className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/sitemap" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sitemap</Link>

            <Button asChild>
              <a href="tel:+1-800-555-VOLT">Get Free Quote</a>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
              <div className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider">Services</div>
              {services.map((s) => (
                <Link key={s.href} to={s.href} className="block text-sm text-foreground pl-3" onClick={() => setMobileOpen(false)}>
                  {s.label}
                </Link>
              ))}
              <div className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider pt-2">Locations</div>
              {locations.map((l) => (
                <Link key={l.href} to={l.href} className="block text-sm text-foreground pl-3" onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link to="/blog" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link to="/sitemap" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Sitemap</Link>
              <Button className="w-full" asChild>
                <a href="tel:+1-800-555-VOLT">Get Free Quote</a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
