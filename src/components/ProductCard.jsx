import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";

export default function ProductCard({
  item,
  setCartOpen,
  navigateTo,
}) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(item);

    setAdded(true);

    setTimeout(() => setAdded(false), 1500);

    setCartOpen(true);
  };

  const handleBuyNow = (event) => {
    event.stopPropagation();
    addToCart(item);
    navigateTo("/checkout");
  };

  const handleCardClick = () => {
    navigateTo(`/product/${item.id}`);
  };

  const renderStars = () => {
    return (
      <div className="flex text-[#8b5e3c] text-[14px] mb-2">
        ★★★★★ <span className="text-[#a0a0a0] ml-1.5 text-[12px] mt-[1px]">(4.8)</span>
      </div>
    );
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer group flex flex-col h-full overflow-hidden rounded-xl bg-white border border-[#f5f0ea] transition-all duration-300 ease-in-out shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(74,53,37,0.1)] hover:-translate-y-1"
    >
      {/* Image Container - Reduced height on mobile for better proportions in 2-col grids */}
      <div className="relative h-[220px] sm:h-[280px] lg:h-[360px] overflow-hidden bg-white p-2 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x500/ffffff/4a3525?text=${encodeURIComponent(
              item.name
            )}`;
          }}
        />

        {/* Badge */}
        {item.badge && (
          <span className="absolute top-4 left-4 inline-block bg-[#4a3525] px-3.5 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-white rounded-md shadow-sm">
            {item.badge}
          </span>
        )}

        {/* Quick Actions Overlay - Coffee brown tint */}
        <div className={`absolute inset-0 bg-[#4a3525]/40 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-all duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}>
          <button
            onClick={handleAddToCart}
            className={`rounded-md px-5 py-3 font-sans text-[12px] font-bold uppercase tracking-[1.5px] transition-all duration-200 ${
              added
                ? "bg-[#6b4e31] text-white"
                : "bg-white text-[#4a3525] hover:bg-[#4a3525] hover:text-white"
            }`}
          >
            {added ? "✓ Added" : "Add Cart"}
          </button>

          <button
            onClick={handleBuyNow}
            className="rounded-md border-2 border-white bg-transparent px-5 py-2.5 font-sans text-[12px] font-bold uppercase tracking-[1.5px] text-white transition-all duration-200 hover:bg-white hover:text-[#4a3525]"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col px-3 py-3 sm:px-5 sm:py-5 bg-[#ffffff]">
        <div className="flex justify-between items-start mb-1 sm:mb-1.5">
          <span className="font-sans text-[9px] sm:text-[11px] font-bold uppercase tracking-[1px] sm:tracking-[2px] text-[#8b5e3c]">
            {item.category}
          </span>
        </div>

        <h4 className="m-0 mb-1 sm:mb-1.5 font-serif text-[14px] sm:text-[17px] leading-[1.3] sm:leading-[1.4] font-bold text-[#1a1a1a] transition-colors duration-200 line-clamp-2">
          {item.name}
        </h4>

        {renderStars()}

        <div className="mt-auto pt-1 flex items-baseline gap-1.5 sm:gap-2.5">
          <span className="font-serif text-[16px] sm:text-[19px] font-bold text-[#4a3525]">
            ₹{item.price.toFixed(2)}
          </span>
          {item.badge === "Sale" && (
            <span className="font-serif text-[12px] sm:text-[14px] text-[#a0a0a0] line-through">
              ₹{(item.price * 1.15).toFixed(2)}
            </span>
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="mt-4 pt-3 border-t border-[#f5f0ea] flex gap-2 sm:hidden">
          <button
            onClick={handleAddToCart}
            className="flex-1 rounded-md border border-[#4a3525] bg-white px-2 py-2 font-sans text-[10px] font-bold uppercase tracking-[1px] text-[#4a3525] transition-all active:bg-[#4a3525] active:text-white"
          >
            Add
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 rounded-md bg-[#4a3525] px-2 py-2 font-sans text-[10px] font-bold uppercase tracking-[1px] text-white transition-all active:bg-[#3d2817]"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}