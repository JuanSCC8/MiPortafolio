export type Dictionary = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    university: string;
    description: string;
    downloadCV: string;
    contactMe: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    career: string;
    university: string;
    interestsTitle: string;
    gaming: { title: string; description: string; items: string[] };
    sports: { title: string; description: string; items: string[] };
    music: { title: string; description: string; items: string[] };
    goalsTitle: string;
    goalsDescription: string;
    frontend: string;
    backend: string;
    databases: string;
    fullstack: string;
  };
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    databases: string;
    other: string;
    basic: string;
    intermediate: string;
    advanced: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewDemo: string;
    comingSoon: string;
    noDemo: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    academic: string;
    work: string;
    present: string;
    seeking: string;
    available: string;
    openBadge: string;
  };
  footer: {
    message: string;
    builtWith: string;
    madeIn: string;
    copyright: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
};

export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Software Engineering Student",
    university: "Universidad Cooperativa de Colombia",
    description:
      "Passionate about software development and building solutions that make a difference. Available for internships and freelance projects.",
    downloadCV: "Download CV",
    contactMe: "Contact Me",
  },
  about: {
    title: "About Me",
    subtitle: "A little more about who I am",
    description:
      "I'm Juan Sebastian Castaño Camues, a Software Engineering student at Universidad Cooperativa de Colombia in Pasto. I'm passionate about building technology solutions that create real impact. I love learning, growing as a developer, and taking on new challenges.",
    location: "Pasto, Colombia",
    career: "Software Engineering",
    university: "Universidad Cooperativa de Colombia",
    interestsTitle: "Personal Interests",
    gaming: {
      title: "Video Games",
      description: "In my free time I enjoy playing video games like:",
      items: ["Fortnite", "Valorant", "Brawlhalla", "Clash Royale", "A classic PES and now FIFA"],
    },
    sports: {
      title: "Sports",
      description: "I really enjoy sports, standing out mainly in football and futsal, training 3 times a week at university and representing it in tournaments. I also enjoy playing:",
      items: ["Football", "Futsal", "Basketball", "Volleyball", "Chess"],
    },
    music: {
      title: "Music",
      description: "My music taste is very varied: from salsa, bachata, and English music to rap and many other genres all the way to reggaeton.",
      items: ["Salsa", "Bachata", "English Music", "Rap", "Reggaeton"],
    },
    goalsTitle: "Where I'm Headed",
    goalsDescription:
      "I'm passionate about both frontend and backend development, and lately databases have been catching my attention more and more. My goal is to become a full stack developer capable of building complete, scalable systems that genuinely help people.",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    fullstack: "Full Stack Developer",
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I work with",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    other: "Other Skills",
    basic: "Basic",
    intermediate: "Intermediate",
    advanced: "Advanced",
  },
  projects: {
    title: "Projects",
    subtitle: "What I've built",
    viewCode: "View Code",
    viewDemo: "Live Demo",
    comingSoon: "Coming Soon",
    noDemo: "No demo available",
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What people say about me",
  },
  footer: {
    message: "Building solutions that make a difference.",
    builtWith: "Built with",
    madeIn: "Made in Colombia 🇨🇴",
    copyright: "© 2026 Juan Sebastian Castaño Camues",
  },
  contact: {
    title: "Contact",
    subtitle: "Let's talk",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "your@email.com",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent! I'll get back to you soon.",
    error: "Something went wrong. Please try again.",
  },
  experience: {
    title: "Experience",
    subtitle: "My journey so far",
    academic: "Academic",
    work: "Work",
    present: "Present",
    seeking: "Seeking opportunities",
    available: "Available for internships and freelance projects",
    openBadge: "Open to Work",
  },
};
