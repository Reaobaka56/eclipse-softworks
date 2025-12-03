import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load standalone pages for better performance
const StatusPage = lazy(() => import('./components/StatusPage'));
const ChangelogPage = lazy(() => import('./components/ChangelogPage'));
const DocsPage = lazy(() => import('./components/DocsPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const SecurityPage = lazy(() => import('./components/SecurityPage'));
const PressKitPage = lazy(() => import('./components/PressKitPage'));
const CareersPage = lazy(() => import('./components/CareersPage'));
const CaseStudiesPage = lazy(() => import('./components/CaseStudiesPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

// Wrapper for lazy-loaded pages
const LazyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={
    <div className="min-h-screen bg-black flex items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  }>
    {children}
  </Suspense>
);

// Define routes that map to sections for SEO
export const routes = [
  // Main app routes (sections)
  {
    path: '/',
    element: <App initialSection="home" />,
  },
  {
    path: '/about',
    element: <App initialSection="about" />,
  },
  {
    path: '/services',
    element: <App initialSection="services" />,
  },
  {
    path: '/solutions',
    element: <App initialSection="solutions" />,
  },
  {
    path: '/projects',
    element: <App initialSection="projects" />,
  },
  {
    path: '/team',
    element: <App initialSection="team" />,
  },
  {
    path: '/downloads',
    element: <App initialSection="downloads" />,
  },
  {
    path: '/contact',
    element: <App initialSection="contact" />,
  },
  // Enterprise standalone pages
  {
    path: '/status',
    element: <LazyWrapper><StatusPage /></LazyWrapper>,
  },
  {
    path: '/changelog',
    element: <LazyWrapper><ChangelogPage /></LazyWrapper>,
  },
  {
    path: '/docs',
    element: <LazyWrapper><DocsPage /></LazyWrapper>,
  },
  {
    path: '/blog',
    element: <LazyWrapper><BlogPage /></LazyWrapper>,
  },
  {
    path: '/security',
    element: <LazyWrapper><SecurityPage /></LazyWrapper>,
  },
  {
    path: '/press',
    element: <LazyWrapper><PressKitPage /></LazyWrapper>,
  },
  {
    path: '/careers',
    element: <LazyWrapper><CareersPage /></LazyWrapper>,
  },
  {
    path: '/case-studies',
    element: <LazyWrapper><CaseStudiesPage /></LazyWrapper>,
  },
  // Legal pages
  {
    path: '/privacy',
    element: <Navigate to="/privacy.html" replace />,
  },
  {
    path: '/terms',
    element: <Navigate to="/terms.html" replace />,
  },
  // 404 Not Found page
  {
    path: '*',
    element: <LazyWrapper><NotFoundPage /></LazyWrapper>,
  },
];

export const router = createBrowserRouter(routes);

export default router;
