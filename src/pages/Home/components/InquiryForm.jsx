import { Upload, Send } from 'lucide-react';

export const InquiryForm = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-8 grid md:grid-cols-2 gap-16 items-center" id='inquiry-section'>
      <div>
        <h2 className="text-4xl font-serif mb-6">Start a Project</h2>
        <p className="text-gray-500 mb-8 font-light leading-relaxed">
          Need custom dimensions or bulk pricing for a corporate event? 
          Our specialists handle large-scale requirements with precision.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
            <span className="w-8 h-px bg-brandGold"></span> Direct: +1 234 567 890
          </div>
          <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
            <span className="w-8 h-px bg-brandGold"></span> Email: orders@prismprints.com
          </div>
        </div>
      </div>

      <form className="bg-white p-10 border border-gray-100 shadow-xl space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="border-b border-gray-200 py-3 focus:border-brandGold outline-none transition-colors text-sm" />
          <input type="email" placeholder="Email" className="border-b border-gray-200 py-3 focus:border-brandGold outline-none transition-colors text-sm" />
        </div>
        <select className="w-full border-b border-gray-200 py-3 text-sm text-gray-400 outline-none focus:border-brandGold bg-transparent">
          <option>Select Service</option>
          <option>Printing Services</option>
          <option>Branding Works</option>
          <option>Packaging</option>
        </select>
        <textarea placeholder="Tell us about your requirements" className="w-full border-b border-gray-200 py-3 h-24 outline-none focus:border-brandGold text-sm resize-none"></textarea>
        
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-brandGold transition-colors">
            <Upload size={16} />
            <span className="text-[10px] uppercase font-bold tracking-widest">Attach Artwork</span>
            <input type="file" className="hidden" />
          </label>
          <button className="bg-brandBlack text-white px-8 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-brandGold transition-all">
            Send Inquiry <Send size={14} />
          </button>
        </div>
      </form>
    </section>
  );
};