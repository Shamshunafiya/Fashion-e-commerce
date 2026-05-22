import { useState, useEffect } from "react";
// import { collectionsData } from "../data/Collection.js";
import { collections1Data } from "../data/Catogory.js";
import ProductCard from "../components/ProductCard.jsx";

export default function CollectionsPage({ setCartOpen, navigateTo }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [priceFilter, setPriceFilter] = useState("all");
  const [seasonFilter, setSeasonFilter] = useState("all");

  // Category data with Unsplash background images
  const categories = [
    {
      id: "Mens",
      name: "Men's Collection",
      desc: "Premium menswear with modern cuts and timeless styles",
      color: "from-blue-600 to-blue-400",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    },
    {
      id: "Womens",
      name: "Women's Collection",
      desc: "Elegant women's wear ranging from casual to formal",
      color: "from-pink-600 to-pink-400",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    },
    {
      id: "kids",
      name: "Kids Collection",
      desc: "Comfortable and stylish clothing for children",
      color: "from-purple-600 to-purple-400",
      image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80",
    },
  ];

  // Get all products for selected category
  const getProductsByCategory = () => {
    if (!selectedCategory) return [];
    const categoryData = collections1Data[selectedCategory];
    if (!categoryData) return [];
    
    // Flatten all products from nested sub-categories (modern, traditional, winter, summer)
    const allProducts = [];
    Object.values(categoryData).forEach((subCategory) => {
      if (Array.isArray(subCategory)) {
        allProducts.push(...subCategory);
      }
    });
    return allProducts;
  };

  // Apply filters and sorting
  useEffect(() => {
    let products = getProductsByCategory();

    if (seasonFilter !== "all") {
      const categoryData = collections1Data[selectedCategory];
      if (categoryData && categoryData[seasonFilter]) {
        products = categoryData[seasonFilter];
      }
    }

    if (priceFilter !== "all") {
      if (priceFilter === "low") {
        products = products.filter((p) => p.price < 75);
      } else if (priceFilter === "mid") {
        products = products.filter((p) => p.price >= 75 && p.price < 150);
      } else if (priceFilter === "high") {
        products = products.filter((p) => p.price >= 150);
      }
    }

    const sorted = [...products].sort((a, b) => {
      if (sortBy === "newest") return 0;
      else if (sortBy === "price-low") return a.price - b.price;
      else if (sortBy === "price-high") return b.price - a.price;
      else if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    setFilteredProducts(sorted);
  }, [selectedCategory, sortBy, priceFilter, seasonFilter]);

  const getAvailableSeasons = () => {
    if (!selectedCategory) return [];
    const categoryData = collections1Data[selectedCategory];
    if (!categoryData) return [];
    
    // Get all sub-category names (modern, traditional, winter, summer)
    return Object.keys(categoryData).filter(key => Array.isArray(categoryData[key]));
  };

  // ── Category selection view ──────────────────────────────────────────────
  if (!selectedCategory) {
    return (
      <div className="bg-[#fdfaf7] font-sans pt-[70px]">
        {/* Hero Banner with background image */}
        <div
          className="relative overflow-hidden min-h-[70vh] w-full flex items-center justify-center px-4 sm:px-6 md:px-8"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4a3525]/80 to-[#2d211a]/75" />

          <div className="relative z-10 text-center max-w-3xl">
            <p className="mb-4 font-sans text-[13px] font-bold uppercase tracking-[5px] text-[#f5f0ea]">
             
            </p>
            <h1 className="mb-6 font-serif text-[42px] sm:text-[60px] md:text-[88px] font-bold leading-[1.1] text-white">
                Curated Collections
            </h1>
            <p className="font-sans text-[14px] md:text-[18px] leading-relaxed text-[#f5f0ea]">
              Explore our exclusive collections designed for every member of the family
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="px-4 sm:px-6 md:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="group cursor-pointer"
              >
                <div
                  className="relative overflow-hidden rounded-lg h-80 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center"
                  style={{
                    backgroundImage: `url('${category.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Gradient overlay — darkens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-300" />

                  <div className="relative z-10 text-center text-white px-6">
                    <h2 className="font-serif text-4xl font-bold mb-3 drop-shadow-lg">
                      {category.name}
                    </h2>
                    <p className="font-sans text-sm leading-relaxed mb-6 text-white/90 drop-shadow">
                      {category.desc}
                    </p>
                    <button className="bg-white text-[#4a3525] px-8 py-2 rounded-full font-semibold text-sm hover:bg-[#f5f0ea] transition-colors duration-300 shadow-md">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Selected category view ───────────────────────────────────────────────
  const currentCategory = categories.find((c) => c.id === selectedCategory);
  const availableSeasons = getAvailableSeasons();

  return (
    <div className="bg-[#fdfaf7] font-sans pt-[70px]">
      {/* Category header with background image strip */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('${currentCategory.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a3525]/85 to-[#2d211a]/60" />
        <div className="relative z-10 px-4 sm:px-6 md:px-20 py-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center text-white/80 hover:text-white transition-colors mb-5"
          >
            <span className="mr-2">←</span>
            <span className="font-semibold">Back to Collections</span>
          </button>
          <div>
            <h1 className="font-serif text-4xl font-bold text-white drop-shadow-lg">
              {currentCategory.name}
            </h1>
            <p className="text-white/70 mt-1">{filteredProducts.length} products available</p>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white border-b border-[#e8e0d9] px-4 sm:px-6 md:px-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sort */}
          <div>
            <label className="block text-sm font-semibold text-[#4a3525] mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-[#d4ccc2] rounded-lg focus:outline-none focus:border-[#4a3525] transition-colors"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block text-sm font-semibold text-[#4a3525] mb-2">Price Range</label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full px-4 py-2 border border-[#d4ccc2] rounded-lg focus:outline-none focus:border-[#4a3525] transition-colors"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $75</option>
              <option value="mid">$75 - $150</option>
              <option value="high">Above $150</option>
            </select>
          </div>

          {/* Season/Style Filter */}
          {availableSeasons.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-[#4a3525] mb-2">
                Collection Type
              </label>
              <select
                value={seasonFilter}
                onChange={(e) => setSeasonFilter(e.target.value)}
                className="w-full px-4 py-2 border border-[#d4ccc2] rounded-lg focus:outline-none focus:border-[#4a3525] transition-colors"
              >
                <option value="all">All Types</option>
                {availableSeasons.map((season) => (
                  <option key={season} value={season}>
                    {season.charAt(0).toUpperCase() + season.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 sm:px-6 md:px-20 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} item={product} setCartOpen={setCartOpen} navigateTo={navigateTo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#888] text-lg mb-4">No products found with the selected filters.</p>
            <button
              onClick={() => {
                setSeasonFilter("all");
                setPriceFilter("all");
                setSortBy("newest");
              }}
              className="bg-[#4a3525] text-white px-6 py-2 rounded-lg hover:bg-[#2d211a] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}