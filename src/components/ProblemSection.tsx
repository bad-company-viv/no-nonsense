import React from 'react';
import { motion } from 'framer-motion';
import { problems } from '../data/mockData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-80 px-12 bg-background relative overflow-hidden border-y border-white/[0.05]">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-16 mb-48">
        <div className="max-w-3xl">
          <span className="text-primary-container font-mono text-[0.6rem] tracking-[0.6em] uppercase mb-10 block">Module 01 // Problem Identification</span>
          <h2 className="text-6xl md:text-9xl font-black font-headline tracking-[-0.05em] leading-[0.92]">
            The Industry is <br/>
            <i>Manufacturing Poverty.</i>
          </h2>
        </div>
        <p className="text-on-surface-variant text-2xl font-body max-w-sm mb-6 leading-relaxed font-light tracking-tight">
          Most marketing advice is designed to keep you on the treadmill. Here's why you're not seeing results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 auto-rows-[450px]">
        {problems.items.map((problem, i) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`p-12 studio-border bg-white/[0.02] relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-1000 ${
              i === 0 ? 'md:col-span-2' : ''
            }`}
          >
            {/* Index marker */}
            <div className="absolute top-12 right-12 font-mono text-[0.6rem] text-primary-container/40 tracking-widest group-hover:text-primary-container group-hover:opacity-100 transition-all">
              ID_PROTO_0{i + 1}
            </div>

            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-8 group-hover:text-primary-container transition-colors duration-700 leading-none">
                {problem.title}
              </h3>
              <p className="text-on-surface-variant font-body text-xl leading-relaxed max-w-sm font-light tracking-tight group-hover:text-on-surface transition-colors duration-700">
                {problem.description}
              </p>
            </div>
            
            {/* Subtle Gradient Spot */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-container/5 blur-[80px] group-hover:bg-primary-container/10 transition-all duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
