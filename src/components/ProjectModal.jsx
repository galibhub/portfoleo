"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass max-w-2xl w-full rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-red-500 text-2xl"
        >
          <FaTimes />
        </button>
        <h3 className="text-2xl font-bold text-purple-400 mb-4">{project.title}</h3>
        <div className="w-full h-48 relative mb-6 rounded-lg overflow-hidden opacity-80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-300 text-sm">
          <p>
            <strong className="text-white">Tech Stack:</strong> {project.details.stack}
          </p>
          <p>
            <strong className="text-white">Description:</strong> {project.details.description}
          </p>
          <p>
            <strong className="text-white">Challenges:</strong> {project.details.challenges}
          </p>
          <p>
            <strong className="text-white">Future Plans:</strong> {project.details.future}
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href={project.details.live}
            target="_blank"
            className="flex-1 text-center py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
          >
            Live Link <FaExternalLinkAlt className="text-sm" />
          </a>
          <a
            href={project.details.github}
            target="_blank"
            className="flex-1 text-center py-2 border border-gray-600 rounded-lg text-white hover:bg-white/10 flex items-center justify-center gap-2"
          >
            GitHub Algo/Client <FaGithub />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
