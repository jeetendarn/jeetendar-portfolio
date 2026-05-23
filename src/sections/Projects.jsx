import projectsData from "../data/projectsData"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <section id="projects" className="bg-black text-white px-10 py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects