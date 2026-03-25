import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  "": "Home",
  "services": "Services",
  "battery-replacement": "Battery Replacement",
  "alternator-repair": "Alternator Repair",
  "starter-motor-repair": "Starter Motor Repair",
  "car-electrical-diagnostics": "Car Electrical Diagnostics",
  "ev-charging-installation": "EV Charging Installation",
  "wiring-harness-repair": "Wiring Harness Repair",
  "locations": "Locations",
  "florida": "Florida",
  "california": "California",
  "blog": "Blog",
  "sitemap": "Sitemap",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors" itemProp="item">
              <Home className="h-3.5 w-3.5" />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const label = routeLabels[value] || value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

            return (
              <li key={to} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <ChevronRight className="h-3.5 w-3.5 mx-1 text-muted-foreground/50" />
                {isLast ? (
                  <span className="text-foreground font-medium" itemProp="name">{label}</span>
                ) : (
                  <Link to={to} className="hover:text-primary transition-colors" itemProp="item">
                    <span itemProp="name">{label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 2)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
