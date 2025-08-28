"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ScrollContextType {
  scrollY: number;
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ scrollY: 0, isScrolled: false });

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, isScrolled: scrollY > 50 }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
