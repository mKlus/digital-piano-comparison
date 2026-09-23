# High-End Digital Piano Technical Comparison & Engineering Audit

[![Deploy to GitHub Pages](https://github.com/mKlus/digital-piano-comparison/actions/workflows/deploy.yml/badge.svg)](https://github.com/mKlus/digital-piano-comparison/actions/workflows/deploy.yml)

> **Objective Engineering, Action Mechanics & Acoustic Performance Analysis | Australian Market (Sept 2026)**
>
> 🌐 **Live WebApp**: [https://mklus.github.io/digital-piano-comparison/](https://mklus.github.io/digital-piano-comparison/)

---

## Overview

This application provides an exhaustive, objective technical comparison and engineering audit of the leading high-end digital pianos available on the Australian market, designed specifically for advanced classical pianists transitioning from compact digitals to Grade 5 through Diploma repertoire (Bach, Chopin, Beethoven, Debussy).

### Scope & Market Verification
- **Target Repertoire**: Advanced Classical Literature requiring extended pivot geometry, gravity hammer reset, and continuous optical pedaling.
- **Pricing Scope**: Verified Street Pricing across Authorized Australian Retailers (AUD) including *The Pianoforte, Better Music, Gospel Pianos, House of Pianos, Piano City, and Belfield Music*.

---

## The 10 Benchmarked Models

1. **Kawai CA901** – *Grand Feel III (GFIII) Solid Spruce Seesaw, TwinDrive Spruce Soundboard (135W)*
2. **Kawai CA701** – *Grand Feel III (GFIII) Solid Spruce Seesaw, 6-Speaker Array (110W)*
3. **Roland LX-9** – *Hybrid Grand Extended Pivot (~25cm), Haptic Keybed Feedback, Piano Reality Concert (162W)*
4. **Roland LX-6** – *Hybrid Grand Extended Pivot (~25cm), Piano Reality Concert (100W)*
5. **Roland GP-6** – *Piano Reality Hybrid Premium (~21.5cm), Baby Grand Cabinet Profile (100W)*
6. **Roland GP-9** – *Piano Reality Hybrid Concert (~25cm), Haptics, 8-Speaker Concert Grand Array (170W)*
7. **Yamaha CLP-885** – *GrandTouch with Linear Counterweights, Binaural CFX/Bösendorfer, Spruce Cones (300W)*
8. **Yamaha CLP-875** – *GrandTouch standard without counterweights, 6-Speaker Array (230W)*
9. **Casio GP-510** – *Natural Grand Hammer by C. Bechstein (Moving Mechanical Hammers), AiR Grand (100W)*
10. **Casio GP-310** – *Natural Grand Hammer by C. Bechstein, Accessible Grand Hybrid under $4k AUD (100W)*

---

## Interactive WebApp Features

- **Interactive 10-Piano Catalog**: Filter by brand, action mechanism, form factor, and verified AUD street price slider.
- **Side-by-Side Comparison Matrix**: Pick 2 to 4 pianos simultaneously with differential highlighting and quick presets.
- **Action Physics & Pivot Length Simulator**: Interactive key depth slider demonstrating downweight resistance multiplication near the fallboard (18cm entry folded vs 24cm GFIII seesaw vs 25cm Roland Hybrid vs acoustic grand).
- **Sound Generation & Dispersion Explorer**: Multi-channel sampling vs. full physical modeling vs. spruce cone drivers, with built-in Web Audio tone auditions.
- **Flagship Shootout (CA901 vs LX-9 vs GP-6)**: In-depth engineering hierarchy and objective audited performance matrix.
- **Buyer's Decision Wizard**: 3-question guided recommendation engine.
- **A4 Executive Print Mode**: Custom print CSS for instant executive PDF generation.

---

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Glassmorphism + Luxury Concert Hall Theme
- **Icons**: Lucide Icons
- **Audio**: Web Audio API tone synthesis
- **CI/CD**: GitHub Actions deploying automatically to GitHub Pages

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/mKlus/digital-piano-comparison.git
cd digital-piano-comparison

# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

---

## License

MIT © [mKlus](https://github.com/mKlus)
