import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-heading text-cockpitBlue border-b-2 border-targetRed pb-2 mb-6">
          Mission Briefing
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m <span className="text-radarGreen font-bold">Sunil Swain</span>, a full-stack developer specializing in building powerful and elegant web applications. I operate with precision, speed, and scalability in mind — just like a modern combat jet. <br /><br />
          My toolkit includes technologies like <span className="text-targetRed font-semibold">React</span>, <span className="text-targetRed font-semibold">Vite</span>, <span className="text-targetRed font-semibold">Node.js</span>, and <span className="text-targetRed font-semibold">Tailwind CSS</span>. Outside the code cockpit, I enjoy flight simulators, reverse engineering, and building high-speed UI/UX experiences.
        </p>
      </motion.div>
    </section>
  )
}

export default About
