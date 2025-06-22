'use client'

import React from 'react'
import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

// This is a configuration file for the skills showcase component
// You can modify the content below based on your skills and experience

// Skills categories and corresponding icon configuration
// Each skill item contains:
// - name: Skill name
// - icon: Icon path (SVG format, stored in public/skills/ directory)
// const technologies = {
//   // Frontend development skills examples
//   frontend: [
//     { name: 'React', icon: '/skills/react.svg' },
//     { name: 'Vue', icon: '/skills/vue.png' },     // Add your familiar frontend frameworks
//     { name: 'TypeScript', icon: '/skills/typescript.svg' },
//   ],
  
//   // Backend development skills examples
//   backend: [
//     { name: 'Node.js', icon: '/skills/nodejs.svg' },
//     { name: 'Python', icon: '/skills/python.svg' }, // Add your familiar backend languages
//     // { name: 'Java', icon: '/skills/java.svg' },
//   ],

//   // Database and deployment examples
//   infrastructure: [
//     { name: 'MySQL', icon: '/skills/mysql.png' },  // Add databases you've used
//     { name: 'MongoDB', icon: '/skills/mongodb.svg' },
//     { name: 'Docker', icon: '/skills/docker.png' }, // Add deployment tools you're familiar with
//   ],

//   // Development tools examples
//   tools: [
//     { name: 'Git', icon: '/skills/git.svg' },
//     { name: 'VS Code', icon: '/skills/vscode.svg' },
//     { name: 'Postman', icon: '/skills/postman.png' }, // Add your commonly used development tools
//   ]
// }

const technologies = {
  frontend: [
    { name: "React", icon: "/skills/react.svg" },
    { name: "Next.js", icon: "/skills/nextjs.svg" },
    // { name: "React Native", icon: "/skills/react-native.svg" },
    { name: "TypeScript", icon: "/skills/typescript.svg" },
    { name: "Redux", icon: "/skills/redux.svg" },
    { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
    { name: "Styled Components", icon: "/skills/styledcomponents.svg" },
    { name: "Material UI", icon: "/skills/material-ui.svg" },
    { name: "Ant Design", icon: "/skills/antd.svg" },
    { name: "Socket.io", icon: "/skills/socketio.svg" }
  ],

  backend: [
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "Express", icon: "/skills/express.svg" },
    { name: "Python", icon: "/skills/python.svg" },
    { name: "C#", icon: "/skills/csharp.svg" },
    // { name: "ASP.NET", icon: "/skills/aspnet.svg" }
  ],

  infrastructure: [
    { name: "AWS", icon: "/skills/aws.svg" },
    { name: "Firebase", icon: "/skills/firebase.svg" },
    { name: "Docker", icon: "/skills/docker.png" },
    { name: "Github Actions", icon: "/skills/github.svg" },
    // { name: "Azure DevOps", icon: "/skills/azuredevops.svg" }
  ],

  tools: [
    { name: "Git", icon: "/skills/git.svg" },
    { name: "GitHub", icon: "/skills/github.svg" },
    { name: "Jira", icon: "/skills/jira.svg" },
    { name: "Postman", icon: "/skills/postman.png" },
    { name: "Figma", icon: "/skills/figma.svg" },
    { name: "SonarQube", icon: "/skills/sonarqube.svg" },
    // { name: "Framer Motion", icon: "/skills/framer-motion.svg" },
    { name: "NPM", icon: "/skills/npm.svg" },
    { name: "Yarn", icon: "/skills/yarn.svg" },
    { name: "JavaScript", icon: "/skills/javascript.svg" }
  ]
}


// Category display name configuration
// You can modify category names or add new categories as needed
const categories = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  infrastructure: 'Database & Deployment',
  tools: 'Development Tools'
}

// Usage instructions:
// 1. Add or modify your skill items in the technologies object
// 2. Ensure each skill's icon file exists in the public/skills/ directory
// 3. Set corresponding category display names in the categories object
// 4. To add new categories, add configurations in both objects

export default function MySkills() {
  return (
    <section id="skills" className="
      min-h-screen w-full flex items-center justify-center 
      p-4 sm:p-8 /* padding 4 on mobile, 8 on sm(640px) and above */
    ">
      <div className="container mx-auto">
        <AnimatedText>
          <h1 className="
            text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center
          ">
            Technical Skills
          </h1>
        </AnimatedText>
        
        <div className="
          max-w-5xl mx-auto 
          space-y-8 sm:space-y-12 /* vertical spacing 8 on mobile, 12 on sm(640px) and above */
        ">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <AnimatedText key={category} className="
              space-y-4 sm:space-y-6 /* vertical spacing 4 on mobile, 6 on sm(640px) and above */
            ">
              <h2 className="
                text-xl sm:text-2xl /* font size xl(20px) on mobile, 2xl(24px) on sm(640px) and above */  
                font-semibold text-center
              ">
                {categories[category]}
              </h2>
              
              <div className="flex justify-center">
                <div className="
                  flex flex-wrap justify-center 
                  gap-4 sm:gap-8 md:gap-12 /* gap 4 on mobile, 8 on sm(640px), 12 on md(768px) and above */
                ">
                  {technologies[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex flex-col items-center 
                        gap-2 sm:gap-3 /* gap 2 on mobile, 3 on sm(640px) and above */
                        w-[80px] sm:w-[100px] /* width 80px on mobile, 100px on sm(640px) and above */
                        group
                      "
                    >
                      <div className="
                        relative 
                        w-16 sm:w-20 /* width 4rem(64px) on mobile, 5rem(80px) on sm(640px) and above */           
                        h-16 sm:h-20 /* height 4rem(64px) on mobile, 5rem(80px) on sm(640px) and above */           
                        flex items-center justify-center 
                        transition-all duration-300 
                        group-hover:scale-110   
                        group-hover:-translate-y-1
                      ">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="
                            dark:invert          
                            sm:w-[56px] sm:h-[56px] /* icon size 56px on sm(640px) and above */
                          "
                        />
                      </div>
                      <span className="
                        text-xs sm:text-sm /* font size xs(12px) on mobile, sm(14px) on sm(640px) and above */     
                        font-medium 
                        text-foreground/70 
                        group-hover:text-foreground/90 
                        transition-colors 
                        text-center
                      ">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
} 