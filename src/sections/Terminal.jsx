import { motion } from "framer-motion"

function Terminal() {

  const logs = [

    "Initializing AI Sentinel Security Center...",
    "Connecting Edge Monitoring Nodes...",
    "Blockchain Threat Logging Activated...",
    "OCR Automation Pipeline Running...",
    "Neural Monitoring Systems Online...",
    "Loading Offline AI Assistant Engine...",
    "Computer Vision Surveillance Enabled...",
    "Deploying AI Workflow Automation...",
    "Monitoring Real-Time Security Streams...",
    "System Status: OPERATIONAL"
  ]

  return (

    <section className="bg-black text-white px-6 md:px-16 py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl font-black text-cyan-400 mb-6">

            AI System Terminal

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            Simulated AI engineering environment showcasing
            intelligent systems, cybersecurity workflows,
            automation pipelines, and futuristic infrastructure.

          </p>

        </motion.div>

        {/* Terminal */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-zinc-950 border border-cyan-400/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.08)]"
        >

          {/* Terminal Header */}

          <div className="flex items-center gap-3 px-6 py-5 border-b border-cyan-400/10 bg-zinc-900">

            <div className="w-4 h-4 rounded-full bg-red-400"></div>

            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

            <div className="w-4 h-4 rounded-full bg-green-400"></div>

            <p className="ml-4 text-gray-400 font-mono text-sm">

              jeetendar@ai-terminal:~$

            </p>

          </div>

          {/* Terminal Body */}

          <div className="p-8 md:p-10 font-mono text-sm md:text-base space-y-6">

            {logs.map((log, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >

                {/* Prompt */}

                <span className="text-cyan-400">

                  &gt;

                </span>

                {/* Log */}

                <span className="text-green-400 break-words">

                  {log}

                </span>

              </motion.div>

            ))}

            {/* Final Status */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.5
              }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mt-10"
            >

              <span className="text-cyan-400">

                &gt;

              </span>

              <span className="text-white">

                Awaiting next intelligent workflow...

              </span>

              {/* Blinking Cursor */}

              <span className="w-3 h-6 bg-cyan-400 animate-pulse inline-block"></span>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Terminal