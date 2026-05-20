import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqCategories = {
  orders: {
    title: "Orders",
    items: [
      {
        q: "How do i place an order online?",
        a: "Placing an order is simple. Browse collections, select your preferred size and color, then proceed securely through our streamlined checkout process in minutes."
      },
      {
        q: "Can I modify my order after purchase?",
        a: "We process orders quickly to ensure fast delivery. Please contact our support team immediately, and we will accommodate modifications if the item hasn't been shipped yet."
      }
    ]
  },
  shipping: {
    title: "Shipping and Returns",
    items: [
      {
        q: "What shipping methods do you offer?",
        a: "We offer standard ground shipping, expedited shipping, and international delivery options. All methods are fully tracked for peace of mind."
      },
      {
        q: "Do you offer international shipping services?",
        a: "Yes, we ship to most countries globally. Shipping rates and delivery times will be calculated at checkout based on your destination."
      },
      {
        q: "What is your return and exchange policy?",
        a: "We offer a 30-day return policy for unused, unworn items with original tags. Exchanges are processed free of charge."
      },
      {
        q: "How do I start a return request?",
        a: "Simply visit our self-service returns portal, enter your order number and email address, and print your prepaid return shipping label."
      },
      {
        q: "How long does refund processing take?",
        a: "Once we receive your returned items at our warehouse, refunds are processed back to your original payment method within 5-7 business days."
      }
    ]
  },
  payments: {
    title: "Payments",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and flexible buy-now-pay-later options."
      },
      {
        q: "Is my online payment information secure?",
        a: "Yes, absolutely. We use industry-standard SSL encryption and PCI-compliant gateways to ensure your financial data is fully encrypted and secure."
      },
      {
        q: "How do I apply a discount code?",
        a: "Enter your discount code in the promo input box at checkout and click apply. The total price will automatically recalculate."
      },
      {
        q: "Why was my payment transaction declined?",
        a: "Declines can happen due to incorrect card info, insufficient funds, or security flags from your bank. Please double-check details or try PayPal."
      }
    ]
  }
};

// Independant Accordion Item Component
function FAQItem({ q, a, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-white border rounded-[6px] p-6 cursor-pointer hover:border-[#1a1a1a] transition-all duration-300 shadow-sm
        ${isOpen ? 'border-[#1a1a1a]' : 'border-[#e5e5e5]'}`}
    >
      <div className="flex justify-between items-center gap-6">
        <h3 className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] font-medium text-[#1a1a1a] leading-relaxed select-none">
          {q}
        </h3>
        
        {/* Solid Circle plus/minus button */}
        <div className="w-[22px] h-[22px] rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 transition-transform duration-300">
          {isOpen ? (
            <span className="text-[12px] font-bold text-white select-none leading-none mb-[2px]">-</span>
          ) : (
            <span className="text-[12px] font-bold text-white select-none leading-none mb-[2px]">+</span>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[13px] md:text-[14px] text-[#666] leading-[1.8] mt-4 pt-4 border-t border-[#f2eee8] font-light">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Perfect offset to clear sticky headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf7] pt-32 pb-24 font-['Montserrat',sans-serif]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[11px] tracking-[4px] uppercase text-[#888] block mb-3 font-semibold">
            ABOUT US
          </span>
          <h1 className="font-['Montserrat',sans-serif] text-[36px] sm:text-[48px] md:text-[60px] font-black text-[#1a1a1a] tracking-tight leading-[1.1] uppercase max-w-[850px] mx-auto">
            Frequently Asked<br />Questions
          </h1>
        </div>

        {/* Layout Grid - Stacks on Mobile, Side-by-side on Desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Sidebar / Navigation (Desktop Only) */}
          <div className="hidden lg:flex flex-col gap-8 w-[250px] shrink-0 sticky top-36">
            {Object.keys(faqCategories).map((key) => {
              return (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-left w-fit transition-all duration-300 py-1 border-b border-transparent hover:border-[#1a1a1a] group"
                >
                  <span className="text-[12px] tracking-[2px] font-bold uppercase text-[#888] group-hover:text-[#1a1a1a] transition-colors duration-300">
                    {key === 'shipping' ? 'Shipping and Returns' : key}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Accordion Panel: Stacks all categories one after another (One By One) */}
          <div className="flex-1 w-full flex flex-col gap-16 md:gap-20">
            {Object.entries(faqCategories).map(([key, category], catIdx) => (
              <div key={key} id={key} className="scroll-mt-36">
                <h2 className="font-['Montserrat',sans-serif] text-[28px] md:text-[32px] font-bold text-[#1a1a1a] mb-8 pb-3 border-b border-[#ede8e0]">
                  {category.title}
                </h2>

                <div className="flex flex-col gap-4">
                  {category.items.map((item, index) => (
                    <FAQItem 
                      key={index} 
                      q={item.q} 
                      a={item.a} 
                      // Open the very first question of the entire page by default
                      defaultOpen={catIdx === 0 && index === 0} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
