import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Book, Code2, Rocket, Shield,
  ChevronRight, Search, Copy, Check, ExternalLink, Menu, X,
  Key, Webhook, Cpu,
  MessageSquare, Github, Home
} from 'lucide-react';

type DocCategory = 'getting-started' | 'api-reference' | 'authentication' | 'models' | 'webhooks' | 'security';

interface DocSection {
  id: string;
  title: string;
  category: DocCategory;
  content: React.ReactNode;
  code?: string;
}

const categoryConfig: Record<DocCategory, { icon: React.ElementType; label: string; color: string }> = {
  'getting-started': { icon: Rocket, label: 'Getting Started', color: 'text-emerald-400' },
  'api-reference': { icon: Code2, label: 'API Reference', color: 'text-blue-400' },
  'authentication': { icon: Key, label: 'Authentication', color: 'text-purple-400' },
  'models': { icon: Cpu, label: 'Models', color: 'text-orange-400' },
  'webhooks': { icon: Webhook, label: 'Webhooks', color: 'text-cyan-400' },
  'security': { icon: Shield, label: 'Security', color: 'text-red-400' },
};

const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative group rounded-lg overflow-hidden bg-black/80 border border-white/20">
      <div className="flex items-center justify-between px-4 py-2 bg-white/15 border-b border-white/20">
        <span className="text-xs text-gray-500 font-mono">{language}</span>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  );
};

const docSections: DocSection[] = [
  {
    id: 'quickstart',
    title: 'Quick Start',
    category: 'getting-started',
    content: (
      <>
        <p className="text-gray-400 mb-4">
          Get up and running with Eclipse Softworks in under 5 minutes. This guide will walk you through 
          creating your first AI model deployment.
        </p>
        <h4 className="text-white font-semibold mb-3">Prerequisites</h4>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>An Eclipse Softworks account (sign up for free)</li>
          <li>Python 3.8+ installed</li>
          <li>Basic familiarity with REST APIs</li>
        </ul>
        <h4 className="text-white font-semibold mb-3">1. Install the SDK</h4>
      </>
    ),
    code: `# Install the Eclipse Softworks Python SDK
pip install eclipse-sdk

# Or with npm for Node.js
npm install @eclipse-softworks/sdk`
  },
  {
    id: 'installation',
    title: 'Installation',
    category: 'getting-started',
    content: (
      <>
        <p className="text-gray-400 mb-4">
          The Eclipse SDK is available for multiple languages and platforms. Choose your preferred 
          installation method below.
        </p>
      </>
    ),
    code: `# Python
pip install eclipse-sdk

# Node.js
npm install @eclipse-softworks/sdk

# Go
go get github.com/eclipse-softworks/sdk-go

# Ruby
gem install eclipse-sdk

# Java (Maven)
<dependency>
  <groupId>com.eclipse</groupId>
  <artifactId>eclipse-sdk</artifactId>
  <version>2.5.0</version>
</dependency>`
  },
  {
    id: 'api-overview',
    title: 'API Overview',
    category: 'api-reference',
    content: (
      <>
        <p className="text-gray-400 mb-4">
          The Eclipse API is organized around REST. Our API has predictable resource-oriented URLs, 
          accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP 
          response codes, authentication, and verbs.
        </p>
        <h4 className="text-white font-semibold mb-3">Base URL</h4>
        <div className="bg-black/70 rounded-lg p-3 border border-white/20 mb-6">
          <code className="text-sm text-emerald-400 font-mono">https://api.eclipsesoftworks.com/v2</code>
        </div>
        <h4 className="text-white font-semibold mb-3">Request Format</h4>
      </>
    ),
    code: `curl https://api.eclipsesoftworks.com/v2/models \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "my-model",
    "type": "classification"
  }'`
  },
  {
    id: 'endpoints',
    title: 'Endpoints',
    category: 'api-reference',
    content: (
      <>
        <p className="text-gray-400 mb-6">
          Available API endpoints for managing models, predictions, and resources.
        </p>
        <div className="space-y-3">
          {[
            { method: 'GET', path: '/models', desc: 'List all models' },
            { method: 'POST', path: '/models', desc: 'Create a new model' },
            { method: 'GET', path: '/models/:id', desc: 'Retrieve a model' },
            { method: 'DELETE', path: '/models/:id', desc: 'Delete a model' },
            { method: 'POST', path: '/predict', desc: 'Run inference' },
            { method: 'GET', path: '/jobs', desc: 'List training jobs' },
            { method: 'POST', path: '/jobs', desc: 'Create training job' },
          ].map((endpoint, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-black/30 border border-white/20">
              <span className={`px-2 py-1 text-xs font-bold rounded ${
                endpoint.method === 'GET' ? 'bg-emerald-400/10 text-emerald-400' :
                endpoint.method === 'POST' ? 'bg-blue-400/10 text-blue-400' :
                'bg-red-400/10 text-red-400'
              }`}>
                {endpoint.method}
              </span>
              <code className="text-sm text-white font-mono flex-1">{endpoint.path}</code>
              <span className="text-sm text-gray-500">{endpoint.desc}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'api-keys',
    title: 'API Keys',
    category: 'authentication',
    content: (
      <>
        <p className="text-gray-400 mb-4">
          Authenticate your API requests using API keys. You can create and manage API keys in your 
          dashboard settings.
        </p>
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mb-6">
          <p className="text-sm text-orange-400">
            <strong>Security Tip:</strong> Never expose your API keys in client-side code or public 
            repositories. Use environment variables to store keys securely.
          </p>
        </div>
      </>
    ),
    code: `# Set your API key as an environment variable
export ECLIPSE_API_KEY="your-api-key"

# Use in your code
import os
from eclipse import Eclipse

client = Eclipse(api_key=os.environ["ECLIPSE_API_KEY"])`
  },
  {
    id: 'oauth',
    title: 'OAuth 2.0',
    category: 'authentication',
    content: (
      <>
        <p className="text-gray-400 mb-4">
          For applications requiring user-level access, we support OAuth 2.0 with PKCE flow. 
          This is ideal for building integrations that act on behalf of users.
        </p>
        <h4 className="text-white font-semibold mb-3">OAuth Flow</h4>
        <ol className="list-decimal list-inside text-gray-400 mb-6 space-y-2">
          <li>Redirect user to authorization URL</li>
          <li>User grants permission</li>
          <li>Exchange authorization code for access token</li>
          <li>Use access token for API requests</li>
        </ol>
      </>
    ),
    code: `# Authorization URL
https://auth.eclipsesoftworks.com/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_REDIRECT_URI&
  response_type=code&
  scope=read:models write:models&
  code_challenge=YOUR_CODE_CHALLENGE&
  code_challenge_method=S256`
  },
  {
    id: 'model-types',
    title: 'Model Types',
    category: 'models',
    content: (
      <>
        <p className="text-gray-400 mb-6">
          Eclipse supports various model types for different machine learning tasks.
        </p>
        <div className="grid gap-4">
          {[
            { name: 'Classification', desc: 'Categorize inputs into predefined classes', icon: '🎯' },
            { name: 'Regression', desc: 'Predict continuous numerical values', icon: '📈' },
            { name: 'NLP', desc: 'Natural language processing and text analysis', icon: '📝' },
            { name: 'Computer Vision', desc: 'Image and video analysis', icon: '👁️' },
            { name: 'Time Series', desc: 'Forecast future values from historical data', icon: '⏱️' },
            { name: 'Recommendation', desc: 'Personalized content and product suggestions', icon: '💡' },
          ].map((model, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-black/30 border border-white/5">
              <span className="text-2xl">{model.icon}</span>
              <div>
                <h5 className="text-white font-semibold">{model.name}</h5>
                <p className="text-sm text-gray-500">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'webhook-setup',
    title: 'Webhook Setup',
    category: 'webhooks',
    content: (
      <>
        <p className="text-gray-400 mb-4">
          Webhooks allow you to receive real-time notifications when events occur in your account, 
          such as training job completion or model deployment status changes.
        </p>
        <h4 className="text-white font-semibold mb-3">Supported Events</h4>
        <div className="space-y-2 mb-6">
          {[
            'model.created', 'model.updated', 'model.deleted',
            'job.started', 'job.completed', 'job.failed',
            'deployment.ready', 'deployment.unhealthy'
          ].map(event => (
            <div key={event} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/20 mr-2 mb-2">
              <code className="text-xs text-cyan-400 font-mono">{event}</code>
            </div>
          ))}
        </div>
      </>
    ),
    code: `# Webhook payload example
{
  "id": "evt_1234567890",
  "type": "job.completed",
  "created_at": "2025-12-01T10:30:00Z",
  "data": {
    "job_id": "job_abc123",
    "model_id": "model_xyz789",
    "status": "completed",
    "metrics": {
      "accuracy": 0.94,
      "f1_score": 0.92
    }
  }
}`
  },
  {
    id: 'security-best-practices',
    title: 'Security Best Practices',
    category: 'security',
    content: (
      <>
        <p className="text-gray-400 mb-6">
          Follow these best practices to ensure your integration with Eclipse remains secure.
        </p>
        <div className="space-y-4">
          {[
            { title: 'Use Environment Variables', desc: 'Never hardcode API keys in your application code.' },
            { title: 'Rotate Keys Regularly', desc: 'Create new API keys and deprecate old ones periodically.' },
            { title: 'Use Minimum Permissions', desc: 'Only request the OAuth scopes your application needs.' },
            { title: 'Verify Webhooks', desc: 'Always verify webhook signatures before processing.' },
            { title: 'Enable 2FA', desc: 'Require two-factor authentication for all team members.' },
            { title: 'Monitor Access Logs', desc: 'Review API access logs for suspicious activity.' },
          ].map((practice, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-black/30 border border-white/20">
              <div className="w-6 h-6 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-emerald-400" />
              </div>
              <div>
                <h5 className="text-white font-semibold text-sm">{practice.title}</h5>
                <p className="text-xs text-gray-500">{practice.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

const DocsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>('getting-started');
  const [selectedSection, setSelectedSection] = useState('quickstart');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  // Filter sections based on search query within the selected category
  const getFilteredSections = (category: DocCategory) => docSections.filter(section => 
    section.category === category &&
    (searchQuery === '' || 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const currentSection = docSections.find(s => s.id === selectedSection);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/15"
            >
              {mobileNavOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
            </button>
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Home size={18} />
              </Link>
              <ChevronRight size={14} className="text-gray-600" />
              <div className="flex items-center gap-2">
                <Book size={20} className="text-white" />
                <span className="text-lg font-bold text-white">Documentation</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/15 border border-white/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/20"
              />
            </div>
            <a 
              href="https://github.com/eclipse-softworks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>
      
      <div className="pt-20 flex">
        {/* Sidebar */}
        <AnimatePresence>
          {(mobileNavOpen || typeof window !== 'undefined') && (
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-72 bg-black/95 lg:bg-transparent border-r border-white/20 overflow-y-auto z-40 ${
                mobileNavOpen ? 'block' : 'hidden lg:block'
              }`}
            >
              <nav className="p-6 space-y-6">
                {(Object.keys(categoryConfig) as DocCategory[]).map(category => {
                  const config = categoryConfig[category];
                  const Icon = config.icon;
                  const sections = getFilteredSections(category);
                  
                  return (
                    <div key={category}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                          if (sections.length > 0) {
                            setSelectedSection(sections[0].id);
                          }
                        }}
                        className={`flex items-center gap-2 w-full text-left mb-2 ${
                          selectedCategory === category ? 'text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Icon size={16} className={selectedCategory === category ? config.color : ''} />
                        <span className="font-semibold text-sm">{config.label}</span>
                      </button>
                      
                      {selectedCategory === category && (
                        <motion.div 
                          className="ml-6 space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          {sections.map(section => (
                            <button
                              key={section.id}
                              onClick={() => {
                                setSelectedSection(section.id);
                                setMobileNavOpen(false);
                              }}
                              className={`block w-full text-left py-1.5 px-3 rounded-lg text-sm transition-colors ${
                                selectedSection === section.id
                                  ? 'bg-white/10 text-white'
                                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/15'
                              }`}
                            >
                              {section.title}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
        
        {/* Main Content */}
        <main className="flex-1 min-w-0 p-6 lg:p-12">
          <div className="max-w-3xl">
            {currentSection && (
              <motion.div
                key={currentSection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span>{categoryConfig[currentSection.category].label}</span>
                  <ChevronRight size={14} />
                  <span className="text-white">{currentSection.title}</span>
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-6">{currentSection.title}</h1>
                
                <div className="prose prose-invert max-w-none">
                  {currentSection.content}
                </div>
                
                {currentSection.code && (
                  <div className="mt-6">
                    <CodeBlock code={currentSection.code} />
                  </div>
                )}
                
                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/20">
                  <div>
                    {/* Previous */}
                  </div>
                  <a 
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Edit this page <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </main>
        
        {/* Right Sidebar - Table of Contents */}
        <aside className="hidden xl:block w-64 sticky top-20 h-[calc(100vh-5rem)] border-l border-white/20 p-6">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">On This Page</h4>
          <div className="space-y-2">
            <a href="#" className="block text-sm text-white">Overview</a>
            <a href="#" className="block text-sm text-gray-500 hover:text-gray-300">Prerequisites</a>
            <a href="#" className="block text-sm text-gray-500 hover:text-gray-300">Installation</a>
            <a href="#" className="block text-sm text-gray-500 hover:text-gray-300">Usage</a>
          </div>
          
          <div className="mt-8 p-4 rounded-lg bg-white/15 border border-white/20">
            <h5 className="text-sm font-semibold text-white mb-2">Need Help?</h5>
            <p className="text-xs text-gray-400 mb-3">
              Join our community for support and discussions.
            </p>
            <a 
              href="#"
              className="flex items-center gap-2 text-xs text-white hover:underline"
            >
              <MessageSquare size={14} />
              Discord Community
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DocsPage;
