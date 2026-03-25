import { Link, useParams } from "react-router-dom";
import { Battery, Settings, Wrench, CircuitBoard, Plug, Zap, Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import batteryImg from "@/assets/battery-service.jpg";
import alternatorImg from "@/assets/alternator-service.jpg";
import starterImg from "@/assets/starter-service.jpg";
import evImg from "@/assets/ev-service.jpg";
import heroImg from "@/assets/hero-car-service.jpg";

const serviceData: Record<string, {
  title: string;
  metaDesc: string;
  icon: React.ElementType;
  image: string;
  intro: string;
  details: string[];
  signs: string[];
  benefits: string[];
}> = {
  "battery-replacement": {
    title: "Car Battery Replacement Service",
    metaDesc: "Professional car battery replacement service by USA Car Volts. Same-day service, premium batteries, warranty included. Call 1-800-555-VOLT.",
    icon: Battery,
    image: batteryImg,
    intro: "Your car battery is the cornerstone of your vehicle's electrical system. USA Car Volts provides expert car battery replacement services using premium-quality batteries from industry-leading manufacturers. Our ASE-certified technicians ensure a thorough replacement process that includes complete electrical system testing.",
    details: [
      "Comprehensive pre-replacement electrical system diagnosis to identify underlying issues",
      "Premium battery selection from Interstate, Optima, DieHard, ACDelco, and Bosch",
      "Professional installation with torque-spec terminal connections",
      "Battery terminal cleaning and anti-corrosion treatment",
      "Charging system voltage and amperage verification",
      "Parasitic draw testing to prevent premature battery failure",
      "Old battery recycling in compliance with environmental regulations",
      "12-month minimum warranty plus manufacturer battery warranty (2-5 years)",
    ],
    signs: [
      "Slow engine cranking or clicking sound when starting",
      "Dim headlights, especially when idling",
      "Battery warning light illuminated on dashboard",
      "Swollen, cracked, or leaking battery case",
      "Corrosion buildup on battery terminals",
      "Battery is more than 3-5 years old",
      "Needing frequent jump starts",
    ],
    benefits: [
      "Same-day service — most replacements completed in 20-30 minutes",
      "Mobile service available — we come to your location",
      "Free electrical system health check included with every replacement",
      "Competitive pricing with no hidden fees",
      "All major vehicle makes and models serviced",
    ],
  },
  "alternator-repair": {
    title: "Alternator Repair & Replacement Service",
    metaDesc: "Expert alternator repair and replacement by USA Car Volts. Advanced diagnostics, OEM-quality parts, same-day service. Visit www.usacarvolts.com.",
    icon: Settings,
    image: alternatorImg,
    intro: "The alternator is your vehicle's electrical power plant, responsible for generating electricity to power all systems and recharge the battery while the engine runs. USA Car Volts specializes in precision alternator diagnostics, repair, and replacement to restore your vehicle's electrical performance.",
    details: [
      "Advanced alternator output testing with load simulation",
      "Voltage regulator testing and replacement",
      "Diode rectifier bridge inspection and repair",
      "Brush and slip ring inspection and replacement",
      "Belt tension and condition assessment",
      "Bearing inspection and replacement",
      "Complete charging circuit wiring inspection",
      "Post-repair verification with full-system electrical test",
    ],
    signs: [
      "Dashboard battery or ALT warning light",
      "Dimming or flickering headlights",
      "Whining or grinding noise from engine bay",
      "Dead battery despite recent replacement",
      "Electrical accessories malfunctioning or behaving erratically",
      "Burning rubber or electrical smell",
      "Visible belt damage or looseness",
    ],
    benefits: [
      "Same-day alternator repair and replacement for most vehicles",
      "OEM-quality replacement alternators with warranty",
      "Expert diagnosis distinguishing alternator from battery issues",
      "Transparent pricing with detailed written estimates",
      "Mobile service available across Florida and California",
    ],
  },
  "starter-motor-repair": {
    title: "Starter Motor Repair & Replacement",
    metaDesc: "Professional starter motor repair and replacement at USA Car Volts. Fast diagnosis, quality parts, warranty included. Call 1-800-555-VOLT.",
    icon: Wrench,
    image: starterImg,
    intro: "The starter motor is the critical component that cranks your engine to life. When it fails, your vehicle simply won't start. USA Car Volts offers rapid, expert starter motor diagnosis, repair, and replacement to get you back on the road quickly and safely.",
    details: [
      "Comprehensive starter motor current draw testing",
      "Solenoid engagement and hold-in coil testing",
      "Bendix/drive gear inspection and replacement",
      "Starter relay and circuit testing",
      "Ignition switch functionality verification",
      "Flywheel/flexplate ring gear inspection",
      "Wiring and connection point inspection",
      "Post-repair startup verification and system test",
    ],
    signs: [
      "Clicking sound when turning the key with no engine crank",
      "Slow or labored engine cranking",
      "Grinding noise during startup",
      "Starter stays engaged after engine starts (freewheeling)",
      "Intermittent no-start conditions",
      "Smoke or burning smell from starter area",
      "Engine cranks but won't start (may indicate related issues)",
    ],
    benefits: [
      "Accurate diagnosis distinguishing starter, battery, and ignition issues",
      "OEM-specification replacement starters for all vehicle makes",
      "Same-day service for most starter replacements",
      "12-month/12,000-mile warranty on all starter work",
      "Mobile emergency service for no-start situations",
    ],
  },
  "car-electrical-diagnostics": {
    title: "Complete Car Electrical Diagnostics",
    metaDesc: "State-of-the-art car electrical diagnostics by USA Car Volts. OBD-II scanning, live data analysis, component testing. Visit www.usacarvolts.com.",
    icon: CircuitBoard,
    image: heroImg,
    intro: "Modern vehicles contain incredibly complex electrical systems with dozens of computer modules, hundreds of sensors, and miles of wiring. When something goes wrong, accurate diagnosis is essential. USA Car Volts uses state-of-the-art diagnostic technology to pinpoint electrical issues quickly and accurately.",
    details: [
      "Full OBD-II diagnostic scan for stored, pending, and history codes",
      "Freeze-frame data analysis to understand fault conditions",
      "Live data stream monitoring and analysis",
      "Component-level testing (relays, actuators, sensors, modules)",
      "Circuit resistance and continuity testing",
      "Oscilloscope waveform analysis for signal integrity",
      "CAN bus communication testing between modules",
      "Detailed diagnostic report with repair recommendations",
    ],
    signs: [
      "Check engine light or other dashboard warning lights",
      "Intermittent electrical failures or glitches",
      "Unexplained battery drain",
      "Electrical accessories not functioning properly",
      "Strange noises from electrical components",
      "Poor engine performance or fuel economy",
      "Safety system warnings (ABS, airbag, stability control)",
    ],
    benefits: [
      "Manufacturer-specific and universal diagnostic tools",
      "Experienced technicians who can interpret complex data",
      "Prevents unnecessary part replacement through accurate diagnosis",
      "Written diagnostic report you can keep for reference",
      "Diagnosis fee credited toward repair costs",
    ],
  },
  "ev-charging-installation": {
    title: "EV Charging Station Installation",
    metaDesc: "Professional EV charging installation by USA Car Volts. Level 2 home chargers, commercial installations, all brands. Visit www.usacarvolts.com.",
    icon: Plug,
    image: evImg,
    intro: "As the electric vehicle revolution accelerates, having a reliable home or business charging solution is essential. USA Car Volts provides professional EV charging station installation services, from initial electrical assessment to final commissioning, ensuring your charger is safe, code-compliant, and optimized for your needs.",
    details: [
      "Electrical panel capacity assessment and upgrade if needed",
      "Dedicated 240V circuit installation (40A or 50A)",
      "NEMA 14-50 outlet or hardwired charger installation",
      "All major charger brands: Tesla, ChargePoint, JuiceBox, Wallbox",
      "Smart charger Wi-Fi configuration and app setup",
      "Load management for homes with limited electrical capacity",
      "Commercial multi-unit installations for businesses and apartments",
      "Full compliance with NEC, local codes, and permitting",
    ],
    signs: [
      "You've purchased or ordered an electric vehicle",
      "Your current Level 1 (110V) charging is too slow",
      "You want to maximize your EV's charging speed at home",
      "Your business wants to offer EV charging to customers or employees",
      "You're building a new home and want EV-ready electrical",
      "Your existing EV charger needs repair or upgrade",
      "You want to take advantage of federal/state EV tax credits",
    ],
    benefits: [
      "Full-service installation from planning to commissioning",
      "Licensed and insured electricians",
      "Assistance with permits and utility rebate applications",
      "Post-installation support and troubleshooting",
      "Competitive pricing with transparent quotes",
    ],
  },
  "wiring-harness-repair": {
    title: "Wiring Harness Repair & Replacement",
    metaDesc: "Expert wiring harness repair by USA Car Volts. Rodent damage, corrosion, accident repair. Professional automotive wiring. Visit www.usacarvolts.com.",
    icon: CircuitBoard,
    image: heroImg,
    intro: "Your vehicle's wiring harness is the backbone of its electrical system — bundling, routing, and protecting the hundreds of wires that connect every component. USA Car Volts specializes in wiring harness diagnosis, repair, and replacement, restoring electrical integrity to damaged or deteriorating harness systems.",
    details: [
      "Complete wiring harness inspection and continuity testing",
      "Rodent damage assessment and repair with protective sheathing",
      "Corrosion treatment and waterproof connector replacement",
      "Accident damage wiring repair and rerouting",
      "Aftermarket installation wiring correction",
      "Factory-specification connector and terminal crimping",
      "Heat-resistant loom and protective wrapping application",
      "Full circuit verification after repair",
    ],
    signs: [
      "Intermittent electrical failures that come and go",
      "Multiple blown fuses without obvious cause",
      "Visible wire damage, chewing, or exposed conductors",
      "Burning smell from behind dashboard or in engine bay",
      "Electrical components working inconsistently",
      "Warning lights triggered by vibration or temperature changes",
      "Evidence of rodent activity in engine compartment",
    ],
    benefits: [
      "Expert wire tracing and fault isolation techniques",
      "Factory-specification repair materials and connectors",
      "Rodent-deterrent protective treatments available",
      "Comprehensive post-repair system verification",
      "12-month warranty on all wiring harness repairs",
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
        <Button asChild><Link to="/">Go Home</Link></Button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-8 w-8" />
              <span className="text-sm opacity-80">USA Car Volts Service</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{service.title}</h1>
            <p className="text-lg opacity-90 leading-relaxed">{service.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <img src={service.image} alt={service.title + " by USA Car Volts"} loading="lazy" width={800} height={600} className="w-full md:w-96 rounded-lg card-elevated object-cover" />
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">What's Included</h2>
              <ul className="space-y-2">
                {service.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 card-elevated">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Warning Signs</h3>
              <ul className="space-y-2">
                {service.signs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 card-elevated">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Why Choose USA Car Volts</h3>
              <ul className="space-y-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-hero-gradient text-primary-foreground rounded-xl p-10 text-center">
            <h2 className="text-2xl font-heading font-bold mb-3">Need {service.title}?</h2>
            <p className="opacity-90 mb-6">Contact USA Car Volts today for fast, reliable service at <a href="https://www.usacarvolts.com" className="underline">www.usacarvolts.com</a></p>
            <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
              <a href="tel:+1-800-555-VOLT"><Phone className="h-5 w-5 mr-2" /> Call 1-800-555-VOLT</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
