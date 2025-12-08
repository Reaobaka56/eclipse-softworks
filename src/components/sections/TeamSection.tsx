import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { LEADERSHIP_TEAM, DEVELOPMENT_TEAM, BUSINESS_TEAM, DARK_GRADIENT } from '../../../constants';
import DynamicIcon from '../DynamicIcon';

const TeamSection: React.FC = () => {
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
    );
};

export default TeamSection;
