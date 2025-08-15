"use client";

import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/Jägermeister_logo-word.png";
import Button from "@/components/Button";
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-4 lg:items-center mx-auto fixed w-full top-0 z-50">
        <div className="container max-w-5xl lg:items-center mx-auto">
          <div 
  className="border border-white/15 rounded-[27px] md:rounded-full backdrop-blur" 
  style={{ backgroundColor: "rgba(27, 77, 62, 0.7)" }}
>
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
              {/* Logo Section */}
              <div>
                <Image
                  src={logoImage}
                  alt="Jagermeister-app logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>

              {/* Desktop Nav */}
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right Side - Buttons & Menu */}
              <div className="flex justify-end gap-4">
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
                  className="feather feather-menu md:hidden"
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

                {/* Desktop Login / Signup */}
                <Link href="/login">
                  <Button
                    variant="secondary"
                    className="hidden md:inline-flex items-center"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    variant="primary"
                    className="hidden md:inline-flex items-center"
                  >
                    Signup
                  </Button>
                </Link>
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

                    {/* Mobile Login / Signup */}
                    <Link href="/login">
                      <Button variant="secondary" className="mt-4">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button variant="primary" className="mt-2">
                        Signup
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="pb-[80px] md:pd-[90px] lg:pb-[100px]"></div>
    </>
  );
}
