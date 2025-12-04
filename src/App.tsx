import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Toast from './components/Toast';
import { postContact } from './services/contact';
import LoadingSpinner from './components/LoadingSpinner';
import { motion } from 'framer-motion';
import { 
  DARK_GRADIENT, TESTIMONIALS, SERVICES, GITHUB_PROJECTS, 
  LEADERSHIP_TEAM, DEVELOPMENT_TEAM, BUSINESS_TEAM,
  COMPANY_STATS, COMPANY_VALUES, COMPANY_MILESTONES,
  WHY_CHOOSE_US, RESOURCES
} from '../constants';
import Footer from './components/Footer';
import { useAnalytics } from './services/analytics';
import { 
  BarChart3, Brain, Smartphone, Shield, Code, Users, Target, Eye, Heart,
  Factory, MessageSquare, PieChart, Cpu, Server, Globe, Zap, Layers,
  GitBranch, Database, Cloud, Lock, Sparkles, Rocket, Award, CheckCircle,
  ArrowRight, Calendar, ChevronRight, Bell, Info, Terminal, Wifi, Link,
  Box, BookOpen, ShoppingCart, Lightbulb, Linkedin, Mail, Phone, MapPin,
  Star, Github, Download
} from 'lucide-react';

// Lazy load heavy components for better mobile performance
const MetallicBackground = lazy(() => import('./components/MetallicBackground'));
const NeuralCard = lazy(() => import('./components/NeuralCard'));
const MLInfrastructureCard = lazy(() => import('./components/MLInfrastructureCard'));
const ServiceBadge = lazy(() => import('./components/ServiceBadge'));
const StatsCounter = lazy(() => import('./components/StatsCounter'));
const TechStack = lazy(() => import('./components/TechStack'));
const EnterpriseCTA = lazy(() => import('./components/EnterpriseCTA'));
const TrustSignals = lazy(() => import('./components/TrustSignals'));
const DemoBookingModal = lazy(() => import('./components/DemoBooking'));
const DemoCTA = lazy(() => import('./components/DemoCTA'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

// Icon map for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  'chart-line': BarChart3,
  'robot': Cpu,
  'mobile-alt': Smartphone,
  'shield-alt': Shield,
  'chart-bar': BarChart3,
  'brain': Brain,
  'code': Code,
  'user-check': Users,
  'industry': Factory,
  'comments': MessageSquare,
  'chart-pie': PieChart,
  'bullseye': Target,
  'eye': Eye,
  'heart': Heart,
  'terminal': Terminal,
  'bell': Bell,
  'info': Info,
  'wifi': Wifi,
  'link': Link,
  'cube': Box,
  'book': BookOpen,
  'shopping-cart': ShoppingCart,
  'lightbulb': Lightbulb,
  'users': Users,
  'linkedin': Linkedin,
  'server': Server,
  'globe': Globe,
  'zap': Zap,
  'database': Database,
  'cloud': Cloud,
  'lock': Lock,
  'sparkles': Sparkles,
  'rocket': Rocket,
  'award': Award,
  'check': CheckCircle,
  'layers': Layers,
  'git-branch': GitBranch,
  'arrow-right': ArrowRight,
  'calendar': Calendar,
  'chevron-right': ChevronRight,
};

// Helper to render icon by name
const DynamicIcon: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 24, className = '' }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent size={size} className={className} />;
};

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
  const { trackPageView, trackEvent, trackClick: _trackClick, getRecommendations, prefersReducedMotion: _prefersReducedMotion } = useAnalytics();
  
  // Determine initial section from route or prop
  const getInitialSection = () => {
    if (initialSection) return initialSection;
    return routeToSection[location.pathname] || 'home';
  };
  
  const [activeSection, setActiveSection] = useState<string>(getInitialSection());
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const [_recommendations] = useState<string[]>(getRecommendations ? getRecommendations() : []);
    // Header now manages mobile menu state internally
    // contact form state
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [contactHoneypot, setContactHoneypot] = useState(''); // Hidden field for bot detection
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{type: 'success'|'error'|'info'; message: string} | null>(null);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const isFormValid = contactName.trim().length > 0 && contactEmail.includes('@') && contactMessage.trim().length > 0;

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
      navigate(route);
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
          {/* Hero Section - Always Rendered but visually part of home */}
          <header className={`relative pt-20 pb-12 lg:pt-32 lg:pb-20 px-6 ${activeSection === 'home' ? 'block animate-slide-down' : 'hidden'}`}>
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Content */}
                  <motion.div 
                    className="relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
                      <motion.div 
                        className="inline-flex items-center gap-3 px-3 py-1 mb-8 border border-white/20 bg-white/15 rounded-full backdrop-blur-md"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                      >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></span>
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest green-blink">Now Accepting New Clients</span>
                      </motion.div>

                      <motion.h1
                        className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight md:tracking-tighter leading-tight md:leading-[0.9] mb-6 md:mb-8"
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                      >
                          Build <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-800 text-glow">Intelligence</span>.
                      </motion.h1>

                      <motion.p 
                        className="text-xl text-gray-400 font-light leading-relaxed max-w-lg mb-10 border-l border-white/20 pl-6"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                      >
                          Eclipse Softworks brings you cutting-edge AI solutions tailored to your business needs. We specialize in machine learning, data analytics, and custom software development.
                      </motion.p>

                      {/* CTA Buttons */}
                      <motion.div 
                        className="flex gap-4 mb-10"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                        }}
                      >
                          <motion.button 
                            onClick={() => handleNavClick('contact')} 
                            className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" 
                            aria-label="Start a project - Contact us"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                              Start a Project
                          </motion.button>
                          <motion.button 
                            onClick={() => handleNavClick('services')} 
                            className="py-3 px-5 border border-white/30 hover:border-white transition-colors text-sm font-bold uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                              Our Services
                          </motion.button>
                      </motion.div>

                      <motion.div 
                        className="flex gap-6"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
                        }}
                      >
                          <motion.button 
                            onClick={() => handleNavClick('projects')} 
                            className="text-sm font-bold uppercase tracking-widest border-b border-white hover:border-transparent transition-colors pb-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            View Projects
                          </motion.button>
                          <motion.button 
                            onClick={() => handleNavClick('downloads')} 
                            className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors pb-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            Downloads
                          </motion.button>
                      </motion.div>
                  </motion.div>

                  {/* AI Visualization */}
                  <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  >
                      <Suspense fallback={<div className="w-full h-48 bg-black/70 rounded flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
                        <NeuralCard />
                      </Suspense>
                  </motion.div>
              </div>
          </header>

          {/* Stats Section - Home */}
          {activeSection === 'home' && (
            <motion.section 
              className="py-16 px-6 relative z-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        {COMPANY_STATS.map((stat) => (
                            <motion.div 
                          key={stat.label}
                              className="text-center glass-card p-6"
                              whileHover={{ scale: 1.05, y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                                <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Featured Services Preview - Home */}
          {activeSection === 'home' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/15"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="mb-16 text-center"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Our Expertise</span>
                        <h2 className="text-4xl font-bold text-white mb-4">What We Do Best</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From AI-powered solutions to custom software development, we deliver cutting-edge technology that drives business growth.
                        </p>
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.4
                          }
                        }
                      }}
                    >
                        {SERVICES.slice(0, 3).map((service) => (
                            <motion.div
                          key={service.title}
                              className="glass-card p-6 md:p-8 lg:p-10 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 h-full min-h-[260px] flex flex-col justify-between"
                              variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9 },
                                visible: {
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                  transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                  }
                                }
                              }}
                              whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                              }}
                            >
                                <motion.div 
                                  className="w-12 h-12 mb-6 text-gray-300 group-hover:text-white transition-colors flex items-center justify-center"
                                  whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                    <service.icon size={48} />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <motion.button 
                                  onClick={() => handleNavClick('services', service.title.toLowerCase().replace(/\s+/g, '-'))} 
                                  className="text-xs font-bold uppercase tracking-wider border-b border-white/150 pb-0.5 hover:text-white hover:border-white transition-all"
                                  whileHover={{ x: 5 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  Learn More
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                      className="text-center mt-12"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
                      }}
                    >
                        <motion.button 
                          onClick={() => handleNavClick('services')} 
                          className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                            View All Services
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Testimonials Section - Home */}
          {activeSection === 'home' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/15 bg-gradient-to-b from-transparent to-black/20"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="mb-16 text-center"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Client Success</span>
                        <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what industry leaders say about working with Eclipse Softworks.
                        </p>
                    </motion.div>

                    <motion.div 
                      className="testimonials-grid"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.4
                          }
                        }
                      }}
                    >
                        {TESTIMONIALS.map((testimonial) => (
                            <motion.div 
                          key={testimonial.name}
                              className="glass-card p-8"
                              variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9 },
                                visible: { 
                                  opacity: 1, 
                                  y: 0, 
                                  scale: 1,
                                  transition: { 
                                    duration: 0.6,
                                    ease: "easeOut"
                                  }
                                }
                              }}
                              whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                              }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center text-white font-bold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                                <blockquote className="text-gray-300 italic">
                                    "{testimonial.content}"
                                </blockquote>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Call to Action Section - Home */}
          {activeSection === 'home' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/15"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div 
                      className="mb-12"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                          <span className="bg-gradient-to-r from-[#60a5fa] via-[#34d399] via-[#a78bfa] via-[#38bdf8] via-[#f0f9ff] to-[#818cf8] bg-clip-text text-transparent">Ready to Transform Your Business?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Join the growing number of African businesses leveraging AI and cutting-edge technology for competitive advantage.
                        </p>
                    </motion.div>

                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 justify-center"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                      }}
                    >
                        <motion.button 
                          onClick={() => handleNavClick('contact')} 
                          className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project
                        </motion.button>
                        <motion.button 
                          onClick={() => handleNavClick('about')} 
                          className="py-3 px-8 border border-white/30 hover:border-white transition-colors text-sm font-bold uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                            Learn About Us
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Trust Signals Section - Home */}
          {activeSection === 'home' && (
            <Suspense fallback={<div className="py-16" />}>
              <TrustSignals />
            </Suspense>
          )}

          {/* Enterprise CTA Section - Home */}
          {activeSection === 'home' && (
            <Suspense fallback={<div className="py-16" />}>
              <EnterpriseCTA />
            </Suspense>
          )}

          {/* Demo CTA Section - Home */}
          {activeSection === 'home' && (
            <Suspense fallback={<div className="py-16" />}>
              <DemoCTA onOpenDemo={() => {
                setIsDemoModalOpen(true);
                trackEvent?.('demo', 'open', 'demo_cta');
              }} />
            </Suspense>
          )}

          {/* Services Section */}
          {activeSection === 'services' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/20"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <div>
                            <motion.span 
                              className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
                              }}
                            >Services</motion.span>
                            <motion.h2 
                              className="text-4xl font-bold text-white"
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                              }}
                            >What We Offer</motion.h2>
                        </div>
                        <motion.p 
                          className="text-gray-500 text-sm max-w-sm text-right"
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
                          }}
                        >
                            Comprehensive AI development services from concept to deployment.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.4
                          }
                        }
                      }}
                    >
                        {/* Service 1 (AI) */}
                        <motion.div 
                          id="ai-powered-solutions"
                          className="glass-card p-8 group service-feature transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 lg:col-start-1 lg:row-start-1"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.4 }}
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                            <motion.div 
                              className="flex justify-center mb-6"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Brain size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                            </motion.div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold mb-3">AI-Powered Solutions</h3>
                              <ServiceBadge icon="python" label="ML" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Leverage the power of machine learning and deep learning to automate tasks, optimize processes, and enhance decision-making.
                            </p>
                        </motion.div>

                        {/* Service 2 - Web Dev (moved left) */}
                        <motion.div 
                          id="web-development"
                          className="glass-card p-8 group service-feature transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 lg:col-start-1 lg:row-start-2"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.4 }}
                        
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                            <motion.div 
                              className="flex justify-center mb-6"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: -5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Globe size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                            </motion.div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold mb-3">Web Development</h3>
                              <ServiceBadge icon="react" label="React" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Modern, responsive web applications built with cutting-edge technologies and optimized for performance and user experience.
                            </p>
                        </motion.div>

                        {/* Service 3 (Mobile) */}
                        <motion.div 
                          id="mobile-app-development"
                          className="glass-card p-8 group service-feature transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 lg:col-start-2 lg:row-start-2"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.4 }}
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                            <motion.div 
                              className="flex justify-center mb-6"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Smartphone size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                            </motion.div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold mb-3">Mobile App Development</h3>
                              <ServiceBadge icon="mobile" label="Mobile" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Cross-platform mobile applications built with performance and user experience at the forefront.
                            </p>
                        </motion.div>

                        {/* Service 4 (Custom Software) */}
                        <motion.div 
                          id="custom-software-engineering"
                          className="glass-card p-8 group service-feature transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 lg:col-span-2 lg:col-start-2 lg:row-start-1"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.4 }}
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <motion.div 
                                      className="flex justify-start mb-6"
                                      whileHover={{ 
                                        scale: 1.1,
                                        rotate: -5,
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <Code size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                                    </motion.div>
                                    <div className="flex items-center gap-3">
                                      <h3 className="text-lg font-bold mb-3">Custom Software Engineering</h3>
                                      <ServiceBadge icon="terminal" label="SaaS" />
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        We tailor software solutions for your specific business needs, whether it's an internal system or a SaaS product.
                                    </p>
                                    <motion.button 
                                      onClick={() => handleNavClick('contact')} 
                                      className="text-xs font-bold uppercase tracking-wider border-b border-white/150 pb-0.5 hover:text-white hover:border-white transition-all"
                                      whileHover={{ x: 5 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      Get Consultation
                                    </motion.button>
                                </div>
                                <div className="flex-1 bg-black/70 border border-white/15 rounded p-4 font-mono text-xs text-gray-400">
                                    <div className="flex justify-between border-b border-white/15 pb-2 mb-2">
                                        <span>AI Readiness Assessment</span>
                                        <span className="text-gray-300">COMPLETE</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p>{'>'} Data infrastructure...</p>
                                        <p>{'>'} Team capabilities...</p>
                                        <p>{'>'} Implementation roadmap...</p>
                                        <p className="text-white green-blink">{'>'} Ready for AI integration</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 5 - ML Infrastructure */}
                        <div className="md:col-span-1 lg:col-span-1 lg:col-start-3 lg:row-start-2">
                          <Suspense fallback={<div className="w-full h-48 bg-black/70 rounded flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
                            <MLInfrastructureCard onRequest={() => handleNavClick('contact')} />
                          </Suspense>
                        </div>
                        {/* Service 5 */}
                        <motion.div 
                          className="glass-card p-8 group flex flex-col justify-center text-center service-feature transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 lg:col-start-1 lg:row-start-3 lg:col-span-3"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.4 }}
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                            <motion.h3 
                              className="text-3xl font-bold mb-2"
                              whileHover={{ 
                                scale: 1.1,
                                transition: { duration: 0.2 }
                              }}
                            >24/7</motion.h3>
                            <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Support & Maintenance</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Downloads Section */}
          {activeSection === 'downloads' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/20 bg-gradient-to-b from-black via-zinc-900/20 to-black"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <div>
                            <motion.span 
                              className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
                              }}
                            >Downloads & Resources</motion.span>
                            <motion.h2 
                              className="text-4xl font-bold text-white"
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                              }}
                            >Our Development Tools</motion.h2>
                        </div>
                        <motion.p 
                          className="text-gray-500 text-sm max-w-sm text-right"
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
                          }}
                        >
                            Cutting-edge tools to accelerate your development workflow
                        </motion.p>
                    </motion.div>

                    <motion.div 
                      className="glass-card p-8 mb-12 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.h3 
                              className="text-2xl font-bold mb-4 text-sky-400"
                              whileHover={{ scale: 1.05 }}
                            >Open Source Tools</motion.h3>
                            <p className="text-gray-400 text-lg">
                                Download our production-ready tools built with security and performance in mind. Available for Windows and Linux with source code on GitHub.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.5
                          }
                        }
                      }}
                    >
                        {/* CLI-H4X */}
                        <motion.div 
                          className="glass-card download-card p-8 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                          variants={{
                            hidden: { opacity: 0, y: 60, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.7,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -10,
                            scale: 1.03,
                            transition: { duration: 0.3 }
                          }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <motion.div 
                                  className="flex items-center gap-4"
                                  whileHover={{ x: 5 }}
                                >
                                    <motion.div 
                                      className={`w-16 h-16 bg-gradient-to-br ${DARK_GRADIENT} rounded-lg flex items-center justify-center`}
                                      whileHover={{ 
                                        rotate: 10,
                                        scale: 1.1
                                      }}
                                    >
                                        <span className="text-white font-bold text-xl">C</span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold">CLI-H4X</h3>
                                        <p className="text-sm text-gray-400">v1.0.0</p>
                                    </div>
                                </motion.div>
                                <span className="text-xs px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full">Available</span>
                            </div>
                            
                            <p className="text-gray-400 mb-6">
                                Signal Protocol secure messaging system with end-to-end encryption, double-ratchet algorithm, and TLS 1.3 for real-time encrypted chat.
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Platforms</h4>
                                    <div className="flex gap-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-400 rounded">Windows</span>
                                        <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-400 rounded">Linux</span>
                                        <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-400 rounded">macOS (Build from source)</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Public Server</h4>
                                    <p className="text-sm text-gray-400 font-mono">cli-h4x.eclipse-softworks.com:443</p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <motion.a 
                                      href="https://github.com/Moon9t/CLI-H4X/releases/tag/v1.0.0"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 px-4 py-3 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <Download size={16} />
                                        Download
                                    </motion.a>
                                    <motion.a 
                                      href="https://github.com/Moon9t/CLI-H4X"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center"
                                      whileHover={{ scale: 1.1, rotate: 10 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                        <Github size={16} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* SvcMgr */}
                        <motion.div 
                          className="glass-card download-card p-8 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                          variants={{
                            hidden: { opacity: 0, y: 60, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.7,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -10,
                            scale: 1.03,
                            transition: { duration: 0.3 }
                          }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <motion.div 
                                  className="flex items-center gap-4"
                                  whileHover={{ x: 5 }}
                                >
                                    <motion.div 
                                      className={`w-16 h-16 bg-gradient-to-br ${DARK_GRADIENT} rounded-lg flex items-center justify-center`}
                                      whileHover={{ 
                                        rotate: -10,
                                        scale: 1.1
                                      }}
                                    >
                                        <span className="text-white font-bold text-xl">S</span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold">SvcMgr</h3>
                                        <p className="text-sm text-gray-400">v1.0.0</p>
                                    </div>
                                </motion.div>
                                <span className="text-xs px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full">Available</span>
                            </div>
                            
                            <p className="text-gray-400 mb-6">
                                Cross-platform CLI tool for secure management of server services including SSH, databases, and HTTP with encrypted credential handling.
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Platforms</h4>
                                    <div className="flex gap-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-400 rounded">Windows</span>
                                        <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-400 rounded">Linux</span>
                                        <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-400 rounded">macOS (Build from source)</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Features</h4>
                                    <p className="text-sm text-gray-400">SSH, Database & HTTP service management</p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <motion.a 
                                      href="https://github.com/Eclipse-Softworks/svcmgr/releases"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 px-4 py-3 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <Download size={16} />
                                        Download
                                    </motion.a>
                                    <motion.a 
                                      href="https://github.com/Eclipse-Softworks/svcmgr"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center"
                                      whileHover={{ scale: 1.1, rotate: -10 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                        <Github size={16} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Custom Solutions CTA */}
                    <motion.div 
                      className="glass-card p-8 text-center transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.7 } }
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                        <div className="max-w-2xl mx-auto">
                            <motion.h3 
                              className="text-2xl font-bold mb-4"
                              whileHover={{ scale: 1.05 }}
                            >Need Custom Solutions?</motion.h3>
                            <p className="text-gray-400 mb-6">
                                While our tools are being prepared, we're <span className="green-blink">ready</span> to build custom solutions tailored to your unique requirements. Let's create something amazing together!
                            </p>
                            <motion.button 
                              onClick={() => handleNavClick('contact')} 
                              className="inline-block px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold uppercase tracking-wider"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                                Request Custom Development
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Solutions Section */}
          {activeSection === 'solutions' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/20"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <div>
                            <motion.span 
                              className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
                              }}
                            >Our Solutions</motion.span>
                            <motion.h2 
                              className="text-4xl font-bold text-white"
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                              }}
                            >Innovative approaches to solve your most complex challenges</motion.h2>
                        </div>
                    </motion.div>

                    {/* Why Choose Our Solutions */}
                    <motion.div 
                      className="glass-card p-8 mb-16 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
                      }}
                      whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.3 }
                      }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                              variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }
                              }}
                            >
                                <h3 className="text-2xl font-bold mb-4">Why Choose Our Solutions?</h3>
                                <p className="text-gray-400 mb-6">We combine cutting-edge technology with industry expertise to deliver results that matter.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Proven track record across industries",
                                        "Customized to your specific needs",
                                        "Scalable and future-proof architectures",
                                        "24/7 support and maintenance"
                                    ].map((text, i) => (
                                        <motion.li 
                                      key={text}
                                          className="flex items-start gap-3"
                                          variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 * i } }
                                          }}
                                          whileHover={{ x: 5 }}
                                        >
                                            <motion.div
                                              className="mt-1"
                                              whileHover={{ scale: 1.2 }}
                                            >
                                              <CheckCircle size={16} className="text-gray-300" />
                                            </motion.div>
                                            <span className="text-gray-300">{text}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button 
                                  onClick={() => handleNavClick('contact')} 
                                  className="btn-primary mt-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" 
                                  aria-label="Request consultation"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                    Request Consultation
                                </motion.button>
                            </motion.div>
                            <motion.div 
                              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                              variants={{
                                hidden: { opacity: 0, x: 30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.5 } }
                              }}
                            >
                                {[
                                    { icon: "chart-line", title: "Data Analytics", desc: "Unlock insights from your data with our advanced analytics platform." },
                                    { icon: "robot", title: "AI Integration", desc: "Implement cutting-edge AI solutions tailored to your business needs." },
                                    { icon: "mobile-alt", title: "Mobile Development", desc: "Native and cross-platform mobile applications that deliver exceptional user experiences." },
                                    { icon: "shield-alt", title: "Cybersecurity", desc: "Protect your digital assets with our comprehensive security solutions." }
                                  ].map((item, i) => (
                                    <motion.div 
                                    key={item.title}
                                      className="glass-card p-4 text-center transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                                      variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        visible: { 
                                          opacity: 1, 
                                          y: 0, 
                                          scale: 1,
                                          transition: { 
                                            duration: 0.6,
                                            delay: 0.1 * i
                                          }
                                        }
                                      }}
                                      whileHover={{ 
                                        y: -8,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                      }}
                                    >
                                        <motion.div 
                                          className="flex justify-center mb-3"
                                          whileHover={{ 
                                            scale: 1.2,
                                            rotate: 10,
                                            transition: { duration: 0.3 }
                                          }}
                                        >
                                          <DynamicIcon name={item.icon} size={32} className="text-gray-300" />
                                        </motion.div>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-xs text-gray-400 mb-3">{item.desc}</p>
                                        <motion.button 
                                          className="text-xs font-bold uppercase tracking-wider border-b border-white/150 pb-0.5 hover:text-white hover:border-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                                          whileHover={{ x: 3 }}
                                          whileTap={{ scale: 0.95 }}
                                        >
                                          Learn more →
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Additional Solutions */}
                    <motion.div 
                      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.7
                          }
                        }
                      }}
                    >
                        <motion.div 
                          className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.03,
                            transition: { duration: 0.3 }
                          }}
                        >
                            <motion.div 
                              className="flex justify-center mb-4"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Wifi size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                            </motion.div>
                            <h3 className="text-lg font-bold mb-3">IoT Development</h3>
                            <p className="text-sm text-gray-400 mb-4">Build connected devices and smart systems for the modern world.</p>
                            <motion.button 
                              className="text-xs font-bold uppercase tracking-wider border-b border-white/150 pb-0.5 hover:text-white hover:border-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                              whileHover={{ x: 3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Learn more →
                            </motion.button>
                        </motion.div>
                        <motion.div 
                          className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.03,
                            transition: { duration: 0.3 }
                          }}
                        >
                            <motion.div 
                              className="flex justify-center mb-4"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: -5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Link size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                            </motion.div>
                            <h3 className="text-lg font-bold mb-3">Blockchain</h3>
                            <p className="text-sm text-gray-400 mb-4">Leverage decentralized technology for transparent and secure transactions.</p>
                            <motion.button 
                              className="text-xs font-bold uppercase tracking-wider border-b border-white/150 pb-0.5 hover:text-white hover:border-white transition-all focus-ring"
                              whileHover={{ x: 3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Learn more →
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                      className="glass-card p-8 mt-12 text-center transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.9 } }
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.h3 
                          className="text-2xl font-bold mb-4 green-blink"
                          whileHover={{ scale: 1.05 }}
                        >Ready to transform your business?</motion.h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Our team of experts is standing by to help you implement the perfect solution for your needs.</p>
                        <motion.button 
                          onClick={() => handleNavClick('contact')} 
                          className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Empower Your Business Section - Shown on Home or Solutions */}
          {activeSection === 'solutions' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/20 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-card p-8 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">Empower Your Business with Eclipse Softworks</h2>
                                <p className="text-gray-400 text-lg mb-8">We deliver innovative technology solutions that drive growth, enhance efficiency, and transform the way you do business.</p>
                                
                                <div className="space-y-6">
                                    {[
                                        { icon: "chart-bar", title: "Advanced Analytics Solutions", desc: "Transform your data into actionable insights with our cutting-edge analytics platform." },
                                        { icon: "brain", title: "AI-Powered Innovation", desc: "Leverage artificial intelligence to automate processes, enhance productivity, and unlock new opportunities." },
                                        { icon: "code", title: "Custom Application Development", desc: "Build scalable, robust applications tailored to your specific business requirements." },
                                        { icon: "user-check", title: "Exceptional User Experiences", desc: "Create memorable digital experiences that engage your customers and drive business success." }
                                    ].map((item) => (
                                      <div key={item.title} className="flex items-start gap-4">
                                            <DynamicIcon name={item.icon} size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-bold mb-2">{item.title}</h3>
                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="glass-card p-8 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-gray-400 mb-6">To deliver innovative technology solutions that empower businesses to achieve their goals, drive growth, and create lasting impact in their industries.</p>
                                <button onClick={() => handleNavClick('about')} className="inline-block px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold uppercase tracking-wider">
                                    Join Our Mission
                                </button>
                            </div>
                        </div>
                    </div>

                      {/* Technology Stack */}
                      <TechStack />
                </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/20"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <div>
                            <motion.span 
                              className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
                              }}
                            >Portfolio</motion.span>
                            <motion.h2 
                              className="text-4xl font-bold text-white"
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                              }}
                            >Recent Projects</motion.h2>
                        </div>
                        <motion.p 
                          className="text-gray-500 text-sm max-w-sm text-right"
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
                          }}
                        >
                            A selection of our recent AI implementations across various industries.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.4
                          }
                        }
                      }}
                    >
                        {GITHUB_PROJECTS.map((proj) => (
                            <motion.div 
                          key={proj.github}
                              id={proj.title.toLowerCase().replace(/\s+/g, '-')}
                              className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 flex flex-col h-full"
                              variants={{
                                hidden: { opacity: 0, y: 60, scale: 0.8 },
                                visible: { 
                                  opacity: 1, 
                                  y: 0, 
                                  scale: 1,
                                  transition: { 
                                    duration: 0.7,
                                    ease: "easeOut"
                                  }
                                }
                              }}
                              whileHover={{ 
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                              }}
                            >
                                <motion.div 
                                  className="h-40 bg-gradient-to-br from-gray-900 to-black rounded-lg mb-4 flex items-center justify-center border border-white/20 relative"
                                  whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                  }}
                                >
                                    <motion.div
                                      whileHover={{ 
                                        scale: 1.2,
                                        rotate: 10,
                                        transition: { duration: 0.3 }
                                      }}
                                    >
                                      <DynamicIcon name={proj.icon} size={40} className="text-gray-600" />
                                    </motion.div>
                                    {proj.stars > 0 && (
                                      <span className="absolute top-3 right-3 flex items-center gap-1 text-xs text-yellow-400">
                                        <Star size={12} fill="currentColor" />
                                        {proj.stars}
                                      </span>
                                    )}
                                    {proj.language && (
                                      <span className="absolute bottom-3 left-3 text-xs px-2 py-1 bg-white/10 rounded text-gray-400">
                                        {proj.language}
                                      </span>
                                    )}
                                </motion.div>
                                <motion.h3 
                                  className="text-lg font-bold mb-2"
                                  whileHover={{ x: 5 }}
                                >{proj.title}</motion.h3>
                                <p className="text-sm text-gray-400 mb-4 flex-grow">{proj.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.tags.map(tag => (
                                        <motion.span 
                                          key={tag} 
                                          className="text-xs px-2 py-1 bg-white/10 rounded"
                                          whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                                          }}
                                        >{tag}</motion.span>
                                    ))}
                                </div>
                                <a 
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mt-auto"
                                >
                                  <Github size={16} />
                                  View on GitHub
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* About Section */}
          {activeSection === 'about' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/20 animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/20 pb-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <img 
                              src="/img/logo.svg" 
                              alt="Eclipse Softworks Logo" 
                              className="w-20 h-20 mx-auto mb-8 object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                            
                            <h2 className="text-4xl font-bold text-white mb-6">About Eclipse Softworks</h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                Building Africa's digital future through innovative software solutions, one line of code at a time.
                            </p>
                        </div>
                    </div>

                    <div className="about-grid mb-20">
                      {COMPANY_VALUES.map((item) => (
                        <div key={item.title} className="glass-card p-8 text-center about-mission transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                          <div className="flex justify-center mb-4">
                            <DynamicIcon name={item.icon} size={32} className="text-gray-300" />
                          </div>
                          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-400">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="glass-card p-8 mb-16 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Meet the Team</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Behind every line of code is a team of passionate Africans who care deeply about building for Africa, in Africa. Our diverse team brings experience across engineering, design, data science, business strategy, and entrepreneurship.
                                </p>
                                <blockquote className="border-l-4 border-white/30 pl-6 py-2">
                                    <p className="text-lg italic text-gray-300 mb-4">"We're not just building software. We're building Africa's tomorrow."</p>
                                    <cite className="text-sm text-gray-500">— The Eclipse Team</cite>
                                </blockquote>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                              <div className="col-span-2 md:col-span-1">
                                <NeuralCard className="w-full h-48" />
                              </div>
                                <StatsCounter end={50} label="Projects Completed" />
                              <StatsCounter end={15} label="Team Members" />
                              <StatsCounter end={5} label="Years Experience" />
                              <StatsCounter end={'100%'} label="Client Satisfaction" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                      {/* Company Timeline */}
                      <div className="glass-card p-6 mb-6">
                        <h3 className="text-xl font-bold text-white mb-4">Our Journey</h3>
                        <p className="text-gray-400 mb-4">Milestones of Eclipse Softworks' growth and impact.</p>
                            <div className="flex overflow-x-auto gap-4 py-4" role="list" aria-label="Company timeline milestones">
                          {COMPANY_MILESTONES.map((milestone) => (
                                    <div key={`${milestone.year}-${milestone.title}`} role="listitem" className="min-w-[220px] p-4 bg-white/15 rounded-md">
                              <div className="text-xs text-gray-500 mb-2">{milestone.year}</div>
                              <div className="font-bold text-white mb-1">{milestone.title}</div>
                              <div className="text-xs text-gray-400">{milestone.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Open Source</span>
                                <h3 className="text-2xl font-bold text-white">Our GitHub Projects</h3>
                            </div>
                            <p className="text-gray-500 text-sm max-w-sm">
                                Open-source tools and frameworks built by Eclipse Softworks.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {GITHUB_PROJECTS.slice(0, 3).map((proj) => (
                              <div key={proj.github} className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/20 relative">
                                        <DynamicIcon name={proj.icon} size={48} className="text-gray-700" />
                                        {proj.stars > 0 && (
                                          <span className="absolute top-3 right-3 flex items-center gap-1 text-xs text-yellow-400">
                                            <Star size={12} fill="currentColor" />
                                            {proj.stars}
                                          </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{proj.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {proj.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded">{tag}</span>
                                        ))}
                                    </div>
                                    <a 
                                      href={proj.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                                    >
                                      <Github size={14} />
                                      View on GitHub
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                      {/* Highlight Case Study (temporarily removed) */}
                      {/* Testimonials block */}
                      <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6">What our clients say</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {TESTIMONIALS.slice(0,3).map((t) => (
                            <div key={t.name} className="glass-card p-6 text-sm text-gray-400">
                              <p className="italic text-gray-300 mb-3">"{t.content}"</p>
                              <cite className="text-xs text-gray-500">— {t.name}, {t.role} at {t.company}</cite>
                            </div>
                          ))}
                        </div>
                      </div>

                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Downloads & Resources</span>
                                <h3 className="text-2xl font-bold text-white">Tools to accelerate your projects</h3>
                            </div>
                            <p className="text-gray-500 text-sm max-w-sm">
                                Our development tools, documentation, and resources are currently being prepared.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {RESOURCES.map((res) => (
                              <div key={res.title} className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                                    <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/20">
                                        <DynamicIcon name={res.icon} size={32} className="text-gray-600" />
                                    </div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold">{res.title}</h3>
                                        <span className="text-xs px-2 py-1 bg-white/15 text-gray-300 rounded-full">Coming Soon</span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4">{res.desc}</p>
                                    <div className="flex justify-between text-xs text-gray-500 mb-4">
                                        <span>{res.meta[0]}</span>
                                        <span>{res.meta[1]}</span>
                                    </div>
                                    <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded">
                                        Get Notified
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                                <ul className="space-y-4">
                                    {WHY_CHOOSE_US.map((item) => (
                                      <li key={item.title} className="flex items-start gap-3">
                                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/15 mt-1">
                                                <CheckCircle size={12} className="text-gray-300" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-400">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-card p-6 bg-gradient-to-br from-black to-gray-900 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                                <h3 className="text-xl font-bold mb-4 green-blink">Ready to Build Something Amazing?</h3>
                                <p className="text-gray-400 mb-6">Let's discuss how we can help bring your vision to life with cutting-edge technology solutions.</p>
                                <button onClick={() => handleNavClick('contact')} className="inline-block px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold uppercase tracking-wider">
                                    Start Your Project Today
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {/* Team Section */}
          {activeSection === 'team' && (
            <motion.section
              className="py-24 px-6 relative z-10 border-t border-white/20 bg-gradient-to-b from-black via-zinc-900/20 to-black"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                      className="mb-16 border-b border-white/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <div>
                            <motion.span
                              className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
                              }}
                            >Our Team</motion.span>
                            <motion.h2
                              className="text-4xl font-bold text-white"
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                              }}
                            >Meet the Team</motion.h2>
                        </div>
                        <motion.p
                          className="text-gray-500 text-sm max-w-sm text-right"
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
                          }}
                        >
                            The talented individuals behind Eclipse Softworks
                        </motion.p>
                    </motion.div>

                    {/* Leadership Team */}
                    <motion.div
                      className="mb-16"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } }
                      }}
                    >
                        <motion.h3
                          className="text-2xl font-bold text-white mb-8 text-center"
                          whileHover={{ scale: 1.05 }}
                        >Leadership</motion.h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {LEADERSHIP_TEAM.map((member, i) => (
                                <motion.div
                                  key={member.name}
                                  id={member.name.toLowerCase().replace(/\s+/g, '-')}
                                  className="glass-card p-8 text-center group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                                  variants={{
                                    hidden: { opacity: 0, y: 60, scale: 0.9 },
                                    visible: {
                                      opacity: 1,
                                      y: 0,
                                      scale: 1,
                                      transition: {
                                        duration: 0.7,
                                        ease: "easeOut",
                                        delay: 0.1 * i
                                      }
                                    }
                                  }}
                                  whileHover={{
                                    y: -12,
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                  }}
                                >
                                    <motion.div
                                      className={`w-24 h-24 bg-gradient-to-br ${DARK_GRADIENT} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                                      whileHover={{
                                        rotate: 10,
                                        scale: 1.1,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                                        transition: { duration: 0.3 }
                                      }}
                                    >
                                        {member.initials}
                                    </motion.div>
                                    <motion.h3
                                      className="text-xl font-bold mb-2"
                                      whileHover={{ scale: 1.05 }}
                                    >{member.name}</motion.h3>
                                    <motion.p
                                      className="text-sm text-gray-300 mb-1 font-medium"
                                      whileHover={{ color: "#ffffff" }}
                                    >{member.role}</motion.p>
                                    <motion.p
                                      className="text-xs text-gray-500 mb-4 uppercase tracking-wider"
                                      whileHover={{ color: "#9ca3af" }}
                                    >{member.specialty}</motion.p>
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{member.description}</p>
                                    <motion.a
                                      href={member.linkedin || '#'}
                                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                                      whileHover={{ x: 5 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin size={16} />
                                        <span className="text-xs">LinkedIn</span>
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Development Team */}
                    <motion.div
                      className="mb-16"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6 } }
                      }}
                    >
                        <motion.h3
                          className="text-2xl font-bold text-white mb-8 text-center"
                          whileHover={{ scale: 1.05 }}
                        >Development Team</motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {DEVELOPMENT_TEAM.map((member, i) => (
                                <motion.div
                                  key={member.name}
                                  id={member.name.toLowerCase().replace(/\s+/g, '-')}
                                  className="glass-card p-6 text-center group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                                  variants={{
                                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                                    visible: {
                                      opacity: 1,
                                      y: 0,
                                      scale: 1,
                                      transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.1 * i
                                      }
                                    }
                                  }}
                                  whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                    transition: { duration: 0.3 }
                                  }}
                                >
                                    <motion.div
                                      className={`w-20 h-20 bg-gradient-to-br ${DARK_GRADIENT} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-md`}
                                      whileHover={{
                                        rotate: 5,
                                        scale: 1.1,
                                        transition: { duration: 0.3 }
                                      }}
                                    >
                                        {member.initials}
                                    </motion.div>
                                    <motion.h3
                                      className="font-bold mb-1"
                                      whileHover={{ scale: 1.02 }}
                                    >{member.name}</motion.h3>
                                    <motion.p
                                      className="text-xs text-gray-400 mb-1"
                                      whileHover={{ color: "#9ca3af" }}
                                    >{member.role}</motion.p>
                                    <motion.p
                                      className="text-xs text-gray-500 mb-3 uppercase tracking-wider"
                                      whileHover={{ color: "#6b7280" }}
                                    >{member.specialty}</motion.p>
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{member.description}</p>
                                    {member.skills && (
                                        <div className="flex flex-wrap gap-1 justify-center mb-4">
                                          {member.skills.map((skill) => (
                                              <motion.span
                                                key={`${member.name}-${skill}`}
                                                className="text-xs px-2 py-1 bg-white/10 rounded-full"
                                                whileHover={{
                                                  scale: 1.1,
                                                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                                                }}
                                              >
                                                  {skill}
                                              </motion.span>
                                          ))}
                                      </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Business Team */}
                    <motion.div
                      className="mb-16"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.8 } }
                      }}
                    >
                        <motion.h3
                          className="text-2xl font-bold text-white mb-8 text-center"
                          whileHover={{ scale: 1.05 }}
                        >Business Operations</motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {BUSINESS_TEAM.map((member, i) => (
                                <motion.div
                                  key={member.name}
                                  id={member.name.toLowerCase().replace(/\s+/g, '-')}
                                  className="glass-card p-6 text-center group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                                  variants={{
                                    hidden: { opacity: 0, x: i === 0 ? -50 : 50, scale: 0.9 },
                                    visible: {
                                      opacity: 1,
                                      x: 0,
                                      scale: 1,
                                      transition: {
                                        duration: 0.7,
                                        ease: "easeOut",
                                        delay: 0.2 * i
                                      }
                                    }
                                  }}
                                  whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                    transition: { duration: 0.3 }
                                  }}
                                >
                                    <motion.div
                                      className={`w-20 h-20 bg-gradient-to-br ${DARK_GRADIENT} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-md`}
                                      whileHover={{
                                        rotate: -5,
                                        scale: 1.1,
                                        transition: { duration: 0.3 }
                                      }}
                                    >
                                        {member.initials}
                                    </motion.div>
                                    <motion.h3
                                      className="font-bold mb-1"
                                      whileHover={{ scale: 1.02 }}
                                    >{member.name}</motion.h3>
                                    <motion.p
                                      className="text-xs text-gray-400 mb-1"
                                      whileHover={{ color: "#9ca3af" }}
                                    >{member.role}</motion.p>
                                    <motion.p
                                      className="text-xs text-gray-500 mb-3 uppercase tracking-wider"
                                      whileHover={{ color: "#6b7280" }}
                                    >{member.specialty}</motion.p>
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{member.description}</p>
                                    <motion.a
                                      href={member.linkedin || '#'}
                                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                                      whileHover={{ x: 5 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin size={16} />
                                        <span className="text-xs">LinkedIn</span>
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Team Culture Section */}
                    <motion.div
                      className="glass-card p-8 text-center transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.0 } }
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                        <motion.h3
                          className="text-2xl font-bold mb-4"
                          whileHover={{ scale: 1.05 }}
                        >Our Culture</motion.h3>
                        <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
                            At Eclipse Softworks, we believe in collaboration, innovation, and building for impact. Our diverse team brings together different perspectives, skills, and experiences to create solutions that matter. We're not just colleagues — we're a community united by our passion for technology and our commitment to Africa's digital future.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            {[
                              { icon: "users", title: "Collaboration", desc: "We work together across disciplines to achieve extraordinary results." },
                              { icon: "lightbulb", title: "Innovation", desc: "We embrace new ideas and technologies to solve complex challenges." },
                              { icon: "heart", title: "Impact", desc: "We build solutions that create real value for our clients and communities." }
                            ].map((value) => (
                                <motion.div
                              key={value.title}
                                  className="text-center"
                                  whileHover={{ y: -5 }}
                                >
                                    <motion.div
                                      className="flex justify-center mb-3"
                                      whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 0.3 }
                                      }}
                                    >
                                      <DynamicIcon name={value.icon} size={32} className="text-gray-300" />
                                    </motion.div>
                                    <h4 className="font-bold mb-2">{value.title}</h4>
                                    <p className="text-sm text-gray-400">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/20"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                      className="mb-16 text-center"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        <motion.span 
                          className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                          }}
                        >Contact</motion.span>
                        <motion.h2 
                          className="text-4xl font-bold text-white mb-4"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                          }}
                        >Let's Talk</motion.h2>
                        <motion.p 
                          className="text-gray-500 text-lg max-w-lg mx-auto"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                          }}
                        >
                            Have a project in mind or want to collaborate? We're just a message away.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-12"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.3,
                            delayChildren: 0.4
                          }
                        }
                      }}
                    >
                        <motion.div 
                          className="glass-card rounded-lg p-8 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                          variants={{
                            hidden: { opacity: 0, x: -50, scale: 0.95 },
                            visible: { 
                              opacity: 1, 
                              x: 0, 
                              scale: 1,
                              transition: { 
                                duration: 0.7,
                                ease: "easeOut"
                              }
                            }
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.3 }
                          }}
                        >
                            <form 
                              action="https://formsubmit.co/info@eclipse-softworks.com" 
                              method="POST"
                              className="space-y-6 relative"
                            >
                                {/* FormSubmit configuration */}
                                <input type="hidden" name="_subject" value="New Contact from Eclipse Softworks Website" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="https://eclipse-softworks.com/?submitted=true" />
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input 
                                      type="text" 
                                      name="name"
                                      required 
                                      aria-label="Name" 
                                      className="input w-full bg-black/70 border border-white/20 rounded px-4 py-3 text-white focus:ring focus:border-white/40 transition-colors" 
                                      placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input 
                                      type="email" 
                                      name="email"
                                      required 
                                      aria-label="Email" 
                                      className="input w-full bg-black/70 border border-white/20 rounded px-4 py-3 text-white focus:ring focus:border-white/40 transition-colors" 
                                      placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea 
                                      name="message"
                                      required 
                                      aria-label="Message" 
                                      className="w-full h-32 input bg-black/70 border border-white/20 rounded px-4 py-3 text-white focus:ring focus:border-white/40 transition-colors" 
                                      placeholder="Your message..."
                                    ></textarea>
                                </div>
                                {/* Honeypot field for bot detection - hidden from users */}
                                <input type="text" name="_honey" style={{ display: 'none' }} />
                                <button 
                                  type="submit" 
                                  className="w-full px-6 py-3 btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform" 
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        <motion.div 
                          className="space-y-8"
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { 
                              opacity: 1, 
                              x: 0,
                              transition: { 
                                duration: 0.7,
                                ease: "easeOut"
                              }
                            }
                          }}
                        >
                            <motion.div
                              variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                              }}
                            >
                                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <motion.div 
                                      className="flex items-center gap-3"
                                      whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                          whileHover={{ scale: 1.2 }}
                                        >
                                          <Mail size={18} className="text-gray-400" />
                                        </motion.div>
                                        <span className="text-gray-300">info@eclipse-softworks.com</span>
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center gap-3"
                                      whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                          whileHover={{ scale: 1.2 }}
                                        >
                                          <Phone size={18} className="text-gray-400" />
                                        </motion.div>
                                        <span className="text-gray-300">+27 (0) 82 079 1642</span>
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center gap-3"
                                      whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                          whileHover={{ scale: 1.2 }}
                                        >
                                          <MapPin size={18} className="text-gray-400" />
                                        </motion.div>
                                        <span className="text-gray-300">Sandton, Johannesburg, South Africa</span>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div 
                              className="glass-card p-6 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                              variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                              }}
                              whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                              }}
                            >
                                <h3 className="text-xl font-bold mb-4">Eclipse Softworks</h3>
                                <p className="text-gray-400 mb-4">Building Africa's digital future through innovative software solutions, one line of code at a time.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-sm mb-2">Services</h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            <li>AI-Powered Solutions</li>
                                            <li>Mobile App Development</li>
                                            <li>Custom Software Engineering</li>
                                            <li>DevOps & Automation</li>
                                            <li>Consulting & Strategy</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm mb-2">Company</h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            <li>About Us</li>
                                            <li>Products</li>
                                            <li>Downloads</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    {/* Toast Container */}
                    {toast && (
                        <motion.div 
                          className="fixed right-4 bottom-4 z-60"
                          initial={{ opacity: 0, x: 100, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 100, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                            <Toast type={toast.type}>{toast.message}</Toast>
                        </motion.div>
                    )}
                </div>
            </motion.section>
          )}

            <Footer onNav={handleNavClick} />
            
            {/* Demo Booking Modal */}
            <Suspense fallback={null}>
              <DemoBookingModal 
                isOpen={isDemoModalOpen} 
                onClose={() => setIsDemoModalOpen(false)} 
              />
            </Suspense>
            
            {/* Cookie Consent Banner */}
            <Suspense fallback={null}>
              <CookieConsent />
            </Suspense>
      </main>
    </div>
  );
};

export default App;