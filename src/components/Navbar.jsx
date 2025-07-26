const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-military/80 backdrop-blur border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-heading text-radarGreen">Jetfolio</h1>
        <ul className="flex gap-6 font-body text-sm uppercase tracking-wide">
          {["Home", "About", "Skills", "Projects", "Timeline", "Contact"].map(section => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:text-targetRed transition">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
