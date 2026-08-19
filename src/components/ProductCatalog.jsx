import React, { useState } from "react";
import { PRODUCTS } from "../data/products";
import LightboxModal from "./LightboxModal";
import { Sparkles, Eye, MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProductCatalog({ onViewAllProducts }) {
  const { t } = useLanguage();
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  // Show top featured 6 products on Home Page
  const featuredProducts = PRODUCTS.slice(0, 6);

  const activeProduct = selectedProductIndex !== null ? featuredProducts[selectedProductIndex] : null;

  const handlePrevProduct = () => {
    if (selectedProductIndex > 0) {
      setSelectedProductIndex(selectedProductIndex - 1);
    } else {
      setSelectedProductIndex(featuredProducts.length - 1);
    }
  };

  const handleNextProduct = () => {
    if (selectedProductIndex < featuredProducts.length - 1) {
      setSelectedProductIndex(selectedProductIndex + 1);
    } else {
      setSelectedProductIndex(0);
    }
  };

  return (
    <section id="products" className="section-padding" style={{ position: "relative", background: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} className="text-gold" />
            <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>{t.products.badge}</span>
          </div>
          <h2 className="section-title">
            {t.products.title}
          </h2>
          <p className="section-description">
            {t.products.description}
          </p>
        </div>

        {/* Responsive Product Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3.5rem"
          }}
        >
          {featuredProducts.map((p, idx) => (
            <div
              key={p.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                height: "100%",
                background: "#ffffff",
                border: "1px solid var(--border-medium)"
              }}
            >
              {/* Product Image */}
              <div style={{ position: "relative", height: "260px", overflow: "hidden", background: "#1c2541" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => {
                    e.currentTarget.src = "/images/real_works/real_beige_magenta_sofa.jpg";
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                
                {p.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "var(--sapphire-gradient)",
                      color: "#d4af37",
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      padding: "0.38rem 0.85rem",
                      borderRadius: "var(--radius-full)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                      border: "1px solid var(--border-gold)"
                    }}
                  >
                    ★ Top Choice
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(6px)",
                    color: "var(--sapphire-dark)",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    padding: "0.35rem 0.75rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  {p.category}
                </div>
              </div>

              {/* Product Content */}
              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--gold-primary)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    {p.subtitle}
                  </div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.85rem", fontFamily: "var(--font-serif)", lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                    {p.description}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "0.84rem", color: "var(--sapphire-dark)", fontWeight: 700, marginBottom: "1.25rem", padding: "0.6rem 0.85rem", background: "rgba(11, 19, 43, 0.03)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                    <strong>Tier Spec:</strong> {p.recommendedTier}
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <button
                      onClick={() => setSelectedProductIndex(idx)}
                      className="btn btn-outline-sapphire"
                      style={{ flex: 1, padding: "0.75rem", fontSize: "0.88rem" }}
                    >
                      <Eye size={16} className="text-gold" /> {t.products.quickView}
                    </button>
                    <a
                      href={`https://wa.me/919553631317?text=Hi%20S.S%20Luxury%20Furnishings,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(p.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: "0.75rem 1.1rem", fontSize: "0.88rem" }}
                      title="WhatsApp Inquire"
                    >
                      <MessageCircle size={17} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Products CTA Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onViewAllProducts}
            className="btn btn-sapphire"
            style={{ padding: "1.1rem 2.5rem", fontSize: "1.05rem" }}
          >
            <span>{t.products.viewAllBtn}</span>
            <ArrowRight size={18} className="text-gold" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeProduct && (
        <LightboxModal
          product={activeProduct}
          onClose={() => setSelectedProductIndex(null)}
          onPrev={handlePrevProduct}
          onNext={handleNextProduct}
        />
      )}
    </section>
  );
}
