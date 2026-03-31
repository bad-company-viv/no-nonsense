import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/mockData';
import { LogoMarquee } from './LogoMarquee';

export const SocialProof: React.FC = () => {
  return (
    <section id="proof" className="py-80 px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-64">
        <span className="text-primary-container font-mono text-[0.6rem] tracking-[0.6em] uppercase mb-10 block">Module 04 // Trust Protocol</span>
        <h2 className="text-6xl md:text-9xl font-black font-headline tracking-[-0.05em] leading-[0.92] mb-12">
          Enterprise <br/>
          <i>Validation.</i>
        </h2>
        <p className="text-on-surface-variant text-2xl font-body max-w-2xl leading-relaxed font-light tracking-tight">
          Validated by leaders at Aether, Vertex, and Nova. We build internal systems for the world's most tactical operators.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-48">
        <LogoMarquee />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-12 studio-border bg-[#0C0C0C] relative overflow-hidden group hover:bg-black/60 transition-all duration-700"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/[0.1] group-hover:border-primary-container transition-all">
                <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black tracking-[-0.03em] font-headline">{testimonial.author}</h4>
                <div className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-primary-container/60">{testimonial.role}</div>
              </div>
            </div>
            <p className="text-on-surface-variant font-body text-xl font-light leading-relaxed group-hover:text-on-surface transition-colors">
              "{testimonial.quote}"
            </p>
            
            {/* Signature Accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-container/2 blur-3xl rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
