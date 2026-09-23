import React, { useState } from 'react';
import { SlidersHorizontal, Printer, Share2, Sun, Moon, Check, Music } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  compareCount: number;
  openCompareDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  setIsDark,
  compareCount,
  openCompareDrawer
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 transition-colors duration-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Music className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-heading font-bold text-base sm:text-lg tracking-wide text-slate-100 dark:text-slate-100">
                PIANO<span className="text-amber-400">AUDIT</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                AUD • Sept 2026
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              High-End Digital Piano Engineering Audit & Classical Performance Guide
            </p>
          </div>
        </div>

        {/* Navigation jump links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-medium text-slate-300">
          <a href="#requirements" className="hover:text-amber-400 transition-colors">Requirements</a>
          <a href="#catalog" className="hover:text-amber-400 transition-colors">The 10 Pianos</a>
          <a href="#action-mechanics" className="hover:text-amber-400 transition-colors">Action Physics</a>
          <a href="#sound-engines" className="hover:text-amber-400 transition-colors">Sound & Projection</a>
          <a href="#head-to-head" className="hover:text-amber-400 transition-colors">Flagship Shootout</a>
          <a href="#wizard" className="hover:text-amber-400 transition-colors">Buyer's Wizard</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Compare Button */}
          <button
            onClick={openCompareDrawer}
            className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              compareCount > 0
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Compare</span>
            {compareCount > 0 && (
              <span className="px-1.5 py-0.2 bg-slate-950 text-amber-400 rounded-full text-[10px] font-bold">
                {compareCount}
              </span>
            )}
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Copy share link"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/80 transition-colors relative"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            {copied && (
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-0.5 text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 rounded shadow-md whitespace-nowrap">
                Copied Link!
              </span>
            )}
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            title="Print or Save PDF report"
            className="hidden sm:flex p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/80 transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            title="Toggle color theme"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-amber-400 border border-slate-700/80 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
