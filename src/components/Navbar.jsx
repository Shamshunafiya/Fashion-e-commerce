import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../Context/CartContext.jsx";
import SearchOverlay from "./SearchOverlay.jsx";

const Navbar = ({ setCartOpen }) => {
  const { cartItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-[#fdfaf7]/90 backdrop-blur-md"
      }`}
    >
      {/* Announcement Bar */}
      <div
        className={`bg-black text-white text-center text-[12px] tracking-[1px] font-normal transition-all duration-500 overflow-hidden ${
          isScrolled ? "h-0" : "h-9 flex items-center justify-center"
        }`}
      >
        Enjoy an extra 30% off selected styles with code FLASH30.{" "}
        <span className="ml-2 underline cursor-pointer hover:text-[#b08d57]">Terms apply</span>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto h-16 flex items-center justify-between px-6 relative">
        
        {/* Left */}
        <div className="flex items-center">
          <button
            className="block lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <ul className="hidden lg:flex gap-[30px]">
            <li>
              <Link
                to="/"
                className="text-[14px] font-medium uppercase tracking-[1px] hover:text-[#b08d57] transition-all duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="text-[14px] font-medium uppercase tracking-[1px] hover:text-[#b08d57] transition-all duration-300"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/collections"
                className="text-[14px] font-medium uppercase tracking-[1px] hover:text-[#b08d57] transition-all duration-300"
              >
                Collections
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-[14px] font-medium uppercase tracking-[1px] hover:text-[#b08d57] transition-all duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-[14px] font-medium uppercase tracking-[1px] hover:text-[#b08d57] transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-[28px] font-bold tracking-[4px] group"
        >
          ZARO

          <span className="block h-[2px] bg-[#b08d57] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </Link>

        {/* Right */}
        <div className="flex gap-5 items-center">
          
          {/* Search */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-[#1a1a1a] hover:text-[#b08d57] hover:scale-110 transition-all duration-300"
          >
            <Search size={20} />
          </button>

          {/* Login */}
          <Link 
            to="/login"
            className="text-[#1a1a1a] hover:text-[#b08d57] hover:scale-110 transition-all duration-300"
          >
            <User size={20} />
          </Link>

          {/* Cart */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative text-[#1a1a1a] hover:text-[#b08d57] hover:scale-110 transition-all duration-300"
          >
            <ShoppingBag size={20} />

            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-[2000] flex flex-col justify-center items-center"
          >
            {/* Close Button */}
            <button
              className="absolute top-[30px] right-[30px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-[30px] text-center">
              
              {["Home", "Shop", "Collections", "About", "Contact"].map(
                (item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase()}`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[32px] font-semibold hover:text-[#b08d57] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        setCartOpen={setCartOpen} 
      />
    </nav>
  );
};

export default Navbar;