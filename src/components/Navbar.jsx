"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaBars, FaCode, FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";
import { navVariants } from "../utils/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(() => [
    { name: "Home", path: "#home", icon: FaHome },
    { name: "About", path: "#about", icon: FaUser },
    { name: "Skills", path: "#skills", icon: FaCode },
    { name: "Projects", path: "#projects", icon: FaFolderOpen },
    { name: "Contact", path: "#contact", icon: FaEnvelope },
  ], []);

  // ScrollSpy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.path.substring(1));
      
      const scrollPosition = window.scrollY + 150; // Offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(path.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed navbar height
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed w-full z-50 top-0 start-0 glass-nav transition-all duration-300"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group" onClick={(e) => handleLinkClick(e, '#home')}>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Galib<span className="text-purple-500">&lt;/&gt;</span>
          </span>
        </Link>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden md:inline-block text-white bg-white/10 hover:bg-white/20 focus:scale-105 active:scale-95 font-medium rounded-full text-sm px-6 py-2 text-center transition-all border border-white/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            Hire Me
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="text-xl" />
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navItems.map((item) => {
              const active = activeSection === item.path.substring(1);
              return (
                <li key={item.name} className="relative w-fit">
                  <Link
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    className={`flex items-center gap-2 py-2 px-3 rounded md:p-0 transition-colors duration-300 relative z-10 ${
                      active
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                     <motion.span
                        animate={active ? { scale: 1.1, color: "#fff" } : { scale: 1, color: "#9ca3af" }}
                        className={`text-lg ${active ? "text-purple-400" : ""}`}
                     >
                       <item.icon />
                     </motion.span>
                    {item.name}
                  </Link>
                  {active && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
