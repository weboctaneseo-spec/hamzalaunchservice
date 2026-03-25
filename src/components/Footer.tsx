import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-bold">USA Car Volts</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              America's trusted car electrical service provider. From battery replacements to EV charging installations, we power your drive.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/services/battery-replacement" className="hover:text-primary transition-colors">Battery Replacement</Link></li>
              <li><Link to="/services/alternator-repair" className="hover:text-primary transition-colors">Alternator Repair</Link></li>
              <li><Link to="/services/starter-motor-repair" className="hover:text-primary transition-colors">Starter Motor Repair</Link></li>
              <li><Link to="/services/car-electrical-diagnostics" className="hover:text-primary transition-colors">Car Electrical Diagnostics</Link></li>
              <li><Link to="/services/ev-charging-installation" className="hover:text-primary transition-colors">EV Charging Installation</Link></li>
              <li><Link to="/services/wiring-harness-repair" className="hover:text-primary transition-colors">Wiring Harness Repair</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/locations/florida" className="hover:text-primary transition-colors">Florida</Link></li>
              <li><Link to="/locations/california" className="hover:text-primary transition-colors">California</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+1-800-555-VOLT" className="hover:text-primary transition-colors">1-800-555-VOLT</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@usacarvolts.com" className="hover:text-primary transition-colors">info@usacarvolts.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Serving Florida, California & Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} USA Car Volts. All rights reserved. <a href="https://www.usacarvolts.com" className="hover:text-primary">www.usacarvolts.com</a></p>
          <div className="flex gap-4">
            <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            <a href="https://www.usacarvolts.com" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
