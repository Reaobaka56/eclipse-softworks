import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, ArrowRight, TrendingUp,
  BookOpen, Search, Home, ChevronRight,
  Twitter, Linkedin, Link2
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-enterprise-2025',
    title: 'The State of AI in Enterprise: 2025 Trends and Predictions',
    excerpt: 'As we approach 2025, enterprise AI adoption continues to accelerate. We analyze the key trends shaping the industry and what organizations should prepare for.',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      avatar: '👩‍💼'
    },
    publishedAt: '2025-12-01',
    readTime: '12 min',
    category: 'Industry Insights',
    tags: ['AI', 'Enterprise', 'Trends', '2025'],
    image: '🤖',
    featured: true
  },
  {
    id: 'mlops-best-practices',
    title: 'MLOps Best Practices: Lessons from 500+ Deployments',
    excerpt: 'After helping hundreds of companies deploy ML models to production, we\'ve compiled the essential best practices for successful MLOps.',
    author: {
      name: 'Marcus Johnson',
      role: 'Head of Engineering',
      avatar: '👨‍💻'
    },
    publishedAt: '2025-11-25',
    readTime: '15 min',
    category: 'Engineering',
    tags: ['MLOps', 'DevOps', 'Best Practices'],
    image: '⚙️'
  },
  {
    id: 'llm-fine-tuning',
    title: 'Fine-Tuning LLMs for Domain-Specific Applications',
    excerpt: 'A comprehensive guide to fine-tuning large language models for specialized use cases, from data preparation to deployment.',
    author: {
      name: 'Dr. Emily Rodriguez',
      role: 'ML Research Lead',
      avatar: '👩‍🔬'
    },
    publishedAt: '2025-11-18',
    readTime: '20 min',
    category: 'Technical Deep Dive',
    tags: ['LLM', 'Fine-tuning', 'NLP', 'Tutorial'],
    image: '🧠'
  },
  {
    id: 'data-privacy-ai',
    title: 'Navigating Data Privacy in AI: A Practical Guide',
    excerpt: 'Understanding GDPR, POPIA, and other regulations when building AI systems. Practical steps for compliance without sacrificing innovation.',
    author: {
      name: 'James Nkosi',
      role: 'Legal & Compliance',
      avatar: '👨‍⚖️'
    },
    publishedAt: '2025-11-10',
    readTime: '10 min',
    category: 'Compliance',
    tags: ['Privacy', 'GDPR', 'POPIA', 'Compliance'],
    image: '🔒'
  },
  {
    id: 'case-study-fintech',
    title: 'Case Study: How a Leading Bank Reduced Fraud by 60%',
    excerpt: 'Discover how one of Africa\'s largest banks implemented our ML platform to dramatically reduce fraudulent transactions.',
    author: {
      name: 'Thabo Mokoena',
      role: 'Solutions Architect',
      avatar: '👨‍💼'
    },
    publishedAt: '2025-11-02',
    readTime: '8 min',
    category: 'Case Study',
    tags: ['Fintech', 'Fraud Detection', 'Case Study'],
    image: '🏦'
  },
  {
    id: 'edge-ai-deployment',
    title: 'Edge AI: Deploying Models Where the Data Lives',
    excerpt: 'Exploring the benefits and challenges of edge AI deployment, with practical examples from IoT and manufacturing.',
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      avatar: '👩‍💼'
    },
    publishedAt: '2025-10-25',
    readTime: '14 min',
    category: 'Technical Deep Dive',
    tags: ['Edge AI', 'IoT', 'Manufacturing'],
    image: '📡'
  }
];

const categories = ['All', 'Industry Insights', 'Engineering', 'Technical Deep Dive', 'Compliance', 'Case Study'];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
          <Link to="/" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
            <Home size={14} />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-gray-300">Blog</span>
        </nav>
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-6">
            <BookOpen size={16} className="text-gray-400" />
            <span className="text-sm text-gray-300">Insights & Updates</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Eclipse <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights on AI, machine learning, and enterprise technology from the Eclipse Softworks team. 
            Stay ahead with the latest trends and best practices.
          </p>
        </motion.div>
        
        {/* Search & Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 bg-white/15 border border-white/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && searchQuery === '' && (
          <motion.article 
            className="glass-card overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl aspect-video text-8xl">
                {featuredPost.image}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-400/10 text-purple-400">
                    Featured
                  </span>
                  <span className="text-xs text-gray-500">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-gray-200 cursor-pointer transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{featuredPost.author.avatar}</span>
                    <div>
                      <p className="text-sm text-white font-medium">{featuredPost.author.name}</p>
                      <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {featuredPost.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}
        
        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="glass-card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-5xl group-hover:scale-105 transition-transform duration-300">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded-md bg-white/15 text-gray-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{post.author.avatar}</span>
                    <span className="text-xs text-gray-500">{post.author.name}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={10} />
                    {post.publishedAt}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Search size={48} className="text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
        
        {/* Newsletter CTA */}
        <motion.div 
          className="glass-card p-8 md:p-12 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-2xl mx-auto">
            <TrendingUp size={40} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Stay Ahead of the Curve</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for weekly insights on AI, ML, and enterprise technology. 
              Join 10,000+ professionals who trust Eclipse for their tech news.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 max-w-sm px-4 py-3 bg-black/70 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Read our <a href="/privacy" className="underline hover:text-gray-400">Privacy Policy</a>.
            </p>
          </div>
        </motion.div>
        
        {/* Social Share */}
        <motion.div 
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-sm text-gray-500">Share our blog:</span>
          <div className="flex items-center gap-2">
            <a href="#" className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <button className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors">
              <Link2 size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
