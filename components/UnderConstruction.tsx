"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import UnauthorizedContent from "./UnauthorizedContent";
import { UnderConstructionContent } from "./UnderConstructionContent";

export const UnderConstruction: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = "Access Denied | SecureApp";

    // Log access attempt (for example purposes)
    console.log("Unauthorized access attempt logged");

    // Fade in animation for the whole page
    const timer = setTimeout(() => {
      document.getElementById("page-content")?.classList.remove("opacity-0");
      document.getElementById("page-content")?.classList.add("opacity-100");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-white relative'>
      <AnimatedBackground />
      <div
        id='page-content'
        className='min-h-screen flex flex-col relative z-10 opacity-0 transition-opacity duration-700'>
        <Header />
        <main className='flex-grow flex items-center justify-center py-16 px-4'>
          <UnderConstructionContent />
        </main>
        <Footer />
      </div>
    </div>
  );
};
