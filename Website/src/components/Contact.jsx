import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    window.location.href = `mailto:aryankalariya21102@gmail.com?subject=${encodeURIComponent(
      data.get('subject')
    )}&body=${encodeURIComponent(data.get('message'))}`;

    setStatus('Opening your email app...');
    setTimeout(() => setStatus(''), 4000);
  }

  return (
    <section
      id="contact"
      className="snap-start min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl space-y-6 text-center"
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>

        <p>
          Interested in joining a trip, building a group, or collaborating with
          SapphireBerries? Send us a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            name="subject"
            required
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-surface/40 backdrop-blur border border-surface/80"
          />

          <textarea
            name="message"
            required
            placeholder="Your message"
            rows="5"
            className="w-full p-3 rounded-md bg-surface/40 backdrop-blur border border-surface/80"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-accent/80 text-white rounded-xl shadow hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>

        {status && <p className="text-accent">{status}</p>}

        <div className="flex justify-center space-x-6 mt-4">
          <a href="mailto:aryankalariya21102@gmail.com" aria-label="Email">
            <FaEnvelope className="w-7 h-7 text-text/90 hover:text-accent transition" />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram className="w-7 h-7 text-text/90 hover:text-accent transition" />
          </a>

          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="w-7 h-7 text-text/90 hover:text-accent transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}