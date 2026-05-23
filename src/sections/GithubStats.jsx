import { motion } from "framer-motion"

function GithubStats() {

  const techStack = [
    "Python",
    "AI/ML",
    "Computer Vision",
    "Flask",
    "OpenCV",
    "TensorFlow",
    "PyTorch",
    "Blockchain",
    "Web3",
    "SQL",
    "Odoo ERP",
    "Power BI"
  ]

  const currentFocus = [
    "Edge AI Systems",
    "Offline AI Assistants",
    "Cybersecurity Platforms",
    "AI Automation",
    "Web3 Security",
    "Computer Vision"
  ]

  return (

    <section className="bg-black text-white px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl font-black text-cyan-400 mb-6">

            Engineering Ecosystem

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            Exploring intelligent systems, futuristic software,
            edge computing, AI automation, backend engineering,
            and cybersecurity-driven technology solutions.

          </p>

        </motion.div>

        {/* Grid Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* GitHub Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-cyan-400/20 rounded-3xl p-10 hover:border-cyan-400/40 transition duration-300"
          >

            <h3 className="text-3xl font-black mb-6 text-cyan-400">

              GitHub Presence

            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">

              Building AI-powered applications, backend systems,
              intelligent automation workflows, experimental
              technology projects, and futuristic engineering
              solutions through continuous learning and hands-on
              development.

            </p>

            <a
              href="https://github.com/jeetendarn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition duration-300"
            >

              Visit GitHub

            </a>

          </motion.div>

          {/* Current Focus */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-cyan-400/20 rounded-3xl p-10 hover:border-cyan-400/40 transition duration-300"
          >

            <h3 className="text-3xl font-black mb-6 text-cyan-400">

              Current Focus

            </h3>

            <div className="flex flex-wrap gap-4">

              {currentFocus.map((item, index) => (

                <div
                  key={index}
                  className="px-5 py-3 rounded-2xl bg-zinc-800 border border-cyan-400/10 text-cyan-400 font-medium"
                >

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Tech Stack */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 bg-zinc-900 border border-cyan-400/20 rounded-3xl p-10 hover:border-cyan-400/40 transition duration-300"
        >

          <h3 className="text-3xl font-black mb-8 text-cyan-400">

            Technology Stack

          </h3>

          <div className="flex flex-wrap gap-4">

            {techStack.map((tech, index) => (

              <div
                key={index}
                className="px-6 py-3 rounded-2xl bg-black border border-cyan-400/20 text-cyan-400 font-semibold hover:border-cyan-400/50 transition duration-300"
              >

                {tech}

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default GithubStats