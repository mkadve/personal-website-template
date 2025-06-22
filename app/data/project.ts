// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  features: {             // List of project features
    title: string         // Feature title
    description: string   // Feature description  
    image: string | string[] // Feature image(s) path
  }[]
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  achievements: {         // Quantifiable achievements
    metric: string        // Achievement metric name
    value: string         // Achievement value
    change: number        // Numerical change/improvement
  }[]
}

export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Planytics AI – GCP-Based Analytics & Notification System",
    company: "Planytics",
    overview:
      "Built scalable serverless APIs using Cloud Functions, integrated with BigQuery and Bigtable. Developed real-time notification system with Firebase, and implemented CI/CD using GitLab, Docker, and Secret Manager. Designed BigQuery pipelines for auto-generating SQL based on filters.",
    mainImage: "/project/planytics.png",
    link: "https://github.com/mihirkadve",
    features: [
      {
        title: "GCP-Driven Architecture",
        description: "Used BigQuery and Bigtable for scalable analytics. Auto SQL generation using filters.",
        image: "/project/planytics-feature1.png"
      },
      {
        title: "Firebase Notifications",
        description: "Real-time alert system for admins and store users with dismissal and tracking.",
        image: "/project/planytics-feature2.png"
      }
    ],
    techStack: [
      {
        category: "Cloud",
        items: ["GCP", "BigQuery", "Bigtable", "Cloud Functions", "Firebase"]
      },
      {
        category: "DevOps",
        items: ["GitLab CI", "Docker", "Secret Manager"]
      },
      {
        category: "Frontend",
        items: ["Angular"]
      },
      {
        category: "Backend",
        items: ["Node.js"]
      }
    ],
    achievements: [
      {
        metric: "Operational Efficiency",
        value: "+60%",
        change: 60
      }
    ]
  },
  2: {
    id: 2,
    title: "SextPanther (SP) – Chat Monetization Platform",
    company: "Codal",
    overview:
      "Developed chat-based monetization features with session-based encryption, real-time alerts, and mobile-first design.",
    mainImage: "/project/sext-panther-project.png",
    link: "https://github.com/mihirkadve",
    features: [
      {
        title: "Real-time WebSocket Chat",
        description: "Implemented encrypted chat with delivery acknowledgments and user presence tracking.",
        image: "/project/sp-feature.png"
      },
      // {
      //   title: "Mobile-Optimized UI",
      //   description: "Tailwind-based UI designed for high interaction and swipe gestures.",
      //   image: "/project/sp-feature2.png"
      // }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "Tailwind"]
      },
      {
        category: "Backend",
        items: ["Node.js", "WebSocket"]
      },
      {
        category: "CI/CD",
        items: ["GitHub Actions"]
      }
    ],
    achievements: [
      {
        metric: "User Engagement",
        value: "+40%",
        change: 40
      }
    ]
  },
  3: {
    id: 3,
    title: "CallPotential – CRM & Customer Outreach Suite",
    company: "CallPotential",
    overview: "Refactored legacy Angular modules and implemented performance-optimized dashboards for lead tracking and follow-up automation. Used Node.js APIs for REST integration and supported multi-role UI access control.",
    mainImage: "/project/callpotential-project.png",
    link: "https://github.com/mihirkadve",
    features: [],
    techStack: [
      { category: "Frontend", items: ["Angular"] },
      { category: "Backend", items: ["Node.js", "REST APIs"] },
      { category: "Tools", items: ["Jira", "Docker", "CI/CD"] }
    ],
    achievements: []
  },
  4: {
    id: 4,
    title: "Manscore – Social Network & Gamification Platform",
    company: "Manscore",
    overview: "Led frontend development in React and integrated RESTful APIs with Node.js backend. Implemented user scoring engine using Firebase functions.",
    mainImage: "/project/manscore-project.png",
    link: "https://manscore.com",
    features: [],
    techStack: [
      { category: "Frontend", items: ["React"] },
      { category: "Backend", items: ["Node.js"] },
      { category: "Cloud", items: ["Firebase"] },
      { category: "Database", items: ["MongoDB"] }
    ],
    achievements: []
  },
  5: {
    id: 5,
    title: "Kult – E-Commerce & Inventory Solution",
    company: "Kult",
    overview: "Built responsive ecommerce frontend using Vue.js and Vuex, integrated Firebase authentication and real-time inventory sync. Deployed scalable backend using Firebase Cloud Functions.",
    mainImage: "/project/kult-project.png",
    link: "https://kult.in",
    features: [],
    techStack: [
      { category: "Frontend", items: ["Vue.js", "Vuex"] },
      { category: "Backend", items: ["Firebase Functions"] },
      { category: "Tools", items: ["SASS", "Bootstrap"] }
    ],
    achievements: []
  },
  6: {
    id: 6,
    title: "ScriptDoor – AI Script Automation Tool",
    company: "ScriptDoor",
    overview: "Developed a tool for creators to generate AI-based video scripts with UI built in React and backend in Node.js. Integrated OpenAI for script prompts and stored content on MongoDB.",
    mainImage: "/project/scriptdoor-project.png",
    link: "https://scriptdoor.ai",
    features: [],
    techStack: [
      { category: "Frontend", items: ["React"] },
      { category: "Backend", items: ["Node.js"] },
      { category: "AI", items: ["OpenAI"] },
      { category: "Database", items: ["MongoDB"] }
    ],
    achievements: []
  },
  // 7: {
  //   id: 7,
  //   title: "Payroll & Finance Management System",
  //   company: "FinanceCorp",
  //   overview: "Built dashboards using React and ASP.NET for payroll management. Implemented role-based access and SQL Server-based reporting using SSRS.",
  //   mainImage: "/project/payroll.png",
  //   link: "#",
  //   features: [],
  //   techStack: [
  //     { category: "Frontend", items: ["React"] },
  //     { category: "Backend", items: ["C#", "ASP.NET"] },
  //     { category: "Database", items: ["SQL Server", "SSRS"] }
  //   ],
  //   achievements: []
  // }
};


// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}