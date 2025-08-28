"use client";

import { useScroll } from "@/components/ScrollProvider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import jaegerLogo from "@/assets/images/Jager-Logo.png";

export default function RotatingBadge() {
  const { scrollY } = useScroll();
  const prevScrollY = useRef(0);
  const [rotation, setRotation] = useState(0);
  const targetRotation = useRef(0);
  const requestRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Update target rotation based on scroll delta
  useEffect(() => {
    setIsVisible(scrollY > 50);

    const delta = scrollY - prevScrollY.current;
    prevScrollY.current = scrollY;

    targetRotation.current += delta * 0.5; // adjust speed factor
  }, [scrollY]);

  // Smooth animation loop
  const animate = () => {
    setRotation((prev) => prev + (targetRotation.current - prev) * 0.1); // 0.1 = easing factor
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 w-16 h-16 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <Image
        src={jaegerLogo}
        alt="Jaegermeister Logo"
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
  );
}
