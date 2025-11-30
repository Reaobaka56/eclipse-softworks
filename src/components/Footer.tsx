import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';

const Footer: React.FC<{ onNav: (id: string) => void }> = ({ onNav }) => {
  return (
    <footer role="contentinfo" className="border-t border-white/10 bg-black py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
              <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-bold tracking-widest uppercase text-sm">Eclipse Softworks</span>
              </div>
              <p className="text-gray-500 text-xs max-w-xs leading-relaxed mb-6">
                  Developing the infrastructure for the next generation of artificial intelligence.
              </p>
              <div className="flex gap-4 items-center">
                  <a href="mailto:info@eclipse-softworks.com" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="Email us">
                      <i className="fa-solid fa-envelope text-lg"></i>
                  </a>
                  <a href="tel:+270820791642" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="Call us">
                      <i className="fa-solid fa-phone text-lg"></i>
                  </a>
                  <a href="https://linkedin.com/company/eclipse-softworks" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin text-lg"></i>
                  </a>
                                    <button
                                        onClick={() => onNav('contact')}
                                        className="ml-4 btn-primary px-3 py-1 text-xs"
                                        aria-label="Request Architecture Consultation"
                                    >
                                        Request Architecture
                                </button>
                            </div>
          </div>
          <div className="flex gap-16">
              <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Services</h4>
                  <ul className="space-y-3 text-sm text-gray-500">
                      <li><button onClick={() => onNav('services')} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 transition-transform hover:-translate-y-0.5">AI Development</button></li>
                      <li><button onClick={() => onNav('services')} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 transition-transform hover:-translate-y-0.5">ML Infrastructure</button></li>
                      <li><button onClick={() => onNav('services')} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 transition-transform hover:-translate-y-0.5">Data Analytics</button></li>
                      <li><button onClick={() => onNav('services')} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 transition-transform hover:-translate-y-0.5">Consulting</button></li>
                  </ul>
              </div>
              <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Company</h4>
                  <ul className="space-y-3 text-sm text-gray-500">
                      {NAV_ITEMS.filter(i => i.id !== 'home').map((item) => (
                          <li key={item.id}><button onClick={() => onNav(item.id)} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 transition-transform hover:-translate-y-0.5">{item.label}</button></li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono gap-4">
              <p>&copy; 2025 Eclipse Softworks. All rights reserved. <span className="hidden md:inline">—</span> <a className="text-gray-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" href="https://www.eclipse-softworks.com/" target="_blank" rel="noopener noreferrer">Legacy Website</a></p>
          <div className="flex gap-4 items-center">
              <a href="/privacy.html" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="Privacy Policy">Privacy Policy</a>
              <a href="/terms.html" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="Terms of Service">Terms of Service</a>
              <a href="/privacy.html#cookie-policy" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="Cookie Policy">Cookie Policy</a>
              <div className="ml-4 flex gap-3">
                  <a href="https://linkedin.com/company/eclipse-softworks" aria-label="LinkedIn" className="text-gray-400 hover:text-white" rel="noopener noreferrer"><i aria-hidden="true" className="fa-brands fa-linkedin"></i></a>
                  <a href="https://twitter.com/eclipsesw" aria-label="Twitter" className="text-gray-400 hover:text-white" rel="noopener noreferrer"><i aria-hidden="true" className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://github.com/eclipse-softworks" aria-label="GitHub" className="text-gray-400 hover:text-white" rel="noopener noreferrer"><i aria-hidden="true" className="fa-brands fa-github"></i></a>
              </div>
          </div>
      </div>

      {/* Back to Top Button */}
    <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 transition-transform hover:scale-110"
        aria-label="Back to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </motion.button>
    </footer>
  );
};

export default Footer;
