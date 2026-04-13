"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 14;
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let cols = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(cols).fill(1);

    const draw = () => {
      // Re-sync cols if canvas was resized
      const newCols = Math.floor(canvas.width / fontSize);
      if (newCols !== cols) {
        cols = newCols;
        drops = Array(cols).fill(1);
      }

      // Translucent black wash — controls trail length
      ctx.fillStyle = "rgba(11, 11, 15, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading char brightens to white
        if (drops[i] * fontSize > canvas.height * (0.6 + Math.random() * 0.3)) {
          ctx.fillStyle = "#ffffff";
        } else {
          // Vary opacity slightly for depth
          const alpha = 0.4 + Math.random() * 0.5;
          ctx.fillStyle = `rgba(200, 240, 74, ${alpha})`;
        }

        ctx.fillText(char, x, y);

        // Reset drop randomly after it passes bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.18,
      }}
    />
  );
}
