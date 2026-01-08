"use client"

import { useState } from "react"
import SectionWrapper from "../components/SectionWrapper"
import Skills from "./Skills"
import About from "./About"

const tabs = [ "Education", "Skills", "About me"]

// const experienceData = [
//   { year: "2020 - 2021", title: "Freelance Web Developer", company: "E-commerce Startup" },
//   { year: "2019 - 2020", title: "Teaching Assistant", company: "Tech Academy" },
//   { year: "2018 - 2019", title: "UI/UX Designer", company: "Digital Agency" },
// ]

const educationData = [
  { year: "2022- 2026", title: "B-Tech in Computer Technology", institution: "YCCE,Nagpur" },
]

function Resume() {
  const [activeTab, setActiveTab] = useState("Experience")

  const renderContent = () => {
    switch (activeTab) {
      // case "Experience":
      //   return (
      //     <div>
      //       <h3 className="text-3xl font-bold mb-4">My experience</h3>
      //       <p className="text-muted mb-8">
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.
      //       </p>
      //       <div className="grid md:grid-cols-2 gap-6">
      //         {experienceData.map((item, index) => (
      //           <div
      //             key={index}
      //             className="p-6 bg-card/30 rounded-lg border-l-2 border-accent hover:bg-card/50 transition-all duration-300"
      //           >
      //             <span className="text-accent text-sm">{item.year}</span>
      //             <h4 className="text-lg font-bold mt-2 mb-2">{item.title}</h4>
      //             <p className="text-muted text-sm flex items-center gap-2">
      //               <span className="w-2 h-2 rounded-full bg-accent"></span>
      //               {item.company}
      //             </p>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //   )
      case "Education":
        return (
          <div>
            <h3 className="text-3xl font-bold mb-4">My education</h3>
            <p className="text-muted mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card/30 rounded-lg border-l-2 border-accent hover:bg-card/50 transition-all duration-300"
                >
                  <span className="text-accent text-sm">{item.year}</span>
                  <h4 className="text-lg font-bold mt-2 mb-2">{item.title}</h4>
                  <p className="text-muted text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )
      case "Skills":
        return <Skills />
      case "About me":
        return <About />
      default:
        return null
    }
  }

  return (
    <SectionWrapper id="resume">
      <div className="grid md:grid-cols-[300px_1fr] gap-12">
        {/* Left Side - Tabs */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Prathmesh Patil</h2>
          <p className="text-muted mb-8 text-sm">Software Developer / Freelancer</p>
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-6 rounded-lg text-center transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-accent text-background font-medium"
                    : "bg-card/50 text-foreground hover:bg-card"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div>{renderContent()}</div>
      </div>
    </SectionWrapper>
  )
}

export default Resume
