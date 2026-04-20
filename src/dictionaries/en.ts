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
};
