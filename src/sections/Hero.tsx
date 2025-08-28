"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Import local images
import runwayImg from "@/assets/images/runway-1.jpg";
import sketchImg from "@/assets/images/design-sketch-1.jpg";
import showcaseImg from "@/assets/images/design_showcase_1.jpg";

export default function Hero() {
  const slides = [
    { image: runwayImg, alt: "Runway", title: "Fashion Meets Innovation", subtitle: "Join the ultimate fashion design challenge — where creativity, culture, and technology collide." },
    { image: sketchImg, alt: "Design Sketch", title: "Design Like a Pro", subtitle: "Bring your creative visions to life with cutting-edge fashion tools." },
    { image: showcaseImg, alt: "Design Showcase", title: "Showcase Your Talent", subtitle: "Present your designs to the world and inspire the next trendsetters." },
  ];

  return (
    <section className="flex justify-center px-4 py-10">
      <motion.div
        className="relative w-full max-w-6xl rounded-[3rem] overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative h-full w-full"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover rounded-[3rem]"
                  fill
                />
                {/* Dark overlay to improve text readability */}
                <div className="absolute inset-0 bg-black/30 rounded-[3rem]" />

                {/* Text and CTA Buttons overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
                    {slide.subtitle}
                  </p>
                  <div className="mt-6 flex gap-4">
                    <button className="px-6 py-3 rounded-2xl font-semibold bg-white text-[#244034] hover:bg-gray-200 transition">
                      Get Started
                    </button>
                    <button className="px-6 py-3 rounded-2xl font-semibold border border-white/30 hover:bg-white/10 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
