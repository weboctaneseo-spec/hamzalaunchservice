import { useState, useEffect, useCallback, useRef } from "react";
import { Car, Zap, Battery, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const GAME_WIDTH = 300;
const GAME_HEIGHT = 400;
const CAR_SIZE = 40;
const BOLT_SIZE = 24;
const BOLT_SPEED = 3;
const SPAWN_INTERVAL = 800;

interface Bolt {
  id: number;
  x: number;
  y: number;
  type: "bolt" | "battery";
}

const CarCatchGame = () => {
  const [gameState, setGameState] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [carX, setCarX] = useState(GAME_WIDTH / 2 - CAR_SIZE / 2);
  const [bolts, setBolts] = useState<Bolt[]>([]);
  const gameRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const boltIdRef = useRef(0);
  const scoreRef = useRef(0);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    scoreRef.current = 0;
    setBolts([]);
    setCarX(GAME_WIDTH / 2 - CAR_SIZE / 2);
  };

  const handleMove = useCallback((clientX: number) => {
    if (!gameRef.current) return;
    const rect = gameRef.current.getBoundingClientRect();
    const x = clientX - rect.left - CAR_SIZE / 2;
    setCarX(Math.max(0, Math.min(GAME_WIDTH - CAR_SIZE, x)));
  }, []);

  useEffect(() => {
    if (gameState !== "playing") return;

    const spawnInterval = setInterval(() => {
      const id = boltIdRef.current++;
      const x = Math.random() * (GAME_WIDTH - BOLT_SIZE);
      const type = Math.random() > 0.7 ? "battery" : "bolt";
      setBolts((prev) => [...prev, { id, x, y: 0, type }]);
    }, SPAWN_INTERVAL);

    return () => clearInterval(spawnInterval);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== "playing") return;

    const tick = () => {
      setBolts((prev) => {
        const next: Bolt[] = [];
        let missed = false;
        for (const b of prev) {
          const ny = b.y + BOLT_SPEED;
          if (ny > GAME_HEIGHT) {
            if (b.type === "bolt") missed = true;
            continue;
          }
          // Collision with car
          if (
            ny + BOLT_SIZE >= GAME_HEIGHT - CAR_SIZE &&
            ny <= GAME_HEIGHT &&
            b.x + BOLT_SIZE > carX &&
            b.x < carX + CAR_SIZE
          ) {
            const points = b.type === "battery" ? 5 : 1;
            scoreRef.current += points;
            setScore(scoreRef.current);
            continue;
          }
          next.push({ ...b, y: ny });
        }
        if (missed) {
          setGameState("over");
          setHighScore((hs) => Math.max(hs, scoreRef.current));
          return [];
        }
        return next;
      });
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [gameState, carX]);

  return (
    <div className="bg-card rounded-xl p-6 card-elevated">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-primary" />
        <h3 className="font-heading font-bold text-foreground text-lg">Catch the Volts! Mini Game</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Move your car to catch bolts ⚡ and batteries 🔋. Don't let bolts fall!</p>

      <div
        ref={gameRef}
        className="relative mx-auto border-2 border-border rounded-lg overflow-hidden cursor-none select-none"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT, background: "linear-gradient(180deg, hsl(214 80% 52% / 0.05) 0%, hsl(214 80% 52% / 0.15) 100%)" }}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {gameState === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <Car className="h-12 w-12 text-primary animate-float" />
            <Button size="sm" onClick={startGame}>Start Game</Button>
          </div>
        )}

        {gameState === "over" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/80 z-10">
            <p className="font-heading font-bold text-foreground text-xl">Game Over!</p>
            <p className="text-sm text-muted-foreground">Score: {score} | Best: {highScore}</p>
            <Button size="sm" onClick={startGame}>Play Again</Button>
          </div>
        )}

        {gameState === "playing" && (
          <>
            {/* Score */}
            <div className="absolute top-2 left-3 text-xs font-heading font-bold text-foreground z-10">
              ⚡ {score}
            </div>

            {/* Bolts */}
            {bolts.map((b) => (
              <div key={b.id} className="absolute" style={{ left: b.x, top: b.y }}>
                {b.type === "bolt" ? (
                  <Zap className="text-primary" style={{ width: BOLT_SIZE, height: BOLT_SIZE }} />
                ) : (
                  <Battery className="text-accent" style={{ width: BOLT_SIZE, height: BOLT_SIZE }} />
                )}
              </div>
            ))}

            {/* Car */}
            <div className="absolute" style={{ left: carX, bottom: 0 }}>
              <Car className="text-primary" style={{ width: CAR_SIZE, height: CAR_SIZE }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarCatchGame;
