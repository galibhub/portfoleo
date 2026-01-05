"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { fadeIn, staggerContainer } from "../utils/animations";

const ContactSection = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS credentials missing");
      setStatus("error");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.from_name,
          to_name: "Ibrahim Ahmed Galib",
          from_email: form.from_email,
          to_email: "ibrahimgalib00@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
          
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus("error");
        }
      );
  };
  return (
    <section id="contact" className="py-20">
      <motion.div 
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-6"
      >
        <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-3xl md:text-5xl font-bold text-center mb-16">
            Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello!</p>
            
            <div className="glass p-6 rounded-xl border border-purple-500/20 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-white font-medium">ibrahimgalib00@gmail.com</p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl border border-purple-500/20 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-white font-medium">+8801776324437</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-purple-500/20 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400">WhatsApp</p>
                <p className="text-white font-medium">+8801776324437</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="glass p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-3 transition-colors" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-3 transition-colors" 
                  placeholder="name@example.com" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-3 transition-colors" 
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              
              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
              {status === "success" && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}

              <div className="flex justify-end">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    disabled={loading}
                    className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
