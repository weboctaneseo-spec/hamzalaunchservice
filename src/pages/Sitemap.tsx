import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

/*
  ========================================
  USA Car Volts — HTML Sitemap
  Domain: www.usacarvolts.com
  All URLs use the www subdomain
  ========================================
*/

interface SitemapSection {
  title: string;
  links: { label: string; url: string; description: string }[];
}

const sections: SitemapSection[] = [
  /* === Main Pages === */
  {
    title: "Main Pages",
    links: [
      { label: "Home", url: "/", description: "USA Car Volts homepage — professional car electrical services across the USA" },
      { label: "Blog", url: "/blog", description: "Expert tips, guides, and news about car electrical systems" },
      { label: "Sitemap", url: "/sitemap", description: "Complete sitemap of www.usacarvolts.com" },
    ],
  },
  /* === Service Pages === */
  {
    title: "Car Electrical Services",
    links: [
      { label: "Battery Replacement", url: "/services/battery-replacement", description: "Professional car battery replacement service — www.usacarvolts.com/services/battery-replacement" },
      { label: "Alternator Repair", url: "/services/alternator-repair", description: "Expert alternator repair and replacement — www.usacarvolts.com/services/alternator-repair" },
      { label: "Starter Motor Repair", url: "/services/starter-motor-repair", description: "Starter motor repair and replacement — www.usacarvolts.com/services/starter-motor-repair" },
      { label: "Car Electrical Diagnostics", url: "/services/car-electrical-diagnostics", description: "Complete car electrical diagnostics — www.usacarvolts.com/services/car-electrical-diagnostics" },
      { label: "EV Charging Installation", url: "/services/ev-charging-installation", description: "EV charging station installation — www.usacarvolts.com/services/ev-charging-installation" },
      { label: "Wiring Harness Repair", url: "/services/wiring-harness-repair", description: "Wiring harness repair and replacement — www.usacarvolts.com/services/wiring-harness-repair" },
    ],
  },
  /* === Location Pages === */
  {
    title: "Service Locations",
    links: [
      { label: "Florida", url: "/locations/florida", description: "Car electrical services in Florida — www.usacarvolts.com/locations/florida" },
      { label: "California", url: "/locations/california", description: "Car electrical services in California — www.usacarvolts.com/locations/california" },
    ],
  },
  /* === Blog Posts === */
  {
    title: "Blog Articles",
    links: [
      { label: "7 Warning Signs Your Car Battery Needs Replacement", url: "/blog/signs-your-car-battery-needs-replacement", description: "www.usacarvolts.com/blog/signs-your-car-battery-needs-replacement" },
      { label: "Alternator vs Battery Problems: How to Tell the Difference", url: "/blog/alternator-vs-battery-problems", description: "www.usacarvolts.com/blog/alternator-vs-battery-problems" },
      { label: "Complete Guide to Home EV Charger Installation", url: "/blog/ev-charging-home-installation-guide", description: "www.usacarvolts.com/blog/ev-charging-home-installation-guide" },
      { label: "10 Essential Car Electrical System Maintenance Tips", url: "/blog/car-electrical-system-maintenance-tips", description: "www.usacarvolts.com/blog/car-electrical-system-maintenance-tips" },
      { label: "Most Common Car Electrical Problems and Solutions", url: "/blog/common-car-electrical-problems-solutions", description: "www.usacarvolts.com/blog/common-car-electrical-problems-solutions" },
      { label: "How Florida's Heat Affects Your Car Battery", url: "/blog/florida-car-battery-tips-hot-climate", description: "www.usacarvolts.com/blog/florida-car-battery-tips-hot-climate" },
    ],
  },
];

const Sitemap = () => {
  return (
    <>
      {/* ======== Sitemap Header ======== */}
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Sitemap — www.usacarvolts.com</h1>
          <p className="text-lg opacity-90">
            Complete directory of all pages on <a href="https://www.usacarvolts.com" className="underline font-medium">www.usacarvolts.com</a>
          </p>
        </div>
      </section>

      {/* ======== Sitemap Content ======== */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* XML Sitemap Reference */}
          <div className="bg-card rounded-lg p-6 card-elevated mb-10">
            <h2 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              XML Sitemap
            </h2>
            <p className="text-sm text-muted-foreground mb-2">
              For search engines, the XML sitemap is available at:
            </p>
            <code className="text-sm text-primary bg-secondary px-3 py-1.5 rounded">
              https://www.usacarvolts.com/sitemap.xml
            </code>
          </div>

          {/* Sitemap Sections */}
          {sections.map((section) => (
            <div key={section.title} className="mb-10">
              {/* Section heading with comment-style annotation */}
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">{section.title}</h2>
              <p className="text-xs text-muted-foreground mb-4">
                {/* sitemap section: {section.title.toLowerCase()} — all URLs with www.usacarvolts.com */}
                Section contains {section.links.length} page{section.links.length > 1 ? "s" : ""}
              </p>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <div key={link.url} className="bg-card rounded-lg p-4 card-elevated flex items-start justify-between gap-4">
                    <div>
                      <Link to={link.url} className="text-primary font-medium hover:underline text-sm">
                        {link.label}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                      <p className="text-xs text-muted-foreground/60 mt-0.5 font-mono">
                        https://www.usacarvolts.com{link.url === "/" ? "" : link.url}
                      </p>
                    </div>
                    <Link to={link.url} className="text-muted-foreground hover:text-primary shrink-0 mt-1">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Full URL List Comment */}
          <div className="bg-secondary rounded-lg p-6 mt-10">
            <h3 className="font-heading font-bold text-foreground mb-3">Complete URL List — www.usacarvolts.com</h3>
            <div className="font-mono text-xs text-muted-foreground space-y-1">
              {/* Complete sitemap URLs for www.usacarvolts.com */}
              <p>https://www.usacarvolts.com</p>
              <p>https://www.usacarvolts.com/services/battery-replacement</p>
              <p>https://www.usacarvolts.com/services/alternator-repair</p>
              <p>https://www.usacarvolts.com/services/starter-motor-repair</p>
              <p>https://www.usacarvolts.com/services/car-electrical-diagnostics</p>
              <p>https://www.usacarvolts.com/services/ev-charging-installation</p>
              <p>https://www.usacarvolts.com/services/wiring-harness-repair</p>
              <p>https://www.usacarvolts.com/locations/florida</p>
              <p>https://www.usacarvolts.com/locations/california</p>
              <p>https://www.usacarvolts.com/blog</p>
              <p>https://www.usacarvolts.com/blog/signs-your-car-battery-needs-replacement</p>
              <p>https://www.usacarvolts.com/blog/alternator-vs-battery-problems</p>
              <p>https://www.usacarvolts.com/blog/ev-charging-home-installation-guide</p>
              <p>https://www.usacarvolts.com/blog/car-electrical-system-maintenance-tips</p>
              <p>https://www.usacarvolts.com/blog/common-car-electrical-problems-solutions</p>
              <p>https://www.usacarvolts.com/blog/florida-car-battery-tips-hot-climate</p>
              <p>https://www.usacarvolts.com/sitemap</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
