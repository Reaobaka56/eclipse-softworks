import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import DynamicIcon from '../DynamicIcon';
import TechStack from '../TechStack';

interface SolutionsSectionProps {
    onNav: (sectionId: string, scrollTo?: string) => void;
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNav }) => {
    return (
        <>
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
                                    onClick={() => onNav('contact')}
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
                                <DynamicIcon name="wifi" size={28} className="text-gray-300 group-hover:text-white transition-colors" />
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
                                <DynamicIcon name="link" size={28} className="text-gray-300 group-hover:text-white transition-colors" />
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
                            onClick={() => onNav('contact')}
                            className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Empower Your Business Section - Shown on Home or Solutions */}
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
                                <button onClick={() => onNav('about')} className="inline-block px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold uppercase tracking-wider">
                                    Join Our Mission
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Technology Stack */}
                    <TechStack />
                </div>
            </section>
        </>
    );
};

export default SolutionsSection;
