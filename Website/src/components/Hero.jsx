import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="snap-start min-h-screen flex items-center justify-center px-6 bg-base"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold">SapphireBerries</h1>

        <p className="text-xl md:text-3xl text-accent font-semibold">
          Travel Together. Make Lifelong Friends.
        </p>

        <p className="text-md md:text-xl max-w-3xl mx-auto">
          SapphireBerries is a social travel community helping solo travelers
          and groups explore new destinations, meet like-minded people, and
          create unforgettable memories together.
        </p>

        <a
          href="#trips"
          className="inline-block px-8 py-4 bg-accent/80 text-white rounded-xl shadow hover:shadow-lg transition"
        >
          Explore Trips
        </a>
      </motion.div>
    </section>
  );
}