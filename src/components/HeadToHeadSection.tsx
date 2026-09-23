import React, { useState } from 'react';
import { Award, Zap, Shield, CheckCircle, AlertTriangle, ArrowRight, Star } from 'lucide-react';
import { HEAD_TO_HEAD_SCORES } from '../data/pianoData';

export const HeadToHeadSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  return (
    <section id="head-to-head" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
            Section 06 Flagship Showdown
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Head-to-Head Flagship Analysis
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-1">
            Evaluating the three leading contenders on pure mechanical, acoustic, and price-to-performance metrics: Kawai CA901 vs. Roland LX-9 vs. Roland GP-6.
          </p>
        </div>

        {/* 2 Core Arguments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Card 1: LX-9 vs GP-6 Hierarchy */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40">
                Roland Internal Hierarchy
              </span>
              <span className="text-xs text-slate-400 font-mono">LX-9 vs GP-6</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-white mb-2">
              Why the LX-9 Out-Specs the More Expensive GP-6
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              While the GP-6 features a glamorous baby-grand cabinet, the <strong>LX-9 represents Roland’s true technological flagship</strong>:
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-slate-100 block mb-0.5">1. Haptic Keybed Feedback:</strong>
                The LX-9 features electromechanical keybed vibration simulating string resonance. <strong>The GP-6 lacks this entirely</strong> (reserved for the $15k+ GP-9).
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-slate-100 block mb-0.5">2. Action Pivot Length:</strong>
                LX-9 incorporates Roland’s long-pivot <em>Hybrid Grand</em> action (~25 cm pivot), whereas the GP-6 uses the standard-pivot <em>Hybrid Premium</em> action (~21.5 cm).
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-slate-100 block mb-0.5">3. Concert Speaker Power:</strong>
                LX-9 incorporates an <strong>8-speaker Concert array (162W)</strong> vs. GP-6’s <strong>5-speaker Premium array (100W)</strong>.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/30">
                <strong className="text-amber-400 block mb-0.5">4. Price Reality (AUD):</strong>
                The technically superior LX-9 retails for <strong>$7,449 – $8,449 AUD</strong>, while the GP-6 costs <strong>$7,979 – $9,399 AUD</strong>—commanding a ~$1,000 premium strictly for the baby-grand shell.
              </div>
            </div>
          </div>

          {/* Card 2: Kawai CA901 Proposition */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Acoustic Purist Value Benchmark
              </span>
              <span className="text-xs text-slate-400 font-mono">Kawai CA901</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-white mb-2">
              Kawai CA901: The Acoustic Purist's Proposition
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              For classical training centered on acoustic grand authenticity, the Kawai CA901 presents an unmatched value proposition:
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-slate-100 block mb-0.5">1. Pure Acoustic Seesaw Geometry:</strong>
                Grand Feel III utilizes continuous solid spruce keysticks pivoting on center pins, accurately replicating acoustic grand downweight leverage.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-slate-100 block mb-0.5">2. Solid Spruce Soundboard Resonance:</strong>
                Couples multi-channel speakers with a physical wooden soundboard at the cabinet rear, providing warm acoustic room bloom without artificial speaker bite.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-slate-100 block mb-0.5">3. Slip-Tape Engineering Update:</strong>
                GFIII permanently replaces older PTFE slip-tape with molded composite resin capstans, guaranteeing permanent frictionless key resets.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                <strong className="text-emerald-400 block mb-0.5">4. Unmatched Price-to-Performance:</strong>
                At <strong>$4,995 AUD</strong> (Satin Black), the CA901 delivers top-tier acoustic action and soundboard engineering at <strong>$2,500 to $4,400 below</strong> Roland's flagships.
              </div>
            </div>
          </div>
        </div>

        {/* Objective Performance Matrix Table */}
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden mb-10">
          <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                Objective Performance Matrix (Audited Scores out of 10)
              </h3>
              <p className="text-xs text-slate-400">
                Hover or click any row to reveal detailed engineering justification.
              </p>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-amber-400">
              Grade 5 to Diploma Benchmark
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-[11px] font-mono uppercase tracking-wider text-slate-300">
                  <th className="p-3.5 min-w-[200px]">Evaluation Metric</th>
                  <th className="p-3.5 min-w-[170px] text-amber-300">
                    Kawai CA901 <br /><span className="text-[10px] text-slate-400">($4,995 – $5,995)</span>
                  </th>
                  <th className="p-3.5 min-w-[170px] text-blue-300">
                    Roland LX-9 <br /><span className="text-[10px] text-slate-400">($7,449 – $8,449)</span>
                  </th>
                  <th className="p-3.5 min-w-[170px] text-purple-300">
                    Roland GP-6 <br /><span className="text-[10px] text-slate-400">($7,979 – $9,399)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono">
                {HEAD_TO_HEAD_SCORES.map((item, idx) => {
                  const isExpanded = activeMetric === idx;
                  return (
                    <React.Fragment key={idx}>
                      <tr
                        onClick={() => setActiveMetric(isExpanded ? null : idx)}
                        className={`cursor-pointer hover:bg-slate-800/40 transition-colors ${
                          isExpanded ? 'bg-amber-500/5' : ''
                        }`}
                      >
                        <td className="p-3.5 font-sans font-semibold text-slate-200">
                          <div className="flex items-center space-x-2">
                            <span>{item.metric}</span>
                            <span className="text-[10px] text-slate-400 font-mono">[details]</span>
                          </div>
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded font-bold ${
                            item.ca901 >= 9.8 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-amber-300'
                          }`}>
                            {item.ca901} / 10
                          </span>
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded font-bold ${
                            item.lx9 >= 9.8 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-blue-300'
                          }`}>
                            {item.lx9} / 10
                          </span>
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2 py-0.5 rounded font-bold ${
                            item.gp6 >= 9.8 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-purple-300'
                          }`}>
                            {item.gp6} / 10
                          </span>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr className="bg-slate-900/90 text-xs">
                          <td colSpan={4} className="p-4 font-sans text-slate-300 border-l-2 border-amber-500">
                            <strong className="text-amber-400 font-mono text-[11px] block mb-1">
                              Engineering Analysis Note:
                            </strong>
                            {item.note}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Climate Resilience & Warranty Comparison */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-2">
            <Shield className="w-4 h-4" />
            <span>ENVIRONMENTAL STABILITY & WARRANTY AUDIT</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-white mb-4">
            Material Longevity: Regional & Heated Indoor Climates
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-blue-300">Roland Hybrid Grand Keybed</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 font-bold">
                  10-Year Warranty
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-2">
                Constructed from a high-rigidity polymer core with bonded wooden side panels and synthetic resin guide pins. <strong>100% immune to temperature swings, ducted heating, and coastal humidity fluctuations</strong>.
              </p>
              <div className="text-[11px] text-slate-400">
                Backed by an industry-leading <strong>10-Year Australian in-home warranty</strong>.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-amber-300">Kawai Grand Feel III Keybed</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-bold">
                  5-Year Warranty
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-2">
                Crafted from continuous solid spruce keysticks with woven acoustic felt bushings. While GFIII composite resin capstans eliminate historical slip-tape issues, solid wood responds naturally to atmospheric changes.
              </p>
              <div className="text-[11px] text-slate-400">
                Benefits from stable indoor relative humidity (40%–60%). Backed by a <strong>5-Year Australian manufacturer warranty</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
