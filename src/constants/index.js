import project1 from "../assets/Screenshot (732).jpg";
import project2 from "../assets/project2.png";


export const EXPERIENCES = [
  {
    year: "2024 - present",
    role: "Tech Lead",
    company: "CSE Department Association, BIT Mesra",
    description: `Responsible for organizing and managing various tech related events at institute level for the Department of Computer Science and Engineering at BIT Mesra`,
    technologies: [],
  },
  {
    year: "Aug,2023 - 2024",
    role: "Web Developer & Graphic Designer",
    company: "LEO Club, BIT Mesra",
    description: `Designed various posters and graphic vectors for the club. Took workshops on Web dev for my junior batch which had an involvement of around 100+ .Managed events having footfall of more than 5000+ in the annual Techfest of BIT,Mesra`,
    technologies: ["HTML", "CSS", "JAVAScript","Adobe Photoshop", "CANVA","INKSCAPE"],
  },
  {
    year: "2022-2024",
    role: "Member",
    company: "NSS, BIT Mesra",
    description: `Part of NSS, BIT Mesra in which along with other members made awareness camps about various social & public awareness and responsibility`,
    technologies: [],
  },
  
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    link: "/",
    description:
      "A Modern Portfolio website built, for showcasing a modern approach to personal branding and professional showcase.Helps to highlight my skills and projects. ",
    technologies: ["HTML","React", "Vite", "Framer", "Tailwind CSS"],
  },
  {
    title: "ConnectU",
    image: project2,
    link:"https://github.com/RrowdiesBIT/ConnectU",
    description:
      "ConnectU is a robust social networking app designed to connect people seamlessly through its comprehensive features and intuitive interface. Built with CRUD (Create, Read, Update, Delete) operations at its core, ConnectU allows users to create personalized profiles, share posts, photos, and videos, and engage with friends and followers through comments and likes.",
    technologies: ["HTML", "CSS", "Tailwind", "React.Js","Node.Js","Express.Js","MongoDB","Socket.IO"],
  },

  
];

export const CONTACT = {
  phoneNo: "+91 6207128240",
  email: "rahulrajpr06@gmail.com",
};
