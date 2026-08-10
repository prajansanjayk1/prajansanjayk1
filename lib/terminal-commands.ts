// ============================================================================
// Interactive Terminal — Command Definitions
// All responses sourced from verified resume data in lib/data.ts
// ============================================================================

export interface TerminalResponse {
  output: string[];
  isError?: boolean;
}

const commands: Record<string, () => TerminalResponse> = {
  help: () => ({
    output: [
      "Available commands:",
      "",
      "  whoami        — Who is Prajan Sanjay K?",
      "  skills        — Technical skill domains",
      "  projects      — Engineering projects",
      "  experience    — Internship experience",
      "  achievements  — Awards & recognitions",
      "  certifications — Verified certifications",
      "  contact       — Get in touch",
      "  education     — Academic background",
      "  clear         — Clear terminal",
      "  help          — Show this list",
    ],
  }),

  whoami: () => ({
    output: [
      "Prajan Sanjay K",
      "B.E. Computer Science & Engineering (Cyber Security)",
      "Chennai Institute of Technology, Chennai, India",
      "",
      "Cybersecurity Engineer • Full-Stack AI Engineer • Cloud & DevOps Engineer",
      "",
      "Building secure, intelligent, and scalable systems across",
      "AI, cybersecurity, full-stack engineering, and cloud infrastructure.",
    ],
  }),

  skills: () => ({
    output: [
      "┌─ Languages ─────────────────────────────────",
      "│  Python • C++ • C • SQL • JavaScript",
      "├─ Frontend & Mobile ─────────────────────────",
      "│  React.js • Flutter • HTML / CSS • Tailwind CSS",
      "├─ Backend & APIs ────────────────────────────",
      "│  Node.js • Express.js • Socket.io • Firebase • REST APIs",
      "├─ AI & Machine Learning ─────────────────────",
      "│  PyTorch • LSTM • CNN • Random Forest • Predictive Analytics",
      "├─ Cybersecurity ─────────────────────────────",
      "│  Network Security • Pen Testing • Vuln Assessment • Nmap • Wireshark",
      "└─ Cloud & DevOps ────────────────────────────",
      "   AWS (EC2, S3, IAM, RDS) • Git • CI/CD • MySQL Workbench",
    ],
  }),

  projects: () => ({
    output: [
      "* Digital Twin For Turbojet Engine",
      "  HAL & IIT Indore Industry Project | 07/2026 – Present",
      "  AI-based engine health monitoring, anomaly detection, predictive maintenance",
      "  Stack: Python, PyTorch, LSTM/CNN, Random Forest, Blender, Unity, JS",
      "",
      "* MediQue — Smart Healthcare Queue Management",
      "  10/2025 – Present",
      "  Real-time queue tracking, AI wait-time prediction, QR check-in",
      "  Stack: Flutter, React.js, Node.js, Express.js, Socket.io, Firebase",
      "",
      "* NeuralTransformer.ai — Company Website & Course Platform",
      "  09/2023 – 11/2023",
      "  Full-stack website with Razorpay payment integration",
      "  Stack: PHP, JavaScript, HTML/CSS, AWS, Razorpay",
    ],
  }),

  experience: () => ({
    output: [
      "DevOps & Cloud Engineering Intern",
      "  SBV Technologies Pvt Ltd | 05/2026 – 07/2026 | Chennai",
      "  → AWS infrastructure (EC2, S3, IAM, RDS)",
      "  → CI/CD pipelines & automated deployment",
      "  → Cloud monitoring, security & performance optimization",
      "",
      "Full Stack Intern",
      "  NeuralTransformers.AI | 09/2023 – 11/2023 | Chennai",
      "  → Built official website as full-stack developer",
      "  → Online course platform with Razorpay integration",
      "  → Production deployment on AWS",
    ],
  }),

  achievements: () => ({
    output: [
      "* Top 8 Finalist — HAL Aerothon (2500+ participants)",
      "   Hindustan Aeronautics Limited & IIT Indore",
      "",
      "* 7th Place — National CTF Competition",
      "   Cybersecurity Capture The Flag",
      "",
      "* 2nd Runner Up — SRM TechnoWiz Hackathon",
      "   National Level at SRM University",
      "",
      "* Winner — State Level Hackathon",
      "   Chettinad Vidyashram School",
      "",
      "* Finalist — Rotary International Hackathon",
      "   National Level",
    ],
  }),

  certifications: () => ({
    output: [
      "* Professional Certification in CSE & Cyber Security",
      "  iHUB DivyaSampark — IIT Roorkee",
      "",
      "* Python Essentials — Cisco",
      "",
      "* AWS Essentials — Amazon Web Services",
    ],
  }),

  education: () => ({
    output: [
      "Bachelor of Engineering",
      "Computer Science & Engineering (Cyber Security)",
      "Chennai Institute of Technology",
      "Chennai, India",
      "09/2025 – Present",
    ],
  }),

  contact: () => ({
    output: [
      "Email    → prajansanjayk@gmail.com",
      "Phone    → +91 7603933715",
      "LinkedIn → linkedin.com/in/prajansanjayk",
      "GitHub   → github.com/prajansanjayk1",
      "Location → Chennai, India",
    ],
  }),
};

export function executeCommand(input: string): TerminalResponse {
  const trimmed = input.trim().toLowerCase();

  if (trimmed === "clear") {
    return { output: [], isError: false };
  }

  if (trimmed === "") {
    return { output: [], isError: false };
  }

  const handler = commands[trimmed];
  if (handler) {
    return handler();
  }

  return {
    output: [
      `Command not found: ${input}`,
      'Type "help" for available commands.',
    ],
    isError: true,
  };
}
