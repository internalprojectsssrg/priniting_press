import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const galleryItems = [
    { type: 'image', url: '/studio/workspace-1.jpg', title: 'Modern Workspace' },
    { type: 'image', url: '/studio/equipment-1.jpg', title: 'Printing Equipment' },
    { type: 'image', url: '/studio/team-working.jpg', title: 'Team Collaboration' },
    { type: 'image', url: '/studio/workspace-2.jpg', title: 'Design Studio' },
  ];

  const teamMembers = [
    { name: 'Rajesh Kumar', role: 'Founder & Creative Director', image: '/studio/team/rajesh.jpg' },
    { name: 'Priya Singh', role: 'Operations Manager', image: '/studio/team/priya.jpg' },
    { name: 'Arun Patel', role: 'Technical Lead', image: '/studio/team/arun.jpg' },
    { name: 'Neha Sharma', role: 'Design Head', image: '/studio/team/neha.jpg' },
  ];

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 6);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setItemsToShow(9);
  };

  return (
    <main className="min-h-screen pt-[72px]">
      <Hero />
      
      <div className="mt-20">
        <ClientLogos />
      </div>
      
      <section className="max-w-4xl mx-auto text-center py-24 px-6">
        <h2 className="text-4xl font-serif mb-6">Expertise Across All Surfaces</h2>
        <p className="text-gray-500 leading-relaxed text-lg font-light">
          We combine traditional craft with modern technology to deliver 
          high-impact results for the world's most discerning brands.
        </p>
      </section>

      <CategorySelector active={activeCategory} onSelect={handleCategoryChange} />

      <section className="max-w-7xl mx-auto py-20 px-6" id='services-section'>
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

      {/* Studio Section */}
      <section className="max-w-7xl mx-auto px-8 py-20" id='studio-section'>
        <h2 className="text-4xl font-serif mb-12">Studio Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl group relative"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                <p className="text-white font-serif text-xl p-6">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif mb-6">Our Team</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl">
            Meet the talented individuals behind our success. Our diverse team brings 
            expertise, creativity, and passion to every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="overflow-hidden rounded-xl mb-4 h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />
    </main>
  );
};

export default Home;