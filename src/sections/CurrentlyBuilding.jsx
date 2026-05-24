import { motion } from "framer-motion"

function CurrentlyBuilding() {

  const builds = [

    {
      title: "Brahmastra Offline AI Assistant",
      description:
        "Building a privacy-focused offline AI assistant powered by local LLMs with voice interaction, OCR integration, automation workflows, and futuristic desktop intelligence.",

      tags: [
        "LLM",
        "Offline AI",
        "Automation",
        "Voice AI"
      ]
    },

    {
      title: "Edge AI Security Monitoring",
      description:
        "Developing intelligent edge-based surveillance and cybersecurity systems integrating Computer Vision, real-time monitoring, and decentralized blockchain logging.",

      tags: [
        "Computer Vision",
        "Cybersecurity",
        "Edge AI",
        "Blockchain"
      ]
    },

    {
      title: "AI Automation Ecosystem",
      description:
        "Experimenting with productivity automation tools, OCR workflows, AI pipelines, and backend integrations for real-world business optimization.",

      tags: [
        "OCR",
        "Automation",
        "Backend",
        "AI Pipelines"
      ]
    }

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

            Currently Building

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            Exploring futuristic AI systems, automation workflows,
            privacy-focused assistants, and next-generation
            intelligent engineering solutions.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {builds.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-zinc-900 border border-cyan-400/10 rounded-3xl p-10 hover:border-cyan-400/40 transition duration-500 hover:-translate-y-3"
            >

              {/* Animated Glow */}

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">

                <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 blur-3xl"></div>

              </div>

              {/* Live Badge */}

              <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/20">

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

                <span className="text-cyan-400 font-semibold text-sm">

                  In Progress

                </span>

              </div>

              {/* Title */}

              <h3 className="text-3xl font-black mb-5">

                {item.title}

              </h3>

              {/* Description */}

              <p className="text-gray-400 leading-relaxed mb-8">

                {item.description}

              </p>

              {/* Tags */}

              <div className="flex flex-wrap gap-3">

                {item.tags.map((tag, i) => (

                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-black border border-cyan-400/10 text-cyan-400 text-sm"
                  >

                    {tag}

                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default CurrentlyBuilding