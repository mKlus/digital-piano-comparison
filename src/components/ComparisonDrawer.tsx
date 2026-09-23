import React from 'react';
import { X, Check, AlertCircle, Sparkles, Trash2, ArrowRight } from 'lucide-react';
import { PIANO_MODELS, PianoModel } from '../data/pianoData';

interface ComparisonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
  removeId: (id: string) => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  isOpen,
  onClose,
  selectedIds,
  setSelectedIds,
  removeId
}) => {
  if (!isOpen) return null;

  const selectedPianos = PIANO_MODELS.filter((p) => selectedIds.includes(p.id));

  const presets = [
    {
      name: 'Flagship Showdown (CA901 vs LX-9 vs GP-6)',
      ids: ['kawai-ca901', 'roland-lx-9', 'roland-gp-6']
    },
    {
      name: 'Kawai Brothers (CA901 vs CA701)',
      ids: ['kawai-ca901', 'kawai-ca701']
    },
    {
      name: 'Sub-$6,000 AUD Trio (CA901 vs CLP-875 vs GP-310)',
      ids: ['kawai-ca901', 'yamaha-clp-875', 'casio-gp-310']
    },
    {
      name: 'Roland Upright vs Baby Grand (LX-9 vs GP-6)',
      ids: ['roland-lx-9', 'roland-gp-6']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex flex-col justify-end lg:justify-center p-0 sm:p-4 lg:p-6 transition-all duration-300">
      <div className="bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-3xl max-w-6xl w-full mx-auto max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-heading text-lg sm:text-xl font-bold text-white">
                Side-by-Side Engineering Matrix
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {selectedPianos.length} of 4 Selected
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Direct mechanical, acoustic, and price comparison across chosen models.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {selectedPianos.length > 0 && (
              <button
                onClick={() => setSelectedIds([])}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-rose-400 flex items-center space-x-1 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear All</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Presets Bar */}
        <div className="px-4 sm:px-6 py-3 bg-slate-950/40 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-400 shrink-0 font-mono text-[11px]">Quick Presets:</span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIds(preset.ids)}
              className="px-3 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-amber-400 border border-slate-700/60 shrink-0 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Comparison Content Table */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          {selectedPianos.length === 0 ? (
            <div className="py-16 text-center">
              <Sparkles className="w-10 h-10 text-amber-400/50 mx-auto mb-3" />
              <h4 className="text-base font-bold text-white mb-1">No Pianos Selected for Comparison</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
                Click "+ Compare" on any card in the catalog or choose one of the quick presets above.
              </p>
              <button
                onClick={() => setSelectedIds(['kawai-ca901', 'roland-lx-9', 'roland-gp-6'])}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-semibold text-xs hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                Load Top Shortlist Preset
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                {/* Header row with cards */}
                <thead>
                  <tr>
                    <th className="p-3 w-40 bg-slate-950/50 font-mono uppercase text-[11px] text-slate-400 border-b border-slate-800">
                      Specification
                    </th>
                    {selectedPianos.map((p) => (
                      <th
                        key={p.id}
                        className="p-3 min-w-[220px] bg-slate-950/50 border-b border-slate-800 align-top"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase ${p.badgeColor}`}>
                              {p.badge}
                            </span>
                            <div className="font-heading font-bold text-sm sm:text-base text-white mt-1">
                              {p.name}
                            </div>
                            <div className="text-[11px] text-slate-400">{p.format}</div>
                          </div>
                          <button
                            onClick={() => removeId(p.id)}
                            className="text-slate-400 hover:text-rose-400 p-1"
                            title="Remove from comparison"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800/80">
                  {/* Street Price */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Street Price (AUD)
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3 font-mono">
                        <div className="font-bold text-amber-400 text-sm">{p.priceDisplay}</div>
                        <div className="text-[10px] text-slate-400">RRP: {p.rrpDisplay}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Action Mechanism */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Action Architecture
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3">
                        <div className="font-semibold text-slate-100">{p.actionName}</div>
                        <div className="text-amber-400 text-[11px] font-mono mt-0.5">
                          {p.actionType}
                        </div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{p.keyMaterials}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Pivot Length */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Key Pivot Length
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-bold text-sm text-slate-100">
                            ~{p.pivotLengthCm} cm
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] ${
                            p.pivotLengthCm >= 24 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {p.pivotLengthCm >= 24 ? 'Grand Fulcrum' : 'Standard'}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Escapement & Counterweights */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Escapement & Weights
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3 text-slate-300">
                        <div><strong>Escapement:</strong> {p.escapement}</div>
                        <div className="mt-1"><strong>Weights:</strong> {p.counterweights}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Haptic Feedback */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Haptic Vibration
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3">
                        {p.hasHaptics ? (
                          <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold inline-flex items-center space-x-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>Active Haptics</span>
                          </span>
                        ) : (
                          <span className="text-slate-400">No tactile vibration</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Sound Engine & Polyphony */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Sound Generation
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3">
                        <div className="font-semibold text-slate-100">{p.soundEngine}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{p.engineType}</div>
                        <div className="text-amber-400 font-mono text-[11px] mt-0.5">
                          Polyphony: {p.polyphony}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Speakers & Wattage */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Acoustic Projection
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3">
                        <div className="font-mono font-bold text-amber-300">{p.speakerWatts}W</div>
                        <div className="text-slate-300 text-[11px] mt-0.5">{p.speakerSystem}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Warranty & Climate */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Australian Warranty
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          p.warranty.includes('10-Year')
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {p.warranty}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Scores Comparison */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Audit Scores (out of 10)
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3">
                        <div className="space-y-1 font-mono text-[11px]">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Action:</span>
                            <span className="font-bold text-amber-400">{p.scores.actionAuthenticity} / 10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Repetition:</span>
                            <span className="text-slate-200">{p.scores.dynamicRepetition} / 10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Projection:</span>
                            <span className="text-slate-200">{p.scores.acousticProjection} / 10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Tone:</span>
                            <span className="text-slate-200">{p.scores.tonalColoring} / 10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Value:</span>
                            <span className="font-bold text-emerald-400">{p.scores.valueForMoney} / 10</span>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Performance Strengths */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-300 bg-slate-950/30">
                      Core Strengths
                    </td>
                    {selectedPianos.map((p) => (
                      <td key={p.id} className="p-3 text-slate-300">
                        <ul className="space-y-1.5 text-[11px]">
                          {p.strengths.map((s, idx) => (
                            <li key={idx} className="flex items-start space-x-1.5">
                              <span className="text-amber-400 shrink-0 font-bold">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
