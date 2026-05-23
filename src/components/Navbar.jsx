import { useState } from "react"
import { motion } from "framer-motion"
import { HiMenuAlt3, HiX } from "react-icons/hi"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-cyan-400/10">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-3xl font-black text-cyan-400">

          Jeetendar

        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Icon */}

        <div
          className="md:hidden text-cyan-400 text-4xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <HiX /> : <HiMenuAlt3 />}

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-zinc-950 border-t border-cyan-400/10"
        >

          <ul className="flex flex-col items-center gap-8 py-10 text-gray-300 text-lg font-medium">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>

        </motion.div>

      )}

    </nav>
  )
}

export default Navbar