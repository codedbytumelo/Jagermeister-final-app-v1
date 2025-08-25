"use client";

import { Fragment } from "react";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function Sponsors() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50 text-xl mb-12">
          Meet Our Partners
        </h3>

        {/* Masked Scrolling Container */}
        <div
          className="overflow-hidden relative"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate the logos twice for seamless loop */}
            {Array.from({ length: 2 }).map((_, idx) => (
              <Fragment key={idx}>
                {logos.map((logo) => (
                  <div
                    key={logo.name + idx}
                    className="flex-shrink-0"
                    style={{ width: 120 }}
                  >
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={120}
                      height={48}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
