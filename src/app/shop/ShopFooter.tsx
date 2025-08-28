"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ShopFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log("Subscribed email:", email);
      setEmail("");
    }
  };

  const socialLinks = [
    { href: "#", icon: FaInstagram },
    { href: "#", icon: FaYoutube },
    { href: "#", icon: FaFacebook },
    { href: "#", icon: FaTwitter },
    { href: "#", icon: FaLinkedin },
  ];

  const footerNavigation = {
    Products: [
      { label: "Featured", href: "/shop/home#featured" },
      { label: "New Arrivals", href: "/shop/home#new-arrivals" },
      { label: "All Products", href: "/shop/products" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-[#244034] text-white pt-16">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-[#d2f34c]/10 rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 mb-4 lg:mb-0">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-[#d2f34c]">Subscribe to our newsletter</h3>
            <p className="text-white/80 text-sm">Be the first to receive updates, tips, and new products.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full px-4 py-3 text-black w-full sm:w-80"
            />
            <Button
              onClick={handleSubscribe}
              className="bg-[#d2f34c] text-[#244034] rounded-full px-8 py-3 font-bold hover:brightness-110"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Jaegermeister Shop</h2>
          <p className="text-white/80 mb-4">
            Explore our exclusive Jaegermeister-inspired designs. Limited editions, new arrivals, and featured products weekly.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="hover:opacity-75 transition" target="_blank" rel="noopener noreferrer">
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {Object.entries(footerNavigation).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#d2f34c] transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="text-center mt-12 text-white/70 text-sm mb-4">
        &copy; 2025 Jaegermeister Shop. All rights reserved.
      </p>
    </footer>
  );
}
