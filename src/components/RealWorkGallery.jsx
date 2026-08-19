import React, { useState, useEffect } from "react";
import { getStoredRealWorks } from "../data/products";
import LightboxModal from "./LightboxModal";
import { Camera, Eye, MessageCircle, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function RealWorkGallery() {
  const { t } = useLanguage();
  const [worksList, setWorksList] = useState(getStoredRealWorks());
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const refreshWorks = () => {
    setWorksList(getStoredRealWorks());
  };

  useEffect(() => {
    window.addEventListener("owner-project-added", refreshWorks);
    return () => window.removeEventListener("owner-project-added", refreshWorks);
  }, []);

  const filteredWorks = worksList.filter((item) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "sofa") return item.type === "sofa";
    if (activeFilter === "headboard") return item.type === "headboard";
    return true;
  });

  const activeProduct = selectedProductIndex !== null ? filteredWorks[selectedProductIndex] : null;

  const handlePrevProduct = () => {
    if (selectedProductIndex > 0) {
      setSelectedProductIndex(selectedProductIndex - 1);
    } else {
      setSelectedProductIndex(filteredWorks.length - 1);
    }
  };

  const handleNextProduct = () => {
    if (selectedProductIndex < filteredWorks.length - 1) {
      setSelectedProductIndex(selectedProductIndex + 1);
    } else {
      setSelectedProductIndex(0);
    }
  };

  return (
    <section id="real-works" className="section-padding" style={{ position: "relative", background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
      <div className="container">
        
        {/* Editorial Header */}
        <div className="section-header">
          <div className="badge-tag" style={{ background: "rgba(16, 185, 129, 0.08)", borderColor: "var(--emerald-primary)", color: "var(--emerald-dark)" }}>
            <Camera size={15} /> {t.gallery.badge} ({worksList.length} PROJECTS)
          </div>
          <h2 className="section-title">
            {t.gallery.title}
          </h2>
          <p className="section-description">
            {t.gallery.description}
          </p>
        </div>

        {/* Filter Pills with Touch Scroll */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "3.5rem" }}>
          <div className="touch-scroll-x" style={{ justifyContent: "center" }}>
            {[
              { label: `${t.gallery.allTab} (${worksList.length})`, val: "ALL" },
              { label: `${t.gallery.sofasTab} (${worksList.filter(w => w.type === 'sofa').length})`, val: "sofa" },
              { label: `${t.gallery.headboardsTab} (${worksList.filter(w => w.type === 'headboard').length})`, val: "headboard" }
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setActiveFilter(tab.val)}
                style={{
                  padding: "0.65rem 1.5rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  border: activeFilter === tab.val ? "1px solid var(--sapphire-dark)" : "1px solid var(--border-medium)",
                  background: activeFilter === tab.val ? "var(--sapphire-gradient)" : "#ffffff",
                  color: activeFilter === tab.val ? "#ffffff" : "var(--sapphire-dark)",
                  transition: "all 0.3s ease",
                  boxShadow: activeFilter === tab.val ? "0 6px 20px rgba(7, 11, 25, 0.25)" : "none"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {filteredWorks.map((work, idx) => (
            <div
              key={work.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--border-medium)",
                background: "#ffffff"
              }}
            >
              {/* Image Container with Gold Project Pin Badge */}
              <div style={{ position: "relative", height: "320px", overflow: "hidden", background: "#070b19" }}>
                <img
                  src={work.image}
                  alt={work.title}
                  onError={(e) => {
                    e.currentTarget.src = "/images/real_works/real_beige_magenta_sofa.jpg";
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                {/* Pin Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "rgba(7, 11, 25, 0.88)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--border-gold)",
                    color: "#f3c64a",
                    padding: "0.4rem 0.95rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                  }}
                >
                  PROJECT #{String(idx + 1).padStart(2, '0')}
                </div>

                {/* Location Tag */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(8px)",
                    color: "var(--sapphire-dark)",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "8px",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem"
                  }}
                >
                  <MapPin size={14} className="text-gold" /> {work.clientLocation || "Delivered Custom Order"}
                </div>
              </div>

              {/* Lookbook Content */}
              <div style={{ padding: "2.25rem", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--gold-primary)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    {work.subtitle}
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.85rem", fontFamily: "var(--font-serif)", lineHeight: 1.3 }}>
                    {work.title}
                  </h3>
                  <p style={{ fontSize: "0.94rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                    {work.description}
                  </p>

                  <div style={{ background: "rgba(7, 11, 25, 0.03)", border: "1px solid var(--border-subtle)", padding: "0.85rem 1rem", borderRadius: "var(--radius-sm)", marginBottom: "1.75rem" }}>
                    <div style={{ fontSize: "0.84rem", color: "var(--sapphire-dark)", fontWeight: 700 }}>
                      {t.gallery.materialSpec} <span className="text-gold-gradient">{work.recommendedTier}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button
                    onClick={() => setSelectedProductIndex(idx)}
                    className="btn btn-outline-sapphire"
                    style={{ flex: 1, padding: "0.8rem", fontSize: "0.88rem" }}
                  >
                    <Eye size={16} className="text-gold" /> {t.gallery.viewBtn}
                  </button>

                  <a
                    href={`https://wa.me/919553631317?text=${encodeURIComponent(
                      `Hello S. Shashavali,\n\nI saw Project #${String(idx + 1).padStart(2, '0')} (${work.title}) in your Lookbook.\n\nI want to get a quote for a similar custom design for my home.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: "0.8rem 1.25rem", fontSize: "0.88rem" }}
                  >
                    <MessageCircle size={17} /> {t.gallery.getSimilarBtn}
                  </a>
                </div>
              </div>
            </div>
          ))}
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
