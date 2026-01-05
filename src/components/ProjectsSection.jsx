"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeIn, staggerContainer } from "../utils/animations";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "E-Tutor Platform",
    subtitle: "A request-matching platform for tutors & students.",
    image: "/assets/images/etutor.png",
    tag: "MERN",
    details: {
      stack: "React, Tailwind, Node.js, Express, MongoDB, Firebase Auth.",
      description: "A comprehensive tuition management platform. It solved the problem of finding reliable tutors by creating a request-matching system.",
      challenges: "Implementing role-based dashboard routing (Admin vs Tutor vs Student) securely was complex. Learned deeply about JWT and protected routes.",
      future: "Integrating a real-time chat system and Zoom API for live classes.",
      live: "https://etutionbd.netlify.app",
      github: "https://github.com/galibhub/e-tuitor-client"
    }
  },
  {
    id: 2,
    title: "Export–Import Hub",
    subtitle: "Inventory & shipment tracking dashboard.",
    image: "/assets/images/export_import.png",
    tag: "MERN",
    details: {
      stack: "MERN Stack, Firebase, Tailwind CSS.",
      description: "A dashboard designed to track shipments and manage client inventories. Taught me how to structure complex database schemas for inventory logic.",
      challenges: "Managing complex state for inventory data updates in real-time. Mastered Redux/Context API for state management.",
      future: "Add data visualization charts for monthly profit/loss reports.",
      live: "https://export-import-hub.netlify.app",
      github: "https://github.com/galibhub/export-import-client"
    }
  },
  {
    id: 3,
    title: "Hero App",
    subtitle: "Interactive DOM manipulation showcase.",
    image: "/assets/images/hero.png",
    tag: "JS Core",
    details: {
      stack: "HTML5, CSS3, Vanilla JavaScript (ES6+).",
      description: "A project built to master the core fundamentals of JavaScript without frameworks. It mimics modern interactive UI behavior.",
      challenges: "Implementing complex animations and managing state logic purely with Vanilla JS while maintaining high performance.",
      future: "Migrating the codebase to React.js and integrating AI/ML models to introduce dynamic content generation and smarter user interactions.",
      live: "https://hero-app-galib.netlify.app",
      github: "https://github.com/galibhub/hero-app"
    }
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 relative">
      <motion.div 
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-6"
      >
        <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-3xl md:text-5xl font-bold text-center mb-6">
            My Projects
        </motion.h2>

        <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)} 
            className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
            These projects represent my journey from learning the basics to building complex full-stack applications. 
            Each one was built to solve a specific problem and master a new set of technologies.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
