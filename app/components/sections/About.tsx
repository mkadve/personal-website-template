'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm <strong>Mihir Kadve</strong>, a Full Stack Developer with over 8 years of experience crafting scalable, high-performance web and mobile applications. My core stack includes React.js, Next.js, Angular, Firebase, and Google Cloud technologies like BigQuery, Bigtable, and Cloud Functions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I've played key roles in architecting frontend systems, designing backend APIs, and deploying serverless platforms. I bring hands-on expertise in integrating CI/CD pipelines using GitLab, containerizing apps with Docker, and scaling cloud-native solutions for real-world products. Whether building micro frontends or engineering AI-assisted tools, I’m passionate about solving complex problems through clean, maintainable code.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Outside work, I enjoy exploring modern AI tools, staying fit through deadlifting and playing badminton, and spending weekends on tech experiments or scenic getaways near Bangalore. I also enjoy contributing to design system libraries and brainstorming startup ideas.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I’m looking to join an innovative product-driven team where I can lead frontend architecture, solve large-scale data challenges, or contribute to developer platforms. I aim to drive impact through AI-assisted engineering, scalable systems, and clean design — while mentoring upcoming talent.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
