import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { id: 1, title: "Precision Print.", sub: "Premium Branding", img: "https://images.unsplash.com/photo-1617791160505-6f00d5161bd3?q=80&w=2000" },
  { id: 2, title: "Luxury Packaging.", sub: "The First Impression", img: "https://images.unsplash.com/photo-1606813907291-d86ebb9954ad?q=80&w=2000" }
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slides[index].img})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-brandGold tracking-[0.3em] uppercase text-sm mb-4 font-bold">{slides[index].sub}</motion.span>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="text-white text-6xl md:text-8xl font-serif">{slides[index].title}</motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};