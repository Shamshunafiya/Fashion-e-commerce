import { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext.jsx";

export default function CheckoutPage({ navigateTo }) {
  const { cartItems, total, clearCart } = useCart();
  
  // State: "form" | "payment_gateway" | "success"
  const [checkoutStep, setCheckoutStep] = useState("form");
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  // For Tracking UI
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [checkoutStep]);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    
    // Generate mock order ID
    const generatedId = "ZRA-" + Math.floor(Math.random() * 900000 + 100000);
    setOrderId(generatedId);

    if (paymentMethod === "online" || paymentMethod === "card") {
      setCheckoutStep("payment_gateway");
    } else {
      // For COD, directly place order
      finishOrder();
    }
  };

  const finishOrder = () => {
    setCheckoutStep("success");
    clearCart();
  };

  // ── SUCCESS / TRACKING SCREEN ──
  if (checkoutStep === "success") {
    return (
      <div className="min-h-screen bg-[#fdfaf7] pt-[70px]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
          
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#e8f5e9] text-[42px] shadow-sm">
              ✅
            </div>
            <h2 className="mb-3 font-serif text-[38px] sm:text-[46px] font-bold text-[#1a1a1a]">Order Confirmed!</h2>
            <p className="font-sans text-[15px] text-[#555]">
              Thank you for your purchase. Your order <span className="font-bold text-[#4a3525]">#{orderId}</span> has been received.
            </p>
          </div>

          {/* Order Tracking Stepper */}
          <div className="mb-12 rounded-xl border border-[#e6dfd3] bg-white p-6 sm:p-10 shadow-sm">
            <h3 className="mb-8 font-serif text-[24px] font-bold text-[#1a1a1a]">Order Status</h3>
            
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[19px] top-4 h-[calc(100%-32px)] w-[2px] bg-[#f5f0ea]"></div>
              
              <div className="relative mb-8 flex gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4a3525] text-white shadow-md">✓</div>
                <div>
                  <h4 className="font-serif text-[18px] font-bold text-[#1a1a1a]">Order Placed</h4>
                  <p className="mt-1 font-sans text-[13px] text-[#888]">We have received your order and payment.</p>
                </div>
              </div>
              
              <div className="relative mb-8 flex gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#4a3525] bg-[#fdfaf7] text-[#4a3525] shadow-sm">
                  <span className="h-3 w-3 rounded-full bg-[#4a3525] animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-serif text-[18px] font-bold text-[#1a1a1a]">Processing</h4>
                  <p className="mt-1 font-sans text-[13px] text-[#888]">Your items are being carefully packed.</p>
                </div>
              </div>
              
              <div className="relative mb-8 flex gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#e6dfd3] bg-white text-[#d3cbbd]">3</div>
                <div>
                  <h4 className="font-serif text-[18px] font-bold text-[#d3cbbd]">Shipped</h4>
                  <p className="mt-1 font-sans text-[13px] text-[#aaa]">Your order is on the way via our delivery partner.</p>
                </div>
              </div>
              
              <div className="relative flex gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#e6dfd3] bg-white text-[#d3cbbd]">4</div>
                <div>
                  <h4 className="font-serif text-[18px] font-bold text-[#d3cbbd]">Delivered</h4>
                  <p className="mt-1 font-sans text-[13px] text-[#aaa]">Expected delivery in 3-5 business days.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigateTo("/collections")}
              className="rounded-xl border-2 border-[#4a3525] bg-[#4a3525] px-10 py-4 font-sans text-[14px] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#3d2817] shadow-lg hover:-translate-y-1"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── MOCK PAYMENT GATEWAY SCREEN (Razorpay Simulation) ──
  if (checkoutStep === "payment_gateway") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdfaf7] pt-[70px]">
        <div className="w-full max-w-md px-6 py-12">
          <div className="overflow-hidden rounded-2xl border border-[#e6dfd3] bg-white shadow-2xl">
            {/* Fake Gateway Header */}
            <div className="bg-[#1a1a1a] px-6 py-4 text-center text-white">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[3px] text-[#8b5e3c]">Secure Checkout</p>
              <h3 className="font-serif text-[24px] font-bold">Zora Fashion</h3>
              <p className="mt-2 font-serif text-[28px] font-bold text-[#d4b895]">₹{total.toFixed(2)}</p>
            </div>
            
            <div className="p-8 text-center">
              {paymentMethod === "online" ? (
                <>
                  <h4 className="mb-2 font-serif text-[20px] font-bold text-[#1a1a1a]">Scan to Pay</h4>
                  <p className="mb-6 font-sans text-[13px] text-[#555]">Open Google Pay, PhonePe, or Paytm and scan this QR code.</p>
                  
                  {/* Mock QR Code */}
                  <div className="mx-auto mb-8 h-48 w-48 rounded-xl border-4 border-[#1a1a1a] bg-white p-2">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=zora@bank&pn=ZoraFashion&am=${total}`} alt="QR Code" className="h-full w-full object-contain" />
                  </div>
                </>
              ) : (
                <>
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f5f0ea]">
                     <span className="text-[32px] animate-pulse">💳</span>
                  </div>
                  <h4 className="mb-2 font-serif text-[20px] font-bold text-[#1a1a1a]">Processing Payment...</h4>
                  <p className="mb-8 font-sans text-[13px] text-[#555]">Please do not close this window or press back.</p>
                </>
              )}
              
              <div className="rounded-lg bg-[#fff9e6] p-4 text-left border border-[#ffecb3] mb-6">
                <p className="font-sans text-[12px] text-[#856404]">
                  <strong>Developer Note:</strong> This is a simulation. To connect actual Razorpay, you would load the Razorpay script, pass the Order ID from your backend, and open `new window.Razorpay(options).open()`.
                </p>
              </div>

              <button
                onClick={finishOrder}
                className="w-full rounded-lg bg-[#4a3525] py-4 font-sans text-[14px] font-bold uppercase tracking-[2px] text-white transition-all hover:bg-[#3d2817]"
              >
                Simulate Payment Success
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── REGULAR CHECKOUT FORM ──
  return (
    <div className="min-h-screen bg-[#fdfaf7] pt-[70px]">
      <div className="bg-[#f5f0ea] px-6 md:px-12 lg:px-20 py-10 md:py-16">
        <p className="mb-2 font-sans text-[11px] sm:text-[13px] font-bold uppercase tracking-[4px] text-[#8b5e3c]">Checkout</p>
        <h1 className="m-0 font-serif text-[38px] sm:text-[48px] font-bold text-[#1a1a1a]">Complete Your Order</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 px-6 md:px-12 lg:px-20 py-12 lg:py-16">
        {/* Shipping Form */}
        <div>
          <h3 className="mb-6 sm:mb-8 font-serif text-[28px] sm:text-[32px] font-bold text-[#1a1a1a]">Shipping Details</h3>
          <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {["First Name", "Last Name"].map((f) => (
              <div key={f}>
                <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#4a3525]">{f}</label>
                <input className="w-full rounded-md border-2 border-[#e6dfd3] bg-white px-4 py-3.5 font-sans text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a3525]" placeholder={f} />
              </div>
            ))}
          </div>
          
          {["Email Address", "Phone Number", "Street Address", "City, State, ZIP"].map((f) => (
            <div key={f} className="mb-5">
              <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#4a3525]">{f}</label>
              <input className="w-full rounded-md border-2 border-[#e6dfd3] bg-white px-4 py-3.5 font-sans text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a3525]" placeholder={f} />
            </div>
          ))}
          
          <h3 className="mb-6 mt-12 font-serif text-[28px] sm:text-[32px] font-bold text-[#1a1a1a]">Payment Method</h3>
          
          {/* Payment Method Selector */}
          <div className="mb-8 flex flex-col gap-4">
            <label className={`cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 ${paymentMethod === "card" ? "border-[#4a3525] bg-[#f5f0ea] shadow-md" : "border-[#e6dfd3] bg-white hover:border-[#8b5e3c]"}`}>
               <div className="flex items-center gap-4">
                 <input type="radio" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="h-5 w-5 accent-[#4a3525]" />
                 <div>
                   <span className="block font-serif text-[18px] sm:text-[20px] font-bold text-[#1a1a1a]">Credit / Debit Card</span>
                   <span className="font-sans text-[13px] text-[#555]">Pay securely with your bank card</span>
                 </div>
               </div>
            </label>

            <label className={`cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 ${paymentMethod === "online" ? "border-[#4a3525] bg-[#f5f0ea] shadow-md" : "border-[#e6dfd3] bg-white hover:border-[#8b5e3c]"}`}>
               <div className="flex items-center gap-4">
                 <input type="radio" name="payment" checked={paymentMethod === "online"} onChange={() => setPaymentMethod("online")} className="h-5 w-5 accent-[#4a3525]" />
                 <div>
                   <span className="block font-serif text-[18px] sm:text-[20px] font-bold text-[#1a1a1a]">UPI / Online Payment (Razorpay)</span>
                   <span className="font-sans text-[13px] text-[#555]">Pay via Google Pay, PhonePe, Paytm, etc.</span>
                 </div>
               </div>
            </label>

            <label className={`cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 ${paymentMethod === "cod" ? "border-[#4a3525] bg-[#f5f0ea] shadow-md" : "border-[#e6dfd3] bg-white hover:border-[#8b5e3c]"}`}>
               <div className="flex items-center gap-4">
                 <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} className="h-5 w-5 accent-[#4a3525]" />
                 <div>
                   <span className="block font-serif text-[18px] sm:text-[20px] font-bold text-[#1a1a1a]">Cash on Delivery (COD)</span>
                   <span className="font-sans text-[13px] text-[#555]">Pay with cash upon delivery</span>
                 </div>
               </div>
            </label>
          </div>

          {/* Conditional Payment Forms */}
          {paymentMethod === "card" && (
            <div className="mb-8 rounded-xl border border-[#e6dfd3] bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between border-b border-[#f5f0ea] pb-4">
                <span className="font-sans text-[14px] font-bold text-[#1a1a1a]">Card Details</span>
                <div className="flex gap-2">
                  <div className="h-6 w-10 rounded bg-[#e6dfd3]"></div>
                  <div className="h-6 w-10 rounded bg-[#e6dfd3]"></div>
                </div>
              </div>
              
              {["Card Number", "Cardholder Name"].map((f) => (
                <div key={f} className="mb-5">
                  <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#4a3525]">{f}</label>
                  <input className="w-full rounded-md border-2 border-[#e6dfd3] bg-[#fdfaf7] px-4 py-3.5 font-sans text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a3525]" placeholder={f} />
                </div>
              ))}
              
              <div className="grid grid-cols-2 gap-5">
                {["Expiry Date (MM/YY)", "CVV"].map((f) => (
                  <div key={f}>
                    <label className="mb-2 block font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-[#4a3525]">{f}</label>
                    <input className="w-full rounded-md border-2 border-[#e6dfd3] bg-[#fdfaf7] px-4 py-3.5 font-sans text-[14px] text-[#1a1a1a] outline-none transition-colors focus:border-[#4a3525]" placeholder={f} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {paymentMethod === "online" && (
            <div className="mb-8 rounded-xl border border-[#e6dfd3] bg-white p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center text-center">
               <div className="mb-4 h-20 w-20 rounded-xl bg-[#f5f0ea] flex items-center justify-center border-2 border-[#4a3525]">
                 <span className="text-[32px]">📱</span>
               </div>
               <h4 className="mb-2 font-serif text-[20px] font-bold text-[#1a1a1a]">Pay via Razorpay / UPI</h4>
               <p className="font-sans text-[14px] text-[#555] max-w-sm">Click 'Place Order' below to open the secure payment gateway where you can scan a QR code or enter your UPI ID.</p>
            </div>
          )}

          {paymentMethod === "cod" && (
             <div className="mb-8 rounded-xl border border-[#e6dfd3] bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f5f0ea] text-[28px] border border-[#e6dfd3]">
                  🚚
                </div>
                <div>
                  <h4 className="mb-2 font-serif text-[18px] font-bold text-[#1a1a1a]">Pay at your doorstep</h4>
                  <p className="font-sans text-[14px] text-[#555] leading-relaxed">
                    You can pay in cash or via UPI directly to our delivery executive when your order arrives. Please keep the exact change handy for cash payments.
                  </p>
                </div>
             </div>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="mb-6 sm:mb-8 font-serif text-[28px] sm:text-[32px] font-bold text-[#1a1a1a]">Order Summary</h3>
          <div className="mb-8 rounded-xl border border-[#e6dfd3] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            {cartItems.length === 0 ? (
              <p className="py-6 text-center font-sans text-[#888]">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-[#f5f0ea] py-4 last:border-0">
                  <div className="h-[90px] w-[70px] shrink-0 overflow-hidden rounded-md bg-[#fdfaf7] p-1 border border-[#e6dfd3]">
                     <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="mb-1 font-serif text-[15px] font-bold text-[#1a1a1a] line-clamp-2">{item.name}</p>
                    <p className="m-0 font-sans text-[12px] text-[#8b5e3c]">Qty: {item.qty}</p>
                  </div>
                  <div className="flex flex-col justify-center items-end">
                    <p className="font-serif text-[17px] font-bold text-[#4a3525]">₹{(item.price * item.qty).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
            
            <div className="mt-4 border-t-2 border-[#f5f0ea] pt-6 pb-2">
              <div className="flex justify-between font-sans mb-3 text-[#555]">
                <span className="text-[14px]">Subtotal</span>
                <span className="text-[14px]">₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-sans mb-4 text-[#555]">
                <span className="text-[14px]">Shipping</span>
                <span className="text-[14px]">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#1a1a1a]">Total</span>
                <span className="font-serif text-[28px] font-bold text-[#4a3525]">₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={handlePlaceOrder}
            disabled={cartItems.length === 0}
            className={`mb-5 w-full rounded-xl py-5 font-sans text-[15px] sm:text-[16px] font-bold uppercase tracking-[4px] transition-all duration-300 ${
              cartItems.length === 0 
                ? "bg-[#d3cbbd] text-white cursor-not-allowed" 
                : "bg-[#4a3525] text-[#f5f0ea] hover:bg-[#3d2817] hover:-translate-y-1 hover:shadow-xl shadow-lg"
            }`}
          >
            {paymentMethod === "cod" ? "Place Order" : "Proceed to Pay"}
          </button>
          
          <button
            onClick={() => navigateTo("/collections")}
            className="w-full rounded-md border-2 border-[#4a3525] bg-transparent py-4 font-sans text-[13px] font-bold uppercase tracking-[2px] text-[#4a3525] transition-all duration-300 hover:bg-[#4a3525] hover:text-white"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}