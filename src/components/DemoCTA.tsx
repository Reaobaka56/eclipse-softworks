import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, CheckCircle, ArrowRight } from 'lucide-react';

export const DemoCTA: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="glass-card p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/20 flex items-center justify-center mx-auto mb-6"
          >
            <Video size={32} className="text-gray-300" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Eclipse in Action
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Get a personalized demo from our team. We'll show you how Eclipse can 
            transform your AI operations and answer all your questions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Calendar size={20} />
              Schedule Demo
            </button>
            <a 
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white/15 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Sales
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              30 minute call
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              Custom demo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoCTA;
