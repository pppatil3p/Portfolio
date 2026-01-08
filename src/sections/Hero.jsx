import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import SectionWrapper from "../components/SectionWrapper"
import Button from "../components/Button"

/* ================= FADE-UP ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function Hero() {
  /* ================= ROLE TYPING ================= */
  const roleText = "Software Developer"
  const [role, setRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (roleIndex < roleText.length) {
      const t = setTimeout(() => {
        setRole((p) => p + roleText[roleIndex])
        setRoleIndex((p) => p + 1)
      }, 110)
      return () => clearTimeout(t)
    }
  }, [roleIndex])

  /* ================= HELLO TYPING ================= */
  const helloText = "Hello I'm"
  const [hello, setHello] = useState("")
  const [helloIndex, setHelloIndex] = useState(0)

  useEffect(() => {
    if (helloIndex < helloText.length) {
      const t = setTimeout(() => {
        setHello((p) => p + helloText[helloIndex])
        setHelloIndex((p) => p + 1)
      }, 120)
      return () => clearTimeout(t)
    }
  }, [helloIndex])

  /* ================= NAME DECRYPT ================= */
  const finalName = "Prathmesh Patil"
  const chars = "!<>-_\\/[]{}—=+*^?#________"
  const [name, setName] = useState("")
  const [revealCount, setRevealCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setName(
        finalName
          .split("")
          .map((_, i) =>
            i < revealCount
              ? finalName[i]
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      )

      setRevealCount((p) => p + 1)

      if (revealCount >= finalName.length) {
        clearInterval(interval)
        setName(finalName)
      }
    }, 60)

    return () => clearInterval(interval)
  }, [revealCount])

  /* ================= DESCRIPTION TYPING ================= */
  const description =
    "Transforming ideas into scalable, production-ready software with modern technologies and clean code."
  const [typedDesc, setTypedDesc] = useState("")
  const [descIndex, setDescIndex] = useState(0)

  useEffect(() => {
    if (descIndex < description.length) {
      const t = setTimeout(() => {
        setTypedDesc((p) => p + description[descIndex])
        setDescIndex((p) => p + 1)
      }, 30)
      return () => clearTimeout(t)
    }
  }, [descIndex])

  return (
    <SectionWrapper
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* ===== STATIC GREEN GLOW BACKGROUND ===== */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="grid md:grid-cols-2 gap-12 items-center w-full relative z-10">

        {/* ================= LEFT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          <p className="text-muted mb-2 font-mono">{role}</p>

          <h1 className="text-xl md:text-5xl font-bold mb-4 font-mono">
            {hello}
          </h1>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6
                       bg-gradient-to-r from-accent via-green-400 to-accent
                       bg-[length:200%_200%]
                       bg-clip-text text-transparent
                       animate-gradient font-mono"
          >
            {name}
          </h2>

          <p className="text-muted leading-relaxed mb-8 max-w-md">
            {typedDesc}
          </p>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/assets/Prathmesh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="hover:shadow-[0_0_25px_rgba(0,255,136,0.25)]"
              >
                DOWNLOAD CV
              </Button>
            </a>

            {/* SOCIAL ICONS */}
            {/* ================= SOCIAL ICONS ================= */}
<div className="flex items-center gap-3">
  {[
    {
      name: "GitHub",
      href: "https://github.com/pppatil3p",
      viewBox: "0 0 24 24",
      path: "M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.22 1.79 1.22 1.04 1.8 2.73 1.28 3.4.98.1-.76.41-1.28.74-1.57-2.55-.29-5.23-1.3-5.23-5.77 0-1.28.45-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.17 0 0 .98-.32 3.2 1.2.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.52 3.2-1.2 3.2-1.2.63 1.65.23 2.87.11 3.17.75.82 1.2 1.86 1.2 3.14 0 4.48-2.69 5.48-5.25 5.77.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56 4.57-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pppatil3p/",
      viewBox: "0 0 24 24",
      path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.26 2.2-3.26 4.5V24h-4V8z",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/pppatil_3p/",
      viewBox: "0 0 24 24",
      path: "M16.48 2.52a1 1 0 010 1.41l-8.95 8.95a3 3 0 004.24 4.24l3.54-3.54a1 1 0 111.41 1.41l-3.54 3.54a5 5 0 11-7.07-7.07l8.95-8.95a1 1 0 011.42 0zM14 20a1 1 0 010-2h6a1 1 0 010 2h-6z",
    },
    {
      name: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/yourusername/",
      viewBox: "0 0 24 24",
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.34 0 4.5-.81 6.2-2.16l-3.02-1.75A6.5 6.5 0 1118.5 12h-6v3h9c.03-.33.05-.66.05-1C21.55 7.48 17.52 2 12 2z",
    },
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="w-10 h-10 rounded-full border border-accent
                 flex items-center justify-center text-accent
                 hover:bg-accent hover:text-background
                 transition-all duration-300 hover:scale-110
                 hover:shadow-[0_0_20px_rgba(0,255,136,0.35)]"
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox={social.viewBox}
      >
        <path d={social.path} />
      </svg>
    </a>
  ))}
</div>

          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative flex items-center justify-center">

            {/* ROTATING RING */}
            <div className="absolute animate-spin-slow">
              <svg className="w-[360px] h-[360px]" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="2"
                  strokeDasharray="18 10"
                  className="opacity-60"
                />
              </svg>
            </div>

            {/* IMAGE (MASK + DECRYPT) */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-[300px] h-[300px]
                         rounded-full overflow-hidden
                         border border-accent/30
                         bg-background
                         relative z-10"
            >
              <motion.img
                src="/assets/ppp.jpeg"
                alt="Prathmesh Patil"
                className="w-full h-full object-cover"
                initial={{
                  filter: "blur(14px) contrast(0.6)",
                  opacity: 0.4,
                }}
                animate={{
                  filter: "blur(0px) contrast(1)",
                  opacity: 1,
                }}
                transition={{
                  duration: 1.1,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 22s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 7s linear infinite;
        }
      `}</style>
    </SectionWrapper>
  )
}

export default Hero
