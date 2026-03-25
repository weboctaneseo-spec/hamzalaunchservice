import { Link } from "react-router-dom";
import { Zap, Battery, Settings, Car, Shield, Clock, MapPin, Star, CheckCircle, ArrowRight, Phone, Wrench, CircuitBoard, Plug, Gauge, Lightbulb, AlertTriangle, ThermometerSun, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import TableOfContents from "@/components/TableOfContents";
import CarAnimation from "@/components/CarAnimation";
import CarCatchGame from "@/components/CarCatchGame";
import EVCostCalculator from "@/components/EVCostCalculator";
import heroImg from "@/assets/hero-car-service.jpg";
import batteryImg from "@/assets/battery-service.jpg";
import alternatorImg from "@/assets/alternator-service.jpg";
import starterImg from "@/assets/starter-service.jpg";
import evImg from "@/assets/ev-service.jpg";

const tocItems = [
  { id: "about-usa-car-volts", text: "About USA Car Volts", level: 2 },
  { id: "our-car-electrical-services", text: "Our Car Electrical Services", level: 2 },
  { id: "battery-replacement", text: "Battery Replacement Service", level: 3 },
  { id: "alternator-repair", text: "Alternator Repair & Replacement", level: 3 },
  { id: "starter-motor-repair", text: "Starter Motor Repair", level: 3 },
  { id: "electrical-diagnostics", text: "Car Electrical Diagnostics", level: 3 },
  { id: "ev-charging", text: "EV Charging Installation", level: 3 },
  { id: "wiring-harness", text: "Wiring Harness Repair", level: 3 },
  { id: "ev-cost-calculator", text: "EV Cost Savings Calculator", level: 2 },
  { id: "why-choose-us", text: "Why Choose USA Car Volts", level: 2 },
  { id: "service-locations", text: "Our Service Locations", level: 2 },
  { id: "how-it-works", text: "How It Works", level: 2 },
  { id: "customer-testimonials", text: "Customer Testimonials", level: 2 },
  { id: "car-electrical-guide", text: "Car Electrical System Guide", level: 2 },
  { id: "common-problems", text: "Common Electrical Problems", level: 3 },
  { id: "maintenance-tips", text: "Maintenance Tips", level: 3 },
  { id: "faq", text: "Frequently Asked Questions", level: 2 },
  { id: "mini-game", text: "Catch the Volts Game", level: 2 },
  { id: "contact-us", text: "Contact Us Today", level: 2 },
];

const Index = () => {
  return (
    <>
      {/* JSON-LD: AutoRepair + LocalBusiness + Organization + AggregateRating */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "USA Car Volts",
            "url": "https://www.usacarvolts.com",
            "telephone": "+1-800-555-VOLT",
            "email": "info@usacarvolts.com",
            "description": "Expert car electrical services across the USA including battery replacement, alternator repair, starter motor repair, EV charging installation and more.",
            "areaServed": [
              { "@type": "State", "name": "Florida" },
              { "@type": "State", "name": "California" },
            ],
            "serviceType": ["Car Battery Replacement", "Alternator Repair", "Starter Motor Repair", "Car Electrical Diagnostics", "EV Charging Installation", "Wiring Harness Repair"],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "527",
              "bestRating": "5",
              "worstRating": "1",
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sarah M." },
                "datePublished": "2026-02-15",
                "reviewBody": "USA Car Volts saved me when my car wouldn't start at a parking lot. Their mobile service arrived in 30 minutes and had me back on the road with a new battery and alternator check. Incredibly professional!",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "James R." },
                "datePublished": "2026-01-22",
                "reviewBody": "I needed an EV charger installed at my home for my new Tesla. The team at USA Car Volts handled everything from the electrical panel upgrade to the charger installation. Clean, fast, and reasonably priced.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Maria L." },
                "datePublished": "2026-02-28",
                "reviewBody": "After three other shops couldn't find my intermittent electrical problem, USA Car Volts diagnosed it in under an hour. They fixed it and my car has been perfect since. Highly recommend!",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "USA Car Volts",
            "url": "https://www.usacarvolts.com",
            "logo": "https://www.usacarvolts.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-VOLT",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": ["English", "Spanish"],
            },
            "sameAs": [
              "https://www.facebook.com/usacarvolts",
              "https://www.instagram.com/usacarvolts",
              "https://www.youtube.com/usacarvolts",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "USA Car Volts - Florida",
            "url": "https://www.usacarvolts.com/locations/florida",
            "telephone": "+1-800-555-VOLT",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "FL",
              "addressCountry": "US",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.9944",
              "longitude": "-81.7603",
            },
            "openingHours": "Mo-Sa 08:00-18:00",
            "priceRange": "$$",
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "USA Car Volts - California",
            "url": "https://www.usacarvolts.com/locations/california",
            "telephone": "+1-800-555-VOLT",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "CA",
              "addressCountry": "US",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.7783",
              "longitude": "-119.4179",
            },
            "openingHours": "Mo-Sa 08:00-18:00",
            "priceRange": "$$",
          },
        ]),
      }} />

      {/* ======== HERO SECTION ======== */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img src={heroImg} alt="Professional car electrical service technician working on vehicle battery and electrical system at USA Car Volts" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 animate-bolt-flash" />
              <span className="text-sm font-medium opacity-90">America's #1 Car Electrical Service Provider</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Professional Car Electrical Services You Can Trust
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              From battery replacements to complete electrical diagnostics, USA Car Volts delivers expert automotive electrical solutions across Florida, California, and nationwide. Fast, reliable, and affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
                <a href="tel:+1-800-555-VOLT">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 1-800-555-VOLT
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services/battery-replacement">
                  Explore Services <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Animated car */}
        <div className="absolute bottom-4 right-10 hidden xl:block animate-car-drive-in">
          <Car className="h-24 w-24 text-primary-foreground/20" />
        </div>
      </section>

      {/* ======== CAR ANIMATION BANNER ======== */}
      <CarAnimation />

      {/* ======== TRUST BADGES ======== */}
      <section className="bg-card py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "Licensed & Insured", sub: "Fully certified technicians" },
              { icon: Clock, label: "Same-Day Service", sub: "Quick turnaround time" },
              { icon: Star, label: "5-Star Rated", sub: "527+ positive reviews" },
              { icon: CheckCircle, label: "Warranty Included", sub: "All work guaranteed" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <item.icon className="h-8 w-8 text-primary" />
                <span className="font-heading font-bold text-foreground text-sm">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== MAIN CONTENT WITH TOC ======== */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* TOC Sidebar */}
            <aside className="lg:w-72 shrink-0 hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* ABOUT */}
              <section id="about-usa-car-volts" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">About USA Car Volts — Your Trusted Car Electrical Service Partner</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Welcome to <strong>USA Car Volts</strong> — the nation's premier automotive electrical service provider. Founded with a mission to deliver top-tier car electrical solutions at competitive prices, we have grown to become one of the most trusted names in the automotive repair industry. Our team of ASE-certified technicians specializes exclusively in vehicle electrical systems, ensuring that every job we undertake meets the highest standards of quality and safety.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  At <a href="https://www.usacarvolts.com" className="text-primary hover:underline font-medium">www.usacarvolts.com</a>, we understand that modern vehicles are more electrically complex than ever before. Today's cars contain over 30 electronic control units, miles of wiring, and sophisticated sensor systems that require specialized knowledge and equipment to diagnose and repair. That's why we invest heavily in the latest diagnostic technology and continuous training for our technicians.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Whether you're dealing with a dead battery on a Monday morning, a failing alternator that's dimming your headlights, or you need a complete EV charging station installed at your home, USA Car Volts has the expertise and equipment to handle it all. We service all major vehicle makes and models, including domestic brands like Ford, Chevrolet, and Dodge, as well as imports such as Toyota, Honda, BMW, Mercedes-Benz, and more.
                </p>

                {/* Infographic: Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  {[
                    { icon: Wrench, value: "10,000+", label: "Repairs Completed" },
                    { icon: Star, value: "4.9★", label: "Average Rating" },
                    { icon: MapPin, value: "24+", label: "Service Locations" },
                    { icon: Clock, value: "30 min", label: "Avg Response Time" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-secondary rounded-lg p-4 text-center">
                      <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="text-xl font-heading font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our commitment goes beyond just fixing cars — we educate our customers about their vehicle's electrical systems, provide transparent pricing with no hidden fees, and back every repair with our comprehensive warranty. When you choose USA Car Volts, you're choosing peace of mind, professionalism, and the power to keep your vehicle running at peak performance.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With service centers strategically located across <Link to="/locations/florida" className="text-primary hover:underline font-medium">Florida</Link> and <Link to="/locations/california" className="text-primary hover:underline font-medium">California</Link>, and mobile service units that can come to your location, we make car electrical repair more convenient than ever. Our goal is simple: to be the first name you think of when your car needs electrical attention. Visit us at <a href="https://www.usacarvolts.com" className="text-primary hover:underline font-medium">www.usacarvolts.com</a> to learn more.
                </p>
              </section>

              {/* SERVICES OVERVIEW */}
              <section id="our-car-electrical-services" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Our Comprehensive Car Electrical Services</h2>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  USA Car Volts offers a full spectrum of automotive electrical services designed to keep your vehicle safe, reliable, and performing at its best. Our specialized service offerings cover everything from basic battery replacements to complex electrical system overhauls. Below, you'll find detailed information about each of our core services, all available through <a href="https://www.usacarvolts.com" className="text-primary hover:underline font-medium">www.usacarvolts.com</a>.
                </p>

                {/* Battery Replacement */}
                <div id="battery-replacement" className="mb-12">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img src={batteryImg} alt="Professional car battery replacement service by USA Car Volts certified technician" loading="lazy" width={800} height={600} className="w-full md:w-80 rounded-lg card-elevated object-cover" />
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                        <Battery className="h-6 w-6 text-primary" />
                        Car Battery Replacement Service
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Your car battery is the heart of your vehicle's electrical system. Without a properly functioning battery, your car simply won't start. At USA Car Volts, we offer premium <Link to="/services/battery-replacement" className="text-primary hover:underline font-medium">car battery replacement</Link> services using top-quality batteries from trusted manufacturers like Interstate, Optima, DieHard, and ACDelco.
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Our battery replacement service includes a comprehensive electrical system test to ensure your alternator and starter are functioning correctly, preventing premature battery failure. We test your charging system voltage, check for parasitic draws, clean and treat battery terminals, and ensure all connections are secure. Most battery replacements are completed in under 30 minutes.
                      </p>
                      {/* Quick info cards */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {[
                          { icon: Clock, text: "20-30 min service" },
                          { icon: DollarSign, text: "From $150" },
                          { icon: Shield, text: "2-5 yr warranty" },
                        ].map((info) => (
                          <span key={info.text} className="flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            <info.icon className="h-3 w-3 text-primary" /> {info.text}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" asChild>
                        <Link to="/services/battery-replacement">Learn More <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Alternator Repair */}
                <div id="alternator-repair" className="mb-12">
                  <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                    <img src={alternatorImg} alt="Expert alternator repair and testing service at USA Car Volts" loading="lazy" width={800} height={600} className="w-full md:w-80 rounded-lg card-elevated object-cover" />
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                        <Settings className="h-6 w-6 text-primary" />
                        Alternator Repair & Replacement
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        The alternator is your vehicle's power generator — it charges the battery and supplies electricity to all your car's systems while the engine is running. A failing alternator can cause a cascade of electrical issues, from dimming lights and weak air conditioning to complete electrical failure while driving.
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Our expert technicians at USA Car Volts use advanced diagnostic equipment to accurately test alternator output, voltage regulation, and diode functionality. We can determine whether your <Link to="/services/alternator-repair" className="text-primary hover:underline font-medium">alternator</Link> needs a simple repair — such as replacing brushes or a voltage regulator — or a complete replacement.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {[
                          { icon: Gauge, text: "Advanced testing" },
                          { icon: DollarSign, text: "From $400" },
                          { icon: Shield, text: "OEM quality" },
                        ].map((info) => (
                          <span key={info.text} className="flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            <info.icon className="h-3 w-3 text-primary" /> {info.text}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" asChild>
                        <Link to="/services/alternator-repair">Learn More <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Starter Motor */}
                <div id="starter-motor-repair" className="mb-12">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img src={starterImg} alt="Starter motor repair and replacement service at USA Car Volts" loading="lazy" width={800} height={600} className="w-full md:w-80 rounded-lg card-elevated object-cover" />
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                        <Wrench className="h-6 w-6 text-primary" />
                        Starter Motor Repair & Replacement
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        When you turn your key or push the start button, it's the starter motor that cranks your engine to life. A faulty <Link to="/services/starter-motor-repair" className="text-primary hover:underline font-medium">starter motor</Link> can leave you stranded, unable to start your vehicle regardless of your battery's condition. At USA Car Volts, we specialize in rapid starter motor diagnosis and repair.
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Our starter motor service begins with a thorough diagnostic check to distinguish between starter issues, battery problems, and ignition switch faults — three conditions that can produce similar symptoms. We test starter draw amperage, solenoid engagement, and Bendix gear condition to pinpoint the exact issue.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {[
                          { icon: Lightbulb, text: "Expert diagnosis" },
                          { icon: Clock, text: "Same-day service" },
                          { icon: Shield, text: "12mo warranty" },
                        ].map((info) => (
                          <span key={info.text} className="flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            <info.icon className="h-3 w-3 text-primary" /> {info.text}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" asChild>
                        <Link to="/services/starter-motor-repair">Learn More <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Electrical Diagnostics */}
                <div id="electrical-diagnostics" className="mb-12">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                    <CircuitBoard className="h-6 w-6 text-primary" />
                    Complete Car Electrical Diagnostics
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Modern vehicles contain incredibly sophisticated electrical systems that control everything from engine performance to climate control, safety features, and infotainment. When something goes wrong, pinpointing the exact cause requires advanced diagnostic equipment and deep expertise. That's where USA Car Volts' <Link to="/services/car-electrical-diagnostics" className="text-primary hover:underline font-medium">car electrical diagnostic services</Link> come in.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Our diagnostic service utilizes state-of-the-art OBD-II scanners, oscilloscopes, multimeters, and manufacturer-specific diagnostic tools to read fault codes, analyze live data streams, and perform component-level testing. We can diagnose issues with your ECU, BCM, TCM, ABS system, airbag system, power windows, door locks, lighting circuits, and any other electrical component.
                  </p>
                  {/* Diagnostic process infographic */}
                  <div className="bg-secondary rounded-lg p-4 mb-4">
                    <p className="text-xs font-heading font-bold text-foreground mb-3 uppercase tracking-wider">Our Diagnostic Process</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { icon: CircuitBoard, label: "OBD-II Scan" },
                        { icon: Gauge, label: "Live Data" },
                        { icon: Wrench, label: "Component Test" },
                        { icon: CheckCircle, label: "Full Report" },
                      ].map((step) => (
                        <div key={step.label} className="flex flex-col items-center gap-1 text-center">
                          <step.icon className="h-5 w-5 text-primary" />
                          <span className="text-xs text-muted-foreground">{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/services/car-electrical-diagnostics">Learn More <ArrowRight className="h-4 w-4 ml-1" /></Link>
                  </Button>
                </div>

                {/* EV Charging */}
                <div id="ev-charging" className="mb-12">
                  <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                    <img src={evImg} alt="Professional EV charging station installation service by USA Car Volts" loading="lazy" width={800} height={600} className="w-full md:w-80 rounded-lg card-elevated object-cover" />
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                        <Plug className="h-6 w-6 text-primary" />
                        EV Charging Station Installation
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        As electric vehicles continue to revolutionize the automotive industry, USA Car Volts is at the forefront of <Link to="/services/ev-charging-installation" className="text-primary hover:underline font-medium">EV charging installation</Link>. Whether you need a Level 2 home charger for your Tesla, Chevy Bolt, Ford Mustang Mach-E, or any other EV, our certified electricians can design and install the perfect charging solution for your needs.
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        Our EV charging installation service covers residential and commercial installations, including electrical panel upgrades, dedicated circuit installation, NEMA 14-50 outlet installation, hardwired charger mounting and configuration, Wi-Fi and smart charger setup, and compliance with all local building codes and NEC requirements.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {[
                          { icon: Zap, text: "Level 2 charging" },
                          { icon: DollarSign, text: "Tax credits available" },
                          { icon: ThermometerSun, text: "All climates" },
                        ].map((info) => (
                          <span key={info.text} className="flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            <info.icon className="h-3 w-3 text-primary" /> {info.text}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" asChild>
                        <Link to="/services/ev-charging-installation">Learn More <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Wiring Harness */}
                <div id="wiring-harness" className="mb-12">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                    <CircuitBoard className="h-6 w-6 text-primary" />
                    Wiring Harness Repair & Replacement
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Your vehicle's wiring harness is the nervous system of its electrical architecture. It bundles, routes, and protects the hundreds of wires that connect every electrical component in your car. Damaged or deteriorating wiring can cause intermittent electrical faults, short circuits, and even fire hazards. USA Car Volts offers expert <Link to="/services/wiring-harness-repair" className="text-primary hover:underline font-medium">wiring harness repair</Link> services to keep your vehicle safe and reliable.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Common causes of wiring harness damage include rodent chewing, heat damage from engine compartment temperatures, corrosion from moisture and road salt exposure, physical damage from accidents, and normal wear and aging over time. Our technicians can trace, repair, or completely replace damaged wiring harnesses using factory-spec connectors and weatherproof materials.
                  </p>
                  {/* Warning signs infographic */}
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-4">
                    <p className="text-xs font-heading font-bold text-foreground mb-2 flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-destructive" /> Warning Signs of Wiring Damage
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Intermittent failures", "Multiple blown fuses", "Burning smell", "Exposed wires"].map((sign) => (
                        <span key={sign} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Zap className="h-3 w-3 text-destructive" /> {sign}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* EV COST CALCULATOR */}
              <section id="ev-cost-calculator" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Calculate Your EV Savings</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Thinking about going electric? Use our interactive EV Cost Savings Calculator to see how much you could save annually by switching from a gas car to an electric vehicle. USA Car Volts can install your home EV charger — visit <a href="https://www.usacarvolts.com" className="text-primary hover:underline font-medium">www.usacarvolts.com</a> for a free quote.
                </p>
                <EVCostCalculator />
              </section>

              {/* WHY CHOOSE US */}
              <section id="why-choose-us" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Why Choose USA Car Volts for Your Car Electrical Needs?</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  With hundreds of auto repair shops across the country, why should you choose USA Car Volts? The answer lies in our unwavering commitment to specialization, quality, and customer satisfaction. Here's what sets us apart from the competition:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {[
                    { icon: CircuitBoard, title: "Electrical Specialists", desc: "Unlike general mechanics, we focus exclusively on automotive electrical systems. This specialization means deeper expertise, better tools, and faster diagnoses." },
                    { icon: Shield, title: "ASE-Certified Technicians", desc: "Every technician at USA Car Volts holds current ASE certification in electrical/electronic systems, ensuring your vehicle is in the most capable hands." },
                    { icon: Gauge, title: "Latest Diagnostic Technology", desc: "We invest in cutting-edge diagnostic equipment from Snap-on, Autel, and manufacturer-specific tools to accurately identify and resolve even the most complex electrical issues." },
                    { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees, no surprise charges. We provide detailed written estimates before any work begins, and our prices are competitive with industry standards." },
                    { icon: CheckCircle, title: "Warranty on All Work", desc: "Every repair we perform comes with a minimum 12-month/12,000-mile warranty, giving you peace of mind long after you leave our shop." },
                    { icon: Car, title: "Mobile Service Available", desc: "Can't come to us? We'll come to you. Our mobile service units are equipped with the same diagnostic tools and parts as our shops." },
                  ].map((item) => (
                    <div key={item.title} className="bg-card rounded-lg p-6 card-elevated">
                      <h4 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                        <item.icon className="h-5 w-5 text-primary shrink-0" />
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Our dedication to excellence has earned us a 4.9-star average rating across Google, Yelp, and BBB, with over 527 verified customer reviews. We're proud members of the Better Business Bureau with an A+ rating, and we're endorsed by AAA as a recommended auto repair facility. Experience the USA Car Volts difference — visit <a href="https://www.usacarvolts.com" className="text-primary hover:underline font-medium">www.usacarvolts.com</a> today.
                </p>
              </section>

              {/* SERVICE LOCATIONS */}
              <section id="service-locations" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Our Service Locations Across the United States</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  USA Car Volts currently operates service centers and mobile units in two of America's most populous states, with plans for nationwide expansion. Our strategically located facilities ensure that expert car electrical service is never far from where you live or work.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Link to="/locations/florida" className="group bg-card rounded-lg overflow-hidden card-elevated">
                    <div className="bg-hero-gradient p-8 text-primary-foreground">
                      <MapPin className="h-8 w-8 mb-3" />
                      <h3 className="text-2xl font-heading font-bold">Florida</h3>
                      <p className="opacity-80 text-sm mt-2">Miami, Orlando, Tampa, Jacksonville & more</p>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Our Florida operations cover the entire state, with primary service centers in Miami-Dade, Broward, Palm Beach, Orange, Hillsborough, and Duval counties. Florida's hot, humid climate can be particularly harsh on car electrical systems.
                      </p>
                      <span className="text-primary font-medium text-sm group-hover:underline flex items-center gap-1">
                        View Florida Services <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>

                  <Link to="/locations/california" className="group bg-card rounded-lg overflow-hidden card-elevated">
                    <div className="bg-hero-gradient p-8 text-primary-foreground">
                      <MapPin className="h-8 w-8 mb-3" />
                      <h3 className="text-2xl font-heading font-bold">California</h3>
                      <p className="opacity-80 text-sm mt-2">Los Angeles, San Francisco, San Diego & more</p>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        California is the nation's largest automotive market and the epicenter of the EV revolution. USA Car Volts has a strong presence across the Golden State.
                      </p>
                      <span className="text-primary font-medium text-sm group-hover:underline flex items-center gap-1">
                        View California Services <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              </section>

              {/* HOW IT WORKS */}
              <section id="how-it-works" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">How It Works — Getting Your Car Serviced Is Easy</h2>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  At USA Car Volts, we've streamlined the auto repair experience to be as simple and stress-free as possible. Here's our proven four-step process:
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", icon: Phone, title: "Contact Us", desc: "Call 1-800-555-VOLT or visit www.usacarvolts.com to describe your issue and schedule an appointment." },
                    { step: "2", icon: CircuitBoard, title: "Free Diagnosis", desc: "Our technicians perform a comprehensive electrical system diagnosis to identify the exact issue." },
                    { step: "3", icon: DollarSign, title: "Transparent Quote", desc: "We provide a detailed written estimate with parts and labor costs before any work begins." },
                    { step: "4", icon: Wrench, title: "Expert Repair", desc: "Our certified technicians perform the repair using quality parts, backed by our warranty." },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-14 h-14 rounded-full bg-hero-gradient text-primary-foreground flex items-center justify-center text-xl font-heading font-bold mx-auto mb-3 animate-pulse-glow">
                        {item.step}
                      </div>
                      <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <h4 className="font-heading font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* TESTIMONIALS */}
              <section id="customer-testimonials" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">What Our Customers Say About USA Car Volts</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: "Sarah M.", loc: "Miami, FL", text: "USA Car Volts saved me when my car wouldn't start at a parking lot. Their mobile service arrived in 30 minutes and had me back on the road with a new battery and alternator check. Incredibly professional!", rating: 5 },
                    { name: "James R.", loc: "Los Angeles, CA", text: "I needed an EV charger installed at my home for my new Tesla. The team at USA Car Volts handled everything from the electrical panel upgrade to the charger installation. Clean, fast, and reasonably priced.", rating: 5 },
                    { name: "Maria L.", loc: "Orlando, FL", text: "After three other shops couldn't find my intermittent electrical problem, USA Car Volts diagnosed it in under an hour — a corroded ground wire in the engine harness. They fixed it and my car has been perfect since. Highly recommend!", rating: 5 },
                    { name: "David K.", loc: "San Diego, CA", text: "Best automotive electrical shop I've ever used. They found a parasitic draw that two dealers couldn't figure out. Fair pricing, great communication, and the car works perfectly now.", rating: 5 },
                    { name: "Lisa T.", loc: "Tampa, FL", text: "Had my alternator replaced in under 2 hours. They showed me the old alternator and explained exactly what failed. Honest, transparent, and the car runs like new.", rating: 5 },
                    { name: "Robert P.", loc: "Sacramento, CA", text: "Excellent EV charger installation. They handled the permit, installed a dedicated 50A circuit, and had everything done in one day. Highly recommend for any EV owner.", rating: 5 },
                  ].map((review) => (
                    <div key={review.name} className="bg-card rounded-lg p-6 card-elevated">
                      <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{review.text}"</p>
                      <div>
                        <span className="font-heading font-bold text-foreground text-sm">{review.name}</span>
                        <span className="text-xs text-muted-foreground ml-2 flex items-center gap-1 inline-flex"><MapPin className="h-3 w-3" />{review.loc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CAR ELECTRICAL GUIDE */}
              <section id="car-electrical-guide" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Complete Guide to Your Car's Electrical System</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Understanding your vehicle's electrical system is the first step to recognizing problems early and avoiding costly repairs. At USA Car Volts, we believe informed customers make better decisions about their vehicle's care. Here's your comprehensive guide to automotive electrical systems, brought to you by <a href="https://www.usacarvolts.com" className="text-primary hover:underline font-medium">www.usacarvolts.com</a>.
                </p>

                {/* Visual: 3 core components */}
                <div className="grid grid-cols-3 gap-4 my-6">
                  {[
                    { icon: Battery, label: "Battery", desc: "Stores energy, starts engine" },
                    { icon: Settings, label: "Alternator", desc: "Generates power while running" },
                    { icon: Wrench, label: "Starter", desc: "Cranks engine to life" },
                  ].map((comp) => (
                    <div key={comp.label} className="bg-secondary rounded-lg p-4 text-center">
                      <comp.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-heading font-bold text-foreground text-sm">{comp.label}</p>
                      <p className="text-xs text-muted-foreground">{comp.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  Your car's electrical system consists of three primary components working together: the battery, the alternator, and the starter motor. The battery stores electrical energy and provides the initial power to start the engine. The alternator generates electricity while the engine is running, recharging the battery and powering all electrical accessories. The starter motor uses electrical energy from the battery to crank the engine during startup.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Beyond these three core components, modern vehicles contain dozens of additional electrical subsystems including the ignition system, lighting system, instrument cluster, entertainment and infotainment systems, power window and door lock modules, climate control system, safety systems (ABS, airbags, stability control), and advanced driver assistance systems (ADAS). All of these systems are interconnected through the vehicle's wiring harness and managed by multiple computer modules.
                </p>

                <div id="common-problems" className="mt-8 mb-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    Common Car Electrical Problems and Their Causes
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Electrical problems are among the most common reasons vehicles are brought in for service. At USA Car Volts, we see these issues regularly and can resolve them quickly:
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      "Dead or weak battery — caused by age, extreme temperatures, parasitic draws, or a failing alternator",
                      "Alternator failure — results in undercharging, overcharging, or complete loss of electrical power generation",
                      "Starter motor problems — worn solenoid, damaged Bendix gear, or electrical connection issues",
                      "Blown fuses — often caused by short circuits, overloaded circuits, or faulty components",
                      "Corroded or loose connections — leads to intermittent faults, resistance heating, and component malfunction",
                      "Failed sensors — engine, transmission, and emissions sensors can cause drivability and performance issues",
                      "Parasitic battery drain — a component staying powered when the vehicle is off, draining the battery overnight",
                      "Faulty ignition switch — can cause no-start conditions, intermittent stalling, or accessory malfunctions",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span className="leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="maintenance-tips" className="mt-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Car Electrical System Maintenance Tips from USA Car Volts
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Prevention is always better than repair. By following these maintenance tips from our experts at <a href="https://www.usacarvolts.com" className="text-primary hover:underline font-medium">www.usacarvolts.com</a>, you can extend the life of your car's electrical components and avoid unexpected breakdowns:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Have your battery tested every 6 months, especially before summer and winter seasons",
                      "Keep battery terminals clean and free of corrosion — apply anti-corrosion grease after cleaning",
                      "Have your alternator output tested annually as part of your regular vehicle maintenance",
                      "Don't leave accessories running (lights, radio, chargers) when the engine is off for extended periods",
                      "Address warning lights immediately — they're your car's way of telling you something needs attention",
                      "If your vehicle sits for extended periods, use a battery maintainer/trickle charger to prevent discharge",
                      "Have any aftermarket electrical accessories professionally installed to prevent wiring damage",
                      "Schedule a comprehensive electrical system inspection with USA Car Volts at least once a year",
                    ].map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-foreground/80">
                        <Zap className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span className="leading-relaxed text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                {/* FAQ Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                      { "@type": "Question", "name": "How long does a car battery replacement take?", "acceptedAnswer": { "@type": "Answer", "text": "Most battery replacements at USA Car Volts are completed in 20-30 minutes." } },
                      { "@type": "Question", "name": "How much does alternator repair cost?", "acceptedAnswer": { "@type": "Answer", "text": "Minor repairs range from $150-$300, while complete replacement usually costs $400-$800 including parts and labor." } },
                      { "@type": "Question", "name": "Do you offer mobile car electrical service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! USA Car Volts offers mobile service across Florida and California." } },
                      { "@type": "Question", "name": "Do you service electric vehicles?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We offer EV charging installation, high-voltage diagnostics, and EV electrical system maintenance." } },
                    ],
                  }),
                }} />
                <div className="space-y-6">
                  {[
                    { q: "How long does a car battery replacement take?", a: "Most battery replacements at USA Car Volts are completed in 20-30 minutes. This includes testing your charging system, removing the old battery, installing the new one, cleaning and treating terminals, and verifying the electrical system is functioning properly." },
                    { q: "How much does alternator repair cost?", a: "Alternator repair costs vary based on the vehicle make, model, and the extent of the damage. Minor repairs like brush or regulator replacement typically range from $150-$300, while complete alternator replacement usually costs $400-$800 including parts and labor. Contact us at www.usacarvolts.com for a free estimate specific to your vehicle." },
                    { q: "Do you offer mobile car electrical service?", a: "Yes! USA Car Volts offers mobile service across our coverage areas in Florida and California. Our mobile units are fully equipped with diagnostic tools, common parts, and everything needed to perform most electrical repairs on-site. Mobile service is available Monday through Saturday." },
                    { q: "What brands of car batteries do you use?", a: "We use premium batteries from trusted manufacturers including Interstate, Optima, DieHard, ACDelco, Bosch, and Exide. We'll recommend the best battery for your specific vehicle, driving habits, and climate conditions." },
                    { q: "How do I know if my car has an electrical problem?", a: "Common signs include dim or flickering lights, slow engine cranking, dashboard warning lights, dead battery, electrical accessories not working, burning smell from electrical components, and blown fuses. If you notice any of these symptoms, schedule a diagnostic check at www.usacarvolts.com." },
                    { q: "Do you service electric vehicles (EVs)?", a: "Absolutely! USA Car Volts services both traditional combustion vehicles and electric vehicles. We offer EV-specific services including charging station installation, high-voltage battery diagnostics, and EV electrical system maintenance. Our technicians are certified in EV safety protocols." },
                    { q: "What areas do you currently serve?", a: "We currently serve Florida (including Miami, Orlando, Tampa, Jacksonville) and California (including Los Angeles, San Francisco, San Diego, Sacramento). We're expanding to additional states — visit www.usacarvolts.com for the latest coverage information." },
                    { q: "Is there a warranty on your repairs?", a: "Yes, all repairs performed by USA Car Volts come with a minimum 12-month/12,000-mile warranty. Battery replacements carry the manufacturer's warranty, which typically ranges from 2-5 years. Our warranty covers both parts and labor." },
                  ].map((faq) => (
                    <div key={faq.q} className="bg-card rounded-lg p-6 card-elevated">
                      <h4 className="font-heading font-bold text-foreground mb-2">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* MINI GAME */}
              <section id="mini-game" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Take a Break — Play Our Mini Game!</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  While you're here, try our fun "Catch the Volts" mini game! Move your car left and right to catch falling bolts ⚡ and batteries 🔋. Don't let any bolts hit the ground!
                </p>
                <CarCatchGame />
              </section>

              {/* CTA */}
              <section id="contact-us" className="bg-hero-gradient text-primary-foreground rounded-2xl p-10 md:p-16 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 animate-bolt-flash" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Get Your Car's Electrical System Fixed?</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Don't let electrical problems leave you stranded. Contact USA Car Volts today for fast, reliable, and affordable car electrical services. Our expert technicians are standing by to help — call now or visit <a href="https://www.usacarvolts.com" className="underline font-medium">www.usacarvolts.com</a> to schedule your appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
                    <a href="tel:+1-800-555-VOLT">
                      <Phone className="h-5 w-5 mr-2" />
                      Call 1-800-555-VOLT
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/services/battery-replacement">
                      Browse All Services <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
