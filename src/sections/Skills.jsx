import skillsData from "../data/skillsData"

function Skills() {
  return (
    <section id="skills" className="bg-black text-white px-10 py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillsData.map((item, index) => (
            
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >
              
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {item.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {item.skills.map((skill, skillIndex) => (
                  
                  <span
                    key={skillIndex}
                    className="bg-zinc-800 text-cyan-400 px-4 py-2 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition duration-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills