import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa"

function Footer() {

  return (

    <footer className="bg-black border-t border-cyan-400/10 text-white px-6 md:px-16 py-10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}

        <div>

          <h2 className="text-3xl font-black text-cyan-400 mb-2">

            Jeetendar

          </h2>

          <p className="text-gray-400">

            AI Engineer • Backend Developer • Problem Solver

          </p>

        </div>

        {/* Center */}

        <div className="flex items-center gap-3 text-gray-400">

          <span>Built with</span>

          <FaHeart className="text-red-400 animate-pulse" />

          <span>using React + Tailwind CSS</span>

        </div>

        {/* Right Side */}

        <div className="flex gap-5 text-3xl">

          <a
            href="https://github.com/jeetendarn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >

            <FaGithub />

          </a>

          <a
            href="https://www.linkedin.com/in/jeetendar-n-29b566236/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >

            <FaLinkedin />

          </a>

        </div>

      </div>

      {/* Bottom Line */}

      <div className="mt-10 text-center text-gray-500 text-sm">

        © 2026 Jeetendar N. All Rights Reserved.

      </div>

    </footer>
  )
}

export default Footer