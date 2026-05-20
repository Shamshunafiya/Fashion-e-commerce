import { useState, useRef, useEffect } from "react";
import { collectionsData } from "../data/Collection.js";
import ProductCard from "../components/ProductCard.jsx";

const collectionBanner = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920";

const sections = [
  { key: "modern", label: "Modern Collections", icon: "✦", desc: "Clean lines, contemporary silhouettes & urban sophistication" },
  { key: "traditional", label: "Traditional Collections", icon: "❋", desc: "Handcrafted heritage, artisan weaves & festive elegance" },
  { key: "winter", label: "Winter Collections", icon: "❄", desc: "Cozy knits, plush layers & warm statement pieces" },
  { key: "summer", label: "Summer Collections", icon: "☀", desc: "Light fabrics, vibrant prints & breezy silhouettes" },
];

export default function CollectionsPage({ setCartOpen, navigateTo, selectedCollection }) {
  const [activeSection, setActiveSection] = useState(selectedCollection || "modern");
  const sectionRefs = useRef({});
  const [shouldScroll, setShouldScroll] = useState(false);

  // When selectedCollection changes (user clicked product in ShopPage),
  // update activeSection and scroll to it
  useEffect(() => {
    if (selectedCollection) {
      setActiveSection(selectedCollection);
      setShouldScroll(true);
    }
  }, [selectedCollection]);

  // Scroll to activeSection when requested
  useEffect(() => {
    if (!shouldScroll) return;

    const target = sectionRefs.current[activeSection];
    if (target) {
      const scrollToTarget = () => {
        const offset = 70; // sticky header height
        const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      };

      window.scrollTo({ top: 0, behavior: "auto" });
      setTimeout(scrollToTarget, 100);
    }

    setShouldScroll(false);
  }, [activeSection, shouldScroll]);

  const scrollToSection = (key) => {
    setActiveSection(key);
    setShouldScroll(true);
  };

  return (
    <div className="bg-light font-sans pt-[70px]">
      {/* Hero Banner - Full Screen Image */}
      <div
        className="relative overflow-hidden min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8"
        style={{
          backgroundImage: `url(${collectionBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Coffee Tinted Dark Overlay with blur for text clarity */}
        <div className="absolute inset-0 bg-[#3d2817]/50 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <p className="mb-4 font-sans text-[13px] font-bold uppercase tracking-[5px] text-[#f5f0ea] drop-shadow-md">
            Curated Collections
          </p>
          <h1 className="mb-4 sm:mb-6 font-serif text-[42px] sm:text-[60px] md:text-[88px] font-bold leading-[1.1] text-white drop-shadow-lg">
            Our Collections
          </h1>
          <p className="mb-6 sm:mb-8 font-sans text-[14px] md:text-[18px] leading-relaxed text-[#f5f0ea] drop-shadow-md px-2 sm:px-0">
            Explore four distinct worlds of fashion — from modern minimalism to timeless tradition, cozy winter layers to vibrant summer prints.
          </p>
        </div>
      </div>

      {/* Section Nav */}
      <div className="relative flex flex-row overflow-x-auto whitespace-nowrap scrollbar-hide border-b border-border-light bg-white/97 px-2 sm:px-6 md:px-20 py-0 backdrop-blur-[12px]">
        {sections.map((s) => (
          <button
            key={s.key}
            onClick={() => scrollToSection(s.key)}
            className={`flex-1 sm:flex-none text-center border-b-[2.5px] px-5 sm:px-7 py-4 sm:py-[18px] font-sans text-[10px] sm:text-[11px] ${
              activeSection === s.key ? "font-semibold" : "font-normal"
            } uppercase tracking-[2px] transition-all duration-200 ${
              activeSection === s.key
                ? "border-[#4a3525] text-[#4a3525]"
                : "border-transparent text-[#888] hover:text-[#4a3525]"
            }`}
          >
            <span className="mr-1.5">{s.icon}</span>
            {s.label.replace(" Collections", "")}
          </button>
        ))}
      </div>

      {/* Collection Sections */}
      {sections.map((section) => (
        <div
          key={section.key}
          ref={(el) => (sectionRefs.current[section.key] = el)}
          className="border-b border-[#ede8e0] px-4 sm:px-6 md:px-20 pt-[70px] pb-[80px]"
        >
          {/* Section Header */}
          <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              {/* <div className="mb-2 flex items-center gap-3">
                <span className="text-2xl text-gold">{section.icon}</span>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-gold">
                  {section.key} · {collectionsData[section.key].length} Pieces
                </span>
              </div> */}
              <h2 className="mb-2 sm:mb-2.5 font-display text-[28px] sm:text-3xl md:text-[44px] font-bold text-dark">
                {section.label}
              </h2>
              <p className="m-0 max-w-[500px] font-sans text-[13px] md:text-[14px] leading-normal text-text-light">
                {section.desc}
              </p>
            </div>
            <div className="flex cursor-pointer items-center gap-2 whitespace-normal md:whitespace-nowrap font-sans text-sm md:text-[12px] tracking-[1px] text-gold">
              <span>View All {section.label}</span>
              <span>→</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 md:gap-6">
            {collectionsData[section.key].map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                setCartOpen={setCartOpen}
                navigateTo={navigateTo}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Bottom CTA */}
      {/* <div className="bg-gradient-to-r from-light-gray to-[#ede5d8] px-4 sm:px-6 md:px-20 py-[70px] text-center">
        <h2 className="mb-3 font-display text-[42px] font-bold text-dark">
          Can't Find What You're Looking For?
        </h2>
        <p className="mb-8 font-sans text-[14px] text-text-light">
          Browse our full shop for even more styles.
        </p>
        <button
          onClick={() => navigateTo("/shop")}
          className="bg-dark px-12 py-4 font-sans text-[11px] font-normal uppercase tracking-[3px] text-white transition-colors duration-200 hover:bg-gold"
        >
          Browse All Products
        </button>
      </div> */}
    </div>
  );
}