import React, { useState, useEffect } from "react";
import { MessageCircle, ShieldCheck, Camera, PhoneCall, ChevronRight, ChevronLeft, Award, Sparkles, Layers } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ onOpenQuote, onExploreProducts }) {
  const { t } = useLanguage();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      title: "Grand Beige Velvet & Magenta Corner Suite",
      category: "Real Client Delivery • Living Room Suite",
      image: "/images/real_works/real_beige_magenta_sofa.jpg",
      specs: "18mm BWP Plywood • Relax Well HD Foam • Custom Tea-Poy",
      link: "#real-works"
    },
    {
      title: "Modern Slate Grey Fluted Wall Headboard",
      category: "Real Client Delivery • Luxury Bedroom Wall",
      image: "/images/real_works/real_grey_fluted_headboard.jpg",
      specs: "Hand-Upholstered Velvet • Backlit LED Channel • Nightstands",
      link: "#real-works"
    },
    {
      title: "Custom Turquoise & Dark Velvet 3-Seater Suite",
      category: "Real Client Delivery • Direct Workshop Craft",
      image: "/images/real_works/real_turquoise_sofa.jpg",
      specs: "Solid 18mm Frame • 32D High-Resilience Foam • Contrast Accent",
      link: "#real-works"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[activeSlideIndex];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "7.5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
        background: "radial-gradient(circle at 70% 30%, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)"
      }}
    >
      {/* Ambient Gold Glow */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(243, 198, 74, 0.18) 0%, rgba(7, 11, 25, 0.02) 60%, transparent 80%)",
          filter: "blur(70px)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3.5rem",
            alignItems: "center"
          }}
        >
          {/* Left Column */}
          <div>
            <div
              className="badge-tag"
              style={{
                background: "rgba(7, 11, 25, 0.05)",
                borderColor: "var(--border-gold)",
                padding: "0.6rem 1.4rem"
              }}
            >
              <ShieldCheck size={17} className="text-gold" />
              <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>{t.hero.badge}</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                fontWeight: 900,
                lineHeight: 1.12,
                marginBottom: "1.25rem",
                fontFamily: "var(--font-heading)",
                color: "var(--sapphire-dark)"
              }}
            >
              {t.hero.title1} <br />
              <span className="text-gold-gradient">{t.hero.title2}</span>
            </h1>

            <div
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--sapphire-accent)",
                marginBottom: "1.25rem",
                fontWeight: 600
              }}
            >
              {t.hero.tagline}
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
                maxWidth: "680px"
              }}
            >
              {t.hero.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.75rem" }}>
              <a
                href="https://wa.me/919553631317?text=Hi%20S.%20Shashavali,%20I%20am%20interested%20in%20getting%20a%20free%20quote%20for%20custom%20luxury%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: "1.05rem", padding: "1.1rem 2.2rem" }}
              >
                <MessageCircle size={20} />
                <span>{t.hero.whatsappBtn}</span>
              </a>

              <a
                href="#real-works"
                className="btn btn-sapphire"
                style={{ fontSize: "1.05rem", padding: "1.1rem 2rem" }}
              >
                <Camera size={18} className="text-gold" />
                <span>{t.hero.lookbookBtn}</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="btn btn-outline-sapphire"
                style={{ fontSize: "1rem", padding: "1.1rem 1.8rem" }}
              >
                <PhoneCall size={18} className="text-gold" />
                <span>{t.hero.contactBtn}</span>
              </button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", paddingTop: "1.75rem", borderTop: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>
                <Award size={18} className="text-gold" /> {t.hero.usp1}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>
                <Layers size={18} className="text-gold" /> {t.hero.usp2}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>
                <Sparkles size={18} className="text-gold" /> {t.hero.usp3}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Carousel */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border-gold)",
                boxShadow: "var(--shadow-hover)",
                position: "relative",
                background: "#070b19"
              }}
            >
              <div className="hero-slide-img-box" style={{ position: "relative", height: "460px", overflow: "hidden" }}>
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.6s ease-in-out"
                  }}
                />
                
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(7, 11, 25, 0.95) 0%, rgba(7, 11, 25, 0.2) 60%, transparent 100%)"
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    left: "1.25rem",
                    background: "rgba(7, 11, 25, 0.85)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--border-gold)",
                    color: "#f3c64a",
                    padding: "0.45rem 1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em"
                  }}
                >
                  FLAGSHIP DELIVERED PROJECT
                </div>

                <button
                  onClick={() => setActiveSlideIndex((activeSlideIndex - 1 + slides.length) % slides.length)}
                  aria-label="Previous Slide"
                  style={{
                    position: "absolute",
                    left: "1rem",
                    top: "40%",
                    transform: "translateY(-50%)",
                    background: "rgba(7, 11, 25, 0.75)",
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
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={() => setActiveSlideIndex((activeSlideIndex + 1) % slides.length)}
                  aria-label="Next Slide"
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "40%",
                    transform: "translateY(-50%)",
                    background: "rgba(7, 11, 25, 0.75)",
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
                  <ChevronRight size={20} />
                </button>

                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", color: "#ffffff" }}>
                  <div style={{ fontSize: "0.78rem", color: "#f3c64a", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                    {currentSlide.category}
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "var(--font-serif)", marginBottom: "0.5rem", lineHeight: 1.25, color: "#ffffff" }}>
                    {currentSlide.title}
                  </h3>
                  <div style={{ fontSize: "0.82rem", color: "#cbd5e1", opacity: 0.9 }}>
                    {currentSlide.specs}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", background: "#070b19", borderTop: "1px solid var(--border-gold)" }}>
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlideIndex(idx)}
                    style={{
                      flex: 1,
                      padding: "0.85rem 0.5rem",
                      background: activeSlideIndex === idx ? "rgba(243, 198, 74, 0.15)" : "transparent",
                      border: "none",
                      borderBottom: activeSlideIndex === idx ? "2px solid #f3c64a" : "2px solid transparent",
                      color: activeSlideIndex === idx ? "#f3c64a" : "#94a3b8",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Project 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-slide-img-box { height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
