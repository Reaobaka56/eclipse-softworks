import React from 'react';
import { motion } from 'framer-motion';

interface ClientLogo {
  name: string;
  logo: string;
}

const clients: ClientLogo[] = [
  { name: 'Standard Bank', logo: '🏦' },
  { name: 'Mediclinic', logo: '🏥' },
  { name: 'Woolworths', logo: '🛒' },
  { name: 'Sasol', logo: '⚡' },
  { name: 'MTN', logo: '📱' },
  { name: 'Discovery', logo: '💚' },
  { name: 'Vodacom', logo: '📡' },
  { name: 'Shoprite', logo: '🛍️' },
  { name: 'Nedbank', logo: '💰' },
  { name: 'Pick n Pay', logo: '🥕' },
  { name: 'Absa', logo: '🔴' },
  { name: 'FNB', logo: '🟡' },
];

const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Trusted By</p>
          <h3 className="text-xl font-semibold text-white">
            Leading Organizations Across Africa
          </h3>
        </motion.div>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                {client.logo}
              </span>
              <span className="text-xs text-gray-500 text-center group-hover:text-gray-400 transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-500 mt-1">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">12</div>
            <div className="text-sm text-gray-500 mt-1">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">99.99%</div>
            <div className="text-sm text-gray-500 mt-1">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-500 mt-1">Client Retention</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
