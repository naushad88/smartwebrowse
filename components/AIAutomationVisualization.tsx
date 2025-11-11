'use client';

import { useEffect, useRef } from 'react';

const AIAutomationVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Neural Network Nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: number[];
      pulse: number;
    }> = [];

    // Create nodes in a network pattern
    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Data flow particles
    const particles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
      size: number;
    }> = [];

    // Create data flow between nodes
    const createDataFlow = () => {
      if (particles.length < 20) {
        const fromNode = nodes[Math.floor(Math.random() * nodes.length)];
        const toNode = nodes[Math.floor(Math.random() * nodes.length)];
        
        if (fromNode !== toNode) {
          particles.push({
            x: fromNode.x,
            y: fromNode.y,
            targetX: toNode.x,
            targetY: toNode.y,
            progress: 0,
            speed: Math.random() * 0.02 + 0.01,
            size: Math.random() * 2 + 1,
          });
        }
      }
    };

    // Circuit paths
    const circuitPaths: Array<{
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      progress: number;
      speed: number;
    }> = [];

    // Create circuit paths
    for (let i = 0; i < 15; i++) {
      circuitPaths.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        endX: Math.random() * canvas.width,
        endY: Math.random() * canvas.height,
        progress: Math.random(),
        speed: Math.random() * 0.01 + 0.005,
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw circuit paths with flowing data (automation workflows)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';
      ctx.lineWidth = 2;
      circuitPaths.forEach((path) => {
        path.progress += path.speed;
        if (path.progress > 1) path.progress = 0;

        // Draw path with gradient
        const gradient = ctx.createLinearGradient(path.startX, path.startY, path.endX, path.endY);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
        ctx.strokeStyle = gradient;
        
        ctx.beginPath();
        ctx.moveTo(path.startX, path.startY);
        ctx.lineTo(path.endX, path.endY);
        ctx.stroke();

        // Flowing data point (automation signal)
        const flowX = path.startX + (path.endX - path.startX) * path.progress;
        const flowY = path.startY + (path.endY - path.startY) * path.progress;
        
        // Main data point
        ctx.beginPath();
        ctx.arc(flowX, flowY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(flowX, flowY, 0, flowX, flowY, 15);
        glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        glowGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.4)');
        glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fillRect(flowX - 15, flowY - 15, 30, 30);
        
        // Trail effect
        for (let i = 1; i <= 3; i++) {
          const trailProgress = path.progress - (i * 0.05);
          if (trailProgress < 0) continue;
          
          const trailX = path.startX + (path.endX - path.startX) * trailProgress;
          const trailY = path.startY + (path.endY - path.startY) * trailProgress;
          
          ctx.beginPath();
          ctx.arc(trailX, trailY, 2 * (1 - i * 0.3), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${0.4 * (1 - i * 0.3)})`;
          ctx.fill();
        }
      });

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Pulse animation
        node.pulse += 0.05;
        const pulseRadius = node.radius + Math.sin(node.pulse) * 1.5;

        // Draw node connections
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw node with enhanced glow (AI processing node)
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, pulseRadius * 4
        );
        nodeGradient.addColorStop(0, 'rgba(59, 130, 246, 0.9)');
        nodeGradient.addColorStop(0.3, 'rgba(99, 102, 241, 0.6)');
        nodeGradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.3)');
        nodeGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();

        // Outer ring (processing indicator)
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(node.pulse) * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw node core (AI node)
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 1)';
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
        
        // Center dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fill();
      });

      // Update and draw data flow particles
      particles.forEach((particle, index) => {
        particle.progress += particle.speed;

        if (particle.progress >= 1) {
          particles.splice(index, 1);
          return;
        }

        const x = particle.x + (particle.targetX - particle.x) * particle.progress;
        const y = particle.y + (particle.targetY - particle.y) * particle.progress;

        // Draw particle with trail
        const trailLength = 20;
        for (let i = 0; i < trailLength; i++) {
          const trailProgress = particle.progress - (i / trailLength) * 0.1;
          if (trailProgress < 0) continue;

          const trailX = particle.x + (particle.targetX - particle.x) * trailProgress;
          const trailY = particle.y + (particle.targetY - particle.y) * trailProgress;
          const trailOpacity = (1 - i / trailLength) * 0.6;

          ctx.beginPath();
          ctx.arc(trailX, trailY, particle.size * (1 - i / trailLength), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${trailOpacity})`;
          ctx.fill();
        }

        // Main particle (data packet)
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fill();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.fill();

        // Enhanced glow (automation signal)
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 6);
        glowGradient.addColorStop(0, 'rgba(59, 130, 246, 1)');
        glowGradient.addColorStop(0.4, 'rgba(99, 102, 241, 0.6)');
        glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fillRect(x - particle.size * 6, y - particle.size * 6, particle.size * 12, particle.size * 12);
      });

      // Create new data flows
      if (Math.random() < 0.1) {
        createDataFlow();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none"
      style={{ 
        background: 'transparent',
        opacity: 0.8
      }}
    />
  );
};

export default AIAutomationVisualization;

