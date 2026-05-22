import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white relative overflow-hidden font-['Montserrat',sans-serif]">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0b0b0b] to-[#0b0b0b] opacity-50"></div>

      <div className="w-full px-6 md:px-16 pt-12 md:pt-16 pb-10 relative z-10">
        {/* New Dedicated Marquee Section - Above the Links */}
        <div className="mb-12 md:mb-16 pointer-events-none select-none opacity-[0.12] whitespace-nowrap overflow-hidden border-b border-white/5 pb-8 md:pb-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="inline-block"
          >
            <span className="text-[64px] md:text-[120px] font-black uppercase tracking-[-2px] leading-none text-white mr-10 md:mr-20">
              Your Favorite Styles at <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>Unmissable Prices!</span>
            </span>
            <span className="text-[64px] md:text-[120px] font-black uppercase tracking-[-2px] leading-none text-white mr-10 md:mr-20">
              Your Favorite Styles at <span style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}>Unmissable Prices!</span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr] gap-x-8 gap-y-12 lg:gap-12 mb-16 md:mb-20">
          {/* Brand & Newsletter */}
          <div className="col-span-2 lg:col-span-1 mb-4 lg:mb-0">
            <div className="text-[32px] font-bold tracking-[2px] mb-4 md:mb-6 font-['Cormorant_Garamond',serif]">
              ZARO
            </div>
            <p className="text-[14px] text-[#999] leading-[1.6] max-w-[280px] mb-6 md:mb-8">
              Zaro brings together premium men's and women's clothing from globally recognized brands.
            </p>

            {/* Newsletter Input - Absolute Integrated Style */}
            <div className="relative max-w-[380px]">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#050505] border border-white/20 hover:border-white/30 rounded-full pl-6 pr-28 sm:pr-36 py-4 text-[13px] md:text-[14px] text-white placeholder:text-[#444] font-['Montserrat',sans-serif] focus:border-[#b8860b] focus:ring-1 focus:ring-[#b8860b]/30 outline-none transition-all duration-500"
                />
                <button className="absolute right-[6px] top-[6px] bottom-[6px] bg-[#888] hover:bg-white text-black text-[10px] md:text-[11px] font-bold tracking-[2px] px-4 sm:px-8 rounded-full transition-all duration-300 uppercase whitespace-nowrap shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Column 1: Quick Link */}
          <div className="col-span-1">
            <h4 className="text-[16px] font-bold tracking-[0.5px] mb-5 md:mb-6 text-white">Quick Link</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {["Home", "Shop", "About", "Blog", "FAQ"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-[#999] hover:text-white text-[14px] transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="col-span-1">
            <h4 className="text-[16px] font-bold tracking-[0.5px] mb-5 md:mb-6 text-white">Collections</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {["Women", "Men", "New Arrivals", "Best Sellers", "Sale"].map((item) => (
                <Link
                  key={item}
                  to="/collections"
                  className="text-[#999] hover:text-white text-[14px] transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="col-span-1">
            <h4 className="text-[16px] font-bold tracking-[0.5px] mb-5 md:mb-6 text-white">Legal</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {["Privacy policy", "Refund Policy", "Shipping Policy", "Contact", "404"].map((item) => (
                <Link
                  key={item}
                  to={
                    item === "Privacy policy" ? "/privacy-policy" :
                    item === "Refund Policy" ? "/refund-policy" :
                    item === "Shipping Policy" ? "/shipping-policy" :
                    item === "Contact" ? "/contact" : "/404"
                  }
                  className="text-[#999] hover:text-white text-[14px] transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-span-1">
            <h4 className="text-[16px] font-bold tracking-[0.5px] mb-5 md:mb-6 text-white">Follow Us</h4>
            <div className="flex flex-col gap-3 md:gap-4">
              {["Instagram", "Facebook", "Twitter"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#999] hover:text-white text-[14px] transition-colors flex items-center gap-1 group w-fit"
                >
                  {item} <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-center items-center gap-4 text-center sm:text-left text-[12px] md:text-[13px] text-[#666]">
          <p>© Copyright 2026 Zaro. All Rights Reserved..</p>
        </div>
      </div>
    </footer>
  );
}