import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa"

function Contact() {

  const contacts = [

    {
      title: "Email",
      value: "jeetendarn2017@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:jeetendarn2017@gmail.com"
    },

    {
      title: "LinkedIn",
      value: "Connect Professionally",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jeetendar-n-29b566236/"
    },

    {
      title: "GitHub",
      value: "Explore My Repositories",
      icon: <FaGithub />,
      link: "https://github.com/jeetendarn"
    }

  ]

  return (

    <section
      id="contact"
      className="bg-black text-white px-6 md:px-16 py-24"
    >

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

            Let's Connect

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

            Open to AI/ML opportunities, backend engineering roles,
            innovative collaborations, freelance projects,
            research discussions, and futuristic technology building.

          </p>

        </motion.div>

        {/* Availability Banner */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 bg-zinc-900 border border-cyan-400/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >

          <div>

            <h3 className="text-3xl font-black text-cyan-400 mb-3">

              Currently Available

            </h3>

            <p className="text-gray-400 leading-relaxed">

              Open for Full-Time Roles, AI Projects,
              Backend Development, Freelance Work,
              and Collaborative Opportunities.

            </p>

          </div>

          <div className="flex items-center gap-4 bg-black px-6 py-4 rounded-2xl border border-cyan-400/10">

            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

            <p className="font-semibold text-gray-300">

              Available for Opportunities

            </p>

          </div>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {contacts.map((item, index) => (

            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group bg-zinc-900 border border-cyan-400/10 rounded-3xl p-10 hover:border-cyan-400/40 transition duration-500 hover:-translate-y-3"
            >

              {/* Icon */}

              <div className="text-5xl text-cyan-400 mb-8 group-hover:scale-110 transition duration-300">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="text-3xl font-black mb-4">

                {item.title}

              </h3>

              {/* Description */}

              <p className="text-gray-400 leading-relaxed">

                {item.value}

              </p>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Contact