import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogContent: Record<string, { title: string; date: string; category: string; content: string[] }> = {
  "signs-your-car-battery-needs-replacement": {
    title: "7 Warning Signs Your Car Battery Needs Replacement",
    date: "2026-03-20",
    category: "Battery Care",
    content: [
      "Your car battery is one of the most critical components in your vehicle's electrical system. Without a properly functioning battery, your car simply won't start. At USA Car Volts, we see hundreds of battery-related issues every month, and most of them could have been prevented with early detection.",
      "Here are the 7 most common warning signs that your car battery is on its way out: 1) Slow engine cranking — if your engine takes longer than usual to turn over, your battery may be losing its charge capacity. 2) Dim headlights — headlights that dim when idling but brighten when you rev the engine suggest a weak battery or failing alternator. 3) Dashboard warning light — the battery-shaped warning light is your car's direct alert that something is wrong with the charging system.",
      "4) Swollen battery case — heat causes the battery case to swell, which can shorten its lifespan significantly. This is particularly common in Florida and other hot climates. 5) Corrosion on terminals — white or greenish deposits on battery terminals indicate corrosion, which can impede electrical connections. 6) Old age — most car batteries last 3-5 years. If yours is in that range, it's time for a proactive replacement. 7) Frequent jump starts — if you need to jump-start your car more than once in a month, your battery is likely failing.",
      "If you notice any of these signs, don't wait until you're stranded. Contact USA Car Volts at www.usacarvolts.com for a comprehensive battery test and, if needed, a professional replacement using premium-quality batteries. Our same-day service means you'll be back on the road quickly, with a warranty-backed battery that's right for your vehicle and climate.",
    ],
  },
  "alternator-vs-battery-problems": {
    title: "Alternator vs Battery Problems: How to Tell the Difference",
    date: "2026-03-15",
    category: "Diagnostics",
    content: [
      "One of the most common diagnostic challenges car owners face is determining whether their vehicle's issues stem from a failing battery or a malfunctioning alternator. Both components are essential to your car's electrical system, and their symptoms can overlap significantly.",
      "Battery problems typically manifest as: difficulty starting the car (slow cranking), needing frequent jump starts, the battery being more than 3 years old, corrosion on terminals, and the car not starting at all after sitting overnight. These symptoms suggest the battery itself can no longer hold or deliver sufficient charge.",
      "Alternator problems, on the other hand, tend to show: dimming or flickering lights while driving, dashboard warning lights (battery or ALT), a whining noise from the engine, electrical accessories losing power while the engine is running, and a brand-new battery dying within days. These symptoms indicate that the alternator isn't properly charging the battery while the engine runs.",
      "The simplest home test is to jump-start your car and then disconnect the jumper cables. If the car dies immediately, it's likely an alternator issue. If it runs but won't start again later, it's probably a battery problem. However, for an accurate diagnosis, visit USA Car Volts at www.usacarvolts.com where our technicians use advanced testing equipment to measure alternator output, battery capacity, and overall charging system health.",
    ],
  },
};

const defaultContent = {
  title: "Blog Post",
  date: "2026-03-01",
  category: "General",
  content: [
    "This blog post is coming soon. Stay tuned for expert automotive electrical content from USA Car Volts.",
    "In the meantime, explore our other blog posts or contact us at www.usacarvolts.com for any car electrical needs.",
  ],
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogContent[slug || ""] || { ...defaultContent, title: (slug || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-3 text-xs opacity-80">
            <span className="bg-primary-foreground/20 px-2.5 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />USA Car Volts Team</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold">{post.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </article>

          <div className="bg-hero-gradient text-primary-foreground rounded-xl p-8 text-center mt-12">
            <Zap className="h-8 w-8 mx-auto mb-3 animate-bolt-flash" />
            <h2 className="text-xl font-heading font-bold mb-2">Need Expert Car Electrical Service?</h2>
            <p className="opacity-90 mb-4 text-sm">Visit <a href="https://www.usacarvolts.com" className="underline">www.usacarvolts.com</a> or call us today</p>
            <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
              <a href="tel:+1-800-555-VOLT"><Phone className="h-5 w-5 mr-2" /> Call 1-800-555-VOLT</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
