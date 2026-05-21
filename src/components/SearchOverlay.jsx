import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { collections1Data } from "../data/Collection.js";
import ProductCard from "./ProductCard.jsx";

const allProducts = [
  ...collections1Data.modern,
  ...collections1Data.traditional,
  ...collections1Data.winter,
  ...collections1Data.summer,
];

const isWomensProduct = (name) => {
  const lowercase = name.toLowerCase();
  return (
    lowercase.includes("dress") ||
    lowercase.includes("saree") ||
    lowercase.includes("blouse") ||
    lowercase.includes("anarkali") ||
    lowercase.includes("dupatta") ||
    lowercase.includes("lehenga") ||
    lowercase.includes("choli") ||
    lowercase.includes("salwar") ||
    lowercase.includes("skirt") ||
    lowercase.includes("midi") ||
    lowercase.includes("crop") ||
    lowercase.includes("gown") ||
    lowercase.includes("kurti") ||
    lowercase.includes("bralette") ||
    lowercase.includes("women") ||
    lowercase.includes("girl")
  );
};

export default function SearchOverlay({ isOpen, onClose, setCartOpen }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const queryLower = query.toLowerCase().trim();

    if (queryLower === "") {
      setSuggestions([
        { type: "search", text: "Women" },
        { type: "search", text: "Men" },
        { type: "search", text: "Modern" },
        { type: "search", text: "Traditional" },
        { type: "search", text: "Winter" },
      ]);
      setResults([]);
      return;
    }

    // Dynamic autocomplete text suggestions
    const generatedQuerySuggestions = [];
    if (queryLower.includes("dress")) {
      generatedQuerySuggestions.push("dresses for women", "western dresses", "floral chiffon dress");
    } else if (queryLower.includes("shirt")) {
      generatedQuerySuggestions.push("premium linen shirts for men", "denim shirts", "casual shirts");
    } else if (queryLower.includes("saree")) {
      generatedQuerySuggestions.push("traditional handloom silk saree", "banarasi saree", "designer sarees");
    } else if (queryLower.includes("blazer")) {
      generatedQuerySuggestions.push("urban edge blazers", "mens tailored blazers", "office wear blazers");
    } else if (queryLower.includes("jacket")) {
      generatedQuerySuggestions.push("winter puffer jackets", "woolen jacket for women", "men wool coat");
    } else {
      // General suggestions based on search query
      generatedQuerySuggestions.push(`${queryLower} for women`, `${queryLower} for men`, `${queryLower} styles`);
    }

    setSuggestions(
      generatedQuerySuggestions.map(text => ({ type: "search", text }))
    );

    // Filter actual matching products
    let filtered = [];
    if (queryLower === "women") {
      filtered = allProducts.filter(p => isWomensProduct(p.name));
    } else if (queryLower === "men") {
      filtered = allProducts.filter(p => !isWomensProduct(p.name));
    } else if (queryLower === "children" || queryLower === "childern") {
      filtered = [];
    } else {
      const searchTerms = queryLower.split(" ");
      filtered = allProducts.filter((product) => {
        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();
        return searchTerms.every(term => name.includes(term) || category.includes(term));
      });
    }

    setResults(filtered);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000]">
          {/* Backdrop blur/dim screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Amazon-style search dropdown box */}
          <motion.div
            initial={{ y: -70 }}
            animate={{ y: 0 }}
            exit={{ y: -70 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="absolute top-0 left-0 w-full bg-[#fdfaf7] border-b border-[#e6dfd3] py-3 px-4 sm:px-8 md:px-16 flex items-center justify-center gap-4 shadow-lg z-[3001]"
          >
            {/* The Amazon-style Search Bar Wrapper */}
            <div className="relative w-full max-w-[800px] flex items-stretch bg-white border border-gray-300 focus-within:border-[#b08d57] rounded-md overflow-visible transition-colors shadow-sm">
              
              {/* Static Category Dropdown Selector on Left (Amazon Style) */}
              <div className="hidden sm:flex items-center bg-gray-100 border-r border-gray-300 px-4 py-2 text-[12px] font-sans font-bold uppercase tracking-[1px] text-[#555] select-none shrink-0">
                All <span className="ml-2 text-[8px]">▼</span>
              </div>

              {/* Input Field */}
              <input
                type="text"
                autoFocus
                placeholder="Search for products, categories, or styles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-[15px] sm:text-[16px] text-black placeholder-gray-400 focus:outline-none font-sans font-medium"
              />

              {/* Search Button on Right (Amazon Style) */}
              <button 
                className="bg-[#b08d57] text-white px-5 sm:px-6 flex items-center hover:bg-[#4a3525] transition-colors shrink-0"
              >
                <Search size={18} />
              </button>

              {/* Autocomplete Dropdown List */}
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 border-t-0 rounded-b-md shadow-2xl z-[3002] max-h-[420px] overflow-y-auto divide-y divide-gray-100">
                
                {/* 1. Show query suggestions */}
                {suggestions.map((sug) => (
                  <button
                    key={sug.text}
                    onClick={() => setQuery(sug.text)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-[14px] text-gray-800 font-sans"
                  >
                    <Search size={15} className="text-gray-400 shrink-0" />
                    <span className="font-semibold">{sug.text}</span>
                  </button>
                ))}

                {/* 2. Show matching product preview items */}
                {results.slice(0, 5).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      navigate(`/product/${product.id}`);
                      onClose();
                    }}
                    className="w-full text-left px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-[14px] font-sans"
                  >
                    {/* Tiny thumbnail image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded border border-gray-200 shrink-0"
                    />
                    
                    {/* Product description */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 truncate">{product.name}</p>
                      <p className="text-[12px] text-gray-500 font-medium">{product.category}</p>
                    </div>
                    
                    {/* Price */}
                    <span className="text-[14px] font-bold text-[#b08d57] shrink-0">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </button>
                ))}

                {/* 3. Handle Special 'Children' Message */}
                {(query.toLowerCase().trim() === "children" || query.toLowerCase().trim() === "childern") && (
                  <div className="px-4 py-6 text-center text-gray-500 font-sans text-[13px] font-medium leading-relaxed">
                    👶 We do not carry Children's apparel at this time. Please explore our premium Men's or Women's wear.
                  </div>
                )}

                {/* 4. Handle No results at all */}
                {query.trim() !== "" && suggestions.length === 0 && results.length === 0 && (
                  <div className="px-4 py-6 text-center text-gray-500 font-sans text-[13px] font-medium">
                    We couldn't find any results for "{query}".
                  </div>
                )}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-[#1a1a1a] hover:text-[#b08d57] transition-colors p-1"
            >
              <X size={26} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
