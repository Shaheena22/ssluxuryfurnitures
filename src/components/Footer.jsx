import React from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer({ onNavigate, onOpenOwnerPortal }) {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
        borderTop: "1px solid var(--border-gold)",
        padding: "4.5rem 0 2.5rem 0",
        color: "#cbd5e1",
        fontSize: "0.92rem"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem"
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.4rem" }}>
              S.S LUXURY <span style={{ color: "#d4af37" }}>FURNISHINGS</span>
            </div>
            <div style={{ color: "#d4af37", fontStyle: "italic", fontSize: "0.9rem", marginBottom: "1rem", fontWeight: 600 }}>
              "Where Quality is Guaranteed"
            </div>
            <p style={{ lineHeight: "1.65", marginBottom: "1.5rem", color: "#94a3b8" }}>
              {t.about.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#d4af37", fontWeight: 700, fontSize: "0.88rem" }}>
              <ShieldCheck size={18} /> Direct Manufacturer Unit • 18mm Plywood Only
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.2rem", fontFamily: "var(--font-serif)" }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <li>
                <button
                  onClick={() => onNavigate("products", "products-top")}
                  style={{ background: "none", border: "none", color: "#d4af37", fontWeight: 700, cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.products} (Full Catalog)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "real-works")}
                  style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.realWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "about")}
                  style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.anatomy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "testimonials")}
                  style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "why-us")}
                  style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.whyUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "terms")}
                  style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.terms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "brand-story")}
                  style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home", "contact")}
                  style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", padding: 0, fontSize: "0.92rem" }}
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.2rem", fontFamily: "var(--font-serif)" }}>
              {t.contact.title}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div>
                <strong style={{ color: "#ffffff" }}>{t.contact.ownerLabel}:</strong> <br />
                <span style={{ color: "#d4af37", fontWeight: 700 }}>S. Shashavali</span>
              </div>
              <div>
                <strong style={{ color: "#ffffff" }}>{t.contact.primaryPhone}:</strong> <br />
                <a href="tel:+919553631317" style={{ color: "#d4af37", textDecoration: "none", fontWeight: 700 }}>+91 9553631317</a>
              </div>
              <div>
                <strong style={{ color: "#ffffff" }}>{t.contact.secondaryPhone}:</strong> <br />
                <a href="tel:+917013890174" style={{ color: "#d4af37", textDecoration: "none", fontWeight: 700 }}>+91 7013890174</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line with subtle owner link */}
        <div
          style={{
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
            paddingTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.85rem"
          }}
        >
          <div>
            © {new Date().getFullYear()} S.S Luxury Furnishings. All rights reserved. Manufactured with 18mm Plywood Structure.
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ color: "#d4af37", fontWeight: 600 }}>
              Tagline: "As Customer's Choice — As Our Product"
            </div>

            <button
              onClick={onOpenOwnerPortal}
              style={{
                background: "none",
                border: "none",
                color: "#64748b",
                fontSize: "0.75rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem"
              }}
              title="Workshop Owner Login"
            >
              <Lock size={12} /> {t.nav.ownerPortal}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
