import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SliderPage() {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop",
      label: "New Season 2026",
      title: "Luxury Fashion\nRedefined",
      description: "Experience the finest in fashion — where elegance meets modern artistry.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop",
      label: "Premium Collection",
      title: "Timeless\nElegance",
      description: "Discover our curated selection of premium garments crafted for the discerning individual.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
      label: "Editorial Style",
      title: "Where Style\nMeets Presence",
      description: "Curated collections that blend modern elegance with timeless tradition.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative flex-shrink-0 w-screen h-full">
            {/* Image — fills entire slide */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex items-center px-8 md:px-20">
              <div className="max-w-2xl">
                {/* Label */}
                <p className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[5px] text-[#d4b895]">
                  {slide.label}
                </p>
                {/* Title */}
                <h1 className="mb-6 font-serif font-bold text-white leading-[1.1] whitespace-pre-line"
                    style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
                  {slide.title}
                </h1>
                {/* Description */}
                <p className="mb-10 font-sans text-[15px] sm:text-[17px] leading-relaxed text-white/80 max-w-lg">
                  {slide.description}
                </p>
                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate("/collections")}
                    className="rounded-full bg-[#4a3525] px-10 py-4 font-sans text-[12px] font-bold uppercase tracking-[3px] text-[#f5f0ea] transition-all duration-300 hover:bg-[#d4b895] hover:text-black hover:scale-105 shadow-xl"
                  >
                    Shop Collections
                  </button>
                  <button
                    onClick={() => navigate("/shop")}
                    className="rounded-full border-2 border-white/50 px-10 py-4 font-sans text-[12px] font-bold uppercase tracking-[3px] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                  >
                    All Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-8 h-3 bg-[#d4b895]"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-8 z-20 font-sans text-[13px] font-bold text-white/60">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}
