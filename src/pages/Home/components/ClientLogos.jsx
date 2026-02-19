import React, { useState } from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: "Vijay Sales", logo: "/logos/vijay-sales.png" },
  { name: "Taj Hotels", logo: "/logos/taj-hotels.png" },
  { name: "Art Fertility", logo: "/logos/art-fertility.png" },
  { name: "Hira Fertility", logo: "/logos/hira-fertility.png" },
  { name: "Birla Fertility", logo: "/logos/birla-fertility.png" },
  { name: "Mom IVF", logo: "/logos/mom-ivf.png" },
  { name: "Matrix Sea Foods", logo: "/logos/matrix-seafoods.png" },
  { name: "LGT Travels", logo: "/logos/lgt-travels.png" },
  { name: "Apollo Hospitals", logo: "/logos/apollo-hospitals.png" },
  { name: "ICICI Bank", logo: "/logos/icici-bank.png" },
  { name: "Honda", logo: "/logos/honda.png" },
  { name: "Samsung", logo: "/logos/samsung.png" },
];

export const ClientLogos = () => {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-10 font-bold">
          Trusted by Industry Leaders
        </p>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-24"
            initial={{ x: 0 }}
            animate={{ x: -2000 }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-max opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};