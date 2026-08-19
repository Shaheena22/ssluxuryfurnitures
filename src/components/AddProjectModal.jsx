import React, { useState } from "react";
import { X, Upload, Plus, ShieldCheck, Sparkles, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { saveOwnerProject } from "../data/products";

export default function AddProjectModal({ onClose, onProjectAdded }) {
  const [pin, setPin] = useState("");
  const [pinVerified, setPinVerified] = useState(false);
  const [pinError, setPinError] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Category I");
  const [type, setType] = useState("sofa");
  const [tier, setTier] = useState("Medium Tier (Recommended)");
  const [location, setLocation] = useState("Direct Workshop Project");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [imagePreview, setImagePreview] = useState("/images/hero_sofa.jpg");

  const handleVerifyPin = (e) => {
    e.preventDefault();
    if (pin.trim() === "Sammu1926") {
      setPinVerified(true);
      setPinError("");
    } else {
      setPinError("Incorrect Owner PIN. Please try again.");
    }
  };

  // Handle image file upload (converts to Base64 Data URL)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in the project title and description.");
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

    const updatedList = saveOwnerProject(newProject);
    if (onProjectAdded) onProjectAdded(updatedList);
    
    // Trigger custom window event for instant state refresh across components
    window.dispatchEvent(new Event("owner-project-added"));
    alert("🎉 New Workshop Project Successfully Published to Gallery!");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "720px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#ffffff",
          border: "2px solid var(--gold-primary)",
          padding: "2.25rem",
          position: "relative",
          borderRadius: "var(--radius-lg)",
          boxShadow: "0 25px 60px rgba(44, 30, 22, 0.35)"
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "#f7f3ed",
            border: "1px solid var(--border-medium)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            color: "var(--walnut-dark)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Step 1: Owner Verification PIN */}
        {!pinVerified ? (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div style={{ background: "rgba(184, 142, 54, 0.15)", width: "64px", height: "64px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem auto", color: "var(--gold-primary)" }}>
              <ShieldCheck size={36} />
            </div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "var(--font-serif)", color: "var(--walnut-dark)", marginBottom: "0.5rem" }}>
              Owner Upload Portal — S. Shashavali
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              Enter Owner Verification Secret PIN to add new workshop delivery photos to the gallery.
            </p>

            <form onSubmit={handleVerifyPin} style={{ maxWidth: "400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input
                type="password"
                required
                placeholder="Enter Secret Owner PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem 1.2rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-medium)",
                  background: "#f8f4ee",
                  color: "var(--walnut-dark)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textAlign: "center",
                  outline: "none"
                }}
              />
              {pinError && (
                <div style={{ color: "#d9534f", fontSize: "0.85rem", fontWeight: 600 }}>{pinError}</div>
              )}
              <button type="submit" className="btn btn-gold" style={{ padding: "0.95rem" }}>
                <Sparkles size={18} />
                <span>Verify & Access Upload Portal</span>
              </button>
            </form>
          </div>
        ) : (
          /* Step 2: Upload Project Form */
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--gold-primary)", fontWeight: 800, fontSize: "0.9rem", marginBottom: "0.4rem" }}>
              <Sparkles size={16} /> VERIFIED OWNER ACCESS • S. SHASHAVALI
            </div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 700, fontFamily: "var(--font-serif)", color: "var(--walnut-dark)", marginBottom: "1.5rem" }}>
              Add New Workshop Delivery Project
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              
              {/* Image Preview & Upload */}
              <div style={{ background: "#f8f4ee", border: "1px dashed var(--border-medium)", padding: "1.25rem", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                <div style={{ width: "100%", height: "200px", borderRadius: "var(--radius-sm)", overflow: "hidden", marginBottom: "1rem", background: "#e9e2d7" }}>
                  <img src={imagePreview} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                  <label className="btn btn-gold" style={{ padding: "0.65rem 1.25rem", fontSize: "0.85rem", cursor: "pointer" }}>
                    <Upload size={16} /> Choose Photo File
                    <input type="file" accept="image/*" onChange={handleImageFile} style={{ display: "none" }} />
                  </label>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>OR paste image URL below</span>
                </div>

                <input
                  type="text"
                  placeholder="Paste Image Web URL (optional)"
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
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--walnut-dark)", marginBottom: "0.35rem" }}>
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Blue L-Shape Sofa Set"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-medium)",
                      background: "#f8f4ee",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--walnut-dark)", marginBottom: "0.35rem" }}>
                    Client Location / Order Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Villa 12 Residence Order"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-medium)",
                      background: "#f8f4ee",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              {/* Category & Type */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--walnut-dark)", marginBottom: "0.35rem" }}>
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8f4ee" }}
                  >
                    <option>Category I</option>
                    <option>Category II</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--walnut-dark)", marginBottom: "0.35rem" }}>
                    Furniture Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8f4ee" }}
                  >
                    <option value="sofa">Sofa Set</option>
                    <option value="headboard">Cot Headboard</option>
                    <option value="teapoy">Tea-poy</option>
                    <option value="cushions">Cushion / Mattress</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--walnut-dark)", marginBottom: "0.35rem" }}>
                    Material Tier Used
                  </label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8f4ee" }}
                  >
                    <option>Basic Tier (32D Foam)</option>
                    <option>Medium Tier (Recommended)</option>
                    <option>Premium Tier (Relax Well HD Foam)</option>
                  </select>
                </div>
              </div>

              {/* Description & Key Specs */}
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--walnut-dark)", marginBottom: "0.35rem" }}>
                  Project Description *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe the model, seating capacity, wood framing, fabric texture..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8f4ee" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--walnut-dark)", marginBottom: "0.35rem" }}>
                  Key Features (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 18mm Plywood Frame, 32D Foam Core, Includes 5 Throw Pillows"
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-medium)", background: "#f8f4ee" }}
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ padding: "1rem", marginTop: "0.5rem" }}>
                <Plus size={18} />
                <span>Publish Workshop Project to Live Gallery</span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
