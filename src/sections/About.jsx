function About() {
  return (
    <section className="bg-black text-white px-10 py-24">
      
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am an AI/ML Engineer and Backend Developer focused on building 
              intelligent systems using Computer Vision, OCR automation, 
              Machine Learning, and modern web technologies.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              My experience includes AI-powered surveillance systems, OCR-based 
              automation workflows, ERP customization, backend development, 
              and data analytics dashboards for practical business applications.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I enjoy solving real-world problems through scalable software 
              engineering, automation, and AI-driven solutions while continuously 
              exploring emerging technologies like Edge AI and Web3.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-400 transition duration-300">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                10+
              </h3>
              <p className="text-gray-400">
                AI & Software Projects
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-400 transition duration-300">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                AI
              </h3>
              <p className="text-gray-400">
                Computer Vision & OCR
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-400 transition duration-300">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                Flask
              </h3>
              <p className="text-gray-400">
                Backend Development
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-400 transition duration-300">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                Data
              </h3>
              <p className="text-gray-400">
                Analytics & Dashboards
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About