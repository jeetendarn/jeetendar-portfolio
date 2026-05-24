import { motion } from "framer-motion"

function Experience() {

  const experiences = [

    {
      role: "Trainer & AI Developer",
      company: "Pas3CyberLabs LLP",
      period: "2026 - Present",

      description:
        "Training students in AI/ML, Python, and Computer Vision through project-based learning while contributing to technical systems, automation workflows, and AI-driven development initiatives.",

      impact: [
        "Mentored 50+ students and interns",
        "Built AI-focused learning workflows",
        "Worked on automation-driven systems",
        "Managed technical website operations"
      ]
    },

    {
      role: "Technical Developer",
      company: "Prixgen Tech Solutions",
      period: "2025",

      description:
        "Worked on Odoo ERP customization, backend engineering, automation workflows, debugging, and business-oriented software solutions.",

      impact: [
        "Customized ERP modules",
        "Developed dynamic reporting systems",
        "Optimized backend workflows",
        "Worked with SQL and deployment pipelines"
      ]
    },

    {
      role: "AI Intern / Trainee",
      company: "Prixgen Tech Solutions",
      period: "2025",

      description:
        "Worked on OCR automation systems, Computer Vision applications, AI workflows, and image-processing pipelines using Python and OpenCV.",

      impact: [
        "Built OCR automation workflows",
        "Worked with Tesseract OCR",
        "Developed AI image-processing systems",
        "Improved document extraction pipelines"
      ]
    }

  ]

  return (

    <section className="bg-black text-white px-6 md:px-16 py-24">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl font-black text-cyan-400 mb-6">

            Experience Timeline

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            My journey across AI engineering, backend development,
            ERP systems, automation workflows, and technical mentoring.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative border-l border-cyan-400/20 ml-4">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              className="mb-20 ml-10 relative"
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[52px] top-2 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)]"></div>

              {/* Card */}

              <div className="bg-zinc-900 border border-cyan-400/10 rounded-3xl p-10 hover:border-cyan-400/40 transition duration-500 hover:-translate-y-2">

                {/* Role */}

                <h3 className="text-3xl font-black text-cyan-400 mb-3">

                  {item.role}

                </h3>

                {/* Company */}

                <div className="flex flex-wrap items-center gap-4 mb-6">

                  <p className="text-xl font-semibold text-gray-300">

                    {item.company}

                  </p>

                  <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm">

                    {item.period}

                  </span>

                </div>

                {/* Description */}

                <p className="text-gray-400 leading-relaxed mb-8">

                  {item.description}

                </p>

                {/* Impact */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {item.impact.map((point, i) => (

                    <div
                      key={i}
                      className="bg-black border border-cyan-400/10 rounded-2xl px-5 py-4 text-gray-300"
                    >

                      🚀 {point}

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Experience