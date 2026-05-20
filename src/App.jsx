import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";
import Navbar from "./components/Navbar.jsx";
import CartSidebar from "./components/Cartsidebar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/Home.jsx";
import CollectionsPage from "./pages/CollectionPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import RefundPolicyPage from "./pages/RefundPolicyPage.jsx";
import ShippingPolicyPage from "./pages/ShippingPolicyPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import OfferPage from "./pages/OfferPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Google Fonts injected once
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap";
fontLink.rel = "stylesheet";
if (!document.head.querySelector("[href*='Cormorant']")) document.head.appendChild(fontLink);

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("modern");
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path, state) => {
    navigate(path, state);
  };

  const isCheckout = location.pathname === "/checkout";
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <CartProvider>
      <ScrollToTop />
      <div className="font-['Montserrat',sans-serif] min-h-screen bg-[#fdfaf7]">
        {!isAuthPage && <Navbar setCartOpen={setCartOpen} />}
        <CartSidebar open={cartOpen} setCartOpen={setCartOpen} navigateTo={navigateTo} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage setCartOpen={setCartOpen} navigateTo={navigateTo} selectedCollection={selectedCollection} />} />
            <Route path="/shop" element={<ShopPage setCartOpen={setCartOpen} navigateTo={navigateTo} setSelectedCollection={setSelectedCollection} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage navigateTo={navigateTo} />} />
            <Route path="/offer" element={<OfferPage setCartOpen={setCartOpen} navigateTo={navigateTo} setSelectedCollection={setSelectedCollection} />} />
            <Route path="/product/:id" element={<ProductDetailsPage setCartOpen={setCartOpen} navigateTo={navigateTo} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {!isCheckout && !isAuthPage && <Footer />}
      </div>
    </CartProvider>
  );
}