"use client";

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xl font-bold text-white">
          Galib<span className="text-purple-500">&lt;/&gt;</span>
        </span>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ibrahim Ahmed Galib. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
