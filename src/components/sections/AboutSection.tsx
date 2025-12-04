import React from 'react';
import { Star, Github, CheckCircle } from 'lucide-react';
import {
    COMPANY_VALUES, COMPANY_MILESTONES, GITHUB_PROJECTS,
    TESTIMONIALS, RESOURCES, WHY_CHOOSE_US
} from '../../../constants';
import DynamicIcon from '../DynamicIcon';
import NeuralCard from '../NeuralCard';
import StatsCounter from '../StatsCounter';

interface AboutSectionProps {
    onNav: (sectionId: string, scrollTo?: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNav }) => {
    return (
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
                        {TESTIMONIALS.slice(0, 3).map((t) => (
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
                            <button onClick={() => onNav('contact')} className="inline-block px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold uppercase tracking-wider">
                                Start Your Project Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
