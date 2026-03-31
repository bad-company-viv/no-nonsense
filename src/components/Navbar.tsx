import { motion, useMotionValue, useSpring } from 'framer-motion';
import { navigation } from '../data/mockData';

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22 });
  const springY = useSpring(y, { stiffness: 260, damping: 22 });

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * 0.35);
    y.set((event.clientY - centerY) * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto glass flex justify-between items-center px-12 py-7 rounded-[2.5rem] border border-white/[0.06] shadow-2xl bg-black/40 backdrop-blur-[120px]"
      >
        <div className="flex items-center gap-14">
          <div className="text-2xl font-black font-headline tracking-tighter text-on-surface hover:text-primary-container transition-colors cursor-pointer leading-none">
            NNM<span className="text-primary-container italic">_</span>
          </div>
          
          <div className="hidden md:flex gap-14 text-[0.6rem] font-mono font-bold uppercase tracking-[0.4em] text-on-surface-variant/40">
            {navigation.links.map(item => (
              <a key={item.name} href={item.href} className="hover:text-primary-container transition-all hover:tracking-[0.5em] duration-500">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <MagneticButton className="bg-primary-container text-on-primary-container px-10 py-3.5 rounded-2xl text-[0.65rem] font-headline font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_20px_40px_-10px_rgba(48,124,255,0.3)]">
          Join Webinar
        </MagneticButton>
      </motion.div>
    </nav>
  );
};
