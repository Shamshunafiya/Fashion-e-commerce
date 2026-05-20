import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center text-white relative font-['Montserrat',sans-serif] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url('https://images.unsplash.com/photo-1502481851512-e9e2529beff9?auto=format&fit=crop&w=1920&q=80')"
      }}
    >
      {/* Top spacing to offset nav */}
      <div className="h-28"></div>

      {/* Main 404 Hero Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 w-full flex-1 flex flex-col items-center justify-center text-center relative z-10 py-16">

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#999] text-[12px] tracking-[4px] uppercase mb-4 font-semibold"
        >
          This doesn't appear accurate...
        </motion.span>

        {/* Giant Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-['Montserrat',sans-serif] text-[48px] sm:text-[68px] md:text-[96px] font-black tracking-[-1.5px] leading-none uppercase mb-10 max-w-[900px]"
        >
          YOU GOT LOST...
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            className="inline-block bg-white text-black hover:bg-black hover:text-white border border-white rounded-full px-10 py-4 text-[11px] md:text-[12px] font-bold tracking-[2px] uppercase transition-all duration-300 shadow-2xl hover:scale-105"
          >
            RETURN TO HOMEPAGE
          </Link>
        </motion.div>

      </div>

    </div>
  );
}
