import React, { useEffect, useRef } from 'react';

const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      opacity: number;
    }> = [];

    // Spread bubbles in a grid with random jitter, including corners
    const bubbleCount = 25;
    const gridCols = 5;
    const gridRows = 5;
    for (let i = 0; i < bubbleCount; i++) {
      const col = i % gridCols;
      const row = Math.floor(i / gridCols);
      // Less jitter for edge/corner bubbles
      const edgeJitter = 20;
      const centerJitter = 60;
      const jitterX = (col === 0 || col === gridCols - 1) ? edgeJitter : centerJitter;
      const jitterY = (row === 0 || row === gridRows - 1) ? edgeJitter : centerJitter;
      const x = ((col + 0.5) / gridCols) * canvas.width + (Math.random() - 0.5) * jitterX;
      const y = ((row + 0.5) / gridRows) * canvas.height + (Math.random() - 0.5) * jitterY;
      particles.push({
        x,
        y,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 1.0,
        size: Math.random() * 60 + 60,
        opacity: Math.random() * 0.12 + 0.04 // more faded
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Add subtle wave motion
        particle.x += Math.sin(time + index * 0.1) * 0.2;
        particle.y += Math.cos(time + index * 0.1) * 0.2;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // Calculate 3D projection
        const scale = 500 / (500 + particle.z);
        const projectedX = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const projectedY = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
        const projectedSize = particle.size * scale;

        // Draw faded black bubble
        ctx.save();
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
        ctx.globalAlpha = particle.opacity * scale;
        ctx.filter = 'blur(8px)';
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.filter = 'none';
        ctx.globalAlpha = 1;
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default Background3D;