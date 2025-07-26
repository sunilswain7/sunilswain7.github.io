import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiVite } from 'react-icons/si'

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <SiVite />, name: 'Vite' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaGitAlt />, name: 'Git' },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-military border-y border-gray-700 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-heading text-cockpitBlue mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Tactical Loadout
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-black/30 border border-gray-600 p-6 rounded-xl hover:shadow-lg hover:shadow-radarGreen/40 transition duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-radarGreen mb-2">{skill.icon}</div>
              <p className="text-sm uppercase tracking-wider">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
