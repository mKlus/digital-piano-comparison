// Simple Web Audio API Synthesizer to demonstrate acoustic vs modeled piano tonal signatures

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export type SoundProfile = 'warm-shigeru' | 'modeled-roland' | 'binaural-yamaha' | 'bechstein-clear';

export function playPianoNote(frequency: number, profile: SoundProfile, duration: number = 2.0) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.4, now + 0.015);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Profile specific characteristics:
    // Warm Shigeru: rich even harmonics, warmer filter
    // Modeled Roland: crisp crystalline upper partials, very long decay
    // Binaural Yamaha: sharp punchy attack, dual-ear spread
    // Bechstein: pure fundamental, dry bell-like clarity

    let filterCutoff = 3500;
    let overtoneRatios = [1, 2, 3, 4, 5];
    let overtoneGains = [0.6, 0.3, 0.15, 0.08, 0.03];

    if (profile === 'warm-shigeru') {
      filterCutoff = 2200;
      overtoneGains = [0.7, 0.25, 0.12, 0.04, 0.01];
    } else if (profile === 'modeled-roland') {
      filterCutoff = 6000;
      overtoneGains = [0.5, 0.35, 0.22, 0.14, 0.08];
    } else if (profile === 'binaural-yamaha') {
      filterCutoff = 4500;
      overtoneGains = [0.55, 0.3, 0.18, 0.07, 0.04];
    } else if (profile === 'bechstein-clear') {
      filterCutoff = 3200;
      overtoneGains = [0.65, 0.28, 0.1, 0.05, 0.02];
    }

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterCutoff, now);
    filter.frequency.exponentialRampToValueAtTime(800, now + duration * 0.7);

    overtoneRatios.forEach((ratio, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(frequency * ratio, now);

      oscGain.gain.setValueAtTime(overtoneGains[idx] || 0.05, now);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * (1 - idx * 0.12));

      osc.connect(oscGain);
      oscGain.connect(filter);

      osc.start(now);
      osc.stop(now + duration);
    });

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);
  } catch (e) {
    console.warn('Audio playback not supported or user gesture needed:', e);
  }
}

export function playPianoChord(profile: SoundProfile) {
  // Play an elegant C major 9th chord (C3, G3, E4, B4, D5)
  const chord = [130.81, 196.00, 329.63, 493.88, 587.33];
  chord.forEach((freq, idx) => {
    setTimeout(() => {
      playPianoNote(freq, profile, 2.5);
    }, idx * 45);
  });
}
