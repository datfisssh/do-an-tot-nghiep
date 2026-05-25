import { useState, ReactNode } from 'react';
import { ArrowRight, ShoppingCart, Briefcase, Cpu, Coins } from 'lucide-react';

interface UseCaseMode {
  id: string;
  title: string;
  desc: string;
  label: string;
  icon: ReactNode;
}

interface UseCasesSectionProps {
  onKnowMore: (modeTitle: string) => void;
}

export function UseCasesSection({ onKnowMore }: UseCasesSectionProps) {
  const modes: UseCaseMode[] = [
    {
      id: 'commerce',
      label: 'Commerce Platforms',
      title: 'Commerce',
      desc: 'Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.',
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      id: 'treasuries',
      label: 'Corporate Treasuries',
      title: 'Treasuries',
      desc: 'Inject absolute capital efficiency into your company reserves. Guard against native currency depreciation while earning continuous passive yield with immediate liquidity.',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      id: 'defi',
      label: 'DeFi Integrations',
      title: 'DeFi protocol hubs',
      desc: 'Streamline automated yield across highly secure decentralized systems. Pool liquidity, bridge cross-chain assets, and construct reward-generating products on ironclad ledgers.',
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      id: 'savers',
      label: 'Global Savers',
      title: 'Individual Savers',
      desc: 'Secure institutional-level yield on your personal capital. Sidestep hyperinflation and traditional low-interest banks with transparent digital dollars that compound every block.',
      icon: <Coins className="w-5 h-5" />,
    },
  ];

  const [activeModeId, setActiveModeId] = useState<string>('commerce');

  const activeMode = modes.find((m) => m.id === activeModeId) || modes[0];

  return (
    <section id="network" className="bg-[#F5F5F5] px-6 py-24 select-none">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Column */}
        <div className="md:pr-12 md:pt-2 flex flex-col justify-between h-full reveal reveal-left reveal-blur">
          <div>
            <span className="text-black/60 text-sm mb-2 block font-medium uppercase tracking-wider font-mono">
              USD Halo in Practice
            </span>
            <h2 
              className="text-5xl md:text-6xl font-medium leading-none mb-6 text-black"
              style={{ letterSpacing: '-0.04em' }}
            >
              Use modes
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm mb-12">
              USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more.
            </p>
          </div>

          {/* Interactive Mode Picker */}
          <div className="space-y-3 max-w-md">
            <span className="block text-xs font-mono font-semibold uppercase tracking-widest text-[#2B2644]/60 mb-1">
              Select Active Mode to showcase
            </span>
            {modes.map((mode, index) => {
              const isActive = mode.id === activeModeId;
              const delayClass = index === 0 ? 'delay-75' : index === 1 ? 'delay-150' : index === 2 ? 'delay-200' : 'delay-300';
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveModeId(mode.id)}
                  className={`flex w-full items-center gap-4 px-5 py-4 rounded-xl text-left border transition-all duration-300 reveal reveal-left ${delayClass} ${
                    isActive
                      ? 'bg-black border-black text-white shadow-md scale-[1.02]'
                      : 'bg-white border-black/5 text-black hover:border-black/20 hover:bg-black/[0.01]'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#2B2644]'
                  }`}>
                    {mode.icon}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold tracking-tight">
                      {mode.label}
                    </span>
                    <span className={`text-xs block ${isActive ? 'text-white/60' : 'text-black/40'}`}>
                      Explore the {mode.title.toLowerCase()} utility
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column (Video background + dynamic overlay card) */}
        <div 
          className="relative rounded-3xl overflow-hidden min-h-[580px] md:min-h-[720px] w-full flex flex-col justify-end shadow-lg transition-all duration-500 border border-black/5 reveal reveal-scale reveal-blur delay-200"
        >
          {/* Use Autoplay Muted Loop background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-700 brightness-95"
            key={activeModeId} // Re-init video player gently if mode shifts to keep them aligned, but modern video is steady
          >
            <source 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* Solid premium overlay gradient to protect text */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent pointer-events-none" />

          {/* Interactive Content Overlay */}
          <div className="relative z-10 p-8 md:p-12 text-black flex flex-col items-start justify-end">
            
            {/* Minimal dynamic tab indicator */}
            <span className="bg-black text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full mb-4 uppercase tracking-widest">
              Active Mode • {activeMode.title}
            </span>

            <h3 
              className="text-4xl md:text-5xl font-medium leading-tight mb-5 text-black"
              style={{ letterSpacing: '-0.03em' }}
            >
              {activeMode.title}
            </h3>

            <p className="text-black/80 text-base max-w-md mb-8 leading-relaxed">
              {activeMode.desc}
            </p>

            {/* Link button */}
            <button
              onClick={() => onKnowMore(activeMode.title)}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-black hover:text-black/80 transition-all cursor-pointer"
            >
              <span>Know more</span>
              <span className="w-9 h-9 rounded-full bg-white/85 backdrop-blur flex items-center justify-center border border-black/5 shadow-sm group-hover:bg-white group-hover:scale-105 transition-all">
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
