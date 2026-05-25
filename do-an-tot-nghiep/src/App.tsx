import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfoSection } from './components/InfoSection';
import { BackedBySection } from './components/BackedBySection';
import { UseCasesSection } from './components/UseCasesSection';
import { WalletModal } from './components/WalletModal';
import { LogoIcon } from './components/LogoIcon';
import { Sparkles, Info } from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'info' | 'success'>('info');

  // Trigger the premium scroll reveal IntersectionObserver
  useScrollReveal();

  const triggerToast = (message: string, type: 'info' | 'success' = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenWallet = () => {
    setIsWalletOpen(true);
    triggerToast('Simulating secure node sync with smart wallet service...', 'info');
  };

  const handleJoinUs = () => {
    setIsWalletOpen(true);
    triggerToast('Welcome to the USD Halo ecosystem. Connecting Web3 Gateway container...', 'success');
  };

  const handleDiscover = () => {
    const el = document.getElementById('ecosystem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    triggerToast('Scrolling to USD Halo ecosystem core features and yield simulator.', 'info');
  };

  const handleKnowMore = (modeTitle: string) => {
    setIsWalletOpen(true);
    triggerToast(`Opening integrated dashboard portal for simulated ${modeTitle} deployment.`, 'success');
  };

  return (
    <div className="flex flex-col bg-[#F5F5F5] min-h-screen text-black select-none selection:bg-black selection:text-white">
      
      {/* Dynamic Toast System for premium UX */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce shadow-xl flex items-center gap-3 bg-white border border-black/10 text-black px-4 py-3 rounded-xl max-w-sm">
          {toastType === 'success' ? (
            <div className="bg-green-100 p-1.5 rounded-lg text-green-600">
              <Sparkles className="w-4 h-4" />
            </div>
          ) : (
            <div className="bg-[#2B2644]/15 p-1.5 rounded-lg text-[#2B2644]">
              <Info className="w-4 h-4" />
            </div>
          )}
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-tight leading-none text-black">System Notification</p>
            <p className="text-xs text-black/70 mt-0.5">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Hero Container wrapper matching user request: 
          "The first section (Navbar + Hero) is wrapped in a h-screen flex flex-col overflow-hidden container. Max width is max-w-[88rem] mx-auto." */}
      <div className="h-screen flex flex-col overflow-hidden container !max-w-[88rem] mx-auto relative pb-[-6] w-full">
        {/* Transparent top navbar */}
        <Navbar onOpenWallet={handleOpenWallet} />

        {/* Immersive background video Hero section */}
        <HeroSection onJoinUs={handleJoinUs} />
      </div>

      {/* Info features section ("Meet USD Halo." with interactive hold calculator) */}
      <InfoSection onDiscover={handleDiscover} />

      {/* Partners infinite loop marquee */}
      <BackedBySection />

      {/* Use modes section with custom interactive mode toggling and background mp4 video */}
      <UseCasesSection onKnowMore={handleKnowMore} />

      {/* Simulated Web3 smart wallet integration overlay modal with continuous passive yield ticker */}
      <WalletModal isOpen={isWalletOpen} onClose={() => setIsWalletOpen(false)} />

      {/* Grounded minimalist Fintech footer to wrap up the landing page experience premium feel */}
      <footer className="bg-[#F5F5F5] border-t border-black/5 py-12 px-6 reveal reveal-up reveal-blur">
        <div className="max-w-[88rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5 opacity-90 reveal reveal-up delay-100">
            <LogoIcon className="w-6 h-6 text-black shrink-0" />
            <span className="text-xl font-medium tracking-tight text-black">
              Halo
            </span>
          </div>

          <p className="text-xs text-black/50 font-sans tracking-wide reveal reveal-up delay-200">
            © {new Date().getFullYear()} USD Halo Stablecoin Protocol. All rights reserved. Built for native digital efficiency.
          </p>

          <div className="flex gap-6 text-xs text-black/60 font-medium reveal reveal-up delay-300">
            <span className="cursor-pointer hover:text-black transition-colors" onClick={() => triggerToast('Terms of Service: Mock environment preview license only.', 'info')}>Terms</span>
            <span className="cursor-pointer hover:text-black transition-colors" onClick={() => triggerToast('Privacy Policy: All mock simulated keys are handled locally.', 'info')}>Privacy</span>
            <span className="cursor-pointer hover:text-black transition-colors" onClick={() => triggerToast('USD Halo yields are determined by simulated automated algorithms.', 'info')}>Disclosures</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
