"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export interface Profile {
  id: number;
  name: string;
  avatar: StaticImageData; // make sure your imports from /assets/images are of type StaticImageData
  description: string;
}

interface ProfileColomnProps {
  profiles: Profile[]; // <-- must be an array
  direction?: "up" | "down";
  speed?: number; // higher = slower
}

export default function ProfileColomn({
  profiles = [],
  direction = "up",
  speed = 20,
}: ProfileColomnProps) {
  if (!profiles || !Array.isArray(profiles)) return null;

  // Duplicate profiles for seamless looping
  const repeatedProfiles = [...profiles, ...profiles];

  const yDistance = direction === "up" ? "-50%" : "50%";

  return (
    <motion.div
      animate={{ y: [0, yDistance] }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "linear",
      }}
      className="flex flex-col gap-6"
    >
      {repeatedProfiles.map((profile, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-2 text-white font-semibold">{profile.name}</p>
          <p className="text-white/50 text-sm">{profile.description}</p>
        </div>
      ))}
    </motion.div>
  );
}
