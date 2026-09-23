import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Volume2,
  Check,
  Plus,
  SlidersHorizontal,
  Table as TableIcon,
  LayoutGrid,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';
import { PIANO_MODELS, PianoModel } from '../data/pianoData';
import { playPianoChord, SoundProfile } from '../utils/audioPreview';

interface PianoCatalogProps {
  selectedIds: string[];
  toggleCompare: (id: string) => void;
  openDetailModal: (piano: PianoModel) => void;
}

export const PianoCatalog: React.FC<PianoCatalogProps> = ({
  selectedIds,
  toggleCompare,
  openDetailModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedActionType, setSelectedActionType] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(17000);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const brands = ['All', 'Kawai', 'Roland', 'Yamaha', 'Casio'];
  const actionTypes = ['All', 'Seesaw Wooden', 'Extended High-Pivot Folded', 'Moving Acoustic Hammer'];

  const filteredPianos = useMemo(() => {
    return PIANO_MODELS.filter((piano) => {
      // Brand filter
      if (selectedBrand !== 'All' && piano.brand !== selectedBrand) return false;

      // Action type filter
      if (selectedActionType !== 'All' && piano.actionType !== selectedActionType) return false;

      // Price filter
      if (piano.priceSatinAUD > maxPrice) return false;

      // Search term
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase();
        const matchName = piano.name.toLowerCase().includes(q);
        const matchBrand = piano.brand.toLowerCase().includes(q);
        const matchAction = piano.actionName.toLowerCase().includes(q);
        const matchEngine = piano.soundEngine.toLowerCase().includes(q);
        const matchSpecs = `${piano.format} ${piano.speakerSystem} ${piano.keyMaterials}`.toLowerCase().includes(q);
        const matchStrengths = piano.strengths.some((s) => s.toLowerCase().includes(q));
        if (!matchName && !matchBrand && !matchAction && !matchEngine && !matchSpecs && !matchStrengths) {
          return false;
        }
      }

      return true;
    });
  }, [selectedBrand, selectedActionType, maxPrice, searchTerm]);

  const handlePlaySound = (piano: PianoModel) => {
    let profile: SoundProfile = 'warm-shigeru';
    if (piano.brand === 'Roland') profile = 'modeled-roland';
    else if (piano.brand === 'Yamaha') profile = 'binaural-yamaha';
    else if (piano.brand === 'Casio') profile = 'bechstein-clear';

    setPlayingId(piano.id);
    playPianoChord(profile);
    setTimeout(() => {
      setPlayingId(null);
    }, 2200);
  };

  return (
    <section id="catalog" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
              Section 03 Master Benchmark
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              The 10 Benchmarked High-End Pianos
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Verified Australian street pricing across authorized dealers (The Pianoforte, Better Music, Gospel Pianos, House of Pianos, Piano City).
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0 no-print">
            <span className="text-xs text-slate-400 mr-1">View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs flex items-center space-x-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg text-xs flex items-center space-x-1.5 transition-all ${
                viewMode === 'table'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 mb-8 space-y-4 no-print">
          {/* Top Search & Brand Filter row */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search models, engines, action, 'haptic', 'soundboard', 'spruce'..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Brand Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Brand:</span>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedBrand === brand
                      ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Filters: Action Type & Price Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
            {/* Action Type */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Mechanical Action Type
              </label>
              <div className="flex flex-wrap gap-1.5">
                {actionTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedActionType(type)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                      selectedActionType === type
                        ? 'bg-slate-100 text-slate-950 font-bold'
                        : 'bg-slate-800/70 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
                <span className="text-slate-400 uppercase tracking-wider">Max Price (AUD)</span>
                <span className="text-amber-400 font-bold">
                  {maxPrice >= 17000 ? 'No Limit ($17,000+ AUD)' : `Up to $${maxPrice.toLocaleString()} AUD`}
                </span>
              </div>
              <input
                type="range"
                min="4000"
                max="17000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>
          </div>

          {/* Active Filter Count Status */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span>
              Showing <strong className="text-slate-200">{filteredPianos.length}</strong> of {PIANO_MODELS.length} benchmarked pianos
            </span>
            {(selectedBrand !== 'All' || selectedActionType !== 'All' || maxPrice < 17000 || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedBrand('All');
                  setSelectedActionType('All');
                  setMaxPrice(17000);
                  setSearchTerm('');
                }}
                className="text-amber-400 hover:underline text-[11px]"
              >
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* RESULTS: Grid Cards View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPianos.map((piano) => {
              const isSelected = selectedIds.includes(piano.id);
              const isPlaying = playingId === piano.id;

              return (
                <div
                  key={piano.id}
                  className={`glass-panel rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-xl shadow-amber-500/10'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* Header: Badge & Brand */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider uppercase ${piano.badgeColor}`}>
                        {piano.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-semibold">{piano.brand}</span>
                    </div>

                    {/* Piano Name & Format */}
                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      {piano.name}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">{piano.format}</p>

                    {/* Price Block */}
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/80 mb-4">
                      <div className="text-xs text-slate-400 font-mono">Verified AU Street Price</div>
                      <div className="text-base sm:text-lg font-bold text-amber-400 font-mono">
                        {piano.priceDisplay}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        RRP: {piano.rrpDisplay}
                      </div>
                    </div>

                    {/* Key Technical Specifications */}
                    <div className="space-y-2 mb-4 text-xs">
                      <div className="flex items-start justify-between pb-1.5 border-b border-slate-800/60">
                        <span className="text-slate-400">Action:</span>
                        <span className="text-slate-200 font-semibold text-right">
                          {piano.actionName} ({piano.pivotLengthCm} cm)
                        </span>
                      </div>
                      <div className="flex items-start justify-between pb-1.5 border-b border-slate-800/60">
                        <span className="text-slate-400">Keybed:</span>
                        <span className="text-slate-200 text-right">{piano.actionType}</span>
                      </div>
                      <div className="flex items-start justify-between pb-1.5 border-b border-slate-800/60">
                        <span className="text-slate-400">Sound Engine:</span>
                        <span className="text-slate-200 text-right">{piano.soundEngine}</span>
                      </div>
                      <div className="flex items-start justify-between pb-1.5 border-b border-slate-800/60">
                        <span className="text-slate-400">Sound Projection:</span>
                        <span className="text-slate-200 text-right font-mono font-bold text-amber-300">
                          {piano.speakerWatts}W
                        </span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-slate-400">Haptics:</span>
                        <span className={`font-semibold ${piano.hasHaptics ? 'text-emerald-400' : 'text-slate-400'}`}>
                          {piano.hasHaptics ? 'Yes (Electromechanical)' : 'No'}
                        </span>
                      </div>
                    </div>

                    {/* Performance Strengths */}
                    <div className="mb-4">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Key Performance Strengths
                      </div>
                      <ul className="text-xs text-slate-300 space-y-1">
                        {piano.strengths.slice(0, 2).map((s, sIdx) => (
                          <li key={sIdx} className="flex items-start space-x-1.5">
                            <span className="text-amber-400 shrink-0 font-bold">•</span>
                            <span className="leading-snug">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    {/* Play Audio Sample */}
                    <button
                      onClick={() => handlePlaySound(piano)}
                      disabled={isPlaying}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
                        isPlaying
                          ? 'bg-amber-500 text-slate-950 font-bold animate-pulse'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isPlaying ? 'Playing...' : 'Play Tone'}</span>
                    </button>

                    <div className="flex items-center space-x-1.5">
                      {/* Specs Modal Trigger */}
                      <button
                        onClick={() => openDetailModal(piano)}
                        className="px-2.5 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      >
                        Details
                      </button>

                      {/* Compare Toggle */}
                      <button
                        onClick={() => toggleCompare(piano.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Compare</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* RESULTS: Master Technical Table View */}
        {viewMode === 'table' && (
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 font-mono uppercase tracking-wider text-[11px]">
                    <th className="p-3.5 min-w-[160px]">Model & Format</th>
                    <th className="p-3.5 min-w-[140px]">Verified AU Street Price</th>
                    <th className="p-3.5 min-w-[200px]">Action & Pivot</th>
                    <th className="p-3.5 min-w-[180px]">Sound Engine & Polyphony</th>
                    <th className="p-3.5 min-w-[170px]">Speakers & Power</th>
                    <th className="p-3.5 min-w-[220px]">Strengths</th>
                    <th className="p-3.5 min-w-[200px]">Trade-Offs & Notes</th>
                    <th className="p-3.5 text-center min-w-[90px]">Compare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredPianos.map((piano) => {
                    const isSelected = selectedIds.includes(piano.id);
                    return (
                      <tr
                        key={piano.id}
                        className={`hover:bg-slate-900/50 transition-colors ${
                          isSelected ? 'bg-amber-500/5' : ''
                        }`}
                      >
                        <td className="p-3.5 align-top">
                          <div className="font-heading font-bold text-sm text-white">{piano.name}</div>
                          <span className={`inline-block mt-1 px-2 py-0.2 rounded text-[10px] font-bold uppercase tracking-wider ${piano.badgeColor}`}>
                            {piano.badge}
                          </span>
                          <div className="text-[11px] text-slate-400 mt-1">{piano.format}</div>
                        </td>

                        <td className="p-3.5 align-top font-mono">
                          <div className="font-bold text-amber-400 text-xs sm:text-sm">{piano.priceDisplay}</div>
                          <div className="text-[10px] text-slate-400">RRP: {piano.rrpDisplay}</div>
                        </td>

                        <td className="p-3.5 align-top">
                          <div className="font-semibold text-slate-200">{piano.actionName}</div>
                          <div className="text-slate-400 text-[11px] mt-0.5">
                            {piano.pivotLengthCm} cm pivot • {piano.actionType}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{piano.keyMaterials}</div>
                          {piano.hasHaptics && (
                            <span className="inline-block mt-1 px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[9px] font-bold">
                              Haptic Vibration
                            </span>
                          )}
                        </td>

                        <td className="p-3.5 align-top">
                          <div className="font-semibold text-slate-200">{piano.soundEngine}</div>
                          <div className="text-slate-400 text-[11px] mt-0.5">{piano.engineType}</div>
                          <div className="font-mono text-amber-400 text-[11px] mt-0.5">
                            Polyphony: {piano.polyphony}
                          </div>
                        </td>

                        <td className="p-3.5 align-top">
                          <div className="font-bold font-mono text-amber-300">{piano.speakerWatts}W Total</div>
                          <div className="text-slate-300 text-[11px] mt-0.5 leading-snug">{piano.speakerSystem}</div>
                        </td>

                        <td className="p-3.5 align-top">
                          <ul className="space-y-1 text-[11px] text-slate-300">
                            {piano.strengths.slice(0, 2).map((s, idx) => (
                              <li key={idx} className="flex items-start space-x-1">
                                <span className="text-amber-400 shrink-0">•</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </td>

                        <td className="p-3.5 align-top">
                          <ul className="space-y-1 text-[11px] text-slate-400">
                            {piano.tradeOffs.map((t, idx) => (
                              <li key={idx} className="flex items-start space-x-1">
                                <span className="text-slate-500 shrink-0">•</span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </td>

                        <td className="p-3.5 align-top text-center">
                          <button
                            onClick={() => toggleCompare(piano.id)}
                            className={`p-2 rounded-lg text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-amber-500 text-slate-950'
                                : 'bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30'
                            }`}
                          >
                            {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
