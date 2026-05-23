import React, { useState } from 'react';
import { ArrowRight, Plus, Minus, Landmark } from 'lucide-react';

interface InfoSectionProps {
  onDiscover: () => void;
}

export function InfoSection({ onDiscover }: InfoSectionProps) {
  const [holdAmount, setHoldAmount] = useState<number>(5000);

  const raiseAmount = () => setHoldAmount((prev) => prev + 1000);
  const lowerAmount = () => setHoldAmount((prev) => Math.max(1000, prev - 1000));

  return (
    <section id="ecosystem" className="bg-[#F5F5F5] px-6 py-24 select-none">
      <div className="max-w-[88rem] mx-auto">
        
        {/* Row 1: Header Introductions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Meet USD Halo.
            </h2>
            
            {/* Discover It Button */}
            <button
              onClick={onDiscover}
              className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>Discover it</span>
              <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </button>
          </div>

          <div>
            <p className="text-black/70 text-2xl md:text-3xl leading-relaxed tracking-tight">
              USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.
            </p>
          </div>
        </div>

        {/* Row 2: 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Savings that bloom (Spans 2 cols on lg) */}
          <div 
            className="rounded-2xl lg:col-span-2 min-h-80 flex flex-col justify-between p-7 relative overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300 border border-black/5"
            style={{
              backgroundImage: `url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Soft overlay on image card to pop text visibility */}
            <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors pointer-events-none" />

            <div className="relative z-10">
              <h3 
                className="text-black text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Savings that bloom
              </h3>
            </div>

            <div className="relative z-10 space-y-4">
              <p className="text-black/70 text-base max-w-sm">
                Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.
              </p>

              {/* Interactive Yield Estimator Inside Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-black/50 block font-mono text-[9px] uppercase tracking-wider font-semibold">
                    Simulate holdings
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <button 
                      type="button" 
                      onClick={lowerAmount}
                      className="bg-black/5 hover:bg-black/10 border border-black/5 rounded-lg p-1 text-black transition-colors"
                      title="Decrease"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono text-black font-semibold text-sm">
                      ${holdAmount.toLocaleString()}
                    </span>
                    <button 
                      type="button" 
                      onClick={raiseAmount}
                      className="bg-black/5 hover:bg-black/10 border border-black/5 rounded-lg p-1 text-black transition-colors"
                      title="Increase"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="sm:text-right border-t sm:border-t-0 border-black/5 w-full sm:w-auto pt-2 sm:pt-0">
                  <span className="text-black/50 block font-mono text-[9px] uppercase tracking-wider font-semibold">
                    Est. Passive APY (7.5%)
                  </span>
                  <span className="font-mono text-green-700 font-bold text-base block mt-0.5">
                    +${(holdAmount * 0.075).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} / yr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Solid bg info card */}
          <div className="rounded-2xl p-7 min-h-80 flex flex-col justify-between bg-[#2B2644] hover:scale-[1.01] transition-transform duration-300 shadow-sm">
            <h3 className="text-white text-2xl font-medium leading-snug tracking-tight">
              Always fluid,<br />always pegged.
            </h3>
            <p className="text-white/60 text-base">
              Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.
            </p>
          </div>

          {/* Card 3: Solid bg automated info card */}
          <div className="rounded-2xl p-7 min-h-80 flex flex-col justify-between bg-[#2B2644] hover:scale-[1.01] transition-transform duration-300 shadow-sm">
            <h3 className="text-white text-2xl font-medium leading-snug tracking-tight">
              Fully<br />automated.
            </h3>
            <p className="text-white/60 text-base">
              Skip the task of tuning positions yourself. USD Halo runs in the background for you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
