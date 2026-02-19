import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/ssdglogo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleServicesScroll = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('services-section');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  const handleStudioScroll = () => {
    const studioSection = document.getElementById('studio-section');
    if (studioSection) {
      studioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('studio-section');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-5 flex justify-between items-center">
      {/* Logo - Navigate to Home */}
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => handleNavigation('/')}
      >
        <img src={logo} alt="SSDG Logo" className="w-8 h-8" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
        <button 
          onClick={handleServicesScroll}
          className="hover:text-brandGold transition-colors bg-none border-none cursor-pointer"
        >
          Services
        </button>
        <button 
          onClick={handleStudioScroll}
          className="hover:text-brandGold transition-colors bg-none border-none cursor-pointer"
        >
          Our Studio
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <Search size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
        <button 
          className="bg-brandGold text-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brandGold/20 hover:bg-brandGold/90 transition-colors cursor-pointer"
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;