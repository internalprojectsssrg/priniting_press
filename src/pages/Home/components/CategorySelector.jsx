import { motion } from 'framer-motion';

const categories = [
  { id: 'print', label: 'Printing Services', icon: '📄' },
  { id: 'brand', label: 'Branding Works', icon: '🏗️' },
  { id: 'pack', label: 'Packaging', icon: '📦' }
];

export const CategorySelector = ({ active, onSelect }) => {
  return (
    <div className="flex justify-center gap-12 py-16 border-b border-gray-100">
      {categories.map((cat) => (
        <button 
          key={cat.id} 
          onClick={() => onSelect(cat.id)}
          className="group relative flex flex-col items-center"
        >
          <span className={`text-xs uppercase tracking-widest mb-2 transition-colors ${active === cat.id ? 'text-black font-bold' : 'text-gray-400'}`}>
            {cat.label}
          </span>
          {active === cat.id && (
            <motion.div layoutId="underline" className="h-0.5 w-full bg-brandGold absolute -bottom-4" />
          )}
        </button>
      ))}
    </div>
  );
};