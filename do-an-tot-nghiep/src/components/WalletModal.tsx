import React, { useState, useEffect } from 'react';
import { X, Check, Wallet, Smartphone, ShieldCheck, RefreshCw, ChevronRight, TrendingUp } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [step, setStep] = useState<'select' | 'connecting' | 'connected'>('select');
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [progressText, setProgressText] = useState<string>('');
  const [balance, setBalance] = useState<number>(24814.52293);
  const [mintAmount, setMintAmount] = useState<string>('500');
  const [showConfetti, setShowConfetti] = useState(false);

  // Stream active yield to make it feel alive!
  useEffect(() => {
    if (step !== 'connected') return;

    const interval = setInterval(() => {
      // Add a small fraction of a dollar corresponding to ~7.5% APY on $24k
      // 7.5% of 24k is ~ $1800/year, $0.000057 per second
      setBalance((prev) => prev + 0.0000571);
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  // Connect sequence simulator
  const handleConnect = (walletName: string) => {
    setSelectedWallet(walletName);
    setStep('connecting');
    
    const messages = [
      'Establishing secure cryptographic tunnel...',
      'Signing authorization payload...',
      'Synchronizing smart-contract states...',
      'Retrieving USD Halo balance...'
    ];

    let currentMsgIdx = 0;
    setProgressText(messages[0]);

    const interval = setInterval(() => {
      currentMsgIdx++;
      if (currentMsgIdx < messages.length) {
        setProgressText(messages[currentMsgIdx]);
      } else {
        clearInterval(interval);
        setStep('connected');
      }
    }, 1000);
  };

  const handleMintSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(mintAmount);
    if (isNaN(amount) || amount <= 0) return;

    setBalance((prev) => prev + amount);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal element */}
      <div 
        id="wallet-modal-container"
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#F5F5F5] text-black shadow-2xl transition-all border border-black/5"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <h3 className="font-semibold text-lg text-black tracking-tight">
              {step === 'select' && 'Connect Wallet'}
              {step === 'connecting' && 'Connecting...'}
              {step === 'connected' && 'Halo Core Dashboard'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-1.5 text-black/50 hover:bg-black/5 hover:text-black transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content of Step 1: Select Wallet */}
        {step === 'select' && (
          <div className="p-6">
            <p className="mb-6 text-sm text-black/70 leading-relaxed font-sans">
              Connect a secure Web3 wallet to custody your USD Halo stablecoins and start earning native rewards immediately.
            </p>

            <div className="space-y-2.5">
              {[
                { name: 'MetaMask', icon: '🦊', desc: 'Popular browser extension' },
                { name: 'Coinbase Wallet', icon: '🛡️', desc: 'Secure crypto wallet' },
                { name: 'Phantom', icon: '👻', desc: 'Solana & Ethereum hub' },
                { name: 'WalletConnect', icon: '⚡', desc: 'Scan with QR code' }
              ].map((prov) => (
                <button
                  key={prov.name}
                  onClick={() => handleConnect(prov.name)}
                  className="flex w-full items-center justify-between rounded-xl border border-black/10 bg-white p-4 hover:border-black/30 hover:bg-black/[0.02] text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{prov.icon}</span>
                    <div>
                      <h4 className="font-semibold text-sm text-black group-hover:text-black/90">{prov.name}</h4>
                      <p className="text-xs text-black/50">{prov.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-black/40 group-hover:text-black/80 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-black/50">
              <ShieldCheck className="h-4 w-4" />
              <span>Secured by audited smart contracts</span>
            </div>
          </div>
        )}

        {/* Content of Step 2: Connecting Simulation */}
        {step === 'connecting' && (
          <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
            <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black/5">
              <RefreshCw className="h-8 w-8 text-black animate-spin" />
            </div>
            
            <h4 className="mb-2 font-semibold text-base text-black">
              Sign standard request using {selectedWallet}
            </h4>
            <p className="text-sm font-mono text-black/60 max-w-[280px] h-10 flex items-center justify-center">
              {progressText}
            </p>
          </div>
        )}

        {/* Content of Step 3: Connected Live Dashboard */}
        {step === 'connected' && (
          <div className="p-6">
            {/* Live Card */}
            <div className="relative overflow-hidden rounded-xl bg-black p-6 text-white mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
                  0x71C9...89Fa • Connected
                </span>
                <span className="flex items-center gap-1 text-xs text-green-400 font-semibold">
                  <TrendingUp className="h-3 w-3" />
                  +7.5% APY
                </span>
              </div>
              <p className="text-xs text-white/50 mb-1 font-mono uppercase tracking-wider">USD Halo Balance</p>
              <div className="text-3xl font-semibold tracking-tight font-mono mb-2">
                ${balance.toLocaleString('en-US', { minimumFractionDigits: 5, maximumFractionDigits: 5 })}
              </div>
              <div className="text-xs text-white/70 flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Yield streaming continuously in real time...
              </div>
            </div>

            {/* Simulated Mint/Swap Mock Tool */}
            <form onSubmit={handleMintSimulate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-black/60 mb-2">
                  Acquire more USD Halo
                </label>
                <div className="relative flex rounded-xl border border-black/10 bg-white shadow-sm focus-within:border-black/30 transition-all">
                  <span className="flex items-center pl-4 pr-2 text-black/50 font-medium">$</span>
                  <input
                    type="number"
                    value={mintAmount}
                    onChange={(e) => setMintAmount(e.target.value)}
                    className="w-full bg-transparent py-3 pr-16 outline-none text-black font-mono text-base font-medium"
                    placeholder="Enter USD amount"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black hover:bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Mint
                  </button>
                </div>
              </div>

              {showConfetti && (
                <div className="text-center text-xs text-green-600 font-medium animate-bounce">
                  ✨ Successfully minted {mintAmount} USD Halo! Your balance grew!
                </div>
              )}

              <div className="rounded-xl bg-black/[0.03] p-4 text-xs text-black/70 space-y-2">
                <div className="flex justify-between">
                  <span>Standard Reserve Ratio</span>
                  <span className="font-semibold text-black">105.8% Overcollateralized</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Daily Return</span>
                  <span className="font-semibold text-green-600 font-mono">
                    +${((balance * 0.075) / 365).toFixed(4)} USD
                  </span>
                </div>
              </div>
            </form>

            <button
              onClick={() => setStep('select')}
              className="mt-6 w-full text-center text-xs text-black/40 hover:text-black transition-colors underline decoration-dotted"
            >
              Disconnect or change wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
