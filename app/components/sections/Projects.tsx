'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define project data type
// Each project must include:
// - id: Unique identifier
// - title: Project name
// - description: Project description
// - period: Development period
// - image: Project screenshot path (stored in public/project/ directory)
// - skills: Tech stack used
// - link: Project link (GitHub/Demo)
type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

// Example project data
// Usage instructions:
// 1. Copy template below and modify content as needed
// 2. Place project screenshots in public/project/ directory
// 3. Sort projects in reverse chronological order
// 4. Project descriptions should highlight core features and technical highlights
const projects: Project[] = [
  {
    id: 1,
    title: "Planytics AI – GCP-Based Analytics & Notification System",
    description:
      "Built scalable serverless APIs using Cloud Functions, integrated with BigQuery and Bigtable. Developed real-time notification system with Firebase, and implemented CI/CD using GitLab, Docker, and Secret Manager. Designed BigQuery pipelines for auto-generating SQL based on filters.",
    period: "2024.06 – Present",
    image: "/project/planytics-project.png",
    skills: ["GCP", "BigQuery", "Bigtable", "Cloud Functions", "Firebase", "Docker", "Angular", "Node.js"],
    link: "https://github.com/mihirkadve" // Replace with real repo or live demo
  },
  {
    id: 2,
    title: "SextPanther (SP) – Chat Monetization Platform",
    description:
      "Developed key frontend modules using Next.js and Tailwind for a real-time chat-based monetization platform. Integrated WebSocket communication, notification systems, and session-level encryption. Followed mobile-first design and CI/CD best practices.",
    period: "2023.09 – 2024.05",
    image: "/project/sext-panther-project.png",
    skills: ["Next.js", "Tailwind", "WebSocket", "React", "Node.js", "CI/CD"],
    link: "https://github.com/mihirkadve" // Replace with real or demo
  },
  {
    id: 3,
    title: "CallPotential – CRM & Customer Outreach Suite",
    description:
      "Refactored legacy Angular modules and implemented performance-optimized dashboards for lead tracking and follow-up automation. Used Node.js APIs for REST integration and supported multi-role UI access control.",
    period: "2021.03 – 2022.12",
    image: "/project/callpotential-project.png",
    skills: ["Angular", "Node.js", "REST APIs", "Jira", "Docker", "CI/CD"],
    link: "https://github.com/mihirkadve"
  },
  {
    id: 4,
    title: "Manscore – Social Network & Gamification Platform",
    description:
      "Led frontend development in React and integrated RESTful APIs with Node.js backend. Worked closely with product team to roll out new UX patterns and implemented user scoring engine with Firebase functions.",
    period: "2020.01 – 2021.02",
    image: "/project/manscore-project.png",
    skills: ["React", "Node.js", "Firebase", "MongoDB", "Bootstrap"],
    link: "https://manscore.com"
  },
  {
    id: 5,
    title: "Kult – E-Commerce & Inventory Solution",
    description:
      "Built responsive ecommerce frontend using Vue.js and Vuex, integrated Firebase authentication and real-time inventory sync. Deployed scalable backend using Firebase Cloud Functions.",
    period: "2019.01 – 2019.12",
    image: "/project/kult-project.png",
    skills: ["Vue.js", "Vuex", "Firebase", "SASS", "Bootstrap"],
    link: "https://kult.in"
  },
  {
    id: 6,
    title: "ScriptDoor – AI Script Automation Tool",
    description:
      "Developed a tool for creators to generate AI-based video scripts with UI built in React and backend in Node.js. Integrated OpenAI for script prompts and stored content on MongoDB.",
    period: "2023.01 – 2023.08",
    image: "/project/scriptdoor-project.png",
    skills: ["React", "Node.js", "MongoDB", "OpenAI", "Firebase"],
    link: "https://scriptdoor.ai"
  },
  // {
  //   id: 7,
  //   title: "Payroll & Finance Management System",
  //   description:
  //     "Built dashboards using React and ASP.NET for payroll management. Implemented role-based access and SQL Server-based reporting using SSRS.",
  //   period: "2016.01 – 2017.01",
  //   image: "/project/payroll-project.png",
  //   skills: ["React", "C#", "ASP.NET", "SQL Server", "SSRS"],
  //   link: "#"
  // }
];


export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#F43F5E',  // Light rose
            end: '#BE123C'     // Deep rose
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projects
          </h1>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {projects.map((project) => (
            <div key={project.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    setSelectedProject(project.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-white/[0.1] dark:bg-black/[0.2]
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/[0.1] dark:border-white/[0.1]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-48 md:h-72 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                    {project.period}
                  </p>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-white/[0.05] dark:bg-white/[0.05]
                          backdrop-blur-[8px]
                          border border-white/[0.05]
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedProject ?? 1}
      />
    </section>
  )
} 