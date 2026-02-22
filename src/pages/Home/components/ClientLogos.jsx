import { motion } from 'framer-motion';
import {clients,internationalClients} from '../../../data/clients';


export const ClientLogos = () => {
  const duplicatedClients = [...clients, ...clients, ...clients];
  const duplicatedIntlClients = [...internationalClients, ...internationalClients, ...internationalClients];

  return (
    <>
      {/* Domestic Clients */}
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

      {/* International Clients */}
      <div className="bg-white py-16 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-10 font-bold">
            Global Partnerships
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
              {duplicatedIntlClients.map((client, index) => (
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
    </>
  );
};