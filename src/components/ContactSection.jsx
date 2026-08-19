import React, { useState } from "react";
import { Phone, MessageCircle, User, Send, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "Sofa Sets (Category I)",
    tier: "Medium Tier (Recommended)",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const text = encodeURIComponent(
      `Hello S.S Luxury Furnishings (S. Shashavali),\n\nNEW ENQUIRY FROM WEBSITE:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Interested In: ${formData.product}\n- Preferred Tier: ${formData.tier}\n- Message: ${formData.message || "I would like to discuss design models and pricing."}`
    );

    window.open(`https://wa.me/919553631317?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: "relative", background: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} className="text-gold" />
            <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>{t.contact.badge}</span>
          </div>
          <h2 className="section-title">
            {t.contact.title}
          </h2>
          <p className="section-description">
            {t.contact.description}
          </p>
        </div>

        {/* Grid: Left Contact Info Cards, Right Order Enquiry Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {/* Left Column: Direct Phone & WhatsApp Cards */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: "2.25rem",
                background: "#ffffff",
                border: "1px solid var(--border-medium)",
                marginBottom: "1.5rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "var(--sapphire-gradient)", color: "#d4af37", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-gold)", boxShadow: "0 4px 15px rgba(11, 19, 43, 0.2)" }}>
                  <User size={28} />
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800 }}>
                    {t.contact.ownerLabel}
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)" }}>
                    S. Shashavali
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Phone 1 */}
                <div style={{ background: "#f8fafc", border: "1px solid var(--border-subtle)", padding: "1rem 1.25rem", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>{t.contact.primaryPhone}</div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>+91 9553631317</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <a href="tel:+919553631317" className="btn btn-sapphire" style={{ padding: "0.5rem 0.9rem", fontSize: "0.82rem" }}>
                      <Phone size={14} className="text-gold" /> Call
                    </a>
                    <a href="https://wa.me/919553631317" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: "0.5rem 0.9rem", fontSize: "0.82rem" }}>
                      <MessageCircle size={14} /> WA
                    </a>
                  </div>
                </div>

                {/* Phone 2 */}
                <div style={{ background: "#f8fafc", border: "1px solid var(--border-subtle)", padding: "1rem 1.25rem", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>{t.contact.secondaryPhone}</div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>+91 7013890174</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <a href="tel:+917013890174" className="btn btn-sapphire" style={{ padding: "0.5rem 0.9rem", fontSize: "0.82rem" }}>
                      <Phone size={14} className="text-gold" /> Call
                    </a>
                    <a href="https://wa.me/917013890174" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: "0.5rem 0.9rem", fontSize: "0.82rem" }}>
                      <MessageCircle size={14} /> WA
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Unit Info */}
            <div className="glass-card" style={{ padding: "1.75rem", background: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--sapphire-dark)", fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                <Clock size={18} className="text-gold" /> {t.contact.hoursTitle}
              </div>
              <div style={{ fontSize: "0.92rem", color: "var(--sapphire-dark)", lineHeight: 1.6, fontWeight: 700 }}>
                {t.contact.hours} <br />
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>{t.contact.hoursSub}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Enquiry Form */}
          <div
            className="glass-card"
            style={{
              padding: "2.5rem",
              background: "#ffffff",
              border: "1px solid var(--border-medium)",
              boxShadow: "var(--shadow-light)"
            }}
          >
            <h3 style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)", marginBottom: "0.5rem" }}>
              {t.contact.formTitle}
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}>
              {t.contact.formSubtitle}
            </p>

            {submitted ? (
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid var(--emerald-primary)",
                  padding: "2rem",
                  borderRadius: "var(--radius-md)",
                  textAlign: "center"
                }}
              >
                <CheckCircle2 size={48} style={{ color: "var(--emerald-dark)", marginBottom: "1rem" }} />
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.5rem" }}>
                  {t.contact.successTitle}
                </h4>
                <p style={{ fontSize: "0.92rem", color: "var(--text-main)", marginBottom: "1.5rem" }}>
                  {t.contact.successMsg}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline-sapphire"
                  style={{ fontSize: "0.88rem" }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.4rem" }}>
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "#f8fafc",
                      border: "1px solid var(--border-medium)",
                      color: "var(--sapphire-dark)",
                      outline: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.4rem" }}>
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "#f8fafc",
                      border: "1px solid var(--border-medium)",
                      color: "var(--sapphire-dark)",
                      outline: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.4rem" }}>
                    {t.contact.productLabel}
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "#f8fafc",
                      border: "1px solid var(--border-medium)",
                      color: "var(--sapphire-dark)",
                      outline: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600
                    }}
                  >
                    <option>Sofa Sets (Category I - Any Model / Corner Sets)</option>
                    <option>Tea-poys / Tpies (Category I)</option>
                    <option>Separate Throw Pillows / Cushions (Category I)</option>
                    <option>Cot Headboards / Backboards (Category II)</option>
                    <option>Dining Table Chair & Bench Cushions (Category II)</option>
                    <option>Window-Side Nook Cushions (Category II)</option>
                    <option>Custom Chair Cushions (Category II)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.4rem" }}>
                    {t.contact.tierLabel}
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "#f8fafc",
                      border: "1px solid var(--border-medium)",
                      color: "var(--sapphire-dark)",
                      outline: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600
                    }}
                  >
                    <option>Basic Tier (Budget-Friendly 32D Foam)</option>
                    <option>Medium Tier (Recommended Waterproof 18mm Ply)</option>
                    <option>Premium Tier (Royal Relax Well HD Foam & Imported Fabric)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.4rem" }}>
                    {t.contact.msgLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention any custom dimensions, seating capacity, or specific reference models..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      background: "#f8fafc",
                      border: "1px solid var(--border-medium)",
                      color: "var(--sapphire-dark)",
                      outline: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-whatsapp" style={{ padding: "1rem", marginTop: "0.5rem" }}>
                  <Send size={18} />
                  <span>{t.contact.sendBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
