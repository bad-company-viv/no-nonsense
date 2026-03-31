import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/mockData';
import { LucideChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-80 px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.05]" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-64">
        <span className="text-primary-container font-mono text-[0.6rem] tracking-[0.6em] uppercase mb-10 block">Module 05 // Clarity Protocol</span>
        <h2 className="text-6xl md:text-9xl font-black font-headline tracking-[-0.05em] leading-[0.92] mb-12">
          Functional <br/>
          <i>Clarity.</i>
        </h2>
        <p className="text-on-surface-variant text-2xl font-body max-w-2xl leading-relaxed font-light tracking-tight">
          Everything you need to know about the "No Nonsense" operation before we begin.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="studio-border bg-white/[0.02] overflow-hidden group"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-12 py-10 flex items-center justify-between text-left group-hover:bg-white/[0.04] transition-all"
            >
              <span className="text-2xl md:text-3xl font-black font-headline tracking-[-0.04em] leading-none group-hover:text-primary-container transition-colors">
                {faq.question}
              </span>
              <LucideChevronDown 
                className={`w-6 h-6 text-on-surface-variant/40 transition-transform duration-700 ${openIndex === i ? 'rotate-180 text-primary-container' : ''}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-12 pb-12 text-on-surface-variant font-body text-xl font-light leading-relaxed tracking-tight border-t border-white/[0.02] pt-8">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
