import React, { useState, useEffect } from "react";
import { 
  X, Home, ShoppingBag, Camera, Layers, Wrench, 
  Award, MessageSquare, ShieldCheck, User, Phone, 
  MessageCircle, Lock, Globe, ChevronRight, KeyRound, Sparkles, Plus
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Sidebar({ isOpen, onClose, onNavigate, onOpenOwnerPortal }) {
  const { language, setLanguage, t } = useLanguage();
  const [isOwnerAuth, setIsOwnerAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsOwnerAuth(localStorage.getItem("ss_owner_session") === "verified");
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    window.addEventListener("owner-auth-changed", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("owner-auth-changed", checkAuth);
    };
  }, []);

  if (!isOpen) return null;

  const menuItems = [
    { id: "hero", label: t.nav.home, icon: <Home size={19} />, action: () => onNavigate("home", "hero") },
    { id: "products-page", label: t.nav.products, icon: <ShoppingBag size={19} />, badge: "Full Catalog", action: () => onNavigate("products", "products-top") },
    { id: "real-works", label: t.nav.realWorks, icon: <Camera size={19} />, action: () => onNavigate("home", "real-works") },
    { id: "about", label: t.nav.anatomy, icon: <Layers size={19} />, action: () => onNavigate("home", "about") },
    { id: "process", label: t.nav.process, icon: <Wrench size={19} />, action: () => onNavigate("home", "process") },
    { id: "why-us", label: t.nav.whyUs, icon: <Award size={19} />, action: () => onNavigate("home", "why-us") },
    { id: "testimonials", label: t.nav.testimonials, icon: <MessageSquare size={19} />, action: () => onNavigate("home", "testimonials") },
    { id: "terms", label: t.nav.terms, icon: <ShieldCheck size={19} />, action: () => onNavigate("home", "terms") },
    { id: "about-story", label: t.nav.about, icon: <User size={19} />, action: () => onNavigate("home", "brand-story") },
    { id: "contact", label: t.nav.contact, icon: <Phone size={19} />, action: () => onNavigate("home", "contact") },
  ];

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      style={{
        zIndex: 1100,
        display: "flex",
        justifyContent: "flex-start", // Left side drawer
        animation: "fadeIn 0.2s ease-out"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "360px",
          height: "100vh",
          background: "#ffffff",
          boxShadow: "10px 0 40px rgba(11, 19, 43, 0.25)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          animation: "slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          overflowY: "auto"
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: "1.25rem 1.5rem",
            borderBottom: "1px solid var(--border-gold)",
            background: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "rgba(212, 175, 55, 0.15)",
                border: "1px solid var(--gold-accent)",
                color: "#d4af37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "1.1rem",
                fontFamily: "var(--font-serif)"
              }}
            >
              SS
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 800, color: "#ffffff" }}>
                S.S LUXURY <span style={{ color: "var(--gold-accent)" }}>FURNISHINGS</span>
              </div>
              <div style={{ fontSize: "0.68rem", color: "var(--gold-accent)", letterSpacing: "0.04em", fontWeight: 600 }}>
                "Where Quality is Guaranteed"
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Language Switcher in Left Sidebar */}
        <div style={{ padding: "0.85rem 1.25rem", background: "#f8fafc", borderBottom: "1px solid var(--border-subtle)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.78rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.4rem" }}>
            <Globe size={13} className="text-gold" /> Select Language / భాషను ఎంచుకోండి
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.45rem" }}>
            {[
              { code: "en", label: "English" },
              { code: "te", label: "తెలుగు" },
              { code: "hi", label: "हिंदी" },
            ].map((l) => {
              const isSel = language === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  style={{
                    padding: "0.45rem 0.2rem",
                    borderRadius: "6px",
                    border: isSel ? "1px solid var(--gold-accent)" : "1px solid var(--border-medium)",
                    background: isSel ? "var(--sapphire-gradient)" : "#ffffff",
                    color: isSel ? "#ffffff" : "var(--sapphire-dark)",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Navigation Items */}
        <div style={{ flex: 1, padding: "0.75rem 1rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                item.action();
                onClose();
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.7rem 0.85rem",
                borderRadius: "8px",
                border: "none",
                background: "transparent",
                color: "var(--sapphire-dark)",
                fontSize: "0.92rem",
                fontWeight: 700,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.color = "var(--gold-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--sapphire-dark)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "var(--gold-primary)", display: "flex" }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                {item.badge && (
                  <span style={{ fontSize: "0.65rem", background: "var(--sapphire-gradient)", color: "#d4af37", padding: "0.12rem 0.45rem", borderRadius: "4px", fontWeight: 800, border: "1px solid var(--border-gold)" }}>
                    {item.badge}
                  </span>
                )}
                <ChevronRight size={15} style={{ color: "var(--text-muted)", opacity: 0.7 }} />
              </div>
            </button>
          ))}

          {/* Secure Owner Upload Option (Protected by PIN) */}
          <div style={{ marginTop: "0.5rem", paddingTop: "0.6rem", borderTop: "1px dashed rgba(28, 37, 65, 0.15)" }}>
            <button
              onClick={() => {
                onClose();
                onOpenOwnerPortal();
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 0.85rem",
                borderRadius: "8px",
                border: "1px solid var(--border-gold)",
                background: isOwnerAuth ? "rgba(16, 185, 129, 0.08)" : "rgba(212, 175, 55, 0.08)",
                color: "var(--sapphire-dark)",
                fontSize: "0.88rem",
                fontWeight: 800,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <KeyRound size={17} className="text-gold" />
                <span>{isOwnerAuth ? "Owner Portal (Logged In)" : "Owner Project Upload"}</span>
              </div>

              <span style={{ fontSize: "0.68rem", background: "var(--sapphire-gradient)", color: "#f3c64a", padding: "0.15rem 0.5rem", borderRadius: "4px", fontWeight: 800 }}>
                {isOwnerAuth ? "+ Upload" : "PIN Lock"}
              </span>
            </button>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid var(--border-subtle)", background: "#ffffff", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          <a
            href="https://wa.me/919553631317?text=Hello%20S.S%20Luxury%20Furnishings,%20I%20want%20to%20get%20a%20quote%20for%20custom%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%", padding: "0.75rem", fontSize: "0.88rem", justifyContent: "center" }}
          >
            <MessageCircle size={17} />
            <span>{t.hero.whatsappBtn}</span>
          </a>

          <a
            href="tel:+919553631317"
            className="btn btn-sapphire"
            style={{ width: "100%", padding: "0.75rem", fontSize: "0.88rem", justifyContent: "center" }}
          >
            <Phone size={15} className="text-gold" />
            <span>+91 9553631317</span>
          </a>
        </div>

      </div>

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
