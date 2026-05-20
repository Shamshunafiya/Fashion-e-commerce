import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { collectionsData } from "../data/Collection.js";
import ProductCard from "./ProductCard.jsx";

const allProducts = [
  ...collectionsData.modern,
  ...collectionsData.traditional,
  ...collectionsData.winter,
  ...collectionsData.summer,
];

export default function SearchOverlay({ isOpen, onClose, setCartOpen }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    
    const searchTerms = query.toLowerCase().split(" ");
    const filtered = allProducts.filter((product) => {
      const name = product.name.toLowerCase();
      const category = product.category.toLowerCase();
      return searchTerms.every(term => name.includes(term) || category.includes(term));
    });
    
    setResults(filtered);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[3000] bg-[#fdfaf7] flex flex-col font-['Montserrat',sans-serif]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-10 md:px-20 py-8 border-b border-[#ddd8d0]">
            <div className="w-10"></div> {/* Spacer for centering */}
            <h2 className="text-[24px] font-['Cormorant_Garamond',serif] font-bold tracking-[2px] uppercase text-[#1a1a1a]">
              Search Zaro
            </h2>
            <button 
              onClick={onClose}
              className="text-[#1a1a1a] hover:text-[#b08d57] hover:rotate-90 transition-all duration-500"
            >
              <X size={32} strokeWidth={1} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-[800px] mx-auto px-6 pt-16 pb-12">
            <div className="relative">
              <input
                type="text"
                autoFocus
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#ddd8d0] py-4 pl-14 pr-4 text-[24px] md:text-[32px] text-[#1a1a1a] font-['Cormorant_Garamond',serif] focus:outline-none focus:border-[#b08d57] transition-colors placeholder-[#aaa]"
              />
              <Search 
                size={28} 
                className="absolute left-0 top-[40%] -translate-y-1/2 text-[#1a1a1a] opacity-50" 
              />
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 text-[11px] font-semibold text-[#888] uppercase tracking-[1px]">
              <span>Popular Searches:</span>
              <button onClick={() => setQuery("Blazer")} className="hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a]">Blazer</button>
              <button onClick={() => setQuery("Saree")} className="hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a]">Saree</button>
              <button onClick={() => setQuery("Dress")} className="hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a]">Dress</button>
              <button onClick={() => setQuery("Jacket")} className="hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a]">Jacket</button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto px-10 md:px-20 pb-20">
            {query.trim() !== "" && (
              <div className="max-w-[1400px] mx-auto">
                <p className="text-[12px] tracking-[2px] text-[#888] uppercase mb-8">
                  {results.length} {results.length === 1 ? 'Result' : 'Results'} Found
                </p>
                
                {results.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {results.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <ProductCard 
                          item={item} 
                          setCartOpen={(state) => {
                            setCartOpen(state);
                            if(state) onClose();
                          }} 
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-[20px] text-[#1a1a1a] font-['Cormorant_Garamond',serif] italic">
                      We couldn't find anything matching "{query}".
                    </p>
                    <p className="text-[13px] text-[#888] mt-4 uppercase tracking-[1px]">
                      Try searching for something else or explore our collections.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
