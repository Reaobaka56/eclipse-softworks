import React from 'react';

const NeuralCard: React.FC = () => {
  return (
    <div className="glass-card rounded-sm overflow-hidden border-glow floating-object relative">
        <div className="px-4 py-2 border-b border-white/10 bg-black/40 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">neural_network.vis</span>
            <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full border border-white/20"></div>
                <div className="w-2 h-2 rounded-full border border-white/20"></div>
            </div>
        </div>
        <div className="p-6 bg-black/80 font-mono text-sm overflow-x-auto">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2">
                        <i className="fa-solid fa-brain text-white/70"></i>
                    </div>
                    <span className="text-xs text-gray-400">Neural Networks</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2">
                        <i className="fa-solid fa-chart-line text-white/70"></i>
                    </div>
                    <span className="text-xs text-gray-400">Predictive Analytics</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2">
                        <i className="fa-solid fa-robot text-white/70"></i>
                    </div>
                    <span className="text-xs text-gray-400">Automation</span>
                </div>
            </div>
        </div>
        {/* Background decoration */}
        <div className="absolute -inset-4 border border-white/5 z-[-1] rounded-sm"></div>
    </div>
  );
};

export default NeuralCard;
