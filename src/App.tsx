import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RequirementsSection } from './components/RequirementsSection';
import { ActionMechanicsVisualizer } from './components/ActionMechanicsVisualizer';
import { PianoCatalog } from './components/PianoCatalog';
import { SoundEnginesSection } from './components/SoundEnginesSection';
import { HeadToHeadSection } from './components/HeadToHeadSection';
import { RecommendationWizard } from './components/RecommendationWizard';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { PianoDetailModal } from './components/PianoDetailModal';
import { Footer } from './components/Footer';
import { PianoModel } from './data/pianoData';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([
    'kawai-ca901',
    'roland-lx-9',
    'roland-gp-6'
  ]);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [activeModalPiano, setActiveModalPiano] = useState<PianoModel | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleCompare = (id: string) => {
    setSelectedCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare up to 4 pianos at once.');
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const removeCompareId = (id: string) => {
    setSelectedCompareIds((prev) => prev.filter((item) => item !== id));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200`}>
      {/* Top Navbar */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        compareCount={selectedCompareIds.length}
        openCompareDrawer={() => setIsCompareOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <RequirementsSection />
        <ActionMechanicsVisualizer />
        <PianoCatalog
          selectedIds={selectedCompareIds}
          toggleCompare={toggleCompare}
          openDetailModal={(piano) => setActiveModalPiano(piano)}
        />
        <SoundEnginesSection />
        <HeadToHeadSection />
        <RecommendationWizard />
      </main>

      {/* Footer */}
      <Footer />

      {/* Side-by-side comparison modal/drawer */}
      <ComparisonDrawer
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedIds={selectedCompareIds}
        setSelectedIds={setSelectedCompareIds}
        removeId={removeCompareId}
      />

      {/* Detailed Spec Modal */}
      <PianoDetailModal
        piano={activeModalPiano}
        onClose={() => setActiveModalPiano(null)}
        isSelected={activeModalPiano ? selectedCompareIds.includes(activeModalPiano.id) : false}
        toggleCompare={toggleCompare}
      />
    </div>
  );
}

export default App;
