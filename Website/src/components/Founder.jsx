import React from 'react';
import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <section
      id="founder"
      className="snap-start min-h-screen flex items-center justify-center px-6 bg-base"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg">
            <img
              src="/MyImage.jpg"
              alt="Aryan Kalariya"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-5">
          <h2 className="text-4xl font-bold">Founder</h2>
          <h3 className="text-2xl text-accent font-semibold">
            Aryan Kalariya
          </h3>
          <p className="text-lg">
            Aryan founded SapphireBerries with a simple mission: to connect
            people through travel, friendship, and unforgettable experiences.
          </p>
          <p className="text-lg">
            His vision is to build a global travel community where strangers
            become friends and every journey creates meaningful memories.
          </p>
        </div>
      </motion.div>
    </section>
  );
}