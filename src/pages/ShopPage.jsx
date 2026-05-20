import { collectionsData } from "../data/Collection.js";
import ProductCard from "../components/ProductCard.jsx";

// Unsplash premium fashion image matching the coffee/beige aesthetic
const heroBg = "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1920";

// One product per collection for Trending section
const trendingProducts = [
  collectionsData.modern.find((p) => ["Trending", "Hot", "Sale", "New"].includes(p.badge)) || collectionsData.modern[0],
  collectionsData.traditional.find((p) => ["Trending", "Hot", "Sale", "New"].includes(p.badge)) || collectionsData.traditional[0],
  collectionsData.winter.find((p) => ["Trending", "Hot", "Sale", "New"].includes(p.badge)) || collectionsData.winter[0],
  collectionsData.summer.find((p) => ["Trending", "Hot", "Sale", "New"].includes(p.badge)) || collectionsData.summer[0],
].filter(Boolean);

// 4 collections with metadata updated to Coffee Brown / Beige tones
const collectionSections = [
  { key: "modern",      label: "Modern Collection",      icon: "✦", desc: "Contemporary & Urban",   color: "from-[#4a3525] to-[#6b4e31]" },
  { key: "traditional", label: "Traditional Collection", icon: "❋", desc: "Heritage & Artisan",     color: "from-[#6b4e31] to-[#8b5e3c]" },
  { key: "winter",      label: "Winter Collection",      icon: "❄", desc: "Cozy & Warm",            color: "from-[#3d2817] to-[#4a3525]" },
  { key: "summer",      label: "Summer Collection",      icon: "☀", desc: "Light & Breezy",         color: "from-[#8b5e3c] to-[#a67b5b]" },
];

export default function ShopPage({ setCartOpen, navigateTo, setSelectedCollection }) {

  const handleProductClick = (item) => {
    setSelectedCollection(item.category.toLowerCase());
    navigateTo("/collections", { keepSelectedCollection: true });
  };

  const handleViewAll = (key) => {
    setSelectedCollection(key);
    navigateTo("/collections", { keepSelectedCollection: true });
  };

  return (
    <div className="min-h-screen bg-[#fdfaf7] pt-[70px]">

      {/* ── Hero Banner — Full Background Image ── */}
      <div
        className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:justify-end lg:px-16 xl:px-24"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Coffee Tint overlay for text readability */}
        <div className="absolute inset-0 bg-[#3d2817]/40 backdrop-blur-[1px]" />
        
        {/* Subtle gradient to blend with the page */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-40 bg-gradient-to-t from-[#fdfaf7] to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-5 sm:px-8 md:px-16 lg:px-20 max-w-3xl text-center lg:text-right mt-10 lg:mt-0">
          <p className="mb-3 sm:mb-4 font-sans text-[11px] sm:text-[13px] font-bold uppercase tracking-[5px] text-[#f5f0ea]">
            Welcome to Our Shop
          </p>
          <h1 className="mb-4 sm:mb-6 font-serif text-[46px] sm:text-[64px] md:text-[80px] font-bold leading-[1.1] text-white">
            New Season Arrivals
          </h1>
          <p className="mb-8 sm:mb-10 max-w-lg mx-auto lg:ml-auto lg:mr-0 font-sans text-[14px] sm:text-[17px] leading-relaxed text-[#e6dfd3] px-2 sm:px-0">
             Discover premium fashion collections crafted for modern lifestyles, enveloped in timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 sm:gap-5 w-full">
            <button
              onClick={() => navigateTo("/collections")}
              className="w-full sm:w-auto rounded-md border-2 border-transparent bg-[#4a3525] px-10 py-3.5 sm:py-4 font-sans text-[12px] sm:text-[13px] font-bold uppercase tracking-[3px] text-[#f5f0ea] transition-all duration-300 hover:bg-[#6b4e31] hover:shadow-lg"
            >
              Shop Now
            </button>
            <button
              onClick={() => navigateTo("/offer")}
              className="w-full sm:w-auto rounded-md border-2 border-[#f5f0ea]/80 px-10 py-3.5 sm:py-4 font-sans text-[12px] sm:text-[13px] font-bold uppercase tracking-[3px] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#4a3525]"
            >
              View Offers
            </button>
          </div>
        </div>
      </div>

      {/* ── Trending Products — 1 per collection ── */}
      <div className="px-4 sm:px-8 py-12 sm:py-20 md:px-16 lg:px-20">
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <p className="mb-2 sm:mb-3 font-sans text-[11px] sm:text-[13px] font-bold uppercase tracking-[4px] text-[#8b5e3c]">
            Popular Right Now
          </p>
          <h2 className="font-serif text-[32px] sm:text-[42px] font-bold text-[#1a1a1a]">Trending Products</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {trendingProducts.map((item) => (
            <div key={item.id} className="relative h-full">
              <ProductCard item={item} setCartOpen={setCartOpen} navigateTo={navigateTo} />
            </div>
          ))}
        </div>
      </div>

      {/* ── All Products — 4 per collection with individual headings ── */}
      <div className="border-t border-[#e6dfd3] px-4 sm:px-8 pb-16 sm:pb-24 pt-12 sm:pt-20 md:px-16 lg:px-20">
        <div className="flex flex-col gap-16 sm:gap-24">
          {collectionSections.map((col) => {
            const products = collectionsData[col.key]?.slice(0, 4) || [];
            return (
              <div key={col.key}>
                <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${col.color} text-xl sm:text-2xl text-[#f5f0ea] shadow-lg`}>
                      {col.icon}
                    </div>
                    <div>
                      <p className="font-sans text-[10px] sm:text-[12px] font-bold uppercase tracking-[3px] text-[#8b5e3c]">
                        {col.desc}
                      </p>
                      <h3 className="font-serif text-[24px] sm:text-[32px] font-bold text-[#1a1a1a]">
                        {col.label}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewAll(col.key)}
                    className="flex items-center self-start sm:self-auto gap-2 font-sans text-[11px] sm:text-[13px] font-bold uppercase tracking-[2px] text-[#8b5e3c] transition-all duration-200 hover:gap-3 hover:text-[#4a3525]"
                  >
                    View All <span>→</span>
                  </button>
                </div>

                <div className="mb-6 sm:mb-10 h-px w-full bg-[#e6dfd3]" />

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                  {products.map((item) => (
                    <div key={item.id} className="relative h-full">
                      <ProductCard item={item} setCartOpen={setCartOpen} navigateTo={navigateTo} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* ── Promotional Offer Banner (Responsive) ── */}
        <div className="relative mx-0 mt-16 sm:mt-24 overflow-hidden rounded-xl sm:rounded-2xl bg-[#4a3525] px-6 py-10 sm:px-8 sm:py-16 text-[#f5f0ea] shadow-xl md:mx-8 lg:px-20 lg:mx-12 flex flex-col md:flex-row items-center justify-between">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_100%_100%,#ffffff_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,transparent_40%)]" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left w-full">
            <p className="mb-2 sm:mb-3 font-sans text-[11px] sm:text-[13px] font-bold uppercase tracking-[4px] text-[#d4b895]">
              Exclusive Limited Time Offer
            </p>
            <h2 className="mb-4 sm:mb-5 font-serif text-[32px] sm:text-[46px] md:text-[52px] font-bold leading-[1.1] text-white">
              Elevate Your Wardrobe with 30% Off
            </h2>
            <p className="mb-6 sm:mb-10 font-sans text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-[#e6dfd3] px-2 md:px-0">
              Discover the perfect blend of modern minimalism and classic elegance. Refresh your style today with our exclusive Coffee & Cream collection.
            </p>
            <button
              onClick={() => navigateTo("/offer")}
              className="inline-block w-full sm:w-auto rounded-md bg-[#f5f0ea] px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-[12px] sm:text-[14px] font-bold uppercase tracking-[2.5px] text-[#4a3525] transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Offers
            </button>
          </div>
          
          <div className="relative z-10 mt-10 md:mt-0 flex items-center justify-center md:ml-10">
            <div className="h-40 w-40 sm:h-56 sm:w-56 rounded-full border-[4px] sm:border-[6px] border-[#6b4e31] flex flex-col items-center justify-center bg-[#3d2817]/80 backdrop-blur-md shadow-2xl transform rotate-12 transition-transform hover:rotate-0 duration-500">
              <span className="block font-serif text-[42px] sm:text-[64px] font-bold leading-none text-white">-30%</span>
              <span className="block font-sans text-[11px] sm:text-[14px] font-bold tracking-[3px] uppercase text-[#d4b895] mt-1 sm:mt-2">Discount</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}