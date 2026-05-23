import certificationsData from "../data/certificationsData"

function Certifications() {
  return (
    <section className="bg-black text-white px-10 py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificationsData.map((cert, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-4">
                {cert.title}
              </h3>

              <p className="text-gray-400">
                {cert.company}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications