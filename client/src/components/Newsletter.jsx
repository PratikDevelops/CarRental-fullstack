import React from 'react';
import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
});

const Newsletter = () => {
  return (
    <motion.div
      {...fadeUp(0)}
      className="flex flex-col items-center justify-center text-center max-md:px-4 my-10 mb-40"
    >
      <motion.h1
        {...fadeUp(0.2)}
        className="md:text-4xl text-2xl font-semibold"
      >
        Never Miss a Deal!
      </motion.h1>

      <motion.p
        {...fadeUp(0.3)}
        className="md:text-lg text-gray-500/70 pb-8 max-w-xl"
      >
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </motion.p>

      <motion.form
        {...fadeUp(0.4)}
        className="flex items-center max-w-2xl w-full md:h-13 h-12 shadow-md rounded-md overflow-hidden"
      >
        <input
          className="h-full w-full px-4 outline-none text-gray-700 border border-gray-300 focus:border-primary transition"
          type="email"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          className="md:px-12 px-8 h-full bg-primary hover:bg-primary-dull transition text-white font-medium"
        >
          Subscribe
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Newsletter;
