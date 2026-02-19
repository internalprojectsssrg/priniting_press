import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ServiceCard = ({ item }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white border border-gray-100 overflow-hidden rounded-2xl h-64 flex flex-col justify-between hover:shadow-2xl hover:border-brandGold/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative w-full h-40 overflow-hidden bg-gray-200">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <span className="text-[10px] tracking-[0.2em] text-brandGold font-bold uppercase">
            {item.tag}
          </span>
          <h3 className="text-lg font-serif mt-2 group-hover:text-brandGold transition-colors line-clamp-2">
            {item.name}
          </h3>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Inquiry Only</span>
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-brandGold group-hover:text-white transition-all">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};