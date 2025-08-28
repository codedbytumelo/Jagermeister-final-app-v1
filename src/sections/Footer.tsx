"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import JagermeisterLogo from "@/assets/images/Jägermeister_logo-word.png";

const socialLinks = [
  { href: "#", icon: FaInstagram },
  { href: "#", icon: FaYoutube },
  { href: "#", icon: FaFacebook },
  { href: "#", icon: FaTwitter },
  { href: "#", icon: FaLinkedin },
];

const footerNavigation = {
  Company: [
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Corporate Website", href: "#" },
  ],
  Additional: [
    { label: "FAQ", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Support", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    console.log("Subscribed:", email);
  };

  return (
    <footer className="w-full text-gray-300 bg-[#1B4D3E] pt-20">
      {/* Newsletter */}
      <div className="mx-auto max-w-[1200px] w-full px-6">
        <div className="rounded-2xl p-10 mb-16 py-16 bg-[#FF6C2C]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="opacity-80 pt-6 text-sm text-white">
                Be the first to receive updates on the Jägermeister Design
                Awards, exclusive invites, and creative highlights.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-shrink-0 w-full lg:w-auto"
            >
              <div className="flex flex-col xl:flex-row gap-2">
                <div className="flex-1 lg:w-80">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full px-4 py-7 bg-white/25 rounded-full border-none placeholder-white text-white"
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  className="px-10 py-7 rounded-full bg-white text-[#1B4D3E] hover:bg-gray-200"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs opacity-80 mt-6 text-white">
                By subscribing you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col w-full mx-auto max-w-7xl px-6 lg:flex-row items-start justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/3">
          <Image
            src={JagermeisterLogo}
            alt="Jägermeister Logo"
            width={200}
            height={50}
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-200">
            Celebrating creative excellence. The Jägermeister Design Awards
            honor outstanding achievements in design and innovation.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:opacity-75 transition-opacity duration-200"
                aria-label={`Social link ${index + 1}`}
              >
                <link.icon className="h-6 w-6 text-gray-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-8 sm:gap-12 lg:gap-20 lg:justify-end">
            {Object.entries(footerNavigation).map(([title, links]) => (
              <div key={title}>
                <div className="mb-4 font-semibold text-sm text-orange-400">
                  {title}
                </div>
                <ul className="space-y-3 text-gray-300">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:underline text-sm transition-all duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-xs text-center text-gray-400 border-t border-white/10 py-6">
        © 2025 Powered by Jägermeister. All rights reserved.
      </div>
    </footer>
  );
}
