import React, { useState } from "react";
import { PRODUCTS } from "../data/products";
import LightboxModal from "./LightboxModal";
import { Sparkles, Eye, MessageCircle, Search, RefreshCw, ArrowLeft, Layers, ShieldCheck, PhoneCall } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProductsPage({ onBackToHome }) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const filterOptions = [
    { label: t.products.allCategory, value: "ALL" },
    { label: t.products.cat1, value: "CAT_1" },
    { label: t.products.cat2, value: "CAT_2" },
    { label: t.products.sofas, value: "sofa" },
    { label: t.products.headboards, value: "headboard" },
    { label: t.products.teapoys, value: "teapoy" },
    { label: t.products.cushions, value: "cushions" },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    let matchesCategory = true;
    if (activeFilter === "CAT_1") matchesCategory = p.category === "Category I";
    else if (activeFilter === "CAT_2") matchesCategory = p.category === "Category II";
    else if (activeFilter === "cushions") matchesCategory = ["pillows", "dining", "window", "chair", "cushions"].includes(p.type);
    else if (activeFilter !== "ALL") matchesCategory = p.type === activeFilter;

    let matchesSearch = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
    }

    return matchesCategory && matchesSearch;
  });

  const activeProduct = selectedProductIndex !== null ? filteredProducts[selectedProductIndex] : null;

  const handlePrevProduct = () => {
    if (selectedProductIndex > 0) {
      setSelectedProductIndex(selectedProductIndex - 1);
    } else {
      setSelectedProductIndex(filteredProducts.length - 1);
    }
  };

  const handleNextProduct = () => {
    if (selectedProductIndex < filteredProducts.length - 1) {
      setSelectedProductIndex(selectedProductIndex + 1);
    } else {
      setSelectedProductIndex(0);
    }
  };

  return (
    <div id="products-top" style={{ paddingTop: "6.5rem", paddingBottom: "5rem", minHeight: "100vh", background: "#f8fafc" }}>
      <div className="container">
        
        {/* Navigation Breadcrumb & Back button */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
          <button
            onClick={onBackToHome}
            className="btn btn-outline-sapphire"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.88rem" }}
          >
            <ArrowLeft size={16} />
            <span>{t.ownerPortal.backToSite}</span>
          </button>

          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
            {t.nav.home} &gt; <strong style={{ color: "var(--sapphire-dark)" }}>{t.nav.products}</strong>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="section-header" style={{ marginBottom: "3rem" }}>
          <div className="badge-tag" style={{ background: "rgba(212, 175, 55, 0.1)", borderColor: "var(--gold-accent)", color: "var(--sapphire-dark)" }}>
            <Sparkles size={15} className="text-gold" /> {t.products.badge}
          </div>
          <h1 className="section-title">
            {t.products.title}
          </h1>
          <p className="section-description">
            {t.products.description}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div
          style={{
            width: "100%",
            maxWidth: "980px",
            margin: "0 auto 3.5rem auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            alignItems: "center"
          }}
        >
          {/* Search Box */}
          <div style={{ position: "relative", width: "100%", maxWidth: "680px" }}>
            <Search size={18} style={{ position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)", color: "var(--gold-primary)" }} />
            <input
              type="text"
              placeholder={t.products.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.95rem 1.25rem 0.95rem 3rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-medium)",
                background: "#ffffff",
                color: "var(--sapphire-dark)",
                fontSize: "0.95rem",
                fontWeight: 600,
                outline: "none",
                boxShadow: "0 4px 20px rgba(11, 19, 43, 0.04)",
                transition: "all 0.3s ease"
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{ position: "absolute", right: "1.25rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontWeight: 700 }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="touch-scroll-x" style={{ width: "100%", justifyContent: "center" }}>
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setActiveFilter(opt.value)}
                  style={{
                    padding: "0.65rem 1.4rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    border: isActive ? "1px solid var(--sapphire-dark)" : "1px solid var(--border-subtle)",
                    background: isActive ? "var(--sapphire-gradient)" : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--sapphire-dark)",
                    transition: "var(--transition-smooth)",
                    boxShadow: isActive ? "0 4px 15px rgba(11, 19, 43, 0.2)" : "none"
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
            Showing <strong>{filteredProducts.length}</strong> custom furniture models
          </div>
        </div>

        {/* No Results State */}
        {filteredProducts.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "#ffffff",
              borderRadius: "var(--radius-md)",
              border: "1px dashed var(--border-medium)"
            }}
          >
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.5rem" }}>
              No furniture models match "{searchQuery}"
            </div>
            <button
              onClick={() => { setSearchQuery(""); setActiveFilter("ALL"); }}
              className="btn btn-sapphire"
              style={{ padding: "0.65rem 1.5rem", fontSize: "0.88rem", marginTop: "1rem" }}
            >
              <RefreshCw size={16} className="text-gold" /> Reset Search
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {filteredProducts.map((p, idx) => (
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
              <div style={{ position: "relative", height: "270px", overflow: "hidden", background: "#1c2541" }}>
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
                    ★ Popular Model
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
                      href={`https://wa.me/919553631317?text=${encodeURIComponent(
                        `Hi S. Shashavali,\n\nI am interested in getting a quote for this model from your catalogue:\n*${p.title}*\n\nPlease share available fabric swatches and price estimates.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: "0.75rem 1.1rem", fontSize: "0.88rem" }}
                      title={t.products.inquireWA}
                    >
                      <MessageCircle size={17} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Order Call to Action Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: "4.5rem",
            padding: "3rem",
            background: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
            color: "#ffffff",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--gold-accent)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem"
          }}
        >
          <div>
            <div style={{ color: "var(--gold-accent)", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
              HAVE A CUSTOM PHOTO OR PINTEREST DESIGN?
            </div>
            <h2 style={{ fontSize: "1.85rem", fontWeight: 800, fontFamily: "var(--font-serif)", color: "#ffffff", marginBottom: "0.75rem" }}>
              We Build Any Custom Sofa, Cot Headboard or Cushion Setup
            </h2>
            <p style={{ color: "#cbd5e1", maxWidth: "600px", fontSize: "0.98rem", lineHeight: 1.6 }}>
              Send your reference photo and living room dimensions directly to master craftsman S. Shashavali on WhatsApp for instant pricing.
            </p>
          </div>

          <a
            href="https://wa.me/919553631317?text=Hello%20S.S%20Luxury%20Furnishings,%20I%20have%20a%20custom%20design%20reference%20photo%20to%20get%20made."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: "1rem 2rem", fontSize: "1rem" }}
          >
            <MessageCircle size={20} />
            <span>Send Custom Photo on WhatsApp</span>
          </a>
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
    </div>
  );
}
