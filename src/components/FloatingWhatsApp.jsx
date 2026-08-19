import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickPrompts = [
    "I want a price quote for a custom 5-seater sofa.",
    "Can you send me fabric swatches & photos?",
    "What is your 18mm Plywood structural guarantee?",
    "I want to send a custom design photo from Pinterest."
  ];

  const handleSendPrompt = (msgText) => {
    const text = encodeURIComponent(
      `Hello S.S Luxury Furnishings (S. Shashavali),\n\n${msgText}`
    );
    window.open(`https://wa.me/919553631317?text=${text}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 999 }}>
      {/* Interactive Quick Chat Card Popup */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "4.5rem",
            right: 0,
            width: "340px",
            background: "#ffffff",
            borderRadius: "var(--radius-md)",
            boxShadow: "0 20px 50px rgba(11, 19, 43, 0.35)",
            border: "1px solid var(--border-gold)",
            overflow: "hidden",
            animation: "modalFadeIn 0.25s ease-out"
          }}
        >
          {/* Card Header */}
          <div
            style={{
              background: "var(--sapphire-gradient)",
              padding: "1.25rem",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#d4af37",
                  color: "#0b132b",
                  fontWeight: 900,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.95rem"
                }}
              >
                SS
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>S. Shashavali</div>
                <div style={{ fontSize: "0.75rem", color: "#10b981", display: "flex", alignItems: "center", gap: "0.3rem", fontWeight: 700 }}>
                  <span style={{ width: "8px", height: "8px", background: "#10b981", borderRadius: "50%", display: "inline-block" }} /> Online • Workshop Owner
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer" }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Card Body */}
          <div style={{ padding: "1.25rem", background: "#f8fafc" }}>
            <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", padding: "0.85rem", borderRadius: "12px", fontSize: "0.88rem", color: "var(--sapphire-dark)", marginBottom: "1rem", lineHeight: 1.5 }}>
              <Sparkles size={14} className="text-gold" style={{ display: "inline", marginRight: "0.4rem" }} />
              Hello! I build custom furniture with 100% 18mm plywood. How can I help you today?
            </div>

            <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--text-muted)", uppercase: true, letterSpacing: "0.06em", marginBottom: "0.6rem" }}>
              Click a Quick Enquiry:
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(prompt)}
                  style={{
                    textAlign: "left",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border-medium)",
                    background: "#ffffff",
                    color: "var(--sapphire-dark)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold-accent)";
                    e.currentTarget.style.background = "rgba(212, 175, 55, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                    e.currentTarget.style.background = "#ffffff";
                  }}
                >
                  ⚡ {prompt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customMsg.trim()) handleSendPrompt(customMsg);
              }}
              style={{ display: "flex", gap: "0.5rem" }}
            >
              <input
                type="text"
                placeholder="Type your question..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                style={{
                  flex: 1,
                  padding: "0.6rem 0.85rem",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border-medium)",
                  fontSize: "0.85rem",
                  outline: "none"
                }}
              />
              <button
                type="submit"
                style={{
                  background: "var(--emerald-gradient)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "var(--emerald-gradient)",
          color: "#fff",
          borderRadius: "50px",
          padding: "0.85rem 1.4rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.45)",
          border: "none",
          fontWeight: 800,
          fontSize: "0.95rem",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06) translateY(-4px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) translateY(0)")}
      >
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          {!isOpen && (
            <span
              style={{
                position: "absolute",
                top: "-2px",
                right: "-2px",
                width: "10px",
                height: "10px",
                background: "#fff",
                borderRadius: "50%"
              }}
            />
          )}
        </div>
        <span className="wa-float-text">{isOpen ? "Close Chat" : "Chat with Owner Direct"}</span>

        <style>{`
          @media (max-width: 600px) {
            .wa-float-text { display: none; }
            button { padding: 0.9rem !important; border-radius: 50% !important; }
          }
        `}</style>
      </button>
    </div>
  );
}
