import React from 'react';
import { motion } from 'framer-motion';
import { LucideZap, ArrowRight } from 'lucide-react';
import { MeshBackground } from './MeshBackground';

export const CTASection: React.FC = () => {
  return (
    <section className="py-96 px-12 bg-background relative overflow-hidden text-center border-t border-white/[0.05]">
      <MeshBackground />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="mb-16 flex justify-center"
        >
          <div className="w-20 h-20 studio-border bg-primary-container/10 flex items-center justify-center text-primary-container">
            <LucideZap className="w-8 h-8 fill-primary-container" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-7xl md:text-[10rem] font-black font-headline tracking-[-0.06em] uppercase leading-[0.85] mb-16"
        >
          Ready to <br />
          <i>Operate?</i>
        </motion.h2>

        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl text-on-surface-variant font-body mb-20 max-w-2xl mx-auto font-light leading-relaxed tracking-tight"
        >
          Join 800+ tactical operators in the next live session. No pitch. No nonsense. Just results.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-10"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 100px rgba(48,124,255,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-container text-on-primary-container px-16 py-10 rounded-[2.5rem] font-headline font-black text-3xl tracking-[-0.04em] flex items-center gap-6 shadow-2xl transition-all duration-700"
          >
            Claim Free Seat
            <ArrowRight className="w-8 h-8" />
          </motion.button>
          
          <div className="text-on-surface-variant/40 font-mono text-[0.7rem] uppercase tracking-[0.4em] flex items-center gap-4">
             <div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse" />
             8 Slots Remaining
          </div>
        </motion.div>
      </div>

      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(48,124,255,0.02)_0%,transparent_50%)] blur-[150px] -z-10" />
    </section>
  );
};
