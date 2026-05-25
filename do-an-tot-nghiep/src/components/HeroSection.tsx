import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onJoinUs: () => void;
}

export function HeroSection({ onJoinUs }: HeroSectionProps) {
  const brands = [
    { name: 'Stripe', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
    { name: 'COINBASE', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px' } },
    { name: 'Uniswap', style: { fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' } },
    { name: 'AAVE', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px' } },
    { name: 'Compound', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
    { name: 'MakerDAO', style: { fontFamily: 'Impact, "Arial Narrow", sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
    { name: 'Chainlink', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } },
  ];

  // We duplicate once to satisfy infinite scrolling seamlessly
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="flex-1 px-6 pt-20 pb-6 flex items-end min-h-[500px]">
      <div 
        className="relative w-full rounded-2xl overflow-hidden bg-gray-200"
        style={{ height: 'calc(100vh - 96px)' }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover absolute inset-0 w-full h-full pointer-events-none select-none brightness-[0.98]"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Dynamic ambient card shade layer to protect copy readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none" />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full p-8 md:p-12 pt-36 md:pt-40">
          <h1 
            className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4 reveal reveal-up reveal-blur" 
            style={{ letterSpacing: '-0.04em' }}
          >
            Your Wealth<br />Works
          </h1>

          <p 
            className="text-black/75 text-base md:text-lg max-w-md mb-8 leading-relaxed reveal reveal-up reveal-blur delay-150" 
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            An automated, reward-powered digital dollar built for native passive earnings and effortless connection into DeFi.
          </p>

          {/* Pill Button with Arrow Circle */}
          <div className="reveal reveal-up delay-300">
            <button 
              onClick={onJoinUs}
              className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>Join us</span>
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </button>
          </div>

          {/* Brand Marquee with custom styling */}
          <div className="mt-16 md:mt-24 w-full max-w-md overflow-hidden py-2 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15 reveal reveal-up reveal-blur delay-500">
            <div className="marquee-track flex items-center">
              {marqueeItems.map((brand, idx) => (
                <div 
                  key={idx} 
                  className="mx-7 shrink-0 text-black/60 whitespace-nowrap select-none hover:text-black hover:scale-105 transition-all cursor-default"
                  style={brand.style}
                >
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
