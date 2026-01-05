"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "E-Tutor Platform",
    image: "/assets/images/etutor.png",
    tag: "MERN",
    details: {
      stack: "React, Tailwind, Node.js, Express, MongoDB, Firebase Auth.",
      description: "A tuition management platform allowing students to find tutors and tutors to manage classes.",
      challenges: "Implementing role-based dashboard routing (Admin vs Tutor vs Student) securely was complex.",
      future: "Integrating a real-time chat system and Zoom API for live classes.",
      live: "https://etutionbd.netlify.app",
      github: "https://github.com/galibhub/e-tuitor-client"
    }
  },
  {
    id: 2,
    title: "Export–Import Hub",
    image: "/assets/images/export_import.png",
    tag: "MERN",
    details: {
      stack: "MERN Stack, Firebase, Tailwind CSS.",
      description: "Dashboard for managing export/import logic, client lists, and shipment tracking.",
      challenges: "Managing complex state for inventory data updates in real-time.",
      future: "Add data visualization charts for monthly profit/loss reports.",
      live: "https://export-import-hub.netlify.app",
      github: "https://github.com/galibhub/export-import-client"
    }
  },
  {
    id: 3,
    title: "Hero App",
    image: "/assets/images/hero.png",
    tag: "JS Core",
    details: {
      stack: "HTML5, CSS3, Vanilla JavaScript (ES6+).",
      description: "A dynamic interactive application demonstrating core DOM manipulation, event delegation, and responsive UI logic without frameworks.",
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
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
