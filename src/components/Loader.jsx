"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Increment logic: slower at start/end, faster in middle (simulated)
        const increment = Math.random() * 10;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onComplete();
      }, 500); // Small delay at 100% before exit
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        y: -1000, 
        opacity: 0,
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] // Custom generic cubic-bezier for "cinematic" feel
        } 
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-64 md:w-96 text-center">
        {/* Progress Text */}
        <motion.div 
          className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-mono mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {Math.round(progress)}%
        </motion.div>

        {/* Custom Progress Bar */}
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest">
            Loading Experience
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;
