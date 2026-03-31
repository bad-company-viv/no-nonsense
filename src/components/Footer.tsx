import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-48 px-12 bg-background relative overflow-hidden border-t border-white/[0.05]">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-32">
        <div className="max-w-md">
          <div className="text-3xl font-black font-headline tracking-tighter text-on-surface mb-8 leading-none">
            NNM<span className="text-primary-container italic">_</span>
          </div>
          <p className="text-on-surface-variant font-body text-xl font-light leading-relaxed tracking-tight mb-12">
            The world's most tactical operational strategy for modern marketers. No pitch. No nonsense. Just functional authority.
          </p>
          <div className="flex gap-10 text-[0.6rem] font-mono uppercase tracking-[0.4em] text-on-surface-variant/40 hover:text-primary-container transition-colors cursor-pointer">
             <span>System_Status: Optimal</span>
             <span>Region: Global_Global</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-32">
          <div className="space-y-10">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.5em] text-primary-container mb-12 block">Navigation_</h4>
            <ul className="space-y-6 text-on-surface-variant/60 font-body text-lg font-light">
              <li className="hover:text-on-surface transition-colors cursor-pointer tracking-tight">The Problem</li>
              <li className="hover:text-on-surface transition-colors cursor-pointer tracking-tight">Functional Utility</li>
              <li className="hover:text-on-surface transition-colors cursor-pointer tracking-tight">Operational Strategy</li>
              <li className="hover:text-on-surface transition-colors cursor-pointer tracking-tight">Technical Proof</li>
            </ul>
          </div>
          <div className="space-y-10">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.5em] text-primary-container mb-12 block">Legal_</h4>
            <ul className="space-y-6 text-on-surface-variant/60 font-body text-lg font-light">
              <li className="hover:text-on-surface transition-colors cursor-pointer tracking-tight">Privacy Protocol</li>
              <li className="hover:text-on-surface transition-colors cursor-pointer tracking-tight">Terms of Operation</li>
              <li className="hover:text-on-surface transition-colors cursor-pointer tracking-tight">Data Integrity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-48 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-12 text-on-surface-variant/20 font-mono text-[0.6rem] uppercase tracking-[0.4em]">
        <div>© 2026 NO NONSENSE MARKETING. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-10 transition-all hover:text-primary-container cursor-default">
           <span>SSL_ENCRYPTED</span>
           <span>AES-256_AUTHORIZED</span>
        </div>
        <div className="flex items-center gap-2 hover:text-on-surface-variant transition-colors cursor-pointer">
           BUILD_ST_4.2.1-REL
        </div>
      </div>
    </footer>
  );
};
