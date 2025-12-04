import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import { useAnalytics } from './services/analytics';

// Lazy load heavy components
const MetallicBackground = lazy(() => import('./components/MetallicBackground'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const DemoBookingModal = lazy(() => import('./components/DemoBooking'));

// Import Section Components
import HomeSection from './components/sections/HomeSection';
import ServicesSection from './components/sections/ServicesSection';
import SolutionsSection from './components/sections/SolutionsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TeamSection from './components/sections/TeamSection';
import DownloadsSection from './components/sections/DownloadsSection';
import ContactSection from './components/sections/ContactSection';
import AboutSection from './components/sections/AboutSection';

// Section to route mapping for SEO-friendly URLs
const sectionRoutes: Record<string, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  solutions: '/solutions',
  projects: '/projects',
  team: '/team',
  downloads: '/downloads',
  contact: '/contact',
};

// Route to section mapping
const routeToSection: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/solutions': 'solutions',
  '/projects': 'projects',
  '/team': 'team',
  '/downloads': 'downloads',
  '/contact': 'contact',
};

interface AppProps {
  initialSection?: string;
}

const App: React.FC<AppProps> = ({ initialSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { trackPageView, trackEvent, getRecommendations } = useAnalytics();

  // Determine initial section from route or prop
  const getInitialSection = () => {
    if (initialSection) return initialSection;
    return routeToSection[location.pathname] || 'home';
  };

  const [activeSection, setActiveSection] = useState<string>(getInitialSection());
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const [_recommendations] = useState<string[]>(getRecommendations ? getRecommendations() : []);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Sync activeSection with route changes
  useEffect(() => {
    const sectionFromRoute = routeToSection[location.pathname];
    if (sectionFromRoute && sectionFromRoute !== activeSection) {
      setActiveSection(sectionFromRoute);
    }
    // Track page view on route change
    trackPageView?.(location.pathname);
  }, [location.pathname]);

  // Scroll to top when active section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Scroll to target when active section changes
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setScrollTarget(null);
    }
  }, [activeSection, scrollTarget]);

  // Navigation handler that updates URL and section
  const handleNavClick = (sectionId: string, scrollTo?: string) => {
    const route = sectionRoutes[sectionId] || '/';
    // Track navigation as user interaction
    trackEvent?.('navigation', 'click', sectionId);
    navigate(route);
    setActiveSection(sectionId);
    if (scrollTo) setScrollTarget(scrollTo);
  };

  return (
    <div className="antialiased text-white min-h-screen">
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="visually-hidden focus:not-sr-only focus:z-50 focus:block focus:py-2 focus:px-4 focus:bg-white focus:text-black" aria-label="Skip to main content">Skip to content</a>

      <Suspense fallback={<div className="fixed inset-0 bg-black flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
        <MetallicBackground />
      </Suspense>

      {/* Navigation */}
      <Header active={activeSection} onNav={handleNavClick} />

      {/* Main Content */}
      <main id="main-content">
        {activeSection === 'home' && (
          <HomeSection
            onNav={handleNavClick}
            onOpenDemo={() => {
              setIsDemoModalOpen(true);
              trackEvent?.('demo', 'open', 'demo_cta');
            }}
          />
        )}

        {activeSection === 'services' && (
          <ServicesSection onNav={handleNavClick} />
        )}

        {activeSection === 'solutions' && (
          <SolutionsSection onNav={handleNavClick} />
        )}

        {activeSection === 'projects' && (
          <ProjectsSection />
        )}

        {activeSection === 'team' && (
          <TeamSection />
        )}

        {activeSection === 'downloads' && (
          <DownloadsSection onNav={handleNavClick} />
        )}

        {activeSection === 'about' && (
          <AboutSection onNav={handleNavClick} />
        )}

        {activeSection === 'contact' && (
          <ContactSection />
        )}
      </main>

      <Footer onNav={handleNavClick} />

      {/* Modals */}
      <Suspense fallback={null}>
        {isDemoModalOpen && (
          <DemoBookingModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        )}

        <CookieConsent />
      </Suspense>
    </div>
  );
};

export default App;