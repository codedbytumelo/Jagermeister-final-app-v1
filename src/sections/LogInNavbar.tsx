"use client";

import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/Jägermeister_logo-word.png";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Guide", href: "#guide" },
  { label: "Judges", href: "#judges" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function LogInNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-4 lg:items-center mx-auto fixed w-full top-0 z-50">
        <div className="container max-w-5xl lg:items-center mx-auto">
          <div
            className="border border-white/15 rounded-[27px] md:rounded-full backdrop-blur"
            style={{ backgroundColor: "rgba(27, 77, 62, 0.7)" }}
          >
            <div className="flex items-center justify-between p-2 px-4 md:pr-2">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src={logoImage}
                    alt="Jagermeister-app logo"
                    className="h-9 md:h-auto w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex gap-6 font-medium justify-center flex-1">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="flex justify-end lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="pb-[80px] md:pb-[90px] lg:pb-[100px]"></div>
    </>
  );
}
