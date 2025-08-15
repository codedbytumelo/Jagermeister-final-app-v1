"use client";

import Image from "next/image";
import { useState } from "react";
import JagermeisterLogo from "@/assets/images/Jägermeister_logo-word.png";
import Button from "@/components/Button";

const companyLinks = [
    { href: "#", label: "Contact Us" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Corporate Website" },
];

const additionalLinks = [
    { href: "#", label: "FAQ" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Press" },
    { href: "#", label: "Support" },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setEmail("");
        // Add your newsletter signup logic here
    };

    return (
       <footer className="w-full text-gray-300 py-8 overflow-hidden bg-[#1B4D3E]">
  <div className="container mx-auto px-4">
    {/* Layout wrapper */}
    <div
      className="
        flex flex-col gap-8
        sm:grid sm:grid-cols-3 sm:gap-12
        lg:flex lg:flex-row lg:justify-between lg:items-start
      "
    >
      {/* Logo + Tagline */}
      <div
        className="
          order-2 sm:order-1 lg:order-1
          flex flex-col items-center sm:items-start text-center sm:text-left
        "
      >
        <Image
          src={JagermeisterLogo}
          alt="Jägermeister Logo"
          width={200}
          height={50}
          className="h-12 w-auto mb-4"
        />
        <p className="max-w-sm text-sm sm:text-base">
          Celebrating creative excellence. The Jägermeister Design Awards honor
          outstanding achievements in design and innovation.
        </p>
      </div>

      {/* Company Links */}
      <div
        className="
          order-3 sm:order-2 lg:order-2
          text-center sm:text-left
        "
      >
        <h3 className="font-semibold mb-2 text-orange-400">Company</h3>
        <ul className="space-y-1">
          {companyLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Links */}
      <div
        className="
          order-4 sm:order-3 lg:order-2
          text-center sm:text-left
        "
      >
        <h3 className="font-semibold mb-2 text-orange-400">Additional</h3>
        <ul className="space-y-1">
          {additionalLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Form */}
      <form
        className="
          order-1 sm:order-4 lg:order-3
          flex border border-white/15 rounded-full overflow-hidden
          w-full sm:col-span-3 sm:max-w-full sm:justify-center lg:max-w-xs lg:mx-0
        "
        style={{ maxWidth: '100%' }}
      >
        <input
          type="email"
          placeholder="Subscribe to our newsletter"
          className="bg-transparent px-4 py-2 flex-grow focus:outline-none text-sm min-w-0"
          style={{ minWidth: 0 }}
        />
        <Button
          type="submit"
          variant="primary"
          size="sm"
          className="rounded-none px-5 py-2 h-full flex-shrink-0"
        >
          Signup
        </Button>
      </form>
    </div>

    {/* Copyright */}
    <div className="mt-6 text-xs text-center text-gray-400">
      © 2025 Jägermeister Design Awards. All rights reserved. | Reserved by Right
    </div>
  </div>
</footer>


    );
}
