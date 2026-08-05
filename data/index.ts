export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const myTechStack = [
  "Vulnerability Assessment",
  "API Security Testing",
  "Web Application Security",
  "Threat Detection",
  "Incident Response",
  "Burp Suite",
  "Wazuh",
  "Graylog",
  "Nmap",
  "Metasploit",
  "SQLMap",
  "Sublist3r",
  "John the Ripper",
  "Sophos Firewall",
  "Ngrok",
  "Python",
  "Bash",
  "Linux",
];

export const securitySkills = [
  "Vulnerability Assessment",
  "API Security Testing",
  "Web Application Security",
  "Threat Detection",
  "Incident Response",
];

export const toolsAndPlatforms = [
  "Burp Suite",
  "Wazuh",
  "Graylog",
  "Nmap",
  "Metasploit",
  "SQLMap",
  "Sublist3r",
  "John the Ripper",
  "Sophos Firewall",
  "Ngrok",
];

export const languages = ["Python", "Bash", "Linux"];

export const softSkills = ["Communication", "Problem-Solving", "Collaboration"];

export const projects = [
  {
    id: 1,
    title: "Fraudlock - ML Phishing Detection",
    description:
      "Developed an ML-based fraud detection system for phishing SMS classification using Python and TF-IDF. Achieved strong performance across evaluation metrics to enhance secure communication and fraud awareness.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/",
    link: "#",
    techs: ["Python", "Machine Learning", "TF-IDF", "Fraud Detection", "Security"],
  },
  {
    id: 2,
    title: "SSRF Exploitation & Vulnerability Analysis",
    description:
      "Set up a public listener using Ngrok to capture server-side requests and confirmed SSRF by triggering inbound HTTP requests. Exploited WordPress XML-RPC vulnerability to access internal services and retrieved sensitive server data, including 30+ Windows DLL files.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-start",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/",
    link: "#",
    techs: ["Ngrok", "WordPress", "Burp Suite", "SSRF", "XML-RPC"],
  },
  {
    id: 3,
    title: "IDOR & Broken Access Control Exploitation",
    description:
      "Identified Insecure Direct Object Reference (IDOR) vulnerabilities using Burp Suite. Successfully accessed restricted endpoints through broken access control flaws and documented findings with remediation strategies.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/",
    link: "#",
    techs: ["Burp Suite", "IDOR", "Access Control", "Web Security"],
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Shef Labs",
    title: "Security Operations Intern",
    desc: "Worked with Wazuh for alert monitoring, Graylog for log management, and Sophos Firewall for network security. Utilized ticketing systems for incident tracking and documentation. Performed threat detection, analysis, and response within a SOC environment. Investigated suspicious activities to improve security posture.",
    className: "md:col-span-2",
    location: "Ireland (Remote)",
    period: "August 2025 – Present",
    skills: ["Wazuh", "Graylog", "Sophos Firewall", "Incident Response", "Threat Detection", "SOC Operations"],
  },
  {
    id: 2,
    company: "SQI College of ICT",
    title: "Application Security Instructor",
    desc: "Mentored 20+ students in cybersecurity, covering Linux, Bash scripting, and web application security. Led hands-on labs using Nmap, Metasploit, Burp Suite, and SQLMap. Taught vulnerabilities such as SQLi, XSS, and MITM alongside incident response basics.",
    className: "md:col-span-2",
    location: "Ibadan, Nigeria (Remote)",
    period: "January 2025 – August 2025",
    skills: ["Linux", "Bash Scripting", "Web Security", "Burp Suite", "Metasploit", "Nmap", "SQLMap"],
  },
  {
    id: 3,
    company: "Mastercard",
    title: "Cybersecurity Analyst (Virtual Experience)",
    desc: "Completed a simulation on Mastercard's Security Awareness Team. Identified security gaps and contributed to improved compliance outcomes.",
    className: "md:col-span-2",
    location: "San Francisco, CA (Remote)",
    period: "April 2024",
    skills: ["Security Awareness", "Vulnerability Assessment", "Compliance", "Security Audit"],
  },
  {
    id: 4,
    company: "Cyber & Forensics Security Solutions",
    title: "Cybersecurity Intern",
    desc: "Ranked among top 50 interns for strong cybersecurity performance. Used Sublist3r, Nmap, and John the Ripper for security assessments. Conducted exploitation exercises using Metasploit, strengthening vulnerability analysis skills.",
    className: "md:col-span-2",
    location: "India (Remote)",
    period: "December 2023",
    skills: ["Sublist3r", "Nmap", "John the Ripper", "Metasploit", "Vulnerability Analysis"],
  },
];

export const leadership = [
  {
    id: 1,
    role: "Infrastructure and Security Track Lead",
    organization: "Google Developer Group – Babcock University",
    period: "September 2025 – Present",
    location: "Ogun State, Nigeria",
    bullets: [
      "Lead teams in Blockchain, Web3, and Networking.",
      "Organize workshops and security-focused learning programs.",
      "Coordinate technical initiatives and campus events.",
    ],
  },
  {
    id: 2,
    role: "Remote Ambassador",
    organization: "Google Women Techmakers",
    period: "August 2024 – Present",
    location: "Remote",
    bullets: [
      "Promote inclusion and support women in tech through global initiatives.",
    ],
  },
];

export const certifications = [
  {
    title: "Certified LLM Security Professional (CLLMSP)",
    issuer: "Red Team Leaders",
    date: "June 2026",
    desc: "Certified in identifying and mitigating security risks specific to large language models and AI systems.",
  },
  {
    title: "Certified Cybersecurity Educator Professional",
    issuer: "Red Team Leaders",
    date: "Certified",
    desc: "Certified in delivering structured cybersecurity education and training programs.",
  },
  {
    title: "PCI DSS Foundation Training Program",
    issuer: "Nethost Legislation UK Limited",
    date: "Trained",
    desc: "Trained in Payment Card Industry Data Security Standards and compliance frameworks.",
  },
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Coursera",
    date: "Completed",
    desc: "Completed Google's professional cybersecurity program covering threat management, network security, and SIEM tools.",
  },
];

export const publications = [
  {
    title:
      "A Multilingual Web-Based SMS Phishing Detection System Tailored to the Nigerian Threat Landscape",
    journal:
      "International Journal of Advanced Research in Computer Science (IJARCS), 17(3), 2026.",
    role: "Lead Author",
    doi: "10.26483/ijarcs.v17i3.7439",
    authors: "Arogundade, O. et al.",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "assets/linkedin.svg",
    link: "https://linkedin.com",
  },
  {
    id: 2,
    img: "assets/git.svg",
    link: "https://github.com",
  },
  {
    id: 3,
    img: "assets/web.svg",
    link: "mailto:arogundadeoluwatomilola@gmail.com",
  },
];

export const skills = myTechStack;
