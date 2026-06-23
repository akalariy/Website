import React from 'react';
import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <section
      id="founder"
      className="snap-start min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg bg-surface/40">
            <img
              src="/MyImage.png"
              alt="Aryan Kalariya"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-5">
          <p className="text-accent font-semibold">Founder Story</p>

          <h2 className="text-4xl font-bold">Aryan Kalariya</h2>

          <p className="text-lg">
            Aryan founded SapphireBerries with a simple mission: to help solo
            travelers and small groups explore beautiful places while building
            real friendships.
          </p>

          <p className="text-lg">
            The vision is to create a travel community where strangers become
            friends, trips become memories, and every adventure feels shared.
          </p>
        </div>
      </motion.div>
    </section>
  );
}