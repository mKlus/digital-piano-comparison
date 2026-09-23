import React from 'react';
import { ShieldCheck, Music, Printer } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Verdict Summary Cards */}
        <div className="mb-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>EXECUTIVE AUDIT SUMMARY & VERDICT RECAP</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-white mb-4">
            Key Recommendations for Australian Pianists (Sept 2026)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30">
              <span className="text-amber-400 font-bold block mb-1 font-heading text-sm">
                1. Best Acoustic Purist Value: Kawai CA901
              </span>
              <p className="text-slate-300 leading-relaxed">
                At <strong>$4,995 AUD</strong> street price, it pairs an authentic full-spruce seesaw balance pin action (GFIII) with a vibrating solid spruce soundboard. Unrivaled classical touch under $10k.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-500/30">
              <span className="text-blue-400 font-bold block mb-1 font-heading text-sm">
                2. Ultimate Technological Flagship: Roland LX-9
              </span>
              <p className="text-slate-300 leading-relaxed">
                At <strong>$7,449 AUD</strong>, the LX-9 offers tactile haptic string vibration, extended ~25cm pivot, unlimited physical modeling, and a 10-year warranty with zero humidity maintenance. Out-specs the more expensive GP-6.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-teal-500/30">
              <span className="text-teal-400 font-bold block mb-1 font-heading text-sm">
                3. Best Mechanical Hammer Entry: Casio GP-310
              </span>
              <p className="text-slate-300 leading-relaxed">
                At <strong>$3,800–$4,600 AUD</strong>, it is the world's most accessible instrument with genuine C. Bechstein full-length wooden keysticks and moving mechanical acoustic hammers.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links & Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Music className="w-3.5 h-3.5" />
            </div>
            <span className="font-heading font-bold text-slate-200">PIANO AUDIT AUSTRALIA</span>
            <span className="text-slate-500">|</span>
            <span className="text-[11px] text-slate-400">Independent Engineering Comparison</span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <a
              href="https://github.com/mKlus/digital-piano-comparison"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Repository</span>
            </a>

            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print A4 Audit</span>
            </button>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 mt-4 text-center sm:text-left">
          Market pricing independently audited across authorized Australian piano dealers (Better Music, The Pianoforte, Gospel Pianos, House of Pianos, Piano City, and Belfield Music). All specifications compiled from manufacturer engineering whitepapers.
        </div>
      </div>
    </footer>
  );
};
