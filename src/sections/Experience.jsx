import experienceData from "../data/experienceData"

function Experience() {
  return (
    <section className="bg-black text-white px-10 py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Experience
        </h2>

        <div className="space-y-8">

          {experienceData.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.role}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {item.company}
                  </p>
                </div>

                <p className="text-gray-400 mt-3 md:mt-0">
                  {item.duration}
                </p>

              </div>

              <ul className="space-y-3">

                {item.points.map((point, pointIndex) => (

                  <li
                    key={pointIndex}
                    className="text-gray-400 flex gap-3"
                  >
                    <span className="text-cyan-400">
                      •
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Experience