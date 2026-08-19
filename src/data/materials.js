export const MATERIAL_TIERS = {
  basic: {
    name: "Basic Tier",
    tagline: "Budget-Friendly & Durable",
    badge: "Cost-Effective Choice",
    plywood: { name: "18mm Commercial Grade Plywood", price: 65, unit: "sq.ft" },
    foam: { name: "Normal Densheet Foam (32D)", price: 260, unit: "sq.ft", details: "Standard 32 density foam cushion" },
    fabric: { name: "Standard Upholstery Fabric", priceRange: "₹400 – ₹600", avgPrice: 500, unit: "metre", details: "Durable woven polyester & chenille textures" },
    framing: "18mm Heavy-Duty Plywood Framing",
    durability: "3 – 5 Years Recommended Lifespan"
  },
  medium: {
    name: "Medium Tier",
    tagline: "Balanced Comfort & High Resilience",
    badge: "Most Popular Choice",
    plywood: { name: "18mm BWP Waterproof Plywood", price: 85, unit: "sq.ft" },
    foam: { name: "Medium Densheet Foam (32D Plus)", price: 430, unit: "sq.ft", details: "Enhanced bounce & medium-firm density" },
    fabric: { name: "Premium Velvet & Textured Linen", priceRange: "₹700 – ₹800", avgPrice: 750, unit: "metre", details: "Stain-resistant velvet, suede & jacquard weaves" },
    framing: "18mm Waterproof Plywood Framing",
    durability: "7 – 10 Years Recommended Lifespan"
  },
  premium: {
    name: "Premium Tier",
    tagline: "Ultra Luxury & Lifetime Craftsmanship",
    badge: "Royal Comfort Tier",
    plywood: { name: "18mm Marine Grade Hardwood Plywood", price: 110, unit: "sq.ft" },
    foam: { name: "Relax Well Company Foam (HD)", price: 620, unit: "sq.ft", details: "High-density Relax Well HD foam for maximum lumbar luxury" },
    fabric: { name: "Imported Royal Fabrics & Pure Leatherette", priceRange: "₹900+", avgPrice: 1050, unit: "metre", details: "Imported luxury velvets, bouclé & anti-scratch suede" },
    framing: "18mm Marine Grade Solid Plywood Framing",
    durability: "12+ Years Guarantee Lifespan"
  }
};

export const STRUCTURAL_NOTE = "Only 18mm plywood is used for structural framing. Final product quality depends entirely on the material tier you choose.";

export const PRODUCT_TYPES_FOR_CALCULATOR = [
  { id: "sofa-3-seater", name: "3-Seater Straight Sofa", approxPlywoodSqft: 45, approxFoamSqft: 25, approxFabricMetre: 14 },
  { id: "sofa-5-seater", name: "5-Seater Sofa Set (3+1+1)", approxPlywoodSqft: 75, approxFoamSqft: 45, approxFabricMetre: 22 },
  { id: "sofa-l-shape", name: "L-Shape Corner Sofa Set (6-7 Seater)", approxPlywoodSqft: 105, approxFoamSqft: 65, approxFabricMetre: 30 },
  { id: "teapoy", name: "Designer Coffee Table / Tea-poy", approxPlywoodSqft: 18, approxFoamSqft: 4, approxFabricMetre: 3 },
  { id: "headboard-king", name: "King Size Cot Headboard", approxPlywoodSqft: 36, approxFoamSqft: 24, approxFabricMetre: 7 },
  { id: "dining-bench", name: "Dining Table Bench Cushion", approxPlywoodSqft: 12, approxFoamSqft: 12, approxFabricMetre: 4 },
  { id: "window-nook", name: "Window-Side Nook Seat Mattress", approxPlywoodSqft: 20, approxFoamSqft: 18, approxFabricMetre: 6 }
];
