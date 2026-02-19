import React from 'react';
import { motion } from 'framer-motion';

const Studio = () => {
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

  return (
    <main className="min-h-screen pt-20 bg-white" id='studio-section'>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif mb-6">Our Studio</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Experience the heart of our creative process. Our state-of-the-art facility 
            combines cutting-edge technology with traditional craftsmanship, where 
            innovation meets excellence.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-serif mb-12">Studio Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl group"
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

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-serif mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Expertise</h3>
            <p className="text-gray-500 leading-relaxed">
              15+ years of experience in printing and branding with a proven track record 
              of delivering exceptional results for clients across industries.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Technology</h3>
            <p className="text-gray-500 leading-relaxed">
              State-of-the-art equipment and modern techniques combined with traditional 
              craftsmanship ensure superior quality in every project.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Quality</h3>
            <p className="text-gray-500 leading-relaxed">
              Rigorous quality control and attention to detail guarantee that every product 
              meets our high standards and exceeds client expectations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Studio;