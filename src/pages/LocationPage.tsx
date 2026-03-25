import { Link, useParams } from "react-router-dom";
import { MapPin, Phone, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const locationData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  cities: string[];
  services: { name: string; slug: string; desc: string }[];
}> = {
  florida: {
    name: "Florida",
    tagline: "Expert Car Electrical Services Across the Sunshine State",
    description: "Florida's hot, humid climate and coastal salt air create unique challenges for automotive electrical systems. Corrosion, heat stress, and moisture damage are common issues that Florida drivers face. USA Car Volts has strategically positioned service centers and mobile units throughout Florida to provide rapid, expert car electrical service wherever you are in the state. From the bustling streets of Miami to the family-friendly communities of Orlando, the vibrant Gulf Coast in Tampa, and the historic charm of Jacksonville, our team is ready to serve you.",
    cities: ["Miami", "Fort Lauderdale", "West Palm Beach", "Orlando", "Tampa", "St. Petersburg", "Jacksonville", "Tallahassee", "Naples", "Gainesville", "Sarasota", "Daytona Beach"],
    services: [
      { name: "Battery Replacement", slug: "battery-replacement", desc: "Florida's extreme heat accelerates battery degradation. Our battery replacement service uses heat-resistant batteries rated for Southern climates." },
      { name: "Alternator Repair", slug: "alternator-repair", desc: "High ambient temperatures put extra stress on alternators. We test and repair alternators to handle Florida's demanding conditions." },
      { name: "Starter Motor Repair", slug: "starter-motor-repair", desc: "Moisture and humidity can cause starter motor corrosion. Our repair service addresses Florida-specific starter issues." },
      { name: "Electrical Diagnostics", slug: "car-electrical-diagnostics", desc: "Salt air and humidity cause unique electrical faults. Our diagnostics identify corrosion and moisture-related issues." },
      { name: "EV Charging Installation", slug: "ev-charging-installation", desc: "Florida is a top EV market. We install Level 2 chargers designed for Florida's electrical codes and hurricane-ready standards." },
      { name: "Wiring Harness Repair", slug: "wiring-harness-repair", desc: "Florida's wildlife can damage wiring. We repair rodent, moisture, and corrosion damage with protective treatments." },
    ],
  },
  california: {
    name: "California",
    tagline: "Premier Car Electrical Services Across the Golden State",
    description: "California leads the nation in electric vehicle adoption and automotive innovation. With the most diverse driving conditions in the country — from coastal highways to desert roads to mountain passes — California vehicles face unique electrical challenges. USA Car Volts is proud to serve California drivers with expert car electrical services tailored to the Golden State's unique needs. Our California operations span from the tech-forward San Francisco Bay Area to the sprawling metropolis of Los Angeles, the sunny beaches of San Diego, and the agricultural heartland of the Central Valley.",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Oakland", "Fresno", "Long Beach", "Anaheim", "Riverside", "Bakersfield", "Santa Barbara"],
    services: [
      { name: "Battery Replacement", slug: "battery-replacement", desc: "California's varied climates affect battery life differently. We recommend the right battery for your specific region — coast, desert, or mountain." },
      { name: "Alternator Repair", slug: "alternator-repair", desc: "Stop-and-go traffic in LA and the Bay Area stresses alternators. Our repair service keeps your charging system performing in heavy traffic." },
      { name: "Starter Motor Repair", slug: "starter-motor-repair", desc: "Frequent starts in urban California driving wear starters faster. We offer rapid repair and replacement to keep you moving." },
      { name: "Electrical Diagnostics", slug: "car-electrical-diagnostics", desc: "California's strict emissions standards require precise electrical system function. Our diagnostics ensure compliance and performance." },
      { name: "EV Charging Installation", slug: "ev-charging-installation", desc: "California is the #1 EV state. We're experts in home and commercial EV charger installation, with knowledge of CA rebates and incentives." },
      { name: "Wiring Harness Repair", slug: "wiring-harness-repair", desc: "Sun exposure and heat in California's deserts and valleys cause wiring insulation breakdown. We repair and protect against UV damage." },
    ],
  },
};

const LocationPage = () => {
  const { state } = useParams<{ state: string }>();
  const location = locationData[state || ""];

  if (!location) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Location Not Found</h1>
        <Button asChild><Link to="/">Go Home</Link></Button>
      </div>
    );
  }

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-sm opacity-80">USA Car Volts — {location.name}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Car Electrical Services in {location.name}</h1>
            <p className="text-lg opacity-90">{location.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-foreground/80 leading-relaxed mb-8">{location.description}</p>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Cities We Serve in {location.name}</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {location.cities.map((city) => (
              <span key={city} className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                {city}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Our Services in {location.name}</h2>
          <div className="space-y-6 mb-12">
            {location.services.map((svc) => (
              <div key={svc.slug} className="bg-card rounded-lg p-6 card-elevated">
                <h3 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {svc.name} in {location.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{svc.desc}</p>
                <Link to={`/services/${svc.slug}`} className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-hero-gradient text-primary-foreground rounded-xl p-10 text-center">
            <Zap className="h-10 w-10 mx-auto mb-3 animate-bolt-flash" />
            <h2 className="text-2xl font-heading font-bold mb-3">Need Car Electrical Service in {location.name}?</h2>
            <p className="opacity-90 mb-6">Contact USA Car Volts for expert service at <a href="https://www.usacarvolts.com" className="underline">www.usacarvolts.com</a></p>
            <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
              <a href="tel:+1-800-555-VOLT"><Phone className="h-5 w-5 mr-2" /> Call 1-800-555-VOLT</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
