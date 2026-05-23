import CountUp from "react-countup"
import { motion } from "framer-motion"

function Stats() {

  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "AI/ML Projects"
    },

    {
      number: 100,
      suffix: "+",
      label: "Students Mentored"
    },

    {
      number: 25,
      suffix: "+",
      label: "Technologies Explored"
    },

    {
      number: 5,
      suffix: "+",
      label: "Certifications"
    },

    {
      number: 20,
      suffix: "+",
      label: "GitHub Repositories"
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
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-black mb-6 text-cyan-400">

            Impact & Experience

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            Combining AI, Backend Engineering, Computer Vision,
            Edge Computing, and Automation to build scalable,
            futuristic, and impactful technology solutions.

          </p>

        </motion.div>

        {/* Stats Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

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
              className="bg-zinc-900 border border-cyan-400/10 hover:border-cyan-400/40 rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-2"
            >

              <h3 className="text-5xl font-black text-cyan-400 mb-4">

                <CountUp
                  end={item.number}
                  duration={3}
                />

                {item.suffix}

              </h3>

              <p className="text-gray-400 font-medium leading-relaxed">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Stats