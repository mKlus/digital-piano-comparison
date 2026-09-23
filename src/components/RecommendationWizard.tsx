import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, RotateCcw, Award, Sparkles } from 'lucide-react';
import { PIANO_MODELS, PianoModel } from '../data/pianoData';

export const RecommendationWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [priority, setPriority] = useState<string>('acoustic');
  const [climate, setClimate] = useState<string>('variable');
  const [budget, setBudget] = useState<string>('mid');

  const handleReset = () => {
    setStep(1);
    setPriority('acoustic');
    setClimate('variable');
    setBudget('mid');
  };

  // Determine recommendation based on choices
  const getRecommendation = (): { main: PianoModel; alt: PianoModel; reason: string } => {
    // If priority is baby grand furniture
    if (priority === 'furniture') {
      if (budget === 'high') {
        return {
          main: PIANO_MODELS.find((p) => p.id === 'roland-gp-9')!,
          alt: PIANO_MODELS.find((p) => p.id === 'roland-gp-6')!,
          reason: 'The Roland GP-9 is the ultimate uncompromising concert grand statement with full long-pivot action, haptics, and an 8-speaker concert system.'
        };
      }
      return {
        main: PIANO_MODELS.find((p) => p.id === 'roland-gp-6')!,
        alt: PIANO_MODELS.find((p) => p.id === 'roland-lx-9')!,
        reason: 'The Roland GP-6 offers a stunning baby-grand profile with dual-prop opening lid that transforms the room aesthetic while keeping under 1 metre depth.'
      };
    }

    // If budget is under $5k
    if (budget === 'low') {
      if (priority === 'hammer') {
        return {
          main: PIANO_MODELS.find((p) => p.id === 'casio-gp-310')!,
          alt: PIANO_MODELS.find((p) => p.id === 'kawai-ca701')!,
          reason: 'At $3,800–$4,600 AUD, the Casio GP-310 provides the world’s most accessible entry into genuine C. Bechstein full-length wooden keysticks with moving mechanical acoustic hammers.'
        };
      }
      return {
        main: PIANO_MODELS.find((p) => p.id === 'kawai-ca901')!,
        alt: PIANO_MODELS.find((p) => p.id === 'kawai-ca701')!,
        reason: 'At $4,995 AUD street price, the Kawai CA901 is the undisputed value benchmark, pairing Grand Feel III seesaw spruce keys with a physical solid wooden soundboard.'
      };
    }

    // If priority is high-tech / haptic / maintenance-free climate
    if (priority === 'tech' || (climate === 'variable' && budget !== 'low')) {
      return {
        main: PIANO_MODELS.find((p) => p.id === 'roland-lx-9')!,
        alt: PIANO_MODELS.find((p) => p.id === 'kawai-ca901')!,
        reason: 'The Roland LX-9 delivers the complete modern technological flagship package: extended 25cm pivot, tactile haptic keybed vibration, unlimited modeling polyphony, and total immunity to Australian climate swings backed by a 10-year warranty.'
      };
    }

    // Default acoustic purist recommendation
    return {
      main: PIANO_MODELS.find((p) => p.id === 'kawai-ca901')!,
      alt: PIANO_MODELS.find((p) => p.id === 'yamaha-clp-885')!,
      reason: 'The Kawai CA901 is the purist classical standard. Full-length solid spruce seesaw keys and a vibrating wooden soundboard produce organic acoustic warmth at thousands of dollars below competitor flagships.'
    };
  };

  const recommendation = getRecommendation();

  return (
    <section id="wizard" className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Decision Engine</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            Pianist Recommendation Wizard
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Answer 3 quick questions to pinpoint the ideal instrument for your repertoire, living space, and budget.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          {/* Progress Tracker */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className="flex items-center space-x-2 text-xs font-semibold cursor-pointer"
                onClick={() => setStep(s)}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-mono ${
                    step === s
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                      : step > s
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                </div>
                <span className="hidden sm:inline text-slate-300">
                  {s === 1 ? 'Primary Priority' : s === 2 ? 'Room & Climate' : 'Budget Ceiling'}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-4">
                Question 1: What matters most to you in your daily practice?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => { setPriority('acoustic'); setStep(2); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    priority === 'acoustic'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">Acoustic Grand Authenticity</strong>
                  Pure solid spruce seesaw keys and natural wooden soundboard resonance (Shigeru Kawai warmth).
                </button>

                <button
                  onClick={() => { setPriority('tech'); setStep(2); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    priority === 'tech'
                      ? 'bg-blue-500/10 border-blue-500 text-blue-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">Flagship Tech & Haptic Touch</strong>
                  Tactile string vibration into fingers, unlimited physical modeling, and extended 25cm pivot.
                </button>

                <button
                  onClick={() => { setPriority('furniture'); setStep(2); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    priority === 'furniture'
                      ? 'bg-purple-500/10 border-purple-500 text-purple-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">Grand Piano Furniture Aesthetic</strong>
                  A breathtaking baby grand or concert grand cabinet with an opening dual-prop lid.
                </button>

                <button
                  onClick={() => { setPriority('hammer'); setStep(2); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    priority === 'hammer'
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">Genuine Moving Acoustic Hammers</strong>
                  Rapid, frictionless Bechstein mechanical hammer reset for virtuoso trills and soft touch.
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-4">
                Question 2: What is the climate and heating in your practice space?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => { setClimate('variable'); setStep(3); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    climate === 'variable'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">Variable Climate or Ducted Heating</strong>
                  Noticeable seasonal humidity shifts or winter heating. Priority on zero maintenance and long warranty.
                </button>

                <button
                  onClick={() => { setClimate('stable'); setStep(3); }}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    climate === 'stable'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">Stable Indoor Climate (40%–60% RH)</strong>
                  Controlled indoor environment capable of housing traditional wooden acoustic materials and felts safely.
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-4">
                Question 3: What is your target investment ceiling in AUD?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <button
                  onClick={() => setBudget('low')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    budget === 'low'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">Under $5,000 AUD</strong>
                  Maximum value for money and highest return per dollar.
                </button>

                <button
                  onClick={() => setBudget('mid')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    budget === 'mid'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">$5,000 – $8,500 AUD</strong>
                  Flagship tier with premium speaker arrays and extended action.
                </button>

                <button
                  onClick={() => setBudget('high')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    budget === 'high'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <strong className="text-white block text-sm mb-1">$9,000+ AUD (No limit)</strong>
                  Ultra-flagship baby grand or concert grand cabinet.
                </button>
              </div>

              {/* Recommendation Reveal Box */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/40">
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>AUDIT RECOMMENDATION MATCH</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {recommendation.main.name}
                    </h4>
                    <p className="text-xs text-amber-400 font-mono mt-0.5">
                      {recommendation.main.priceDisplay} • {recommendation.main.format}
                    </p>
                  </div>
                  <span className={`self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${recommendation.main.badgeColor}`}>
                    {recommendation.main.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                  {recommendation.reason}
                </p>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>
                    Close Alternative: <strong>{recommendation.alt.name}</strong> ({recommendation.alt.priceDisplay})
                  </span>
                  <a
                    href="#catalog"
                    className="text-amber-400 hover:underline flex items-center space-x-1"
                  >
                    <span>View in Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                >
                  Back
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 flex items-center space-x-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
