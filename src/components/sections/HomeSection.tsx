import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import {
  COMPANY_STATS, SERVICES, TESTIMONIALS
} from '../../../constants';
import LoadingSpinner from '../LoadingSpinner';
import NeuralCard from '../NeuralCard';

// Lazy load heavy components
const TrustSignals = lazy(() => import('../TrustSignals'));
const EnterpriseCTA = lazy(() => import('../EnterpriseCTA'));
const DemoCTA = lazy(() => import('../DemoCTA'));

interface HomeSectionProps {
  onNav: (sectionId: string, scrollTo?: string) => void;
  onOpenDemo: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNav, onOpenDemo }) => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 px-6 block animate-slide-down">
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
                onClick={() => onNav('contact')}
                className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                aria-label="Start a project - Contact us"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
              <motion.button
                onClick={() => onNav('services')}
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
                onClick={() => onNav('projects')}
                className="text-sm font-bold uppercase tracking-widest border-b border-white hover:border-transparent transition-colors pb-1"
                whileHover={{ scale: 1.05 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => onNav('downloads')}
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

      {/* Featured Services Preview - Home */}
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
                  onClick={() => onNav('services', service.title.toLowerCase().replace(/\s+/g, '-'))}
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
              onClick={() => onNav('services')}
              className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section - Home */}
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

      {/* Call to Action Section - Home */}
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
              onClick={() => onNav('contact')}
              className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              onClick={() => onNav('about')}
              className="py-3 px-8 border border-white/30 hover:border-white transition-colors text-sm font-bold uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Signals Section - Home */}
      <Suspense fallback={<div className="py-16" />}>
        <TrustSignals />
      </Suspense>

      {/* Enterprise CTA Section - Home */}
      <Suspense fallback={<div className="py-16" />}>
        <EnterpriseCTA />
      </Suspense>

      {/* Demo CTA Section - Home */}
      <Suspense fallback={<div className="py-16" />}>
        <DemoCTA onOpenDemo={onOpenDemo} />
      </Suspense>
    </>
  );
};

export default HomeSection;
