"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { fadeIn } from "../utils/animations";

const ProjectCard = ({ project, openModal, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="glass rounded-xl overflow-hidden group hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col"
    >
      <div className="h-48 overflow-hidden relative bg-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-xs font-bold px-3 py-1 rounded-full border border-white/20">
          {project.tag}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-xs text-purple-300 font-medium mb-3">{project.subtitle}</p>
        <button
          onClick={() => openModal(project)}
          className="mt-auto w-full text-center text-sm bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
        >
          View Details <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
