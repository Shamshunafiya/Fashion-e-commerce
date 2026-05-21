import { useState, useEffect } from "react";
import { collections1Data } from "../data/Collection.js";
import ProductCard from "../components/ProductCard.jsx";

const offerProducts = [
  ...collections1Data.modern.slice(0, 2),
  ...collections1Data.traditional.slice(0, 2),
  ...collections1Data.winter.slice(0, 2),
  ...collections1Data.summer.slice(0, 2),
];

export default function OfferPage({ setCartOpen, navigateTo, setSelectedCollection }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 42,
    seconds: 30,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-[70px]">
      {/* Main Sale Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2d1b00] via-[#3d2817] to-[#1a0f08] px-8 py-20 text-white md:px-16 lg:px-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(184,134,11,0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.2)_0%,transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Sale Badge */}
          <div className="mb-6 inline-block">
            <div className="rounded-full border-2 border-[#d4af37] px-6 py-2 font-sans text-xs font-bold uppercase tracking-[3px] text-[#d4af37]">
              ⚡ Limited Time Offer
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 font-display text-[64px] font-bold leading-tight md:text-[72px] lg:text-[80px]">
            Summer Sale
          </h1>

          {/* Discount Badge */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="rounded-xl border-2 border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#b8860b] px-8 py-4">
              <div className="font-display text-6xl font-bold text-white md:text-7xl">
                30%
              </div>
              <p className="font-sans text-sm font-semibold uppercase tracking-[2px] text-white/90">
                Off Everything
              </p>
            </div>

            <div className="font-sans text-lg text-[#d4af37]">+</div>

            <div className="rounded-xl border border-[#d4af37] px-6 py-3">
              <p className="font-sans text-xs font-bold uppercase tracking-[2px]">Use Code:</p>
              <p className="font-display text-3xl font-bold text-[#d4af37]">SUMMER30</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-gray-300">
            Don't miss out on our biggest summer sale. Limited stock on selected items. Offer valid until the timer runs out!
          </p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] px-8 py-12 text-white md:px-16 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-center font-sans text-sm font-semibold uppercase tracking-[3px] text-[#d4af37]">
            Offer Expires In
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-[#d4af37] bg-[#1a1a1a] shadow-lg md:h-24 md:w-24">
                  <span className="font-display text-4xl font-bold text-[#d4af37] md:text-5xl">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-[2px] text-white/70">Days</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-[#d4af37] bg-[#1a1a1a] shadow-lg md:h-24 md:w-24">
                  <span className="font-display text-4xl font-bold text-[#d4af37] md:text-5xl">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-[2px] text-white/70">Hours</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-[#d4af37] bg-[#1a1a1a] shadow-lg md:h-24 md:w-24">
                  <span className="font-display text-4xl font-bold text-[#d4af37] md:text-5xl">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-[2px] text-white/70">Minutes</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border-2 border-[#d4af37] bg-[#1a1a1a] shadow-lg md:h-24 md:w-24">
                  <span className="font-display text-4xl font-bold text-[#d4af37] md:text-5xl">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-[2px] text-white/70">Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-12 text-center md:px-16 lg:px-20">
        <button
          onClick={() => navigateTo("/shop")}
          className="group relative inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
          <div className="relative rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] px-12 py-4 font-sans text-base font-bold uppercase tracking-[3px] text-white shadow-lg transition-all duration-300 group-hover:scale-105">
            Shop Now & Save 30%
          </div>
        </button>
      </div>

      {/* Featured Offer Products */}
      <div className="border-t border-[#f0f0f0] px-8 py-16 md:px-16 lg:px-20">
        <div className="mb-10">
          <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[4px] text-[#b8860b]">
            Featured Offer Products
          </p>
          <h2 className="font-display text-[36px] font-bold text-[#1a1a1a]">Handpicked Deals</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerProducts.map((item) => (
            <div
              key={item.id}
              className="relative h-full"
            >
              <ProductCard item={item} setCartOpen={setCartOpen} navigateTo={navigateTo} />
              
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-[#d4af37] px-3 py-1.5 font-sans text-xs font-bold text-white shadow-lg">
                -30%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms Banner */}
      <div className="bg-[#fafafa] px-8 py-10 md:px-16 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-sans text-[12px] leading-relaxed text-[#888]">
            *Terms & Conditions: Offer valid on selected items only. Cannot be combined with other offers. Valid until stock lasts. 30% discount automatically applied at checkout with code SUMMER30. Free shipping on orders above ₹1000.
          </p>
        </div>
      </div>
    </div>
  );
}
