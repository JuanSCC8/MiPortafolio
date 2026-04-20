export type Dictionary = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
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
    gaming: { title: string; items: string[] };
    sports: { title: string; items: string[] };
    music: { title: string; items: string[] };
    goalsTitle: string;
    goalsDescription: string;
    frontend: string;
    backend: string;
    databases: string;
    fullstack: string;
  };
};

export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
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
      items: ["Fortnite", "Valorant", "Brawlhalla", "Clash Royale", "PES / FIFA"],
    },
    sports: {
      title: "Sports",
      items: ["Football", "Futsal", "Basketball", "Volleyball", "Chess"],
    },
    music: {
      title: "Music",
      items: ["Salsa", "English Music", "Rap", "Reggaeton"],
    },
    goalsTitle: "Where I'm Headed",
    goalsDescription:
      "I'm passionate about both frontend and backend development, and lately databases have been catching my attention more and more. My goal is to become a full stack developer capable of building complete, scalable systems that genuinely help people.",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    fullstack: "Full Stack Developer",
  },
};
