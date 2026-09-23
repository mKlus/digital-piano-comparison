import React, { useState } from 'react';
import { Sliders, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { ACTION_DEEP_DIVES } from '../data/pianoData';

export const ActionMechanicsVisualizer: React.FC = () => {
  // Touch position slider: 0 = key tip (front), 100 = deep against the fallboard (rear)
  const [touchPos, setTouchPos] = useState<number>(30);

  // Pivot lengths in cm
  const pivotProfiles = [
    { name: 'Compact Entry Digital', length: 18.0, type: 'Folded Entry', color: '#ef4444' },
    { name: 'Yamaha GrandTouch / GP-6', length: 21.5, type: 'Standard High-Pivot', color: '#f59e0b' },
    { name: 'Kawai Grand Feel III', length: 24.0, type: 'Acoustic Seesaw Fulcrum', color: '#10b981' },
    { name: 'Roland Hybrid Grand (LX-9)', length: 25.0, type: 'Extended Folded Lever', color: '#3b82f6' },
    { name: '9ft Concert Grand Acoustic', length: 27.0, type: 'Concert Grand Standard', color: '#8b5cf6' }
  ];

  // Base key visible length is ~15cm.
  // When pressing at front, lever arm = pivotLength.
  // When pressing at rear (near fallboard), effective lever arm = pivotLength - 13cm * (touchPos / 100).
  // Resistance multiplier = pivotLength / (pivotLength - 13 * (touchPos / 100))
  // Gram resistance assuming base 52g at key tip
  const baseGrams = 52;

  return (
    <section id="action-mechanics" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
            Section 04 Deep Dive
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Action Mechanics & The Physics of Pivot Length
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-1">
            The mechanical pivot length dictates how much extra downweight resistance you experience when playing complex chords or polyphony with fingers placed deep between the black keys near the fallboard.
          </p>
        </div>

        {/* Interactive Pivot Simulator */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400 mb-1">
                <Sliders className="w-4 h-4" />
                <span>INTERACTIVE TOUCH-POINT SIMULATOR</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Simulate Touch Resistance Across Key Depth
              </h3>
              <p className="text-xs text-slate-400 max-w-xl mt-1">
                Slide the indicator to simulate playing at the key's front edge vs. pressing deep near the fallboard during intricate classical counterpoint.
              </p>
            </div>

            {/* Slider control */}
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 min-w-[280px]">
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Front Key Edge (0cm)</span>
                <span className="font-bold text-amber-400">
                  {touchPos === 0 ? 'Front Edge' : touchPos === 100 ? 'Fallboard (13cm)' : `${(13 * (touchPos / 100)).toFixed(1)} cm Inward`}
                </span>
                <span>Fallboard (13cm)</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={touchPos}
                onChange={(e) => setTouchPos(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="text-[11px] text-slate-400 text-center mt-2 italic">
                {touchPos < 30 ? 'Normal playing position on white keys' : touchPos < 70 ? 'Playing black keys & mixed chords' : 'Deep between black keys near the fallboard'}
              </div>
            </div>
          </div>

          {/* Real-time comparison bars */}
          <div className="mt-6 space-y-4">
            {pivotProfiles.map((p, idx) => {
              const inwardDistance = 12.5 * (touchPos / 100);
              const effectiveLever = Math.max(1, p.length - inwardDistance);
              const multiplier = p.length / effectiveLever;
              const currentGrams = Math.round(baseGrams * multiplier);

              const isHeavy = currentGrams > 90;
              const isIdeal = currentGrams <= 68;

              return (
                <div key={idx} className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="font-bold text-slate-100">{p.name}</span>
                      <span className="text-[11px] font-mono text-slate-400">({p.length} cm pivot)</span>
                      <span className="hidden md:inline-block text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {p.type}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-slate-400">
                        Multiplier: <strong className="text-slate-200">{multiplier.toFixed(2)}×</strong>
                      </span>
                      <span className={`font-mono font-bold px-2.5 py-0.5 rounded text-xs ${
                        isIdeal
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : isHeavy
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}>
                        {currentGrams} grams
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar visualizer */}
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-150"
                      style={{
                        width: `${Math.min(100, (currentGrams / 140) * 100)}%`,
                        backgroundColor: p.color
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start space-x-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Engineering Takeaway:</strong> On a short 18 cm pivot action, playing near the fallboard spikes downweight up to <strong>130+ grams (over 2.5× heavier!)</strong>, creating severe wrist fatigue and uneven voicing. On a <strong>24–25 cm grand-scale action (Kawai GFIII or Roland Hybrid Grand)</strong>, downweight increases by only ~20–25%, providing the effortless control expected of an acoustic concert grand.
            </p>
          </div>
        </div>

        {/* 4 Deep Dive Cards from Document */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTION_DEEP_DIVES.map((action, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {action.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{action.maker}</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {action.name}
                </h3>

                {/* Quick specs grid */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-400 block">Pivot Architecture:</span>
                    <span className="text-slate-200 font-semibold">{action.pivotArch}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Pivot Length:</span>
                    <span className="text-slate-200 font-semibold">{action.pivotLength}</span>
                  </div>
                  <div className="col-span-2 mt-1">
                    <span className="text-slate-400 block">Key Composition:</span>
                    <span className="text-slate-200">{action.composition}</span>
                  </div>
                </div>

                {/* Key Bullet details */}
                <ul className="space-y-2 text-xs text-slate-300">
                  {action.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2">
                      <span className="text-amber-400 mt-1 shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
