import SectionWrapper from "../components/SectionWrapper"

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive, scalable, and performance-optimized web applications using modern frameworks and clean, maintainable code.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and seamless user experiences with a strong focus on usability, accessibility, and visual consistency.",
  },
  {
    number: "03",
    title: "Data Analysis & Power BI",
    description:
      "Analyzing data to uncover insights and creating interactive Power BI dashboards that support data-driven decision-making.",
  },
  {
    number: "04",
    title: "Software Development",
    description:
      "Developing reliable software solutions with structured logic, efficient algorithms, and best practices across the development lifecycle.",
  },
]


function Services() {
  return (
    <SectionWrapper id="services">
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-lg bg-card/30 border border-border hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-5xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300">
                {service.number}
              </span>
              <button className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <svg
                  className="w-5 h-5 text-foreground group-hover:text-background -rotate-45 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-4">{service.title}</h3>
            <p className="text-muted leading-relaxed">{service.description}</p>
            <div className="mt-6 h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Services
