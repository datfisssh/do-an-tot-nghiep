export function BackedBySection() {
  const backers = [
    { name: 'Fundamental Labs', style: { fontFamily: '"Times New Roman", Georgia, serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' } },
    { name: 'KUCOIN', style: { fontFamily: '"Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' } },
    { name: 'NGC', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' } },
    { name: 'NxGen', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' } },
    { name: 'Matter Labs', style: { fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' } },
    { name: 'DEXTOOLS', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' as const } },
    { name: 'NGRAVE', style: { fontFamily: '"Courier New", Courier, monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: '14px' } },
    { name: 'Polychain', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' } },
  ];

  // Duplicate for infinite seamless scroll
  const marqueeItems = [...backers, ...backers];

  return (
    <section className="bg-[#F5F5F5] px-6 py-12 border-y border-black/[0.06]">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Left col (1/4) */}
        <div className="text-black/70 text-base leading-relaxed select-none reveal reveal-left reveal-blur">
          Funded by premier partners<br />and forward-thinking leaders.
        </div>

        {/* Right col (3/4): Infinite Backers Marquee */}
        <div className="md:col-span-3 overflow-hidden py-3 reveal reveal-right reveal-scale delay-200">
          <div className="backers-track flex items-center">
            {marqueeItems.map((backer, idx) => (
              <div
                key={idx}
                className="mx-10 shrink-0 text-black/50 whitespace-nowrap select-none hover:text-black/90 hover:scale-105 transition-all cursor-default"
                style={backer.style}
              >
                {backer.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
