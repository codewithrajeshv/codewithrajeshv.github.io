"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-gray-100 font-semibold mb-2">Let's Connect</h3>
            <p className="text-gray-400 max-w-md">
              Open for collaborations and interesting projects. Feel free to
              reach out!
            </p>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center md:items-end"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:i.rajeshv11@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              i.rajeshv11@gmail.com
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
