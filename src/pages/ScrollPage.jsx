import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ScrollPage() {
  const navigate = useNavigate();

  const fashionImages = [
    {
      title: "Modern Fashion",
      category: "Modern",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Traditional Style",
      category: "Traditional",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Summer Collection",
      category: "Summer",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Winter Luxury",
      category: "Winter",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative bg-[#0d0a08] overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#4a3525]/20 blur-[140px] rounded-full pointer-events-none" />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-center mb-16 sm:mb-20 px-5 relative z-10"
      >
        <p className="uppercase tracking-[5px] text-[#d4b895] text-[11px] sm:text-xs mb-4 font-bold font-sans">
          Fashion Categories
        </p>
        <h2 className="font-serif font-bold leading-none text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px]">
          Luxury Fashion<br />Collections
        </h2>
        <p className="text-[#a09080] max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-8 font-sans">
          Premium editorial fashion with cinematic visuals and luxury modern style.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6 px-5 sm:px-8 md:px-10 lg:px-16">
        {fashionImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden rounded-2xl group h-[70vh] sm:h-[75vh] lg:h-[82vh] border border-[#4a3525]/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-pointer"
            onClick={() => navigate("/collections")}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* BIG BACKGROUND TEXT */}
            <span className="absolute top-5 right-5 text-white/5 uppercase font-black pointer-events-none text-5xl sm:text-6xl lg:text-7xl font-serif select-none">
              {item.category}
            </span>

            {/* CONTENT CARD */}
            <div className="absolute left-5 right-5 bottom-5 sm:left-6 sm:right-6 sm:bottom-6 bg-black/40 backdrop-blur-md border border-[#d4b895]/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 group-hover:border-[#d4b895]/50">
              <p className="uppercase tracking-[4px] text-[#d4b895] text-[10px] sm:text-xs mb-3 font-bold font-sans">
                {item.category}
              </p>
              <h3 className="font-serif font-bold leading-tight mb-4 text-white text-2xl sm:text-3xl md:text-[28px] lg:text-[32px]">
                {item.title}
              </h3>
              <p className="text-[#b0a090] leading-6 mb-5 text-sm font-sans">
                Explore our premium {item.category.toLowerCase()} collection — crafted for sophistication.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); navigate("/collections"); }}
                className="inline-flex items-center gap-2 rounded-full bg-[#4a3525] px-7 py-3 font-sans text-[11px] font-bold uppercase tracking-[3px] text-[#f5f0ea] transition-all duration-300 hover:bg-[#d4b895] hover:text-black"
              >
                View Collection
                <span className="text-[14px]">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}