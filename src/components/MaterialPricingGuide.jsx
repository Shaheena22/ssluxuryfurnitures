import React, { useState } from "react";
import { MATERIAL_TIERS, STRUCTURAL_NOTE, PRODUCT_TYPES_FOR_CALCULATOR } from "../data/materials";
import { Sparkles, Calculator, ShieldCheck, MessageCircle, Percent, ArrowRight, CheckCircle2, Sliders } from "lucide-react";

export default function MaterialPricingGuide() {
  const [selectedProdId, setSelectedProdId] = useState("sofa-5-seater");
  const [selectedPlyGrade, setSelectedPlyGrade] = useState("bwp"); // commercial, bwp, marine
  const [selectedFoamGrade, setSelectedFoamGrade] = useState("medium"); // normal, medium, relaxwell
  const [selectedFabricGrade, setSelectedFabricGrade] = useState("medium"); // standard, velvet, imported

  const currentProd = PRODUCT_TYPES_FOR_CALCULATOR.find((p) => p.id === selectedProdId) || PRODUCT_TYPES_FOR_CALCULATOR[1];

  // Pricing maps
  const plyPrices = { commercial: 65, bwp: 85, marine: 110 };
  const plyNames = { commercial: "18mm Commercial Ply", bwp: "18mm BWP Waterproof Ply", marine: "18mm Marine Hardwood Ply" };

  const foamPrices = { normal: 260, medium: 430, relaxwell: 620 };
  const foamNames = { normal: "Normal Densheet (32D)", medium: "Medium Densheet (32D)", relaxwell: "Relax Well HD Foam" };

  const fabricPrices = { standard: 500, velvet: 750, imported: 950 };
  const fabricNames = { standard: "Standard Microfiber", velvet: "Stain-Resistant Velvet/Suede", imported: "Imported Royal Velvet" };

  // Calculate customized budget
  const plyCost = currentProd.approxPlywoodSqft * plyPrices[selectedPlyGrade];
  const foamCost = currentProd.approxFoamSqft * foamPrices[selectedFoamGrade];
  const fabricCost = currentProd.approxFabricMetre * fabricPrices[selectedFabricGrade];
  const totalEstimatedMaterial = plyCost + foamCost + fabricCost;
  const estimatedRetailShowroomPrice = Math.round(totalEstimatedMaterial * 1.55);
  const estimatedSavings = estimatedRetailShowroomPrice - totalEstimatedMaterial;

  const plyPercent = Math.round((plyCost / totalEstimatedMaterial) * 100);
  const foamPercent = Math.round((foamCost / totalEstimatedMaterial) * 100);
  const fabricPercent = 100 - plyPercent - foamPercent;

  const calculatorWaMsg = encodeURIComponent(
    `Hello S.S Luxury Furnishings (S. Shashavali),\n\nI generated a Custom Digital Spec Sheet on your website:\n- Furniture Model: ${currentProd.name}\n- Framing: ${plyNames[selectedPlyGrade]}\n- Cushion Foam: ${foamNames[selectedFoamGrade]}\n- Upholstery Fabric: ${fabricNames[selectedFabricGrade]}\n- Estimated Direct Workshop Cost: ₹${totalEstimatedMaterial.toLocaleString('en-IN')}\n\nPlease verify measurements and share fabric catalogue swatches.`
  );

  return (
    <section id="pricing" className="section-padding" style={{ position: "relative", background: "radial-gradient(circle at 50% 0%, #ffffff 0%, #f8fafc 100%)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} className="text-gold" />
            <span style={{ color: "var(--sapphire-dark)", fontWeight: 800 }}>LIVE DIGITAL STUDIO CONFIGURATOR</span>
          </div>
          <h2 className="section-title">
            Bespoke Studio <span className="text-gold-gradient">Configurator</span>
          </h2>
          <p className="section-description">
            Customize your furniture's framing, foam core, and fabric grade in real-time to inspect exact material costs with 100% pricing transparency.
          </p>
        </div>

        {/* Structural Guarantee Banner */}
        <div
          style={{
            background: "rgba(7, 11, 25, 0.04)",
            border: "1px solid var(--border-gold)",
            padding: "1.5rem 2rem",
            borderRadius: "var(--radius-md)",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "4.5rem"
          }}
        >
          <div style={{ background: "var(--sapphire-gradient)", color: "#f3c64a", padding: "0.75rem", borderRadius: "14px", display: "flex", boxShadow: "0 6px 20px rgba(7, 11, 25, 0.2)" }}>
            <ShieldCheck size={28} />
          </div>
          <div style={{ fontSize: "1.02rem", color: "var(--sapphire-dark)", lineHeight: 1.5, fontWeight: 600 }}>
            <strong style={{ color: "var(--gold-primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Structural Guarantee Note:</strong>{" "}
            "{STRUCTURAL_NOTE}"
          </div>
        </div>

        {/* Live Studio Configurator Studio Card */}
        <div
          className="glass-card"
          style={{
            padding: "3rem",
            background: "#ffffff",
            border: "1px solid var(--border-medium)",
            boxShadow: "var(--shadow-light)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.25rem", marginBottom: "2.5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--sapphire-dark)", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.4rem" }}>
                <Sliders size={22} className="text-gold" /> LIVE DIGITAL SPECIFICATION BUILDER
              </div>
              <h3 style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)", margin: 0 }}>
                Build & Estimate Your Custom Furniture
              </h3>
            </div>

            <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid var(--emerald-primary)", padding: "0.55rem 1.2rem", borderRadius: "var(--radius-full)", color: "var(--emerald-dark)", fontSize: "0.88rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Percent size={16} /> Save ~35% Direct vs Showroom Markups
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "3rem" }}>
            {/* Left Column: 4 Step Interactive Customizer Controls */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              
              {/* Step 1: Model */}
              <div>
                <label style={{ display: "block", fontSize: "0.92rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.75rem" }}>
                  1. Select Furniture Item & Dimensions:
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.6rem" }}>
                  {PRODUCT_TYPES_FOR_CALCULATOR.map((p) => {
                    const isSel = selectedProdId === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProdId(p.id)}
                        style={{
                          padding: "0.8rem 0.6rem",
                          borderRadius: "var(--radius-sm)",
                          border: isSel ? "1px solid var(--gold-accent)" : "1px solid var(--border-subtle)",
                          background: isSel ? "var(--sapphire-gradient)" : "#f8fafc",
                          color: isSel ? "#ffffff" : "var(--sapphire-dark)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Plywood Grade */}
              <div>
                <label style={{ display: "block", fontSize: "0.92rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.75rem" }}>
                  2. Choose 18mm Plywood Framing Grade:
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem" }}>
                  {[
                    { id: "commercial", label: "Commercial Ply", price: "₹65/sqft" },
                    { id: "bwp", label: "BWP Waterproof", price: "₹85/sqft" },
                    { id: "marine", label: "Marine Hardwood", price: "₹110/sqft" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedPlyGrade(item.id)}
                      style={{
                        padding: "0.85rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                        border: selectedPlyGrade === item.id ? "1px solid var(--gold-accent)" : "1px solid var(--border-subtle)",
                        background: selectedPlyGrade === item.id ? "var(--sapphire-gradient)" : "#f8fafc",
                        color: selectedPlyGrade === item.id ? "#ffffff" : "var(--sapphire-dark)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div>{item.label}</div>
                      <div style={{ fontSize: "0.72rem", color: selectedPlyGrade === item.id ? "#f3c64a" : "var(--text-muted)", marginTop: "2px" }}>
                        {item.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Foam Density */}
              <div>
                <label style={{ display: "block", fontSize: "0.92rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.75rem" }}>
                  3. Select Cushion Foam Core Density:
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem" }}>
                  {[
                    { id: "normal", label: "Normal 32D", price: "₹260/sqft" },
                    { id: "medium", label: "Medium 32D", price: "₹430/sqft" },
                    { id: "relaxwell", label: "Relax Well HD", price: "₹620/sqft" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedFoamGrade(item.id)}
                      style={{
                        padding: "0.85rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                        border: selectedFoamGrade === item.id ? "1px solid var(--gold-accent)" : "1px solid var(--border-subtle)",
                        background: selectedFoamGrade === item.id ? "var(--sapphire-gradient)" : "#f8fafc",
                        color: selectedFoamGrade === item.id ? "#ffffff" : "var(--sapphire-dark)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div>{item.label}</div>
                      <div style={{ fontSize: "0.72rem", color: selectedFoamGrade === item.id ? "#f3c64a" : "var(--text-muted)", marginTop: "2px" }}>
                        {item.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Fabric Category */}
              <div>
                <label style={{ display: "block", fontSize: "0.92rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.75rem" }}>
                  4. Choose Upholstery Fabric Category:
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem" }}>
                  {[
                    { id: "standard", label: "Standard Woven", price: "~₹500/m" },
                    { id: "velvet", label: "Velvet / Suede", price: "~₹750/m" },
                    { id: "imported", label: "Imported Royal Velvet", price: "~₹950/m" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedFabricGrade(item.id)}
                      style={{
                        padding: "0.85rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                        border: selectedFabricGrade === item.id ? "1px solid var(--gold-accent)" : "1px solid var(--border-subtle)",
                        background: selectedFabricGrade === item.id ? "var(--sapphire-gradient)" : "#f8fafc",
                        color: selectedFabricGrade === item.id ? "#ffffff" : "var(--sapphire-dark)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div>{item.label}</div>
                      <div style={{ fontSize: "0.72rem", color: selectedFabricGrade === item.id ? "#f3c64a" : "var(--text-muted)", marginTop: "2px" }}>
                        {item.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Live Spec Sheet Output Card */}
            <div
              style={{
                background: "rgba(7, 11, 25, 0.03)",
                border: "1px solid var(--border-gold)",
                borderRadius: "var(--radius-md)",
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ fontSize: "0.82rem", textTransform: "uppercase", color: "var(--gold-primary)", letterSpacing: "0.08em", fontWeight: 800, marginBottom: "0.3rem" }}>
                  CUSTOM DIGITAL SPEC SHEET
                </div>

                <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--sapphire-dark)", fontFamily: "var(--font-serif)", marginBottom: "0.85rem" }}>
                  {currentProd.name}
                </div>

                {/* Price Display */}
                <div style={{ fontSize: "2.6rem", fontWeight: 900, color: "var(--sapphire-dark)", lineHeight: 1, marginBottom: "0.3rem" }}>
                  ₹{totalEstimatedMaterial.toLocaleString('en-IN')}{" "}
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500 }}>(approx.)</span>
                </div>

                <div style={{ fontSize: "0.88rem", color: "var(--emerald-dark)", fontWeight: 800, marginBottom: "1.5rem" }}>
                  Showroom Retail Price: ~₹{estimatedRetailShowroomPrice.toLocaleString('en-IN')} (Saved ₹{estimatedSavings.toLocaleString('en-IN')})
                </div>

                {/* Visual Progress Bar Breakdown */}
                <div style={{ marginBottom: "1.75rem", background: "#ffffff", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--sapphire-dark)", marginBottom: "0.5rem", display: "flex", justifyContent: "space-between" }}>
                    <span>Cost Breakdown</span>
                    <span>Plywood {plyPercent}% • Foam {foamPercent}% • Fabric {fabricPercent}%</span>
                  </div>
                  <div style={{ height: "10px", borderRadius: "5px", overflow: "hidden", display: "flex", background: "#e2e8f0" }}>
                    <div style={{ width: `${plyPercent}%`, background: "#070b19" }} title={`Plywood: ${plyPercent}%`} />
                    <div style={{ width: `${foamPercent}%`, background: "#f3c64a" }} title={`Foam: ${foamPercent}%`} />
                    <div style={{ width: `${fabricPercent}%`, background: "#10b981" }} title={`Fabric: ${fabricPercent}%`} />
                  </div>
                </div>

                {/* Spec List */}
                <div style={{ fontSize: "0.9rem", color: "var(--text-main)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Framing: <strong>{plyNames[selectedPlyGrade]}</strong></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Foam Core: <strong>{foamNames[selectedFoamGrade]}</strong></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Upholstery: <strong>{fabricNames[selectedFabricGrade]}</strong></span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/919553631317?text=${calculatorWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ marginTop: "2rem", width: "100%", padding: "1.1rem" }}
              >
                <MessageCircle size={18} />
                <span>Send Spec Sheet to Owner on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
