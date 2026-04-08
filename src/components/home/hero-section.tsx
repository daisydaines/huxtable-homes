"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/images/marcella-lot-68/compressed/Cam_05_Take12.jpg",
  "/images/tuhaye-lot-34/compressed/Cam01.jpg",
  "/images/read-home/compressed/Cam_01_Take03-2.jpg",
  "/images/holladay-remodel/compressed/Holladay_Remodel_1.jpg",
  "/images/read-barn/compressed/1_16.jpg",
];

const INTERVAL = 6000;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[index]}
              alt=""
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-6"
        >
          <span className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-0">
            <span className="whitespace-nowrap">New Construction</span>
            <span className="hidden md:inline mx-3">•</span>
            <span className="block w-8 h-px bg-white/40 md:hidden" />
            <span className="whitespace-nowrap">Interior Design</span>
          </span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight"
        >
          Creating Timeless
          <br />
          Gathering Places
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          We design and build bespoke residences that blend architectural
          excellence with refined living. Every detail considered, every space
          intentional.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-bronze hover:bg-bronze-dark text-white text-base px-8"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 text-base px-8"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
