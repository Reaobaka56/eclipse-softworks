import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';
import TerminalSearch from './TerminalSearch';
import { Search, X, Menu } from 'lucide-react';

const Header: React.FC<{ active: string; onNav: (section: string, scrollTo?: string) => void; }> = ({ active, onNav }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileOpen) setIsMobileOpen(false);
        };
        if (isMobileOpen) {
            document.addEventListener('keydown', onKey);
            // Focus first button in mobile menu after opening
            setTimeout(() => {
                const first = menuRef.current?.querySelector('button');
                if (first) (first as HTMLButtonElement).focus();
            }, 50);
        }
        return () => document.removeEventListener('keydown', onKey);
    }, [isMobileOpen]);

    return (
        <>
            <nav className="fixed w-full z-50 glass-panel">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 rounded" role="button" tabIndex={0} aria-label="Eclipse homepage" onClick={() => onNav('home')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNav('home'); }}>
                        <img
                            src="/img/logo.svg"
                            alt="Eclipse Softworks Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <span className="font-bold text-lg tracking-[0.15em] uppercase">Eclipse</span>
                    </div>

                    <div role="navigation" aria-label="Main Navigation" className="hidden md:flex items-center gap-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNav(item.id)}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNav(item.id); }}
                                aria-current={active === item.id ? 'page' : undefined}
                                className={`text-xs font-medium uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 ${active === item.id ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div
                            className="hidden md:flex items-center gap-2 bg-black/70 border border-white/20 text-white/90 rounded px-3 py-1 font-mono text-sm cursor-pointer hover:bg-black/50 transition-colors"
                            role="button"
                            onClick={() => setSearchOpen(true)}
                            title="Search (press '/')"
                        >
                            <span className="text-sm text-gray-300">$</span>
                            <span className="text-gray-400"> Search the site (Press '/') </span>
                        </div>
                        <button
                            onClick={() => onNav('contact')}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white hover:bg-white/20 transition-colors text-xs font-bold uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
                        >
                            Get Started
                        </button>
                    </div>
                    <div className="md:hidden flex items-center gap-2">
                        <button aria-label="Toggle mobile menu" aria-controls="mobile-menu" aria-expanded={isMobileOpen} className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <div aria-hidden className="fixed inset-0 top-20 bg-black/70 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />
                    )}
                    {isMobileOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            ref={menuRef}
                            className="md:hidden border-t border-white/20 bg-black/90 backdrop-blur-xl absolute top-20 w-full overflow-hidden z-50"
                        >
                            <div className="flex flex-col p-4 gap-4">
                                {NAV_ITEMS.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => { onNav(item.id); setIsMobileOpen(false); }}
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onNav(item.id); setIsMobileOpen(false); } }}
                                        className="text-sm text-left text-gray-300 uppercase tracking-widest hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 py-2"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <button
                                    onClick={() => { setSearchOpen(true); setIsMobileOpen(false); }}
                                    className="text-sm text-left text-gray-300 uppercase tracking-widest hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 py-2 flex items-center gap-2"
                                >
                                    <Search size={16} />
                                    Search
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <TerminalSearch onNavigate={onNav} isOpen={searchOpen} onRequestClose={() => setSearchOpen(false)} onRequestOpen={() => setSearchOpen(true)} />
        </>
    );
};

export default Header;
