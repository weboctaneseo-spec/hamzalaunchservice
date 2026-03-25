import { Car, Zap, Battery, Wrench, Gauge } from "lucide-react";

const CarAnimation = () => {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Road */}
      <div className="relative h-32">
        {/* Road line */}
        <div className="absolute bottom-8 left-0 right-0 h-0.5 bg-border" />
        <div className="absolute bottom-7 left-0 right-0 flex gap-4 justify-center">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-8 h-0.5 bg-muted-foreground/30" />
          ))}
        </div>

        {/* Animated car 1 */}
        <div className="absolute bottom-10 animate-car-drive-in">
          <Car className="h-16 w-16 text-primary" />
        </div>

        {/* Floating icons */}
        <div className="absolute top-0 left-[15%] animate-float" style={{ animationDelay: "0s" }}>
          <Battery className="h-8 w-8 text-primary/40" />
        </div>
        <div className="absolute top-2 left-[35%] animate-float" style={{ animationDelay: "0.5s" }}>
          <Zap className="h-6 w-6 text-accent/40 animate-bolt-flash" />
        </div>
        <div className="absolute top-4 left-[55%] animate-float" style={{ animationDelay: "1s" }}>
          <Wrench className="h-7 w-7 text-primary/30" />
        </div>
        <div className="absolute top-1 left-[75%] animate-float" style={{ animationDelay: "1.5s" }}>
          <Gauge className="h-8 w-8 text-accent/30" />
        </div>
        <div className="absolute top-3 left-[90%] animate-float" style={{ animationDelay: "0.7s" }}>
          <Zap className="h-5 w-5 text-primary/50 animate-bolt-flash" />
        </div>
      </div>
    </div>
  );
};

export default CarAnimation;
