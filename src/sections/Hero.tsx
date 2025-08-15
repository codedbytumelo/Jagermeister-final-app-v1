"use client";

import Button from "@/components/Button";
import HeroImage1 from "@/assets/images/aiony-haust.jpg";
import HeroImage2 from "@/assets/images/malicki-m.jpg";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import CursorImage from "@/assets/images/cursor-you.svg"


export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate ();
    const [rightDesignScope, rightDesignAnimate] = useAnimate ();
    const [rightPointerScope, rightPointerAnimate] = useAnimate ();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, 
                { opacity: 1 }, 
                { duration: 0.5}
            ],
            [leftDesignScope.current, 
                { y: 0, x: 0 }, 
                { duration: 0.5}
            ],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, 
                { opacity: 1 }, 
                { duration: 0.5, delay:1}
            ],
            [leftPointerScope.current, 
                { y: 0, x: 100 }, 
                { duration: 0.5}
            ],
            [
                leftPointerScope.current, 
                { X:0, y: [0, 16, 0] }, 
                { duration: 0.5},
            ],
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, 
                { opacity: 1}, 
                { duration: 0.5, delay: 1.5 }
            ],
            [
                rightDesignScope.current, 
                { x: 0, y: 0 }, 
                { duration: 0.5},               
            ],
        
        ]);
        rightPointerAnimate([
            [rightPointerScope.current, 
                { opacity: 1}, 
                {duration: 0.5, delay: 1.5}
            ],
            [
                rightPointerScope.current,
                {x: 175, y: 0},
                { duration: 0.5},
            ],
            [rightPointerScope.current, 
                { x:0, y: [0, 20, 0] },
                { duration: 0.5},
            ],
        ]);
    },[]);
    return (
    <section className="py-24 overflow-x-clip" style={{
        cursor: `url(${CursorImage.src}), auto`
    }}>
        <div className="container relative">
            <motion.div
            ref={leftDesignScope}
            initial={{opacity: 0, y: 100, x: -100}}
            drag
            className="absolute -left-45 top-16 hidden lg:block">
                <Image 
                src={HeroImage1}
                alt="Hero Image 1"
                draggable="false"
                />
            </motion.div>
            <motion.div
            ref={leftPointerScope}
            initial={{ opacity: 0, y: 100, x: -200}}
            className="absolute left-46 top-96 hidden lg:block">
                <Pointer name="Palesa" />
            </motion.div>

            <motion.div
            ref={rightDesignScope}
            initial={{ opacity: 0, x: 100, y: 100}}
            drag
            className="absolute -right-64 top-6 hidden lg:block">
                <Image src={HeroImage2}
                alt="Hero Image 2"
                draggable="false"
                />
            </motion.div>
            <motion.div
            ref={rightPointerScope}
            initial={{ opacity: 0, x: 275, y: 100}}
            className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Peter" color="green" />
            </motion.div>

            <motion.div 
            className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-[#FF6600] to-[#E65C00] rounded-full text-neutral-950 font-semibold">
                    ✨ Closing date - 30 September 2025
                </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium text-center mt-6 mx-auto">
                Celebrating Excellence & Impactful Design 
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl lg:items-center mx-auto">
                Join us in honoring the best in design and innovation. 
                Submit your entries for the Jagermeister Designer Awards. 
                Showcase your creativity and be part of a celebration that recognizes the power of design to inspire and transform.
            </p>
            <form className="hidden md:flex border border-white/15 rounded-full p-2 mt-8 max-w-lg lg:items-center mx-auto">
                <input
                    type="email"
                    placeholder="Subscribe to our newsletter"
                    className="bg-transparent px-4 md:flex-1"
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="whitespace-nowrap"
                    size="sm"
                >
                    Signup
                </Button>
            </form>
        </div>
        </section>
    );
}
