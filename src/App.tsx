import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Toast from './components/Toast';
import { postContact } from './services/contact';
import LoadingSpinner from './components/LoadingSpinner';
import { motion } from 'framer-motion';
import { DARK_GRADIENT, TESTIMONIALS, SERVICES } from '../constants';
import Footer from './components/Footer';

// Lazy load heavy components for better mobile performance
const MetallicBackground = lazy(() => import('./components/MetallicBackground'));
const NeuralCard = lazy(() => import('./components/NeuralCard'));
const MLInfrastructureCard = lazy(() => import('./components/MLInfrastructureCard'));
const ServiceBadge = lazy(() => import('./components/ServiceBadge'));
const StatsCounter = lazy(() => import('./components/StatsCounter'));
const TechStack = lazy(() => import('./components/TechStack'));

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    // Header now manages mobile menu state internally
    // contact form state
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{type: 'success'|'error'|'info'; message: string} | null>(null);
    const isFormValid = contactName.trim().length > 0 && contactEmail.includes('@') && contactMessage.trim().length > 0;

    const getStatusClasses = (color: string) => {
      // Always return neutral gray-only palette for status badges so the site remains dark-themed
      if (!color) return 'bg-white/5 text-gray-300';
      if (color === 'green') return 'bg-green-500/20 text-green-400 green-blink';
      if (color.includes('bg-') || color.includes('text-')) return color;
      return 'bg-white/5 text-gray-300';
    };

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

    const handleNavClick = (sectionId: string, scrollTo?: string) => {
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
                        className="inline-flex items-center gap-3 px-3 py-1 mb-8 border border-white/10 bg-white/5 rounded-full backdrop-blur-md"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                      >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
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
                      <Suspense fallback={<div className="w-full h-48 bg-black/50 rounded flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
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
                      className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-4 gap-8"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                        {[
                            { val: "50+", label: "Projects Completed" },
                            { val: "15+", label: "Team Members" },
                            { val: "5+", label: "Years Experience" },
                            { val: "100%", label: "Client Satisfaction" }
                        ].map((stat, i) => (
                            <motion.div 
                              key={i} 
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
              className="py-24 px-6 relative z-10 border-t border-white/5"
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
                      className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-min"
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
                        {SERVICES.slice(0, 3).map((service, i) => (
                            <motion.div
                              key={i}
                              className="glass-card p-8 md:p-10 lg:p-12 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
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
                                  className="w-12 h-12 mb-6 text-gray-300 group-hover:text-white transition-colors"
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
                                  className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all"
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
              className="py-24 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20"
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
                        {TESTIMONIALS.map((testimonial, i) => (
                            <motion.div 
                              key={i} 
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
              className="py-24 px-6 relative z-10 border-t border-white/5"
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
                        <h2 className="text-4xl font-bold text-white mb-4 green-blink">Ready to Transform Your Business?</h2>
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

          {/* Services Section */}
          {activeSection === 'services' && (
            <motion.section 
              className="py-24 px-6 relative z-10 border-t border-white/10"
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
                      className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
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
                      className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
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
                            <motion.i 
                              className="fa-solid fa-brain text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            ></motion.i>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold mb-3">AI-Powered Solutions</h3>
                              <ServiceBadge icon="fa-brands fa-python" label="ML" />
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
                            <motion.i 
                              className="fa-solid fa-globe text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: -5,
                                transition: { duration: 0.2 }
                              }}
                            ></motion.i>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold mb-3">Web Development</h3>
                              <ServiceBadge icon="fa-brands fa-react" label="React" />
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
                            <motion.i 
                              className="fa-solid fa-mobile-screen-button text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            ></motion.i>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold mb-3">Mobile App Development</h3>
                              <ServiceBadge icon="fa-solid fa-mobile-screen" label="Mobile" />
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
                                    <motion.i 
                                      className="fa-solid fa-terminal text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"
                                      whileHover={{ 
                                        scale: 1.1,
                                        rotate: -5,
                                        transition: { duration: 0.2 }
                                      }}
                                    ></motion.i>
                                    <div className="flex items-center gap-3">
                                      <h3 className="text-lg font-bold mb-3">Custom Software Engineering</h3>
                                      <ServiceBadge icon="fa-solid fa-terminal" label="SaaS" />
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        We tailor software solutions for your specific business needs, whether it's an internal system or a SaaS product.
                                    </p>
                                    <motion.button 
                                      onClick={() => handleNavClick('contact')} 
                                      className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all"
                                      whileHover={{ x: 5 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      Get Consultation
                                    </motion.button>
                                </div>
                                <div className="flex-1 bg-black/50 border border-white/10 rounded p-4 font-mono text-xs text-gray-400">
                                    <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
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
                          <Suspense fallback={<div className="w-full h-48 bg-black/50 rounded flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
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
              className="py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black"
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
                      className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
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
                              className="text-2xl font-bold mb-4"
                              whileHover={{ scale: 1.05 }}
                            >Coming Soon</motion.h3>
                            <p className="text-gray-400 text-lg">
                                Our cutting-edge tools and applications are currently being prepared to accelerate your development workflow. Stay tuned for exciting releases!
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
                        {/* Umbra Programming Language */}
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
                                        <span className="text-white font-bold text-xl">U</span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold">Umbra Programming Language</h3>
                                        <p className="text-sm text-gray-400">v1.0.0</p>
                                    </div>
                                </motion.div>
                                <span className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full">Coming Soon</span>
                            </div>
                            
                            <p className="text-gray-400 mb-6">
                                A modern, high-performance programming language designed for system-level development with memory safety and concurrency built-in.
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Platforms</h4>
                                    <div className="flex gap-2">
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Windows</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Mac</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Linux</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">File Size</h4>
                                    <p className="text-sm text-gray-400">TBD</p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <motion.button 
                                      className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <i className="fa-solid fa-bell"></i>
                                        Get Notified
                                    </motion.button>
                                    <motion.button 
                                      className="px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded"
                                      whileHover={{ scale: 1.1, rotate: 10 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                        <i className="fa-solid fa-info"></i>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Kasi Meals */}
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
                                        <span className="text-white font-bold text-xl">K</span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold">Kasi Meals</h3>
                                        <p className="text-sm text-gray-400">v1.0.0</p>
                                    </div>
                                </motion.div>
                                <span className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full">Coming Soon</span>
                            </div>
                            
                            <p className="text-gray-400 mb-6">
                                A comprehensive meal planning and delivery application connecting local communities with authentic South African cuisine.
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Platforms</h4>
                                    <div className="flex gap-2">
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Android</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">iOS</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Web</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">File Size</h4>
                                    <p className="text-sm text-gray-400">TBD</p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <motion.button 
                                      className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <i className="fa-solid fa-bell"></i>
                                        Get Notified
                                    </motion.button>
                                    <motion.button 
                                      className="px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded"
                                      whileHover={{ scale: 1.1, rotate: -10 }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                        <i className="fa-solid fa-info"></i>
                                    </motion.button>
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
              className="py-24 px-6 relative z-10 border-t border-white/10"
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
                      className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
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
                                          key={i} 
                                          className="flex items-start gap-3"
                                          variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 * i } }
                                          }}
                                          whileHover={{ x: 5 }}
                                        >
                                            <motion.i 
                                              className="fa-solid fa-check text-gray-300 mt-1"
                                              whileHover={{ scale: 1.2 }}
                                            ></motion.i>
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
                                    { icon: "fa-chart-line", title: "Data Analytics", desc: "Unlock insights from your data with our advanced analytics platform." },
                                    { icon: "fa-robot", title: "AI Integration", desc: "Implement cutting-edge AI solutions tailored to your business needs." },
                                    { icon: "fa-mobile-alt", title: "Mobile Development", desc: "Native and cross-platform mobile applications that deliver exceptional user experiences." },
                                    { icon: "fa-shield-alt", title: "Cybersecurity", desc: "Protect your digital assets with our comprehensive security solutions." }
                                ].map((item, i) => (
                                    <motion.div 
                                      key={i} 
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
                                        <motion.i 
                                          className={`fa-solid ${item.icon} text-3xl mb-3 text-gray-300`}
                                          whileHover={{ 
                                            scale: 1.2,
                                            rotate: 10,
                                            transition: { duration: 0.3 }
                                          }}
                                        ></motion.i>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-xs text-gray-400 mb-3">{item.desc}</p>
                                        <motion.button 
                                          className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
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
                            <motion.i 
                              className="fa-solid fa-wifi text-2xl mb-4 text-gray-300 group-hover:text-white transition-colors"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                              }}
                            ></motion.i>
                            <h3 className="text-lg font-bold mb-3">IoT Development</h3>
                            <p className="text-sm text-gray-400 mb-4">Build connected devices and smart systems for the modern world.</p>
                            <motion.button 
                              className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
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
                            <motion.i 
                              className="fa-solid fa-link text-2xl mb-4 text-gray-300 group-hover:text-white transition-colors"
                              whileHover={{ 
                                scale: 1.1,
                                rotate: -5,
                                transition: { duration: 0.2 }
                              }}
                            ></motion.i>
                            <h3 className="text-lg font-bold mb-3">Blockchain</h3>
                            <p className="text-sm text-gray-400 mb-4">Leverage decentralized technology for transparent and secure transactions.</p>
                            <motion.button 
                              className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all focus-ring"
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
            <section className="py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-card p-8 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">Empower Your Business with Eclipse Softworks</h2>
                                <p className="text-gray-400 text-lg mb-8">We deliver innovative technology solutions that drive growth, enhance efficiency, and transform the way you do business.</p>
                                
                                <div className="space-y-6">
                                    {[
                                        { icon: "fa-chart-bar", title: "Advanced Analytics Solutions", desc: "Transform your data into actionable insights with our cutting-edge analytics platform." },
                                        { icon: "fa-brain", title: "AI-Powered Innovation", desc: "Leverage artificial intelligence to automate processes, enhance productivity, and unlock new opportunities." },
                                        { icon: "fa-code", title: "Custom Application Development", desc: "Build scalable, robust applications tailored to your specific business requirements." },
                                        { icon: "fa-user-check", title: "Exceptional User Experiences", desc: "Create memorable digital experiences that engage your customers and drive business success." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <i className={`fa-solid ${item.icon} text-xl text-gray-300 mt-1`}></i>
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
              className="py-24 px-6 relative z-10 border-t border-white/10"
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
                      className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
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
                      className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                        {[
                            { icon: "fa-industry", title: "Predictive Maintenance", desc: "AI system for manufacturing equipment failure prediction.", tags: ["ML", "IoT", "Python"] },
                            { icon: "fa-comments", title: "Customer Service AI", desc: "Natural language processing for automated customer support.", tags: ["NLP", "Chatbots", "TensorFlow"] },
                            { icon: "fa-chart-pie", title: "Financial Analytics", desc: "Risk assessment and market prediction models for finance sector.", tags: ["Analytics", "Forecasting", "PyTorch"] }
                        ].map((proj, i) => (
                            <motion.div 
                              key={i}
                              id={proj.title.toLowerCase().replace(/\s+/g, '-')}
                              className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
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
                                scale: 1.03,
                                transition: { duration: 0.3 }
                              }}
                            >
                                <motion.div 
                                  className="h-48 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10"
                                  whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                  }}
                                >
                                    <motion.i 
                                      className={`fa-solid ${proj.icon} text-4xl text-gray-700`}
                                      whileHover={{ 
                                        scale: 1.2,
                                        rotate: 10,
                                        transition: { duration: 0.3 }
                                      }}
                                    ></motion.i>
                                </motion.div>
                                <motion.h3 
                                  className="text-lg font-bold mb-2"
                                  whileHover={{ x: 5 }}
                                >{proj.title}</motion.h3>
                                <p className="text-sm text-gray-400 mb-4">{proj.desc}</p>
                                <div className="flex gap-2">
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
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
          )}

          {/* About Section */}
          {activeSection === 'about' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/10 pb-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                            
                            <h2 className="text-4xl font-bold text-white mb-6">About Eclipse Softworks</h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                Building Africa's digital future through innovative software solutions, one line of code at a time.
                            </p>
                        </div>
                    </div>

                    <div className="about-grid mb-20">
                      {[
                        { icon: "fa-bullseye", title: "Our Mission", desc: "To empower businesses across Africa with reliable, scalable, and innovative digital solutions that drive measurable impact." },
                        { icon: "fa-eye", title: "Our Vision", desc: "To become the leading software powerhouse born in Africa — a hub for engineering excellence, creativity, and global innovation." },
                        { icon: "fa-heart", title: "Our Values", desc: "Integrity, quality, collaboration, and a relentless drive for excellence form the foundation of everything we build." }
                      ].map((item, i) => (
                        <div key={i} className="glass-card p-8 text-center about-mission transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                          <div className="text-3xl mb-4 text-gray-300"><i className={`fa-solid ${item.icon}`}></i></div>
                          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-400">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="glass-card p-8 mb-16 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
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
                          {[{
                            year: '2018', title: 'Founded', desc: 'Moon founded Eclipse Softworks to build AI solutions for African markets.'
                          },{
                            year: '2020', title: 'First Major Client', desc: 'Delivered our first enterprise-grade AI system, enabling analytics at scale.'
                          },{
                            year: '2022', title: 'Products', desc: 'Launched SDK and templates to help accelerate client projects.'
                          },{
                            year: '2024', title: 'Expansion', desc: 'Expanded team and partnered with major financial institutions.'
                          }].map((milestone, i) => (
                                    <div key={i} role="listitem" className="min-w-[220px] p-4 bg-white/5 rounded-md">
                              <div className="text-xs text-gray-500 mb-2">{milestone.year}</div>
                              <div className="font-bold text-white mb-1">{milestone.title}</div>
                              <div className="text-xs text-gray-400">{milestone.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Featured Projects</span>
                                <h3 className="text-2xl font-bold text-white">Showcasing some of our most impactful projects</h3>
                            </div>
                            <p className="text-gray-500 text-sm max-w-sm">
                                Projects that demonstrate our expertise and commitment to innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "fa-brain", title: "AI-Powered Analytics Platform", desc: "Advanced machine learning platform for business intelligence and predictive analytics.", tags: ["Python", "TensorFlow", "React"], status: "Live", statusColor: "green" },
                                { icon: "fa-mobile-alt", title: "Mobile Banking Solution", desc: "Secure and intuitive mobile banking application for African financial institutions.", tags: ["React Native", "Node.js", "MongoDB"], status: "In Development", statusColor: "blue" },
                                { icon: "fa-shopping-cart", title: "E-Commerce Platform", desc: "Scalable e-commerce solution tailored for African markets and payment systems.", tags: ["Next.js", "Stripe", "PostgreSQL"], status: "Live", statusColor: "green" }
                            ].map((proj, i) => (
                                <div key={i} className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10 relative">
                                        <i className={`fa-solid ${proj.icon} text-4xl text-gray-700`}></i>
                                        <span className={`absolute top-3 right-3 text-xs px-2 py-1 ${getStatusClasses(proj.statusColor)} rounded-full`}>{proj.status}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{proj.desc}</p>
                                    <div className="flex gap-2">
                                        {proj.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                      {/* Highlight Case Study (temporarily removed) */}
                      {/* Testimonials block */}
                      <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-6">What our clients say</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {TESTIMONIALS.slice(0,3).map((t, i) => (
                            <div key={i} className="glass-card p-6 text-sm text-gray-400">
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

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "fa-cube", title: "Eclipse SDK", desc: "Complete software development kit for building applications with Eclipse Softworks tools.", meta: ["Size: 45 MB", "Version: v2.1.0"] },
                                { icon: "fa-book", title: "API Documentation", desc: "Comprehensive documentation and examples for our REST API endpoints.", meta: ["Size: PDF", "Version: v1.8"] },
                                { icon: "fa-mobile", title: "Mobile Templates", desc: "Ready-to-use mobile app templates and UI components for rapid development.", meta: ["Size: 120 MB", "Version: v1.5.2"] }
                            ].map((res, i) => (
                                <div key={i} className="glass-card p-6 group transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                                    <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10">
                                        <i className={`fa-solid ${res.icon} text-3xl text-gray-600`}></i>
                                    </div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold">{res.title}</h3>
                                        <span className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded-full">Coming Soon</span>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Local Insight", desc: "Deep understanding of African markets and user behavior." },
                                        { title: "Technical Expertise", desc: "Proficiency in cutting-edge tools and methodologies." },
                                        { title: "Collaboration", desc: "We work closely with our clients to bring their vision to life." },
                                        { title: "Scalability", desc: "Future-proof architecture designed to grow with your business." },
                                        { title: "Social Impact", desc: "We support initiatives that uplift underserved communities through digital tools and training." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/5 mt-1">
                                                <i className="fa-solid fa-check text-xs text-gray-300"></i>
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
              className="py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black"
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
                      className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
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
                            {[
                                {
                                    initials: "MK",
                                    name: "Moon Khumalo",
                                    role: "Founder & CEO",
                                    specialty: "AI Systems and Backend",
                                    desc: "Moon is the visionary founder and CEO of Eclipse Softworks, specializing in AI systems and backend infrastructure. He leads the team with innovation and purpose.",
                                    gradient: DARK_GRADIENT,
                                    linkedin: "#"
                                },
                                {
                                    initials: "XB",
                                    name: "Xolani Buthelezi",
                                    role: "CTO & Technical Architect",
                                    specialty: "System Architecture",
                                    desc: "Xolani is the Chief Technology Officer and Technical Architect, responsible for the overall technical strategy and system architecture.",
                                    gradient: DARK_GRADIENT,
                                    linkedin: "#"
                                },
                                {
                                    initials: "PM",
                                    name: "Philani Makhoba",
                                    role: "COO & Front-End Developer",
                                    specialty: "Operations & UI/UX",
                                    desc: "Philani serves as the COO of Eclipse Softworks. A skilled front-end developer, he brings structure and clarity to every project the team undertakes.",
                                    gradient: DARK_GRADIENT,
                                    linkedin: "#"
                                }
                            ].map((member, i) => (
                                <motion.div
                                  key={i}
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
                                      className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
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
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{member.desc}</p>
                                    <motion.a
                                      href={member.linkedin}
                                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                                      whileHover={{ x: 5 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    initials: "TM",
                                    name: "Tshepiso Mokwena",
                                    role: "Full-Stack Developer",
                                    specialty: "Front-End Focused",
                                    desc: "Tshepiso is a passionate front-end developer and aspiring full-stack engineer, dedicated to creating impactful user experiences and scalable digital solutions.",
                                    gradient: DARK_GRADIENT,
                                    skills: ["React", "TypeScript", "Node.js"]
                                },
                                {
                                    initials: "SM",
                                    name: "Siphesihle Magudulela",
                                    role: "Front-End Developer",
                                    specialty: "UI/UX Development",
                                    desc: "Siphesihle is a dedicated front-end developer with a keen eye for clean interfaces and intuitive user interactions.",
                                    gradient: DARK_GRADIENT,
                                    skills: ["React", "CSS", "JavaScript"]
                                },
                                {
                                    initials: "KM",
                                    name: "Karabo Makgala",
                                    role: "Security Engineer",
                                    specialty: "Cybersecurity",
                                    desc: "Karabo is a security engineer focused on ensuring the safety, integrity, and privacy of all digital systems built by Eclipse Softworks.",
                                    gradient: DARK_GRADIENT,
                                    skills: ["Security", "Penetration Testing", "Compliance"]
                                },
                                {
                                    initials: "NK",
                                    name: "Neo Kganyile",
                                    role: "Penetration Tester",
                                    specialty: "Security Testing",
                                    desc: "Neo is an enthusiastic learner and aspiring penetration tester who brings curiosity and a security-first mindset to the team.",
                                    gradient: DARK_GRADIENT,
                                    skills: ["Pen Testing", "Vulnerability Assessment", "Ethical Hacking"]
                                },
                                {
                                    initials: "NN",
                                    name: "Nkanyiso Ndlovu",
                                    role: "Systems Engineer",
                                    specialty: "Infrastructure & DevOps",
                                    desc: "Nkanyiso is a systems engineer and coordinator who ensures seamless integration and coordination across all technical systems and team operations.",
                                    gradient: DARK_GRADIENT,
                                    skills: ["DevOps", "Cloud", "System Administration"]
                                }
                            ].map((member, i) => (
                                <motion.div
                                  key={i}
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
                                      className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-md`}
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
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{member.desc}</p>
                                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                                        {member.skills.map((skill, skillIndex) => (
                                            <motion.span
                                              key={skillIndex}
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                {
                                    initials: "YN",
                                    name: "Yongama Nkosi",
                                    role: "Accountant",
                                    specialty: "Financial Planning",
                                    desc: "Yongama is a dedicated accountant who ensures Eclipse Softworks maintains financial accuracy and compliance while supporting strategic business decisions.",
                                    gradient: DARK_GRADIENT,
                                    linkedin: "#"
                                },
                                {
                                    initials: "SK",
                                    name: "Simphiwe Kubheka",
                                    role: "Accountant",
                                    specialty: "Financial Analysis",
                                    desc: "Simphiwe is a meticulous accountant focused on financial planning and analysis, helping Eclipse Softworks achieve sustainable growth and profitability.",
                                    gradient: DARK_GRADIENT,
                                    linkedin: "#"
                                }
                            ].map((member, i) => (
                                <motion.div
                                  key={i}
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
                                      className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-md`}
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
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{member.desc}</p>
                                    <motion.a
                                      href={member.linkedin}
                                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                                      whileHover={{ x: 5 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
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
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                            {[
                                { icon: "fa-users", title: "Collaboration", desc: "We work together across disciplines to achieve extraordinary results." },
                                { icon: "fa-lightbulb", title: "Innovation", desc: "We embrace new ideas and technologies to solve complex challenges." },
                                { icon: "fa-heart", title: "Impact", desc: "We build solutions that create real value for our clients and communities." }
                            ].map((value, i) => (
                                <motion.div
                                  key={i}
                                  className="text-center"
                                  whileHover={{ y: -5 }}
                                >
                                    <motion.i
                                      className={`fa-solid ${value.icon} text-3xl mb-3 text-gray-300`}
                                      whileHover={{
                                        scale: 1.2,
                                        color: "#ffffff",
                                        transition: { duration: 0.3 }
                                      }}
                                    ></motion.i>
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
              className="py-24 px-6 relative z-10 border-t border-white/10"
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
                      className="grid grid-cols-1 lg:grid-cols-2 gap-12"
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
                            <form className="space-y-6" onSubmit={async (e) => {
                                                e.preventDefault();
                                                setIsSubmitting(true);
                                                try {
                                                    const res = await postContact({ name: contactName, email: contactEmail, message: contactMessage });
                                                    if (res.ok) {
                                                        setToast({ type: 'success', message: 'Message sent! We will respond shortly.' });
                                                        setContactName('');
                                                        setContactEmail('');
                                                        setContactMessage('');
                                                    } else {
                                                        setToast({ type: 'error', message: 'Failed to send message. Please try again later.' });
                                                    }
                                                } catch (err) {
                                                    setToast({ type: 'error', message: 'An unexpected error occurred.' });
                                                } finally {
                                                    setIsSubmitting(false);
                                                    setTimeout(() => setToast(null), 4500);
                                                }
                                            }}>
                                <motion.div
                                  variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                                  }}
                                >
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <motion.input 
                                      type="text" 
                                      value={contactName} 
                                      onChange={(e) => setContactName(e.target.value)} 
                                      required 
                                      aria-invalid={!contactName.trim()} 
                                      aria-label="Name" 
                                      className="input w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:ring focus:border-white/30 transition-colors" 
                                      placeholder="Your Name"
                                      whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.div
                                  variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                                  }}
                                >
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <motion.input 
                                      type="email" 
                                      value={contactEmail} 
                                      onChange={(e) => setContactEmail(e.target.value)} 
                                      required 
                                      aria-invalid={!contactEmail.includes('@')} 
                                      aria-label="Email" 
                                      className="input w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:ring focus:border-white/30 transition-colors" 
                                      placeholder="you@example.com"
                                      whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.div
                                  variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
                                  }}
                                >
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <motion.textarea 
                                      value={contactMessage} 
                                      onChange={(e) => setContactMessage(e.target.value)} 
                                      required 
                                      aria-invalid={!contactMessage.trim()} 
                                      aria-label="Message" 
                                      className="w-full h-32 input bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:ring focus:border-white/30 transition-colors" 
                                      placeholder="Your message..."
                                      whileFocus={{ scale: 1.02 }}
                                    ></motion.textarea>
                                </motion.div>
                                <motion.button 
                                  type="submit" 
                                  disabled={isSubmitting || !isFormValid} 
                                  className="w-full px-6 py-3 btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 flex items-center justify-center gap-2" 
                                  aria-disabled={isSubmitting || !isFormValid}
                                  variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
                                  }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <LoadingSpinner size="sm" />
                                            Sending…
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
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
                                        <motion.i 
                                          className="fa-solid fa-envelope text-gray-400"
                                          whileHover={{ scale: 1.2, color: "#ffffff" }}
                                        ></motion.i>
                                        <span className="text-gray-300">info@eclipse-softworks.com</span>
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center gap-3"
                                      whileHover={{ x: 5 }}
                                    >
                                        <motion.i 
                                          className="fa-solid fa-phone text-gray-400"
                                          whileHover={{ scale: 1.2, color: "#ffffff" }}
                                        ></motion.i>
                                        <span className="text-gray-300">+27 (0) 82 079 1642</span>
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center gap-3"
                                      whileHover={{ x: 5 }}
                                    >
                                        <motion.i 
                                          className="fa-solid fa-location-dot text-gray-400"
                                          whileHover={{ scale: 1.2, color: "#ffffff" }}
                                        ></motion.i>
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
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
      </main>
    </div>
  );
};

export default App;