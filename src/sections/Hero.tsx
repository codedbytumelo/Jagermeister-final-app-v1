"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
import { MdStar } from "react-icons/md";

interface HeroSectionProps {
  mainHeading?: { text: string; className?: string };
  subHeading?: { text: string; className?: string };
  badgeFeature?: { text: string; className?: string; icon?: ReactNode };
  primaryButton?: {
    text?: string;
    className?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    isVisible?: boolean;
    text?: string;
    className?: string;
    onClick?: () => void;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badgeFeature,
  mainHeading,
  subHeading,
  primaryButton,
  secondaryButton,
}) => {
  const {
    text: badgeFeatureText = "✨ Closing Date – 30 September 2025",
    className: badgeFeatureClassName = "",
    icon: badgeFeatureIcon = <MdStar size={18} />,
  } = badgeFeature || {};

  const {
    text: mainHeadingText = "Celebrating Excellence & Impactful Design",
    className: mainHeadingClassName = "",
  } = mainHeading || {};

  const {
    text: subHeadingText = "Join us in honoring the best in fashion design and innovation. Submit your entries for the Jägermeister Designer Awards and showcase your creativity to the world.",
    className: subHeadingClassName = "",
  } = subHeading || {};

  const {
    text: primaryBtnText = "Create an Account",
    onClick: onPrimaryClick = () => {},
    className: primaryBtnClassName = "",
  } = primaryButton || {};

  const {
    isVisible: isSecondaryButtonVisible = true,
    text: secondaryBtnText = "Learn More",
    onClick: onSecondaryClick = () => {},
    className: secondaryBtnClassName = "",
  } = secondaryButton || {};

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Background */}
      <div
        className="relative z-10 py-24 lg:py-32 text-center"
        style={{
          background: "linear-gradient(180deg, #244034 0%, #3c8968 100%)",
        }}
      >
        {/* Badge */}
        <Badge
          className={`py-2 inline-flex items-center justify-center mb-6 ${badgeFeatureClassName}`}
          variant="outline"
        >
          <div className="mr-2">{badgeFeatureIcon}</div>
          {badgeFeatureText}
        </Badge>

        {/* Main Heading */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto text-white ${mainHeadingClassName}`}
        >
          {mainHeadingText}
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto ${subHeadingClassName}`}
        >
          {subHeadingText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={onPrimaryClick}
            className={`h-12 px-6 rounded-full bg-[#244034] text-white hover:bg-[#3c8968] ${primaryBtnClassName}`}
          >
            {primaryBtnText}
          </Button>

          {isSecondaryButtonVisible && (
            <Button
              onClick={onSecondaryClick}
              className={`h-12 px-6 rounded-full border border-white text-white hover:bg-white hover:text-[#244034] ${secondaryBtnClassName}`}
            >
              {secondaryBtnText}
            </Button>
          )}
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 w-full h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(36,64,52,0), #244034)",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
