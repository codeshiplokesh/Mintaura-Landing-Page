import { HeroSection } from './components/HeroSection';
import { EcosystemSection } from './components/EcosystemSection';
import { ParticipantsSection } from './components/ParticipantsSection';
import { DealsSection } from './components/DealsSection';
import { LeadSection } from './components/LeadSection';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E5E7EB] selection:bg-gold-500 selection:text-amber-950">
      <HeroSection />
      <EcosystemSection />
      <ParticipantsSection />
      <DealsSection />
      <LeadSection />
    </div>
  );
}





export default App;
