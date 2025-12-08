import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github } from 'lucide-react';
import { DARK_GRADIENT } from '../../../constants';

interface DownloadsSectionProps {
    onNav: (sectionId: string, scrollTo?: string) => void;
}

const DownloadsSection: React.FC<DownloadsSectionProps> = ({ onNav }) => {
    return (
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
                            onClick={() => onNav('contact')}
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
    );
};

export default DownloadsSection;
