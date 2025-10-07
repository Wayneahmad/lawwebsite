// src/data/team.js

// --- Safe file() that works on Vite and non-Vite bundlers ---
let file = (filename) => {
  try {
    // Vite path (data -> assets)
    const modules = import.meta.glob("../assets/team/*", {
      eager: true,
      import: "default",
    });
    const m = Object.entries(modules).find(([p]) => p.endsWith(filename));
    if (m) return m[1];
  } catch {
    // ignore
  }

  // Fallback: direct URL (works in Vite/CRA for static files imported by path)
  try {
    return new URL(`../assets/team/${filename}`, import.meta.url).href;
  } catch {
    return undefined;
  }
};

// --- Your team data (unchanged except it uses file()) ---
export const TEAM = [
  {
    id: "patrick-dorrian",
    name: "Patrick Dorrian",
    role: "Managing Partner",
    expertise: ["Corporate", "Dispute Resolution"],
    email: "patrick@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawPaddyMain.jpg"),
    bio: "Patrick leads the firm’s strategic direction and complex cross-border mandates. He advises leadership teams and boards on high-stakes matters with a calm, commercial approach.",
    order: 10,
  },
  {
    id: "joanna-dorrian",
    name: "Joanna Dorrian",
    role: "COO",
    expertise: ["Operations", "Risk"],
    email: "joanna@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinlawJoeMain.jpg"),
    bio: "Joanna oversees delivery and client service across the firm, ensuring consistency, quality and measurable outcomes across every mandate.",
    order: 20,
  },
  {
    id: "tricia-osullivan",
    name: "Tricia O’Sullivan",
    role: "Senior Solicitor",
    expertise: ["Employment", "Compliance"],
    email: "tricia@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawTriciaMain.jpg"),
    bio: "Tricia advises employers on workforce strategy, investigations and complex contentious matters with sector-specific insight.",
    order: 30,
  },
  {
    id: "jo-chart",
    name: "Jo Chart",
    role: "Consultant Solicitor",
    expertise: ["Real Estate", "Corporate"],
    email: "jo.chart@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawJoeChartMain.jpg"),
    bio: "Jo acts on acquisitions, disposals and development projects, aligning legal execution with commercial objectives.",
    order: 40,
  },
  {
    id: "stephanie-mavromatis",
    name: "Stephanie Mavromatis",
    role: "Senior Legal Consultant",
    expertise: ["Family", "Private Client"],
    email: "stephanie@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawStepthMain.jpg"),
    bio: "Stephanie supports families and private clients with clarity and discretion across sensitive matters.",
    order: 50,
  },
  {
    id: "ruth-bingley",
    name: "Ruth Bingley",
    role: "Senior Legal Consultant",
    expertise: ["Litigation", "Regulatory"],
    email: "ruth@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawRuthMain.jpg"),
    bio: "Ruth brings sharp litigation strategy and regulatory insight to complex disputes.",
    order: 60,
  },
  {
    id: "izzy-chandler",
    name: "Izzy Chandler",
    role: "Practice Manager",
    expertise: ["Operations"],
    email: "izzy@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawIzzyMain.jpg"),
    bio: "Izzy ensures matters flow smoothly, coordinating resources and client communications.",
    order: 70,
  },
  {
    id: "rose-nelson",
    name: "Rose Nelson",
    role: "Senior Legal Consultant",
    expertise: ["Immigration", "Employment"],
    email: "rose@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawRoseMain.jpg"),
    bio: "Rose advises organisations and individuals on immigration strategy with a pragmatic, human approach.",
    order: 80,
  },
  {
    id: "ralph-lloyd-roberts",
    name: "Ralph Lloyd Roberts",
    role: "Data and Machine Learning Specialist",
    expertise: ["Data", "Machine Learning"],
    email: "ralph@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawRalphMain.jpg"),
    bio: "Ralph applies data science and machine learning expertise to complex legal challenges.",
    order: 90,
  },
  {
    id: "isil-sevin",
    name: "Isil Sevin",
    role: "Consultant",
    expertise: ["Consultant"],
    email: "isil@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawIsilMain.jpg"),
    bio: "Isil provides consultancy services with international experience.",
    order: 100,
  },
  {
    id: "frank-bazell",
    name: "Frank Bazell",
    role: "Consultant",
    expertise: ["Consultant"],
    email: "frank@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawFrankMain.jpg"),
    bio: "Frank supports clients with complex and specialist consultancy services.",
    order: 110,
  },
  {
    id: "danielle-williams",
    name: "Danielle Williams",
    role: "Consultant",
    expertise: ["Consultant"],
    email: "danielle@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawDanielleMain.jpg"),
    bio: "Danielle is experienced in supporting clients across various matters.",
    order: 120,
  },
  {
    id: "graham-wilkinson",
    name: "Graham Wilkinson",
    role: "Consultant",
    expertise: ["Consultant"],
    email: "graham@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawGrahamMain.jpg"),
    bio: "Graham contributes specialist consulting expertise.",
    order: 130,
  },
  {
    id: "kivanc-elitok",
    name: "Kivanc Elitok",
    role: "Legal Consultant",
    expertise: ["Consultant", "Legal"],
    email: "kivanc@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawKivancMain.jpg"),
    bio: "Kivanc provides legal consultancy with a focus on client outcomes.",
    order: 140,
  },
  {
    id: "miriam-altaf",
    name: "Miriam Altaf",
    role: "Consultant Solicitor",
    expertise: ["Consultant", "Solicitor"],
    email: "miriam@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawMiriamMain.jpg"),
    bio: "Miriam is a consultant solicitor advising on a wide range of client matters.",
    order: 150,
  },
  {
    id: "kevin-bowles",
    name: "Kevin Bowles",
    role: "Consultant",
    expertise: ["Consultant"],
    email: "kevin@examplelaw.co.uk",
    linkedin: "https://linkedin.com/in/example",
    img: file("SperrinLawKevinMain.jpg"),
    bio: "Kevin brings broad consultancy experience to the team.",
    order: 160,
  },
];

export const ALL_TAGS = Array.from(
  new Set(TEAM.flatMap((m) => m.expertise))
).sort();
