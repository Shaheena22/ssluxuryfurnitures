import React, { useState } from "react";
import { Quote, UserCheck, Factory, Sparkles, CheckCircle2, PhoneCall, Layers, ShieldCheck, Box, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();
  const [activeLayer, setActiveLayer] = useState("layer1");

  const layersData = {
    layer1: {
      number: "01",
      title: t.anatomy.layer1Title,
      tag: t.anatomy.layer1Tag,
      desc: t.anatomy.layer1Desc,
      spec: t.anatomy.layer1Spec,
      image: "/images/layer1_plywood.jpg",
      icon: <Box size={22} className="text-gold" />,
      features: [
        "100% Solid 18mm Plywood Only",
        "Zero MDF or Weak Particle Board",
        "Heavy Duty Load-Bearing Joints"
      ]
    },
    layer2: {
      number: "02",
      title: t.anatomy.layer2Title,
      tag: t.anatomy.layer2Tag,
      desc: t.anatomy.layer2Desc,
      spec: t.anatomy.layer2Spec,
      image: "/images/layer2_waterproof.jpg",
      icon: <ShieldCheck size={22} className="text-gold" />,
      features: [
        "Boiling Water Proof (BWP) Seal",
        "Anti-Termite Wood Protection",
        "Resists Seasonal Humidity Swelling"
      ]
    },
    layer3: {
      number: "03",
      title: t.anatomy.layer3Title,
      tag: t.anatomy.layer3Tag,
      desc: t.anatomy.layer3Desc,
      spec: t.anatomy.layer3Spec,
      image: "/images/layer3_foam.jpg",
      icon: <Layers size={22} className="text-gold" />,
      features: [
        "32D High-Resilience Density Foam",
        "Optional Royal Relax Well HD Foam",
        "Ergonomic Zero-Sag Cushion Core"
      ]
    },
    layer4: {
      number: "04",
      title: t.anatomy.layer4Title,
      tag: t.anatomy.layer4Tag,
      desc: t.anatomy.layer4Desc,
      spec: t.anatomy.layer4Spec,
      image: "/images/layer4_upholstery.jpg",
      icon: <Sparkles size={22} className="text-gold" />,
      features: [
        "Imported Velvet, Suede & Leatherette",
        "200+ Designer Fabric Swatches",
        "Precision Hand-Tufted Detailing"
      ]
    }
  };

  const currentLayer = layersData[activeLayer];

  return (
    <section id="about" className="section-padding" style={{ position: "relative", overflow: "hidden", background: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} className="text-gold" />
            <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>{t.anatomy.badge}</span>
          </div>
          <h2 className="section-title">
            {t.anatomy.title}
          </h2>
          <p className="section-description">
            {t.anatomy.description}
          </p>
        </div>

        {/* 4-Layer Vertical Stepper with Beside Image Display (Left: Vertical, Right: Image) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "5rem"
          }}
        >
          {/* Left Column: Vertical Stepper / Accordion List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {Object.keys(layersData).map((key) => {
              const item = layersData[key];
              const isSelected = activeLayer === key;
              return (
                <div
                  key={key}
                  onClick={() => setActiveLayer(key)}
                  className="glass-card"
                  style={{
                    padding: "1.5rem 1.75rem",
                    cursor: "pointer",
                    background: isSelected ? "var(--sapphire-gradient)" : "#f8fafc",
                    color: isSelected ? "#ffffff" : "var(--sapphire-dark)",
                    border: isSelected ? "1px solid var(--gold-accent)" : "1px solid var(--border-medium)",
                    boxShadow: isSelected ? "0 10px 30px rgba(11, 19, 43, 0.2)" : "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    borderRadius: "var(--radius-md)"
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: isSelected ? "#f3c64a" : "rgba(11, 19, 43, 0.25)",
                      lineHeight: 1,
                      marginTop: "2px"
                    }}
                  >
                    {item.number}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                      <div style={{ fontSize: "1.05rem", fontWeight: 800 }}>
                        {item.title}
                      </div>
                      <span style={{ fontSize: "0.72rem", background: isSelected ? "rgba(243, 198, 74, 0.2)" : "rgba(11, 19, 43, 0.06)", color: isSelected ? "#f3c64a" : "var(--sapphire-dark)", padding: "0.2rem 0.55rem", borderRadius: "4px", fontWeight: 800 }}>
                        {item.spec}
                      </span>
                    </div>

                    <p style={{ fontSize: "0.88rem", color: isSelected ? "#cbd5e1" : "var(--text-muted)", lineHeight: 1.5, marginTop: "0.4rem" }}>
                      {item.desc}
                    </p>

                    {isSelected && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}>
                        {item.features.map((f, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", color: "#f3c64a", fontWeight: 700 }}>
                            <Check size={13} /> {f}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Beside Image Display for the Active Layer */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "2px solid var(--gold-accent)",
                background: "#070b19",
                boxShadow: "0 20px 50px rgba(11, 19, 43, 0.2)",
                position: "relative"
              }}
            >
              <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
                <img
                  key={currentLayer.image}
                  src={currentLayer.image}
                  alt={currentLayer.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(7, 11, 25, 0.95) 0%, rgba(7, 11, 25, 0.3) 50%, transparent 100%)"
                  }}
                />

                {/* Layer Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    left: "1.25rem",
                    background: "rgba(7, 11, 25, 0.9)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--border-gold)",
                    color: "#f3c64a",
                    padding: "0.45rem 1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8rem",
                    fontWeight: 800
                  }}
                >
                  LAYER {currentLayer.number} SPECIFICATION
                </div>

                {/* Bottom Overlay Info */}
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", color: "#ffffff" }}>
                  <div style={{ fontSize: "0.8rem", color: "#f3c64a", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                    {currentLayer.tag}
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, fontFamily: "var(--font-serif)", marginBottom: "0.6rem", color: "#ffffff" }}>
                    {currentLayer.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 600 }}>
                    <CheckCircle2 size={16} className="text-gold" /> {currentLayer.spec}
                  </div>
                </div>
              </div>

              {/* Guarantees Bar Below Beside Image */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", padding: "1rem", background: "#0b132b", borderTop: "1px solid var(--border-gold)", textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 700 }}>
                  ✓ {t.anatomy.guarantee1}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 700 }}>
                  ✓ {t.anatomy.guarantee2}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 700 }}>
                  ✓ {t.anatomy.guarantee3}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Philosophy & S. Shashavali Story */}
        <div id="brand-story">
          <div
            className="glass-card"
            style={{
              padding: "3rem",
              position: "relative",
              background: "#ffffff",
              border: "1px solid var(--border-gold)",
              marginBottom: "3.5rem",
              boxShadow: "var(--shadow-light)"
            }}
          >
            <Quote
              size={56}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                color: "rgba(243, 198, 74, 0.18)"
              }}
            />
            <div style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--gold-primary)", fontWeight: 800, marginBottom: "1rem" }}>
              {t.about.badge}
            </div>
            <blockquote
              style={{
                fontSize: "1.4rem",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "var(--sapphire-dark)",
                marginBottom: "1.75rem",
                fontWeight: 700,
                maxWidth: "900px"
              }}
            >
              {t.about.quote}
            </blockquote>

            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border-subtle)" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "var(--sapphire-gradient)",
                  color: "#f3c64a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontFamily: "var(--font-serif)",
                  border: "1px solid var(--gold-accent)",
                  boxShadow: "0 4px 15px rgba(7, 11, 25, 0.2)"
                }}
              >
                SS
              </div>
              <div>
                <div style={{ fontWeight: 800, color: "var(--sapphire-dark)", fontSize: "1.1rem" }}>S. Shashavali</div>
                <div style={{ fontSize: "0.88rem", color: "var(--gold-primary)", fontWeight: 700 }}>{t.about.ownerRole}</div>
              </div>
            </div>
          </div>

          {/* Direct Manufacturer Workshop Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "center"
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: "2.5rem",
                background: "#ffffff",
                border: "1px solid var(--border-medium)"
              }}
            >
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ background: "var(--sapphire-gradient)", color: "#f3c64a", padding: "0.85rem", borderRadius: "16px", display: "flex", boxShadow: "0 6px 20px rgba(7, 11, 25, 0.25)" }}>
                  <UserCheck size={30} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.6rem" }}>
                    {t.about.workshopTitle}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                    {t.about.workshopDesc}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-gold)", boxShadow: "var(--shadow-light)" }}>
              <img
                src="/images/workshop.jpg"
                alt="S.S Luxury Furnishings Manufacturing Unit Workshop"
                style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(7, 11, 25, 0.92) 0%, transparent 60%)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  right: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 800 }}>
                  <Factory size={16} className="text-gold" style={{ display: "inline", marginRight: "0.4rem" }} /> Manufacturing Unit Active
                </div>
                <a href="tel:+919553631317" className="btn btn-gold" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>
                  <PhoneCall size={15} /> {t.about.callBtn}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
