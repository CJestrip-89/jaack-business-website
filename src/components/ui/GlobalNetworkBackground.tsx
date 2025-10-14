import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GlobalNetworkBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Connection points representing global locations
  const connections = [
    { x1: 15, y1: 25, x2: 35, y2: 45, delay: 0 },
    { x1: 35, y1: 45, x2: 50, y2: 35, delay: 0.5 },
    { x1: 50, y1: 35, x2: 65, y2: 30, delay: 1 },
    { x1: 65, y1: 30, x2: 85, y2: 25, delay: 1.5 },
    { x1: 50, y1: 35, x2: 55, y2: 50, delay: 0.8 },
    { x1: 55, y1: 50, x2: 70, y2: 45, delay: 1.3 },
  ];

  const nodes = [
    { x: 15, y: 25, delay: 0 },
    { x: 35, y: 45, delay: 0.3 },
    { x: 50, y: 35, delay: 0.6 },
    { x: 65, y: 30, delay: 0.9 },
    { x: 85, y: 25, delay: 1.2 },
    { x: 55, y: 50, delay: 1.5 },
    { x: 70, y: 45, delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dotted world map pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white/40" />
          </pattern>
          
          {/* Gradient for connection lines */}
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* World map continents outline with dots */}
        <g>
          {/* North America */}
          <path
            d="M 150,200 Q 200,180 250,190 T 320,220 Q 300,260 280,280 T 200,300 Q 160,280 150,240 Z"
            fill="url(#dot-pattern)"
            opacity="0.6"
          />
          
          {/* South America */}
          <path
            d="M 280,350 Q 300,360 310,400 T 300,480 Q 280,500 260,490 T 240,450 Q 250,400 280,350 Z"
            fill="url(#dot-pattern)"
            opacity="0.6"
          />
          
          {/* Europe */}
          <path
            d="M 480,180 Q 520,170 560,180 T 600,200 Q 590,230 570,240 T 520,235 Q 490,220 480,180 Z"
            fill="url(#dot-pattern)"
            opacity="0.6"
          />
          
          {/* Africa */}
          <path
            d="M 500,280 Q 540,270 580,290 T 600,350 Q 590,420 560,460 T 500,480 Q 470,440 480,380 T 500,280 Z"
            fill="url(#dot-pattern)"
            opacity="0.6"
          />
          
          {/* Asia */}
          <path
            d="M 620,160 Q 700,150 800,170 T 900,210 Q 880,260 850,280 T 750,290 Q 680,270 650,240 T 620,160 Z"
            fill="url(#dot-pattern)"
            opacity="0.6"
          />
          
          {/* Australia */}
          <path
            d="M 800,400 Q 850,390 900,410 T 920,450 Q 900,480 870,485 T 820,470 Q 800,440 800,400 Z"
            fill="url(#dot-pattern)"
            opacity="0.5"
          />
        </g>
      </svg>

      {/* Animated connection lines and nodes */}
      {mounted && (
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Connection lines */}
          {connections.map((conn, idx) => (
            <motion.line
              key={`line-${idx}`}
              x1={`${conn.x1}%`}
              y1={`${conn.y1}%`}
              x2={`${conn.x2}%`}
              y2={`${conn.y2}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0.7] }}
              transition={{
                pathLength: { duration: 2, delay: conn.delay, ease: "easeInOut" },
                opacity: { duration: 2, delay: conn.delay },
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}

          {/* Node points */}
          {nodes.map((node, idx) => (
            <g key={`node-${idx}`}>
              {/* Outer glow ring */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="8"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="1"
                opacity="0.3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1.5],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  delay: node.delay,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
              
              {/* Inner node */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="3"
                className="fill-secondary"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 1]
                }}
                transition={{
                  duration: 0.5,
                  delay: node.delay,
                }}
              />
            </g>
          ))}
        </svg>
      )}
    </div>
  );
};

export default GlobalNetworkBackground;
