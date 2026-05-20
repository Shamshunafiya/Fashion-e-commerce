import { useState, useEffect } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-[70px] bg-[#fdfaf7] min-h-screen font-sans text-[#1a1a1a]">
      {/* Header Section */}
      <div className="text-center pt-20 pb-12 px-6">
        <p className="text-[12px] md:text-[14px] tracking-[4px] text-[#8b5e3c] uppercase mb-4 font-bold">Contact Us</p>
        <h1 className="m-0 font-serif text-[42px] md:text-[64px] font-bold text-[#1a1a1a] leading-[1.1] max-w-3xl mx-auto">
          WE'RE HERE TO<br />ASSIST YOU
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-24 px-6 md:px-12 pb-24">
        {/* Left Column - Info */}
        <div className="pt-2">
          <h2 className="font-serif text-[32px] md:text-[38px] font-bold text-[#1a1a1a] mb-10 leading-tight">
            We'd love to<br />hear from you
          </h2>

          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] text-[#4a3525] mb-3">Address</h3>
              <hr className="border-t border-[#e6dfd3] mb-4" />
              <p className="text-[15px] text-[#555] leading-relaxed font-sans">
                Zora Fashion Studio<br />
                245 Heritage Avenue, NY 10016, USA
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] text-[#4a3525] mb-3">Socials</h3>
              <hr className="border-t border-[#e6dfd3] mb-4" />
              <div className="flex flex-col space-y-3 text-[15px] font-sans text-[#555]">
                <a href="#" className="hover:text-[#4a3525] hover:font-semibold transition-all">Instagram</a>
                <a href="#" className="hover:text-[#4a3525] hover:font-semibold transition-all">Twitter</a>
                <a href="#" className="hover:text-[#4a3525] hover:font-semibold transition-all">Facebook</a>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-[2px] text-[#4a3525] mb-3">Business Hours</h3>
              <hr className="border-t border-[#e6dfd3] mb-4" />
              <div className="text-[15px] text-[#555] space-y-2 font-sans">
                <p>Monday – Friday: 9:00 am – 6:00 pm</p>
                <p>Saturday: 10:00 am – 4:00 pm</p>
                <p className="text-[#8b5e3c] font-semibold">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-[#f5f0ea] p-8 md:p-12 rounded-xl shadow-[0_4px_24px_rgba(74,53,37,0.05)] border border-[#e6dfd3]">
          {sent ? (
            <div className="text-center py-24 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white text-5xl mb-6 shadow-sm border border-[#e6dfd3]">
                 <span className="text-[#4a3525]">✓</span>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-3 text-[#1a1a1a]">Message Sent!</h3>
              <p className="text-[15px] text-[#555] font-sans">Thank you for reaching out. Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="font-serif text-[28px] md:text-[32px] font-bold text-[#1a1a1a] mb-8">Get in touch.</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[1.5px] text-[#4a3525] mb-2">
                    Full Name <span className="text-[#8b5e3c]">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 bg-white text-[15px] outline-none placeholder-[#a0a0a0] border border-[#e6dfd3] rounded-md focus:border-[#4a3525] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[1.5px] text-[#4a3525] mb-2">
                    Email Address <span className="text-[#8b5e3c]">*</span>
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 bg-white text-[15px] outline-none placeholder-[#a0a0a0] border border-[#e6dfd3] rounded-md focus:border-[#4a3525] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[1.5px] text-[#4a3525] mb-2">
                    Subject <span className="text-[#8b5e3c]">*</span>
                  </label>
                  <select 
                    required
                    className="w-full px-5 py-4 bg-white text-[15px] text-[#1a1a1a] outline-none appearance-none cursor-pointer border border-[#e6dfd3] rounded-md focus:border-[#4a3525] transition-colors shadow-sm"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a3525'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1.2rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1em' }}
                  >
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Returns & Exchanges</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[1.5px] text-[#4a3525] mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 bg-white text-[15px] outline-none placeholder-[#a0a0a0] resize-y border border-[#e6dfd3] rounded-md focus:border-[#4a3525] transition-colors shadow-sm"
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#4a3525] hover:bg-[#3d2817] text-[#f5f0ea] text-[14px] font-bold tracking-[3px] uppercase rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full mt-10">
        <div className="bg-[#fdfaf7] pb-10 text-center">
          <h2 className="font-serif text-[24px] md:text-[32px] font-bold text-[#1a1a1a]">Where style meets presence</h2>
        </div>
        <div className="w-full h-[400px] md:h-[500px] bg-[#e6dfd3]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.5076401!3d37.7578149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb8a5a41%3A0xc48c1a60391d120a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1715617000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}