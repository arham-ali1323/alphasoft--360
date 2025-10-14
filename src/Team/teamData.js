import CEo from "../assets/img/CEo.jpeg";
import maroof_sultan from "../assets/img/person1.jpg";
import muhammad_shahbaz from "../assets/img/person2.jpg";
import person3 from "../assets/img/person3.jpg";
import arham_ali from "../assets/img/portrait-1.jpg";
import portrait2 from "../assets/img/portrait-3.jpg";
import ahmed_hassan from "../assets/img/portrait-4.jpg";
import portrait4 from "../assets/img/portrait-5.jpg";
import portrait5 from "../assets/img/portrait-6.jpg";

const teamMembers = [
  // Maroof Sultan
  {
    id: "maroof-sultan",
    image: maroof_sultan,
    name: "Maroof Sultan",
    role: "Full Stack Laravel Developer",
    bio: "Expert in agile methodologies with a track record of delivering enterprise projects on time and within scope.",
    contact: {
      email: "maroofsultan.dev@gmail.com",
      phone: "+92 310 6510421",
    },
    biography: [
      "Maroof Sultan is a full-stack developer skilled in Laravel, Next.js, Symfony, OpenCart, Python, and CI/CD pipelines. He specializes in designing responsive, high-performance web applications with clean, scalable architectures.",
      "He combines his technical expertise with strong analytical and problem-solving skills, bringing efficient, data-driven solutions to complex projects.",
      "Maroof has worked on multiple projects, including e-commerce platforms, enterprise software, and custom web solutions — focusing on optimization, modern technologies, and seamless user experiences.",
      "He’s passionate about continuous learning, collaboration, and building innovative solutions that merge creativity with functionality.",
    ],
    skills: [
      { name: "Laravel Development", percentage: 95 },
      { name: "Next.js", percentage: 80 },
      { name: "Symfony", percentage: 80 },
      { name: "OpenCart", percentage: 93 },
      { name: "CI/CD Pipelines", percentage: 70 },
      { name: "PHP", percentage: 94 },
      { name: "JavaScript (ES6+)", percentage: 80 },
      { name: "HTML5 & CSS3", percentage: 96 },
      { name: "Bootstrap & Tailwind CSS", percentage: 94 },
      { name: "Responsive Web Design", percentage: 93 },
      { name: "Git & GitHub", percentage: 95 },
    ],
    socials: {
      stackoverflow: "https://stackoverflow.com",
      linkedin: "https://www.linkedin.com/in/maroof-sultan-081b33220",
      github: "https://github.com/MaroofSultan17",
    },
  },
  // Shahbaz
  {
    id: "Muhammad Shahbaz",
    image: muhammad_shahbaz,
    name: "Muhammad Shahbaz",
    role: "Full Stack Developer",
    bio: "Skilled in modern web technologies with a proven ability to deliver robust, scalable, and efficient software solutions.",
    contact: {
      email: "shahbaz.dev012@gmail.com",
      phone: "+92 310 6510421",
    },
    biography: [
      "Muhammad Shahbaz is a Full Stack Developer experienced in Laravel, Next.js, Symfony, and OpenCart. He focuses on building responsive, high-performance web applications with clean and scalable architectures.",
      "He combines deep technical knowledge with strong analytical thinking and problem-solving skills, delivering efficient, data-driven solutions for complex challenges.",
      "Shahbaz has contributed to a range of projects, including enterprise platforms, e-commerce systems, and custom web solutions — always prioritizing performance, maintainability, and seamless user experiences.",
      "He’s passionate about continuous learning, teamwork, and crafting innovative digital products that blend creativity with functionality.",
    ],
    skills: [
      { name: "Laravel Development", percentage: 80 },
      { name: "Next.js", percentage: 70 },
      { name: "Symfony", percentage: 70 },
      { name: "OpenCart", percentage: 90 },
      { name: "PHP", percentage: 80 },
      { name: "JavaScript (ES6+)", percentage: 80 },
      { name: "HTML5 & CSS3", percentage: 90 },
      { name: "Bootstrap & Tailwind CSS", percentage: 90 },
      { name: "Responsive Web Design", percentage: 90 },
      { name: "Git & GitHub", percentage: 95 },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/shahbazdev012/",
      github: "https://github.com/shahbazdev012/",
      stackoverflow:"https://stackoverflow.com/users/24616554/muhammad-shahbaz",
    },
  },
  //  Mozzam
  {
    id: "sophia-turner",
    image: person3  ,
    name: "Mozam",
    role: "UI/UX Designer",
    bio: "Designing elegant, human-centered interfaces that enhance usability and delight users.",
    contact: {
      email: "sophia@alphasoft360.com",
      phone: "(123) - 666 -1452",
    },
    biography: [
      "Sophia Turner has designed over 60+ digital interfaces across web and mobile platforms. Her user-centric design process ensures every interaction feels seamless and visually engaging.",
      "She combines research-driven design with creativity to create memorable user experiences that align with business goals.",
    ],
    skills: [
      { name: "Figma / Adobe XD", percentage: 94 },
      { name: "Wireframing", percentage: 88 },
      { name: "UX Research", percentage: 91 },
      { name: "Prototyping", percentage: 89 },
      { name: "Accessibility Design", percentage: 87 },
    ],
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "https://github.com/MuazamMughal",
    },
  },
  // Arham Ali
  {
    id: "arham-ali",
    image: arham_ali,
    name: "Arham Ali",
    role: "Frontend developer and Designer",
    bio: "Expert in agile methodologies with a track record of delivering enterprise projects on time and within scope.",
    contact: {
      email: "arham.ali1323.com",
      phone: "+92 321 10651323",
    },
    biography: [
      "Arham Ali is a Front-End Developer skilled in React.js, JavaScript, Bootstrap, and Tailwind CSS. He specializes in designing responsive, high-performance web interfaces with clean, user-friendly layouts.",
      "He combines his background in Economics with strong analytical and problem-solving skills, bringing data-driven thinking into his development approach.",
      "Arham has worked on multiple projects including a portfolio website, a real estate UI, and a car rental app — focusing on optimization, modern design, and seamless user experience.",
      "He’s passionate about continuous learning, collaboration, and building innovative solutions that merge creativity with functionality.",
    ],
    skills: [
      { name: "React.js Development", percentage: 95 },
      { name: "JavaScript (ES6+)", percentage: 92 },
      { name: "HTML5 & CSS3", percentage: 96 },
      { name: "Bootstrap & Tailwind CSS", percentage: 94 },
      { name: "Responsive Web Design", percentage: 93 },
      { name: "UI/UX Implementation", percentage: 90 },
      { name: "Web Performance Optimization", percentage: 88 },
      { name: "Git & GitHub", percentage: 85 },
    ],
    socials: {
      stackoverflow : "https://stackoverflow.com/users/31519431/arham-ali",
      linkedin: "https://www.linkedin.com/in/arham-ali1323/",
      github: "https://github.com/arham-ali1323",
    },
  },
  // fazain
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
      "He enjoys collaborating across teams to build responsive, secure, and maintainable solutions for clients.",
    ],
    skills: [
      { name: "React.js / Next.js", percentage: 90 },
      { name: "Node.js / Express", percentage: 87 },
      { name: "Database Systems", percentage: 85 },
      { name: "API Integration", percentage: 89 },
      { name: "Testing & Debugging", percentage: 88 },
    ],
   socials: {
      stackoverflow : "https://stackoverflow.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  // Ahmed
  {
    id: "ahmed_hassan",
    image: ahmed_hassan,
    name: "Ahmad Hassan Zafar",
    role: "Frontend Developer",
    bio: "Turning data and insights into meaningful business strategies that drive performance.",
    contact: {
      email: "ahassandevx@gmail.com",
      phone: "+92 327 1888082",
    },
    biography: [
      " Ahmad Hassan is a passionate Web Developer skilled in HTML, CSS, Bootstrap, and JavaScript, dedicated to creating modern, responsive, and user-friendly websites. He focuses on clean code and elegant design to deliver seamless digital experiences.",
    ],
    skills: [
      { name: "JavaScript (ES6+)", percentage: 92 },
      { name: "HTML5 & CSS3", percentage: 96 },
      { name: "Bootstrap & Tailwind CSS", percentage: 94 },
      { name: "Responsive Web Design", percentage: 93 },
      { name: "UI/UX Implementation", percentage: 90 },
      { name: "Web Performance Optimization", percentage: 88 },
      { name: "Git & GitHub", percentage: 85 },
    ],
    socials: {
      stackoverflow : "https://stackoverflow.com/",
      linkedin:  "https://www.linkedin.com/in/ahmad-hassan-41a28b26b/",
      github:       "https://github.com/ahassandev",

    },
  },
  // sameer
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
      "He’s passionate about mentoring QA engineers and promoting test-driven development within the engineering team.",
    ],
    skills: [
      { name: "Automation Testing", percentage: 95 },
      { name: "Manual Testing", percentage: 91 },
      { name: "Bug Tracking", percentage: 89 },
      { name: "Test Strategy", percentage: 92 },
      { name: "Quality Assurance", percentage: 90 },
    ],
    socials: {
      linkedin: "#",
      github: "#",
      stackoverflow: "#",
    },
  },
  // ubadullah
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
      "Her strength lies in blending creativity with analytics to deliver content that ranks and resonates.",
    ],
    skills: [
      { name: "SEO Writing", percentage: 91 },
      { name: "Content Strategy", percentage: 89 },
      { name: "Keyword Research", percentage: 86 },
      { name: "Copywriting", percentage: 93 },
      { name: "Brand Messaging", percentage: 88 },
    ],
     socials: {
      stackoverflow : "https://stackoverflow.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
];

export default teamMembers;
