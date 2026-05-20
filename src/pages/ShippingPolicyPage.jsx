import React from 'react';

const sections = [
  {
    id: "methods",
    title: "1. Shipping methods available",
    content: "At Zaro, we provide multiple shipping options to ensure every order is delivered quickly, safely, and conveniently. Customers can select a method that best fits their needs, whether it’s standard shipping for a reliable delivery timeline or express shipping for faster service. International shipping is also available to selected destinations, allowing customers worldwide to enjoy our curated fashion collections. Each method is designed to offer transparency, flexibility, and peace of mind. During checkout, fees, estimated delivery times, and tracking options are clearly displayed, allowing you to make informed choices. Special promotions may occasionally offer free or discounted shipping, further enhancing the convenience and value of your Zaro experience."
  },
  {
    id: "delivery-times",
    title: "2. Estimated delivery times",
    content: "Standard domestic orders typically arrive within 5–7 business days, while express shipping usually delivers within 1–3 business days. International shipments may take longer depending on customs processing and local courier services. Orders are processed within 1–2 business days after confirmation, and customers receive tracking information to monitor progress in real time.",
    bullets: [
      "Standard domestic orders typically arrive within 5–7 business days.",
      "Express shipping usually delivers within 1–3 business days.",
      "International shipping times depend on destination and customs processing.",
      "Orders are processed within 1–2 business days after confirmation.",
      "Delivery times may vary during holidays or high-demand periods.",
      "Customers receive tracking information to monitor shipments in real time."
    ]
  },
  {
    id: "tracking",
    title: "3. Order Tracking",
    content: "Zaro provides order tracking to keep you informed about your shipment from our warehouse to your doorstep. Once your order is shipped, a tracking link is sent to your registered email, allowing you to monitor its real-time status and progress. Tracking updates include shipment confirmation, in-transit notifications, and estimated delivery dates, ensuring full visibility of your package. For international orders, tracking depends on local courier systems and customs processing. If your package is delayed or lost, our customer support team is available to assist and provide timely updates until your order is delivered safely."
  },
  {
    id: "fees",
    title: "4. Shipping fees and charges",
    content: "To guarantee fairness, Zaro calculates shipping fees based on three factors: your order total, your location, and your selected delivery speed. We believe in total transparency, which is why the final shipping cost is always itemized and visible at checkout—so there are never any surprises. Standard shipping is offered at a flat rate for domestic orders, while express shipping fees vary depending on speed and location. International shipping costs are automatically calculated during checkout. Free shipping may be available for orders exceeding a minimum total, and additional fees may apply for oversized or heavy packages. All charges are clearly communicated before finalizing your order.",
    bullets: [
      "Standard shipping has a flat rate for all domestic orders.",
      "Express shipping fees vary based on delivery speed selected.",
      "International shipping costs are calculated during checkout automatically.",
      "Free shipping may apply to orders exceeding a minimum total.",
      "Additional fees may apply for oversized or heavy packages.",
      "All shipping charges are clearly displayed before completing checkout."
    ]
  },
  {
    id: "support",
    title: "5. Contact support for shipping inquiries",
    content: "Our dedicated customer support team is available to assist with all shipping-related questions and concerns, ensuring your order reaches you on time and in perfect condition. You can reach us via email, phone, or live chat during business hours for prompt assistance.",
    bullets: [
      "Email: support@zaro.com directly for all shipping concerns.",
      "Call: +1 (800) 123-4567 for urgent inquiries.",
      "Live chat support available during business hours for instant assistance.",
      "Provide order number for faster resolution.",
      "Assistance includes tracking, delays, or shipping options guidance.",
      "Support team ensures every shipment reaches you safely and promptly."
    ]
  }
];

export default function ShippingPolicyPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
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
            LEGAL INFORMATION
          </span>
          <h1 className="font-['Montserrat',sans-serif] text-[36px] sm:text-[48px] md:text-[60px] font-black text-[#1a1a1a] tracking-tight leading-[1.1] uppercase max-w-[850px] mx-auto">
            Shipping Policy
          </h1>
          <span className="text-[13px] text-[#666] block mt-6 font-light">
            Effective Date: March 1, 2026
          </span>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Sidebar / Navigation (Desktop Only) */}
          <div className="hidden lg:flex flex-col gap-6 w-[250px] shrink-0 sticky top-36">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="text-left w-fit transition-all duration-300 py-1 border-b border-transparent hover:border-[#1a1a1a] group"
              >
                <span className="text-[12px] tracking-[1.5px] font-bold uppercase text-[#888] group-hover:text-[#1a1a1a] transition-colors duration-300">
                  {sec.title.substring(3)}
                </span>
              </button>
            ))}
          </div>

          {/* Main Legal Content Panel */}
          <div className="flex-1 w-full flex flex-col gap-16 md:gap-20">
            <div className="text-[17px] md:text-[19px] text-[#555] leading-[1.8] font-medium mb-4">
              At Zaro, we aim to deliver your orders quickly, safely, and reliably. This Shipping Policy outlines shipping methods, delivery timelines, fees, and tracking options to ensure a seamless experience with your fashion purchases.
            </div>

            {sections.map((sec) => (
              <div key={sec.id} id={sec.id} className="scroll-mt-36">
                <h2 className="font-['Montserrat',sans-serif] text-[22px] md:text-[28px] font-bold text-[#1a1a1a] mb-6 pb-3 border-b border-[#ede8e0]">
                  {sec.title}
                </h2>
                
                <p className="text-[15px] md:text-[17px] text-[#555] leading-[1.9] font-light mb-6">
                  {sec.content}
                </p>

                {sec.bullets && (
                  <ul className="flex flex-col gap-3 pl-5 list-disc text-[15px] md:text-[17px] text-[#555] font-light">
                    {sec.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-[1.7]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
