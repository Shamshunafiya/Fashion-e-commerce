import { useCart } from "../Context/CartContext.jsx";

export default function CartSidebar({ open, setCartOpen, navigateTo }) {
  const { cartItems, removeFromCart, updateQty, total, clearCart } = useCart();

  const handleBuyNow = () => {
    setCartOpen(false);
    navigateTo("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 z-[1100] bg-black/40 transition-opacity duration-300"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[1200] flex w-[360px] flex-col bg-white shadow-[-4px_0_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#f0ebe3] px-5 pt-5 pb-3">
          <div>
            <h2 className="m-0 font-serif text-[18px] font-bold text-[#1a1a1a]">
              Cart
            </h2>

            <p className="mt-0.5 font-sans text-[11px] tracking-[1px] text-[#999]">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </p>
          </div>

          <button
            onClick={() => setCartOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e0d5] text-[18px] text-[#666] transition-all duration-200 hover:bg-[#f8f5f0]"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {cartItems.length === 0 ? (
            <div className="py-[50px] text-center text-[#999]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ddd"
                strokeWidth="1.5"
                className="mx-auto mb-3 block"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>

              <p className="font-serif text-[15px] text-[#bbb]">
                Cart is empty
              </p>

              <button
                onClick={() => {
                  setCartOpen(false);
                  navigateTo("/shop");
                }}
                className="mt-4 bg-[#1a1a1a] px-5 py-2 font-sans text-[10px] tracking-[1.5px] text-white transition hover:bg-[#b8860b]"
              >
                SHOP NOW
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b border-[#f5f0ea] py-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[80px] w-[80px] rounded bg-[#faf9f5] object-contain p-1 flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <p className="mb-0.5 font-serif text-[12px] font-semibold text-[#1a1a1a] line-clamp-2">
                    {item.name}
                  </p>

                  <p className="mb-1 font-sans text-[10px] tracking-[0.5px] text-[#b8860b]">
                    {item.category}
                  </p>

                  <p className="mb-2 font-serif text-[13px] font-bold text-[#1a1a1a]">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="flex h-[22px] w-[22px] items-center justify-center border border-[#ddd] bg-[#fafafa] text-[13px] hover:bg-[#f0f0f0] text-[#666]"
                    >
                      −
                    </button>

                    <span className="min-w-[16px] text-center font-sans text-[11px] text-[#1a1a1a]">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="flex h-[22px] w-[22px] items-center justify-center border border-[#ddd] bg-[#fafafa] text-[13px] hover:bg-[#f0f0f0] text-[#666]"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto p-0 text-[16px] text-[#ccc] transition hover:text-red-400"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#f0ebe3] bg-[#fdfaf7] px-5 pt-4 pb-6">
            <div className="mb-4 flex justify-between">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[1px] text-[#888]">
                Total
              </span>

              <span className="font-serif text-[18px] font-bold text-[#1a1a1a]">
                ₹{total.toFixed(2)} 
              </span>
            </div>

            <button
              onClick={handleBuyNow}
              className="mb-2 w-full bg-[#1a1a1a] py-3 font-sans text-[10px] font-bold uppercase tracking-[2px] text-white transition hover:bg-[#b8860b]"
            >
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full border border-[#e0d8ce] bg-transparent py-2 font-sans text-[10px] uppercase tracking-[1.5px] text-[#999] transition hover:bg-[#f5f0ea]"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}