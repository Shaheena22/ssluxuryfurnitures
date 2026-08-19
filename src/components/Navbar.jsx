import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, Globe, ChevronDown, KeyRound } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar({ onOpenSidebar, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isOwnerAuth, setIsOwnerAuth] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    const checkAuth = () => {
      setIsOwnerAuth(localStorage.getItem("ss_owner_session") === "verified");
    };
    checkAuth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", checkAuth);
    window.addEventListener("owner-auth-changed", checkAuth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("owner-auth-changed", checkAuth);
    };
  }, []);

  const handleLogoClick = () => {
    setLogoClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        onNavigate("owner");
        return 0;
      }
      return next;
    });
    setTimeout(() => setLogoClickCount(0), 1500);
  };

  const languageLabels = {
    en: "English",
    te: "తెలుగు",
    hi: "हिंदी"
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(255, 255, 255, 0.98)"
          : "linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.92))",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(28, 37, 65, 0.12)" : "1px solid rgba(212, 175, 55, 0.25)",
        padding: scrolled ? "0.65rem 0" : "0.95rem 0",
        boxShadow: scrolled ? "0 4px 25px rgba(11, 19, 43, 0.08)" : "none"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Left Side: Sidebar Toggle Menu + Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          {/* Left Sidebar Menu Toggle Button */}
          <button
            onClick={onOpenSidebar}
            className="btn btn-sapphire"
            style={{
              padding: "0.5rem 0.85rem",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              borderRadius: "8px"
            }}
            aria-label="Open Left Sidebar Menu"
            title="Open Menu"
          >
            <Menu size={18} className="text-gold" />
            <span style={{ fontWeight: 800 }}>{t.nav.menu}</span>
          </button>

          {/* Brand Logo & Tagline (Triple click secretly opens Owner Portal) */}
          <button
            onClick={() => onNavigate("home", "hero")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              textAlign: "left"
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleLogoClick();
              }}
              title="S.S Luxury Furnishings"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af37",
                fontWeight: 900,
                fontSize: "1.1rem",
                fontFamily: "var(--font-serif)",
                boxShadow: "0 4px 15px rgba(11, 19, 43, 0.2)",
                border: "1px solid var(--gold-accent)"
              }}
            >
              SS
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 800, letterSpacing: "0.02em", lineHeight: 1.1, color: "var(--sapphire-dark)" }}>
                S.S LUXURY <span className="text-gold">FURNISHINGS</span>
              </div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.05em", marginTop: "2px", fontWeight: 600 }}>
                "Where Quality is Guaranteed"
              </div>
            </div>
          </button>
        </div>

        {/* Right Side: Clean Nav Links (Our Products, Contact Us, Language Selector, WhatsApp) */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          
          {/* Owner Mode Badge if Logged In */}
          {isOwnerAuth && (
            <button
              onClick={() => onNavigate("owner")}
              style={{
                background: "var(--sapphire-gradient)",
                border: "1px solid var(--gold-accent)",
                color: "#f3c64a",
                padding: "0.45rem 0.85rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.78rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem"
              }}
            >
              <KeyRound size={13} />
              <span>Owner Workspace (+ Upload)</span>
            </button>
          )}

          {/* Desktop Nav Links */}
          <nav className="desktop-clean-nav" style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <button
              onClick={() => onNavigate("products", "products-top")}
              style={{
                background: "none",
                border: "none",
                color: "var(--sapphire-dark)",
                fontSize: "0.92rem",
                fontWeight: 700,
                cursor: "pointer",
                padding: "0.4rem 0.6rem",
                borderRadius: "6px",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--sapphire-dark)")}
            >
              {t.nav.products}
            </button>

            <button
              onClick={() => onNavigate("home", "contact")}
              style={{
                background: "none",
                border: "none",
                color: "var(--sapphire-dark)",
                fontSize: "0.92rem",
                fontWeight: 700,
                cursor: "pointer",
                padding: "0.4rem 0.6rem",
                borderRadius: "6px",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--sapphire-dark)")}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Multi-Language Selector Dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#f8fafc",
                border: "1px solid var(--border-medium)",
                padding: "0.45rem 0.8rem",
                borderRadius: "8px",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--sapphire-dark)",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              aria-label="Change Language"
            >
              <Globe size={14} className="text-gold" />
              <span>{languageLabels[language]}</span>
              <ChevronDown size={14} style={{ opacity: 0.7 }} />
            </button>

            {langDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  background: "#ffffff",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "10px",
                  boxShadow: "0 8px 30px rgba(11, 19, 43, 0.15)",
                  padding: "0.4rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  minWidth: "125px",
                  zIndex: 1000,
                  animation: "fadeIn 0.15s ease-out"
                }}
              >
                {[
                  { code: "en", label: "English" },
                  { code: "te", label: "తెలుగు" },
                  { code: "hi", label: "हिंदी" },
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    style={{
                      padding: "0.55rem 0.85rem",
                      borderRadius: "6px",
                      border: "none",
                      background: language === l.code ? "var(--sapphire-gradient)" : "transparent",
                      color: language === l.code ? "#ffffff" : "var(--sapphire-dark)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <span>{l.label}</span>
                    {language === l.code && <span style={{ color: "#f3c64a", fontSize: "0.75rem" }}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Direct Contact Button */}
          <a
            href="https://wa.me/919553631317?text=Hello%20S.S%20Luxury%20Furnishings,%20I%20want%20to%20get%20a%20quote%20for%20custom%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp wa-nav-btn"
            style={{ padding: "0.5rem 0.95rem", fontSize: "0.84rem" }}
            title="Chat directly on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>{t.nav.whatsapp}</span>
          </a>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-clean-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
