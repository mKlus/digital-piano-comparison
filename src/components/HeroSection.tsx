import React from 'react';
import { ShieldCheck, Award, Gauge, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 border-b border-slate-800/80">
      {/* Subtle ambient concert hall glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Australian Market Engineering Benchmark • Sept 2026</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            High-End Digital Piano <br />
            <span className="gold-gradient-text">Engineering Audit</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Objective analysis of action fulcrum mechanics, pivot physics, acoustic soundboard dispersion, and verified Australian street pricing for advanced classical repertoire.
          </p>
        </div>

        {/* Executive Meta Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Evaluation Scope</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">
                Advanced Classical Performance (Grade 5 to Diploma Repertoire)
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Bach, Chopin Etudes, Beethoven Sonatas & Debussy</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Mechanical Baseline</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">
                Compact Entry Digitals (18–20 cm Folded Keybeds)
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Eliminating the 2.5× downweight resistance spike at the fallboard</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Pricing Verification</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">
                Verified Australian Street Pricing (AUD)
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Better Music, Pianoforte, Gospel, House of Pianos & Piano City</p>
            </div>
          </div>
        </div>

        {/* Quick Nav Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
          <a
            href="#catalog"
            className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
          >
            Explore 10 Benchmarked Pianos
          </a>
          <a
            href="#head-to-head"
            className="px-4 py-2 rounded-lg glass-panel hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium transition-all"
          >
            CA901 vs LX-9 vs GP-6 Shootout
          </a>
          <a
            href="#action-mechanics"
            className="px-4 py-2 rounded-lg glass-panel hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium transition-all"
          >
            Keybed Pivot Physics & Diagram
          </a>
          <a
            href="#wizard"
            className="px-4 py-2 rounded-lg glass-panel hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-medium transition-all"
          >
            Buyer's Decision Wizard
          </a>
        </div>
      </div>
    </section>
  );
};
