import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, BarChart3, Settings, Lock, Info } from 'lucide-react';

interface DataCollectedItem {
  category: string;
  icon: React.ElementType;
  color: string;
  items: string[];
  purpose: string;
}

const dataCollected: DataCollectedItem[] = [
  {
    category: 'Usage Analytics',
    icon: BarChart3,
    color: 'violet',
    items: ['Pages visited', 'Time on page', 'Scroll depth', 'Click interactions'],
    purpose: 'To understand which content is most helpful and improve site navigation'
  },
  {
    category: 'Preferences',
    icon: Settings,
    color: 'emerald',
    items: ['Theme preference', 'Visited sections', 'Dismissed banners', 'Session duration'],
    purpose: 'To personalize your experience and remember your choices'
  },
  {
    category: 'Technical',
    icon: Eye,
    color: 'sky',
    items: ['Device type', 'Screen resolution', 'Browser language', 'Referrer source'],
    purpose: 'To optimize the site for different devices and understand traffic sources'
  }
];

const PrivacyDashboard: React.FC = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const hasConsent = localStorage.getItem('cookie-consent') === 'accepted';
  const consentDate = localStorage.getItem('cookie-consent-date');
  const preferences = localStorage.getItem('cookie-preferences');
  const parsedPreferences = preferences ? JSON.parse(preferences) : null;

  const handleClearData = () => {
    // Clear all stored data
    localStorage.removeItem('eclipse-preferences');
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-date');
    localStorage.removeItem('cookie-preferences');
    
    // Clear cookies
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (name.startsWith('eclipse')) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    });

    window.location.reload();
  };

  const handleUpdateConsent = () => {
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  return (
    <div className="glass-card p-6 border border-white/10">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sky-500/20 rounded-lg">
            <Shield className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Your Privacy Dashboard</h3>
            <p className="text-sm text-gray-400">View and manage your data preferences</p>
          </div>
        </div>
      </div>

      {/* Consent Status */}
      <div className="p-4 bg-white/5 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-white">Consent Status</span>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${
            hasConsent 
              ? 'bg-emerald-500/20 text-emerald-400' 
              : 'bg-gray-500/20 text-gray-400'
          }`}>
            {hasConsent ? 'Accepted' : 'Not Given'}
          </span>
        </div>
        {consentDate && (
          <p className="text-xs text-gray-500 mt-2">
            Given on: {new Date(consentDate).toLocaleDateString()}
          </p>
        )}
        {parsedPreferences && (
          <div className="mt-3 flex flex-wrap gap-2">
            {Object.entries(parsedPreferences).map(([key, value]) => (
              <span 
                key={key}
                className={`px-2 py-0.5 text-xs rounded ${
                  value ? 'bg-sky-500/20 text-sky-400' : 'bg-gray-500/20 text-gray-500'
                }`}
              >
                {key}: {value ? 'On' : 'Off'}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* What We Collect */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full flex items-center justify-between p-4 bg-white/5 rounded-lg mb-4 hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Info className="w-4 h-4 text-sky-400" />
          <span className="text-sm text-white">What data do we collect?</span>
        </div>
        <motion.span
          animate={{ rotate: showDetails ? 180 : 0 }}
          className="text-gray-400"
        >
          ▼
        </motion.span>
      </button>

      {showDetails && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="space-y-4 mb-6"
        >
          {dataCollected.map((category, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <category.icon className={`w-4 h-4 text-${category.color}-400`} />
                <span className="text-sm font-medium text-white">{category.category}</span>
              </div>
              <ul className="space-y-1 mb-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic">{category.purpose}</p>
            </div>
          ))}

          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <p className="text-xs text-emerald-400">
              <strong>We never:</strong> Sell your data, share with third parties for marketing, 
              store personal identifiable information, or track you across other websites.
            </p>
          </div>
        </motion.div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleUpdateConsent}
          className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors"
        >
          Update Preferences
        </button>
        <button
          onClick={handleClearData}
          className="flex-1 px-4 py-2.5 text-sm font-medium text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors"
        >
          Clear All My Data
        </button>
      </div>
    </div>
  );
};

export default PrivacyDashboard;
