"use client";
import { motion } from "framer-motion";
import { FaGitAlt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const SkillRow = ({ icon: Icon, colorClass, name, rating }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 w-36">
        <Icon className={`text-xl ${colorClass}`} />
        <span className="font-medium">{name}</span>
      </div>
      <div className="flex">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`skill-dot ${i < rating ? "dot-filled" : "dot-empty"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-purple-400 border-b border-gray-800 pb-2 mb-6">Frontend Development</h3>
            <SkillRow icon={FaReact} colorClass="text-cyan-400" name="React.js" rating={9} />
            <SkillRow icon={FaJs} colorClass="text-yellow-400" name="JavaScript" rating={8} />
            <SkillRow icon={SiTailwindcss} colorClass="text-cyan-300" name="Tailwind CSS" rating={9} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-pink-400 border-b border-gray-800 pb-2 mb-6">Backend & Tools</h3>
            <SkillRow icon={FaNodeJs} colorClass="text-green-500" name="Node.js" rating={7} />
            <SkillRow icon={SiMongodb} colorClass="text-green-400" name="MongoDB" rating={7} />
            <SkillRow icon={FaGitAlt} colorClass="text-red-500" name="Git/GitHub" rating={8} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
