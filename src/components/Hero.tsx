import React from 'react';
import { motion } from 'framer-motion';
import { hero } from '../data/mockData';
import { RegistrationForm } from './RegistrationForm';
import { MeshBackground } from './MeshBackground';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-64 pb-48 px-12 flex flex-col items-center justify-center relative overflow-hidden">
      <MeshBackground />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center relative z-10 w-full">
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
              <span className="inline-block px-5 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full text-[0.6rem] font-mono tracking-[0.4em] text-primary-container uppercase backdrop-blur-sm">
                System_Protocol // v4.2.1
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black font-headline tracking-[-0.05em] leading-[0.92] mb-12">
              Most marketing <br/>
              webinars are <br/>
              <i>sales funnels.</i>
            </h1>
            
            <p className="text-2xl md:text-3xl text-on-surface-variant font-body leading-relaxed max-w-2xl lg:mx-0 mx-auto mb-20 font-light tracking-tight">
              We're giving you real, actionable marketing steps. <span className="text-on-surface font-medium underline decoration-primary-container/20 underline-offset-8">No pitch at the end.</span> No subscription after.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 pt-8 border-t border-white/[0.05]">
              {hero.trustbadges.map((badge) => (
                <div key={badge} className="flex items-center gap-4 text-[0.7rem] font-mono text-on-surface-variant/40 uppercase tracking-[0.3em] hover:text-on-surface transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary-container rounded-full shadow-[0_0_10px_rgba(48,124,255,0.5)]" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 w-full relative group">
           <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
           >
              {/* Floating Aura */}
              <div className="absolute inset-x-0 -top-20 h-40 bg-primary-container/10 blur-[100px] rounded-full opacity-50 pointer-events-none" />
              
              <RegistrationForm />
              
              <div className="mt-16 relative studio-border overflow-hidden bg-surface-container p-2 shadow-2xl group-hover:scale-[1.01] transition-transform duration-1000">
                <img 
                  src={hero.image} 
                  alt="Marketing Blueprint" 
                  className="w-full h-auto aspect-video object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
