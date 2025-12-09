import React from 'react';
import { motion } from 'framer-motion';
import { Star, Github, Book } from 'lucide-react';
import { GITHUB_PROJECTS } from '../../../constants';
import DynamicIcon from '../DynamicIcon';

const ProjectsSection: React.FC = () => {
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
                            {proj.docs && (
                                <a
                                    href={proj.docs}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mt-auto"
                                >
                                    <Book size={16} />
                                    Docs
                                </a>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
