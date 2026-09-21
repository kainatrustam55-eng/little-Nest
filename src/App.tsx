import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { WhyLittleNest } from './components/WhyLittleNest';
import { ProgramsSection } from './components/ProgramsSection';
import { LearningAreasSection } from './components/LearningAreasSection';
import { DayAtLittleNestSection } from './components/DayAtLittleNestSection';
import { WatchMeGrowSection } from './components/WatchMeGrowSection';
import { AdmissionSection } from './components/AdmissionSection';
import { BookVisitSection } from './components/BookVisitSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ApplyModal } from './components/ApplyModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-200 selection:text-emerald-950 flex flex-col antialiased">
      {/* Navigation Header */}
      <Navbar
        onOpenApply={() => setIsApplyModalOpen(true)}
        onScrollTo={handleScrollTo}
      />

      <main className="grow">
        {/* 1. Hero: Top Logo Banner + LITTLE NEST where little minds grow + Apply Now | Book a Visit */}
        <HeroBanner
          onOpenApply={() => setIsApplyModalOpen(true)}
          onScrollTo={handleScrollTo}
        />

        {/* 2. Why Little Nest? */}
        <WhyLittleNest
          onOpenApply={() => setIsApplyModalOpen(true)}
          onScrollTo={handleScrollTo}
        />

        {/* 3. 🧸 Our Classes (Playgroup, Nursery, Kindergarten) */}
        <ProgramsSection
          onOpenApply={() => setIsApplyModalOpen(true)}
        />

        {/* 4. 📚 Our Learning Areas (9 Experiential Areas) */}
        <LearningAreasSection />

        {/* 5. ⭐ A Day at Little Nest (Interactive Morning Rhythm) */}
        <DayAtLittleNestSection />

        {/* 6. 📏 Watch Me Grow (6-Step Developmental Journey) */}
        <WatchMeGrowSection />

        {/* 7. 📝 Online Admission (Simple: Child Name, Age, Parent Name, Phone, Program) */}
        <AdmissionSection />

        {/* 8. 📅 Book a Visit (Preferred Date, Time, Parent Name, Phone) */}
        <BookVisitSection />

        {/* 9. 📍 Location + Contact (I-14/3 Islamabad Campus, Map, Phones) */}
        <ContactSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onScrollTo={handleScrollTo}
        />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 11. Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* Floating Ask Little Nest & Call Action Widget */}
      <FloatingWhatsApp
        onOpenApply={() => setIsApplyModalOpen(true)}
        onScrollTo={handleScrollTo}
      />

      {/* 1-Minute Apply Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}
