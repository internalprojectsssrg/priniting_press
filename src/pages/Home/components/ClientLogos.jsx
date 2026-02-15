import React from 'react';

const clients = ["Vijay Sales","Taj mahal Hotel",
"Art Fertility",
"Hira Fertility",
"Birla Fertility",
"Mom IVF",
"Matrix Sea Foods",
"LGT Travels"];

export const ClientLogos = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-10 font-bold">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
          {clients.map(client => (
            <span key={client} className="text-2xl font-serif italic text-gray-600">{client}</span>
          ))}
        </div>
      </div>
    </div>
  );
};