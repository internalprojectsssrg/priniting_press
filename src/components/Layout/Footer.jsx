import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brandBlack text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brandGold flex items-center justify-center text-white font-bold">P</div>
            <span className="font-bold tracking-tighter text-xl">PRISM PRINTS</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading the way in high-fidelity offset printing and innovative corporate branding solutions.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brandGold">Services</h4>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="hover:text-white transition-colors cursor-pointer">Offset Printing</li>
            <li className="hover:text-white transition-colors cursor-pointer">Brand Identity</li>
            <li className="hover:text-white transition-colors cursor-pointer">Premium Packaging</li>
            <li className="hover:text-white transition-colors cursor-pointer">Signage & Boards</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brandGold">Studio</h4>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
            <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
            <li className="hover:text-white transition-colors cursor-pointer">Career</li>
            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brandGold">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Get updates on latest textures and print techniques.</p>
          <div className="flex border-b border-white/20 pb-2">
            <input type="text" placeholder="Email Address" className="bg-transparent outline-none text-sm w-full" />
            <button className="text-brandGold hover:text-white transition-colors">→</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase">
        <p>© 2026 PRISM PRINTS - EXCELLENCE IN EVERY DOT.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;