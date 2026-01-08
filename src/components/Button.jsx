function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer"

  const variants = {
    primary: "bg-accent text-background hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25",
    outline: "border border-accent text-accent hover:bg-accent hover:text-background",
    ghost: "text-muted hover:text-foreground",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
