"use client";
import { motion } from "framer-motion";
import { FaCode, FaGamepad, FaGraduationCap } from "react-icons/fa";
import { fadeIn, staggerContainer } from "../utils/animations";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <motion.div 
        variants={staggerContainer(0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-6"
      >
        <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-3xl md:text-5xl font-bold text-center mb-16">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="grid gap-6 order-2 md:order-1">
            {[
              { 
                icon: FaCode, 
                title: "My Journey", 
                text: "Started with C/C++ in university, fell in love with Web Development. Now mastering the MERN stack to build production-ready apps.", 
                colorClass: "border-purple-500/20", 
                iconClass: "bg-purple-500/20 text-purple-400" 
              },
              { 
                icon: FaGraduationCap, 
                title: "Education", 
                text: "BSc in CSE @ Daffodil International University. Active participant in coding contests & tech clubs.", 
                colorClass: "border-pink-500/20", 
                iconClass: "bg-pink-500/20 text-pink-400" 
              },
              { 
                icon: FaGamepad, 
                title: "Beyond Code", 
                text: "When not debugging, I enjoy gaming, exploring new tech trends, and traveling. I believe in continuous learning.", 
                colorClass: "border-blue-500/20", 
                iconClass: "bg-blue-500/20 text-blue-400" 
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                className={`glass p-6 rounded-2xl border ${item.colorClass} flex items-start gap-4 hover:bg-white/5 transition-all group`}
              >
                <div className={`w-12 h-12 rounded-lg ${item.iconClass} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
             variants={fadeIn("left", "tween", 0.2, 1)}
             className="order-1 md:order-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-purple-400">Passionate MERN Developer</h3>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a <strong className="text-white">MERN Stack Web Developer</strong> based in Dhaka, Bangladesh. My passion lies in building modern, scalable, and responsive web applications.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in creating role-based dashboards, managing REST APIs, and implementing secure authentication workflows. Currently, I am deeply focused on mastering <strong className="text-white">Next.js</strong> for building high-performance applications. My long-term vision is to evolve into an <strong className="text-white">AI/ML Expert</strong>, bridging the gap between intelligent algorithms and seamless web experiences.
            </p>
            
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
              <div className="glass p-4 rounded-xl border-l-4 border-purple-500">
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  <li>
                    <strong className="text-purple-300">Competitive Programming:</strong> Finalist in University Contest (1st Semester, Top 100) & &quot;Unlock the Algorithm&quot; (3rd Semester, Top 50) at Daffodil International University.
                  </li>
                  <li>Developed 3+ Full Stack MERN Applications with secure Auth & Payments.</li>
                  <li>Consistent problem solver focusing on DSA and System Design.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
