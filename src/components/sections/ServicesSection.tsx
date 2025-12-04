import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Smartphone, Code } from 'lucide-react';
import LoadingSpinner from '../LoadingSpinner';

// Lazy load components
const MLInfrastructureCard = lazy(() => import('../MLInfrastructureCard'));
const ServiceBadge = lazy(() => import('../ServiceBadge'));

interface ServicesSectionProps {
    onNav: (sectionId: string, scrollTo?: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNav }) => {
    return (
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
                            <Suspense fallback={<div className="w-16 h-6 bg-white/10 rounded animate-pulse" />}>
                                <ServiceBadge icon="python" label="ML" />
                            </Suspense>
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
                            <Suspense fallback={<div className="w-16 h-6 bg-white/10 rounded animate-pulse" />}>
                                <ServiceBadge icon="react" label="React" />
                            </Suspense>
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
                            <Suspense fallback={<div className="w-16 h-6 bg-white/10 rounded animate-pulse" />}>
                                <ServiceBadge icon="mobile" label="Mobile" />
                            </Suspense>
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
                                    <Suspense fallback={<div className="w-16 h-6 bg-white/10 rounded animate-pulse" />}>
                                        <ServiceBadge icon="terminal" label="SaaS" />
                                    </Suspense>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    We tailor software solutions for your specific business needs, whether it's an internal system or a SaaS product.
                                </p>
                                <motion.button
                                    onClick={() => onNav('contact')}
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
                            <MLInfrastructureCard onRequest={() => onNav('contact')} />
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
    );
};

export default ServicesSection;
