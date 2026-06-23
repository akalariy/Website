import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="snap-start min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-white to-sky-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl text-center space-y-8"
      >
        <p className="text-accent font-semibold tracking-wide">
          USA NATIONAL PARK GROUP TRIPS
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          SapphireBerries
        </h1>

        <p className="text-xl md:text-3xl text-accent font-semibold">
          Travel Together. Make Lifelong Friends.
        </p>

        <p className="text-md md:text-xl max-w-3xl mx-auto">
          Join social group adventures to Yosemite, Yellowstone, Glacier, Zion,
          and the Grand Canyon. Designed for solo travelers, friends, students,
          and young professionals who want to explore America together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#trips"
            className="px-8 py-4 bg-accent text-white rounded-xl shadow hover:shadow-lg transition"
          >
            Explore Trips
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-accent text-accent rounded-xl hover:bg-accent/10 transition"
          >
            Join Waitlist
          </a>
        </div>
      </motion.div>
    </section>
  );
}