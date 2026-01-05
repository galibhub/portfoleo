"use client";
import { pageTransition } from "@/utils/animations";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
