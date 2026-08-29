export const admissionSteps = [
  {
    step: "01",
    title: "Online Inquiry & Registration",
    desc: "Submit your basic inquiry online or visit our Admissions Desk to receive your unique Application Number and Institutional Prospectus.",
    timeframe: "Immediate"
  },
  {
    step: "02",
    title: "Campus Tour & Interactive Session",
    desc: "Schedule a personalized guided walkthrough of our 12-acre green campus, meet the Academic Coordinators, and inspect our STEM/Sports infrastructure.",
    timeframe: "Within 3 Business Days"
  },
  {
    step: "03",
    title: "Diagnostic Evaluation / Observation",
    desc: "Age-appropriate informal interaction for Early Years; foundational aptitude assessment in English & Math for Grades 3 through 11.",
    timeframe: "Scheduled Slot"
  },
  {
    step: "04",
    title: "Provisional Offer & Enrollment",
    desc: "Formal offer of admission issued upon evaluation. Complete document verification and fee payment to secure your ward's seat.",
    timeframe: "Within 48 Hours"
  }
];

export const feeTiers = {
  "pre-primary": {
    name: "Pre-Primary (Nursery, LKG, UKG)",
    tuitionPerQuarter: 18500,
    admissionFee: 25000,
    annualDevelopmentFee: 12000,
    activityAndKitFee: 6500,
    description: "Includes sensorial Montessori kits, child-safe learning modules, and foundation arts."
  },
  "primary": {
    name: "Primary Wing (Grades 1 – 5)",
    tuitionPerQuarter: 22500,
    admissionFee: 25000,
    annualDevelopmentFee: 15000,
    activityAndKitFee: 8500,
    description: "Includes coding foundations, STEM experiments, library access, and physical education."
  },
  "middle": {
    name: "Middle School (Grades 6 – 8)",
    tuitionPerQuarter: 26000,
    admissionFee: 30000,
    annualDevelopmentFee: 18000,
    activityAndKitFee: 10500,
    description: "Includes AI & Robotics lab access, language electives, science lab consumables, and competitive sports."
  },
  "secondary": {
    name: "Secondary (Grades 9 – 10)",
    tuitionPerQuarter: 29500,
    admissionFee: 30000,
    annualDevelopmentFee: 20000,
    activityAndKitFee: 12500,
    description: "Includes board exam prep modules, advanced science labs, career counseling, and leadership workshops."
  },
  "senior-secondary": {
    name: "Senior Secondary (Grades 11 – 12)",
    tuitionPerQuarter: 34000,
    admissionFee: 35000,
    annualDevelopmentFee: 24000,
    activityAndKitFee: 15000,
    description: "Includes stream specialization (Science/Commerce/Humanities), integrated competitive entrance prep, and university application mentorship."
  }
};

export const transportZones = [
  { id: "none", name: "Self Transport / Walker", feePerQuarter: 0 },
  { id: "zone-1", name: "Zone A: Within 5 km radius (GPS Fleet & Attendant)", feePerQuarter: 4500 },
  { id: "zone-2", name: "Zone B: 5 km to 12 km radius (Air-Conditioned & CCTV)", feePerQuarter: 6200 },
  { id: "zone-3", name: "Zone C: 12 km to 20 km radius (Express Arterial Routes)", feePerQuarter: 7800 }
];

export const optionalAddons = [
  { id: "robotics-club", name: "Advanced Drone & Robotics Academy", feePerQuarter: 3000 },
  { id: "swimming-club", name: "Championship Swimming Coaching (NIS Certified)", feePerQuarter: 3500 },
  { id: "music-academy", name: "Trinity Guildhall Classical Music / Instrumentals", feePerQuarter: 2500 },
  { id: "day-boarding", name: "Extended Day-Boarding & Hot Nutritious Meal Program", feePerQuarter: 9000 }
];
