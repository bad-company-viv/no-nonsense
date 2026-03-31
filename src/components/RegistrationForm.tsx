import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { hero } from '../data/mockData';

export const RegistrationForm: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/[0.02] backdrop-blur-[120px] p-10 md:p-14 rounded-[3.5rem] border border-white/[0.06] shadow-2xl w-full relative group overflow-hidden"
    >
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 blur-[80px] -z-10 group-hover:scale-150 transition-all duration-1000" />
      
      <div className="mb-14 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-1.5 bg-primary-container rounded-full shadow-[0_0_12px_rgba(48,124,255,1)]" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.5em] text-on-surface-variant/40">Secure_Portal v1.0</span>
        </div>
        <h3 className="text-4xl md:text-6xl font-black font-headline tracking-[-0.05em] mb-6 leading-none">
          Ready to <br/>
          <i>Bridge?</i>
        </h3>
        <p className="text-on-surface-variant font-body text-sm font-light leading-relaxed max-w-[300px] tracking-tight">
          Securing encrypted session for the <br/>
          <span className="text-on-surface font-medium border-b border-primary-container/40">Operational Authority Protocol.</span>
        </p>
      </div>

      <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <label className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-on-surface-variant/30 ml-4 block">
            ID_PROTOCOL
          </label>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full bg-white/[0.03] border border-white/[0.08] px-10 py-7 rounded-[2rem] text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none focus:border-primary-container/40 focus:bg-white/[0.05] transition-all font-body text-lg tracking-tight"
          />
        </div>
        
        <div className="space-y-4">
          <label className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-on-surface-variant/30 ml-4 block">
            DEST_PROTOCOL
          </label>
          <input 
            type="email" 
            placeholder="Work Email" 
            className="w-full bg-white/[0.03] border border-white/[0.08] px-10 py-7 rounded-[2rem] text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none focus:border-primary-container/40 focus:bg-white/[0.05] transition-all font-body text-lg tracking-tight"
          />
        </div>

        <motion.button 
          whileHover={{ y: -5, backgroundColor: "#ffffff", color: "#000000" }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary-container text-on-primary-container py-8 rounded-[2rem] font-headline font-black text-2xl tracking-[-0.03em] flex items-center justify-center gap-6 group/btn transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(48,124,255,0.4)]"
        >
          {hero.cta}
          <ArrowRight className="w-7 h-7 group-hover/btn:translate-x-3 transition-transform duration-700" />
        </motion.button>
        
        <div className="flex items-center justify-between mt-12 px-6">
           <div className="flex items-center gap-3 text-[0.6rem] font-mono uppercase tracking-[0.2em] text-on-surface-variant/40 hover:text-primary-container transition-colors cursor-default">
             <ShieldCheck className="w-3.5 h-3.5" />
             AES_ENCRYPTED
           </div>
           <div className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-on-surface-variant/20">
             REL_v4.2.1
           </div>
        </div>
      </form>
    </motion.div>
  );
};
