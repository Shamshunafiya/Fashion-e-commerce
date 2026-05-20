import React from 'react';

const sections = [
  {
    id: "info-collect",
    title: "1. Information we collect",
    content: "We collect personal and technical information to provide a seamless shopping experience, process orders efficiently, improve website functionality, and ensure secure transactions. This may include details you provide directly, such as your name, email address, billing and shipping information, as well as technical data like device type, browsing behavior, and cookies that help us enhance personalization and performance.",
    bullets: [
      "Collect personal details during account creation and checkout processes.",
      "Gather billing and shipping addresses for accurate order fulfillment.",
      "Store email addresses for communication and order confirmations.",
      "Record purchase history to improve recommendations and personalization.",
      "Collect device data for analytics and website optimization purposes.",
      "Use cookies to enhance browsing and remember preferences."
    ]
  },
  {
    id: "how-use",
    title: "2. How we use your information",
    content: "Your information is used responsibly to process transactions, improve functionality, communicate updates, and maintain a secure shopping environment tailored to your needs. We use your information to efficiently process and fulfill orders, provide customer support, improve website performance, personalize your shopping experience, and communicate important updates regarding purchases or services.",
    bullets: [
      "Provide customer support regarding purchases and inquiries.",
      "Send shipping updates and delivery confirmations promptly.",
      "Improve website performance using behavioral analytics insights.",
      "Personalize product suggestions based on browsing history.",
      "Prevent fraudulent transactions through security monitoring systems."
    ]
  },
  {
    id: "cookies",
    title: "3. Cookies and tracking technologies",
    content: "We use cookies and similar tracking technologies to enhance your browsing experience, improve website functionality, and better understand how visitors interact with our platform. Cookies allow us to remember your preferences, keep items in your shopping cart, maintain secure login sessions, and provide a smoother, more personalized experience seamlessly throughout your visit. In addition, tracking technologies help us analyze traffic patterns, measure marketing performance, and refine product recommendations based on browsing behavior. This data enables us to continuously optimize site performance, improve navigation, and deliver content that is more relevant to your interests. You can manage or disable cookies through your browser settings at any time, though certain features of the website may be limited as a result."
  },
  {
    id: "sharing",
    title: "4. Sharing and disclosure of information",
    content: "We share your information only when necessary to operate our business effectively and provide our services securely. This may include trusted third-party partners only such as payment processors, shipping providers, technology service providers, and legal authorities when required by law. All partners are obligated to protect your data, maintain confidentiality, and use your information solely for authorized purposes. We never sell or trade your personal information to third parties.",
    bullets: [
      "Share payment details securely with certified payment processors.",
      "Promptly provide shipping information only to verified logistics partners.",
      "Work with IT providers for maintenance.",
      "Submit to the requirements of law enforcement when legally required.",
      "Never sell personal data to third parties.",
      "Ensure third-party vendors maintain strict confidentiality agreements."
    ]
  },
  {
    id: "payment-security",
    title: "5. Payment security and protection",
    content: "We prioritize the security of your financial information by using advanced encryption technologies and secure payment gateways to protect every transaction. All payments are processed through trusted, certified providers that comply with industry security standards, ensuring your sensitive data remains confidential. We do not store complete credit or debit card details on our servers, and we continuously monitor systems to prevent unauthorized access, fraud, or misuse.",
    bullets: [
      "Never ever store complete payment card information internally.",
      "Implement real-time fraud detection and risk monitoring systems.",
      "Partner with secure, trusted payment gateways globally today.",
      "Regularly update security protocols to prevent future breaches.",
      "Protect financial data through advanced authentication measures."
    ]
  },
  {
    id: "retention",
    title: "6. Data retention and storage",
    content: "We retain your personal information only as long as necessary to fulfill orders, provide customer support, comply with legal obligations, maintain a secure, personalized shopping experience. Data required for business, tax, or regulatory purposes is stored safely accessed only by authorized personnel to ensure confidentiality security. When information is no longer needed, we securely delete or anonymize it to prevent unauthorized access or misuse. All data is stored using industry-standard encryption security measures, ensuring that your personal details remain protected throughout their retention period."
  },
  {
    id: "rights",
    title: "7. Your privacy rights",
    content: "You have the right to access, correct, and manage the personal information we hold about you. This includes requesting copies of your data, updating inaccurate details, or withdrawing consent for marketing communications at any time. Exercising these rights ensures that your personal information remains accurate, up-to-date, and aligned with your preferences. Depending on your location, you may also request the deletion of your data, limit its processing, or request portability of certain information. To exercise any of these rights, please contact our customer support team, who will assist you promptly while ensuring your privacy and compliance with applicable data protection laws."
  }
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              At Zaro, protecting your privacy is fundamental to our commitment to trust, transparency, and security. This policy explains how we collect, use, store, and safeguard your personal information when you interact with our website and services.
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
