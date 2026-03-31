import React from 'react';
import { motion } from 'framer-motion';

export const MeshBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 group/mesh">
      {/* Primary Studio Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, 15, 0],
          x: [0, 80, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(48,124,255,0.08)_0%,transparent_60%)] blur-[150px]"
      />
      
      {/* Secondary Depth Glow */}
      <motion.div 
        animate={{ 
          scale: [1.4, 1, 1.4],
          rotate: [0, -10, 0],
          x: [0, -80, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] blur-[180px]"
      />

      {/* Tertiary Technical Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(48,124,255,0.03)_0%,transparent_40%)] blur-[100px]"
      />

      <div className="absolute inset-0 grid-bg opacity-[0.02]" />
    </div>
  );
};
