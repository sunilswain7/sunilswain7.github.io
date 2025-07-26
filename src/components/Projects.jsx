import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Redaction Tool',
    desc: 'NLP-based PDF redaction system for privacy compliance.',
    tech: 'FastAPI, spaCy, React, Tailwind',
    link: '#'
  },
  {
    title: 'DDoS Detector',
    desc: 'Entropy-based real-time network attack detection dashboard.',
    tech: 'Flask, Next.js, Chart.js',
    link: '#'
  },
  {
    title: 'Flight Data Tracker',
    desc: 'Live aircraft tracking visualizer with METAR/TAF parsing.',
    tech: 'React, Leaflet, OpenSky API',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        className="text-3xl font-heading text-cockpitBlue mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Mission Logs
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-black/30 border border-gray-600 p-6 rounded-xl hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-radarGreen mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{project.desc}</p>
            <p className="text-xs text-gray-400 italic">{project.tech}</p>
            <a
              href={project.link}
              className="mt-4 inline-block text-cockpitBlue hover:underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Launch Mission →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
