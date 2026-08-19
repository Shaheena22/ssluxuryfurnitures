import React from "react";
import { X, MessageCircle, CheckCircle, Award, Phone, ChevronLeft, ChevronRight, Calculator } from "lucide-react";

export default function LightboxModal({ product, onClose, onPrev, onNext }) {
  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Hello S.S Luxury Furnishings (S. Shashavali),\n\nI am interested in inquiring about:\n- Product: ${product.title}\n- Category: ${product.category}\n- Subtitle: ${product.subtitle}\n\nPlease share more details and fabric catalog options.`
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "920px",
          maxHeight: "92vh",
          overflowY: "auto",
          background: "#ffffff",
          border: "1px solid var(--border-gold)",
          padding: 0,
          position: "relative",
          borderRadius: "var(--radius-lg)",
          boxShadow: "0 25px 60px rgba(11, 19, 43, 0.35)"
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "rgba(11, 19, 43, 0.85)",
            border: "1px solid var(--border-gold)",
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            color: "#d4af37",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--sapphire-dark)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(11, 19, 43, 0.85)")}
        >
          <X size={22} />
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {/* Image Side */}
          <div style={{ position: "relative", minHeight: "360px", background: "#1c2541", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={product.image}
              alt={product.title}
              onError={(e) => {
                e.currentTarget.src = "/images/real_works/real_beige_magenta_sofa.jpg";
              }}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            
            {/* Prev/Next Navigation Controls if supplied */}
            {onPrev && (
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(11, 19, 43, 0.75)",
                  border: "1px solid var(--border-gold)",
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ChevronLeft size={22} />
              </button>
            )}
            {onNext && (
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(11, 19, 43, 0.75)",
                  border: "1px solid var(--border-gold)",
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ChevronRight size={22} />
              </button>
            )}

            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                background: "rgba(11, 19, 43, 0.9)",
                backdropFilter: "blur(8px)",
                padding: "0.4rem 0.9rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-gold)",
                color: "#d4af37",
                fontSize: "0.78rem",
                fontWeight: 800
              }}
            >
              18mm Plywood Structure Guaranteed
            </div>
          </div>

          {/* Details Side */}
          <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800, marginBottom: "0.5rem" }}>
                {product.category} • {product.subtitle}
              </div>

              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-serif)", color: "var(--sapphire-dark)", marginBottom: "1rem", lineHeight: 1.25 }}>
                {product.title}
              </h2>

              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {product.description}
              </p>

              {product.features && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Award size={16} className="text-gold" /> Key Specs & Features:
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {product.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: "0.88rem", color: "var(--text-main)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CheckCircle size={15} className="text-gold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div
                style={{
                  background: "rgba(11, 19, 43, 0.04)",
                  border: "1px solid var(--border-gold)",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.88rem",
                  color: "var(--sapphire-dark)",
                  fontWeight: 700,
                  marginBottom: "1.75rem"
                }}
              >
                <strong>Recommended Material Tier:</strong> {product.recommendedTier}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={`https://wa.me/919553631317?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", padding: "0.95rem" }}
              >
                <MessageCircle size={18} />
                <span>Inquire About This Design on WhatsApp</span>
              </a>

              <a
                href="tel:+919553631317"
                className="btn btn-outline-sapphire"
                style={{ width: "100%", padding: "0.8rem" }}
              >
                <Phone size={16} className="text-gold" />
                <span>Call Owner S. Shashavali Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
