import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center px-6 md:px-16 py-20"
    >

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Status Badge */}

          <div className="inline-flex items-center gap-3 border border-cyan-400/30 bg-zinc-900 px-5 py-3 rounded-full mb-8">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <p className="text-sm uppercase tracking-wide text-gray-300">
              Available for AI/ML Opportunities
            </p>

          </div>

          {/* Heading */}

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">

            Hi, I'm

            <br />

            <span className="text-cyan-400">
              Jeetendar
            </span>

          </h1>

          {/* Typing Animation */}

          <div className="text-2xl md:text-4xl font-bold text-gray-300 h-20 mb-8">

            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Computer Vision Developer",
                2000,
                "Edge AI Explorer",
                2000,
                "Backend Developer",
                2000,
                "Web3 Security Builder",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Description */}

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">

            Building intelligent AI systems, automation workflows,
            cybersecurity-driven applications, and futuristic software
            solutions using AI, Edge Computing, Computer Vision,
            Blockchain, and Backend Engineering.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition duration-300"
            >
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Main Circle */}

          <div className="relative w-[450px] h-[450px] rounded-full border border-cyan-400/30 flex items-center justify-center bg-zinc-900/40 backdrop-blur-lg">

            {/* Inner Glow */}

            <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

            {/* Center Text */}

            <div className="text-center z-10">

              <h2 className="text-5xl font-black text-cyan-400 mb-4">
                AI
              </h2>

              <p className="text-gray-300 text-xl">
                Future-Driven Engineer
              </p>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="absolute top-10 -left-10 bg-zinc-900 border border-cyan-400/20 px-6 py-4 rounded-2xl">
            <p className="text-cyan-400 font-semibold">
              Edge AI
            </p>
          </div>

          <div className="absolute bottom-16 -left-12 bg-zinc-900 border border-cyan-400/20 px-6 py-4 rounded-2xl">
            <p className="text-cyan-400 font-semibold">
              Computer Vision
            </p>
          </div>

          <div className="absolute top-16 -right-10 bg-zinc-900 border border-cyan-400/20 px-6 py-4 rounded-2xl">
            <p className="text-cyan-400 font-semibold">
              AI Engineer
            </p>
          </div>

          <div className="absolute bottom-20 -right-12 bg-zinc-900 border border-cyan-400/20 px-6 py-4 rounded-2xl">
            <p className="text-cyan-400 font-semibold">
              Web3 Security
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero