import React from "react";
import { Sparkles, UserCheck, Layers, Video, Palette, Sliders } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const usps = [
    {
      icon: <UserCheck size={30} className="text-gold" />,
      title: t.whyUs.usp1Title,
      desc: t.whyUs.usp1Desc
    },
    {
      icon: <Layers size={30} className="text-gold" />,
      title: t.whyUs.usp2Title,
      desc: t.whyUs.usp2Desc
    },
    {
      icon: <Video size={30} className="text-gold" />,
      title: t.whyUs.usp3Title,
      desc: t.whyUs.usp3Desc
    },
    {
      icon: <Palette size={30} className="text-gold" />,
      title: t.whyUs.usp4Title,
      desc: t.whyUs.usp4Desc
    },
    {
      icon: <Sliders size={30} className="text-gold" />,
      title: t.whyUs.usp5Title,
      desc: t.whyUs.usp5Desc
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ position: "relative", background: "#ffffff" }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} className="text-gold" />
            <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>{t.whyUs.badge}</span>
          </div>
          <h2 className="section-title">
            {t.whyUs.title}
          </h2>
          <p className="section-description">
            {t.whyUs.description}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {usps.map((usp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                background: "#ffffff"
              }}
            >
              <div
                style={{
                  background: "rgba(7, 11, 25, 0.04)",
                  border: "1px solid var(--border-gold)",
                  padding: "1.1rem",
                  borderRadius: "18px",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(7, 11, 25, 0.05)"
                }}
              >
                {usp.icon}
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.85rem", fontFamily: "var(--font-serif)", lineHeight: 1.3 }}>
                {usp.title}
              </h3>

              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                {usp.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
