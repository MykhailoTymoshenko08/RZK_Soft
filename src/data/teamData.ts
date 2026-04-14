export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar?: string;
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
    name: "Mykhailo Tymoshenko",
    role: "Fouder, Lead Full-Stack/AI Engineer & CEO",
    avatar: "/images/team/mykhailo_tymoshenko.jpg",
    skills: [
      "Python (ChromaDB, LangChain, PyTorch, NumPy, Pandas, Tavily, FastAPI, Streamlit, asyncio, pydantic, Matplotlib)", 
      "Object-Oriented Programming(OOP)",
      "Machine Learning",
      "Computer Vision",
      "C++", 
      "Assembly",
      "Linux",
      "RAG",
      "Project Management",
      "Product Management",
      "Docker",
      "Clean Architecture",
      "Clean Code",
      "System Design",
      "Problem Solving",
      "Java",
      "SQL",
      "Rapid Learning",
      "Tailwind CSS",
      "OpenRouter API",
      "TypeScript",
      "PostgreSQL",
      "Next.js",
      "Computer Networking(CISCO)",
      "Analysis of Algorithms",
      "Discrete Mathematics",
      "Analytical Skills",
      "Teamwork",
      "Team Leadership",
      "Arduino",
      "C (programming language)",
      "English (C1)",
      "Russian (Native)",
      "Ukrainian (Native)",
      "Spanish (B2)",
      "Polish (B1)",
      //"French (B1)",
      "React.js", 
      "Git & GitHub", 
      "HTML & CSS", 
      "JavaScript", 
      "Figma", 
      //"Trello", 
      "N8N", 
      //"Canva"
    ],
    socials: {
      github: "https://github.com/MykhailoTymoshenko08",
      linkedin: "https://www.linkedin.com/in/mykhailo-tymoshenko-ce",
      instagram: "https://www.instagram.com/rinzunaka_misha_._/"
    },
    projects: [
      {
        title: "RZK Soft Website",
        description: "A modern, responsive website for RZK Soft, built with Next.js and TypeScript.",
        link: "https://github.com/MykhailoTymoshenko08/RZK_Soft_Prime"
      },
      {
        title: "AI Fusion Chat (Multi-LLM Judge Aggregator)",
        description: "Engineered a production-ready system utilizing an \"LLM-as-a-Judge\" architecture to aggregate and validate responses from multiple AI providers in parallel. Implemented RAG for document processing and T avily Search API for real-time web grounding",
        link: "https://github.com/MykhailoTymoshenko08/AI-Fushion-Chat-MVP"
      },
      {
        title: "Logistics AI Optimization (Nova Poshta)",
        description: "Developed an end-to-end monitoring system for a majorlogistics terminal analyzing video feeds from 1,100+cameras in real-time. Integrated Computer Vision (YOLO)models to detect workflow bottlenecks and safetyviolations, significantly increasing terminal throughput",
        link: "https://github.com/MykhailoTymoshenko08/Gladiator-Arena-Simulation-TS"
      },
      {
        title: "Customer Support AI Analyzer (Skelar Project)",
        description: "",
        link: "https://github.com/MykhailoTymoshenko08/Task-Manager-cpp"
      },
      {
        title: "Task Manager (C++):",
        description: "Student management system with CSV-based data storage.",
        link: "https://github.com/MykhailoTymoshenko08/game2048_Cpp"
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
      }
    ]
  },
  {
    id: 8,
    name: "Olexii Tymoshenko",
    role: "Embedded / IoT Developer",
    avatar: "/images/team/olexii_tymoshenko.jpg",
    skills: [
      "Microcontroller Design",
      "Assembly",
      "Java",
      "Kotlin",
      "Algorithmic Thinking",
      "Computer Architecture",
      "C++",
      "C (programming language)",
      "Russian (Native)",
      "Ukrainian (Native)",
      "HTML & CSS",
      "English (B2)",
      "Arduino",
      "Git & GitHub",
      "Computer Vision",
      "Clean Code",
      "Analytical Skills",
      "Fast Learning",
      "Linux",
      "Android Development",
      "MySQL",
      "C#",
      "Analysis of Algorithms",
      "Discrete Mathematics",
      "Object-Oriented Programming(OOP)", 
      "Analytical Skills",
      "PostgreSQL",
      "SQL",
      "Problem Solving",
      "Clean Architecture",
      "Docker"
    ],
    socials: {
      instagram: "https://www.instagram.com/rinzunaka_misha_._/"
    },
    projects: [],
    diplomas: [
      {
        title: "Certified Software Tester (ISTQB Foundation Level)",
        link: "#"
      }
    ]
  },
  {
    id: 4,
    name: "Volodymyr Lavrientiev",
    role: "Lead Mobile Developer",
    avatar: "/images/team/volodymyr_lavrientiev.jpg",
    skills: [
      "Jetpack Compose",
      "React Native",
      "Kotlin",
      "C++",
      "C (programming language)",
      "Git & GitHub",
      "Computer Networking(CISCO)",
      "Analysis of Algorithms",
      "Discrete Mathematics",
      "Object-Oriented Programming (OOP)",
      "Clean Code",
      "Teamwork",
      "Flutter",
      "Android XML",
      "Firebase",
      "Backend Integration",
      "English (C1)",
      "Russian (Native)",
      "Ukrainian (Native)",
      "Clean Architecture",
      "OOP",
      "Cross-Platform Development",
      "Fast Learning",
      "Refactoring",
      "Problem Solving",
      "Mathematical Thinking",
      "Planning & Architecture Design",
      "UI/UX Implementation"
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/volodymyr-lavrentiev-b6316334b/",
      github: "https://github.com/RombSquare/"
    },
    projects: [
      {
         title: "Solocards",
        description: "Quiz app with multiple game modes for solving and creating quizzes, built with clean UI and modern architecture.",
        link: ""
      },
      {
        title: "Sologress",
        description: "Advanced to-do application supporting infinite subtasks, focused on productivity and clean UI.",
        link: ""
      },
      {
        title: "Equadratic",
      description: "Math-based educational game for solving quadratic equations quickly with interactive tutorials.",
      link: ""
      },
      {
        title: "Notes",
        description: "Simple and elegant Flutter app for note-taking with full CRUD functionality.",
        link: ""
      },
      {
        title: "Mentamath",
        description: "Mobile game designed to train and enhance mental math speed and accuracy.",
        link: ""
      },
      {
        title: "Rancol",
        description: "Minimalist one-tap app that generates random colors for designers and developers.",
        link: ""
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
  },
  {
    id: 3,
    name: "Ivan Krutkevych",
    role: "AI Engineer & CTO",
    avatar: "/images/team/ivan_krutkevych.jpg",
    skills: [
      "Python (FastAPI, LangChain, LangGraph, OpenCV, Aiogram, Selenium, Bs4)",
      "Machine Learning",
      "LlamaIndex",
      "PostgreSQL",
      "SQL",
      "C#",
      "Unity",
      "Computer Vision",
      "RAG",
      "Discrete Mathematics",
      "Git & GitHub",
      "Arduino",
      "English (B2)",
      "Russian (Native)",
      "Ukrainian (Native)",
      "German (B1)",
      "Object-Oriented Programming (OOP)",
      "Problem Solving",
      "Algorithmic Thinking",
      "Teamwork"
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/ivan-krutkevych-8b0b49282",
      instagram: "https://www.instagram.com/krutk"
    },
    projects: [
      {
        title: "Lapaton 2026 – 'Mriya' Track",
        description: "Award-winning hackathon project focused on innovative technologies beyond standard school and university programs.",
        link: ""
      },
      {
        title: "AI-Based Educational Tools",
        description: "Development of digital tools leveraging AI and ML for educational and social purposes, supporting displaced students and communities.",
        link: ""
      }
    ],
    diplomas: [
      {
        title: "1st Place – Kyiv City Programming Olympiad (2024)",
        link: ""
      },
      {
        title: "Finalist – All-Ukrainian Programming Olympiad (2023)",
        link: ""
      },
      {
        title: "3rd Place – Lapaton 'Mriya' Track (2026)",
        link: ""
      }
    ]
  },
  {
    id: 2,
    name: "Mykhailo Haliapa",
    role: "Junior Developer (C/JavaScript) & COO",
    avatar: "/images/team/mykhailo_haliapa.jpg",
    skills: [
      "React.js", 
      "C++",
      "Python(json, pydantic, asyncio)",
      "OOP(Object-Oriented Programming)",
      "PostgreSQL",
      "C (programming language)", 
      "Git & GitHub", 
      "HTML & CSS", 
      "JavaScript", 
      "Discrete Mathematics",
      "English (B2)",
      "Russian (Native)",
      "Ukrainian (Native)",
      "Polish (B2)",
      //"Spanish (B1)",
      "Figma", 
      "Project Management",
      "Team Leadership"
    ],
    socials: {
      github: "https://github.com/morgonets",
      instagram: "https://www.instagram.com/misha.carasik_fortnite/"
    },
    projects: [
      {
        title: "To_Do_List_On_C",
        description: "To-Do list where you can plan your day, change tasks, adding and remowing them.",
        link: "https://github.com/morgonets/To_Do_List_On_C"
      },
      {
        title: "Snake_Game_On_C",
        description: "Just a regular snake game.",
        link: "https://github.com/morgonets/Snake_Game_On_C"
      },
       {
        title: "Matrix_Calculator_On_C",
        description: "Matrix calculator that can count matrix 2x2 3x3 adding and sumbstruct them.",
        link: "https://github.com/morgonets/Matrix_Calculator_On_C"
      },
      {
        title: "Cliker_On_C",
        description: "A simple clicker game built in C.",
        link: "https://github.com/morgonets/Cliker_On_C"
      },
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
    id: 5,
    name: "Oleh Shevchenko",
    role: "QA Engineer",
    skills: [
      "Manual Testing",
      "Automated Testing (Selenium, Cypress)",
      "Bug Tracking (Jira, Trello)",
      "Test Case Design",
      "API Testing (Postman)",
      "Regression Testing",
      "Performance Testing",
      "CI/CD Integration",
      "SQL for QA",
      "SDLC / STLC",
      "Mobile Testing (Appium)",
      "Test Documentation",
      "Ukrainian (Native)",
      "Russian (Native)",
      "English (B2)"
    ],
    socials: {
      linkedin: "https://linkedin.com/in/oleh-shevchenko",
    },
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Ensured platform stability and bug-free releases through automated and manual testing",
        link: "#"
      },
      {
        title: "Healthcare App",
        description: "Designed test cases for API and mobile frontend, improving QA coverage by 40%",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Certified Software Tester (ISTQB Foundation Level)",
        link: "#"
      }
    ]
  },
  {
    id: 6,
    name: "Anya Malykhina",
    role: "Lead UI/UX Designer",
    avatar: "/images/team/anya_malykhina.jpg",
    skills: [
      "Figma",
      "Adobe XD",
      "Adobe Photoshop / Illustrator",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Interaction Design",
      "Design Systems",
      "Responsive Design",
      "Typography & Color Theory",
      "Mobile-First Design",
      "User Flows & Journey Mapping",
      "Ukrainian (Native)",
      "Russian (Native)",
      "English (С1)"
    ],
    socials: {
      instagram: "https://www.instagram.com/kkeews.s/"
    },
    projects: [
      {
        title: "Student Portal Redesign",
        description: "Redesigned the university student portal for better usability and accessibility",
        link: "#"
      },
      {
        title: "Local NGO App UI",
        description: "Created a simple, intuitive interface for a volunteer coordination app",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Best Student Design Project – Kyiv UX Challenge 2025",
        link: "#"
      }
    ]
  },
  {
    id: 7,
    name: "Dmytro Shevchuk",
    role: "Junior DevOps Engineer",
    skills: [
      "Linux (Ubuntu/CentOS)",
      "Docker & Docker Compose",
      "Git & GitHub Actions",
      "CI/CD Pipelines",
      "Bash Scripting",
      "Nginx / Apache",
      "Monitoring (Prometheus & Grafana)",
      "Cloud Fundamentals (AWS/Azure)",
      "Infrastructure as Code (Terraform basics)",
      "Networking Protocols (TCP/IP, DNS, SSL)",
      "YAML / JSON",
      "Problem Solving",
      "Ukrainian (Native)",
      "English (B2)"
    ],
    socials: {
      linkedin: "https://linkedin.com/in/dmytro-shevchuk",
      instagram: "https://instagram.com/dmytro_shevchuk_design"
    },
    projects: [
      {
        title: "Student Project Deployment",
        description: "Deployed a student web project using Docker and GitHub Actions CI/CD",
        link: "#"
      },
      {
        title: "Personal Portfolio Automation",
        description: "Automated deployment for personal website with Docker and GitHub Pages",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Certificate in DevOps Fundamentals – Coursera 2025",
        link: "#"
      }
    ]
  },
  
];