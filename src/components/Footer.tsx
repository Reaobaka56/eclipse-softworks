import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Github, ArrowUp, Activity } from 'lucide-react';

const Footer: React.FC<{ onNav: (id: string) => void }> = ({ onNav }) => {
  return (
    <footer role="contentinfo" className="border-t border-white/20 bg-black py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="/img/logo.svg" 
                    alt="Eclipse Softworks Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-bold tracking-widest uppercase text-sm">Eclipse Softworks</span>
              </div>
              <p className="text-gray-500 text-xs max-w-xs leading-relaxed mb-6">
                  Developing the infrastructure for the next generation of artificial intelligence.
              </p>
              <div className="flex gap-4 items-center mb-6">
                  <a href="mailto:info@eclipse-softworks.com" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="Email us">
                      <Mail size={20} />
                  </a>
                  <a href="tel:+270820791642" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="Call us">
                      <Phone size={20} />
                  </a>
                  <a href="https://linkedin.com/company/eclipse-softworks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="LinkedIn">
                      <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/eclipse-softworks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2" aria-label="GitHub">
                      <Github size={20} />
                  </a>
              </div>
              {/* System Status */}
              <Link to="/status" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-sm text-emerald-400 hover:bg-emerald-400/20 transition-colors">
                  <Activity size={14} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  All Systems Operational
              </Link>
          </div>

          {/* Services Column */}
          <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                  <li><button onClick={() => onNav('services')} className="hover:text-white transition-colors focus:outline-none">AI Development</button></li>
                  <li><button onClick={() => onNav('services')} className="hover:text-white transition-colors focus:outline-none">ML Infrastructure</button></li>
                  <li><button onClick={() => onNav('services')} className="hover:text-white transition-colors focus:outline-none">Data Analytics</button></li>
                  <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link to="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                  <li><Link to="/status" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
          </div>

          {/* Company Column */}
          <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                  <li><button onClick={() => onNav('about')} className="hover:text-white transition-colors focus:outline-none">About</button></li>
                  <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link to="/press" className="hover:text-white transition-colors">Press Kit</Link></li>
                  <li><button onClick={() => onNav('contact')} className="hover:text-white transition-colors focus:outline-none">Contact</button></li>
              </ul>
          </div>

          {/* Resources Column */}
          <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                  <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
                  <li><a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="/privacy.html#cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a></li>
                  <li><button onClick={() => {
                      localStorage.removeItem('cookie-consent');
                      window.location.reload();
                  }} className="hover:text-white transition-colors">Manage Cookies</button></li>
              </ul>
          </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono gap-4">
          <p>&copy; 2025 Eclipse Softworks. All rights reserved.</p>
          <div className="flex gap-4 items-center">
              <a href="https://linkedin.com/company/eclipse-softworks" aria-label="LinkedIn" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" /></a>
              <a href="https://twitter.com/eclipsesw" aria-label="Twitter" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><Twitter size={16} aria-hidden="true" /></a>
              <a href="https://github.com/eclipse-softworks" aria-label="GitHub" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" /></a>
          </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2"
        aria-label="Back to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
