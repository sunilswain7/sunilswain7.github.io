// import { motion } from 'framer-motion';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-combatBg text-white">
      <h1 className="text-radarBlue text-4xl mb-4 font-techno tracking-widest">🛩️ Mission: Portfolio</h1>
      <div className="bg-panelGray rounded-2xl p-6 shadow-lg w-full max-w-3xl">
        <p className="text-hudGreen text-xl">Hello Pilot, I'm [Your Name]</p>
        <p className="text-gray-300 mt-2">Full-stack Developer | Jet Enthusiast | Tech Explorer</p>
        <hr className="my-4 border-radarBlue/20" />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-combatBg border border-hudGreen p-4 rounded">
            <h2 className="text-hudGreen text-lg">🧑‍💻 Skills</h2>
            <ul className="list-disc ml-4 text-sm text-gray-300">
              <li>React + Vite</li>
              <li>Node / Flask</li>
              <li>Blockchain & Web3</li>
            </ul>
          </div>
          <div className="bg-combatBg border border-radarBlue p-4 rounded">
            <h2 className="text-radarBlue text-lg">📡 Projects</h2>
            <ul className="list-disc ml-4 text-sm text-gray-300">
              <li>Redaction Tool</li>
              <li>DDoS Detection Dashboard</li>
              <li>Ethernaut Solves</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
