"use client";
import { motion } from "framer-motion";
import { FaCode, FaGamepad, FaGraduationCap } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className="grid gap-6 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-purple-500/20 flex items-start gap-4 hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                <FaCode className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">My Journey</h3>
                <p className="text-gray-400 text-sm">Started with C/C++ in university, fell in love with Web Development. Now mastering the MERN stack to build production-ready apps.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-pink-500/20 flex items-start gap-4 hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-110 transition-transform">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-gray-200 text-sm font-medium">BSc in Computer Science & Engineering</p>
                <p className="text-gray-400 text-xs">Daffodil International University (Running)</p>
                <p className="text-gray-500 text-xs mt-1">Foundational knowledge in DSA, OOP (Java), and Database Systems.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-blue-500/20 flex items-start gap-4 hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                <FaGamepad className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Beyond Code</h3>
                <p className="text-gray-400 text-sm">When not debugging, I enjoy gaming, exploring new tech trends, and traveling. I believe in continuous learning and creative problem solving.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-purple-400">Passionate MERN Developer</h3>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a <strong className="text-white">MERN Stack Web Developer</strong> based in Dhaka, Bangladesh. My passion lies in building modern, scalable, and responsive web applications.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in creating role-based dashboards, managing REST APIs, and implementing secure authentication workflows. I enjoy working on backend architecture and am currently exploring AI integration. My goal is to build software that solves real-world problems.
            </p>
            
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
              <div className="glass p-4 rounded-xl border-l-4 border-purple-500">
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  <li>Developed 3+ Full Stack MERN Applications.</li>
                  <li>Implemented Secure Payment Gateway (Stripe) & JWT Auth.</li>
                  <li>Certified in Java & OOP by IBM.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
