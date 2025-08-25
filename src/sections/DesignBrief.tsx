"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layers, Scissors, Leaf, FileText } from "lucide-react";
import Tag from "@/components/Tag";

interface BriefCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const briefItems: BriefCard[] = [
  {
    title: "Key Themes",
    description: `Nightlife & Urban Culture
Boldness & Individuality
Heritage & Modernity Fusion
Sustainability & Innovation`,
    icon: <Layers size={36} aria-label="Themes" />,
  },
  {
    title: "Materials to Use",
    description: `Eco-friendly fabrics (organic cotton, recycled polyester, hemp, etc.)
Leather or vegan leather accents
Metallic or reflective details
Upcycled or repurposed materials encouraged`,
    icon: <Scissors size={36} aria-label="Materials" />,
  },
  {
    title: "Submission Requirements",
    description: `Upload a colored fashion illustration (digital or hand-drawn, JPEG/PNG, max 10MB)
Include technical flat drawings (front and back views, PDF/JPEG/PNG)
Brief description (max 200 words) explaining concept and material choices`,
    icon: <FileText size={36} aria-label="Requirements" />,
  },
];

export default function DesignBrief() {
  return (
    <section className="py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <Tag>Design Brief</Tag>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6">
            Unleash Your Creativity
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            This is your opportunity to redefine fashion with your unique vision
            and craftsmanship. Submit your designs and be part of the{" "}
            <span className="text-orange-500 font-semibold">
              Jägermeister Fashion Design Awards.
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {briefItems.map((item, idx) => (
            <Card
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#CC5500] text-gray-100 shadow-lg"
            >
              <CardHeader className="flex flex-col items-start space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black/20 text-white">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 whitespace-pre-line opacity-90">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
