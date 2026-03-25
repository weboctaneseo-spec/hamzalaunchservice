import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarFront, LoaderCircle } from "lucide-react";

const LOADER_DURATION = 1500;

const RouteLoadingOverlay = () => {
  const { pathname, search } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timeoutId = window.setTimeout(() => setVisible(false), LOADER_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, search]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm"
      aria-live="polite"
      aria-label="Page loading"
      role="status"
    >
      <div className="w-full max-w-sm px-6">
        <div className="mb-4 flex items-center justify-center gap-3 text-foreground">
          <LoaderCircle className="h-5 w-5 animate-spin text-primary" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Loading page
          </span>
        </div>

        <div className="rounded-full border border-border bg-muted/70 p-3 shadow-[var(--shadow-elegant)]">
          <div className="relative h-10 overflow-hidden rounded-full bg-secondary/80">
            <div className="absolute inset-y-1 left-3 right-3 rounded-full border-t border-dashed border-primary/30" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-[drive-loader_1.5s_ease-in-out_forwards] text-primary">
              <CarFront className="h-8 w-8 drop-shadow-[0_0_10px_hsl(var(--primary)/0.35)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteLoadingOverlay;
