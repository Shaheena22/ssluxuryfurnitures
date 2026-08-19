import React from "react";
import { Sparkles, ShieldCheck, AlertCircle, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TermsAndQuality() {
  const { t } = useLanguage();

  return (
    <section id="terms" className="section-padding" style={{ position: "relative", background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} className="text-gold" />
            <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>{t.terms.badge}</span>
          </div>
          <h2 className="section-title">
            {t.terms.title}
          </h2>
          <p className="section-description">
            {t.terms.description}
          </p>
        </div>

        {/* Highlighted Banner */}
        <div
          className="glass-card"
          style={{
            padding: "2.5rem",
            background: "#ffffff",
            border: "1px solid var(--border-gold)",
            boxShadow: "var(--shadow-hover)",
            marginBottom: "3rem"
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div
              style={{
                background: "var(--sapphire-gradient)",
                color: "#d4af37",
                padding: "1.2rem",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--border-gold)",
                boxShadow: "0 6px 20px rgba(11, 19, 43, 0.25)"
              }}
            >
              <Award size={36} />
            </div>

            <div style={{ flex: 1, minWidth: "280px" }}>
              <div style={{ textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.1em", color: "var(--gold-primary)", fontWeight: 800, marginBottom: "0.5rem" }}>
                CORE QUALITY GUARANTEE & TERMS
              </div>

              <blockquote
                style={{
                  fontSize: "1.45rem",
                  fontFamily: "var(--font-serif)",
                  color: "var(--sapphire-dark)",
                  fontWeight: 800,
                  lineHeight: 1.4,
                  marginBottom: "1rem"
                }}
              >
                {t.terms.quote}
              </blockquote>

              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                {t.terms.quoteDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillar Promises */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          
          <div className="glass-card" style={{ padding: "1.75rem", background: "#ffffff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <ShieldCheck className="text-gold" size={22} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>
                {t.terms.rule1Title}
              </h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {t.terms.rule1Desc}
            </p>
          </div>

          <div className="glass-card" style={{ padding: "1.75rem", background: "#ffffff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <CheckCircle2 className="text-gold" size={22} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>
                {t.terms.rule2Title}
              </h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {t.terms.rule2Desc}
            </p>
          </div>

          <div className="glass-card" style={{ padding: "1.75rem", background: "#ffffff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <AlertCircle className="text-gold" size={22} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>
                {t.terms.rule3Title}
              </h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {t.terms.rule3Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
