import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeatureGrid } from './components/FeatureGrid';
import { ProcessSection } from './components/ProcessSection';
import { Curriculum } from './components/Curriculum';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeatureGrid />
        <ProcessSection />
        <Curriculum />
        <SocialProof />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
