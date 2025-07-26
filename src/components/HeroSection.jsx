import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center radar-grid"
      style={{
        backgroundImage: "url('/fighter-jet.jpg')",
      }}
    >
      {/* Radar sweep animation */}
      <div className="radar-sweep"></div>

      {/* Hero content */}
      <div className="z-10 bg-black/60 p-8 rounded-xl text-center max-w-2xl">
        <motion.h1
          className="text-5xl font-heading text-radarGreen"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sunil Swain
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Full-Stack Developer | Combat-Ready Coder 🚀
        </motion.p>
        <motion.a
          href="#about"
          className="inline-block mt-6 px-6 py-2 border border-radarGreen text-radarGreen hover:bg-radarGreen hover:text-military transition rounded"
          whileHover={{ scale: 1.05 }}
        >
          View Missions
        </motion.a>
      </div>
    </section>
  )
}

export default HeroSection
