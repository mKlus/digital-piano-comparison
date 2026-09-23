import React, { useState } from 'react';
import { Volume2, Radio, Disc, Mic2, Waves, Sparkles } from 'lucide-react';
import { DISPERSION_ARCHITECTURES } from '../data/pianoData';
import { playPianoChord, SoundProfile } from '../utils/audioPreview';

export const SoundEnginesSection: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<SoundProfile | null>(null);

  const handleTestAudio = (profile: SoundProfile) => {
    setActiveProfile(profile);
    playPianoChord(profile);
    setTimeout(() => {
      setActiveProfile(null);
    }, 2200);
  };

  const engines = [
    {
      name: 'SK-EX Rendering (Kawai)',
      type: 'Multi-Channel Sampling + Resonance',
      profile: 'warm-shigeru' as SoundProfile,
      desc: 'Anechoic multi-channel microphone array placed at the player ears, rim, and soundboard of the 9ft Shigeru Kawai Concert Grand. Married to real-time resonance modeling of string, damper, and soundboard interaction for a warm, woody, and unmistakably acoustic character.'
    },
    {
      name: 'Piano Reality Concert (Roland)',
      type: 'Real-Time Physical Modeling (Zero Samples)',
      profile: 'modeled-roland' as SoundProfile,
      desc: 'Contains zero recorded audio samples. DSP processors calculate virtual strings, bridge transfer, hammer hardness, and cabinet air reflections in real time. Delivers unlimited polyphony and infinite velocity steps with exceptional treble brilliance.'
    },
    {
      name: 'Grand Expression & VRM (Yamaha)',
      type: 'Binaural Dummy-Head Sampling + VRM',
      profile: 'binaural-yamaha' as SoundProfile,
      desc: 'Captures Yamaha CFX and Bösendorfer Imperial 290 with specialized microphones at ear positions. Virtual Resonance Modeling (VRM) computes sympathetic string and body resonance, providing pristine stereo staging and bite.'
    },
    {
      name: 'AiR Grand Sound Source (Casio)',
      type: 'Historical European Acoustic Sampling',
      profile: 'bechstein-clear' as SoundProfile,
      desc: 'Developed with C. Bechstein Berlin, featuring three distinct grand profiles: Berlin Grand (Bechstein D282, clear counterpoint), Hamburg Grand (broad power), and Vienna Grand (mellow singing tone).'
    }
  ];

  return (
    <section id="sound-engines" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
            Section 05 Sound & Dispersion
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Sound Engines, Acoustic Dispersion & Continuous Pedaling
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-1">
            The translation of physical touch into sound occurs through two distinct paradigms: High-Resolution Multi-Channel Sampling vs. Real-Time Mathematical Modeling.
          </p>
        </div>

        {/* 4 Sound Engines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {engines.map((eng, idx) => {
            const isPlaying = activeProfile === eng.profile;
            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {eng.type}
                    </span>
                    <button
                      onClick={() => handleTestAudio(eng.profile)}
                      disabled={isPlaying}
                      className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
                        isPlaying
                          ? 'bg-amber-500 text-slate-950 font-bold animate-pulse'
                          : 'bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isPlaying ? 'Simulating...' : 'Audition Tone'}</span>
                    </button>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-2">
                    {eng.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {eng.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Acoustic Room Dispersion Table */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 mb-8">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-2">
            <Waves className="w-4 h-4" />
            <span>ROOM DISPERSION ARCHITECTURE</span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
            Cone Speakers vs. Solid Spruce Soundboard
          </h3>
          <p className="text-xs text-slate-300 mb-6 max-w-2xl">
            How acoustic energy is pushed into the room dictates physical engagement and perceived realism.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {DISPERSION_ARCHITECTURES.map((arch, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-amber-300 font-heading">
                      {arch.title}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mb-1">
                    {arch.primaryModel}
                  </div>
                  <div className="text-[11px] font-mono text-amber-400 mb-3">
                    {arch.wattage}
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">
                        Engineering Design:
                      </span>
                      <p>{arch.mechanism}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">
                        Acoustic Character in Room:
                      </span>
                      <p className="text-slate-200 font-medium">{arch.acoustics}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Pedaling Callout */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-amber-400 font-semibold mb-1">
              CONTINUOUS PEDALING NUANCE
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Advanced romantic and impressionist literature requires continuous half-pedaling and progressive damping.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Both the Kawai CA901 (Grand Feel Pedal System) and Roland LX-9 / GP-6 (Piano Reality Responsive Damper) incorporate continuous optical sensors measuring precise travel depth, reproducing damper lift friction and sympathetic string wash.
            </p>
          </div>
          <span className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-800 text-amber-400 text-xs font-mono border border-slate-700">
            Continuous Optical Sensing
          </span>
        </div>
      </div>
    </section>
  );
};
