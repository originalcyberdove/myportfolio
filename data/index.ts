// Portfolio content. Update this file to keep the portfolio and CV details aligned.

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export const navItems = navLinks.map(({ label, href }) => ({
  name: label,
  link: href,
}));

export const hero = {
  fullName: "Oluwatomilola Arogundade",
  alias: "Cyberdove",
  title: "Cybersecurity professional",
  tagline: "Security operations. Application security. Research.",
  intro:
    "I work across security operations, application security, and security education. My research focuses on phishing detection shaped around the Nigerian threat landscape.",
  cvPath: "/Oluwatomilola_s_CV.pdf",
  portraitPath: "/media/profile/portrait.jpg",
};

export const about = {
  paragraphs: [
    "My work brings together hands-on security operations and application security education. At Shef Labs, I investigate alerts and support SOC response; at SQI College of ICT, I teach practical security fundamentals.",
    "I am interested in making security useful and accessible in the contexts where people live and work. That interest informs my research on multilingual SMS phishing detection and my work on MedLink, a healthcare connectivity platform.",
  ],
  education: {
    institution: "Babcock University",
    location: "Ilishan-Remo, Nigeria",
    degree: "B.Sc. Computer Science",
    period: "2022–2026",
    classification: "First Class Honours",
    cgpa: "4.61/5.00",
  },
  interests: [
    "Phishing and threat detection",
    "LLM and AI security",
    "Security operations",
    "Security education and awareness",
    "Civic and health technology security",
    "Application security",
  ],
};

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Security operations",
    icon: "shield",
    skills: ["Wazuh", "Graylog", "Sophos", "Alert triage", "Incident response"],
  },
  {
    title: "Application security",
    icon: "bug",
    skills: ["Burp Suite", "Nmap", "Metasploit", "SQLMap", "OWASP Top 10"],
  },
  {
    title: "Systems and development",
    icon: "terminal",
    skills: ["Linux", "Bash", "Python", "React", "TypeScript", "GitHub"],
  },
  {
    title: "Research",
    icon: "brain",
    skills: ["Machine learning", "Threat detection", "Security research"],
  },
];

export const skills = skillCategories.flatMap(({ skills: categorySkills }) =>
  categorySkills
);

export type ProjectStatus = "Completed" | "Ongoing";
export type ProjectCategory =
  | "AI & Cybersecurity"
  | "Application Security"
  | "Health technology";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
  year?: string;
  summary: string;
  description: string[];
  keyDetails: string[];
  technologies: string[];
  tools?: string[];
  liveUrl?: string;
  caseStudy?: {
    overview: string[];
    objectives: string[];
    role: string[];
    methodology: string[];
    observations: string[];
    lessons: string[];
  };
  mediumUrl?: string;
  screenshots?: { src: string; caption: string }[];
}

export const projects: Project[] = [
  {
    id: "ai-assisted-security-testing",
    title: "AI-Assisted Web Application Security Testing",
    category: "Application Security",
    status: "Completed",
    featured: true,
    year: "2026",
    summary:
      "An exploration of AI-assisted web application testing through integrations between AI assistants and Burp Suite Professional.",
    description: [
      "This research explored AI-assisted workflows for web application security testing, including environment configuration, HTTP traffic analysis, authorization testing, and structured assessment reporting.",
      "The work combined Burp Suite Professional with AI assistants through a Model Context Protocol integration. AI-generated observations were treated as leads for further investigation rather than automatically confirmed findings.",
    ],
    keyDetails: [
      "Configured Antigravity to interact with Burp Suite Professional through MCP.",
      "Assessed FraudLock across authentication, authorization, business logic, input validation, error handling, and API security.",
      "Configured a Claude-assisted workflow to inspect proxy history and prepare Repeater and Intruder testing workflows in a controlled DVWA environment.",
      "Distinguishes investigated observations from findings that have been independently validated.",
    ],
    technologies: [
      "Burp Suite Professional",
      "Burp Proxy",
      "Repeater",
      "Intruder",
      "Model Context Protocol",
    ],
    tools: ["Antigravity", "Claude"],
    caseStudy: {
      overview: [
        "This project investigated whether AI assistants could help security practitioners configure testing workflows, inspect captured web traffic, and organise application security assessments more effectively.",
        "The work focused on reproducible configuration, careful interpretation of HTTP requests and responses, and clear separation between automated observations and validated findings.",
      ],
      objectives: [
        "Explore an MCP-based integration between Antigravity and Burp Suite Professional.",
        "Support the inspection of HTTP traffic and preparation of structured security assessment notes.",
        "Assess FraudLock for authentication, authorization, business logic, input validation, error handling, and API security concerns.",
        "Evaluate Claude-assisted proxy-history review for potential authorization issues in a controlled environment.",
      ],
      role: [
        "Configured the Burp Suite environment and AI integration.",
        "Selected and organised relevant proxy traffic for analysis.",
        "Prepared Repeater and Intruder workflows for controlled testing.",
        "Reviewed AI-generated observations and avoided presenting unverified leads as confirmed vulnerabilities.",
      ],
      methodology: [
        "Configured Burp Proxy to capture application traffic in a controlled testing environment.",
        "Used the MCP integration to examine relevant requests and supporting context.",
        "Assessed target areas systematically, including authentication, authorization, business logic, input validation, error handling, and API security.",
        "For the DVWA authorization-bypass exercise, reviewed proxy history and prepared follow-up Repeater and Intruder workflows. Low-privilege verification was not completed, so no IDOR result is presented as confirmed.",
        "Triaged AI-generated observations against available evidence and documented appropriate remediation considerations.",
      ],
      observations: [
        "AI assistance was useful for organising traffic, identifying test hypotheses, and drafting structured assessment notes.",
        "Generated findings require practitioner review because context, exploitability, and validation status cannot be assumed.",
        "A Claude-assisted IDOR hypothesis was investigated, but the supplied workflow did not complete low-privilege verification.",
        "No AI-generated finding is presented here as independently verified unless validation evidence is available.",
      ],
      lessons: [
        "Human review remains essential when interpreting proxy data and authorization behavior.",
        "A useful AI-assisted assessment must preserve traceability from observations to requests, responses, and remediation guidance.",
        "The workflow should clearly label hypotheses, investigated areas, and independently validated findings.",
        "Sanitized screenshots and reports are necessary when publishing security work.",
      ],
    },
    mediumUrl: "",
  },
  {
    id: "fraudlock-ng",
    title: "Fraudlock NG",
    category: "AI & Cybersecurity",
    status: "Completed",
    featured: true,
    summary:
      "A multilingual SMS phishing detection web application built for the Nigerian threat landscape.",
    description: [
      "Built as a team final-year project, Fraudlock NG applies machine learning to SMS scam detection with local language and accessibility needs in mind.",
    ],
    keyDetails: [
      "Trained a calibrated LinearSVC classifier on approximately 5,000 Nigerian SMS samples, reaching approximately 92% accuracy.",
      "Includes text-to-speech support and an admin interface for flagging messages.",
      "The research was published in the International Journal of Advanced Research in Computer Science.",
    ],
    technologies: ["Python", "Django", "React", "TypeScript", "PostgreSQL"],
    liveUrl: "https://fraudlock.vercel.app",
  },
  {
    id: "medlink",
    title: "MedLink",
    category: "Health technology",
    status: "Ongoing",
    featured: true,
    summary:
      "A multilingual healthcare connectivity platform for patients, verified facilities, and practitioners.",
    description: [
      "MedLink is a digital healthcare platform designed to connect patients with verified facilities and practitioners in Nigeria.",
    ],
    keyDetails: [
      "Supports English, Yoruba, Hausa, and Igbo.",
      "Includes development of an offline USSD emergency gateway for people without internet-enabled devices or reliable connectivity.",
      "Selected as a Tier 1 beneficiary of the Ekiti State Innovation Enterprise Support Fund in 2026.",
    ],
    technologies: [],
    liveUrl: "https://medlinkk.app",
  },
  {
    id: "application-security-assessments",
    title: "Application security assessments",
    category: "Application Security",
    status: "Completed",
    summary:
      "Practical assessments of SSRF and broken access-control issues, with findings and remediation guidance.",
    description: [
      "Applied security work documented in my CV includes a blind SSRF vulnerability chain assessment and an IDOR/broken access-control assessment.",
    ],
    keyDetails: [
      "Assessed a blind SSRF vulnerability chain and documented findings and remediation guidance.",
      "Identified IDOR and access-control vulnerabilities and prepared remediation recommendations.",
    ],
    technologies: [],
    tools: ["Burp Suite"],
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    role: "Security Operations Intern",
    company: "Shef Labs",
    location: "Ireland (remote)",
    period: "August 2025 – present",
    responsibilities: [
      "Monitor alerts in Wazuh and Graylog, investigate suspicious activity, and coordinate response in a SOC environment.",
      "Support network and firewall security operations using Sophos, including policy enforcement and access-control monitoring.",
      "Analyse, document, and escalate incidents in line with SOC playbooks.",
      "Improve ticket quality and response tracking through structured documentation.",
    ],
  },
  {
    role: "Application Security Instructor",
    company: "SQI College of ICT",
    location: "Ibadan, Nigeria",
    period: "January–August 2025; August 2026 – present",
    responsibilities: [
      "Teach application security and cybersecurity fundamentals to 40+ students through lectures, demonstrations, and hands-on labs.",
      "Cover Linux, Bash, networking, web application security, SQL injection, XSS, MITM attacks, and API security.",
      "Guide practical exercises using Nmap, Metasploit, Burp Suite, and SQLMap.",
    ],
  },
];

export interface Leadership {
  role: string;
  org?: string;
  period: string;
  details: string[];
}

export const leadership: Leadership[] = [
  {
    role: "Infrastructure and Security Track Lead / Cybersecurity Specialist",
    org: "Google Developer Groups, Babcock University",
    period: "September 2025 – May 2026",
    details: [
      "Led community activities across cybersecurity, networking, blockchain/Web3, and cloud for 30+ members.",
      "Coordinated technical learning initiatives, workshops, mentorship, and community engagement.",
    ],
  },
  {
    role: "Cybersecurity Lead",
    org: "Google Developer Groups, Babcock University",
    period: "2024–2025",
    details: [
      "Organised and supported eight cybersecurity events, including workshops, virtual sessions, CTF activities, and mentorship programmes.",
      "Provided one-to-one technical support and helped learners get started with cybersecurity tools.",
    ],
  },
  {
    role: "Assistant Superintendent and Group Leader",
    org: "Ebenezer Chapel Sabbath School Department, Babcock University",
    period: "September 2024 – April 2026",
    details: [
      "Oversaw 13 Sabbath School groups involving 250+ students and led one group, facilitating weekly learning sessions.",
      "Coordinated communication across groups and supported programme activities.",
    ],
  },
  {
    role: "Head, Media Team 2",
    org: "Ebenezer Chapel, Babcock University",
    period: "2024–2025",
    details: [
      "Led media activities for church programmes, contributed to the visual identity, and coordinated weekly social media content.",
    ],
  },
];

export const communityEvents = [
  {
    title:
      "From First Steps to First Job: Navigating Cybersecurity Skills, Career Transitions and the Evolving Job Market",
    organisation: "Google Developer Groups, Babcock University with GDG LAUTECH",
    date: "13 July 2026",
    detail: "Hosted a collaborative event with 100+ registrations and 40+ attendees.",
  },
  {
    title: "Overview of Cloud Security",
    organisation: "Google Developer Groups, Nigeria",
    date: "13 April 2025",
    detail: "Co-hosted a technical session introducing fundamental cloud security concepts.",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  image?: string;
  issueDate?: string;
}

export const certifications: Certification[] = [
  {
    title: "ISO 27001 Foundation Training",
    issuer: "Nethost Legislation UK Limited",
    issueDate: "July 2026",
  },
  {
    title: "Certified LLM Security Professional (CLLMSP)",
    issuer: "Red Team Leaders",
    issueDate: "June 2026",
  },
  {
    title: "Certified Cybersecurity Educator Professional",
    issuer: "Red Team Leaders",
    issueDate: "2025",
  },
  {
    title: "PCI DSS Foundation Training Program",
    issuer: "Nethost Legislation UK Limited",
    issueDate: "July 2026",
  },
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Coursera",
    issueDate: "2023",
  },
];

export interface Publication {
  authors: string;
  year: string;
  title: string;
  journal: string;
  volume: string;
  doi: string;
}

export const publications: Publication[] = [
  {
    authors: "Arogundade, O. et al.",
    year: "2026",
    title:
      "A Multilingual Web-Based SMS Phishing Detection System Tailored to the Nigerian Threat Landscape",
    journal: "International Journal of Advanced Research in Computer Science",
    volume: "17(3), June 2026",
    doi: "https://doi.org/10.26483/ijarcs.v17i3.7439",
  },
];

export const recognition = [
  {
    title: "Tier 1 Beneficiary",
    organisation: "Ekiti State Innovation Enterprise Support Fund (IESF)",
    year: "2026",
    detail: "Selected for support toward developing MedLink.",
  },
  {
    title: "Second Runner-up",
    organisation: "Edugrant Monthly Essay Competition",
    year: "2021",
    detail: "The essay was published by BusinessDay.",
  },
];

export type MediaCategory =
  | "All"
  | "Teaching"
  | "Certifications"
  | "Projects"
  | "Research & Labs"
  | "Community Activities";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  category: MediaCategory;
  title: string;
  description: string;
  src?: string;
  thumbnail?: string;
  embedUrl?: string;
  topic?: string;
}

// No screenshots, certificate scans, or event photos have been supplied yet.
export const mediaItems: MediaItem[] = [];

export const contact = {
  heading: "Get in touch",
  subtext:
    "For conversations about security operations, research, teaching, or collaboration.",
  email: "oluwatomilolaarogundade@gmail.com",
  linkedin: "https://www.linkedin.com/in/tomilola2728",
  github: "https://github.com/originalcyberdove",
  twitter: "",
};

export const socialMedia = [
  {
    id: "linkedin",
    img: "/assets/linkedin.svg",
    link: contact.linkedin,
  },
  {
    id: "github",
    img: "/assets/git.svg",
    link: contact.github,
  },
  {
    id: "email",
    img: "/assets/web.svg",
    link: `mailto:${contact.email}`,
  },
];

export const bootMessages: { text: string; delay: number }[] = [];
