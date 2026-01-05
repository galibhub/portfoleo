"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaEnvelope, FaGithub, FaJs, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left z-10"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full border border-purple-500/30">
            Open to Work
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I’m <br /> <span className="text-gradient">Ibrahim Ahmed Galib</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
            MERN Stack Web Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Based in <span className="text-white">Dhaka, Bangladesh</span>. I build modern, scalable, and production-ready web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <a href="#" className="btn-gradient text-white font-semibold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105 flex items-center gap-2">
              Download Resume <FaDownload />
            </a>
            
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="https://github.com/galibhub" target="_blank" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-ahmed-galib/" target="_blank" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
                <FaLinkedinIn />
              </a>
              <a href="mailto:ibrahimgalib00@gmail.com" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
            <div className="w-full h-full rounded-full border-2 border-white/10 overflow-hidden relative z-10 glass p-2">
              <Image 
                src="/assets/images/profile.jpg" 
                alt="Ibrahim Ahmed Galib" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-[#0f0c29] border border-purple-500/30 p-3 rounded-full shadow-lg shadow-purple-500/20 animate-float z-20">
              <FaReact className="text-2xl text-cyan-400" />
            </div>
            <div className="absolute top-1/2 -left-8 bg-[#0f0c29] border border-green-500/30 p-3 rounded-full shadow-lg shadow-green-500/20 animate-float-delayed z-20">
              <FaNodeJs className="text-2xl text-green-500" />
            </div>
            <div className="absolute bottom-4 -right-2 bg-[#0f0c29] border border-yellow-500/30 p-3 rounded-full shadow-lg shadow-yellow-500/20 animate-float z-20">
              <FaJs className="text-2xl text-yellow-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
