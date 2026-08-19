export const CATEGORIES = {
  CAT_1: "Category I: Main Living & Seating",
  CAT_2: "Category II: Bedding, Dining & Custom Cushions",
  REAL: "Real Client Deliveries (Verified Workshop Projects)",
};

export const INITIAL_REAL_WORKS = [
  {
    id: "real-grey-l-sofa",
    title: "Custom Grey Fabric L-Shape Sectional with Motif Pillows",
    category: "Category I",
    type: "sofa",
    subtitle: "Real Client Delivery • Living Room Project",
    description: "Custom built 6-seater corner sofa crafted in premium grey woven upholstery with high-density foam seating and matching botanical motif throw cushions.",
    image: "/images/real_works/real_grey_l_sofa.jpg",
    isRealWork: true,
    clientLocation: "Custom Residence Delivery",
    features: [
      "Solid 18mm Plywood Internal Frame",
      "32D High-Resilience Density Foam",
      "Ergonomic Back Rest & Padded Arms",
      "Includes 6 Custom Designer Throw Pillows"
    ],
    recommendedTier: "Medium Tier (BWP Plywood + 32D Foam)",
    popular: true
  },
  {
    id: "real-taupe-l-sofa",
    title: "Modern Textured Velvet Taupe L-Corner Sofa",
    category: "Category I",
    type: "sofa",
    subtitle: "Real Client Delivery • Family Lounge",
    description: "Elegant L-shape lounge sectional wrapped in plush taupe textured velvet fabric with metallic support feet and soft cream accent pillows.",
    image: "/images/real_works/real_taupe_l_sofa.jpg",
    isRealWork: true,
    clientLocation: "Delivered Custom Order",
    features: [
      "Heavy-Duty 18mm Plywood Framing",
      "Soft-Touch Stain-Resistant Velvet",
      "Plush Lumbar Support Cushions",
      "Stainless Steel Chrome Accent Legs"
    ],
    recommendedTier: "Medium / Premium Tier",
    popular: true
  },
  {
    id: "real-turquoise-sofa",
    title: "Turquoise Blue & Dark Velvet 3-Seater Straight Sofa",
    category: "Category I",
    type: "sofa",
    subtitle: "Real Client Delivery • Workshop Crafted",
    description: "Bold dual-tone straight sofa suite featuring rich dark chocolate velvet seating with vibrant turquoise blue armrests and 3 accent cushions.",
    image: "/images/real_works/real_turquoise_sofa.jpg",
    isRealWork: true,
    clientLocation: "Direct Workshop Unit Project",
    features: [
      "100% Solid 18mm Plywood Structure",
      "High Density 32D Foam Core",
      "Vibrant Contrast Color Upholstery",
      "Compact 3-Seater Dimensions"
    ],
    recommendedTier: "Basic / Medium Tier",
    popular: false
  },
  {
    id: "real-beige-magenta-sofa",
    title: "Grand Beige Velvet Corner Sofa with Magenta Pillows & Tea-Poy",
    category: "Category I",
    type: "sofa",
    subtitle: "Real Client Delivery • Grand Living Suite",
    description: "Spacious 7-seater corner sectional in warm beige velvet accompanied by rich magenta velvet cushions and a matching custom tea-poy coffee table.",
    image: "/images/real_works/real_beige_magenta_sofa.jpg",
    isRealWork: true,
    clientLocation: "Luxury Residence Delivery",
    features: [
      "Solid 18mm Marine Plywood Framing",
      "Relax Well HD Foam Cushions",
      "Includes Custom Tea-Poy Table",
      "6 Deep Magenta Velvet Throw Pillows"
    ],
    recommendedTier: "Premium Tier (Relax Well HD Foam)",
    popular: true
  },
  {
    id: "real-beige-magenta-lounge",
    title: "Beige Velvet L-Lounge Sectional Sofa Suite",
    category: "Category I",
    type: "sofa",
    subtitle: "Real Client Delivery • Full Hall Setup",
    description: "Full length L-lounge seating suite showcasing clean linear stitching, thick density padding, and polished marble floor reflection aesthetics.",
    image: "/images/real_works/real_beige_magenta_lounge.jpg",
    isRealWork: true,
    clientLocation: "Delivered Client Hall",
    features: [
      "Seamless Corner L-Lounge Layout",
      "Heavy-Duty Plywood Structural Frame",
      "Waterproof BWP Material Layering",
      "Custom Cushion Piping Detailing"
    ],
    recommendedTier: "Medium / Premium Tier",
    popular: false
  },
  {
    id: "real-l-corner-sofa",
    title: "Dual-Tone L-Shape Corner Sofa with Accent Pillows",
    category: "Category I",
    type: "sofa",
    subtitle: "Real Client Delivery • Living Room Project",
    description: "Custom built dual-tone corner sectional featuring high-resilience grey seat padding, pastel base wrap, and 5 vibrant accent throw cushions.",
    image: "/images/real_works/real_l_corner_sofa.jpg",
    isRealWork: true,
    clientLocation: "Delivered Custom Order",
    features: [
      "100% Solid 18mm Plywood Frame",
      "High-Density 32D Cushion Cores",
      "Dual-Tone Stain-Resistant Fabric",
      "Includes 5 Custom Throw Pillows"
    ],
    recommendedTier: "Medium Tier",
    popular: true
  },
  {
    id: "real-black-tufted-bed",
    title: "Grand Black Diamond-Tufted Bed with Integrated Mirrors",
    category: "Category II",
    type: "headboard",
    subtitle: "Real Client Delivery • Master Bedroom",
    description: "Floor-to-ceiling custom black diamond-tufted backboard featuring integrated full-length vanity mirrors and matching padded nightstand drawers.",
    image: "/images/real_works/real_black_tufted_bed.jpg",
    isRealWork: true,
    clientLocation: "Master Bedroom Suite Order",
    features: [
      "Hand-Tufted Diamond Velvet Upholstery",
      "Built-in Full Length Mirror Panels",
      "Heavy-Duty Slatted Base Frame",
      "Matching 2-Drawer Nightstands"
    ],
    recommendedTier: "Premium Tier",
    popular: true
  },
  {
    id: "real-pattern-sofa-set",
    title: "Classic Printed & Striped Fabric 3+2 Sofa Suite",
    category: "Category I",
    type: "sofa",
    subtitle: "Real Client Delivery • Custom 5-Seater Suite",
    description: "Handcrafted 3-seater and 2-seater sofa suite upholstered in textured jacquard print with complementary pinstriped seating.",
    image: "/images/real_works/real_pattern_sofa_set.jpg",
    isRealWork: true,
    clientLocation: "Family Living Room Order",
    features: [
      "Heavy Duty 18mm Plywood Structure",
      "Medium Densheet Padding",
      "Matching Patterned Back Pillows",
      "Chrome Support Legs"
    ],
    recommendedTier: "Basic / Medium Tier",
    popular: false
  },
  {
    id: "real-grey-fluted-headboard",
    title: "Modern Vertical Fluted Grey Headboard with LED Channel",
    category: "Category II",
    type: "headboard",
    subtitle: "Real Client Delivery • Luxury Bedroom Wall",
    description: "Sleek slate grey fluted channel wall headboard with ambient backlit warm LED strip lighting and minimalist floating side tables.",
    image: "/images/real_works/real_grey_fluted_headboard.jpg",
    isRealWork: true,
    clientLocation: "Luxury Villa Project",
    features: [
      "Vertical Fluted Upholstered Panel Wall",
      "Warm Architectural Backlit LED Channel",
      "Custom Floating Bedside Nightstands",
      "Premium Velvet Finish"
    ],
    recommendedTier: "Premium Tier",
    popular: true
  },
  {
    id: "real-beige-fluted-bed",
    title: "Warm Beige Velvet Cot with Integrated Footrest Bench",
    category: "Category II",
    type: "headboard",
    subtitle: "Real Client Delivery • Master Bed & Bench",
    description: "Bespoke warm cream-beige velvet bed with tall vertical panel backboard, matching channel-upholstered footrest bench, and wooden slat wall inserts.",
    image: "/images/real_works/real_beige_fluted_bed.jpg",
    isRealWork: true,
    clientLocation: "Custom Residence Order",
    features: [
      "Tall Vertical Segmented Headboard",
      "Matching Cylindrical Channel Footbench",
      "Side Fluted Wood Wall Panel Extensions",
      "Luxurious Velvet Touch Fabric"
    ],
    recommendedTier: "Medium / Premium Tier",
    popular: true
  }
];

export const CATALOGUE_DESIGNS = [
  {
    id: "sofa-corner-l",
    title: "Bespoke L-Shape Sectional Living Suite",
    category: "Category I",
    type: "sofa",
    subtitle: "Catalogue Reference Model",
    description: "Modular corner sofa set with solid 18mm plywood framing, high-density foam cushions, and premium stain-resistant velvet fabric.",
    image: "/images/hero_sofa.jpg",
    isRealWork: false,
    features: [
      "Custom L-Shape & U-Shape Configurations",
      "Solid 18mm Plywood Frame Structure",
      "Ergonomic Back Support & Plush Cushions",
      "Over 200+ Fabric Shades Available"
    ],
    recommendedTier: "Premium / Medium",
    popular: true
  },
  {
    id: "sofa-chesterfield-royal",
    title: "Royal Chesterfield Velvet Sofa Set",
    category: "Category I",
    type: "sofa",
    subtitle: "Catalogue Reference Model",
    description: "Timeless tufted chesterfield sofa made with precision craftsmanship. Features hand-knotted deep buttoning and brass stud detailing.",
    image: "/images/chesterfield.jpg",
    isRealWork: false,
    features: [
      "Hand-Tufted Deep Buttoning",
      "Solid Wood Legs with Brass Accent Cap",
      "High-Resilience Density Foam"
    ],
    recommendedTier: "Premium",
    popular: true
  },
  {
    id: "teapoy-marble-walnut",
    title: "Handcrafted Designer Tea-Poy (Tpie)",
    category: "Category I",
    type: "teapoy",
    subtitle: "Catalogue Reference Model",
    description: "Custom built tea-poy coffee table with champagne gold accents, solid hardwood framing, and polished marble top.",
    image: "/images/teapoy.jpg",
    isRealWork: false,
    features: [
      "Solid Wood Base with Gold Metal Inlay",
      "Choice of Italian Marble or Hardwood Top",
      "Custom Sizing for your Living Room Space"
    ],
    recommendedTier: "Medium / Premium",
    popular: false
  },
  {
    id: "tufted-cot-headboard",
    title: "Custom Velvet Upholstered Cot Backboard",
    category: "Category II",
    type: "headboard",
    subtitle: "Catalogue Reference Model",
    description: "Wall-mounted headboard featuring luxury vertical channel padding or diamond tufting with integrated warm LED backlit options.",
    image: "/images/headboard.jpg",
    isRealWork: false,
    features: [
      "Custom Sizing for King, Queen, or Single Cots",
      "Warm Backlit LED Light Channel Option",
      "Diamond Tufted or Vertical Fluted Styling"
    ],
    recommendedTier: "Medium / Premium",
    popular: true
  },
  {
    id: "window-side-cushions",
    title: "Custom Window-Side Seat Nook Cushions",
    category: "Category II",
    type: "window",
    subtitle: "Catalogue Reference Model",
    description: "Transform window ledges into luxurious relaxation nooks with precision-cut thick foam mattresses wrapped in cotton-linen or soft velvet.",
    image: "/images/cushions.jpg",
    isRealWork: false,
    features: [
      "Precision Corner Cut for Bay Windows",
      "Includes Matching Bolsters & Back Cushions",
      "Relax Well HD Foam Options"
    ],
    recommendedTier: "Medium / Premium",
    popular: true
  }
];

// Helper to get real works dynamically from localStorage + initial set
export function getStoredRealWorks() {
  try {
    const custom = localStorage.getItem("ss_custom_real_works");
    if (custom) {
      const parsed = JSON.parse(custom);
      return [...parsed, ...INITIAL_REAL_WORKS];
    }
  } catch (e) {
    console.error("Error loading stored real works", e);
  }
  return INITIAL_REAL_WORKS;
}

// Helper to add a new owner project
export function saveOwnerProject(newProject) {
  try {
    const existing = localStorage.getItem("ss_custom_real_works");
    let list = existing ? JSON.parse(existing) : [];
    list = [newProject, ...list];
    localStorage.setItem("ss_custom_real_works", JSON.stringify(list));
    return [...list, ...INITIAL_REAL_WORKS];
  } catch (e) {
    console.error("Error saving owner project", e);
    return INITIAL_REAL_WORKS;
  }
}

export const REAL_WORKS = getStoredRealWorks();
export const PRODUCTS = [...REAL_WORKS, ...CATALOGUE_DESIGNS];
