function SectionWrapper({ children, id, className = "" }) {
  return (
    <section id={id} className={`py-20 px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  )
}

export default SectionWrapper
