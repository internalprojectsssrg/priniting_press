import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ServiceCard = ({ item }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white border border-gray-100 p-6 h-64 flex flex-col justify-between hover:shadow-2xl hover:border-brandGold/30 transition-all duration-500"
    >
      <div>
        <span className="text-[10px] tracking-[0.2em] text-brandGold font-bold uppercase">
          {item.tag}
        </span>
        <h3 className="text-xl font-serif mt-2 group-hover:text-brandGold transition-colors">
          {item.name}
        </h3>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400 uppercase tracking-widest">Inquiry Only</span>
        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-brandGold group-hover:text-white transition-all">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};