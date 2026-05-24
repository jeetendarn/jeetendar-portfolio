import { motion } from "framer-motion"

function Impact() {

  const stats = [

    {
      number: "50+",
      title: "Students Mentored",
      description:
        "Guided students and interns in AI/ML, Python, Computer Vision, and real-world project development."
    },

    {
      number: "15+",
      title: "Projects Built",
      description:
        "Designed and developed intelligent applications, dashboards, automation systems, and AI-powered solutions."
    },

    {
      number: "5+",
      title: "AI Systems",
      description:
        "Built machine learning, computer vision, OCR, and automation-focused AI applications."
    },

    {
      number: "3+",
      title: "Dashboards Developed",
      description:
        "Created analytics dashboards and monitoring systems for business insights and operational tracking."
    },

    {
      number: "2+",
      title: "ERP Modules",
      description:
        "Customized Odoo ERP workflows, backend modules, and automation pipelines for business operations."
    },

    {
      number: "2",
      title: "OCR Automation Systems",
      description:
        "Implemented OCR-powered automation workflows reducing manual data extraction efforts."
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

            Engineering Impact

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            Building intelligent systems, mentoring future developers,
            solving business problems through AI automation,
            and contributing to modern software engineering workflows.

          </p>

        </motion.div>

        {/* Stats Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {stats.map((item, index) => (

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

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">

                <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 blur-3xl"></div>

              </div>

              {/* Number */}

              <h3 className="text-6xl font-black text-cyan-400 mb-6">

                {item.number}

              </h3>

              {/* Title */}

              <h4 className="text-2xl font-bold mb-4">

                {item.title}

              </h4>

              {/* Description */}

              <p className="text-gray-400 leading-relaxed">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Impact