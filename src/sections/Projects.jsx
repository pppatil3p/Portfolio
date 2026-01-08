"use client"

import { useState } from "react"
import SectionWrapper from "../components/SectionWrapper"

const projects = [
  {
    number: "01",
    title: "Nutrition Tracker",
    description:
      "A full-stack nutrition tracking platform that enables users to log meals, analyze calories, and monitor dietary intake using AI-powered insights. Built with secure JWT authentication and Gemini API–based nutrition analysis for accurate, automated diet tracking.",
    tech: ["MERN", "Tailwind", "JWT", "Gemini API"],
    image: "/assets/Nutrition.png",
    githubUrl: "https://github.com/pppatil3p/Nutrition-Tracker",
    liveUrl: "#",
  },
  {
    number: "02",
    title: "Ai-Trip planner",
    description:
      "A full-stack AI-powered trip planning platform that helps users generate personalized travel itineraries, optimize routes, and discover activities based on preferences. Built with secure authentication and real-time AI-driven recommendations for efficient and customized travel planning.",
    tech: ["React", "Tailwind", "Gemini API","Firebase"],
    image: "/assets/attrip.png",
    githubUrl: "https://github.com/pppatil3p/Ai-trip_planner",
    liveUrl: "#",
  },
  {
    number: "03",
    title: "E-commerce Backend",
    description:
      "A Spring Boot–based e-commerce Backend application featuring REST APIs for product management, cart operations, and order processing, with secure authentication and database-driven persistence.",
    tech: ["React", "Java","Springboot", "JPA","H2"],
    image: "",
    githubUrl: "https://github.com/pppatil3p/E-Com_Backend_SpringBoot",
    liveUrl: "#",
  },
    {
    number: "04",
    title: "Organ classification",
    description:
      "A deep learning project focused on automatic organ classification in laparoscopic images using CNN models, data augmentation, and preprocessing to enhance accuracy for surgical applications.",
    tech: ["React", "Python", "ResNet18","CNN","Deep learning"],
    image: "",
    githubUrl: "https://github.com/pppatil3p/Organ-Classification-",
    liveUrl: "#",
  },
    {
    number: "05",
    title: "Data Analysis",
    description:
      "A data-driven profitability analysis that examines how discount strategies affect revenue and profit, enabling businesses to optimize pricing and promotional decisions.",
    tech: ["Pandas","Numpy","MatPlotlib","PowerBI"],
    image: "",
    githubUrl: "https://github.com/pppatil3p/discount-impact-profitability-analysis",
    liveUrl: "#",
  },
]

function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  return (
    <SectionWrapper id="work">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-7xl font-bold text-border">
            {project.number}
          </span>

          <h3 className="text-3xl font-bold mt-4 mb-4">
            {project.title}
          </h3>

          <p className="text-muted mb-6">
            {project.description}
          </p>

          <p className="text-accent mb-8">
            {project.tech.join(", ")}
          </p>

          <div className="h-px bg-border mb-6"></div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {/* Live Demo Button */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
            >
              <svg
                className="w-5 h-5 -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* GitHub Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-6 right-0 flex gap-2">
            <button
              onClick={prevProject}
              className="w-12 h-12 bg-accent text-background flex items-center justify-center hover:bg-accent/90 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextProject}
              className="w-12 h-12 bg-accent text-background flex items-center justify-center hover:bg-accent/90 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects
