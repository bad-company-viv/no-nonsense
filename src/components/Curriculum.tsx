import React from 'react';
import { motion } from 'framer-motion';
import { curriculum } from '../data/mockData';

export const Curriculum: React.FC = () => {
  return (
    <section className="py-64 px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-container/[0.02] blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-32">
          <span className="text-primary-container font-mono text-[0.65rem] tracking-[0.5em] uppercase mb-6 block">Section 07 // Architecture</span>
          <h2 className="text-5xl md:text-8xl font-headline font-black tracking-tighter leading-[0.95] mb-12">
            The <br/>
            <span className="text-on-surface-variant italic">{curriculum.title}</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {curriculum.items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-10 group cursor-default p-8 hover:bg-surface-container-high/40 rounded-2xl transition-all duration-300 border border-transparent hover:border-outline-variant/10"
            >
              <div className="font-mono text-[0.65rem] text-on-surface-variant/20 tracking-tighter w-12 group-hover:text-primary-container group-hover:opacity-100 transition-all">
                #0{i + 1}
              </div>
              <p className="text-2xl md:text-4xl leading-none tracking-tighter font-headline font-black text-on-surface-variant group-hover:text-on-surface transition-colors">
                {item}
              </p>
              <div className="flex-1 h-[1px] bg-outline-variant/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
