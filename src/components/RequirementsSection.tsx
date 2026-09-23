import React from 'react';
import { Layers, RotateCcw, Activity, Disc3, ArrowRight } from 'lucide-react';
import { REPERTOIRE_REQUIREMENTS } from '../data/pianoData';

export const RequirementsSection: React.FC = () => {
  const requirementIcons = [
    <Layers className="w-5 h-5 text-amber-400" />,
    <RotateCcw className="w-5 h-5 text-blue-400" />,
    <Activity className="w-5 h-5 text-emerald-400" />,
    <Disc3 className="w-5 h-5 text-purple-400" />
  ];

  return (
    <section id="requirements" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
              Section 01 & 02
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Classical Repertoire Demands & Action Physics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            Transitioning into diploma literature (Chopin Ballades, Bach Preludes, Beethoven Sonatas) exposes the physical limitations of entry-level compact digital pianos.
          </p>
        </div>

        {/* 4 Demands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {REPERTOIRE_REQUIREMENTS.map((req, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center mb-3.5 border border-slate-700/60">
                {requirementIcons[idx]}
              </div>
              <h3 className="font-heading font-bold text-sm text-slate-100 mb-2 leading-snug">
                {req.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>

        {/* The 4 Architectural Paradigms */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-2">
            <span>MECHANICAL ARCHITECTURES</span>
            <span>•</span>
            <span>THE PHYSICS OF TOUCH</span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-4">
            How Top Digitals Replicate Grand Piano Kinetic Inertia
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-amber-300">A. Seesaw Pivot Lever (Acoustic Grand Geometry)</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30">Kawai & Casio</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Full-length wooden keysticks pivoting over a central balance pin on a woven felt bushing (Kawai Grand Feel III, Casio Natural Grand). Depressing the front key levers the rear upward, throwing an unattached hammer shank. This preserves the natural rotational inertia and balance point of an acoustic concert grand.
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-blue-300">B. Extended High-Pivot Folded Actions</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/30">Roland & Yamaha</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Hinged composite keysticks with an extended internal pivot length (~22–25 cm) operating on a folded under-chassis (Roland Hybrid Grand, Yamaha GrandTouch). While hinged rather than seesawed, the lengthened lever arm drastically reduces the leverage deficit near the fallboard while maintaining absolute structural rigidity.
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-emerald-300">C. Pure Gravity Return vs. Spring Resistance</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Natural Physics</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Acoustic grands reset hammers via gravity, producing linear tactile resistance without artificial spring pushback. Top-tier digital actions rely entirely on free-floating weighted hammers returned by gravity, ensuring uniform touch resistance across all dynamic tiers from <em>ppp</em> to <em>fff</em>.
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-purple-300">D. Escapement Let-Off & Key Counterweights</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/30">Tactile Notch</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Simulating the subtle "notch" felt when pressing a grand key slowly near the bottom of travel. Premium actions either emulate this with friction bumpers (Kawai, Roland, Yamaha) or achieve natural escapement through genuine moving acoustic hammers (Casio/Bechstein). Graded metal counterweights further balance static key resistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
