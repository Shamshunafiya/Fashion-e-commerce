import { useNavigate } from "react-router-dom";
import SliderPage from "./Slider.jsx";
import ScrollPage from "./ScrollPage.jsx";
import LogoMarquee from "../components/Logseen.jsx";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="pt-[70px] overflow-x-hidden bg-[#f8f5f1]">

      {/* HERO SLIDER */}
      <SliderPage />

      {/* FASHION CATEGORIES SCROLL SECTION */}
      <ScrollPage />

      {/* LOGO MARQUEE */}
      <LogoMarquee />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f5f0ea] via-[#ede5d8] to-[#ddcdba] px-6 sm:px-10 lg:px-20 py-16 flex items-center">

        {/* Background Text */}
        <div className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <h1 className="text-[100px] sm:text-[180px] lg:text-[280px] font-bold text-[#4a352510] leading-none tracking-[-6px] lg:tracking-[-10px] font-serif">
            ZORO
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 w-full">

          {/* LEFT CONTENT */}
          <div className="max-w-[620px] text-center lg:text-left">
            <p className="text-[11px] sm:text-xs tracking-[4px] text-[#4a3525] uppercase font-semibold mb-4">
              New Season 2026
            </p>
            <h1 className="font-serif text-[42px] sm:text-[58px] lg:text-[78px] leading-[1.05] text-[#1a1a1a] font-bold mb-6">
              Where Style<br />Meets Presence
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#666] leading-7 max-w-[480px] mx-auto lg:mx-0 mb-10">
              Discover curated collections that blend modern elegance with timeless tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/collections")}

                className="px-8 py-4 rounded-full bg-[#1a1a1a] text-white uppercase tracking-[3px] text-[11px] transition-all duration-300 hover:bg-[#b8860b]"

              >
                Shop Collections
              </button>

              <button
                onClick={() => navigate("/shop")}
                className="px-8 py-4 rounded-full border border-[#1a1a1a] text-[#1a1a1a] uppercase tracking-[3px] text-[11px] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
              >
                All Products
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="relative z-10 grid grid-cols-2 gap-3 w-full max-w-[520px]">
            {[
              { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600" },
              { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600" },
              { src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600" },
              { src: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600" },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => navigate("/collections")}
                className={`overflow-hidden shadow-xl cursor-pointer group ${i % 2 === 0 ? "h-[220px] sm:h-[280px]" : "h-[180px] sm:h-[240px] mt-6"
                  }`}
              >
                <img
                  src={item.src}
                  alt="Fashion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}