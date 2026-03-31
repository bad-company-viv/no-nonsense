import React from 'react';
import { motion } from 'framer-motion';

export const LogoMarquee: React.FC = () => {
  const logos = [
    "Aether Dynamics",
    "Vertex Marketing",
    "Nova Ops",
    "Flux Systems",
    "Quantum Logics",
    "Aether Dynamics",
    "Vertex Marketing",
    "Nova Ops"
  ];

  return (
    <div className="w-full overflow-hidden py-24 group border-y border-outline-variant/10 relative">
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex gap-24 items-center whitespace-nowrap px-12"
      >
        {logos.concat(logos).map((logo, i) => (
          <div key={i} className="flex items-center gap-12 group/logo hover:scale-105 transition-all">
             <div className="w-12 h-12 bg-primary-container/10 rounded-lg border border-primary-container/20 flex items-center justify-center grayscale group-hover/logo:grayscale-0 transition-all duration-700">
               <div className="w-4 h-4 bg-primary-container rounded-sm rotate-45" />
             </div>
             <span className="text-3xl md:text-4xl font-headline font-black tracking-tighter text-on-surface-variant/20 hover:text-primary-container transition-colors duration-500 uppercase">
               {logo}
             </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
