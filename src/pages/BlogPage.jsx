import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = ["All", "Style and Trends", "Shopping Guides", "Brand and Lifestyle"];

const blogPosts = [
  {
    id: 1,
    title: "Elevating casual with designer",
    date: "Feb 27, 2026",
    category: "Style and Trends",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    title: "Confidence with intentional style",
    date: "Feb 26, 2026",
    category: "Brand and Lifestyle",
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    title: "Seasonal trends for everyday",
    date: "Feb 22, 2026",
    category: "Style and Trends",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    title: "Discover fabrics that define style",
    date: "Feb 23, 2026",
    category: "Shopping Guides",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    title: "Delivering Luxury Fashion Service",
    date: "Feb 24, 2026",
    category: "Brand and Lifestyle",
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    title: "Elevate your style with pieces",
    date: "Feb 28, 2026",
    category: "Shopping Guides",
    img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="bg-[#fdfaf7] min-h-screen pt-24 font-['Montserrat',sans-serif]">
      {/* ── HERO SECTION ──────────────────────────────────────────── */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mb-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#3a3530]/60" />

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <span className="text-[12px] md:text-[13px] text-white tracking-[2px] font-semibold uppercase mb-4">
            Our Blog
          </span>
          <h1 className="text-[60px] md:text-[100px] font-black text-white leading-[0.9] tracking-[-2px] uppercase">
            FASHION <br /> INSIDER
          </h1>
        </div>
      </div>

      {/* ── MAIN CONTENT (CATEGORIES & GRID) ────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-24">
        
        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border border-[#1a1a1a] text-[11px] font-bold uppercase tracking-wide transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-[#1a1a1a] text-white" 
                  : "bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full h-[450px] overflow-hidden mb-6 bg-[#f5f0ea]">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-['Montserrat',sans-serif] text-[18px] md:text-[20px] font-bold text-[#1a1a1a] leading-[1.4] mb-3 group-hover:text-black/70 transition-colors">
                <Link to="#">{post.title}</Link>
              </h3>

              {/* Date */}
              <div className="text-[11px] text-[#666] font-bold uppercase tracking-wider">
                POSTED ON {post.date.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center mt-20">
            <button className="px-10 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[13px] font-bold uppercase tracking-[2px] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
