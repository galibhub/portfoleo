"use client";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Contact</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello!</p>
            
            <div className="glass p-6 rounded-xl border border-purple-500/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-white font-medium">ibrahimgalib00@gmail.com</p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl border border-purple-500/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-white font-medium">+8801776324437</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-purple-500/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400">WhatsApp</p>
                <p className="text-white font-medium">+8801776324437</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            <form className="space-y-6 relative z-10" action="mailto:ibrahimgalib00@gmail.com" method="post" encType="text/plain">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                <input type="text" className="w-full bg-black/30 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-3" placeholder="Your Name" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                <input type="email" className="w-full bg-black/30 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-3" placeholder="name@example.com" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                <textarea rows="4" className="w-full bg-black/30 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-3" placeholder="Leave a message..."></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
