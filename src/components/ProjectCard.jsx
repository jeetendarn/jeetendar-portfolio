function ProjectCard({ project }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

      <div className="flex justify-between items-center mb-4">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <span className="text-xs bg-cyan-400 text-black px-3 py-1 rounded-full font-semibold">
          {project.status}
        </span>

      </div>

      <p className="text-gray-400 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mb-6">

        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-zinc-800 text-cyan-400 px-3 py-2 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}

      </div>

      <a
        href={project.github}
        target="_blank"
        className="inline-block bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300"
      >
        View GitHub
      </a>

    </div>
  )
}

export default ProjectCard