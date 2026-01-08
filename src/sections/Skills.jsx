const skills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MERN",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Power BI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
];

function Skills() {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">My skills</h3>
      <p className="text-muted mb-8">
        Expertise in full-stack development, database management, and data analytics.
Skilled in React, Spring Boot, SQL, MERN stack, and Power BI.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-6 bg-card/30 rounded-lg border border-border hover:border-accent/50 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <img
              src={skill.icon || "/placeholder.svg"}
              alt={skill.name}
              className="w-16 h-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
            />
            <span className="text-sm text-muted group-hover:text-foreground transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
