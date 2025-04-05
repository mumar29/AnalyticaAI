import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
  const [stars, setStars] = useState([])
  const globeRef = useRef(null)
  const isInView = useInView(globeRef, { once: false })
  const controls = useAnimation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    // Generate random stars for the background with animation properties
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.9 + 0.4,
          animationDuration: 2 + Math.random() * 3, // Random duration between 2-5s
          animationDelay: Math.random() * 5, // Random delay between 0-5s
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const globeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    rotate: {
      rotateZ: 360,
      transition: {
        duration: 120,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a0a18] text-white">
      {/* Animated Stars background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            initial={{ opacity: star.opacity }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1,1.5, 1],
            }}
            transition={{
              duration: star.animationDuration,
              delay: star.animationDelay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* Purple gradient arc at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-[300px] w-full overflow-hidden">
        <div
          className="absolute bottom-[-150px] left-[-10%] right-[-10%] h-[400px] rounded-[100%] opacity-80"
          style={{
            background: "linear-gradient(180deg, rgba(66, 36, 137, 0.4) 0%, rgba(108, 34, 132, 0.8) 100%)",
            boxShadow: "0 0 80px 20px rgba(101, 68, 158, 0.67)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header/Navigation */}
        <header className="sticky top-0 z-20 flex w-full items-center justify-between px-6 md:px-12 py-4 bg-opacity-30 backdrop-blur-md">
  {/* Logo */}
  <h1 className="text-xl font-bold tracking-wider text-purple-900">AnalyticaAI</h1>

  {/* Navigation */}
  <nav className="flex w-full max-w-7xl justify-center gap-x-10">
    <a href="#" className="border-b-2 border-transparent pb-1 text-gray-300 hover:border-white hover:text-white">
      Home
    </a>
    <a onClick={()=>navigate("/login")} className="border-b-2 border-transparent pb-1 text-gray-300 hover:border-white hover:text-white">
      Sign In
    </a>
    <a href="#" className="border-b-2 border-transparent pb-1 text-gray-300 hover:border-white hover:text-white">
      Contact Us
    </a>
  </nav>

  {/* Sign In Button */}
  <Button onClick={()=>navigate("/login")} className="rounded-full bg-white px-6 py-2 text-[#0a0a18] hover:bg-gray-200">
    Sign In
  </Button>
</header>


        {/* Main Content */}
        <main className="mx-auto mt-20 max-w-7xl px-6 text-center">
          <motion.div variants={floatingVariants} animate="float">
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
            >
              Analytica AI
            </motion.h2>
            <motion.h5
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-xl font-bold leading-tight tracking-tight md:text-7xl"
            >
              LLM Powered Data Analytics Solution
            </motion.h5>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-gray-300"
          >
            Turning Questions into Insights, Instantly. 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-48 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 px-8 py-6 text-white hover:from-purple-600 hover:to-purple-400">
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
