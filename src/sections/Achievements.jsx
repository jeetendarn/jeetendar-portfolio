import { motion } from "framer-motion"

function Achievements() {

  const achievements = [

    {
      title:
        "Google Cloud Associate Cloud Engineer",

      issuer:
        "Google Cloud",

      description:
        "Completed cloud engineering and infrastructure learning focused on deployment workflows, cloud services, and scalable systems.",

      badge:
        "Cloud Engineering"
    },

    {
      title:
        "Google Cloud Data Analyst Track",

      issuer:
        "Google Cloud",

      description:
        "Worked on analytics workflows, cloud-based data processing, and business intelligence concepts.",

      badge:
        "Data Analytics"
    },

    {
      title:
        "Career Essentials in Generative AI",

      issuer:
        "Microsoft & LinkedIn",

      description:
        "Explored Generative AI concepts, LLM workflows, productivity AI systems, and future AI applications.",

      badge:
        "Generative AI"
    },

    {
      title:
        "Data Analytics Essentials",

      issuer:
        "Cisco Networking Academy",

      description:
        "Built understanding of data visualization, analytics pipelines, reporting workflows, and business insights.",

      badge:
        "Analytics"
    },

    {
      title:
        "AI & Software Engineering Simulation",

      issuer:
        "Electronic Arts & Cognizant",

      description:
        "Worked on practical AI engineering simulations and real-world software engineering problem-solving scenarios.",

      badge:
        "AI Engineering"
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

            Certifications & Achievements

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            Continuous learning across AI engineering,
            cloud technologies, analytics, automation,
            and next-generation software systems.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {achievements.map((item, index) => (

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

              {/* Badge */}

              <div className="inline-block mb-6 px-5 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold">

                {item.badge}

              </div>

              {/* Title */}

              <h3 className="text-2xl font-black mb-4 leading-snug">

                {item.title}

              </h3>

              {/* Issuer */}

              <p className="text-cyan-400 font-semibold mb-5">

                {item.issuer}

              </p>

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

export default Achievements