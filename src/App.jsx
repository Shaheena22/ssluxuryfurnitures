import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import RealWorkGallery from "./components/RealWorkGallery";
import ProductCatalog from "./components/ProductCatalog";
import ProductsPage from "./components/ProductsPage";
import OwnerPortalPage from "./components/OwnerPortalPage";
import CustomizationProcess from "./components/CustomizationProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialsSection from "./components/TestimonialsSection";
import TermsAndQuality from "./components/TermsAndQuality";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" | "products" | "owner"
  const [sidebarOpen, setSidebarOpen] = useState(true); // Open on left by default when page is opened

  // Handle URL hash changes (e.g. /#owner or /#products)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#owner") {
        setCurrentPage("owner");
      } else if (hash === "#products-page") {
        setCurrentPage("products");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleNavigate = (page, targetId) => {
    setCurrentPage(page);
    setSidebarOpen(false);
    if (page === "home") {
      setTimeout(() => {
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    handleNavigate("home", "contact");
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Top Clean Navbar */}
      <Navbar
        onOpenSidebar={() => setSidebarOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Offcanvas Sidebar Menu */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigate}
        onOpenOwnerPortal={() => {
          setCurrentPage("owner");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Main Content Area */}
      <main>
        {currentPage === "products" ? (
          /* Separate Full Page for Our Products */
          <ProductsPage onBackToHome={() => handleNavigate("home", "hero")} />
        ) : currentPage === "owner" ? (
          /* Separate Hidden Page for Owner Upload Portal */
          <OwnerPortalPage onBackToHome={() => handleNavigate("home", "hero")} />
        ) : (
          /* Home Page Main Sections in Customer's Desired Ordering */
          <>
            {/* 1. Hero Section */}
            <Hero
              onOpenQuote={scrollToContact}
              onExploreProducts={() => handleNavigate("products", "products-top")}
            />

            {/* 2. Featured Products Preview (Category I & II) */}
            <ProductCatalog
              onViewAllProducts={() => handleNavigate("products", "products-top")}
            />

            {/* 3. Real Work Lookbook (Delivered Projects) */}
            <RealWorkGallery />

            {/* 4. 4-Layer Structural Anatomy (Vertical with Beside Image) */}
            <AboutUs />

            {/* 5. Customization Workflow Process */}
            <CustomizationProcess />

            {/* 6. Why Choose Us (Workshop Direct Pricing, No Middleman) */}
            <WhyChooseUs />

            {/* 7. Customer Testimonials & Verified Reviews */}
            <TestimonialsSection />

            {/* 8. Quality Guarantee & Terms */}
            <TermsAndQuality />

            {/* 9. Direct Workshop Contact Form & Founder Details */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOwnerPortal={() => {
          setCurrentPage("owner");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
