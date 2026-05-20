import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import { collectionsData } from "../data/Collection.js";

const allProducts = [
  ...collectionsData.modern,
  ...collectionsData.traditional,
  ...collectionsData.winter,
  ...collectionsData.summer,
];

// Accordion component
function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#e6dfd3]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left group"
      >
        <h4 className="font-sans text-[14px] font-bold uppercase tracking-[2px] text-[#1a1a1a] group-hover:text-[#8b5e3c] transition-colors">
          {title}
        </h4>
        <span className={`text-[22px] text-[#8b5e3c] transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function ProductDetailsPage({ setCartOpen, navigateTo }) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const found = allProducts.find((p) => p.id === id);
    setProduct(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdfaf7] pt-[70px]">
        <div className="text-center">
          <h2 className="mb-4 font-serif text-[32px] font-bold text-[#1a1a1a]">Product Not Found</h2>
          <button
            onClick={() => navigateTo("/shop")}
            className="rounded-md bg-[#4a3525] px-8 py-3 font-sans text-[12px] font-bold uppercase tracking-[2px] text-[#f5f0ea] transition hover:bg-[#6b4e31]"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setCartOpen(true);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, qty });
    navigateTo("/checkout");
  };

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-[#fdfaf7] pt-[70px]">
      {/* Breadcrumb */}
      <div className="bg-[#f5f0ea] px-6 py-4 md:px-16 lg:px-20">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-[#8b5e3c]">
          <span className="cursor-pointer hover:text-[#4a3525] transition-colors" onClick={() => navigateTo("/")}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-[#4a3525] transition-colors" onClick={() => navigateTo("/shop")}>Shop</span>
          <span className="mx-2">/</span>
          <span className="text-[#4a3525]">{product.name}</span>
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Section */}
          <div className="relative flex items-center justify-center rounded-2xl bg-white p-6 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#e6dfd3]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[600px] w-full object-contain hover:scale-105 transition-transform duration-500"
            />
            {product.badge && (
              <span className="absolute top-6 left-6 inline-block rounded-md bg-[#4a3525] px-4 py-2 font-sans text-[12px] font-bold uppercase tracking-[2px] text-white shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-sans text-[13px] font-bold uppercase tracking-[3px] text-[#8b5e3c]">
              {product.category}
            </p>
            <h1 className="mb-4 font-serif text-[36px] sm:text-[44px] font-bold leading-[1.2] text-[#1a1a1a]">
              {product.name}
            </h1>

            <div className="mb-6 flex items-center text-[#8b5e3c] text-[18px]">
              ★★★★★ <span className="ml-2 text-[14px] text-[#a0a0a0] mt-[2px]">(124 Reviews)</span>
            </div>

            <div className="mb-8 flex items-baseline gap-4">
              <span className="font-serif text-[32px] font-bold text-[#4a3525]">
                ₹{product.price.toFixed(2)}
              </span>
              {product.badge === "Sale" && (
                <span className="font-serif text-[20px] text-[#a0a0a0] line-through">
                  ₹{(product.price * 1.15).toFixed(2)}
                </span>
              )}
            </div>

            <p className="mb-8 font-sans text-[15px] leading-relaxed text-[#555]">
              Experience unmatched elegance and comfort with the <strong>{product.name}</strong>. Carefully crafted with premium materials, this piece from our <strong>{product.category}</strong> collection is designed to seamlessly fit into your sophisticated lifestyle.
            </p>

            {/* Quantity and Actions */}
            <div className="mb-10 flex flex-col sm:flex-row gap-5">
              <div className="flex h-[52px] w-full sm:w-[140px] items-center justify-between rounded-md border-2 border-[#e6dfd3] bg-white px-4">
                <button onClick={decreaseQty} className="text-[24px] text-[#888] hover:text-[#4a3525] transition-colors pb-1">−</button>
                <span className="font-sans text-[16px] font-bold text-[#1a1a1a]">{qty}</span>
                <button onClick={increaseQty} className="text-[24px] text-[#888] hover:text-[#4a3525] transition-colors pb-1">+</button>
              </div>

              <div className="flex flex-1 gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 rounded-md px-6 py-3 font-sans text-[13px] font-bold uppercase tracking-[2px] transition-all duration-300 ${
                    added
                      ? "bg-[#6b4e31] text-white"
                      : "border-2 border-[#4a3525] bg-transparent text-[#4a3525] hover:bg-[#4a3525] hover:text-white"
                  }`}
                >
                  {added ? "✓ Added to Cart" : "Add to Cart"}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 rounded-md bg-[#4a3525] px-6 py-3 font-sans text-[13px] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#3d2817] shadow-[0_4px_12px_rgba(74,53,37,0.2)]"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Accordion Sections */}
            <div>
              <Accordion title="Product Details">
                <ul className="space-y-3 font-sans text-[14px] text-[#555]">
                  <li className="flex gap-3"><span className="text-[#8b5e3c] font-bold shrink-0">•</span><span><strong>Material:</strong> Premium quality fabric with soft lining</span></li>
                  <li className="flex gap-3"><span className="text-[#8b5e3c] font-bold shrink-0">•</span><span><strong>Category:</strong> {product.category} Collection</span></li>
                  <li className="flex gap-3"><span className="text-[#8b5e3c] font-bold shrink-0">•</span><span><strong>Fit:</strong> Regular fit, true to size</span></li>
                  <li className="flex gap-3"><span className="text-[#8b5e3c] font-bold shrink-0">•</span><span><strong>Care:</strong> Gentle machine wash in cold water. Do not bleach. Dry flat.</span></li>
                  <li className="flex gap-3"><span className="text-[#8b5e3c] font-bold shrink-0">•</span><span><strong>Origin:</strong> Designed & crafted in India</span></li>
                  <li className="flex gap-3"><span className="text-[#8b5e3c] font-bold shrink-0">•</span><span><strong>Sizes Available:</strong> XS, S, M, L, XL, XXL</span></li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <div className="space-y-5 font-sans text-[14px] text-[#555]">
                  <div className="flex gap-4 rounded-xl bg-[#f5f0ea] p-4">
                    <span className="text-[24px]">🚚</span>
                    <div>
                      <p className="font-bold text-[#1a1a1a] mb-1">Free Standard Shipping</p>
                      <p>All orders above ₹999 qualify for free delivery. Estimated delivery: <strong>3–5 business days</strong>.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-xl bg-[#f5f0ea] p-4">
                    <span className="text-[24px]">⚡</span>
                    <div>
                      <p className="font-bold text-[#1a1a1a] mb-1">Express Shipping</p>
                      <p>Available at checkout for ₹99. Estimated delivery: <strong>1–2 business days</strong>.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-xl bg-[#f5f0ea] p-4">
                    <span className="text-[24px]">🔄</span>
                    <div>
                      <p className="font-bold text-[#1a1a1a] mb-1">Easy 15-Day Returns</p>
                      <p>Not satisfied? Return unused items in original packaging within <strong>15 days</strong> of delivery for a full refund or exchange.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-xl bg-[#f5f0ea] p-4">
                    <span className="text-[24px]">💬</span>
                    <div>
                      <p className="font-bold text-[#1a1a1a] mb-1">Need Help?</p>
                      <p>Contact our support team at <strong>support@zorafashion.com</strong> or via WhatsApp.</p>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
