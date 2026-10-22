/**
 * ============================================================================
 * PAKISTAN SCHOOL (ARAM BAGH, KARACHI) — MASTER CONFIGURATION FILE
 * ============================================================================
 * Centralized, editable configuration for the entire school website.
 * Update details here to reflect across all pages dynamically.
 */

const SCHOOL_CONFIG = {
  // Institutional Identity
  identity: {
    name: "Pakistan School",
    shortName: "Pakistan School",
    tagline: "Inspiring Excellence, Grounded in Values",
    establishedYear: "2026",
    campusName: "Aram Bagh Campus",
    city: "Karachi",
    country: "Pakistan",
    logoUrl: "assets/images/logo.png",
    badgeLabel: "Inaugural Academic Session 2026–2027",
    announcement: "Admissions Open for 2026–2027 Academic Session — Early Years to Secondary | Aram Bagh, Karachi",
  },

  // Brand Color Palette
  colors: {
    primaryNavy: "#0D274D",
    secondaryRoyal: "#1E5E9E",
    accentGreen: "#006633",
    skyBlue: "#64B5F6",
    surfaceLight: "#F8FAFC",
    darkSlate: "#0F172A",
    goldAccent: "#D97706"
  },

  // Contact & Location Details
  contact: {
    address: "Plot 14/B, Aram Bagh Road, Next to Saima Trade Tower (Near Pakistan Chowk), Saddar, Karachi, Sindh, Pakistan",
    shortAddress: "Aram Bagh (Next to Saima Trade Tower), Karachi",
    landmark: "Facing Saima Trade Tower, 2 mins from Pakistan Chowk",
    phone: "+92 21 3262 0026",
    phoneDisplay: "(021) 3262-0026",
    mobilePhone: "+92 300 2026786",
    mobileDisplay: "+92 300 2026 786",
    whatsapp: "+923002026786",
    whatsappDisplay: "+92 300 2026 786",
    email: "admissions@pakistanschool.edu.pk",
    infoEmail: "info@pakistanschool.edu.pk",
    officeHours: "Monday – Saturday: 7:30 AM – 3:30 PM (Friday: 7:30 AM – 12:30 PM)",
    mapQuery: "Aram+Bagh+Saima+Trade+Tower+Karachi",
  },

  // Social Media Links
  social: {
    facebook: "https://www.facebook.com/events/aram-bagh-karachi/grand-opening/782097604299267/",
    instagram: "https://instagram.com/pakistanschool_official",
    linkedin: "https://linkedin.com/company/pakistan-school-karachi",
    youtube: "https://youtube.com/@pakistanschoolkarachi",
    whatsappChannel: "https://wa.me/923002026786"
  },

  // Quick Key Stats
  stats: [
    { label: "Student-Teacher Ratio", value: "15:1", subtitle: "Individualized Attention" },
    { label: "Campus Infrastructure", value: "100%", subtitle: "Air-Conditioned & CCTV Secured" },
    { label: "Curriculum Tracks", value: "Dual", subtitle: "Matriculation & Cambridge Stream" },
    { label: "Specialized Labs", value: "4+", subtitle: "Robotics, Science, IT & Language" }
  ],

  // Academic Offerings
  academics: [
    {
      id: "early-years",
      title: "Early Childhood & Montessori",
      grades: "Playgroup, Nursery, Kindergarten (Ages 3 – 5)",
      description: "Play-based sensorial learning focused on cognitive, linguistic, and motor development in a caring, structured environment.",
      icon: "baby",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80",
      features: ["Activity-based Phonics & Numeracy", "Sensory & Physical Playrooms", "Gentle Islamic Etiquette & Duas", "Daily Nutritious Snack Supervision"]
    },
    {
      id: "primary",
      title: "Primary School",
      grades: "Grades 1 through 5 (Ages 6 – 10)",
      description: "Building strong foundational mastery in Literacy, Numeracy, STEM, Urdu, and Social Sciences through inquiry-driven pedagogy.",
      icon: "book-open",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      features: ["Hands-on Science & Coding Basics", "Dual-Language Urdu & English Fluency", "Public Speaking & Declamation", "Nazra Quran with Tajweed"]
    },
    {
      id: "middle",
      title: "Middle School",
      grades: "Grades 6 through 8 (Ages 11 – 13)",
      description: "Fostering analytical reasoning, collaborative problem-solving, and disciplined academic study habits as students transition into young scholars.",
      icon: "compass",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      features: ["Introductory Robotics & Computer Science", "Science Laboratory Practicals", "Model United Nations & Debate Club", "Physical Education & Cricket"]
    },
    {
      id: "secondary",
      title: "Secondary & Senior School",
      grades: "Grades 9 & 10 / O-Levels (Ages 14 – 16)",
      description: "Rigorous academic preparation with dual-track options for BISE Sindh Board Matriculation and Cambridge International O-Level examinations.",
      icon: "award",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      features: ["Advanced Physics, Chemistry & Biology Labs", "Computer Science & Python Programming", "Career Counseling & Mentorship", "Past Paper Masterclasses & Mock Exams"]
    }
  ],

  // Core Pillars / Why Choose Us
  pillars: [
    {
      title: "Academic Excellence",
      description: "Curriculum designed to exceed national standards with experiential learning, critical thinking, and diagnostic assessments.",
      icon: "graduation-cap"
    },
    {
      title: "Islamic Character & Ethics",
      description: "Integrating moral integrity, community empathy, and Islamic teachings into everyday school life (symbolized by our Rehal emblem).",
      icon: "shield-check"
    },
    {
      title: "Prime & Secure Downtown Location",
      description: "Conveniently situated in Aram Bagh next to Saima Trade Tower on I.I. Chundrigar corridor with 24/7 security and CCTV.",
      icon: "map-pin"
    },
    {
      title: "Future-Ready STEM & AI Labs",
      description: "Cutting-edge computer stations, robotics kits, and digital multimedia tools preparing students for the innovation economy.",
      icon: "cpu"
    },
    {
      title: "Passionate, Certified Educators",
      description: "Low student-to-teacher ratio (15:1) ensuring individualized academic support and pastoral care for every student.",
      icon: "users"
    },
    {
      title: "Holistic Co-Curriculars",
      description: "Debates, Qirat competitions, sports leagues, science fairs, and community volunteer programs building well-rounded individuals.",
      icon: "sparkles"
    }
  ],

  // Admissions Process Steps
  admissionSteps: [
    { step: "01", title: "Submit Online Inquiry", desc: "Complete our quick online registration form or visit our admissions office in Aram Bagh." },
    { step: "02", title: "Assessment & Interaction", desc: "Age-appropriate diagnostic interaction for primary/secondary, or friendly observation for Early Years." },
    { step: "03", title: "Document Verification", desc: "Submit copies of B-Form / Birth Certificate, previous report cards, and parent CNIC copies." },
    { step: "04", title: "Offer Letter & Enrollment", desc: "Receive the formal admission package, pay the admission fee voucher, and collect the Welcome Kit." }
  ],

  // Transparent Sample Fee Structure (Clearly labeled sample data)
  feeStructure: {
    note: "Official Sample Fee Schedule for Academic Year 2026–2027. Sibling discounts of 15% apply for 2nd and 3rd child.",
    items: [
      { level: "Early Years (Montessori to KG)", admissionFee: "PKR 15,000", monthlyTuition: "PKR 7,500", annualCharges: "PKR 5,000" },
      { level: "Primary (Grades 1 to 5)", admissionFee: "PKR 18,000", monthlyTuition: "PKR 9,000", annualCharges: "PKR 6,000" },
      { level: "Middle (Grades 6 to 8)", admissionFee: "PKR 20,000", monthlyTuition: "PKR 11,000", annualCharges: "PKR 7,000" },
      { level: "Secondary (Grades 9 & 10)", admissionFee: "PKR 25,000", monthlyTuition: "PKR 13,500", annualCharges: "PKR 8,500" }
    ]
  },

  // Leadership & Faculty (Distinguished male educators and scholars)
  leadership: [
    {
      name: "Sir Muqeet",
      role: "Principal & Head of Institution",
      qualifications: "Educational Leadership & Administration",
      bio: "An educational reformer and institutional leader passionate about nurturing compassionate, forward-thinking scholars with deep ethical roots.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. Masood Ahmed Siddiqui",
      role: "Vice Principal & Head of Academics",
      qualifications: "M.Phil in Curriculum Design, Cambridge Certified Master Trainer",
      bio: "Championing student-centered pedagogy, active learning, and continuous diagnostic academic tracking.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Prof. Hammad Qureshi",
      role: "Head of STEM & Digital Innovation",
      qualifications: "M.S. in Computer Science, Robotics Competition Coach",
      bio: "Leading hands-on coding, robotics projects, and modern computational thinking across all grade levels.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Qari Nasir Sahab",
      role: "Head of Tahfeez-ul-Quran & Tajweed Department",
      qualifications: "Certified Hafiz-ul-Quran & Qari with Sanad in Tajweed & Qira'at",
      bio: "Guiding students through dedicated Quran memorization, rigorous Tajweed articulation, and daily prophetic character formation.",
      image: "assets/images/qari-nasir-half.jpg"
    }
  ],

  // Campus Facilities
  facilities: [
    { title: "Smart Multimedia Classrooms", desc: "Fully air-conditioned learning rooms equipped with interactive displays, natural daylight, and ergonomic student seating.", icon: "monitor", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" },
    { title: "Science & Discovery Laboratories", desc: "Purpose-built physics, chemistry, and biology stations designed for safe hands-on experimentation under teacher supervision.", icon: "flask-conical", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" },
    { title: "Next-Gen IT & Robotics Center", desc: "High-speed workstations with software tools for coding, Python programming, digital design, and robotics hardware kits.", icon: "cpu", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" },
    { title: "Central Library & Resource Hub", desc: "Thousands of books covering literature, history, science, Quranic studies, and international journals alongside quiet reading corners.", icon: "library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" },
    { title: "Safe Gated Campus & Security", desc: "Located beside Saima Trade Tower with perimeter security, metal detection, biometric access control, and 24/7 CCTV surveillance.", icon: "shield-check", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" },
    { title: "Clean Cafeteria & Student Lounge", desc: "Hygienic food preparation with nutritious halal meal choices, fresh juices, and supervised seating during lunch breaks.", icon: "coffee", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" }
  ],

  // Upcoming Events
  events: [
    {
      date: "Feb 10, 2026",
      title: "Grand Opening & Campus Dedication Ceremony",
      time: "10:00 AM – 1:00 PM",
      location: "Main Auditorium, Aram Bagh Campus",
      category: "Ceremony",
      desc: "Inaugural ribbon cutting with educational leaders, community figures, prospective parents, and academic tour."
    },
    {
      date: "Feb 25, 2026",
      title: "Admissions Open House & Diagnostic Assessment Day",
      time: "9:00 AM – 3:00 PM",
      location: "Admissions Center",
      category: "Admissions",
      desc: "Meet department heads, explore science labs, and have your child take the preliminary entry assessment."
    },
    {
      date: "Mar 15, 2026",
      title: "Annual STEM & Islamic Art Showcase",
      time: "11:00 AM – 4:00 PM",
      location: "Exhibition Hall",
      category: "Academic",
      desc: "Student-built science models, robotics demonstrations, and classical Arabic calligraphy displays."
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "Where exactly is Pakistan School located?",
      a: "Our campus is strategically situated on Aram Bagh Road, immediately adjacent to the prominent Saima Trade Tower and just 2 minutes walking distance from Pakistan Chowk in central Karachi."
    },
    {
      q: "What age groups and grade levels do you accept for 2026?",
      a: "For our inaugural 2026–2027 academic year, admissions are open from Early Childhood (Playgroup, Nursery, KG) through Primary (Grades 1–5), Middle School (Grades 6–8), and Secondary School (Grade 9 & 10 Matric / O-Level track)."
    },
    {
      q: "Is Islamic education integrated into the curriculum?",
      a: "Yes. In harmony with our school crest (the Rehal and Crescent emblem), daily Quranic Nazra with proper Tajweed, basic Arabic comprehension, and prophetic character building (Akhlaq) are thoughtfully taught alongside modern science, mathematics, and English."
    },
    {
      q: "What are the student-to-teacher ratios in classrooms?",
      a: "We maintain a strict maximum ratio of 15:1 to ensure every child receives personalized academic attention, regular diagnostic feedback, and nurturing support from teachers."
    },
    {
      q: "How can I schedule a campus tour?",
      a: "You can book a private campus tour through our online Admissions page, message us directly on WhatsApp (+92 300 2026 786), or visit the Admissions Office on weekdays between 8:00 AM and 3:00 PM."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCHOOL_CONFIG;
}
