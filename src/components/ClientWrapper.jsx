"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    } else {
      // First visit: keep loading true
      // Set visited flag only after loader completes? Or now?
      // Better to set it after complete to ensure full experience once.
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setShowContent(true);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      
      {/* 
         Here we can choose to:
         1. Hide content until loader finishes (avoids flash of unstyled content or animation conflict)
         2. Render content behind loader (useful for Next.js prefetching)
         
         Given the request for "smooth transition", rendering it always but maybe covering it is safer.
         But to ensure the "Page Entry" animation in layout triggers nicely, we might want to delay it?
         
         Actually, if we render children always, the underlying "PageTransition" might run while covered.
         If we conditionally render children `showContent && children`, then `PageTransition` (initial=hidden)
         will start playing exactly when revealed. This is usually cleaner for "Entry" animations.
      */}
      
      {showContent && (
        <div className="animate-fade-in"> 
           {children}
        </div>
      )}
    </>
  );
}
