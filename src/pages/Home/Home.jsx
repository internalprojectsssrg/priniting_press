import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { CategorySelector } from './components/CategorySelector';
import { ServiceCard } from './components/ServiceCard';
import { ClientLogos } from './components/ClientLogos';
import { InquiryForm } from './components/InquiryForm';
import { serviceData } from '../../data/services';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('print');
  const [itemsToShow, setItemsToShow] = useState(9);

  const currentServices = serviceData[activeCategory];
  const visibleServices = currentServices.slice(0, itemsToShow);
  const hasMore = itemsToShow < currentServices.length;

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 6);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setItemsToShow(9); // Reset on category change
  };

  return (
    <main className="min-h-screen pt-[72px]">
      <Hero />
      <ClientLogos />
      
      <section className="max-w-4xl mx-auto text-center py-24 px-6">
        <h2 className="text-4xl font-serif mb-6">Expertise Across All Surfaces</h2>
        <p className="text-gray-500 leading-relaxed text-lg font-light">
          We combine traditional craft with modern technology to deliver 
          high-impact results for the world's most discerning brands.
        </p>
      </section>

      <CategorySelector active={activeCategory} onSelect={handleCategoryChange} />

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((item) => (
            <ServiceCard key={item.name} item={item} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-8 py-3 border-2 border-brandGold text-brandGold font-bold uppercase tracking-widest hover:bg-brandGold hover:text-white transition-all duration-300"
            >
              Load More
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </section>

      <InquiryForm />
    </main>
  );
};

export default Home;