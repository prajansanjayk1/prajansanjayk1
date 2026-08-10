// ============================================================================
// Prajan Sanjay K — Portfolio Data (Single Source of Truth)
// All content is sourced exclusively from verified resume data.
// Do NOT add unverified claims, fake metrics, or placeholder descriptions.
// ============================================================================

export const personal = {
  name: "Prajan Sanjay K",
  shortName: "PSK",
  email: "prajansanjayk@gmail.com",
  phone: "+91 7603933715",
  linkedin: "https://linkedin.com/in/prajansanjayk",
  linkedinHandle: "prajansanjayk",
  github: "https://github.com/prajansanjayk1",
  githubHandle: "prajansanjayk1",
  location: "Chennai, India",
  status: "Open for Roles",
  tagline: "Building secure, intelligent, and scalable systems across AI, cybersecurity, full-stack engineering, and cloud infrastructure.",
  taglineExtended:
    "From aerospace digital twins and predictive systems to real-time healthcare platforms and AWS infrastructure.",
  education: {
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering (Cyber Security)",
    institution: "Chennai Institute of Technology",
    location: "Chennai, India",
    dates: "09/2025 – Present",
  },
  roles: [
    "Cybersecurity Engineer",
    "Full-Stack AI Engineer",
    "Cloud & DevOps Engineer",
    "Software Engineer",
  ],
} as const;

// ============================================================================
// Achievements — verified from resume
// ============================================================================
export const achievements = [
  {
    id: "hal-aerothon",
    metric: "Top 8",
    label: "HAL Aerothon Finalist",
    detail: "From 2500+ participants nationwide",
    context: "Hindustan Aeronautics Limited (HAL) & IIT Indore",
    icon: "Trophy",
  },
  {
    id: "national-ctf",
    metric: "7th",
    label: "National CTF Competition",
    detail: "National-Level Capture The Flag cybersecurity competition",
    context: "Team-based cybersecurity competition",
    icon: "Shield",
  },
  {
    id: "srm-technowiz",
    metric: "2nd Runner Up",
    label: "SRM TechnoWiz Hackathon",
    detail: "National Level Hackathon at SRM Institute of Science and Technology",
    context: "SRM University",
    icon: "Award",
  },
  {
    id: "state-hackathon",
    metric: "Winner",
    label: "State Level Hackathon",
    detail: "First place in State Level Hackathon",
    context: "Chettinad Vidyashram School",
    icon: "Medal",
  },
  {
    id: "rotary-international",
    metric: "Finalist",
    label: "Rotary International Hackathon",
    detail: "Selected as a Finalist in National Level Hackathon",
    context: "Rotary International",
    icon: "Star",
  },
] as const;

// ============================================================================
// Experience — verified from resume
// ============================================================================
export const experiences = [
  {
    id: "sbv-technologies",
    role: "DevOps & Cloud Engineering Intern",
    company: "SBV Technologies Pvt Ltd",
    location: "Chennai, India",
    startDate: "05/2026",
    endDate: "07/2026",
    highlights: [
      "Designed, deployed, and managed cloud infrastructure using AWS services such as EC2, S3, IAM, and RDS.",
      "Assisted in implementing CI/CD pipelines and automated application deployment to improve development and release efficiency.",
      "Monitored, maintained, and optimized cloud-hosted applications, ensuring high availability, security, and performance.",
    ],
    technologies: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS RDS",
      "CI/CD Pipelines",
      "Cloud Infrastructure",
    ],
  },
  {
    id: "neuraltransformers",
    role: "Full Stack Intern",
    company: "NeuralTransformers.AI",
    location: "Chennai, India",
    startDate: "09/2023",
    endDate: "11/2023",
    highlights: [
      "Built and deployed NeuralTransformer.ai's official website as a full-stack developer.",
      "Implemented a fully functional online course platform with responsive, secure, and scalable architecture.",
      "Integrated Razorpay payment gateway for seamless user transactions.",
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "HTML / CSS",
      "AWS",
      "Razorpay",
    ],
  },
] as const;

// ============================================================================
// Projects — verified from resume
// ============================================================================

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  dates: string;
  context?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  flagship: boolean;
}

export const projects: Project[] = [
  {
    id: "hal-digital-twin",
    title: "Digital Twin For Turbojet Engine",
    subtitle: "AI-Based Engine Health Monitoring & Prognostics Platform",
    category: "AI & Aerospace",
    dates: "07/2026 – Present",
    context: "HAL & IIT Indore Industry Problem Statement",
    description:
      "Developed an AI-based Digital Twin for a turbojet engine as part of a national-level industry project at Hindustan Aeronautics Limited (HAL). The platform combines machine learning models with 3D visualization to enable engine health monitoring, anomaly detection, and predictive maintenance.",
    highlights: [
      "Implemented LSTM, CNN, and Random Forest models for engine health monitoring, anomaly detection, and predictive maintenance.",
      "Processed and analyzed engine sensor data using Python and PyTorch to support predictive analytics.",
      "Built a 3D digital twin model using Blender and Unity for engine visualization and simulation.",
      "Developed a web-based dashboard using HTML and JavaScript to display engine parameters and AI-generated insights.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "LSTM",
      "CNN",
      "Random Forest",
      "Blender",
      "Unity",
      "JavaScript",
      "HTML",
    ],
    githubUrl: "https://github.com/prajansanjayk1",
    featured: true,
    flagship: true,
  },
  {
    id: "medique",
    title: "MediQue",
    subtitle: "Smart Healthcare Queue Management Platform",
    category: "Full-Stack",
    dates: "10/2025 – Present",
    description:
      "Developed MediQue, a full-stack healthcare queue management system with real-time tracking, AI-based wait-time prediction, QR check-in, and push notifications to optimize patient flow across hospitals.",
    highlights: [
      "Implemented real-time queue tracking, AI-based wait-time prediction, QR check-in, and push notifications to optimize patient flow.",
      "Built role-based dashboards, secure authentication, and analytics for patients, doctors, receptionists, and administrators.",
    ],
    technologies: [
      "Flutter",
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Firebase",
      "Tailwind CSS",
      "REST API",
    ],
    githubUrl: "https://github.com/prajansanjayk1",
    featured: true,
    flagship: false,
  },
  {
    id: "neuraltransformer-website",
    title: "NeuralTransformer.ai",
    subtitle: "Official Company Website & Online Course Platform",
    category: "Web & Payments",
    dates: "09/2023 – 11/2023",
    description:
      "Developed the official company website and fully functional online course platform with integrated payment processing and cloud deployment.",
    highlights: [
      "Built full-stack official website and online course platform architecture.",
      "Integrated Razorpay payment gateway for user course purchases.",
      "Deployed and maintained production-ready web applications on AWS.",
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "HTML / CSS",
      "AWS",
      "Razorpay",
      "VEED.IO",
    ],
    githubUrl: "https://github.com/prajansanjayk1",
    featured: false,
    flagship: false,
  },
];

// ============================================================================
// Skills — verified from resume (grouped by domain, linked to projects)
// ============================================================================
export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", usedIn: ["AI / ML", "Cybersecurity", "Backend"] },
      { name: "JavaScript", usedIn: ["Frontend", "Full-Stack", "Web"] },
      { name: "C++", usedIn: ["Systems", "Competitive Programming"] },
      { name: "C", usedIn: ["Systems Programming"] },
      { name: "SQL", usedIn: ["Databases", "Backend"] },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
    icon: "Layout",
    skills: [
      { name: "React.js", usedIn: ["MediQue", "Full-Stack"] },
      { name: "Flutter", usedIn: ["MediQue", "Mobile"] },
      { name: "HTML / CSS", usedIn: ["Web Development"] },
      { name: "Tailwind CSS", usedIn: ["MediQue", "UI Engineering"] },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", usedIn: ["MediQue", "Full-Stack"] },
      { name: "Express.js", usedIn: ["MediQue", "REST APIs"] },
      { name: "Socket.io", usedIn: ["MediQue", "Real-Time"] },
      { name: "Firebase", usedIn: ["MediQue", "Cloud"] },
      { name: "REST APIs", usedIn: ["Full-Stack"] },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "PyTorch", usedIn: ["Digital Twin", "Deep Learning"] },
      { name: "LSTM / CNN", usedIn: ["Digital Twin", "Time-Series"] },
      { name: "Random Forest", usedIn: ["Digital Twin", "Classification"] },
      { name: "Predictive Analytics", usedIn: ["Digital Twin", "MediQue"] },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "ShieldCheck",
    skills: [
      { name: "Network Security", usedIn: ["Defense", "CTF"] },
      { name: "Penetration Testing", usedIn: ["Offensive Security"] },
      { name: "Vulnerability Assessment", usedIn: ["Security Auditing"] },
      { name: "Nmap", usedIn: ["Network Scanning"] },
      { name: "Wireshark", usedIn: ["Traffic Analysis"] },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS (EC2, S3, IAM, RDS)", usedIn: ["SBV Technologies", "Infrastructure"] },
      { name: "Git / GitHub", usedIn: ["Version Control"] },
      { name: "CI/CD Pipelines", usedIn: ["SBV Technologies", "Automation"] },
      { name: "MySQL Workbench", usedIn: ["Database Management"] },
    ],
  },
] as const;

// ============================================================================
// Certifications — verified from resume
// ============================================================================
export const certifications = [
  {
    id: "iit-roorkee",
    title: "Professional Certification in CSE & Cyber Security",
    issuer: "iHUB DivyaSampark — IIT Roorkee",
    icon: "GraduationCap",
  },
  {
    id: "cisco-python",
    title: "Python Essentials",
    issuer: "Cisco",
    icon: "FileCode",
  },
  {
    id: "aws-essentials",
    title: "AWS Essentials",
    issuer: "Amazon Web Services",
    icon: "Cloud",
  },
] as const;

// ============================================================================
// Engineering Domains — for "Why Prajan" section
// ============================================================================
export const domains = [
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    description: "Building predictive and intelligent systems with PyTorch, LSTM, CNN, and ensemble methods.",
    icon: "Brain",
    color: "cyan",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Security engineering, CTF competition experience, penetration testing, and defensive analysis.",
    icon: "ShieldCheck",
    color: "emerald",
  },
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    description: "Building complete production applications with React, Node.js, Flutter, and real-time systems.",
    icon: "Layers",
    color: "blue",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "AWS infrastructure design, CI/CD automation, and cloud-native deployment architecture.",
    icon: "Cloud",
    color: "violet",
  },
  {
    id: "aerospace",
    title: "Aerospace & Digital Twins",
    description: "AI-driven turbojet engine health monitoring and predictive maintenance for HAL.",
    icon: "Plane",
    color: "amber",
  },
  {
    id: "product",
    title: "Product Engineering",
    description: "Turning technical ideas into usable systems — from healthcare queues to EdTech platforms.",
    icon: "Rocket",
    color: "rose",
  },
] as const;
