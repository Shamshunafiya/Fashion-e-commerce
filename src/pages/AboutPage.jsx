import { useNavigate } from "react-router-dom";
import { motion, useInView, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const teamMembers = [
  {
    name: "Alexander Grey",
    role: "Founder and Creative Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Isabella Clarke",
    role: "Head of Fashion Curation",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Victoria Lane",
    role: "Senior Brand Strategist",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Lucas Bennett",
    role: "Brand Experience Manager",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Sophie Martin",
    role: "Visual Merchandising Lead",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "James Whitfield",
    role: "Head of Marketing",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Amara Osei",
    role: "Creative Stylist",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Daniel Forte",
    role: "Product Design Director",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Elena Rossi",
    role: "Customer Experience Manager",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Marcus Chen",
    role: "Technology Lead",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
  },
];

const pillars = [
  {
    label: "Craftsmanship Excellence",
    img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=600&fit=crop",
  },
  {
    label: "Innovative Design",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=600&fit=crop",
  },
  {
    label: "Conscious Luxury",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop",
  },
];

/* ── STATS SCROLL COMPONENT ─────────────────────────────────────────── */
const statsData = [
  {
    val: "500+",
    label: "Brands Curated",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=700&fit=crop",
  },
  {
    val: "100+",
    label: "Happy Customers",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=700&fit=crop",
  },
  {
    val: "800+",
    label: "Products Shipped",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=700&fit=crop",
  },
];

function StatsScroll() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setActiveIndex(0);
    else if (latest < 0.66) setActiveIndex(1);
    else setActiveIndex(2);
  });

  return (
    <>
      {/* MOBILE VIEW — static, stunning layout matching user's Image 5 */}
      <div className="block lg:hidden bg-gradient-to-br from-[#2a1f1f] via-[#1a1218] to-[#0d0d0d] text-white">
        {/* Image at top */}
        <div className="w-full h-[320px] relative overflow-hidden">
          <img
            src={statsData[2].img}
            alt="Stats"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content below */}
        <div className="px-6 py-12 flex flex-col items-center">
          {/* Hanger icon */}
          <div className="mb-6 opacity-60">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.38 3.46L16 2.03a2 2 0 0 0-1.25 0l-4.38 1.43a2 2 0 0 1-1.25 0L4.74 2.03a2 2 0 0 0-1.25 0L1.12 3.46A2 2 0 0 0 0 5.34V20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5.34a2 2 0 0 0-1.62-1.88z"/>
              <path d="M12 2v20M2 12h20"/>
            </svg>
          </div>

          {/* Description */}
          <p className="text-center text-[14px] text-white/70 leading-[1.8] max-w-[340px] mb-10 font-['Montserrat',sans-serif]">
            Showcasing curated brands, satisfied customers, and reliable delivery defining Zaro's excellence.
          </p>

          {/* Three stats in a row */}
          <div className="grid grid-cols-3 gap-4 w-full border-t border-white/10 pt-8">
            {statsData.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-['Montserrat',sans-serif] text-[28px] font-black text-white leading-none mb-2">
                  {s.val}
                </div>
                <div className="text-[9px] tracking-[1px] text-white/50 uppercase font-['Montserrat',sans-serif] leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW — sticky scroll animation */}
      <div ref={containerRef} style={{ height: "300vh" }} className="hidden lg:block relative">
        {/* Sticky panel */}
        <div className="sticky top-0 h-screen flex overflow-hidden">
          {/* LEFT — image */}
          <div className="w-[45%] relative overflow-hidden">
            {statsData.map((s, i) => (
              <motion.img
                key={s.label}
                src={s.img}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            ))}
          </div>

          {/* RIGHT — dark gradient panel */}
          <div className="w-[55%] bg-gradient-to-br from-[#2a1f1f] via-[#1a1218] to-[#0d0d0d] flex flex-col items-center justify-center relative px-16 text-white">
            {/* Vertical line right edge */}
            <div className="absolute right-12 top-1/4 bottom-1/4 w-[1px] bg-white/10" />

            {/* Description text */}
            <p className="text-center text-[15px] text-white/70 leading-[1.8] max-w-[380px] mb-10 font-['Montserrat',sans-serif]">
              Showcasing curated brands, satisfied customers, and reliable delivery defining Zaro's excellence.
            </p>

            {/* Stat number */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="font-['Montserrat',sans-serif] text-[80px] font-black text-white leading-none mb-3">
                {statsData[activeIndex].val}
              </div>
              <div className="text-[11px] tracking-[4px] text-white/50 uppercase font-['Montserrat',sans-serif]">
                {statsData[activeIndex].label}
              </div>
            </motion.div>

            {/* Scroll indicator dots */}
            <div className="absolute bottom-10 flex gap-2">
              {statsData.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-white scale-125" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── BEHIND EVERYTHING COMPONENT ────────────────────────────────────── */
function BehindEverything() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const slideLeft = {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  };
  const slideRight = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="bg-[#fdfaf7] px-6 md:px-16 pt-10 pb-24 overflow-hidden">
      {/* Label */}
      <p className="text-[11px] tracking-[5px] text-[#888] uppercase mb-6">
        Behind Everything
      </p>

      {/* Big animated headings */}
      <div className="mb-10 overflow-hidden">
        <motion.h2
          variants={slideLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-['Montserrat',sans-serif] text-[40px] md:text-[80px] font-black text-[#1a1a1a] leading-[1.0] uppercase tracking-[-2px]"
        >
          For Women
        </motion.h2>
        <motion.h2
          variants={slideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-['Montserrat',sans-serif] text-[40px] md:text-[80px] font-black leading-[1.0] uppercase tracking-[-2px] pl-0 md:pl-[200px]"
          style={{ WebkitTextStroke: "1px #1a1a1a", color: "transparent" }}
        >
          And Men
        </motion.h2>
      </div>

      {/* Three-column / Two-column mobile flex grid matching user's Image 4 */}
      <div className="grid grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr] gap-4 md:gap-8 items-start mt-6">
        {/* Woman image — slides from left */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="overflow-hidden col-span-1"
        >
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&h=620&fit=crop&crop=top"
            alt="For Women"
            className="w-full h-[240px] md:h-[480px] object-cover hover:scale-[1.03] transition-transform duration-700"
          />
        </motion.div>

        {/* Center text - below images on mobile, center on desktop */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col justify-center pt-6 lg:pt-16 px-0 lg:px-6 col-span-2 lg:col-span-1 order-last lg:order-none"
        >
          <p className="text-[15px] md:text-[16px] text-[#555] leading-[1.9] mb-4 md:mb-6 font-['Montserrat',sans-serif]">
            Discover curated collections designed for both men and women, blending timeless craftsmanship with contemporary style.
          </p>
          <p className="text-[15px] md:text-[16px] text-[#555] leading-[1.9] font-['Montserrat',sans-serif]">
            Every piece is thoughtfully selected to elevate your wardrobe, offering premium quality, refined details, and versatile designs that suit every occasion.
          </p>
        </motion.div>

        {/* Man image — slides from right */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="overflow-hidden col-span-1"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&h=620&fit=crop&crop=top"
            alt="For Men"
            className="w-full h-[240px] md:h-[480px] object-cover hover:scale-[1.03] transition-transform duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f0ea] font-['Montserrat',sans-serif]">

      {/* ── HERO HEADER ──────────────────────────────────────────── */}
      <div className="relative h-[90vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&h=900&fit=crop')` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full h-full justify-center pt-[80px]">
          <p className="text-[13px] tracking-[3px] text-white font-semibold mb-3 uppercase">
            About Us
          </p>
          <h1 className="font-['Montserrat',sans-serif] text-[64px] md:text-[80px] font-bold text-white leading-[1.0] uppercase tracking-tight">
            Real Women<br />Real Style
          </h1>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center z-10 text-white">
          <div className="flex items-center gap-2 text-[15px] font-medium tracking-[0.5px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5a.75.75 0 0 1 .75.75v3.67a.75.75 0 0 1-1.5 0V3.25A.75.75 0 0 1 12 2.5Zm0 15a.75.75 0 0 1 .75.75v3.67a.75.75 0 0 1-1.5 0V18.25A.75.75 0 0 1 12 17.5Zm9.5-6.25a.75.75 0 0 1-.75.75h-3.67a.75.75 0 0 1 0-1.5h3.67a.75.75 0 0 1 .75.75ZM6.92 12a.75.75 0 0 1-.75.75H2.5a.75.75 0 0 1 0-1.5h3.67c.41 0 .75.34.75.75Zm11.8-6.72a.75.75 0 0 1 0 1.06l-2.6 2.6a.75.75 0 0 1-1.06-1.06l2.6-2.6a.75.75 0 0 1 1.06 0ZM7.88 16.12a.75.75 0 0 1 0 1.06l-2.6 2.6a.75.75 0 1 1-1.06-1.06l2.6-2.6a.75.75 0 0 1 1.06 0Zm10.84 0a.75.75 0 0 1-1.06 0l-2.6-2.6a.75.75 0 1 1 1.06-1.06l2.6 2.6a.75.75 0 0 1 0 1.06ZM7.88 7.88a.75.75 0 0 1-1.06 0l-2.6-2.6a.75.75 0 1 1 1.06-1.06l2.6 2.6a.75.75 0 0 1 0 1.06Z"/>
            </svg>
            Since 2020 with love
          </div>
        </div>
      </div>

      {/* Our Story Quote & Pillars matching user's Image 1 & Image 3 */}
      <div className="bg-[#fdfaf7] px-6 md:px-16 py-16 md:py-24">
        {/* Centered label */}
        <p className="text-center text-[11px] tracking-[5px] text-[#888] uppercase mb-8">
          Our Story
        </p>

        {/* Large centered quote */}
        <p className="text-center font-['Cormorant_Garamond',serif] text-[20px] md:text-[28px] font-normal text-[#1a1a1a] leading-[1.6] max-w-[740px] mx-auto mb-16 px-2 md:px-0">
          Zaro was created with a simple vision — to make premium fashion
          more accessible without compromising exclusivity. In a world filled
          with fast trends and mass production, we chose a different path. We
          focus on craftsmanship, fabric integrity, and timeless silhouettes.
        </p>

        {/* 3-column image grid with elegant large serif captions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          {pillars.map((p) => (
            <div key={p.label} className="flex flex-col items-center">
              <div className="w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-[380px] object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <p className="mt-5 text-center font-['Cormorant_Garamond',serif] text-[24px] font-bold text-[#1a1a1a] tracking-[0.5px]">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section with two side-by-side images matching user's Image 2 */}
      <div className="bg-[#fdfaf7] border-t border-[#ede8e0] px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            {/* Left */}
            <div>
              <p className="text-[11px] md:text-[13px] tracking-[5px] text-[#888] uppercase mb-4 md:mb-5">Mission</p>
              <h2 className="font-['Cormorant_Garamond',serif] text-[40px] md:text-[64px] font-bold text-[#1a1a1a] leading-[1.1] mb-6 md:mb-0">
                Elevating everyday<br className="hidden md:block" /> style and luxury
              </h2>
            </div>
            {/* Right */}
            <div className="md:pt-[60px]">
              <p className="text-[15px] md:text-[18px] text-[#666] leading-[1.9] font-['Montserrat',sans-serif]">
                Our mission is to redefine the way individuals experience fashion. We curate brands and refined designs to create a seamless platform where quality, confidence, and style come together.
              </p>
            </div>
          </div>

          {/* Two side-by-side images on both desktop and mobile */}
          <div className="grid grid-cols-2 gap-4 mt-12 md:mt-16">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=700&fit=crop"
                alt="Mission 1"
                className="w-full h-[240px] md:h-[480px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=600&h=700&fit=crop"
                alt="Mission 2"
                className="w-full h-[240px] md:h-[480px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── BEHIND EVERYTHING ─────────────────────────────────── */}
      <BehindEverything />

      {/* ── STATS SCROLL ─────────────────────────────────────────── */}
      <StatsScroll />

      {/* ── WHAT MAKES DIFFERENT ─────────────────────────────────── */}
      <div className="bg-[#f5f0ea] px-6 md:px-16 py-16 md:py-24">
        {/* Centered Title */}
        <h2 className="text-center font-['Cormorant_Garamond',serif] text-[32px] md:text-[42px] font-bold text-[#1a1a1a] mb-10 md:mb-16">
          What Makes Different
        </h2>

        {/* 3 bordered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#ddd8d0]">
          {[
            {
              title: "Curated Brands",
              desc: "We partner with designers ensuring craftsmanship, quality, authenticity, and timeless style.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="14" r="4"/>
                  <path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.6 5.6l2.8 2.8M19.6 19.6l2.8 2.8M5.6 22.4l2.8-2.8M19.6 8.4l2.8-2.8"/>
                </svg>
              ),
            },
            {
              title: "Premium Experience",
              desc: "From browsing to delivery, every interaction is thoughtfully designed for seamless.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20l5-5 4 4 6-8 5 5"/>
                  <rect x="2" y="2" width="24" height="24" rx="2"/>
                </svg>
              ),
            },
            {
              title: "Authenticity Guaranteed",
              desc: "Every product on Zaro is fully authentic, responsibly sourced, and meticulously verified for quality.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 3L4 7v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 3z"/>
                  <path d="M9 14l3 3 7-7"/>
                </svg>
              ),
            },
          ].map((f, i) => (
            <div
              key={f.title}
              className={`p-8 md:p-10 bg-white hover:bg-[#fdfaf7] transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left
                ${i < 2 ? "border-b md:border-b-0 md:border-r border-[#ddd8d0]" : ""}`}
            >
              {/* Outline icon */}
              <div className="text-[#1a1a1a] mb-6 md:mb-10 opacity-70">
                {f.icon}
              </div>
              <h3 className="font-['Montserrat',sans-serif] text-[15px] font-bold text-[#1a1a1a] mb-3">
                {f.title}
              </h3>
              <p className="text-[13px] text-[#888] leading-[1.8] max-w-none md:max-w-[260px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>


      {/* ── TEAM (auto-scroll marquee) ──────────────────────────── */}
      <div className="bg-[#f5f0ea] py-24 overflow-hidden">
        {/* Centered title */}
        <h2 className="text-center font-['Cormorant_Garamond',serif] text-[42px] font-bold text-[#1a1a1a] mb-16">
          Meet Team Members
        </h2>

        {/* Infinite scrolling strip — right to left */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...teamMembers, ...teamMembers].map((member, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[260px] h-[380px] overflow-hidden group cursor-pointer"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                {/* Blue tint on hover */}
                <div className="absolute inset-0 bg-blue-700/0 group-hover:bg-blue-700/35 transition-all duration-500" />
                {/* Name & role */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-['Montserrat',sans-serif] text-[13px] font-bold text-white leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-white/60 mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── INSTAGRAM SECTION ──────────────────────────── */}
      <div className="bg-[#fdfaf7] px-6 md:px-16 py-16 md:py-24">
        <h2 className="font-['Montserrat',sans-serif] text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-6 text-center md:text-left">
          Follow us on Instagram
        </h2>
        
        {/* Desktop Asymmetric Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[500px]">
          {/* Col 1 - Tall */}
          <div className="col-span-1 row-span-2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop" alt="Instagram 1" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          </div>
          {/* Col 2 - Tall */}
          <div className="col-span-1 row-span-2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=800&fit=crop" alt="Instagram 2" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          </div>
          {/* Col 3 - Short Top */}
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop" alt="Instagram 3" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          </div>
          {/* Col 4 - Tall */}
          <div className="col-span-1 row-span-2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=600&h=800&fit=crop" alt="Instagram 4" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          </div>
          {/* Col 3 - Short Bottom */}
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=600&h=400&fit=crop" alt="Instagram 5" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          </div>
        </div>

        {/* Mobile Grid Layout - 2 columns, beautiful sharp square/portrait aspect ratio images */}
        <div className="grid md:hidden grid-cols-2 gap-3">
          {[
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=750&fit=crop",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=750&fit=crop",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=750&fit=crop",
            "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=600&h=750&fit=crop"
          ].map((url, index) => (
            <div key={index} className="overflow-hidden aspect-[4/5] rounded-[2px] shadow-sm">
              <img src={url} alt={`Instagram ${index + 1}`} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}