import React from 'react';
import { X, Volume2, Check, Plus, Shield, Award, Sparkles, Activity } from 'lucide-react';
import { PianoModel } from '../data/pianoData';
import { playPianoChord, SoundProfile } from '../utils/audioPreview';

interface PianoDetailModalProps {
  piano: PianoModel | null;
  onClose: () => void;
  isSelected: boolean;
  toggleCompare: (id: string) => void;
}

export const PianoDetailModal: React.FC<PianoDetailModalProps> = ({
  piano,
  onClose,
  isSelected,
  toggleCompare
}) => {
  if (!piano) return null;

  const handlePlaySound = () => {
    let profile: SoundProfile = 'warm-shigeru';
    if (piano.brand === 'Roland') profile = 'modeled-roland';
    else if (piano.brand === 'Yamaha') profile = 'binaural-yamaha';
    else if (piano.brand === 'Casio') profile = 'bechstein-clear';
    playPianoChord(profile);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/50 sticky top-0 z-10 backdrop-blur-md">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${piano.badgeColor}`}>
                {piano.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">{piano.brand}</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">
              {piano.name}
            </h3>
            <p className="text-xs text-slate-400">{piano.format}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Price & Primary Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Street Price (AUD)</span>
              <span className="text-base font-bold text-amber-400 font-mono block mt-1">
                {piano.priceDisplay}
              </span>
              <span className="text-[10px] text-slate-400">RRP: {piano.rrpDisplay}</span>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Key Pivot Length</span>
              <span className="text-base font-bold text-slate-100 font-mono block mt-1">
                ~{piano.pivotLengthCm} cm
              </span>
              <span className="text-[10px] text-slate-400">{piano.actionType}</span>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Acoustic Power</span>
              <span className="text-base font-bold text-amber-300 font-mono block mt-1">
                {piano.speakerWatts}W Total
              </span>
              <span className="text-[10px] text-slate-400">{piano.speakerSystem.slice(0, 30)}...</span>
            </div>
          </div>

          {/* Action & Mechanics Deep Dive */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <h4 className="font-heading text-sm font-bold text-white mb-3 flex items-center space-x-2">
              <Activity className="w-4 h-4 text-amber-400" />
              <span>Action Architecture & Materials</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Action Model:</span>
                <span className="text-slate-200 font-semibold">{piano.actionName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Key Composition:</span>
                <span className="text-slate-200">{piano.keyMaterials}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Escapement (Let-Off):</span>
                <span className="text-slate-200">{piano.escapement}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Counterweights:</span>
                <span className="text-slate-200">{piano.counterweights}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block font-mono text-[11px]">Haptic String Vibration:</span>
                <span className={piano.hasHaptics ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                  {piano.hasHaptics ? 'Equipped with electromechanical keybed transducers' : 'No haptic tactile feedback'}
                </span>
              </div>
            </div>
          </div>

          {/* Sound & Amplification */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <h4 className="font-heading text-sm font-bold text-white mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Sound Engine & Projection Array</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 font-mono text-[11px] block">Sound Engine:</span>
                <span className="text-slate-200 font-semibold">{piano.soundEngine}</span>
                <span className="text-slate-400 block mt-0.5">{piano.engineType}</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[11px] block">Polyphony:</span>
                <span className="text-amber-400 font-mono">{piano.polyphony}</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[11px] block">Speaker Layout:</span>
                <span className="text-slate-300">{piano.speakerSystem}</span>
              </div>
            </div>
          </div>

          {/* Strengths & Trade-offs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h5 className="font-bold text-emerald-400 font-mono uppercase tracking-wider mb-2">
                Performance Strengths
              </h5>
              <ul className="space-y-1.5 text-slate-300">
                {piano.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-emerald-400 font-bold shrink-0">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h5 className="font-bold text-amber-400 font-mono uppercase tracking-wider mb-2">
                Trade-offs & Maintenance Notes
              </h5>
              <ul className="space-y-1.5 text-slate-400">
                {piano.tradeOffs.map((t, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-amber-400 shrink-0">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warranty & Climate */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="font-mono text-slate-400 uppercase text-[10px] block">Australian Warranty</span>
              <span className="font-semibold text-slate-200">{piano.warranty}</span>
            </div>
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
          <button
            onClick={handlePlaySound}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
            <span>Play Tone Simulation</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleCompare(piano.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                isSelected
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              {isSelected ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Comparison</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Compare</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
