import React, { useState, useEffect } from 'react';
import MetallicBackground from './components/MetallicBackground';
import NeuralCard from './components/NeuralCard';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when active section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="antialiased text-white min-h-screen">
      <MetallicBackground />

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => handleNavClick('home')}>
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md"></div>
                    <div className="w-8 h-8 border border-white/20 bg-black rounded-full flex items-center justify-center relative z-10">
                        <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    </div>
                </div>
                <span className="font-bold text-lg tracking-[0.15em] uppercase">Eclipse</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {['home', 'services', 'solutions', 'projects', 'about', 'team', 'downloads', 'contact'].map((item) => (
                    <button
                        key={item}
                        onClick={() => handleNavClick(item)}
                        className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                            activeSection === item ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {item}
                    </button>
                ))}
                
                <button 
                    onClick={() => handleNavClick('contact')}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-xs font-bold uppercase tracking-wider"
                >
                    <i className="fa-solid fa-download"></i> Get Started
                </button>
            </div>
            
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
        
        {/* Mobile Nav */}
        {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl absolute w-full">
                <div className="flex flex-col p-4 gap-4">
                    {['home', 'services', 'solutions', 'projects', 'about', 'team', 'downloads', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className="text-sm text-left text-gray-300 uppercase tracking-widest"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
          {/* Hero Section - Always Rendered but visually part of home */}
          <header className={`relative pt-40 pb-20 lg:pt-60 lg:pb-40 px-6 ${activeSection === 'home' ? 'block animate-slide-down' : 'hidden'}`}>
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Content */}
                  <div className="relative z-10">
                      <div className="inline-flex items-center gap-3 px-3 py-1 mb-8 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Now Accepting New Clients</span>
                      </div>

                      <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                          Build <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-800 text-glow">Intelligence</span>.
                      </h1>

                      <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg mb-10 border-l border-white/20 pl-6">
                          Eclipse Softworks brings you cutting-edge AI solutions tailored to your business needs. We specialize in machine learning, data analytics, and custom software development.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex gap-4 mb-10">
                          <button onClick={() => handleNavClick('contact')} className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider">
                              Start a Project
                          </button>
                          <button onClick={() => handleNavClick('services')} className="px-6 py-3 border border-white/30 hover:border-white transition-colors text-sm font-bold uppercase tracking-wider">
                              Our Services
                          </button>
                      </div>

                      <div className="flex gap-6">
                          <button onClick={() => handleNavClick('projects')} className="text-sm font-bold uppercase tracking-widest border-b border-white hover:border-transparent transition-colors pb-1">View Projects</button>
                          <button onClick={() => handleNavClick('downloads')} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors pb-1">Downloads</button>
                      </div>
                  </div>

                  {/* AI Visualization */}
                  <div className="relative z-10">
                      <NeuralCard />
                  </div>
              </div>
          </header>

          {/* Services Section */}
          {activeSection === 'services' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Services</span>
                            <h2 className="text-4xl font-bold text-white">What We Offer</h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-sm text-right">
                            Comprehensive AI development services from concept to deployment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service 1 */}
                        <div className="glass-card p-8 group">
                            <i className="fa-solid fa-code text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"></i>
                            <h3 className="text-lg font-bold mb-3">Custom AI Development</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Tailored AI solutions designed to solve your specific business challenges, from data processing to decision-making systems.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="glass-card p-8 group">
                            <i className="fa-solid fa-server text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"></i>
                            <h3 className="text-lg font-bold mb-3">ML Infrastructure</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                End-to-end machine learning infrastructure setup, including data pipelines, model training, and deployment systems.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="glass-card p-8 group">
                            <i className="fa-solid fa-chart-bar text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"></i>
                            <h3 className="text-lg font-bold mb-3">Data Analytics</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Transform your raw data into actionable insights with advanced analytics and visualization tools.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="glass-card p-8 group lg:col-span-2">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <i className="fa-solid fa-brain text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"></i>
                                    <h3 className="text-lg font-bold mb-3">AI Consulting</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        Strategic guidance on implementing AI technologies, identifying opportunities, and building competitive advantages.
                                    </p>
                                    <button onClick={() => handleNavClick('contact')} className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all">Get Consultation</button>
                                </div>
                                <div className="flex-1 bg-black/50 border border-white/10 rounded p-4 font-mono text-xs text-gray-400">
                                    <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                                        <span>AI Readiness Assessment</span>
                                        <span className="text-green-500">COMPLETE</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p>{'>'} Data infrastructure...</p>
                                        <p>{'>'} Team capabilities...</p>
                                        <p>{'>'} Implementation roadmap...</p>
                                        <p className="text-white">{'>'} Ready for AI integration</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="glass-card p-8 group flex flex-col justify-center text-center">
                            <h3 className="text-3xl font-bold mb-2">24/7</h3>
                            <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Support & Maintenance</p>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {/* Downloads Section */}
          {activeSection === 'downloads' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Downloads & Resources</span>
                            <h2 className="text-4xl font-bold text-white">Our Development Tools</h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-sm text-right">
                            Cutting-edge tools to accelerate your development workflow
                        </p>
                    </div>

                    <div className="glass-card p-8 mb-12">
                        <div className="text-center max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                            <p className="text-gray-400 text-lg">
                                Our cutting-edge tools and applications are currently being prepared to accelerate your development workflow. Stay tuned for exciting releases!
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Umbra Programming Language */}
                        <div className="glass-card download-card p-8 group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">U</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Umbra Programming Language</h3>
                                        <p className="text-sm text-gray-400">v1.0.0</p>
                                    </div>
                                </div>
                                <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">Coming Soon</span>
                            </div>
                            
                            <p className="text-gray-400 mb-6">
                                A modern, high-performance programming language designed for system-level development with memory safety and concurrency built-in.
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Platforms</h4>
                                    <div className="flex gap-2">
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Windows</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Mac</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Linux</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">File Size</h4>
                                    <p className="text-sm text-gray-400">TBD</p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <button className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2">
                                        <i className="fa-solid fa-bell"></i>
                                        Get Notified
                                    </button>
                                    <button className="px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded">
                                        <i className="fa-solid fa-info"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Kasi Meals */}
                        <div className="glass-card download-card p-8 group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-orange-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">K</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Kasi Meals</h3>
                                        <p className="text-sm text-gray-400">v1.0.0</p>
                                    </div>
                                </div>
                                <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">Coming Soon</span>
                            </div>
                            
                            <p className="text-gray-400 mb-6">
                                A comprehensive meal planning and delivery application connecting local communities with authentic South African cuisine.
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">Platforms</h4>
                                    <div className="flex gap-2">
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Android</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">iOS</span>
                                        <span className="text-xs px-2 py-1 bg-white/10 rounded">Web</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-2">File Size</h4>
                                    <p className="text-sm text-gray-400">TBD</p>
                                </div>
                                
                                <div className="flex gap-3">
                                    <button className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2">
                                        <i className="fa-solid fa-bell"></i>
                                        Get Notified
                                    </button>
                                    <button className="px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded">
                                        <i className="fa-solid fa-info"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Custom Solutions CTA */}
                    <div className="glass-card p-8 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
                            <p className="text-gray-400 mb-6">
                                While our tools are being prepared, we're ready to build custom solutions tailored to your unique requirements. Let's create something amazing together!
                            </p>
                            <button onClick={() => handleNavClick('contact')} className="inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider">
                                Request Custom Development
                            </button>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {/* Solutions Section */}
          {activeSection === 'solutions' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Our Solutions</span>
                            <h2 className="text-4xl font-bold text-white">Innovative approaches to solve your most complex challenges</h2>
                        </div>
                    </div>

                    {/* Why Choose Our Solutions */}
                    <div className="glass-card p-8 mb-16">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Why Choose Our Solutions?</h3>
                                <p className="text-gray-400 mb-6">We combine cutting-edge technology with industry expertise to deliver results that matter.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Proven track record across industries",
                                        "Customized to your specific needs",
                                        "Scalable and future-proof architectures",
                                        "24/7 support and maintenance"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <i className="fa-solid fa-check text-green-500 mt-1"></i>
                                            <span className="text-gray-300">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => handleNavClick('contact')} className="inline-block mt-6 px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider">
                                    Request Consultation
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: "fa-chart-line", title: "Data Analytics", desc: "Unlock insights from your data with our advanced analytics platform." },
                                    { icon: "fa-robot", title: "AI Integration", desc: "Implement cutting-edge AI solutions tailored to your business needs." },
                                    { icon: "fa-mobile-alt", title: "Mobile Development", desc: "Native and cross-platform mobile applications that deliver exceptional user experiences." },
                                    { icon: "fa-shield-alt", title: "Cybersecurity", desc: "Protect your digital assets with our comprehensive security solutions." }
                                ].map((item, i) => (
                                    <div key={i} className="glass-card p-4 text-center">
                                        <i className={`fa-solid ${item.icon} text-3xl mb-3 text-gray-300`}></i>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-xs text-gray-400 mb-3">{item.desc}</p>
                                        <button className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all">Learn more →</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Solutions */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-6 group">
                            <i className="fa-solid fa-wifi text-2xl mb-4 text-gray-300 group-hover:text-white transition-colors"></i>
                            <h3 className="text-lg font-bold mb-3">IoT Development</h3>
                            <p className="text-sm text-gray-400 mb-4">Build connected devices and smart systems for the modern world.</p>
                            <button className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all">Learn more →</button>
                        </div>
                        <div className="glass-card p-6 group">
                            <i className="fa-solid fa-link text-2xl mb-4 text-gray-300 group-hover:text-white transition-colors"></i>
                            <h3 className="text-lg font-bold mb-3">Blockchain</h3>
                            <p className="text-sm text-gray-400 mb-4">Leverage decentralized technology for transparent and secure transactions.</p>
                            <button className="text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all">Learn more →</button>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="glass-card p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Our team of experts is standing by to help you implement the perfect solution for your needs.</p>
                        <button onClick={() => handleNavClick('contact')} className="inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </section>
          )}

          {/* Empower Your Business Section - Shown on Home or Solutions */}
          {activeSection === 'solutions' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-card p-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">Empower Your Business with Eclipse Softworks</h2>
                                <p className="text-gray-400 text-lg mb-8">We deliver innovative technology solutions that drive growth, enhance efficiency, and transform the way you do business.</p>
                                
                                <div className="space-y-6">
                                    {[
                                        { icon: "fa-chart-bar", title: "Advanced Analytics Solutions", desc: "Transform your data into actionable insights with our cutting-edge analytics platform." },
                                        { icon: "fa-brain", title: "AI-Powered Innovation", desc: "Leverage artificial intelligence to automate processes, enhance productivity, and unlock new opportunities." },
                                        { icon: "fa-code", title: "Custom Application Development", desc: "Build scalable, robust applications tailored to your specific business requirements." },
                                        { icon: "fa-user-check", title: "Exceptional User Experiences", desc: "Create memorable digital experiences that engage your customers and drive business success." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <i className={`fa-solid ${item.icon} text-xl text-gray-300 mt-1`}></i>
                                            <div>
                                                <h3 className="font-bold mb-2">{item.title}</h3>
                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="glass-card p-8">
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-gray-400 mb-6">To deliver innovative technology solutions that empower businesses to achieve their goals, drive growth, and create lasting impact in their industries.</p>
                                <button onClick={() => handleNavClick('about')} className="inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider">
                                    Join Our Mission
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Portfolio</span>
                            <h2 className="text-4xl font-bold text-white">Recent Projects</h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-sm text-right">
                            A selection of our recent AI implementations across various industries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "fa-industry", title: "Predictive Maintenance", desc: "AI system for manufacturing equipment failure prediction.", tags: ["ML", "IoT", "Python"] },
                            { icon: "fa-comments", title: "Customer Service AI", desc: "Natural language processing for automated customer support.", tags: ["NLP", "Chatbots", "TensorFlow"] },
                            { icon: "fa-chart-pie", title: "Financial Analytics", desc: "Risk assessment and market prediction models for finance sector.", tags: ["Analytics", "Forecasting", "PyTorch"] }
                        ].map((proj, i) => (
                            <div key={i} className="glass-card p-6 group">
                                <div className="h-48 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10">
                                    <i className={`fa-solid ${proj.icon} text-4xl text-gray-700`}></i>
                                </div>
                                <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">{proj.desc}</p>
                                <div className="flex gap-2">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {/* About Section */}
          {activeSection === 'about' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/10 pb-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                            
                            <h2 className="text-4xl font-bold text-white mb-6">About Eclipse Softworks</h2>
                            <p className="text-xl text-gray-400 leading-relaxed mb-10">
                                Building Africa's digital future through innovative software solutions, one line of code at a time.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: "fa-bullseye", title: "Our Mission", desc: "To empower businesses across Africa with reliable, scalable, and innovative digital solutions that drive measurable impact." },
                            { icon: "fa-eye", title: "Our Vision", desc: "To become the leading software powerhouse born in Africa — a hub for engineering excellence, creativity, and global innovation." },
                            { icon: "fa-heart", title: "Our Values", desc: "Integrity, quality, collaboration, and a relentless drive for excellence form the foundation of everything we build." }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-8 text-center">
                                <i className={`fa-solid ${item.icon} text-2xl mb-4 text-gray-300`}></i>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card p-8 mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { val: "50+", label: "Projects Completed" },
                                    { val: "15+", label: "Team Members" },
                                    { val: "5+", label: "Years Experience" },
                                    { val: "100%", label: "Client Satisfaction" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-black rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">{stat.val}</div>
                                        <p className="text-xs text-gray-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Featured Projects</span>
                                <h3 className="text-2xl font-bold text-white">Showcasing some of our most impactful projects</h3>
                            </div>
                            <p className="text-gray-500 text-sm max-w-sm">
                                Projects that demonstrate our expertise and commitment to innovation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "fa-brain", title: "AI-Powered Analytics Platform", desc: "Advanced machine learning platform for business intelligence and predictive analytics.", tags: ["Python", "TensorFlow", "React"], status: "Live", statusColor: "green" },
                                { icon: "fa-mobile-alt", title: "Mobile Banking Solution", desc: "Secure and intuitive mobile banking application for African financial institutions.", tags: ["React Native", "Node.js", "MongoDB"], status: "In Development", statusColor: "blue" },
                                { icon: "fa-shopping-cart", title: "E-Commerce Platform", desc: "Scalable e-commerce solution tailored for African markets and payment systems.", tags: ["Next.js", "Stripe", "PostgreSQL"], status: "Live", statusColor: "green" }
                            ].map((proj, i) => (
                                <div key={i} className="glass-card p-6 group">
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10 relative">
                                        <i className={`fa-solid ${proj.icon} text-4xl text-gray-700`}></i>
                                        <span className={`absolute top-3 right-3 text-xs px-2 py-1 bg-${proj.statusColor}-500/20 text-${proj.statusColor}-400 rounded-full`}>{proj.status}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{proj.desc}</p>
                                    <div className="flex gap-2">
                                        {proj.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded">{tag}</span>
                                        ))}
                                    </div>
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

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "fa-cube", title: "Eclipse SDK", desc: "Complete software development kit for building applications with Eclipse Softworks tools.", meta: ["Size: 45 MB", "Version: v2.1.0"] },
                                { icon: "fa-book", title: "API Documentation", desc: "Comprehensive documentation and examples for our REST API endpoints.", meta: ["Size: PDF", "Version: v1.8"] },
                                { icon: "fa-mobile", title: "Mobile Templates", desc: "Ready-to-use mobile app templates and UI components for rapid development.", meta: ["Size: 120 MB", "Version: v1.5.2"] }
                            ].map((res, i) => (
                                <div key={i} className="glass-card p-6 group">
                                    <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10">
                                        <i className={`fa-solid ${res.icon} text-3xl text-gray-600`}></i>
                                    </div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold">{res.title}</h3>
                                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">Coming Soon</span>
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

                    <div className="glass-card p-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Local Insight", desc: "Deep understanding of African markets and user behavior." },
                                        { title: "Technical Expertise", desc: "Proficiency in cutting-edge tools and methodologies." },
                                        { title: "Collaboration", desc: "We work closely with our clients to bring their vision to life." },
                                        { title: "Scalability", desc: "Future-proof architecture designed to grow with your business." },
                                        { title: "Social Impact", desc: "We support initiatives that uplift underserved communities through digital tools and training." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500/10 mt-1">
                                                <i className="fa-solid fa-check text-xs text-green-500"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-400">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-card p-6 bg-gradient-to-br from-black to-gray-900">
                                <h3 className="text-xl font-bold mb-4">Ready to Build Something Amazing?</h3>
                                <p className="text-gray-400 mb-6">Let's discuss how we can help bring your vision to life with cutting-edge technology solutions.</p>
                                <button onClick={() => handleNavClick('contact')} className="inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider">
                                    Start Your Project Today
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {/* Team Section */}
          {activeSection === 'team' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Our Team</span>
                            <h2 className="text-4xl font-bold text-white">Meet the Team</h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-sm text-right">
                            The talented individuals behind Eclipse Softworks
                        </p>
                    </div>

                    <div className="team-grid">
                        {[
                            { initials: "MK", name: "Moon Khumalo", role: "Founder & CEO - AI Systems and Backend", desc: "Moon is the visionary founder and CEO of Eclipse Softworks, specializing in AI systems and backend infrastructure. He leads the team with innovation and purpose." },
                            { initials: "PM", name: "Philani Makhoba", role: "COO & Front-End Developer", desc: "Philani serves as the COO of Eclipse Softworks. A skilled front-end developer, he brings structure and clarity to every project the team undertakes." },
                            { initials: "TM", name: "Tshepiso Mokwena", role: "Full-Stack Dev (Front-End Focused)", desc: "Tshepiso is a passionate front-end developer and aspiring full-stack engineer, dedicated to creating impactful user experiences and scalable digital solutions." },
                            { initials: "KM", name: "Karabo Makgala", role: "Security Engineer", desc: "Karabo is a security engineer focused on ensuring the safety, integrity, and privacy of all digital systems built by Eclipse Softworks." },
                            { initials: "NK", name: "Neo Kganyile", role: "Pen Tester", desc: "Neo is an enthusiastic learner and aspiring penetration tester who brings curiosity and a security-first mindset to the team." },
                            { initials: "SM", name: "Siphesihle Magudulela", role: "Front-End Developer", desc: "Siphesihle is a dedicated front-end developer with a keen eye for clean interfaces and intuitive user interactions." },
                            { initials: "XB", name: "Xolani Buthelezi", role: "CTO & Technical Architect", desc: "Xolani is the Chief Technology Officer and Technical Architect, responsible for the overall technical strategy and system architecture." },
                            { initials: "YN", name: "Yongama Nkosi", role: "Accountant", desc: "Yongama is a dedicated accountant who ensures Eclipse Softworks maintains financial accuracy and compliance while supporting strategic business decisions." },
                            { initials: "SK", name: "Simphiwe Kubheka", role: "Accountant", desc: "Simphiwe is a meticulous accountant focused on financial planning and analysis, helping Eclipse Softworks achieve sustainable growth and profitability." },
                            { initials: "NN", name: "Nkanyiso Ndlovu", role: "Systems Engineer & Coordinator", desc: "Nkanyiso is a systems engineer and coordinator who ensures seamless integration and coordination across all technical systems and team operations." }
                        ].map((member, i) => (
                            <div key={i} className="glass-card p-6 text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-black rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">{member.initials}</div>
                                <h3 className="font-bold mb-1">{member.name}</h3>
                                <p className="text-xs text-gray-500 mb-3">{member.role}</p>
                                <p className="text-sm text-gray-400">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <section className="py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">Contact</span>
                        <h2 className="text-4xl font-bold text-white mb-4">Let's Talk</h2>
                        <p className="text-gray-500 text-lg max-w-lg mx-auto">
                            Have a project in mind or want to collaborate? We're just a message away.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="glass-card rounded-lg p-8">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="you@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea className="w-full h-32 bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="w-full px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-envelope text-gray-400"></i>
                                        <span className="text-gray-300">info@eclipse-softworks.com</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-phone text-gray-400"></i>
                                        <span className="text-gray-300">+27 (0) 82 079 1642</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-location-dot text-gray-400"></i>
                                        <span className="text-gray-300">Sandton, Johannesburg, South Africa</span>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-6">
                                <h3 className="text-xl font-bold mb-4">Eclipse Softworks</h3>
                                <p className="text-gray-400 mb-4">Building Africa's digital future through innovative software solutions, one line of code at a time.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-sm mb-2">Services</h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            <li>AI-Powered Solutions</li>
                                            <li>Mobile App Development</li>
                                            <li>Custom Software Engineering</li>
                                            <li>DevOps & Automation</li>
                                            <li>Consulting & Strategy</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm mb-2">Company</h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            <li>About Us</li>
                                            <li>Products</li>
                                            <li>Downloads</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          )}

          {/* Footer */}
          <footer className="border-t border-white/10 bg-black py-16 px-6 relative z-10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                  <div>
                      <div className="flex items-center gap-3 mb-6">
                          <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-bold tracking-widest uppercase text-sm">Eclipse Softworks</span>
                      </div>
                      <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
                          Developing the infrastructure for the next generation of artificial intelligence.
                      </p>
                  </div>
                  
                  <div className="flex gap-16">
                      <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Services</h4>
                          <ul className="space-y-3 text-sm text-gray-500">
                              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">AI Development</button></li>
                              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">ML Infrastructure</button></li>
                              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Data Analytics</button></li>
                              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Consulting</button></li>
                          </ul>
                      </div>
                      <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Company</h4>
                          <ul className="space-y-3 text-sm text-gray-500">
                              <li><button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">About</button></li>
                              <li><button onClick={() => handleNavClick('projects')} className="hover:text-white transition-colors">Projects</button></li>
                              <li><button onClick={() => handleNavClick('downloads')} className="hover:text-white transition-colors">Downloads</button></li>
                              <li><button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors">Contact</button></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-gray-600 font-mono">
                  <p>&copy; 2025 Eclipse Softworks. All rights reserved.</p>
                  <div className="flex gap-4">
                      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                      <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                  </div>
              </div>
          </footer>
      </main>
    </div>
  );
};

export default App;