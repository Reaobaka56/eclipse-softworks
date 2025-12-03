import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, Settings, BarChart3, Eye, Check } from 'lucide-react';
import { getUXService } from '../services/analytics';

interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

interface CookieConsentProps {
  onAccept?: (preferences: CookiePreferences) => void;
  onDecline?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    preferences: true,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // Initialize UX service for returning visitors who already consented
      getUXService();
    }
  }, []);

  const handleAccept = (acceptAll: boolean = false) => {
    const finalPreferences = acceptAll 
      ? { essential: true, analytics: true, preferences: true, marketing: true }
      : preferences;
    
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    localStorage.setItem('cookie-preferences', JSON.stringify(finalPreferences));
    setIsVisible(false);
    onAccept?.(finalPreferences);
    
    // Initialize analytics service
    const uxService = getUXService();
    uxService?.updateConsent(true);
    
    // Update Google Analytics consent
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.('consent', 'update', {
        analytics_storage: finalPreferences.analytics ? 'granted' : 'denied',
        functionality_storage: finalPreferences.preferences ? 'granted' : 'denied',
        ad_storage: finalPreferences.marketing ? 'granted' : 'denied',
        ad_personalization: finalPreferences.marketing ? 'granted' : 'denied',
        ad_user_data: finalPreferences.marketing ? 'granted' : 'denied'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    localStorage.setItem('cookie-preferences', JSON.stringify({ 
      essential: true, 
      analytics: false, 
      preferences: false, 
      marketing: false 
    }));
    setIsVisible(false);
    onDecline?.();
    
    // Revoke consent in analytics service
    const uxService = getUXService();
    uxService?.updateConsent(false);
  };

  const handleClose = () => {
    // Treat close as decline for GDPR compliance
    handleDecline();
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Cannot toggle essential cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 border border-white/10 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Cookie className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Cookie Preferences</h3>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close cookie consent"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies in accordance with our{' '}
                <a href="/privacy" className="text-sky-400 hover:underline">Privacy Policy</a>.
              </p>

              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-4 p-4 bg-white/5 rounded-lg"
                >
                  <div className="space-y-4">
                    {/* Essential Cookies - Always On */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <Shield className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">Essential Cookies</p>
                          <p className="text-xs text-gray-500">Required for site functionality. Cannot be disabled.</p>
                        </div>
                      </div>
                      <div className="w-10 h-6 bg-sky-500/30 rounded-full flex items-center px-1 cursor-not-allowed">
                        <div className="w-4 h-4 bg-sky-400 rounded-full ml-auto" />
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <BarChart3 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">Analytics Cookies</p>
                          <p className="text-xs text-gray-500">Help us understand how visitors interact with our site (page views, scroll depth, clicks).</p>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics ? 'bg-violet-500/30' : 'bg-white/10'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full transition-all ${
                          preferences.analytics ? 'bg-violet-400 ml-auto' : 'bg-gray-500'
                        }`} />
                      </button>
                    </div>

                    {/* Preferences Cookies */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <Settings className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">Preference Cookies</p>
                          <p className="text-xs text-gray-500">Remember your settings, theme preferences, and personalize your experience.</p>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePreference('preferences')}
                        className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.preferences ? 'bg-emerald-500/30' : 'bg-white/10'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full transition-all ${
                          preferences.preferences ? 'bg-emerald-400 ml-auto' : 'bg-gray-500'
                        }`} />
                      </button>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <Eye className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">Marketing Cookies</p>
                          <p className="text-xs text-gray-500">Used for targeted advertising and measuring ad effectiveness.</p>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.marketing ? 'bg-amber-500/30' : 'bg-white/10'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full transition-all ${
                          preferences.marketing ? 'bg-amber-400 ml-auto' : 'bg-gray-500'
                        }`} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full sm:w-auto px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  {showDetails ? 'Hide Options' : 'Customize'}
                </button>
                <div className="flex gap-3 w-full sm:w-auto sm:ml-auto">
                  <button
                    onClick={handleDecline}
                    className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Decline All
                  </button>
                  {showDetails && (
                    <button
                      onClick={() => handleAccept(false)}
                      className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Save Choices
                    </button>
                  )}
                  <button
                    onClick={() => handleAccept(true)}
                    className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-white bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 rounded-lg transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
