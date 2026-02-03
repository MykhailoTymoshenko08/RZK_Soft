export interface TeamMember {
  id: number;
  name: string;
  role: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
  projects: {
    title: string;
    description: string;
    link: string;
  }[];
  diplomas: {
    title: string;
    link: string;
  }[];
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Tymoshenko Mykhailo",
    role: "Founder & CEO",
    skills: [
      "Python (LangChain, ChromaDB, Tavily, FastAPI, Streamlit, SQLite3, OpenRouter API, asyncio, pydantic, shutil, RAG)", 
      "PostgreSQL",
      "Redis",
      "Linux",
      "Docker", 
      "React.js", 
      "Java", 
      "Assembly", 
      "C++", 
      "Git", 
      "GitHub", 
      "HTML & CSS", 
      "JavaScript", 
      "Figma", 
      "Trello", 
      "N8N", 
      "Canva"
    ],
    socials: {
      github: "https://github.com/MykhailoTymoshenko08",
      linkedin: "https://www.linkedin.com/in/mykhailo-tymoshenko-ce",
      instagram: "https://www.instagram.com/rinzunaka_misha_._/"
    },
    projects: [
      {
        title: "AI Fusion Chat (Multi-LLM Judge Aggregator)",
        description: "A powerful chat platform aggregating responses from multiple LLMs using the 'LLM-as-a-Judge' approach. Includes RAG capabilities for PDF processing and Tavily Search API integration for real-time web information.",
        link: "https://github.com/MykhailoTymoshenko08/AI-Fushion-Chat-MVP"
      },
      {
        title: "Multi-LLM Judge Aggregator (AsyncSQL + FastAPI + Streamlit)",
        description: "An AI aggregation platform leveraging the 'LLM-as-a-Judge' pattern. Queries multiple LLMs in parallel, synthesizes results via a Judge model, and stores outputs in SQLite for analytics. Accessible through a Streamlit interface.",
        link: "https://github.com/MykhailoTymoshenko08/Multi-LLM-Judge-AsyncSQL-FastAPI-Streamlit"
      },
      {
        title: "StudentsControlSystemCSV (C++)",
        description: "A student management system with CSV-based data storage, enabling efficient record keeping and retrieval.",
        link: "https://github.com/MykhailoTymoshenko08/StudentsControlSystemCSV_Cpp"
      },
      {
        title: "Game 2048 (C++)",
        description: "Console-based implementation of the classic 2048 puzzle game with smooth gameplay mechanics.",
        link: "https://github.com/MykhailoTymoshenko08/game2048_Cpp"
      },
      {
        title: "Matrix Calculator (C++)",
        description: "A console application supporting advanced matrix operations with a user-friendly interface.",
        link: "https://github.com/MykhailoTymoshenko08/matrixCalculator_Cpp"
      }
    ],
    diplomas: [
      {
        title: "Certificate in Python AI Development (Mimo)",
        link: "https://drive.google.com/file/d/1PvTPcjt4tCUBI-5yYhYC8etKpHayXONm/view?usp=sharing"
      },
      {
        title: "Web Development Internship Certificate (SharpMinds I)",
        link: "https://drive.google.com/file/d/1C0h3vkGY3KXCIeJQOby6gnL315LCfGRJ/view?usp=sharing"
      },
      {
        title: "Web Development Internship Certificate (SharpMinds II)",
        link: "https://drive.google.com/file/d/1wHwlY8WKeSH9ud97wF360BQ2vpoCDu8o/view?usp=sharing"
      },
      {
        title: "Certificate in Web Development (EdEra)",
        link: "https://drive.google.com/file/d/1EGcUnbcjbZwFBpYYNJXgvv0pHxVxd-pB/view?usp=sharing"
      },
      {
        title: "Certificate in Surgery",
        link: "https://drive.google.com/file/d/1Bc2T901lhMG39TJlMVDBGv4buW1IvhNV/view?usp=sharing"
      },
      {
        title: "Award in Medical Research",
        link: "https://drive.google.com/file/d/1VZSiEfARz_sjzsDR-vDkhkEdAKhrlUh_/view?usp=sharing"
      },
      {
        title: "Award in Medical Research (Luc)",
        link: "https://drive.google.com/file/d/1ZHMVKJRZjCJ8OBKwbtd_A8vUJE-IU0r3/view?usp=sharing"
      },
      {
        title: "Certificate in Volleyball",
        link: "https://drive.google.com/file/d/1Zok1v9ZrwcvOGy4pORNu5z-MhgRnd0Rb/view?usp=sharing"
      },
      {
        title: "Certificate in Chemistry & Biology Summer School",
        link: "https://drive.google.com/file/d/1r2JfcI9_FNVAMkCYb9izLaU2H7Ik0RB-/view?usp=sharing"
      },
      {
        title: "Diploma in Biology",
        link: "https://drive.google.com/file/d/1Pkp66WUHfUPnWESSvdsG6GZytmnO_Xu-/view?usp=sharing"
      },
      {
        title: "Diploma in English",
        link: "https://drive.google.com/file/d/1ztvO1pTspzoNMGui8D5EMB1r2S3h6nCw/view?usp=sharing"
      },
      {
        title: "Award in Biology",
        link: "https://drive.google.com/file/d/13MQRCwGbVSpS4YEc2SJ7Qa0rLhhTeB_5/view?usp=sharing"
      },
      {
        title: "Award in Chemistry",
        link: "https://drive.google.com/file/d/11mQpxcG2fWaY7FR9R1qDGybuCDdaV7c0/view?usp=sharing"
      },
      {
        title: "Diploma in Biology (NU)",
        link: "https://drive.google.com/file/d/1B473DcH0ILooV6-izHWN1op1E8F39Pgd/view?usp=sharing"
      },
      {
        title: "Diploma in Chemistry (NU)",
        link: "https://drive.google.com/file/d/1c0uREm23oIBVYmDYLNcMjI3unTQnrAtC/view?usp=sharing"
      },
      {
        title: "Award in English",
        link: "https://drive.google.com/file/d/1niLpbN_kiK7KfCFyLc4Qom23IOjggqXe/view?usp=sharing"
      },
      {
        title: "Award in History",
        link: "https://drive.google.com/file/d/1XL6Ld0ygRuYHqmOFcE73Xun9HR1bi0u3/view?usp=sharing"
      },
      {
        title: "Military Award I",
        link: "https://drive.google.com/file/d/1h7iJdOLIb9w9uhkZv1MSgGvPA4C9tkjN/view?usp=sharing"
      },
      {
        title: "Military Award II",
        link: "https://drive.google.com/file/d/1-oN22wAd3ZoovL9vCgHN0TGSwyEXBDOi/view?usp=sharing"
      },
      {
        title: "Award in Ukrainian Language",
        link: "https://drive.google.com/file/d/1NeitTy3jqv3i3ETvoSTguSD9N1p0uDFn/view?usp=sharing"
      },
      {
        title: "Taekwondo Grade 5 Certificate",
        link: "https://drive.google.com/file/d/1bnId1qNxJV-LVZtWyIkaoECQxNNPbchi/view?usp=sharing"
      },
      {
        title: "Taekwondo Grade 6 Certificate",
        link: "https://drive.google.com/file/d/1p9L8n8SI6-NVNx-wYeYxKGFYUYIuA2BL/view?usp=sharing"
      },
      {
        title: "Taekwondo Grade 7 Certificate",
        link: "https://drive.google.com/file/d/1p9-NeBWxQXva56spMjQ7S8HSTDTshCou/view?usp=sharing"
      },
      {
        title: "Taekwondo Grade 8 Certificate",
        link: "https://drive.google.com/file/d/1lrLl8BSJX9tOYMQXCXEmYBka-BBLf_sG/view?usp=sharing"
      }
    ]
  },
  {
    id: 2,
    name: "Halapa Mykhailo",
    role: "COO",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "Project Management",
      "Team Leadership"
    ],
    socials: {
      github: "https://github.com/morgonets",
      instagram: "https://www.instagram.com/misha.carasik_fortnite/"
    },
    projects: [
      {
        title: "Business Management System",
        description: "A comprehensive system for managing business operations and workflow",
        link: "#"
      },
      {
        title: "Client Portal",
        description: "Web portal for client interaction and project management",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Business Management Certificate",
        link: "#"
      },
      {
        title: "Project Management Professional",
        link: "#"
      }
    ]
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Senior Frontend Developer",
    skills: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "GraphQL",
      "Redux"
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    projects: [
      {
        title: "E-commerce Platform",
        description: "Modern e-commerce platform with real-time inventory management",
        link: "#"
      },
      {
        title: "Dashboard Analytics",
        description: "Interactive dashboard with data visualization and reporting",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Frontend Development Certification",
        link: "#"
      },
      {
        title: "React Specialist Certificate",
        link: "#"
      }
    ]
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "UI/UX Designer",
    skills: [
      "Figma",
      "Adobe XD",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Wireframing"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    projects: [
      {
        title: "Mobile Banking App",
        description: "User-friendly banking application with intuitive interface",
        link: "#"
      },
      {
        title: "Healthcare Platform",
        description: "Design system for healthcare management platform",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "UI/UX Design Certification",
        link: "#"
      },
      {
        title: "Interaction Design Award",
        link: "#"
      }
    ]
  }
];