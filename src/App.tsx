import React, { useEffect, useState } from 'react';
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
import { BlogsPage } from './components/BlogsPage';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ApplyModal } from './components/ApplyModal';
import { AdmissionsNewsletterPopup } from './components/AdmissionsNewsletterPopup';

type AppPage = 'home' | 'blogs';

function getPageFromLocation(): AppPage {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  if (path === '/blogs' || path.startsWith('/blogs/') || hash === '#blogs') {
    return 'blogs';
  }
  return 'home';
}

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<AppPage>(() => getPageFromLocation());

  useEffect(() => {
    const handlePopState = () => {
      const nextPage = getPageFromLocation();
      setCurrentPage(nextPage);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');

    if (currentPage === 'blogs') {
      const blogTitle = 'Best Montessori School & Preschool Blog in Islamabad | Little Nest Montessori';
      const blogDesc =
        'Read Little Nest Montessori Islamabad parenting guides on toddler separation anxiety, Playgroup, Nursery, and Kindergarten admissions in Sector I-14 Islamabad & Rawalpindi.';
      document.title = blogTitle;
      if (canonicalLink) canonicalLink.href = 'https://littlenestschool.com/blogs';
      if (metaDesc) metaDesc.content = blogDesc;
      if (ogTitle) ogTitle.content = blogTitle;
      if (ogUrl) ogUrl.content = 'https://littlenestschool.com/blogs';
      if (ogImage) ogImage.content = 'https://littlenestschool.com/little-nest-montessori-morning-welcome.jpg';
    } else {
      const homeTitle = 'Little Nest Montessori School | Preschool & Kindergarten in I-14/3 Islamabad';
      const homeDesc =
        'Little Nest Montessori in Sector I-14/3, Islamabad & Rawalpindi offers authentic Playgroup, Nursery & Kindergarten programs (ages 2–6). Book a morning campus visit today!';
      document.title = homeTitle;
      if (canonicalLink) canonicalLink.href = 'https://littlenestschool.com/';
      if (metaDesc) metaDesc.content = homeDesc;
      if (ogTitle) ogTitle.content = homeTitle;
      if (ogUrl) ogUrl.content = 'https://littlenestschool.com/';
      if (ogImage) ogImage.content = 'https://littlenestschool.com/assets/aistudio/Preschool_Shapes_and_Learning_Fun_430fe195.png';
    }
  }, [currentPage]);

  const handleScrollTo = (id: string) => {
    if (id === 'blogs') {
      if (currentPage !== 'blogs') {
        setCurrentPage('blogs');
        window.history.pushState({}, '', '/blogs');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return;
    }

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
        currentPage={currentPage}
      />

      <main className="grow">
        {currentPage === 'blogs' ? (
          <BlogsPage
            onOpenApply={() => setIsApplyModalOpen(true)}
            onScrollTo={handleScrollTo}
          />
        ) : (
          <>
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
          </>
        )}
      </main>

      {/* Footer */}
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

      {/* Admissions Open 2026-27 Pamphlet & Newsletter Popup (Main Page) */}
      <AdmissionsNewsletterPopup
        isMainPage={currentPage === 'home'}
        onOpenApply={() => setIsApplyModalOpen(true)}
        onScrollTo={handleScrollTo}
      />
    </div>
  );
}
