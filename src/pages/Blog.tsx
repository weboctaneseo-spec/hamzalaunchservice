import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    slug: "signs-your-car-battery-needs-replacement",
    title: "7 Warning Signs Your Car Battery Needs Replacement",
    excerpt: "Learn the telltale signs that your car battery is failing and when it's time for a replacement. Our expert guide helps you avoid getting stranded.",
    date: "2026-03-20",
    author: "USA Car Volts Team",
    category: "Battery Care",
  },
  {
    slug: "alternator-vs-battery-problems",
    title: "Alternator vs Battery Problems: How to Tell the Difference",
    excerpt: "Is it your battery or your alternator? Discover the key differences in symptoms and learn how to diagnose each issue correctly.",
    date: "2026-03-15",
    author: "USA Car Volts Team",
    category: "Diagnostics",
  },
  {
    slug: "ev-charging-home-installation-guide",
    title: "Complete Guide to Home EV Charger Installation",
    excerpt: "Everything you need to know about installing a Level 2 EV charger at home, including costs, electrical requirements, and choosing the right charger.",
    date: "2026-03-10",
    author: "USA Car Volts Team",
    category: "EV Charging",
  },
  {
    slug: "car-electrical-system-maintenance-tips",
    title: "10 Essential Car Electrical System Maintenance Tips",
    excerpt: "Keep your car's electrical system in top shape with these expert maintenance tips from USA Car Volts. Prevention is always better than repair.",
    date: "2026-03-05",
    author: "USA Car Volts Team",
    category: "Maintenance",
  },
  {
    slug: "common-car-electrical-problems-solutions",
    title: "Most Common Car Electrical Problems and Their Solutions",
    excerpt: "From dead batteries to blown fuses, explore the most common car electrical issues and learn how professionals at USA Car Volts solve them.",
    date: "2026-02-28",
    author: "USA Car Volts Team",
    category: "Troubleshooting",
  },
  {
    slug: "florida-car-battery-tips-hot-climate",
    title: "How Florida's Heat Affects Your Car Battery — Tips to Extend Its Life",
    excerpt: "Florida's extreme heat can cut your car battery life in half. Learn proven strategies to protect and extend your battery's lifespan in hot climates.",
    date: "2026-02-20",
    author: "USA Car Volts Team",
    category: "Regional Tips",
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">USA Car Volts Blog</h1>
          <p className="text-lg opacity-90">Expert tips, guides, and news about car electrical systems from <a href="https://www.usacarvolts.com" className="underline">www.usacarvolts.com</a></p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-card rounded-lg p-6 card-elevated group">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />{post.author}</span>
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
