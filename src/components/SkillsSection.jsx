"use client";
import { motion } from "framer-motion";
import { FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaReact, FaServer } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { fadeIn, staggerContainer } from "../utils/animations";

const skills = {
  Frontend: [
    { name: "React.js", icon: FaReact, color: "text-blue-400", level: 85 },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", level: 75 },
    { name: "Redux", icon: SiRedux, color: "text-purple-500", level: 70 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", level: 90 },
    { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-400", level: 80 },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", level: 95 },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", level: 90 },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: 70 },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400", level: 75 },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400", level: 70 },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", level: 65 },
    { name: "REST APIs", icon: FaServer, color: "text-blue-300", level: 80 },
    { name: "Mongoose", icon: FaDatabase, color: "text-red-400", level: 70 },
  ],
};

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
            <skill.icon className={`text-xl ${skill.color}`} />
            <span className="font-semibold text-gray-200">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <motion.div 
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-6"
      >
        <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-3xl md:text-5xl font-bold text-center mb-4">
          Technical Skills
        </motion.h2>

        <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)} 
            className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
            My skillset is built on a foundation of hands-on projects and continuous learning. 
            These percentages represent my confidence and practical experience in applying these technologies in real-world scenarios.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Frontend Column */}
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
            <h3 className="text-2xl font-bold mb-8 text-purple-400 border-b border-gray-700 pb-2 inline-block">Frontend Development</h3>
            <div className="glass p-8 rounded-2xl">
                {skills.Frontend.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
            </div>
          </motion.div>

          {/* Backend Column */}
          <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
            <h3 className="text-2xl font-bold mb-8 text-pink-400 border-b border-gray-700 pb-2 inline-block">Backend & Database</h3>
            <div className="glass p-8 rounded-2xl">
                {skills.Backend.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
