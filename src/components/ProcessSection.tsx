import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Operational Audit', desc: 'We scan your current funnel for manufacturing defects and efficiency leaks.' },
  { id: '02', title: 'Strategic Rebuild', desc: 'We deploy the "No Nonsense" protocol to rebuild your core offer architecture.' },
  { id: '03', title: 'Scale Launch', desc: 'We activate the "Only Value" engine to drive high-performance growth.' }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-80 px-12 bg-[#0C0C0C] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-64">
        <span className="text-primary-container font-mono text-[0.6rem] tracking-[0.6em] uppercase mb-10 block">Module 03 // Roadmap</span>
        <h2 className="text-6xl md:text-9xl font-black font-headline tracking-[-0.05em] leading-[0.92] mb-12">
          The Tactical <br/>
          <i>Roadmap.</i>
        </h2>
        <p className="text-on-surface-variant text-2xl font-body max-w-2xl leading-relaxed font-light tracking-tight">
          A zero-friction implementation process designed to move you from theory to operation in 60 minutes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.05] hidden md:block" />
        
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center relative z-10 group"
          >
            <div className="w-24 h-24 studio-border bg-background flex items-center justify-center mb-16 text-2xl font-black font-headline tracking-tighter group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-700 shadow-2xl">
              {step.id}
            </div>
            <h3 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-8 leading-none">
              {step.title}
            </h3>
            <p className="text-on-surface-variant font-body text-xl leading-relaxed font-light tracking-tight group-hover:text-on-surface transition-colors duration-700">
              {step.desc}
            </p>
            
            {/* Ambient Pulse */}
            <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary-container/2 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
