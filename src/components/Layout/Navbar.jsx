import { Search, ShoppingBag } from 'lucide-react';
import logo from "../../assets/logo2.jpeg";
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/*<div className="w-8 h-8 bg-brandBlack flex items-center justify-center text-white font-bold">P</div>*/}
       {/*<span className="font-bold tracking-tighter text-xl">SSD</span>*/}
       <img src={logo} alt="Logo" className="h-10 w-auto" />

      </div>

      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
        <a href="#" className="hover:text-brandGold transition-colors">Services</a>
        <a href="#" className="hover:text-brandGold transition-colors">Bulk Orders</a>
        <a href="#" className="hover:text-brandGold transition-colors">Portfolio</a>
        <a href="#" className="hover:text-brandGold transition-colors">Our Studio</a>
      </div>

      <div className="flex items-center gap-6">
        <Search size={18} className="text-gray-400 cursor-pointer hover:text-black" />
        <button className="bg-brandGold text-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brandGold/20">
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;