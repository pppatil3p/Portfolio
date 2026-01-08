const aboutInfo = [
  { label: "Name", value: "Prathmesh Patil" },
  { label: "Phone", value: "(+91) 9322351023 " },
  
 
  { label: "Email", value: "prathmesh3p45@gmail.com" },
  { label: "Freelance", value: "Available" },
  { label: "Languages", value: "English, Hindi , Marathi" },
]

function About() {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">About me</h3>
      <p className="text-muted mb-8">
        I am a motivated software developer with a strong foundation in full-stack application development and data analytics. I have hands-on experience building responsive web applications using React, Spring Boot, and the MERN stack, along with designing RESTful APIs and managing SQL-based databases. I also work with data analysis and visualization tools like Power BI to derive actionable insights and support data-driven decision-making.
      </p>
      <div className="grid grid-cols-2 gap-x-12 gap-y-4">
        {aboutInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-muted">{item.label}</span>
            <span className="text-foreground font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
