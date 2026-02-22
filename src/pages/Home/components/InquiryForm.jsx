// 




//---
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

export const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_eobvkqa", // ✅ your service ID
        "template_asnikdk", // ✅ your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
          reply_to: formData.email,
        },
        "oKM9hue-ffRYO8gpM" // ✅ your public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Inquiry Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Check console.");
      });
  };

  return (
    <section
      className="max-w-7xl mx-auto py-24 px-8 grid md:grid-cols-2 gap-16 items-center"
      id="inquiry-section"
    >
      <div>
        <h2 className="text-4xl font-serif mb-6">Need an help ?</h2>
        <p className="text-gray-500 mb-8 font-light leading-relaxed">
          Need custom dimensions or bulk pricing for a corporate event?
          Our specialists handle large-scale requirements with precision.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 border border-gray-100 shadow-xl space-y-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-b border-gray-200 py-3 outline-none text-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-b border-gray-200 py-3 outline-none text-sm"
          />
        </div>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border-b border-gray-200 py-3 text-sm outline-none"
        >
          <option value="">Select Service</option>
          <option value="Printing Services">Printing Services</option>
          <option value="Branding Works">Branding Works</option>
          <option value="Packaging">Packaging</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your requirements"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border-b border-gray-200 py-3 h-24 outline-none text-sm resize-none"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all flex justify-center items-center gap-2"
        >
          Submit Inquiry <Send size={16} />
        </button>
      </form>
    </section>
  );
};