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
    role: "Founder, CEO & Lead Full-Stack/AI Engineer",
    avatar: "/images/team/mykhailo_tymoshenko.jpg",
    skills: [
      "Python (LangChain, ChromaDB, Tavily, FastAPI, Streamlit, SQLite3, asyncio, pydantic, RAG)", 
      "Linux",
      "Docker",
      "C++", 
      "Assembly", 
      "Java",
      "AI Integration",
      "SQL",
      "Tailwind CSS",
      "OpenRouter API",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "Computer Networking",
      "Analysis of Algorithms",
      "Discrete Mathematics",
      "Object-Oriented Programming(OOP)",
      "Machine Learning",
      "Analytical Skills",
      "Teamwork",
      "Team Leadership",
      "English (C1)",
      "Russian (Native)",
      "Ukrainian (Native)",
      "Spanish",
      "Polish",
      "React.js", 
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
        title: "RZK Soft Website",
        description: "A modern, responsive website for RZK Soft, built with Next.js and TypeScript.",
        link: "https://github.com/MykhailoTymoshenko08/RZK_Soft_Prime"
      },
      {
        title: "AI Fusion Chat (Multi-LLM Judge Aggregator)",
        description: "A powerful chat platform aggregating responses from multiple LLMs using the 'LLM-as-a-Judge' approach. Includes RAG capabilities for PDF processing and Tavily Search API integration for real-time web information.",
        link: "https://github.com/MykhailoTymoshenko08/AI-Fushion-Chat-MVP"
      },
      {
        title: "Gladiator-Arena-Simulation-TS",
        description: "A TypeScript-based simulation of gladiator battles in an arena setting, featuring various gladiator types and combat mechanics.",
        link: "https://github.com/MykhailoTymoshenko08/Gladiator-Arena-Simulation-TS"
      },
      {
        title: "Task-Manager (C++)",
        description: "A console-based task management application allowing users to create, view, update, and delete tasks with persistent storage.",
        link: "https://github.com/MykhailoTymoshenko08/Task-Manager-cpp"
      },
      {
        title: "Game 2048 (C++)",
        description: "Console-based implementation of the classic 2048 puzzle game with smooth gameplay mechanics.",
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
      },
      // {
      //   title: "Certificate in Volleyball",
      //   link: "https://drive.google.com/file/d/1Zok1v9ZrwcvOGy4pORNu5z-MhgRnd0Rb/view?usp=sharing"
      // },
      // {
      //   title: "Certificate in Chemistry & Biology Summer School",
      //   link: "https://drive.google.com/file/d/1r2JfcI9_FNVAMkCYb9izLaU2H7Ik0RB-/view?usp=sharing"
      // },
      // {
      //   title: "Diploma in Biology",
      //   link: "https://drive.google.com/file/d/1Pkp66WUHfUPnWESSvdsG6GZytmnO_Xu-/view?usp=sharing"
      // },
      // {
      //   title: "Diploma in English",
      //   link: "https://drive.google.com/file/d/1ztvO1pTspzoNMGui8D5EMB1r2S3h6nCw/view?usp=sharing"
      // },
      // {
      //   title: "Award in Biology",
      //   link: "https://drive.google.com/file/d/13MQRCwGbVSpS4YEc2SJ7Qa0rLhhTeB_5/view?usp=sharing"
      // },
      // {
      //   title: "Award in Chemistry",
      //   link: "https://drive.google.com/file/d/11mQpxcG2fWaY7FR9R1qDGybuCDdaV7c0/view?usp=sharing"
      // },
      // {
      //   title: "Diploma in Biology (NU)",
      //   link: "https://drive.google.com/file/d/1B473DcH0ILooV6-izHWN1op1E8F39Pgd/view?usp=sharing"
      // },
      // {
      //   title: "Diploma in Chemistry (NU)",
      //   link: "https://drive.google.com/file/d/1c0uREm23oIBVYmDYLNcMjI3unTQnrAtC/view?usp=sharing"
      // },
      // {
      //   title: "Award in English",
      //   link: "https://drive.google.com/file/d/1niLpbN_kiK7KfCFyLc4Qom23IOjggqXe/view?usp=sharing"
      // },
      // {
      //   title: "Award in History",
      //   link: "https://drive.google.com/file/d/1XL6Ld0ygRuYHqmOFcE73Xun9HR1bi0u3/view?usp=sharing"
      // },
      // {
      //   title: "Military Award I",
      //   link: "https://drive.google.com/file/d/1h7iJdOLIb9w9uhkZv1MSgGvPA4C9tkjN/view?usp=sharing"
      // },
      // {
      //   title: "Military Award II",
      //   link: "https://drive.google.com/file/d/1-oN22wAd3ZoovL9vCgHN0TGSwyEXBDOi/view?usp=sharing"
      // },
      // {
      //   title: "Award in Ukrainian Language",
      //   link: "https://drive.google.com/file/d/1NeitTy3jqv3i3ETvoSTguSD9N1p0uDFn/view?usp=sharing"
      // },
      // {
      //   title: "Taekwondo Grade 5 Certificate",
      //   link: "https://drive.google.com/file/d/1bnId1qNxJV-LVZtWyIkaoECQxNNPbchi/view?usp=sharing"
      // },
      // {
      //   title: "Taekwondo Grade 6 Certificate",
      //   link: "https://drive.google.com/file/d/1p9L8n8SI6-NVNx-wYeYxKGFYUYIuA2BL/view?usp=sharing"
      // },
      // {
      //   title: "Taekwondo Grade 7 Certificate",
      //   link: "https://drive.google.com/file/d/1p9-NeBWxQXva56spMjQ7S8HSTDTshCou/view?usp=sharing"
      // },
      // {
      //   title: "Taekwondo Grade 8 Certificate",
      //   link: "https://drive.google.com/file/d/1lrLl8BSJX9tOYMQXCXEmYBka-BBLf_sG/view?usp=sharing"
      // }
    ]
  },

  {
    id: 2,
    name: "Ivan Krutkevych",
    role: "AI Engineer & CTO",
    avatar: "/images/team/ivan_krutkevych.jpg",
    skills: [
      "Python (FastAPI, LangChain, LangGraph, OpenCV, Aiogram, Selenium, Bs4)",
      "Machine Learning",
      "LlamaIndex",
      "SQL (PostgreSQL, SQLite)",
      "C#",
      "Unity",
      "C++",
      "Git",
      "GitHub",
      "Arduino",
      "Object-Oriented Programming (OOP)",
      "Problem Solving",
      "Algorithmic Thinking",
      "Team Collaboration"
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
    id: 3,
    name: "Volodymyr Lavrientiev",
    role: "Lead Mobile Developer",
    avatar: "/images/team/volodymyr_lavrientiev.jpg",
    skills: [
      "Jetpack Compose",
      "React Native",
      "Flutter",
      "Android XML",
      "Firebase",
      "Backend Integration",
      "AI Integration",
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
    id: 4,
    name: "Mykhailo Haliapa",
    role: "Junior Developer (C/JavaScript)",
    avatar: "/images/team/mykhailo_haliapa.jpg",
    skills: [
      "React.js", 
      "C (programming language)", 
      "Git", 
      "GitHub", 
      "HTML & CSS", 
      "JavaScript", 
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
      "API Testing",
      "Regression Testing",
      "Performance Testing",
      "CI/CD Integration"
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
  name: "Hiro Tanaka",
  role: "Game Designer",
  avatar: "/images/team/hiro_tanaka.jpg",
  skills: [
    "Game Mechanics Design",
    "Level Design",
    "Storyboarding",
    "Unity",
    "C#",
    "Prototyping",
    "Player Experience Analysis"
  ],
  socials: {
    linkedin: "https://linkedin.com/in/hiro-tanaka",
    instagram: ""
  },
  projects: [
    {
      title: "Fantasy RPG Prototype",
      description: "Designed levels, mechanics, and story flow for mobile and PC platforms",
      link: "#"
    },
    {
      title: "Puzzle Adventure Game",
      description: "Prototyped unique puzzle mechanics with engaging player interactions",
      link: "#"
    }
  ],
  diplomas: [
    {
      title: "Best Game Design Award – Indie Game Jam 2025",
      link: "#"
    }
  ]
  },

  {
    id: 7,
    name: "Anastasiya Kovalenko",
    role: "Frontend Developer",
    avatar: "/images/team/anastasiya_kovalenko.jpg",
    skills: [
      "React.js",
      "TypeScript",
      "Next.js",
      "HTML & CSS",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Responsive Design",
      "Unit Testing (Jest)"
    ],
    socials: {
      instagram: "",
      linkedin: "https://www.linkedin.com/in/anastasiya-kovalenko-11a415298/?originalSubdomain=uk"
    },
    projects: [
      {
        title: "E-Learning Platform",
        description: "Developed interactive frontend with React & TypeScript, including quizzes and dashboards",
        link: "#"
      },
      {
        title: "Startup Landing Page",
        description: "Built responsive landing page with Tailwind CSS and Next.js",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Certificate in Advanced Frontend Development",
        link: "#"
      }
    ]
  },

  {
    id: 8,
    name: "Sofiya Shapialevich",
    role: "Data Engineer",
    avatar: "/images/team/sofiya_shapialevich.jpg",
    skills: [
      "Python",
      "SQL",
      "PostgreSQL",
      "ETL Pipelines",
      "Airflow",
      "Data Modeling",
      "BigQuery",
      "Data Warehousing",
      "Data Cleaning",
      "Analytics"
    ],
    socials: {
      linkedin: "https://linkedin.com/in/sophiya-shovvicka",
      instagram: ""
    },
    projects: [
      {
        title: "Sales Analytics Pipeline",
        description: "Built ETL pipelines and dashboards to provide actionable insights for e-commerce platform",
        link: "#"
      },
      {
        title: "IoT Sensor Data Platform",
        description: "Aggregated and processed sensor data for real-time analytics and monitoring",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Certified Data Engineer (Google Cloud)",
        link: "#"
      }
    ]
  },

  {
    id: 10,
    name: "Anya Malykhina",
    role: "Lead UI/UX Designer",
    avatar: "/images/team/anya_malykhina.jpg",
    skills: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Interaction Design",
      "Design Systems",
      "Responsive Design"
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
    id: 11,
    name: "Katherina Beregova",
    role: "UI/UX Designer",
    avatar: "",
    skills: [
      "Figma",
      "Sketch",
      "Prototyping",
      "Wireframing",
      "User Testing",
      "Design Systems",
      "Interaction Design",
      "Illustration"
    ],
    socials: {
      instagram: ""
    },
    projects: [
      {
        title: "Campus Events App",
        description: "Designed UI/UX for mobile app to manage and track student events",
        link: "#"
      },
      {
        title: "E-Learning Platform Prototype",
        description: "Created interactive prototypes for online learning modules",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Certificate in UI/UX Design – EdEra 2025",
        link: "#"
      }
    ]
  },

  {
    id: 9,
    name: "Katherina Bondar",
    role: "Product Manager",
    avatar: "/images/team/katherina_bondar.jpg",
    skills: [
      "Agile / Scrum",
      "Jira",
      "Roadmapping",
      "Requirements Gathering",
      "Prioritization",
      "Team Coordination",
      "Wireframing",
      "Stakeholder Communication"
    ],
    socials: {
      linkedin: "https://linkedin.com/in/kateryna-bondar",
      instagram: ""
    },
    projects: [
      {
        title: "Education App Launch",
        description: "Managed cross-functional team to deliver educational mobile app on time",
        link: "#"
      },
      {
        title: "E-commerce Platform",
        description: "Defined product roadmap and coordinated with engineering and design teams",
        link: "#"
      }
    ],
    diplomas: [
      {
        title: "Certified Scrum Product Owner (CSPO)",
        link: "#"
      }
    ]
  },

  {
    id: 7,
    name: "Dmytro Shevchuk",
    role: "Junior DevOps Engineer",
    skills: [
      "Linux",
      "Docker",
      "Git/GitHub",
      "CI/CD Basics",
      "Bash Scripting",
      "Monitoring Basics",
      "Cloud Fundamentals (AWS Free Tier)",
      "Problem Solving"
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
  }
];