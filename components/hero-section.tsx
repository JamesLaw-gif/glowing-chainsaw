"use client";

import ParallaxSection from "./animations/parallax-section";
import FadeIn from "./animations/fade-in";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bridal-couple.jpg"
          alt="Beautiful bridal couple"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <FadeIn delay={0.3} direction="up" duration={0.8}>
            <div className="space-y-8 mt-8">
              <p
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed max-w-4xl mx-auto px-4 sm:px-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: "400",
                  letterSpacing: "0.025em",
                }}
              >
                Bespoke bridal make up artist, here to enhance your natural
                beauty and make you shine on your special day
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span
            className="text-sm uppercase tracking-wide"
            style={{ fontFamily: "var(--font-made-mirage)" }}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
