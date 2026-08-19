import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, Sparkles, Upload, Plus, Trash2, 
  ArrowLeft, LogOut, CheckCircle2, MapPin, Layers, Eye, KeyRound 
} from "lucide-react";
import { getStoredRealWorks, saveOwnerProject } from "../data/products";
import { useLanguage } from "../context/LanguageContext";

export default function OwnerPortalPage({ onBackToHome }) {
  const { t } = useLanguage();
  const [pin, setPin] = useState("");
  const [isVerified, setIsVerified] = useState(() => {
    return localStorage.getItem("ss_owner_session") === "verified";
  });
  const [pinError, setPinError] = useState("");
  
  const [worksList, setWorksList] = useState(getStoredRealWorks());

  // Form State for new project
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Category I");
  const [type, setType] = useState("sofa");
  const [tier, setTier] = useState("Medium Tier (Recommended)");
  const [location, setLocation] = useState("Direct Workshop Delivery");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [imagePreview, setImagePreview] = useState("/images/hero_sofa.jpg");
  const [publishSuccess, setPublishSuccess] = useState(false);

  const handleVerifyPin = (e) => {
    e.preventDefault();
    if (pin.trim() === "Sammu1926") {
      setIsVerified(true);
      setPinError("");
      try {
        localStorage.setItem("ss_owner_session", "verified");
        window.dispatchEvent(new Event("owner-auth-changed"));
      } catch (err) {
        console.error(err);
      }
    } else {
      setPinError("Incorrect Owner PIN. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsVerified(false);
    setPin("");
    try {
      localStorage.removeItem("ss_owner_session");
      window.dispatchEvent(new Event("owner-auth-changed"));
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in project title and description.");
      return;
    }

    const newProject = {
      id: "custom-" + Date.now(),
      title: title.trim(),
      category,
      type,
      subtitle: `Real Client Delivery • ${location.trim()}`,
      description: description.trim(),
      image: imagePreview,
      isRealWork: true,
      clientLocation: location.trim(),
      features: features.trim()
        ? features.split(",").map((f) => f.trim())
        : ["100% Solid 18mm Plywood Structure", "High Density Cushion Cores", "Direct Workshop Craftsmanship"],
      recommendedTier: tier,
      popular: true
    };

    const updated = saveOwnerProject(newProject);
    setWorksList(updated);
    window.dispatchEvent(new Event("owner-project-added"));

    setPublishSuccess(true);
    setTimeout(() => {
      setPublishSuccess(false);
      setTitle("");
      setLocation("Direct Workshop Delivery");
      setDescription("");
      setFeatures("");
    }, 2000);
  };

  const handleDeleteCustomProject = (id) => {
    if (window.confirm("Are you sure you want to remove this project from the live portfolio?")) {
      try {
        const stored = localStorage.getItem("ss_custom_real_works");
        if (stored) {
          const list = JSON.parse(stored).filter((p) => p.id !== id);
          localStorage.setItem("ss_custom_real_works", JSON.stringify(list));
          setWorksList(getStoredRealWorks());
          window.dispatchEvent(new Event("owner-project-added"));
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div style={{ paddingTop: "6.5rem", paddingBottom: "5rem", minHeight: "100vh", background: "#f8fafc" }}>
      <div className="container">
        
        {/* Top Action Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem" }}>
          <button
            onClick={onBackToHome}
            className="btn btn-outline-sapphire"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.88rem" }}
          >
            <ArrowLeft size={16} />
            <span>{t.ownerPortal.backToSite}</span>
          </button>

          {isVerified && (
            <button
              onClick={handleLogout}
              className="btn btn-outline-sapphire"
              style={{ padding: "0.55rem 1rem", fontSize: "0.82rem", color: "#d9534f", borderColor: "#fca5a5" }}
            >
              <LogOut size={14} />
              <span>{t.ownerPortal.logout}</span>
            </button>
          )}
        </div>

        {/* PIN Screen if not verified */}
        {!isVerified ? (
          <div
            className="glass-card"
            style={{
              maxWidth: "520px",
              margin: "2rem auto",
              padding: "3rem 2.5rem",
              background: "#ffffff",
              border: "1px solid var(--border-gold)",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              boxShadow: "var(--shadow-hover)"
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "var(--sapphire-gradient)",
                color: "#d4af37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
                border: "1px solid var(--gold-accent)",
                boxShadow: "0 6px 20px rgba(11, 19, 43, 0.2)"
              }}
            >
              <ShieldCheck size={36} />
            </div>

            <div style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--gold-primary)", fontWeight: 800, marginBottom: "0.4rem" }}>
              {t.ownerPortal.badge}
            </div>

            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)", marginBottom: "0.75rem" }}>
              {t.ownerPortal.title}
            </h2>

            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6 }}>
              {t.ownerPortal.pinPrompt}
            </p>

            <form onSubmit={handleVerifyPin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input
                type="password"
                required
                placeholder={t.ownerPortal.pinPlaceholder}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.95rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-medium)",
                  background: "#f8fafc",
                  color: "var(--sapphire-dark)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textAlign: "center",
                  outline: "none"
                }}
              />

              {pinError && (
                <div style={{ color: "#d9534f", fontSize: "0.85rem", fontWeight: 600 }}>{pinError}</div>
              )}

              <button type="submit" className="btn btn-sapphire" style={{ padding: "0.95rem" }}>
                <Sparkles size={18} className="text-gold" />
                <span>{t.ownerPortal.verifyBtn}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Verified Owner Dashboard */
          <div>
            {/* Owner Header */}
            <div
              className="glass-card"
              style={{
                padding: "2rem 2.5rem",
                background: "linear-gradient(135deg, #0b132b 0%, #1c2541 100%)",
                color: "#ffffff",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--gold-accent)",
                marginBottom: "2.5rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1.5rem"
              }}
            >
              <div>
                <div style={{ color: "var(--gold-accent)", fontSize: "0.82rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                  AUTHENTICATED OWNER WORKSPACE • S. SHASHAVALI
                </div>
                <h1 style={{ fontSize: "1.85rem", fontWeight: 800, fontFamily: "var(--font-serif)", color: "#ffffff", marginBottom: "0.3rem" }}>
                  Workshop Project Upload & Management Portal
                </h1>
                <p style={{ color: "#cbd5e1", fontSize: "0.92rem" }}>
                  Publish photos of custom sofas, headboards, and client deliveries directly to your live portfolio.
                </p>
              </div>

              <div style={{ background: "rgba(212, 175, 55, 0.15)", border: "1px solid var(--gold-accent)", padding: "1rem 1.5rem", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#d4af37" }}>
                  {worksList.length}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#cbd5e1", fontWeight: 700 }}>
                  {t.ownerPortal.totalProjects}
                </div>
              </div>
            </div>

            {/* Grid: Left Upload Form, Right Live Card Preview */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "2.5rem",
                marginBottom: "3.5rem"
              }}
            >
              {/* Form Column */}
              <div
                className="glass-card"
                style={{
                  padding: "2.5rem",
                  background: "#ffffff",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "var(--radius-lg)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--sapphire-dark)", fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                  <Plus size={20} className="text-gold" /> {t.ownerPortal.uploadTitle}
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}>
                  {t.ownerPortal.uploadDesc}
                </p>

                {publishSuccess && (
                  <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid var(--emerald-primary)", padding: "1rem", borderRadius: "8px", color: "var(--emerald-dark)", fontWeight: 700, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={18} /> Project Published to Website Successfully!
                  </div>
                )}

                <form onSubmit={handleSubmitProject} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  
                  {/* Photo picker */}
                  <div style={{ background: "#f8fafc", border: "1px dashed var(--border-medium)", padding: "1.25rem", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                    <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", alignItems: "center" }}>
                      <label className="btn btn-sapphire" style={{ padding: "0.65rem 1.25rem", fontSize: "0.85rem", cursor: "pointer" }}>
                        <Upload size={16} className="text-gold" /> {t.ownerPortal.choosePhoto}
                        <input type="file" accept="image/*" onChange={handleImageFile} style={{ display: "none" }} />
                      </label>
                    </div>

                    <input
                      type="text"
                      placeholder={t.ownerPortal.orUrl}
                      onChange={(e) => e.target.value.trim() && setImagePreview(e.target.value.trim())}
                      style={{
                        width: "100%",
                        marginTop: "0.85rem",
                        padding: "0.6rem 0.9rem",
                        borderRadius: "6px",
                        border: "1px solid var(--border-subtle)",
                        fontSize: "0.85rem",
                        background: "#ffffff"
                      }}
                    />
                  </div>

                  {/* Title & Location */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                        {t.ownerPortal.projectTitle}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 6-Seater Royal Velvet L-Sofa"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                        {t.ownerPortal.clientLoc}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hyderabad Residence"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                      />
                    </div>
                  </div>

                  {/* Category, Type & Tier */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.85rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                        {t.ownerPortal.category}
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                      >
                        <option>Category I</option>
                        <option>Category II</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                        {t.ownerPortal.furnitureType}
                      </label>
                      <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                      >
                        <option value="sofa">Sofa Set</option>
                        <option value="headboard">Cot Headboard</option>
                        <option value="teapoy">Tea-poy</option>
                        <option value="cushions">Cushions / Nook</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                        {t.ownerPortal.materialTier}
                      </label>
                      <select
                        value={tier}
                        onChange={(e) => setTier(e.target.value)}
                        style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                      >
                        <option>Basic Tier (32D Foam)</option>
                        <option>Medium Tier (Recommended)</option>
                        <option>Premium Tier (Relax Well HD)</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                      {t.ownerPortal.description}
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Describe wood framing, foam density, fabric colors, and custom client requests..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                    />
                  </div>

                  {/* Key Features */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--sapphire-dark)", marginBottom: "0.35rem" }}>
                      {t.ownerPortal.features}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Solid 18mm Plywood Frame, 32D Foam, Includes 4 Throw Pillows"
                      value={features}
                      onChange={(e) => setFeatures(e.target.value)}
                      style={{ width: "100%", padding: "0.8rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8fafc" }}
                    />
                  </div>

                  <button type="submit" className="btn btn-sapphire" style={{ padding: "0.95rem", marginTop: "0.5rem" }}>
                    <Plus size={18} className="text-gold" />
                    <span>{t.ownerPortal.publishBtn}</span>
                  </button>
                </form>
              </div>

              {/* Right Live Preview Card */}
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>
                  Live Visitor Card Preview
                </div>

                <div
                  className="glass-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid var(--border-gold)",
                    background: "#ffffff",
                    boxShadow: "0 8px 30px rgba(11, 19, 43, 0.08)"
                  }}
                >
                  <div style={{ position: "relative", height: "300px", overflow: "hidden", background: "#0b132b" }}>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: "rgba(11, 19, 43, 0.9)",
                        color: "#d4af37",
                        padding: "0.35rem 0.85rem",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.76rem",
                        fontWeight: 800
                      }}
                    >
                      NEW WORKSHOP PROJECT
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "1rem",
                        background: "rgba(255, 255, 255, 0.95)",
                        color: "var(--sapphire-dark)",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem"
                      }}
                    >
                      <MapPin size={13} className="text-gold" /> {location || "Direct Workshop Delivery"}
                    </div>
                  </div>

                  <div style={{ padding: "1.75rem" }}>
                    <div style={{ fontSize: "0.78rem", color: "var(--gold-primary)", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.35rem" }}>
                      {category} • {type.toUpperCase()}
                    </div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)", marginBottom: "0.6rem" }}>
                      {title || "Custom Handcrafted Furniture Project"}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {description || "Custom handcrafted in our manufacturing workshop using 100% solid 18mm plywood framing."}
                    </p>
                    <div style={{ fontSize: "0.82rem", color: "var(--sapphire-dark)", fontWeight: 700, padding: "0.5rem 0.75rem", background: "#f8fafc", borderRadius: "6px" }}>
                      Material Spec: <span className="text-gold-gradient">{tier}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manage Uploaded Projects List */}
            <div style={{ marginTop: "3rem" }}>
              <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)", marginBottom: "1.25rem" }}>
                {t.ownerPortal.manageTitle}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {worksList.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card"
                    style={{ padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "center", background: "#ffffff" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "70px", height: "70px", borderRadius: "8px", objectFit: "cover" }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--sapphire-dark)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        {item.clientLocation}
                      </div>
                      {item.id.startsWith("custom-") && (
                        <button
                          onClick={() => handleDeleteCustomProject(item.id)}
                          style={{
                            marginTop: "0.4rem",
                            background: "none",
                            border: "none",
                            color: "#d9534f",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontWeight: 700
                          }}
                        >
                          <Trash2 size={12} /> {t.ownerPortal.deleteBtn}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
