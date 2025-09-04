import hero1 from "../assets/sareehero.png";
import hero2 from "../assets/Bangle.jpg";
import hero3 from "../assets/blousehero.jpg";
import hero4 from "../assets/Bridal.jpg";
import hero5 from "../assets/hero1.webp";
import hero6 from "../assets/rowater.jpg";

export const slides = [
  { title: "Saree Pre-Pleating & Draping", text: "Expert saree pre-pleating and draping service to give you a graceful, flawless look for any occasion.", img: hero1 },
  { title: "Thread Bangle Making", text: "Handcrafted thread bangles customized to match your attire and event theme.", img: hero2 },
  { title: "Blouse Designing", text: "Beautiful, trendy, and traditional blouse designs tailored to your personality and style.", img: hero3 },
  { title: "Bridal Makeup & Styling", text: "Professional bridal makeup and styling that enhances your natural beauty.", img: hero4 },
  { title: "Mehndi Art", text: "Intricate and elegant mehndi designs to make your celebrations even more special.", img: hero5 },
  { title: "RO Water Fixing & Service", text: "Reliable RO water purifier installation and maintenance to ensure clean and safe drinking water at all times.", img: hero6 },
];

export const serviceDetails = {
  "Saree Pre-Pleating & Draping": {
    includes: ["Pre-pleating for perfect fall", "Draping styles: Traditional, Lehenga, Cocktail", "Pinning & finishing touches"],
    idealFor: ["Weddings", "Receptions", "Festivals", "Photoshoots"],
    duration: "45–60 minutes (per saree)",
    note: "Carry matching safety pins and accessories if needed.",
    addOns: ["Blouse steam/press", "Hair accessory placement"],
  },
  "Thread Bangle Making": {
    includes: ["Color-matched threads & embellishments", "Custom sizes for perfect fit", "Design preview before finish"],
    idealFor: ["Bridal sets", "Return gifts", "Festive wear"],
    duration: "1–2 days depending on quantity",
    note: "Share outfit photos for best color match.",
    addOns: ["Name/initial charms", "Stone work"],
  },
  "Blouse Designing": {
    includes: ["Design consultation (neck, sleeves, back)", "Pattern cutting & fitting", "Basic lining & finishing"],
    idealFor: ["Saree/Lehenga blouses", "Bridal blouses"],
    duration: "3–7 days (design & stitching)",
    note: "1–2 trials recommended for perfect fit.",
    addOns: ["Maggam/embroidery", "Padded cups", "Latkans"],
  },
  "Bridal Makeup & Styling": {
    includes: ["HD makeup & basic hairstyle", "Lashes & draping support", "Touch-up kit suggestions"],
    idealFor: ["Engagement", "Muhurtam", "Reception", "Photoshoot"],
    duration: "90–150 minutes",
    note: "Share skin sensitivities in advance.",
    addOns: ["Airbrush", "Hair extensions", "Mehndi coordination"],
  },
  "Mehndi Art": {
    includes: ["Design options: Arabic, Traditional, Bridal", "After-care guidance", "Stain-enhancing tips"],
    idealFor: ["Bridal", "Sangeet", "Festivals"],
    duration: "30–180 minutes (design-dependent)",
    note: "Avoid water for 6–8 hrs after application.",
    addOns: ["Glitter highlights", "Custom initials/date"],
  },
  "RO Water Fixing & Service": {
    includes: ["New installation or re-installation", "Filter/membrane check & replacement", "Leak test & TDS check"],
    idealFor: ["Homes", "Offices", "Shops"],
    duration: "45–90 minutes",
    note: "Keep last service record if available.",
    addOns: ["AMC plan", "Pre-filter housing", "Tap replacement"],
  },
};
