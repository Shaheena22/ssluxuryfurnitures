import React from "react";
import { Sparkles, Palette, Video, Maximize, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CustomizationProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: <Palette size={28} className="text-gold" />,
      title: t.process.step1Title,
      description: t.process.step1Desc
    },
    {
      number: "02",
      icon: <Maximize size={28} className="text-gold" />,
      title: t.process.step2Title,
      description: t.process.step2Desc
    },
    {
      number: "03",
      icon: <Video size={28} className="text-gold" />,
      title: t.process.step3Title,
      description: t.process.step3Desc
    }
  ];

  return (
    <section id="process" className="section-padding" style={{ position: "relative", background: "#f8fafc" }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} className="text-gold" />
            <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>{t.process.badge}</span>
          </div>
          <h2 className="section-title">
            {t.process.title}
          </h2>
          <p className="section-description">
            {t.process.description}
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2.5rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#ffffff"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div style={{ background: "rgba(11, 19, 43, 0.05)", padding: "0.85rem", borderRadius: "14px", border: "1px solid var(--border-gold)" }}>
                    {step.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.75rem",
                      fontWeight: 900,
                      color: "rgba(11, 19, 43, 0.12)"
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.85rem", fontFamily: "var(--font-serif)" }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>

              <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--gold-primary)", fontSize: "0.88rem", fontWeight: 700 }}>
                <span>100% Quality Workflow</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
