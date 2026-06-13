export const PROFILE = {
  name: "Arulbabu",
  shortName: "Arul",
  initials: "AB",
  title: "Python Full Stack Developer",
  location: "Tamil Nadu, India",
  email: "rmarulbabu@gmail.com",
  github: "https://github.com/rmarulbabu",
  linkedin: "https://linkedin.com/in/rmarulbabu",
  twitter: "https://github.com/rmarulbabu",
  resumeUrl: "/resume.pdf",
  photo: "/profile.svg",
  bio: "I am a Python Full Stack Developer focused on React, Node.js, and modern web applications.",
  longBio:
    "I build end-to-end web products — crafting clean React interfaces on the frontend and robust Python services on the backend. I enjoy turning ideas into shipping software using React, Node.js, Express and MongoDB, with a strong focus on performance and developer experience.",
};

export const COUNTERS = [
  { label: "Projects Built", value: 18, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "" },
  { label: "GitHub Commits", value: 1200, suffix: "+" },
  { label: "Years Coding", value: 3, suffix: "" },
];

export const EDUCATION = [
  {
    year: "B.E · CSE",
    title: "B.E in Computer Science and Engineering",
    org: "Sri Ranganathar College, Coimbatore",
    desc: "Studied core CS — data structures, algorithms, databases and web technologies — while building side projects in Python and React.",
  },
];

export const SKILL_GROUPS = [
  { title: "Backend", accent: "#00D4FF",
    skills: [{ name: "Python", level: 92 }, { name: "Node.js", level: 88 }, { name: "Express", level: 86 }] },
  { title: "Frontend", accent: "#8A2BE2",
    skills: [{ name: "React", level: 92 }, { name: "JavaScript", level: 90 }, { name: "HTML / CSS", level: 94 }] },
  { title: "Data & Tooling", accent: "#00FF88",
    skills: [{ name: "MongoDB", level: 88 }, { name: "Git", level: 90 }, { name: "REST APIs", level: 90 }] },
];

export const PROJECTS = [
  { id: "ai-chatbot", title: "AI Chatbot", category: "AI",
    desc: "Conversational assistant with streaming responses, conversation memory and a clean React chat UI.",
    tech: ["Python", "Node.js", "React", "OpenAI"],
    image: "https://images.unsplash.com/photo-1642516303080-431f6681f864?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFpJTIwbmV1cmFsfGVufDB8fHx8MTc4MTI1MjA2NXww&ixlib=rb-4.1.0&q=85",
    demo: "#", repo: "https://github.com/rmarulbabu" },
  { id: "smartfee", title: "SmartFee College Fee System", category: "Full Stack",
    desc: "End-to-end fee management platform with role-based dashboards, payments and reporting.",
    tech: ["Python", "Express", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZGFzaGJvYXJkJTIwZGFya3xlbnwwfHx8fDE3ODEyNTIwNjV8MA&ixlib=rb-4.1.0&q=85",
    demo: "#", repo: "https://github.com/rmarulbabu" },
  { id: "weather", title: "Weather App", category: "React",
    desc: "Animated weather companion with hourly forecasts, geolocation and dynamic scene rendering.",
    tech: ["React", "JavaScript", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1603288967520-f3e04381dc02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3Rvcm15JTIwY2xvdWRzfGVufDB8fHx8MTc4MTI1MjA2NXww&ixlib=rb-4.1.0&q=85",
    demo: "#", repo: "https://github.com/rmarulbabu" },
  { id: "portfolio", title: "Portfolio Website", category: "React",
    desc: "The site you're looking at — built with React, Framer Motion and a generous dose of glassmorphism.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxjb2RlJTIwb24lMjBzY3JlZW58ZW58MHx8fHwxNzgxMjUyMDY1fDA&ixlib=rb-4.1.0&q=85",
    demo: "#", repo: "https://github.com/rmarulbabu" },
  { id: "tasks", title: "Task Management App", category: "Full Stack",
    desc: "Kanban-style task workspace with realtime collaboration, focus timers and shared sprint boards.",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1763926444192-08bba5ffdd46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZ2xvd2luZyUyMGJsb2Nrc3xlbnwwfHx8fDE3ODEyNTIwNjV8MA&ixlib=rb-4.1.0&q=85",
    demo: "#", repo: "https://github.com/rmarulbabu" },
];

export const PROJECT_FILTERS = ["All", "React", "Full Stack", "AI"];

export const SERVICES = [
  { title: "Frontend Development", desc: "Pixel-precise React interfaces with motion, accessibility and design-system rigor.", icon: "FiMonitor" },
  { title: "Backend APIs", desc: "Python and Node.js services that scale — typed, tested and observable.", icon: "FiServer" },
  { title: "Full Stack Web Apps", desc: "From idea to production: architecture, auth, dashboards and deployment.", icon: "FiLayers" },
  { title: "Responsive UI Design", desc: "Fluid layouts that look great on every screen — phone to ultrawide.", icon: "FiSmartphone" },
  { title: "AI Integration", desc: "LLM-powered chat, embeddings and structured generation woven into your product.", icon: "FiCpu" },
  { title: "Database Design", desc: "MongoDB schemas modeled for the actual queries your app needs.", icon: "FiDatabase" },
];

export const TESTIMONIALS = [
  { quote: "Arulbabu shipped our AI chatbot prototype in record time and the code was clean from day one.",
    name: "Project Mentor", role: "Sri Ranganathar College" },
  { quote: "Great eye for UI and a solid Python backend developer. The whole stack just works.",
    name: "Collaborator", role: "Open Source" },
  { quote: "Communicative, fast and detail-oriented. The dashboards he built feel premium.",
    name: "Client", role: "Freelance Project" },
];