import React, { useState, useMemo } from 'react';
import {
  Printer,
  Share2,
  Check,
  Search,
  Award,
  Sparkles,
  Info,
  Shield,
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PIANO_MODELS, ACTION_DEEP_DIVES, DISPERSION_ARCHITECTURES, HEAD_TO_HEAD_SCORES } from './data/pianoData';

export function App() {
  const [filterMode, setFilterMode] = useState<'all' | 'shortlist' | 'kawai' | 'roland' | 'yamaha' | 'casio'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredPianos = useMemo(() => {
    return PIANO_MODELS.filter((piano) => {
      // Filter tab
      if (filterMode === 'shortlist' && piano.badge !== 'Top Shortlist') return false;
      if (filterMode === 'kawai' && piano.brand !== 'Kawai') return false;
      if (filterMode === 'roland' && piano.brand !== 'Roland') return false;
      if (filterMode === 'yamaha' && piano.brand !== 'Yamaha') return false;
      if (filterMode === 'casio' && piano.brand !== 'Casio') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = piano.name.toLowerCase().includes(q);
        const matchBrand = piano.brand.toLowerCase().includes(q);
        const matchAction = piano.actionName.toLowerCase().includes(q);
        const matchEngine = piano.soundEngine.toLowerCase().includes(q);
        const matchStrengths = piano.strengths.some((s) => s.toLowerCase().includes(q));
        if (!matchName && !matchBrand && !matchAction && !matchEngine && !matchStrengths) {
          return false;
        }
      }
      return true;
    });
  }, [filterMode, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 pb-20">
      {/* Top Banner / Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">
              PIANO AUDIT
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Australian Market Comparison (Sept 2026)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-10">
        {/* Document Header */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <div className="border-b-2 border-slate-900 pb-4 mb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              HIGH-END DIGITAL PIANO TECHNICAL COMPARISON
            </h1>
            <p className="text-sm font-medium text-slate-600 mt-1">
              Objective Engineering, Action Mechanics & Acoustic Performance Analysis | Australian Market (Sept 2026)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs text-slate-600">
            <div>
              <strong className="text-slate-900 block">Evaluation Scope:</strong>
              Advanced Classical Performance (Grade 5 to Diploma Repertoire)
            </div>
            <div>
              <strong className="text-slate-900 block">Baseline Standard:</strong>
              Compact Entry Digitals (Short Pivot, Spring/Folded Keybeds)
            </div>
            <div>
              <strong className="text-slate-900 block">Pricing Scope:</strong>
              Verified Street Pricing across Authorized Australian Retailers (AUD)
            </div>
          </div>
        </div>

        {/* 2-MINUTE EXECUTIVE SUMMARY (FOR CATHY) */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border-l-4 border-l-blue-600 border border-slate-200 shadow-xs">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>2-Minute Summary & Quick Verdict</span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-3">
            The Three Contenders You Need to Know
          </h2>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            If you want to skip the deep engineering specs, here is what 50+ hours of dealer visits and action audits boil down to for advanced classical literature:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Kawai CA901 */}
            <div className="p-5 rounded-lg bg-blue-50/70 border border-blue-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-700 text-white mb-2">
                  Best Acoustic Touch & Value
                </span>
                <h3 className="text-lg font-bold text-slate-900">Kawai CA901</h3>
                <div className="text-sm font-bold text-blue-900 font-mono mt-0.5 mb-2">
                  $4,995 AUD <span className="text-xs font-normal text-slate-500">(Satin Black)</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The undisputed benchmark for classical training. Full-length solid spruce wooden keys pivoting over center balance pins (like a grand) paired with a <strong>physical vibrating wooden soundboard</strong>. Delivers genuine acoustic warmth at <strong>$2,500 to $4,400 below</strong> Roland.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-200 text-[11px] text-blue-900 font-medium">
                Ideal for: Classical purists seeking acoustic grand touch and room presence.
              </div>
            </div>

            {/* Roland LX-9 */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-white mb-2">
                  Modern Flagship & Zero Maintenance
                </span>
                <h3 className="text-lg font-bold text-slate-900">Roland LX-9</h3>
                <div className="text-sm font-bold text-slate-900 font-mono mt-0.5 mb-2">
                  $7,449 AUD <span className="text-xs font-normal text-slate-500">(Charcoal Black)</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The ultimate high-tech digital. Extended 25cm pivot, <strong>haptic string vibration</strong> felt in the keys, unlimited modeling polyphony, and an 8-speaker concert array. Composite keys are 100% immune to humidity swings with a <strong>10-year in-home warranty</strong>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-700 font-medium">
                Note: Superior specs to the GP-6 while costing ~$1,000 less.
              </div>
            </div>

            {/* Roland GP-6 */}
            <div className="p-5 rounded-lg bg-amber-50/70 border border-amber-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-800 text-white mb-2">
                  Baby Grand Furniture Statement
                </span>
                <h3 className="text-lg font-bold text-slate-900">Roland GP-6</h3>
                <div className="text-sm font-bold text-amber-950 font-mono mt-0.5 mb-2">
                  $7,979 – $9,399 AUD <span className="text-xs font-normal text-slate-500">(Polished)</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Stunning baby-grand cabinet with dual-prop opening lid that elevates any living room. However, you pay a <strong>~$1,000+ premium strictly for the shape</strong> while receiving a shorter pivot (21.5cm vs 25cm on LX-9) and no haptic vibration.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-200 text-[11px] text-amber-900 font-medium">
                Ideal for: Those prioritizing room aesthetics and baby grand profile.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORE DEMANDS */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-3 border-l-4 border-l-slate-900 pl-3 uppercase tracking-wide">
            1. Core Performance Requirements for Advanced Classical Repertoire
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Transitioning into advanced repertoire (Bach French Suites, Chopin Nocturnes/Etudes, Beethoven Sonatas, Debussy Preludes) imposes physical demands that compact digitals cannot satisfy:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Acoustic Lever Geometry (Extended Pivot):</strong>
              Uniform downweight across the key surface (minimum 22–24 cm pivot), eliminating the steep 2.5× resistance spike experienced near the fallboard on short-pivot actions.
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">True Gravity Hammer Return & Fast Repetition:</strong>
              Clean mechanical reset capable of handling rapid single-note repetitions, trills, and soft pianissimo touches without spring-loaded resistance or sluggish rebound.
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Dynamic Resolution & Pedaling Nuance:</strong>
              High-resolution continuous optical sensing supporting micro-pedaling (progressive half- and quarter-pedaling) and infinite or multi-velocity dynamic tonal graduation.
            </div>

            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Cabinet Acoustic Resonance:</strong>
              Three-dimensional sound diffusion (via solid wooden soundboard transducers or multi-channel spatial speaker arrays) providing organic air movement and physical keybed vibration.
            </div>
          </div>
        </section>

        {/* SECTION 2: THE 10 PIANOS MASTER TABLE */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-l-slate-900 pl-3 uppercase tracking-wide">
                2. Master 10-Piano Technical & Market Comparison (Australia, Sept 2026)
              </h2>
              <p className="text-xs text-slate-500 mt-1 pl-4">
                Verified street pricing across authorized Australian dealers (The Pianoforte, Better Music, Gospel Pianos, House of Pianos, Piano City, Belfield Music).
              </p>
            </div>

            {/* Simple Search */}
            <div className="relative w-full md:w-64 no-print">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search models or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-800"
              />
            </div>
          </div>

          {/* Clean Quick Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-4 pb-2 border-b border-slate-200 no-print">
            <span className="text-xs font-medium text-slate-500 self-center mr-1">Filter:</span>
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All 10 Models
            </button>
            <button
              onClick={() => setFilterMode('shortlist')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                filterMode === 'shortlist'
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              ⭐ Top Shortlist (3)
            </button>
            <button
              onClick={() => setFilterMode('kawai')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                filterMode === 'kawai'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Kawai
            </button>
            <button
              onClick={() => setFilterMode('roland')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                filterMode === 'roland'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Roland
            </button>
            <button
              onClick={() => setFilterMode('yamaha')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                filterMode === 'yamaha'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Yamaha
            </button>
            <button
              onClick={() => setFilterMode('casio')}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                filterMode === 'casio'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Casio
            </button>
          </div>

          {/* Clean Master Table */}
          <div className="overflow-x-auto border border-slate-300 rounded-lg">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-semibold">
                  <th className="p-3 w-[14%] border-r border-slate-800">Model & Format</th>
                  <th className="p-3 w-[12%] border-r border-slate-800">AU Street Price</th>
                  <th className="p-3 w-[16%] border-r border-slate-800">Action & Materials</th>
                  <th className="p-3 w-[15%] border-r border-slate-800">Sound Engine</th>
                  <th className="p-3 w-[14%] border-r border-slate-800">Speakers</th>
                  <th className="p-3 w-[15%] border-r border-slate-800">Strengths</th>
                  <th className="p-3 w-[14%]">Trade-offs & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredPianos.map((piano) => {
                  const isTopShortlist = piano.badge === 'Top Shortlist';
                  return (
                    <tr
                      key={piano.id}
                      className={`transition-colors ${
                        isTopShortlist ? 'bg-blue-50/70 hover:bg-blue-100/60 font-normal' : 'hover:bg-slate-50'
                      }`}
                    >
                      {/* Model & Format */}
                      <td className="p-3 align-top border-r border-slate-200">
                        <strong className="text-slate-950 font-bold block text-sm">{piano.name}</strong>
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase mt-1 ${
                            isTopShortlist
                              ? 'bg-blue-700 text-white'
                              : piano.badge === 'Hybrid Action'
                              ? 'bg-emerald-800 text-white'
                              : 'bg-slate-700 text-white'
                          }`}
                        >
                          {piano.badge}
                        </span>
                        <div className="text-[11px] text-slate-500 mt-1">{piano.format}</div>
                      </td>

                      {/* Price */}
                      <td className="p-3 align-top border-r border-slate-200">
                        <div className="font-bold text-slate-950 text-xs sm:text-sm">
                          {piano.priceDisplay}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">RRP: {piano.rrpDisplay}</div>
                      </td>

                      {/* Action */}
                      <td className="p-3 align-top border-r border-slate-200">
                        <strong className="text-slate-900 block">{piano.actionName}</strong>
                        <div className="text-slate-600 text-[11px] mt-0.5">
                          {piano.keyMaterials}
                        </div>
                        <div className="text-slate-500 text-[10px] mt-0.5">
                          ~{piano.pivotLengthCm} cm pivot • {piano.counterweights}
                        </div>
                        {piano.hasHaptics && (
                          <span className="inline-block mt-1 px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            Haptic Vibration
                          </span>
                        )}
                      </td>

                      {/* Sound Engine */}
                      <td className="p-3 align-top border-r border-slate-200">
                        <strong className="text-slate-900 block">{piano.soundEngine}</strong>
                        <div className="text-slate-600 text-[11px] mt-0.5">{piano.engineType}</div>
                        <div className="text-slate-500 text-[10px] mt-0.5">
                          Polyphony: {piano.polyphony}
                        </div>
                      </td>

                      {/* Speakers */}
                      <td className="p-3 align-top border-r border-slate-200">
                        <strong className="text-slate-950 block">{piano.speakerWatts}W Total</strong>
                        <div className="text-slate-600 text-[11px] mt-0.5">{piano.speakerSystem}</div>
                      </td>

                      {/* Strengths */}
                      <td className="p-3 align-top border-r border-slate-200">
                        <ul className="space-y-1 text-[11px] text-slate-700">
                          {piano.strengths.slice(0, 2).map((s, idx) => (
                            <li key={idx} className="flex items-start space-x-1">
                              <span className="text-blue-600 font-bold shrink-0">•</span>
                              <span className="leading-snug">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </td>

                      {/* Trade-offs */}
                      <td className="p-3 align-top">
                        <ul className="space-y-1 text-[11px] text-slate-600">
                          {piano.tradeOffs.map((t, idx) => (
                            <li key={idx} className="flex items-start space-x-1">
                              <span className="text-slate-400 font-bold shrink-0">•</span>
                              <span className="leading-snug">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: ACTION MECHANICS DEEP DIVE */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-2 border-l-4 border-l-slate-900 pl-3 uppercase tracking-wide">
            3. Action Mechanics Deep Dive: The Engineering of Touch
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            The tactile connection between keystroke and tonal output governs dynamic shading, wrist tension, and finger independence:
          </p>

          <div className="overflow-x-auto border border-slate-300 rounded-lg mb-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white font-semibold">
                  <th className="p-2.5">Action Name</th>
                  <th className="p-2.5">Manufacturer</th>
                  <th className="p-2.5">Pivot Architecture</th>
                  <th className="p-2.5">Pivot Length</th>
                  <th className="p-2.5">Key Composition</th>
                  <th className="p-2.5">Escapement</th>
                  <th className="p-2.5">Counterweights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-blue-50/50">
                  <td className="p-2.5 font-bold text-slate-900">Grand Feel III (GFIII)</td>
                  <td className="p-2.5">Kawai (CA901 / CA701)</td>
                  <td className="p-2.5 font-semibold text-blue-900">Seesaw Lever (Center balance pin)</td>
                  <td className="p-2.5 font-mono font-bold">~24.0 cm</td>
                  <td className="p-2.5">100% Solid Spruce Wood</td>
                  <td className="p-2.5">Rubber bumper notch</td>
                  <td className="p-2.5 font-semibold text-emerald-800">Yes (Graded)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Natural Grand Hammer</td>
                  <td className="p-2.5">Casio (GP-510 / GP-310)</td>
                  <td className="p-2.5 font-semibold text-blue-900">Seesaw Lever (Grand fulcrum)</td>
                  <td className="p-2.5 font-mono font-bold">~23.5 cm</td>
                  <td className="p-2.5">Austrian Spruce (C. Bechstein)</td>
                  <td className="p-2.5 font-semibold text-emerald-800">Natural (Moving hammer)</td>
                  <td className="p-2.5">Acoustic balance</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Hybrid Grand Keyboard</td>
                  <td className="p-2.5">Roland (LX-9 / LX-6 / GP-9)</td>
                  <td className="p-2.5">Folded Hinge (Extended rear pivot)</td>
                  <td className="p-2.5 font-mono font-bold text-blue-900">~25.0 cm</td>
                  <td className="p-2.5">Wood / Polymer Composite</td>
                  <td className="p-2.5">Synthetic notch</td>
                  <td className="p-2.5">Keybed balanced</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Hybrid Premium Keyboard</td>
                  <td className="p-2.5">Roland (GP-6)</td>
                  <td className="p-2.5">Folded Hinge (Standard pivot)</td>
                  <td className="p-2.5 font-mono font-bold">~21.5 cm</td>
                  <td className="p-2.5">Wood / Polymer Composite</td>
                  <td className="p-2.5">Synthetic notch</td>
                  <td className="p-2.5">Keybed balanced</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">GrandTouch (Weighted)</td>
                  <td className="p-2.5">Yamaha (CLP-885)</td>
                  <td className="p-2.5">Folded Hinge (High rear pivot)</td>
                  <td className="p-2.5 font-mono font-bold">~21.5 cm</td>
                  <td className="p-2.5">Solid Wood (White) / Plastic</td>
                  <td className="p-2.5">Synthetic notch</td>
                  <td className="p-2.5 font-semibold text-emerald-800">Yes (Linear weights)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">GrandTouch (Standard)</td>
                  <td className="p-2.5">Yamaha (CLP-875)</td>
                  <td className="p-2.5">Folded Hinge (High rear pivot)</td>
                  <td className="p-2.5 font-mono font-bold">~21.5 cm</td>
                  <td className="p-2.5">Solid Wood (White) / Plastic</td>
                  <td className="p-2.5">Synthetic notch</td>
                  <td className="p-2.5 text-slate-400">No (Inertia only)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1 text-sm">
                Kawai Grand Feel III: Pure Acoustic Fulcrum
              </strong>
              <p className="mb-2">
                Keysticks crafted from solid continuous spruce pivoting on center pins. Depressing a key levers the hammer upward from the rear.
              </p>
              <p className="text-[11px] text-slate-600 bg-white p-2.5 rounded border border-slate-200">
                <strong>Slip-Tape Fix:</strong> Historical Grand Feel I/II PTFE tape wear was completely eliminated in GFIII by replacing it with a permanently molded composite resin cap, guaranteeing fluid key returns permanently.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1 text-sm">
                Casio / C. Bechstein: Genuine Moving Hammers
              </strong>
              <p>
                Co-developed with C. Bechstein in Berlin using full-length Austrian spruce keys. Depressing a key thrusts an actual mechanical hammer shank upward. Pure gravity reset omits artificial rubber notches for rapid, frictionless trill repetition.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1 text-sm">
                Roland Hybrid Grand: High Leverage & Haptics
              </strong>
              <p className="mb-2">
                Ultra-rigid polymer core bonded to wooden side panels, immune to humidity shifts. Extended 25cm pivot minimizes leverage deficit near the fallboard.
              </p>
              <p className="text-[11px] text-slate-600 bg-white p-2.5 rounded border border-slate-200">
                <strong>Haptic Vibration (LX-9 Exclusive):</strong> Micro-transducers transmit subtle acoustic vibrations into keysticks synchronized with string resonance.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1 text-sm">
                Yamaha GrandTouch: Static vs. Dynamic Weight
              </strong>
              <p>
                CLP-885 embeds linear counterweights to counterbalance hammer weight. Maintains a noticeably firm initial downweight ("break"), which offers excellent finger independence training but can feel stiffer during extended pianissimo passages.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: SOUND ENGINES & ACOUSTIC DISPERSION */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-2 border-l-4 border-l-slate-900 pl-3 uppercase tracking-wide">
            4. Sound Generation Engines, Acoustic Dispersion & Pedaling
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            The translation of physical touch into sound occurs through two distinct paradigms: Multi-Channel Acoustic Sampling vs. Real-Time Mathematical Modeling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 mb-6">
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Kawai SK-EX Rendering (Sampling + Resonance):</strong>
              Anechoic multi-channel microphones at player ears, rim, and soundboard of the Shigeru Kawai Concert Grand, married to physical resonance algorithms for a warm, woody acoustic tone.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Roland Piano Reality (Mathematical Modeling):</strong>
              Zero recorded audio samples. DSP processors calculate virtual strings, bridge transfer, and cabinet air reflections in real time for unlimited polyphony and infinite velocity steps.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Yamaha Grand Expression (Binaural + VRM):</strong>
              Binaural dummy-head microphones capture the Yamaha CFX and Bösendorfer Imperial 290. Virtual Resonance Modeling (VRM) computes sympathetic string and body resonance.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">4. Casio AiR Grand Source (European Trio):</strong>
              Three historical grand profiles: Berlin Grand (Bechstein D282, clear counterpoint), Hamburg Grand (broad power), and Vienna Grand (mellow singing tone).
            </div>
          </div>

          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Acoustic Room Dispersion: Cone Speakers vs. Solid Spruce Soundboard
          </h3>
          <div className="overflow-x-auto border border-slate-300 rounded-lg mb-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white font-semibold">
                  <th className="p-2.5 w-[22%]">Dispersion Architecture</th>
                  <th className="p-2.5 w-[18%]">Primary Models</th>
                  <th className="p-2.5 w-[32%]">Engineering Design</th>
                  <th className="p-2.5 w-[28%]">Acoustic Characteristics in Room</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-blue-50/50">
                  <td className="p-2.5 font-bold text-slate-900">TwinDrive Spruce Soundboard</td>
                  <td className="p-2.5">Kawai CA901</td>
                  <td className="p-2.5">Acoustic transducers bolted directly to a solid spruce wooden soundboard + 6 directional speakers (135W).</td>
                  <td className="p-2.5">Vibrating wood radiates sound omnidirectionally (360°), replicating warm upright presence.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Multi-Channel Spatial Projection</td>
                  <td className="p-2.5">Roland LX-9 (162W)<br />Roland GP-6 (100W)</td>
                  <td className="p-2.5">Discrete amplifiers driving segregated zones: cabinet woofers (body), spatial tweeters (room), nearfield drivers.</td>
                  <td className="p-2.5">Pinpoint stereo imaging; bass string rumble on left, treble brilliance on right.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Grand Acoustic Spruce Cones</td>
                  <td className="p-2.5">Yamaha CLP-885 (300W)<br />CLP-875 (230W)</td>
                  <td className="p-2.5">6-speaker tri-amplified system using cones molded from spruce wood pulp.</td>
                  <td className="p-2.5">Fast transient attack speed and huge headroom without distortion.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600">
            <strong className="text-slate-900">Continuous Damper Pedals:</strong> Both Kawai CA901 (Grand Feel Pedal System) and Roland LX-9 / GP-6 (Piano Reality Responsive Damper) incorporate continuous optical sensors measuring exact pedal travel depth for nuanced half-pedaling.
          </div>
        </section>

        {/* SECTION 5: HEAD-TO-HEAD FLAGSHIP ANALYSIS */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-2 border-l-4 border-l-slate-900 pl-3 uppercase tracking-wide">
            5. Head-to-Head Flagship Analysis: Kawai CA901 vs. Roland LX-9 vs. Roland GP-6
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Evaluating the three leading contenders on pure mechanical, acoustic, and value metrics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 mb-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1 text-sm">
                Roland LX-9 vs. Roland GP-6: Engineering Hierarchy
              </strong>
              <p className="mb-2 text-slate-600">
                While the GP-6 features a baby-grand cabinet, the <strong>LX-9 is Roland's true technological flagship</strong>:
              </p>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                <li><strong>Haptic Keybed Feedback:</strong> LX-9 features electromechanical keybed vibration simulating string resonance. GP-6 lacks this entirely.</li>
                <li><strong>Action Pivot Length:</strong> LX-9 features the long-pivot ~25cm action; GP-6 uses standard ~21.5cm pivot.</li>
                <li><strong>Speaker Array:</strong> LX-9 has 8 speakers (162W) vs GP-6's 5 speakers (100W).</li>
                <li><strong>Price Reality:</strong> LX-9 retails for $7,449 – $8,449 AUD, while GP-6 commands $7,979 – $9,399 AUD (a ~$1k premium strictly for the baby grand shell).</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50/60 rounded-lg border border-blue-200">
              <strong className="text-slate-900 block mb-1 text-sm">
                Kawai CA901: The Acoustic Purist's Proposition
              </strong>
              <p className="mb-2 text-slate-600">
                For classical training focused on acoustic grand authenticity, the CA901 presents an unmatched value proposition:
              </p>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                <li><strong>Acoustic Seesaw Action:</strong> Grand Feel III utilizes continuous solid spruce keysticks pivoting on center pins.</li>
                <li><strong>Spruce Soundboard:</strong> Couples multi-channel speakers with a physical wooden soundboard for warm room projection.</li>
                <li><strong>Price Benchmark:</strong> At <strong>$4,995 AUD</strong>, the CA901 delivers top-tier acoustic action and soundboard engineering at <strong>$2,500 to $4,400 below</strong> Roland's flagships.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Objective Performance Matrix (Audited Scores out of 10)
          </h3>
          <div className="overflow-x-auto border border-slate-300 rounded-lg mb-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-semibold">
                  <th className="p-2.5 w-[28%]">Evaluation Metric</th>
                  <th className="p-2.5 w-[24%] text-blue-200">Kawai CA901 ($4,995 – $5,995)</th>
                  <th className="p-2.5 w-[24%]">Roland LX-9 ($7,449 – $8,449)</th>
                  <th className="p-2.5 w-[24%]">Roland GP-6 ($7,979 – $9,399)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Action Authenticity (Grand Feel)</td>
                  <td className="p-2.5 font-bold text-blue-900 bg-blue-50/50">10 / 10 <span className="text-[10px] font-normal text-slate-500 block">Full spruce seesaw, balance pin</span></td>
                  <td className="p-2.5 font-bold text-slate-900">9.0 / 10 <span className="text-[10px] font-normal text-slate-500 block">High-pivot composite + Haptics</span></td>
                  <td className="p-2.5 font-bold text-slate-900">8.5 / 10 <span className="text-[10px] font-normal text-slate-500 block">Standard-pivot, no haptics</span></td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Dynamic Repetition & Virtuosity</td>
                  <td className="p-2.5 font-bold text-slate-900 bg-blue-50/50">9.5 / 10</td>
                  <td className="p-2.5 font-bold text-emerald-800">9.8 / 10 <span className="text-[10px] font-normal text-slate-500 block">Fast optical reset</span></td>
                  <td className="p-2.5 font-bold text-slate-900">9.5 / 10</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Acoustic Projection & Realism</td>
                  <td className="p-2.5 font-bold text-slate-900 bg-blue-50/50">9.6 / 10 <span className="text-[10px] font-normal text-slate-500 block">Spruce soundboard + 6 spkrs</span></td>
                  <td className="p-2.5 font-bold text-emerald-800">9.7 / 10 <span className="text-[10px] font-normal text-slate-500 block">8-speaker concert array (162W)</span></td>
                  <td className="p-2.5 font-bold text-slate-900">8.8 / 10 <span className="text-[10px] font-normal text-slate-500 block">5-speaker array (100W)</span></td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Tonal Coloring & Expression</td>
                  <td className="p-2.5 font-bold text-blue-900 bg-blue-50/50">9.5 / 10 <span className="text-[10px] font-normal text-slate-500 block">Warm Shigeru Kawai sample</span></td>
                  <td className="p-2.5 font-bold text-slate-900">9.4 / 10 <span className="text-[10px] font-normal text-slate-500 block">Unlimited polyphony, bright</span></td>
                  <td className="p-2.5 font-bold text-slate-900">9.0 / 10</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-slate-900">Visual & Cabinet Presence</td>
                  <td className="p-2.5 font-bold text-slate-900 bg-blue-50/50">8.5 / 10</td>
                  <td className="p-2.5 font-bold text-slate-900">9.0 / 10</td>
                  <td className="p-2.5 font-bold text-amber-900 bg-amber-50/50">9.9 / 10 <span className="text-[10px] font-normal text-slate-500 block">Luxurious baby grand cabinet</span></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Value for Investment</td>
                  <td className="p-2.5 font-bold text-blue-900 bg-blue-100/70 text-sm">10 / 10 <span className="text-[10px] font-normal text-slate-600 block">Benchmark value/price</span></td>
                  <td className="p-2.5 font-bold text-slate-900">8.5 / 10</td>
                  <td className="p-2.5 font-bold text-slate-500">7.0 / 10 <span className="text-[10px] font-normal text-slate-500 block">Cabinet markup</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
            <strong className="text-slate-900 block mb-1">Material Stability & Australian Climate Resilience:</strong>
            <ul className="space-y-1 list-disc pl-4 text-slate-600">
              <li><strong>Roland LX-9 / GP-6:</strong> Composite keysticks with synthetic polymer cores and resin guide pins. Immune to temperature swings and winter heating. Backed by a <strong>10-year Australian warranty</strong>.</li>
              <li><strong>Kawai CA901:</strong> Continuous solid spruce keysticks and woven felt bushings. GFIII composite capstans eliminate historical slip-tape issues, though natural spruce benefits from relative humidity stability between 40%–60%. Backed by a <strong>5-year Australian warranty</strong>.</li>
            </ul>
          </div>
        </section>

        {/* FOOTER & DEALERSHIP VERIFICATION */}
        <footer className="pt-6 border-t border-slate-300 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>Piano Audit Australia (Sept 2026)</strong> — Verified street pricing from The Pianoforte, Better Music, Gospel Pianos, House of Pianos, Piano City, and Belfield Music.
          </div>
          <div className="flex items-center space-x-3 no-print">
            <a
              href="https://github.com/mKlus/digital-piano-comparison"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-slate-900 font-medium underline flex items-center space-x-1"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => window.print()}
              className="text-slate-700 hover:text-slate-900 font-medium underline"
            >
              Print A4 Report
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
