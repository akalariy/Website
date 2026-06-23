import React from 'react';
import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <section id="founder" className="py-28 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <p className="text-blue-700 font-semibold">Founder Story</p>

        <h2 className="text-4xl md:text-5xl font-black">
          Why SapphireBerries Exists
        </h2>

        <p className="text-lg text-slate-600">
          SapphireBerries was created with a simple idea: travel feels more meaningful
          when people experience it together. Many travelers want to explore beautiful
          destinations but do not always have the right group to go with.
        </p>

        <p className="text-lg text-slate-600">
          Our mission is to help solo travelers and small groups discover the United
          States, build genuine friendships, and create unforgettable memories through
          shared adventures.
        </p>

        <p className="text-xl font-semibold text-slate-900">
          Arrive solo. Travel together. Leave as friends.
        </p>
      </motion.div>
    </section>
  );
}