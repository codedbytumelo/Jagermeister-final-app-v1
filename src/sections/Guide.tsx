"use client";

import React, { useState } from "react";
import StepCard from "@/components/StepCard";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import local images
import Step1Image from "@/assets/images/file-upload.png";
import Step2Image from "@/assets/images/file-upload-progress.png";
import Step3Image from "@/assets/images/file-upload-successful.png";
import Tag from "@/components/Tag";

const steps = [
  {
    number: 1,
    title: "Register Your Details",
    description: "Signup for the Jagermeister Design Awards with accurate details.",
    img: Step1Image,
  },
  {
    number: 2,
    title: "Submit Your Designs",
    description: "Upload your design entries following the competition guidelines.",
    img: Step2Image,
  },
  {
    number: 3,
    title: "Click Submit",
    description: "Finalize your entry by clicking submit after reviewing your designs.",
    img: Step3Image,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 container mx-auto px-6 flex flex-col lg:flex-row gap-12">
      {/* Left: Steps */}
      <div className="flex-1 items-center justify-center space-y-6">
        <Tag>How To Enter</Tag>
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}
        <Button className="mt-8 bg-[#244034] hover:bg-[#3f634d]">
          Create Account
        </Button>
      </div>

      {/* Right: Step Image */}
      <div className="flex-1 relative w-full lg:w-auto h-96 lg:h-[480px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full rounded-lg overflow-hidden"
          >
            <Image
              src={steps[activeStep].img}
              alt={steps[activeStep].title}
              fill
              className="object-cover object-center rounded-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
