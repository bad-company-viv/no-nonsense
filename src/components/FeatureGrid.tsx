import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/mockData';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-80 px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-48">
        <span className="text-primary-container font-mono text-[0.6rem] tracking-[0.6em] uppercase mb-10 block">Module 02 // Functional Excellence</span>
        <h2 className="text-6xl md:text-9xl font-black font-headline tracking-[-0.05em] leading-[0.92] mb-12">
          Functional <br/>
          <i>Authority.</i>
        </h2>
        <p className="text-on-surface-variant text-2xl font-body max-w-2xl leading-relaxed font-light tracking-tight">
          We've engineered a series of modules designed to give you strategic clarity and operational speed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-[650px]">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-16 studio-border bg-[#0C0C0C] relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Context-Aware Technical Image */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
               <img 
                 src={feature.illustration} 
                 alt={feature.title} 
                 className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:brightness-105 transition-all duration-1000 scale-100 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-100" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-1 bg-primary-container/20 rounded-full mb-12 group-hover:w-24 group-hover:bg-primary-container transition-all duration-1000" />
              <h3 className="text-5xl md:text-6xl font-black font-headline tracking-tighter mb-8 leading-none">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant font-body text-xl leading-relaxed max-w-md font-light tracking-tight group-hover:text-on-surface transition-colors duration-1000">
                {feature.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-auto pt-8 border-t border-white/[0.05]">
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-primary-container">Strategic Node_{i + 1}</div>
              <motion.button 
                whileHover={{ x: 10 }}
                className="text-on-surface hover:text-primary-container transition-colors text-xs font-mono tracking-widest uppercase"
              >
                Learn More →
              </motion.button>
            </div>
            
            {/* Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-container/5 blur-[80px] group-hover:bg-primary-container/20 transition-all duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
