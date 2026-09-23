export interface PianoModel {
  id: string;
  name: string;
  brand: 'Kawai' | 'Roland' | 'Yamaha' | 'Casio';
  badge: 'Top Shortlist' | 'Alternative' | 'Ultra Flagship' | 'Competitor' | 'Hybrid Action';
  badgeColor: string;
  format: string;
  priceSatinAUD: number;
  pricePolishedAUD?: number;
  priceDisplay: string;
  rrpDisplay: string;
  actionName: string;
  actionType: 'Seesaw Wooden' | 'Extended High-Pivot Folded' | 'Moving Acoustic Hammer';
  pivotLengthCm: number;
  keyMaterials: string;
  escapement: string;
  counterweights: string;
  hasHaptics: boolean;
  soundEngine: string;
  engineType: 'Multi-Channel Sampling' | 'Pure Physical Modeling' | 'Binaural Sampling + VRM' | 'European Triple Sampling';
  polyphony: string;
  speakerSystem: string;
  speakerWatts: number;
  strengths: string[];
  tradeOffs: string[];
  warranty: string;
  scores: {
    actionAuthenticity: number;
    dynamicRepetition: number;
    acousticProjection: number;
    tonalColoring: number;
    visualPresence: number;
    valueForMoney: number;
  };
}

export const PIANO_MODELS: PianoModel[] = [
  {
    id: 'kawai-ca901',
    name: 'Kawai CA901',
    brand: 'Kawai',
    badge: 'Top Shortlist',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    format: 'Full Upright Console',
    priceSatinAUD: 4995,
    pricePolishedAUD: 5995,
    priceDisplay: '$4,995 (Satin) / $5,995 (Polished)',
    rrpDisplay: '$5,995 – $6,995',
    actionName: 'Grand Feel III (GFIII)',
    actionType: 'Seesaw Wooden',
    pivotLengthCm: 24.0,
    keyMaterials: '100% Solid Spruce Wood, ivory/ebony touch',
    escapement: 'Rubber bumper notch emulation',
    counterweights: 'Yes (Graded across 88 keys)',
    hasHaptics: false,
    soundEngine: 'SK-EX Rendering (Shigeru Kawai Concert Grand)',
    engineType: 'Multi-Channel Sampling',
    polyphony: '256 Notes',
    speakerSystem: 'TwinDrive Spruce Soundboard + 4 top speakers + 2 tweeters',
    speakerWatts: 135,
    strengths: [
      'Benchmark acoustic seesaw action under $10,000 AUD with authentic grand fulcrum geometry.',
      'Physical solid spruce soundboard transducer generates omnidirectional room resonance and natural cabinet bloom.',
      'Composite resin capstans permanently solve historical slip-tape wear issues from older GF generations.',
      'Rich, warm, unforced Shigeru Kawai SK-EX multi-channel tonal capture.'
    ],
    tradeOffs: [
      'Solid spruce keysticks & woven felts benefit from stable indoor humidity (40–60%).',
      'Cabinet is substantial upright furniture weighing 89 kg.'
    ],
    warranty: '5-Year Manufacturer Australian Warranty',
    scores: {
      actionAuthenticity: 10.0,
      dynamicRepetition: 9.5,
      acousticProjection: 9.6,
      tonalColoring: 9.5,
      visualPresence: 8.5,
      valueForMoney: 10.0
    }
  },
  {
    id: 'kawai-ca701',
    name: 'Kawai CA701',
    brand: 'Kawai',
    badge: 'Alternative',
    badgeColor: 'bg-slate-700/50 text-slate-300 border-slate-600',
    format: 'Standard Upright',
    priceSatinAUD: 4195,
    pricePolishedAUD: 5195,
    priceDisplay: '$4,195 – $4,495 (Satin) / $5,195 (Polished)',
    rrpDisplay: '$4,995 – $5,595',
    actionName: 'Grand Feel III (GFIII)',
    actionType: 'Seesaw Wooden',
    pivotLengthCm: 24.0,
    keyMaterials: '100% Solid Spruce Wood, seesaw balance pin',
    escapement: 'Rubber bumper notch emulation',
    counterweights: 'Yes (Graded)',
    hasHaptics: false,
    soundEngine: 'SK-EX Rendering + Harmonic Imaging XL',
    engineType: 'Multi-Channel Sampling',
    polyphony: '256 Notes',
    speakerSystem: '6-Speaker Array with top-mounted diffusers, woofers, tweeters',
    speakerWatts: 110,
    strengths: [
      'Shares identical top-tier Grand Feel III wooden seesaw action as the flagship CA901.',
      'Identical core Shigeru Kawai sound engine at ~$800 lower investment.',
      'Top-facing speaker diffusers create a wide sound field for the player.'
    ],
    tradeOffs: [
      'Lacks the physical solid spruce soundboard system of the CA901.',
      'Sound projection relies entirely on conventional directional cone drivers.'
    ],
    warranty: '5-Year Manufacturer Australian Warranty',
    scores: {
      actionAuthenticity: 10.0,
      dynamicRepetition: 9.5,
      acousticProjection: 8.9,
      tonalColoring: 9.4,
      visualPresence: 8.2,
      valueForMoney: 9.4
    }
  },
  {
    id: 'roland-lx-9',
    name: 'Roland LX-9',
    brand: 'Roland',
    badge: 'Top Shortlist',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    format: 'Tall Upright Flagship',
    priceSatinAUD: 7449,
    pricePolishedAUD: 8449,
    priceDisplay: '$7,449 (Charcoal) / $8,449 (Polished)',
    rrpDisplay: '$9,399 – $9,999',
    actionName: 'Hybrid Grand Keyboard',
    actionType: 'Extended High-Pivot Folded',
    pivotLengthCm: 25.0,
    keyMaterials: 'Wood / Polymer Hybrid Composite',
    escapement: 'Synthetic let-off notch',
    counterweights: 'Keybed counterbalanced',
    hasHaptics: true,
    soundEngine: 'Piano Reality Concert (Full Physical Modeling)',
    engineType: 'Pure Physical Modeling',
    polyphony: 'Unlimited',
    speakerSystem: 'Piano Reality Projection (8-speaker discrete multi-channel concert array)',
    speakerWatts: 162,
    strengths: [
      'Tactile Haptic Keybed Feedback transmits simulated acoustic string vibration directly into pianist fingers.',
      'Longest pivot length in class (~25 cm) gives superb downweight balance across the key depth.',
      'Full physical modeling provides unlimited polyphony and seamless dynamic graduation without velocity layers.',
      'Total immunity to humidity swings; backed by industry-leading 10-year Australian warranty.'
    ],
    tradeOffs: [
      'Folded rear pivot hinge rather than pure acoustic balance pin seesaw.',
      'Incidental brightness of modeled tone requires personal sonic preference compared to acoustic samples.'
    ],
    warranty: '10-Year Australian In-Home Warranty',
    scores: {
      actionAuthenticity: 9.0,
      dynamicRepetition: 9.8,
      acousticProjection: 9.7,
      tonalColoring: 9.4,
      visualPresence: 9.0,
      valueForMoney: 8.5
    }
  },
  {
    id: 'roland-lx-6',
    name: 'Roland LX-6',
    brand: 'Roland',
    badge: 'Alternative',
    badgeColor: 'bg-slate-700/50 text-slate-300 border-slate-600',
    format: 'Mid-Tier Upright',
    priceSatinAUD: 5800,
    pricePolishedAUD: 6995,
    priceDisplay: '$5,800 – $6,500 (Charcoal) / $6,995 (Polished)',
    rrpDisplay: '$7,199 – $7,799',
    actionName: 'Hybrid Grand Keyboard',
    actionType: 'Extended High-Pivot Folded',
    pivotLengthCm: 25.0,
    keyMaterials: 'Wood / Polymer Composite',
    escapement: 'Synthetic let-off notch',
    counterweights: 'Keybed balanced',
    hasHaptics: false,
    soundEngine: 'Piano Reality Concert (Physical Modeling)',
    engineType: 'Pure Physical Modeling',
    polyphony: 'Unlimited',
    speakerSystem: 'Piano Reality Projection (5-speaker multi-channel system)',
    speakerWatts: 100,
    strengths: [
      'Retains the identical extended-pivot (~25 cm) action geometry and modeling engine of the LX-9.',
      'Saves ~$1,500 AUD while maintaining identical tactile key leverage and composite durability.',
      '10-year Australian warranty with zero climate-related regulation maintenance.'
    ],
    tradeOffs: [
      'Omits the tactile haptic keybed vibration found exclusively on the LX-9 and GP-9.',
      '5 speakers (100W) vs the LX-9’s 8 speakers (162W) concert array.'
    ],
    warranty: '10-Year Australian In-Home Warranty',
    scores: {
      actionAuthenticity: 8.9,
      dynamicRepetition: 9.6,
      acousticProjection: 8.8,
      tonalColoring: 9.3,
      visualPresence: 8.6,
      valueForMoney: 8.7
    }
  },
  {
    id: 'roland-gp-6',
    name: 'Roland GP-6',
    brand: 'Roland',
    badge: 'Top Shortlist',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    format: 'Baby Grand Cabinet (Depth 95.9 cm)',
    priceSatinAUD: 7979,
    pricePolishedAUD: 9399,
    priceDisplay: '$7,979 – $8,400 (Ebony) / $9,399 – $10,600 (White)',
    rrpDisplay: '$9,999 – $11,999',
    actionName: 'Piano Reality Hybrid Premium',
    actionType: 'Extended High-Pivot Folded',
    pivotLengthCm: 21.5,
    keyMaterials: 'Wood / Polymer Composite',
    escapement: 'Synthetic notch',
    counterweights: 'Keybed balanced',
    hasHaptics: false,
    soundEngine: 'Piano Reality Premium Modeling',
    engineType: 'Pure Physical Modeling',
    polyphony: 'Unlimited',
    speakerSystem: '5-Speaker Projection with cabinet, spatial, and nearfield drivers',
    speakerWatts: 100,
    strengths: [
      'Stunning baby grand aesthetic profile (95.9 cm depth) with dual-prop opening lid.',
      'Open-lid acoustic dispersion mimics the natural upward sound reflection of a grand.',
      'Integrated touch-panel controls that go dark during play for an authentic acoustic look.',
      '10-year warranty with composite keys.'
    ],
    tradeOffs: [
      'Higher price than LX-9 while delivering lower engineering specs (shorter ~21.5cm pivot, 5 speakers vs 8).',
      'Lacks tactile haptic keybed vibration (which Roland reserves for the $15k+ GP-9).'
    ],
    warranty: '10-Year Australian In-Home Warranty',
    scores: {
      actionAuthenticity: 8.5,
      dynamicRepetition: 9.5,
      acousticProjection: 8.8,
      tonalColoring: 9.0,
      visualPresence: 9.9,
      valueForMoney: 7.0
    }
  },
  {
    id: 'roland-gp-9',
    name: 'Roland GP-9',
    brand: 'Roland',
    badge: 'Ultra Flagship',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    format: 'Concert Grand Cabinet (Depth 150 cm)',
    priceSatinAUD: 14900,
    pricePolishedAUD: 16500,
    priceDisplay: '$14,900 – $16,500 (Polished Ebony)',
    rrpDisplay: '$17,999 – $19,999',
    actionName: 'Piano Reality Hybrid Concert',
    actionType: 'Extended High-Pivot Folded',
    pivotLengthCm: 25.0,
    keyMaterials: 'Wood / Polymer Composite, grand fulcrum',
    escapement: 'Synthetic notch',
    counterweights: 'Precision balanced',
    hasHaptics: true,
    soundEngine: 'Piano Reality Concert Modeling',
    engineType: 'Pure Physical Modeling',
    polyphony: 'Unlimited',
    speakerSystem: '8-Speaker Concert System with discrete multi-channel amplification',
    speakerWatts: 170,
    strengths: [
      'Uncompromised flagship digital concert grand combining long-pivot action, haptics, and grand cabinet.',
      'Magnificent room soundstage with 8 discrete audio channels.',
      'Architectural luxury centerpiece with authentic grand piano presence.'
    ],
    tradeOffs: [
      'Extremely high financial investment ($15,000+ AUD).',
      'Significant physical footprint (150 cm depth, 169 kg) requiring dedicated room space.'
    ],
    warranty: '10-Year Australian In-Home Warranty',
    scores: {
      actionAuthenticity: 9.2,
      dynamicRepetition: 9.8,
      acousticProjection: 9.9,
      tonalColoring: 9.4,
      visualPresence: 10.0,
      valueForMoney: 6.8
    }
  },
  {
    id: 'yamaha-clp-885',
    name: 'Yamaha CLP-885',
    brand: 'Yamaha',
    badge: 'Competitor',
    badgeColor: 'bg-slate-700/50 text-slate-300 border-slate-600',
    format: 'Upright Acoustic Style',
    priceSatinAUD: 6500,
    pricePolishedAUD: 7500,
    priceDisplay: '$6,500 – $7,500 AUD',
    rrpDisplay: '$7,999 – $8,499',
    actionName: 'GrandTouch Keyboard (Weighted)',
    actionType: 'Extended High-Pivot Folded',
    pivotLengthCm: 21.5,
    keyMaterials: 'Solid Wood (White Keys) / Synthetic Ebony (Black Keys)',
    escapement: 'Synthetic let-off notch',
    counterweights: 'Yes (Individual Linear Graded Counterweights)',
    hasHaptics: false,
    soundEngine: 'Grand Expression + Virtual Resonance Modeling (VRM)',
    engineType: 'Binaural Sampling + VRM',
    polyphony: '256 Notes',
    speakerSystem: 'Grand Acoustic Imaging: 6-speaker 3-way with Spruce Cone Speakers',
    speakerWatts: 300,
    strengths: [
      'Pristine binaural CFX and Bösendorfer Imperial sampling delivers unmatched headphone realism.',
      'Individual counterweights balance static key downweight effectively across the register.',
      'Spruce pulp speaker cones deliver acoustic bite and massive 300W dynamic headroom.'
    ],
    tradeOffs: [
      'GrandTouch action retains a noticeably firm initial static downweight ("break"), feeling heavier in pianissimo.',
      'Folded hinge design rather than pure acoustic balance pin geometry.'
    ],
    warranty: '5-Year Australian Warranty',
    scores: {
      actionAuthenticity: 8.8,
      dynamicRepetition: 9.2,
      acousticProjection: 9.3,
      tonalColoring: 9.2,
      visualPresence: 8.8,
      valueForMoney: 8.2
    }
  },
  {
    id: 'yamaha-clp-875',
    name: 'Yamaha CLP-875',
    brand: 'Yamaha',
    badge: 'Competitor',
    badgeColor: 'bg-slate-700/50 text-slate-300 border-slate-600',
    format: 'Upright Acoustic Style',
    priceSatinAUD: 4900,
    pricePolishedAUD: 5800,
    priceDisplay: '$4,900 – $5,800 AUD',
    rrpDisplay: '$5,999 – $6,499',
    actionName: 'GrandTouch Keyboard (Standard)',
    actionType: 'Extended High-Pivot Folded',
    pivotLengthCm: 21.5,
    keyMaterials: 'Solid Wood (White Keys) / Synthetic Ebony',
    escapement: 'Synthetic notch',
    counterweights: 'No (Inertia only)',
    hasHaptics: false,
    soundEngine: 'Grand Expression + VRM',
    engineType: 'Binaural Sampling + VRM',
    polyphony: '256 Notes',
    speakerSystem: '6-Speaker Array with 3-way tri-amplification',
    speakerWatts: 230,
    strengths: [
      'Strong Yamaha CFX & Bösendorfer voicing and robust Japanese cabinet build under $6,000 AUD.',
      'Folding acoustic-style fallboard and clean interface design.'
    ],
    tradeOffs: [
      'Lacks the individual counterweights of the CLP-885, creating a distinctly stiffer initial key resistance.',
      'More directional speaker projection compared to Kawai’s soundboard or Roland’s projection arrays.'
    ],
    warranty: '5-Year Australian Warranty',
    scores: {
      actionAuthenticity: 8.3,
      dynamicRepetition: 8.9,
      acousticProjection: 8.6,
      tonalColoring: 9.0,
      visualPresence: 8.5,
      valueForMoney: 8.3
    }
  },
  {
    id: 'casio-gp-510',
    name: 'Casio Celviano GP-510',
    brand: 'Casio',
    badge: 'Hybrid Action',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    format: 'Grand Hybrid Upright (Polished Ebony)',
    priceSatinAUD: 6000,
    pricePolishedAUD: 7200,
    priceDisplay: '$6,000 – $7,200 (Polished Ebony)',
    rrpDisplay: '$7,499 – $7,999',
    actionName: 'Natural Grand Hammer Action',
    actionType: 'Moving Acoustic Hammer',
    pivotLengthCm: 23.5,
    keyMaterials: 'Full-Length Austrian Spruce crafted by C. Bechstein',
    escapement: 'Natural (Actual moving mechanical acoustic hammers)',
    counterweights: 'Acoustic grand hammer balance',
    hasHaptics: false,
    soundEngine: 'AiR Grand Sound Source (Berlin, Hamburg, Vienna)',
    engineType: 'European Triple Sampling',
    polyphony: '256 Notes',
    speakerSystem: 'Grand Acoustic System: 6 speakers with top lifting lid',
    speakerWatts: 100,
    strengths: [
      'Genuine C. Bechstein full-length wooden keysticks and physical moving acoustic hammers.',
      'Zero artificial rubber escapement friction; extraordinarily fast, frictionless single-note repetition and trills.',
      'Distinctive Berlin Grand tone developed directly with Bechstein master piano technicians.'
    ],
    tradeOffs: [
      'Resonance modeling algorithms and app connectivity are less modern than Kawai or Roland engines.',
      'Pedal resonance detail is slightly less nuanced in impressionist micro-pedaling.'
    ],
    warranty: '5-Year Australian Warranty',
    scores: {
      actionAuthenticity: 9.7,
      dynamicRepetition: 9.9,
      acousticProjection: 8.7,
      tonalColoring: 8.9,
      visualPresence: 8.8,
      valueForMoney: 8.6
    }
  },
  {
    id: 'casio-gp-310',
    name: 'Casio Celviano GP-310',
    brand: 'Casio',
    badge: 'Hybrid Action',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    format: 'Grand Hybrid Upright (Matte Finish)',
    priceSatinAUD: 3800,
    pricePolishedAUD: 4600,
    priceDisplay: '$3,800 – $4,600 AUD',
    rrpDisplay: '$4,999 – $5,499',
    actionName: 'Natural Grand Hammer Action',
    actionType: 'Moving Acoustic Hammer',
    pivotLengthCm: 23.5,
    keyMaterials: 'Full-Length Austrian Spruce crafted by C. Bechstein',
    escapement: 'Natural (Acoustic moving hammers)',
    counterweights: 'Acoustic grand balance',
    hasHaptics: false,
    soundEngine: 'AiR Grand Sound Source',
    engineType: 'European Triple Sampling',
    polyphony: '256 Notes',
    speakerSystem: 'Grand Acoustic System: 6 speakers with opening lid',
    speakerWatts: 100,
    strengths: [
      'Most accessible price point in the world for a genuine C. Bechstein full-length wooden hammer action.',
      'Identical physical keybed and mechanical hammer shanks as the $7k+ GP-510.',
      'Lightning-fast repetition mechanics under $4,000 AUD.'
    ],
    tradeOffs: [
      'Matte cabinet finish rather than high-gloss polyester.',
      'Fewer scene presets and simplified pedal damper resonance algorithms compared to GP-510.'
    ],
    warranty: '5-Year Australian Warranty',
    scores: {
      actionAuthenticity: 9.7,
      dynamicRepetition: 9.9,
      acousticProjection: 8.6,
      tonalColoring: 8.7,
      visualPresence: 8.0,
      valueForMoney: 9.6
    }
  }
];

export const ACTION_DEEP_DIVES = [
  {
    name: 'Kawai Grand Feel III (GFIII)',
    tag: 'Pure Acoustic Fulcrum',
    maker: 'Kawai (CA901 / CA701)',
    pivotArch: 'Seesaw Lever (Center balance pin)',
    pivotLength: '~24.0 cm (Acoustic Grand Length)',
    composition: '100% Solid Spruce Wood',
    escapement: 'Rubber bumper notch',
    counterweights: 'Yes (Graded across all 88 keys)',
    details: [
      'Preserves authentic acoustic grand geometry with continuous solid spruce keysticks pivoting on woven felt bushings over a central balance pin.',
      'Depressing the key levers the rear upward, throwing an unattached weighted hammer shank in pure gravity return.',
      'Slip-Tape Engineering Fix: Kawai eliminated older Grand Feel I/II PTFE tape wear by replacing it with a permanently molded composite resin cap, guaranteeing permanent fluid key returns.'
    ]
  },
  {
    name: 'Natural Grand Hammer Action',
    tag: 'Genuine Moving Hammers',
    maker: 'Casio & C. Bechstein (GP-510 / GP-310)',
    pivotArch: 'Seesaw Lever (Grand fulcrum)',
    pivotLength: '~23.5 cm (Grand Length)',
    composition: 'Austrian Spruce crafted at C. Bechstein Berlin facility',
    escapement: 'Natural (Actual moving acoustic hammers)',
    counterweights: 'Acoustic grand hammer balance',
    details: [
      'Co-engineered directly with C. Bechstein in Berlin, using full-length Austrian spruce keys and actual mechanical hammer shanks.',
      'Because hammer reset is purely driven by natural gravity, it completely omits artificial rubber let-off notches, delivering frictionless single-note repetition and trills.',
      'Pianists can observe the hammer mechanisms through an integrated inspection window.'
    ]
  },
  {
    name: 'Roland Hybrid Grand Keyboard',
    tag: 'Extended Leverage & Haptics',
    maker: 'Roland (LX-9 / LX-6 / GP-9)',
    pivotArch: 'Folded Hinge (Extended rear pivot)',
    pivotLength: '~25.0 cm (Longest High-Pivot Folded in Class)',
    composition: 'Wood / Polymer Hybrid Composite',
    escapement: 'Synthetic let-off notch',
    counterweights: 'Keybed counterbalanced',
    details: [
      'Combines an ultra-rigid synthetic polymer core with bonded wooden aesthetic side panels, providing absolute structural rigidity and immunity to humidity.',
      'Extended 25 cm pivot minimizes the leverage resistance spike near the fallboard.',
      'Haptic Keybed Feedback (LX-9 / GP-9 Exclusive): Electromechanical transducers pulse micro-vibrations into keysticks synchronized with modeled string vibrations.'
    ]
  },
  {
    name: 'Yamaha GrandTouch',
    tag: 'Static vs Dynamic Resistance',
    maker: 'Yamaha (CLP-885 / CLP-875)',
    pivotArch: 'Folded Hinge (High rear pivot)',
    pivotLength: '~21.5 cm (High-Pivot Folded)',
    composition: 'Solid Wood (White) / Synthetic Ebony',
    escapement: 'Synthetic let-off notch',
    counterweights: 'Linear weights in CLP-885; none in CLP-875',
    details: [
      'Engineered with wooden white keys and linear grading.',
      'The CLP-885 embeds linear counterweights to balance hammer inertia, whereas the CLP-875 relies solely on dynamic hammer inertia.',
      'GrandTouch exhibits a characteristic firm initial downweight ("break") which builds finger independence but can fatigue wrists during soft pianissimo passages.'
    ]
  }
];

export const DISPERSION_ARCHITECTURES = [
  {
    title: 'TwinDrive Spruce Soundboard',
    primaryModel: 'Kawai CA901',
    wattage: '135W (Transducers + 6 Directional Drivers)',
    mechanism: 'Acoustic transducers bolted directly to a solid spruce wooden soundboard at the cabinet rear, turning the cabinet into a vibrating resonator.',
    acoustics: 'Radiates sound omnidirectionally (360°), generating non-directional acoustic warmth, physical keybed vibration, and room bloom identical to an acoustic upright.'
  },
  {
    title: 'Multi-Channel Spatial Projection',
    primaryModel: 'Roland LX-9 (162W, 8 Spkrs) & GP-6 (100W, 5 Spkrs)',
    wattage: '162W (8 discrete amplifiers & channels)',
    mechanism: 'Segregated amplification driving discrete frequency zones: cabinet woofers for body, spatial tweeters for ambient room reflections, nearfield drivers for the pianist.',
    acoustics: 'Pinpoint laser stereo imaging; bass string rumble resonates distinctly on the left while high treble brilliance sparkles to the right.'
  },
  {
    title: 'Grand Acoustic Spruce Cones',
    primaryModel: 'Yamaha CLP-885 (300W) & CLP-875 (230W)',
    wattage: '300W Tri-amplified 3-way system',
    mechanism: 'Speaker cones molded from the same spruce wood pulp utilized in Yamaha acoustic grand soundboards.',
    acoustics: 'Extremely fast transient attack and huge dynamic headroom; handles explosive fortissimo chords without distortion.'
  }
];

export const HEAD_TO_HEAD_SCORES = [
  {
    metric: 'Action Authenticity (Grand Feel)',
    ca901: 10.0,
    lx9: 9.0,
    gp6: 8.5,
    note: 'CA901 features full-length continuous spruce seesaw keys on center balance pins. LX-9 has long folded composite keys with haptics. GP-6 has standard folded composite keys without haptics.'
  },
  {
    metric: 'Dynamic Repetition & Virtuosity',
    ca901: 9.5,
    lx9: 9.8,
    gp6: 9.5,
    note: 'Roland optical sensors and ultra-fast reset allow effortless high-speed repetition. Kawai acoustic seesaw matches concert grand reset.'
  },
  {
    metric: 'Acoustic Projection & Realism',
    ca901: 9.6,
    lx9: 9.7,
    gp6: 8.8,
    note: 'LX-9 8-speaker array (162W) delivers incredible spatial depth. CA901 physical spruce soundboard provides warm organic air movement. GP-6 5-speaker array (100W) is more compact.'
  },
  {
    metric: 'Tonal Coloring & Expression',
    ca901: 9.5,
    lx9: 9.4,
    gp6: 9.0,
    note: 'Kawai multi-channel Shigeru Kawai sample has unmatched acoustic warmth. Roland Piano Reality physical modeling offers unlimited polyphony and infinite dynamics.'
  },
  {
    metric: 'Visual & Cabinet Presence',
    ca901: 8.5,
    lx9: 9.0,
    gp6: 9.9,
    note: 'Roland GP-6 is a showpiece baby grand with dual-prop lid. LX-9 is a commanding tall modern upright. CA901 is a premium traditional upright.'
  },
  {
    metric: 'Value for Investment',
    ca901: 10.0,
    lx9: 8.5,
    gp6: 7.0,
    note: 'CA901 offers seesaw action + spruce soundboard for $4,995 AUD ($2.5k–$4.4k less than Roland). GP-6 carries a ~$1k+ markup purely for the baby grand cabinet.'
  }
];

export const REPERTOIRE_REQUIREMENTS = [
  {
    title: 'Acoustic Lever Geometry (Extended Pivot)',
    description: 'Uniform downweight across the entire key length (minimum 22–24 cm pivot), eliminating the steep 2.5× resistance spike experienced near the fallboard on short-pivot actions.'
  },
  {
    title: 'True Gravity Hammer Return & Fast Repetition',
    description: 'Clean mechanical reset capable of handling rapid single-note repetitions, trills, and soft pianissimo touches without spring-loaded resistance or sluggish rebound.'
  },
  {
    title: 'Dynamic Resolution & Pedaling Nuance',
    description: 'High-resolution continuous optical sensing supporting micro-pedaling (progressive half- and quarter-pedaling) and infinite or multi-velocity dynamic tonal graduation.'
  },
  {
    title: 'Cabinet Acoustic Resonance',
    description: 'Three-dimensional sound diffusion (via solid wooden soundboard transducers or multi-channel spatial speaker arrays) providing organic air movement and physical keybed vibration.'
  }
];
