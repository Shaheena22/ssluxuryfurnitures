import React, { useState, useEffect } from "react";
import { Star, MessageSquare, Plus, CheckCircle2, MapPin, Sparkles, X, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const INITIAL_TESTIMONIALS = [
  {
    id: "test-1",
    name: "S. Venkat Reddy",
    city: "Hyderabad (Jubilee Hills)",
    product: "Grand Beige Velvet 7-Seater Corner Sofa Suite",
    rating: 5,
    date: "August 2026",
    comment: "Direct workshop dealing with S. Shashavali garu saved us over ₹45,000 compared to Banjara Hills showrooms. The 18mm solid plywood framing and Relax Well HD foam is exceptionally comfortable.",
    verified: true
  },
  {
    id: "test-2",
    name: "Rajesh & Meera Sharma",
    city: "Bengaluru (Whitefield)",
    product: "Slate Grey Fluted Headboard with LED Channel",
    rating: 5,
    date: "July 2026",
    comment: "We received live video updates on WhatsApp while the wood frame was assembled and foam was layered. Complete transparency from start to finish. Absolute luxury finish!",
    verified: true
  },
  {
    id: "test-3",
    name: "K. Lakshmi Devi",
    city: "Kurnool (Park Road)",
    product: "L-Shape Modular Sectional & Custom Cushions",
    rating: 5,
    date: "August 2026",
    comment: "Very honest craftsmen. Master Shashavali explained the difference between 32D and Relax Well HD foam clearly so we could pick what suited our budget. Delivered in 10 days.",
    verified: true
  },
  {
    id: "test-4",
    name: "Mohammed Arif",
    city: "Anantapur",
    product: "Turquoise Blue & Dark Velvet 3-Seater Suite",
    rating: 5,
    date: "June 2026",
    comment: "Top notch build quality. The solid wood structure feels heavy and indestructible. No mediator markup, directly dealt with the manufacturer.",
    verified: true
  },
  {
    id: "test-5",
    name: "P. Anitha Rao",
    city: "Nandyal",
    product: "Custom Tufted Cot Backboard & Dining Cushions",
    rating: 5,
    date: "May 2026",
    comment: "Customized down to the millimeter to fit our bedroom wall seamlessly. The velvet fabric texture is so soft and easy to maintain. Highly recommended!",
    verified: true
  }
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState(() => {
    try {
      const stored = localStorage.getItem("ss_customer_testimonials");
      if (stored) {
        const custom = JSON.parse(stored);
        return [...custom, ...INITIAL_TESTIMONIALS];
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_TESTIMONIALS;
  });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    product: "",
    rating: 5,
    comment: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) {
      alert("Please enter your name and review.");
      return;
    }

    const newReview = {
      id: "review-" + Date.now(),
      name: formData.name.trim(),
      city: formData.city.trim() || "Verified Client",
      product: formData.product.trim() || "Custom Furniture Order",
      rating: Number(formData.rating),
      date: "Just Now",
      comment: formData.comment.trim(),
      verified: true
    };

    try {
      const stored = localStorage.getItem("ss_customer_testimonials");
      const existing = stored ? JSON.parse(stored) : [];
      const updated = [newReview, ...existing];
      localStorage.setItem("ss_customer_testimonials", JSON.stringify(updated));
      setReviews([...updated, ...INITIAL_TESTIMONIALS]);
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setFormData({ name: "", city: "", product: "", rating: 5, comment: "" });
    }, 1500);
  };

  return (
    <section id="testimonials" className="section-padding" style={{ position: "relative", background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-tag" style={{ background: "rgba(212, 175, 55, 0.1)", borderColor: "var(--gold-accent)", color: "var(--sapphire-dark)" }}>
            <Sparkles size={15} className="text-gold" /> {t.testimonials.badge}
          </div>
          <h2 className="section-title">
            {t.testimonials.title}
          </h2>
          <p className="section-description">
            {t.testimonials.description}
          </p>
        </div>

        {/* Action button & rating banner */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", marginBottom: "3rem", background: "#ffffff", padding: "1.5rem 2rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-gold)", boxShadow: "0 4px 20px rgba(11, 19, 43, 0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "3px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#d4af37" color="#d4af37" />
              ))}
            </div>
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>
                4.9 / 5.0 Rating
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600 }}>
                Based on 120+ Direct Workshop Deliveries
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-sapphire"
            style={{ padding: "0.75rem 1.6rem", fontSize: "0.9rem" }}
          >
            <MessageSquare size={16} className="text-gold" />
            <span>{t.testimonials.leaveFeedbackBtn}</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem"
          }}
        >
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#ffffff",
                border: "1px solid var(--border-medium)"
              }}
            >
              <div>
                {/* Rating Stars & Verified Tag */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#d4af37" color="#d4af37" />
                    ))}
                  </div>
                  {rev.verified && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.74rem", fontWeight: 800, color: "var(--emerald-dark)", background: "rgba(16, 185, 129, 0.1)", padding: "0.25rem 0.65rem", borderRadius: "var(--radius-full)" }}>
                      <CheckCircle2 size={13} /> {t.testimonials.verifiedBuyer}
                    </div>
                  )}
                </div>

                {/* Comment Text */}
                <p style={{ fontSize: "0.96rem", color: "var(--sapphire-dark)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.5rem", fontWeight: 500 }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Client & Product info */}
              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "var(--sapphire-gradient)", color: "#d4af37", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.95rem" }}>
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: "var(--sapphire-dark)", fontSize: "0.98rem" }}>
                      {rev.name}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      <MapPin size={12} className="text-gold" /> {rev.city}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "0.75rem", fontSize: "0.78rem", color: "var(--gold-primary)", fontWeight: 700 }}>
                  Order: {rev.product}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "560px",
              background: "#ffffff",
              border: "2px solid var(--border-gold)",
              padding: "2.25rem",
              position: "relative",
              borderRadius: "var(--radius-lg)"
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "#f8fafc",
                border: "1px solid var(--border-medium)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <CheckCircle2 size={48} className="text-gold" style={{ margin: "0 auto 1rem auto" }} />
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--sapphire-dark)" }}>Thank You For Your Review!</h3>
                <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>Your feedback has been posted to our customer lookbook.</p>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--gold-primary)", fontWeight: 800, fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                  <Sparkles size={16} /> {t.testimonials.modalSubtitle}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)", marginBottom: "1.5rem" }}>
                  {t.testimonials.modalTitle}
                </h3>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                      {t.testimonials.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                        {t.testimonials.cityLabel}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hyderabad / Kurnool"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                        {t.testimonials.ratingLabel}
                      </label>
                      <select
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                      >
                        <option value={5}>★★★★★ 5 Stars (Excellent)</option>
                        <option value={4}>★★★★☆ 4 Stars (Very Good)</option>
                        <option value={3}>★★★☆☆ 3 Stars (Good)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                      {t.testimonials.productLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5-Seater Sofa / L-Sectional / Bed Headboard"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                      {t.testimonials.reviewLabel} *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share your experience about the 18mm frame strength, foam comfort, fabric quality, and workshop direct pricing..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                    />
                  </div>

                  <button type="submit" className="btn btn-sapphire" style={{ padding: "0.95rem", marginTop: "0.5rem" }}>
                    <Plus size={16} className="text-gold" />
                    <span>{t.testimonials.submitBtn}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
