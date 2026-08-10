// ============================================================================
// Ask Prajan — Deterministic Local Q&A Knowledge Base
// All answers sourced exclusively from verified resume data.
// This is NOT an LLM — it is a pattern-matching local assistant.
// ============================================================================

interface QAPair {
  keywords: string[];
  question: string;
  answer: string;
}

const knowledgeBase: QAPair[] = [
  {
    keywords: ["hal", "digital twin", "turbojet", "engine", "aerothon", "aerospace"],
    question: "Tell me about the HAL project",
    answer:
      "Prajan developed an AI-based Digital Twin for a turbojet engine as part of a national-level industry project at Hindustan Aeronautics Limited (HAL) and IIT Indore. The platform combines LSTM, CNN, and Random Forest models for engine health monitoring, anomaly detection, and predictive maintenance. It includes a 3D digital twin built with Blender & Unity and a web dashboard for real-time parameter visualization. Prajan's team was a Top 8 Finalist from 2500+ participants nationwide.",
  },
  {
    keywords: ["aws", "cloud", "devops", "ec2", "s3", "infrastructure", "sbv"],
    question: "What AWS experience does Prajan have?",
    answer:
      "During his internship at SBV Technologies Pvt Ltd (May–Jul 2026), Prajan designed, deployed, and managed cloud infrastructure using AWS services including EC2, S3, IAM, and RDS. He implemented CI/CD pipelines for automated deployment and monitored cloud-hosted applications for high availability, security, and performance.",
  },
  {
    keywords: ["strongest", "best", "technical", "specializ", "focus", "domain"],
    question: "What are his strongest technical areas?",
    answer:
      "Prajan works across multiple engineering domains: (1) AI & Machine Learning — PyTorch, LSTM/CNN models, predictive analytics; (2) Cybersecurity — 7th place in a National CTF, penetration testing, vulnerability assessment; (3) Full-Stack Engineering — React.js, Node.js, Flutter, real-time systems; (4) Cloud & DevOps — AWS (EC2, S3, IAM, RDS), CI/CD pipelines; (5) Aerospace Digital Twins — AI-driven turbojet engine health monitoring for HAL.",
  },
  {
    keywords: ["cyber", "security", "ctf", "penetration", "hack", "nmap", "wireshark"],
    question: "Show me his cybersecurity experience",
    answer:
      "Prajan is pursuing B.E. in Computer Science & Engineering with a specialization in Cyber Security at Chennai Institute of Technology. He secured 7th Place in a National-Level Capture The Flag (CTF) competition. His cybersecurity skills include Network Security, Penetration Testing, Vulnerability Assessment, Nmap, and Wireshark. He also holds a Professional Certification in CSE & Cyber Security from iHUB DivyaSampark — IIT Roorkee.",
  },
  {
    keywords: ["ai", "machine learning", "ml", "pytorch", "lstm", "cnn", "predict"],
    question: "Which projects use AI?",
    answer:
      "The Digital Twin for Turbojet Engine project uses AI extensively — LSTM, CNN, and Random Forest models built with PyTorch for engine health monitoring, anomaly detection, and predictive maintenance. MediQue also uses AI-based wait-time prediction to optimize patient flow in healthcare queues.",
  },
  {
    keywords: ["medique", "healthcare", "queue", "hospital", "patient"],
    question: "Tell me about MediQue",
    answer:
      "MediQue is a full-stack healthcare queue management platform built with Flutter, React.js, Node.js, Express.js, Socket.io, and Firebase. It features real-time queue tracking, AI-based wait-time prediction, QR check-in, push notifications, role-based dashboards for patients, doctors, receptionists, and administrators, and secure authentication.",
  },
  {
    keywords: ["intern", "experience", "work", "company", "job"],
    question: "What work experience does Prajan have?",
    answer:
      "Prajan has two industry internships: (1) DevOps & Cloud Engineering Intern at SBV Technologies Pvt Ltd (May–Jul 2026) — AWS infrastructure, CI/CD pipelines, cloud monitoring; (2) Full Stack Intern at NeuralTransformers.AI (Sep–Nov 2023) — built the official website, online course platform with Razorpay integration, and deployed on AWS.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "connect"],
    question: "How can I contact Prajan?",
    answer:
      "Email: prajansanjayk@gmail.com | Phone: +91 7603933715 | LinkedIn: linkedin.com/in/prajansanjayk | GitHub: github.com/prajansanjayk1 | Location: Chennai, India. Prajan is currently open to internships, engineering opportunities, and research collaborations.",
  },
  {
    keywords: ["education", "college", "university", "degree", "study"],
    question: "Where does Prajan study?",
    answer:
      "Prajan is pursuing a Bachelor of Engineering in Computer Science & Engineering (Cyber Security) at Chennai Institute of Technology, Chennai, India (started September 2025).",
  },
  {
    keywords: ["achievement", "award", "recognition", "hackathon", "competition"],
    question: "What are Prajan's achievements?",
    answer:
      "Top 8 Finalist — HAL Aerothon (2500+ participants, HAL & IIT Indore) | 7th Place — National CTF Competition | 2nd Runner Up — SRM TechnoWiz Hackathon | Winner — State Level Hackathon (Chettinad Vidyashram) | Finalist — Rotary International Hackathon. He also holds certifications from IIT Roorkee, Cisco, and AWS.",
  },
  {
    keywords: ["skill", "technology", "tech stack", "language", "framework", "tool"],
    question: "What technologies does Prajan use?",
    answer:
      "Languages: Python, C++, C, SQL, JavaScript. Frontend: React.js, Flutter, HTML/CSS, Tailwind CSS. Backend: Node.js, Express.js, Socket.io, Firebase. AI/ML: PyTorch, LSTM, CNN, Random Forest. Cybersecurity: Nmap, Wireshark, Penetration Testing. Cloud: AWS (EC2, S3, IAM, RDS), Git, CI/CD.",
  },
];

export const suggestedPrompts = [
  "Tell me about the HAL project",
  "What AWS experience does Prajan have?",
  "What are his strongest technical areas?",
  "Show me his cybersecurity experience",
  "Which projects use AI?",
];

export function queryKnowledgeBase(input: string): string {
  const normalized = input.toLowerCase();

  // Find the best matching Q&A pair by keyword overlap
  let bestMatch: QAPair | null = null;
  let bestScore = 0;

  for (const pair of knowledgeBase) {
    let score = 0;
    for (const keyword of pair.keywords) {
      if (normalized.includes(keyword)) {
        score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = pair;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer;
  }

  return "I can answer questions about Prajan's projects, skills, experience, achievements, and contact information. Try asking about the HAL Digital Twin, AWS experience, or cybersecurity background.";
}
