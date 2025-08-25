"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logoImage from "@/assets/images/Jägermeister_logo-word.png";
import { twMerge } from "tailwind-merge";
import { Info, Users, BookOpen, FileText, ClipboardList, Phone, HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Type definitions
interface SubLink {
  label: string;
  href?: string;
  icon: React.ReactNode;
}

interface NavLink {
  label: string;
  href?: string; // only for top-level links without subMenu
  subMenu?: SubLink[];
}

// Nav links
const navLinks: NavLink[] = [
  {
    label: "About",
    subMenu: [
      { label: "Our Story", href: "#our-story", icon: <BookOpen size={16} /> },
      { label: "Meet the Judges", href: "#meet-judges", icon: <Users size={16} /> },
    ],
  },
  {
    label: "Competition",
    subMenu: [
      { label: "Rules", href: "#rules", icon: <CheckCircle size={16} /> },
      { label: "Design Brief", href: "#design-brief", icon: <FileText size={16} /> },
      { label: "Categories", href: "#categories", icon: <ClipboardList size={16} /> },
    ],
  },
  {
    label: "Support",
    subMenu: [
      { label: "Contact Us", href: "#contact", icon: <Phone size={16} /> },
      { label: "FAQs", href: "#faqs", icon: <HelpCircle size={16} /> },
      { label: "Help Center", href: "#help-center", icon: <Info size={16} /> },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <section className="py-4 mx-auto fixed w-full top-0 z-50">
        <div className="container max-w-5xl mx-auto">
          <div className="border border-white/15 rounded-[27px] md:rounded-full backdrop-blur bg-[rgba(27,77,62,0.7)]">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
              
              {/* Logo */}
              <div>
                <Link href="/">
                  <Image src={logoImage} alt="Jägermeister logo" width={120} height={40} className="h-9 md:h-auto w-auto" />
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="lg:flex justify-center items-center hidden max-w-[700px] mx-auto gap-4 font-medium">
                {navLinks.map((link) => (
                  <div key={link.label} className="relative"
                       onMouseEnter={() => setOpenDropdown(link.label)}
                       onMouseLeave={() => setOpenDropdown(null)}>
                    {link.subMenu ? (
                      <>
                        <button className="hover:text-[#d2f34c] transition-colors text-sm">
                          {link.label}
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 mt-2 w-44 bg-[#3c8968] text-white rounded-md shadow-lg z-50"
                            >
                              {link.subMenu.map((sub) => (
                                <Link key={sub.label} href={sub.href || "#"} className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#d2f34c] hover:text-[#244034] transition-colors">
                                  {sub.icon}{sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={link.href || "#"} className="hover:text-[#d2f34c] transition-colors text-sm">
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side - Buttons & Mobile Menu */}
              <div className="flex justify-end gap-4">
                <button aria-label="Toggle Menu" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && "rotate-45 -translate-y-1")} />
                    <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && "opacity-0")} />
                    <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && "-rotate-45 translate-y-1")} />
                  </svg>
                </button>

                {/* Desktop Buttons */}
                <Link href="/login"><Button variant="secondary" className="hidden md:inline-flex items-center">Log In</Button></Link>
                <Link href="/signup"><Button variant="primary" className="hidden md:inline-flex items-center">Create Account</Button></Link>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-start gap-1 py-4 max-h-[80vh] overflow-y-auto px-2">
                    {navLinks.map((link) =>
                      link.subMenu ? (
                        <div key={link.label} className="w-full">
                          <p className="font-medium px-3 py-2">{link.label}</p>
                          <div className="flex flex-col gap-1 w-full">
                            {link.subMenu.map((sub) => (
                              <Link key={sub.label} href={sub.href || "#"} className="flex items-center gap-2 px-4 py-2 w-full text-sm hover:bg-[#d2f34c] hover:text-[#244034] transition-colors rounded">
                                {sub.icon}{sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link key={link.label} href={link.href || "#"} className="px-4 py-2 text-sm hover:text-[#d2f34c] transition-colors">
                          {link.label}
                        </Link>
                      )
                    )}

                    {/* Mobile Buttons at bottom */}
                    <div className="mt-4 w-full flex flex-col gap-2 px-2">
                      <Link href="/login"><Button variant="secondary" className="w-full">Log In</Button></Link>
                      <Link href="/signup"><Button variant="primary" className="w-full">Create Account</Button></Link>
                    </div>
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
