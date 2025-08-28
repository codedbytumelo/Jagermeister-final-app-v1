"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logoImage from "@/assets/images/Jager-Logo.png";

type NavItem = {
  label: string;
  href: string;
  subMenu?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  openInNewTab?: boolean;
};

// ✅ Shop now goes to Age Gate (/shop/dob) and can open in a new tab
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    subMenu: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "The Judges", href: "/about/judges" },
    ],
  },
  {
    label: "Competition",
    href: "/competition",
    subMenu: [
      { label: "Design Brief", href: "/competition/design-brief" },
      { label: "How To Enter", href: "/competition/how-to-enter" },
    ],
  },
  { label: "Shop", href: "/shop/dob", openInNewTab: true }, // 👈 Age Gate page
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full z-50 bg-[#244034]/95 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logoImage}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-lg text-white">
                Hanger & Manikin
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center space-x-8 text-white">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  {item.openInNewTab ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#d2f34c]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="hover:text-[#d2f34c]">
                      {item.label}
                    </Link>
                  )}
                  {item.subMenu && (
                    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-[#244034] rounded-lg shadow-lg p-2 min-w-[160px]">
                      {item.subMenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-white hover:text-[#d2f34c]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="px-4 py-2 rounded-xl border border-[#d2f34c] text-[#d2f34c] hover:bg-[#d2f34c] hover:text-[#244034] transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-xl bg-[#d2f34c] text-[#244034] hover:bg-[#c1e23b] transition"
              >
                Create Account
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[#244034] shadow-lg"
            >
              <ul className="flex flex-col space-y-2 px-6 py-4 text-white">
                {navItems.map((item) => (
                  <li key={item.label} className="relative">
                    {item.openInNewTab ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 hover:text-[#d2f34c]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 hover:text-[#d2f34c]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.subMenu && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.subMenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="block py-1 text-sm hover:text-[#d2f34c]"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-2 px-6 pb-4">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#d2f34c] text-[#d2f34c] text-center hover:bg-[#d2f34c] hover:text-[#244034] transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#d2f34c] text-[#244034] text-center hover:bg-[#c1e23b] transition"
                >
                  Create Account
                </Link>
              </div>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
