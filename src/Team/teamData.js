import CEo from "../assets/img/CEo.jpeg";
import person1 from "../assets/img/person1.jpg";
import person2 from "../assets/img/person2.jpg";
import person3 from "../assets/img/person3.jpg";
import portrait1 from "../assets/img/portrait-1.jpg";
import portrait2 from "../assets/img/portrait-3.jpg";
import portrait3 from "../assets/img/portrait-4.jpg";
import portrait4 from "../assets/img/portrait-5.jpg";
import portrait5 from "../assets/img/portrait-6.jpg";

const teamMembers = [
  {
    id: "corey-anderson",
    image: CEo,
    name: "Corey Anderson",
    role: "President & CEO",
    bio: "Visionary leader with 15+ years of experience driving innovation, empowering teams, and scaling digital transformation across industries.",
    contact: {
      email: "corey@alphasoft360.com",
      phone: "(123) - 222 -1452",
    },
    biography: [
      "Corey Anderson has led AlphaSoft360 since its inception, transforming it into a global software powerhouse. With a background in strategic management and digital innovation, he has guided the company’s expansion into multiple international markets.",
      "He believes in fostering a culture of creativity, transparency, and continuous learning — ensuring that every project exceeds client expectations and delivers measurable business value."
    ],
    skills: [
      { name: "Leadership & Strategy", percentage: 95 },
      { name: "Business Development", percentage: 92 },
      { name: "Client Relations", percentage: 88 },
      { name: "Operational Excellence", percentage: 91 },
      { name: "Team Motivation", percentage: 94 }
    ],
    socials: {
      facebook: "https://facebook.com/coreyanderson",
      instagram: "https://instagram.com/coreyanderson",
      twitter: "https://twitter.com/coreyanderson",
      linkedin: "https://linkedin.com/in/coreyanderson",
      github: "#"
    }
  },
  {
    id: "rohit-pande",
    image: person1,
    name: "Rohit Pande",
    role: "Chief Technology Officer",
    bio: "Technology strategist leading AlphaSoft360’s engineering vision, with deep expertise in cloud computing, architecture, and AI systems.",
    contact: {
      email: "rohit@alphasoft360.com",
      phone: "(123) - 333 -1452",
    },
    biography: [
      "Rohit Pande oversees AlphaSoft360’s technical roadmap, ensuring innovation and reliability at every stage. His passion for scalable systems and modern tech stacks has shaped several enterprise-level platforms.",
      "He mentors the engineering teams to adopt agile methodologies, implement CI/CD pipelines, and integrate AI-driven features into client products."
    ],
    skills: [
      { name: "Software Architecture", percentage: 93 },
      { name: "Cloud Engineering", percentage: 90 },
      { name: "AI Integration", percentage: 85 },
      { name: "Technical Leadership", percentage: 94 },
      { name: "DevOps", percentage: 89 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "https://github.com/rohitpande"
    }
  },
  {
    id: "makhaia-antitni",
    image: person2,
    name: "Makhaia Antitni",
    role: "Head of Marketing",
    bio: "Data-driven marketer turning insights into impactful campaigns that connect brands to people.",
    contact: {
      email: "makhaia@alphasoft360.com",
      phone: "(123) - 444 -1452",
    },
    biography: [
      "Makhaia Antitni has been the creative force behind AlphaSoft360’s marketing success, blending storytelling with data analytics to design campaigns that resonate globally.",
      "Her experience spans digital strategy, growth hacking, and brand positioning — helping the company expand its footprint in North America and Europe."
    ],
    skills: [
      { name: "Brand Strategy", percentage: 90 },
      { name: "Social Media Marketing", percentage: 87 },
      { name: "Campaign Management", percentage: 85 },
      { name: "Content Creation", percentage: 89 },
      { name: "SEO/SEM", percentage: 88 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "james-carter",
    image: person3,
    name: "James Carter",
    role: "Project Manager",
    bio: "Expert in agile methodologies with a track record of delivering enterprise projects on time and within scope.",
    contact: {
      email: "james@alphasoft360.com",
      phone: "(123) - 555 -1452",
    },
    biography: [
      "James Carter specializes in managing complex software projects through agile frameworks. His ability to align technical and business teams ensures smooth execution and client satisfaction.",
      "He focuses on team collaboration, sprint optimization, and proactive risk management to maintain AlphaSoft360’s high standards of delivery."
    ],
    skills: [
      { name: "Agile Project Management", percentage: 94 },
      { name: "Risk Analysis", percentage: 90 },
      { name: "Client Communication", percentage: 89 },
      { name: "Scrum Leadership", percentage: 87 },
      { name: "Team Coordination", percentage: 91 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "sophia-turner",
    image: portrait1,
    name: "Sophia Turner",
    role: "UI/UX Designer",
    bio: "Designing elegant, human-centered interfaces that enhance usability and delight users.",
    contact: {
      email: "sophia@alphasoft360.com",
      phone: "(123) - 666 -1452",
    },
    biography: [
      "Sophia Turner has designed over 60+ digital interfaces across web and mobile platforms. Her user-centric design process ensures every interaction feels seamless and visually engaging.",
      "She combines research-driven design with creativity to create memorable user experiences that align with business goals."
    ],
    skills: [
      { name: "Figma / Adobe XD", percentage: 94 },
      { name: "Wireframing", percentage: 88 },
      { name: "UX Research", percentage: 91 },
      { name: "Prototyping", percentage: 89 },
      { name: "Accessibility Design", percentage: 87 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "david-khan",
    image: portrait2,
    name: "David Khan",
    role: "Software Engineer",
    bio: "Full-stack engineer passionate about scalable, high-performance web applications.",
    contact: {
      email: "david@alphasoft360.com",
      phone: "(123) - 777 -1452",
    },
    biography: [
      "David Khan’s expertise lies in building end-to-end JavaScript applications. He’s skilled in both front-end and back-end frameworks and focuses on writing clean, reusable code.",
      "He enjoys collaborating across teams to build responsive, secure, and maintainable solutions for clients."
    ],
    skills: [
      { name: "React.js / Next.js", percentage: 90 },
      { name: "Node.js / Express", percentage: 87 },
      { name: "Database Systems", percentage: 85 },
      { name: "API Integration", percentage: 89 },
      { name: "Testing & Debugging", percentage: 88 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "emily-stone",
    image: portrait3,
    name: "Emily Stone",
    role: "Business Analyst",
    bio: "Turning data and insights into meaningful business strategies that drive performance.",
    contact: {
      email: "emily@alphasoft360.com",
      phone: "(123) - 888 -1452",
    },
    biography: [
      "Emily Stone bridges the gap between technology and business needs. Her analytical mindset helps clients clarify objectives and define data-backed roadmaps for execution.",
      "Her cross-functional collaboration ensures that each project meets measurable KPIs and user requirements."
    ],
    skills: [
      { name: "Data Analysis", percentage: 92 },
      { name: "Requirements Gathering", percentage: 90 },
      { name: "Process Optimization", percentage: 86 },
      { name: "Communication", percentage: 91 },
      { name: "Strategic Planning", percentage: 89 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "michael-brown",
    image: portrait4,
    name: "Michael Brown",
    role: "QA Lead",
    bio: "Committed to ensuring every product meets the highest standards of reliability and performance.",
    contact: {
      email: "michael@alphasoft360.com",
      phone: "(123) - 999 -1452",
    },
    biography: [
      "Michael Brown manages the QA division, building automation frameworks that reduce testing cycles and improve quality metrics. His leadership has resulted in a 30% reduction in post-deployment issues.",
      "He’s passionate about mentoring QA engineers and promoting test-driven development within the engineering team."
    ],
    skills: [
      { name: "Automation Testing", percentage: 95 },
      { name: "Manual Testing", percentage: 91 },
      { name: "Bug Tracking", percentage: 89 },
      { name: "Test Strategy", percentage: 92 },
      { name: "Quality Assurance", percentage: 90 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "isabella-rossi",
    image: portrait5,
    name: "Isabella Rossi",
    role: "Content Strategist",
    bio: "Building brand stories that captivate, educate, and convert audiences.",
    contact: {
      email: "isabella@alphasoft360.com",
      phone: "(123) - 000 -1452",
    },
    biography: [
      "Isabella Rossi creates content ecosystems that elevate brand voice and SEO performance. She has led campaigns generating a 250% increase in engagement rates.",
      "Her strength lies in blending creativity with analytics to deliver content that ranks and resonates."
    ],
    skills: [
      { name: "SEO Writing", percentage: 91 },
      { name: "Content Strategy", percentage: 89 },
      { name: "Keyword Research", percentage: 86 },
      { name: "Copywriting", percentage: 93 },
      { name: "Brand Messaging", percentage: 88 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "alex-johnson",
    image: portrait5,
    name: "Alex Johnson",
    role: "DevOps Engineer",
    bio: "Streamlining deployment pipelines and optimizing infrastructure for scalability.",
    contact: {
      email: "alex@alphasoft360.com",
      phone: "(123) - 111 -1452",
    },
    biography: [
      "Alex Johnson builds and maintains the infrastructure that keeps AlphaSoft360’s systems running efficiently. His automation-first mindset enables faster deployment and improved uptime.",
      "He’s proficient with AWS, Docker, Kubernetes, and CI/CD pipelines, ensuring reliability across environments."
    ],
    skills: [
      { name: "CI/CD", percentage: 94 },
      { name: "Kubernetes", percentage: 91 },
      { name: "AWS / Cloud", percentage: 89 },
      { name: "Infrastructure as Code", percentage: 93 },
      { name: "Monitoring & Logging", percentage: 88 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "lisa-wang",
    image: portrait3,
    name: "Lisa Wang",
    role: "Data Scientist",
    bio: "Transforming raw data into actionable insights through advanced machine learning and analytics.",
    contact: {
      email: "lisa@alphasoft360.com",
      phone: "(123) - 222 -1453",
    },
    biography: [
      "Lisa Wang specializes in predictive modeling and AI-driven insights. She has developed machine learning solutions that improve decision-making and efficiency across multiple sectors.",
      "Her focus on explainable AI ensures that stakeholders understand and trust the outcomes of data-driven initiatives."
    ],
    skills: [
      { name: "Machine Learning", percentage: 95 },
      { name: "Python / TensorFlow", percentage: 92 },
      { name: "Data Visualization", percentage: 88 },
      { name: "Predictive Analytics", percentage: 91 },
      { name: "Big Data Processing", percentage: 87 }
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
];

export default teamMembers;
