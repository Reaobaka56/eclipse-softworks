import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Image, FileText, Palette, Copy, Check,
  ExternalLink, Mail, Newspaper, Camera,
  Globe, Twitter, Linkedin, ChevronDown
} from 'lucide-react';

interface AssetCategory {
  id: string;
  name: string;
  description: string;
  assets: Asset[];
}

interface Asset {
  name: string;
  preview: string;
  formats: string[];
  downloadUrl: string;
}

const brandColors = [
  { name: 'Eclipse Black', hex: '#000000', rgb: 'rgb(0, 0, 0)' },
  { name: 'Pure White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)' },
  { name: 'Midnight Blue', hex: '#1a1a2e', rgb: 'rgb(26, 26, 46)' },
  { name: 'Electric Blue', hex: '#3b82f6', rgb: 'rgb(59, 130, 246)' },
  { name: 'Neon Purple', hex: '#8b5cf6', rgb: 'rgb(139, 92, 246)' },
  { name: 'Cyber Cyan', hex: '#06b6d4', rgb: 'rgb(6, 182, 212)' },
  { name: 'Success Green', hex: '#10b981', rgb: 'rgb(16, 185, 129)' },
  { name: 'Gray 400', hex: '#9ca3af', rgb: 'rgb(156, 163, 175)' },
];

const assetCategories: AssetCategory[] = [
  {
    id: 'logos',
    name: 'Logos',
    description: 'Official Eclipse Softworks logos in various formats',
    assets: [
      { name: 'Logo Color', preview: '/img/logo.svg', formats: ['SVG', 'PNG'], downloadUrl: '/img/logo.svg' },
      { name: 'Logo B&W', preview: '/img/logo-bw.svg', formats: ['SVG', 'PNG'], downloadUrl: '/img/logo-bw.svg' },
      { name: 'Logo 512px', preview: '/img/logo-512.png', formats: ['PNG'], downloadUrl: '/img/logo-512.png' },
      { name: 'Logo 192px', preview: '/img/logo-192.png', formats: ['PNG'], downloadUrl: '/img/logo-192.png' },
    ]
  },
  {
    id: 'product',
    name: 'Product Screenshots',
    description: 'High-resolution screenshots of our platform',
    assets: [
      { name: 'Dashboard Overview', preview: '📊', formats: ['PNG', 'JPG'], downloadUrl: '#' },
      { name: 'Model Training', preview: '🧠', formats: ['PNG', 'JPG'], downloadUrl: '#' },
      { name: 'Analytics View', preview: '📈', formats: ['PNG', 'JPG'], downloadUrl: '#' },
      { name: 'API Console', preview: '💻', formats: ['PNG', 'JPG'], downloadUrl: '#' },
    ]
  },
  {
    id: 'team',
    name: 'Team Photos',
    description: 'Photos of our leadership team',
    assets: [
      { name: 'Moon Khumalo - CEO', preview: '👨‍💼', formats: ['JPG'], downloadUrl: '#' },
      { name: 'Leadership Team', preview: '👥', formats: ['JPG'], downloadUrl: '#' },
      { name: 'Office Photos', preview: '🏢', formats: ['JPG'], downloadUrl: '#' },
    ]
  }
];

const pressReleases = [
  { 
    title: 'Eclipse Softworks Raises $50M Series B',
    date: '2025-11-15',
    excerpt: 'Funding to accelerate enterprise AI platform development and African expansion.'
  },
  { 
    title: 'Eclipse Achieves SOC 2 Type II Certification',
    date: '2025-10-01',
    excerpt: 'Enterprise security milestone demonstrates commitment to data protection.'
  },
  { 
    title: 'Eclipse Partners with Major African Banks',
    date: '2025-08-20',
    excerpt: 'Strategic partnerships to bring AI-powered fraud detection across the continent.'
  },
];

const PressKitPage: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string>('logos');
  
  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };
  
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-6">
            <Newspaper size={16} className="text-gray-400" />
            <span className="text-sm text-gray-300">Press & Media</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Press Kit</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to write about Eclipse Softworks. Download logos, product 
            screenshots, and access our latest press releases.
          </p>
        </motion.div>
        
        {/* Quick Stats */}
        <motion.div 
          className="glass-card p-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold text-white mb-6">Company At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-white">2022</div>
              <div className="text-sm text-gray-400">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$50M</div>
              <div className="text-sm text-gray-400">Series B Funding</div>
            </div>
          </div>
        </motion.div>
        
        {/* Boilerplate */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold text-white mb-4">About Eclipse Softworks</h2>
            <p className="text-gray-400 mb-4">
              Eclipse Softworks is a leading enterprise AI platform provider, helping organizations 
              deploy and manage machine learning models at scale. Founded in 2022 and headquartered 
              in South Africa, Eclipse serves over 500 enterprise clients across financial services, 
              healthcare, retail, and manufacturing.
            </p>
            <p className="text-gray-400 mb-4">
              Our mission is to democratize AI for enterprises, making it accessible, secure, and 
              impactful. We combine cutting-edge machine learning technology with enterprise-grade 
              security and compliance, enabling businesses to innovate responsibly.
            </p>
            <p className="text-gray-400">
              Eclipse is backed by leading investors and has raised $50M in Series B funding to 
              accelerate product development and expand across Africa and beyond.
            </p>
          </div>
        </motion.section>
        
        {/* Brand Colors */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            <Palette className="inline-block mr-2" size={24} />
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandColors.map((color) => (
              <div key={color.name} className="glass-card overflow-hidden">
                <div 
                  className="h-24 border-b border-white/20"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <h4 className="text-white font-semibold text-sm mb-2">{color.name}</h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                      className="flex items-center justify-between w-full text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="font-mono">{color.hex}</span>
                      {copiedColor === `${color.name}-hex` ? (
                        <Check size={12} className="text-emerald-400" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                    <button
                      onClick={() => copyToClipboard(color.rgb, `${color.name}-rgb`)}
                      className="flex items-center justify-between w-full text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="font-mono truncate">{color.rgb}</span>
                      {copiedColor === `${color.name}-rgb` ? (
                        <Check size={12} className="text-emerald-400" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        
        {/* Assets */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            <Image className="inline-block mr-2" size={24} />
            Brand Assets
          </h2>
          
          <div className="space-y-4">
            {assetCategories.map((category) => (
              <div key={category.id} className="glass-card overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? '' : category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-400 transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t border-white/20"
                  >
                    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.assets.map((asset) => (
                        <div key={asset.name} className="bg-black/30 rounded-lg p-4 border border-white/5">
                          <div className="aspect-square flex items-center justify-center bg-white/15 rounded-lg mb-3 overflow-hidden p-4">
                            {category.id === 'logos' ? (
                              <img src={asset.preview} alt={asset.name} className="w-full h-full object-contain" />
                            ) : (
                              <span className="text-4xl">{asset.preview}</span>
                            )}
                          </div>
                          <h4 className="text-sm font-medium text-white mb-1">{asset.name}</h4>
                          <p className="text-xs text-gray-500 mb-3">{asset.formats.join(' • ')}</p>
                          <a 
                            href={asset.downloadUrl}
                            download
                            className="flex items-center justify-center gap-2 w-full py-2 bg-white/15 hover:bg-white/10 rounded-lg text-xs text-white transition-colors"
                          >
                            <Download size={12} />
                            Download
                          </a>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Download size={16} />
              Download Complete Press Kit (ZIP)
            </a>
          </div>
        </motion.section>
        
        {/* Press Releases */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            <FileText className="inline-block mr-2" size={24} />
            Recent Press Releases
          </h2>
          
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <a 
                key={index}
                href="#"
                className="glass-card p-6 flex items-start justify-between hover:bg-white/[0.02] transition-colors block"
              >
                <div>
                  <span className="text-xs text-gray-500 mb-2 block">{release.date}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{release.title}</h3>
                  <p className="text-sm text-gray-400">{release.excerpt}</p>
                </div>
                <ExternalLink size={16} className="text-gray-500 flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>
        </motion.section>
        
        {/* Media Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-card p-8 text-center">
            <Camera size={40} className="text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Media Inquiries</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              For press inquiries, interview requests, or additional assets, please contact our 
              communications team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="mailto:press@eclipsesoftworks.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/20 rounded-lg text-sm text-white hover:bg-white/10 transition-colors"
              >
                <Mail size={16} />
                press@eclipsesoftworks.com
              </a>
              <div className="flex items-center gap-2">
                <a href="#" className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PressKitPage;
