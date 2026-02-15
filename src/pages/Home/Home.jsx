import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { CategorySelector } from './components/CategorySelector';
import { ServiceCard } from './components/ServiceCard';
import { ClientLogos } from './components/ClientLogos';
import { InquiryForm } from './components/InquiryForm';
import { serviceData } from '../../data/services';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('print');

  return (
    <main className="min-h-screen pt-[72px]"> {/* Offset for fixed navbar */}
      <Hero />
      <ClientLogos />
      
      <section className="max-w-4xl mx-auto text-center py-24 px-6">
        <h2 className="text-4xl font-serif mb-6">Expertise Across All Surfaces</h2>
        <p className="text-gray-500 leading-relaxed text-lg font-light">
          We combine traditional craft with modern technology to deliver 
          high-impact results for the world's most discerning brands.
        </p>
      </section>

      <CategorySelector active={activeCategory} onSelect={setActiveCategory} />

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData[activeCategory].map((item) => (
            <ServiceCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <InquiryForm />
    </main>
  );
};

export default Home;