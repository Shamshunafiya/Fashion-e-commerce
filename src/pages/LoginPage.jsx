import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen md:h-screen font-['Montserrat',sans-serif] bg-[#fdfaf7] md:overflow-hidden">
      
      {/* Left Panel - Image */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=1600&fit=crop" 
          alt="Zaro Fashion" 
          className="w-full h-full object-cover grayscale-[30%]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Logo overlayed on image */}
        <div className="absolute top-10 left-12 text-white z-10">
           <Link to="/" className="text-[28px] font-bold tracking-[4px]">ZARO</Link>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full md:w-1/2 min-h-screen md:h-full flex flex-col relative px-6 sm:px-12 md:px-16 lg:px-24 py-16 md:py-0 justify-center bg-[#fdfaf7]">
        
        {/* Close Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-8 right-8 z-20 text-[#1a1a1a] hover:rotate-90 transition-transform duration-500"
        >
          <X size={28} strokeWidth={1} />
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[400px] w-full mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="font-['Cormorant_Garamond',serif] text-[48px] font-bold text-[#1a1a1a] leading-none mb-4">
              Welcome Back
            </h1>
            <p className="text-[12px] tracking-[2px] text-[#888] uppercase">
              Sign in to your account
            </p>
          </div>

          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email */}
            <div className="relative group">
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-b border-[#ddd8d0] py-3 text-[14px] text-[#1a1a1a] focus:outline-none focus:border-[#b08d57] transition-colors peer placeholder-transparent"
                placeholder="Email Address"
                id="email"
              />
              <label htmlFor="email" className="absolute left-0 top-3 text-[13px] text-[#888] transition-all peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#b08d57] peer-valid:-top-5 peer-valid:text-[11px] uppercase tracking-[1px]">
                Email Address
              </label>
            </div>

            {/* Password */}
            <div className="relative group">
              <input 
                type="password" 
                required
                className="w-full bg-transparent border-b border-[#ddd8d0] py-3 text-[14px] text-[#1a1a1a] focus:outline-none focus:border-[#b08d57] transition-colors peer placeholder-transparent"
                placeholder="Password"
                id="password"
              />
              <label htmlFor="password" className="absolute left-0 top-3 text-[13px] text-[#888] transition-all peer-focus:-top-5 peer-focus:text-[11px] peer-focus:text-[#b08d57] peer-valid:-top-5 peer-valid:text-[11px] uppercase tracking-[1px]">
                Password
              </label>
            </div>

            <div className="flex justify-between items-center mt-[-10px]">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative w-4 h-4 border border-[#ddd8d0] group-hover:border-[#b08d57] transition-colors flex items-center justify-center">
                   <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                   <div className="w-2 h-2 bg-[#b08d57] scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="text-[12px] text-[#666]">Remember me</span>
              </label>
              <a href="#" className="text-[12px] text-[#888] hover:text-[#1a1a1a] transition-colors">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-[#1a1a1a] text-white py-4 text-[13px] font-bold tracking-[2px] uppercase mt-4 hover:bg-[#b08d57] transition-colors flex items-center justify-center gap-3 group">
              Sign In
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-[13px] text-[#666]">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#1a1a1a] font-bold hover:text-[#b08d57] transition-colors uppercase tracking-[1px] text-[11px] ml-2 border-b border-[#1a1a1a] hover:border-[#b08d57] pb-1">
                Create Account
              </Link>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
