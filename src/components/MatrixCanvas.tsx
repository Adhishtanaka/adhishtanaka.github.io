import { useEffect, useRef } from "react";

export default function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops: number[] = [];

    function resizeCanvas() {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth * (window.innerWidth >= 768 ? 0.6 : 1);
      c.height = window.innerHeight;
      initDrops();
    }

    function initDrops() {
      const c = canvasRef.current;
      if (!c) return;
      columns = c.width / fontSize;
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function draw() {
      const c = canvasRef.current;
      if (!c || !ctx) return;
      ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#ff2a00";
      ctx.font = fontSize + 'px "IBM Plex Mono"';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="name-canvas"
      className="fixed top-0 right-0 w-full md:w-[60vw] h-screen z-[1] opacity-15 pointer-events-none"
    />
  );
}