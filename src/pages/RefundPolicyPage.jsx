import React from 'react';

const sections = [
  {
    id: "eligibility",
    title: "1. Eligibility for Refunds",
    content: "Refunds are available for products that meet Zaro’s return guidelines. Items must be unworn, unwashed, unaltered, and returned in their original packaging with all tags attached. Personalized, final sale, or gift items are not eligible for refunds. To qualify, customers must submit a return request within the specified timeframe and provide proof of purchase, ensuring a smooth, timely, and hassle-free refund process.",
    bullets: [
      "Only items purchased directly from Zaro are eligible for refunds.",
      "Items must remain unused, with all original packaging intact.",
      "Personalized or final sale products are not eligible for refund.",
      "Proof of purchase or order confirmation is required for processing.",
      "Refund requests must be submitted within the designated return period.",
      "Both damaged or defective items are eligible for full refund."
    ]
  },
  {
    id: "process",
    title: "2. Refund Process",
    content: "Once we receive your returned items, our team carefully and thoroughly inspects each product to ensure it meets our return guidelines. Items must be unworn, unaltered, and in their original packaging with all tags attached. Once approved, the refund process is initiated promptly to ensure a smooth and timely resolution for every customer. Refunds are issued using the original payment method used during purchase. Depending on your bank or payment provider, it may take several business days for the funds to appear in your account. Customers are notified via email once the refund has been successfully processed, providing full transparency throughout the process."
  },
  {
    id: "timeline",
    title: "3. Timeline for Refunds",
    content: "At Zaro, we strive to process all refunds quickly and efficiently. Once returned items are received and inspected, refunds are typically initiated within 3–7 business days to ensure proper verification and quality checks. Depending on your payment provider, it may take estimated additional 1–5 business days for the funds to appear in your account. Customers receive an email notification once the refund is processed, keeping you informed every step of the way for a smooth and transparent experience.",
    bullets: [
      "Refunds are processed within 3–7 business days after inspection.",
      "Bank processing times may affect the date funds appear.",
      "Credit card refunds may take additional 1–5 business days."
    ]
  },
  {
    id: "exchanges",
    title: "4. Exchanges",
    content: "Zaro offers exchanges to ensure you receive the exactly perfect product in the right size, color, or style. Exchanges are available for items of equal value and must meet the same return conditions, including being unworn, unwashed, unaltered, and returned in original packaging with all tags attached effortlessly. To initiate an exchange, submit a request through your account dashboard or contact customer support. Once the original item is received and inspected, the replacement product will be shipped promptly. Availability may vary depending on stock, and customers are notified if an alternative solution is required. Standard exchanges are always processed without additional charges."
  },
  {
    id: "support",
    title: "5. Contact support for refunds",
    content: "Our dedicated customer support team is available to assist with all refund-related questions and concerns, ensuring a smooth and stress-free process. You can reach us via email, phone, or live chat during business hours. When contacting support, please provide your order number and details to help us respond quickly and accurately. Our team will guide you through each step of the return or exchange process.",
    bullets: [
      "Email support: support@zaro.com for any refund inquiries.",
      "Call our support line: +1 (800) 123-4567 for immediate assistance.",
      "Live chat available during business hours for immediate guidance.",
      "Provide order number and details for faster resolution.",
      "Support staff will guide you through return and refund process.",
      "Ensure all communication remains polite and detailed for quick processing."
    ]
  },
  {
    id: "exceptions",
    title: "6. Refund exceptions and special cases",
    content: "Certain products and situations fall outside our standard refund policy to maintain fairness and clarity for all customers. Final sale items, personalized or customized products, and gift cards cannot be returned or refunded. Items damaged due to customer misuse or improper care are also not covered.",
    bullets: [
      "Final sale items, personalized products cannot be returned or refunded.",
      "Gift cards and vouchers are not eligible for cash refund.",
      "Items damaged due to customer misuse are excluded from refunds."
    ]
  }
];

export default function RefundPolicyPage() {
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
            Refund Policy
          </h1>
          <span className="text-[13px] text-[#666] block mt-6 font-light">
            Effective Date: March 19, 2026
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
              At Zaro, we are committed to providing a seamless shopping experience. Our Refund Policy ensures that you can shop confidently, knowing that your satisfaction is our priority. This policy explains eligibility, procedures, and timelines for requesting refunds on eligible purchases.
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
