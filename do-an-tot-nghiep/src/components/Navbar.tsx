import React from 'react';
import { LogoIcon } from './LogoIcon';

interface NavbarProps {
  onOpenWallet: () => void;
}

export function Navbar({ onOpenWallet }: NavbarProps) {
  const navLinks = ['Network', 'Ecosystem', 'Rewards', 'Help', 'News'];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-3 fixed bg-transparent backdrop-blur-sm">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        {/* Left: Custom SVG Logo and App title */}
        <div className="flex items-center gap-2.5">
          <LogoIcon className="w-7 h-7 text-black shrink-0" />
          <span className="text-2xl font-medium tracking-tight text-black select-none">
            Halo
          </span>
        </div>

        {/* Center: Desktop links, hidden on small screens */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
              >
                {link}
              </a>
              {index < navLinks.length - 1 && (
                <span className="text-gray-400 select-none text-xs">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Black pill action button */}
        <div>
          <button
            onClick={onOpenWallet}
            className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            Open Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
