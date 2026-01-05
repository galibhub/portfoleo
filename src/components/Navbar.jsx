"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 glass-nav transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Galib<span className="text-purple-500">&lt;/&gt;</span>
          </span>
        </Link>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="#contact"
            className="hidden md:inline-block text-white bg-white/10 hover:bg-white/20 focus:ring-4 focus:outline-none focus:ring-purple-900 font-medium rounded-full text-sm px-6 py-2 text-center transition-all border border-white/10"
          >
            Hire Me
          </a>
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
            <li>
              <Link
                href="#home"
                className="block py-2 px-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-400 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-3 text-gray-300 hover:text-white md:p-0 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
