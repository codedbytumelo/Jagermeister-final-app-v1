"use client";

import React from "react";
import Tag from "@/components/Tag";
import ProfileColomn, { Profile } from "@/components/ProfileColomn";
import Avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Avatar5 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar6 from "@/assets/images/avatar-florence-shaw.jpg";

const profiles: Profile[] = [
  { id: 1, name: "Ashwin Santiago", avatar: Avatar1, description: "Figma is a collaborative interface design tool." },
  { id: 2, name: "Florence Shaw", avatar: Avatar2, description: "Notion is an all-in-one workspace for notes and docs." },
  { id: 3, name: "Lula Meyers", avatar: Avatar3, description: "Slack is a powerful team communication platform." },
  { id: 4, name: "Owen Garcia", avatar: Avatar4, description: "Relume is a no-code website builder and design system." },
  { id: 5, name: "Ashwin Santiago", avatar: Avatar5, description: "Figma is a collaborative interface design tool." },
  { id: 6, name: "Florence Shaw", avatar: Avatar6, description: "Notion is an all-in-one workspace for notes and docs." },
];

export default function DesignProfiles() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Tag and Headline */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full mb-12 lg:mb-0">
            <Tag className="mb-2">Designer Profiles</Tag>
            <h2 className="text-4xl font-medium mt-6">
              Meet Our Featured <span className="text-orange-500">Designers</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg max-w-md">
              Discover the creative minds behind the designs. Celebrate the talent and innovation of our featured designers.
            </p>
          </div>

          {/* Right Side - Moving Columns */}
          <div className="relative h-[400px] lg:h-[800px] overflow-hidden">
            <div className="absolute inset-0 flex gap-12">
              {/* Left column moves up */}
              <ProfileColomn
                profiles={profiles.slice(0, 3)}
                direction="up"
                speed={40}
              />
              {/* Right column moves down */}
              <ProfileColomn
                profiles={profiles.slice(3, 6)}
                direction="down"
                speed={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
