"use client";

import React from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function StepCard({
  number,
  title,
  description,
  isActive = false,
  onClick = () => {},
}: StepCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? "border-[#FF6600] bg-[#FF6600]/10" // Jaegermeister orange
          : "border-neutral-700 bg-neutral-900"
      }`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm transition-colors duration-300 ${
            isActive
              ? "bg-[#244034] text-white" // Jaegermeister green circle
              : "bg-neutral-700 text-white"
          }`}
        >
          {number}
        </div>
        <h3
          className={`ml-4 text-lg font-semibold transition-colors duration-300 ${
            isActive ? "text-[#FF6600]" : "text-white"
          }`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`text-sm transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-400"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
