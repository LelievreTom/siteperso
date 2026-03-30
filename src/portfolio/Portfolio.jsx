import { motion } from "framer-motion";
import { FaReact, FaGithub, FaPaintBrush, FaChartBar, FaEnvelope, FaJava, FaPython, FaHtml5, FaCss3, FaDownload } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiSpring } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import ProjectsSection from "./Projects";
import ContactForm from "./ContactForm";
import profilePicture from "../assets/profil.jpeg";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70"
            initial={{ y: Math.random() * 800, x: Math.random() * 1200 }}
            animate={{ y: ["0%", "100%"], opacity: [0.7, 0.2, 0.7] }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center backdrop-blur-sm">
        <h1 className="text-2xl font-bold tracking-wide">Tom Lelievre</h1>
        <nav className="flex gap-6 items-center">
          <a href="#skills" className="hover:text-purple-400 transition">Compétences</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projets</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          {/* Bouton pour télécharger le CV */}
          <a href="/cv.pdf"download className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:scale-105 transition text-white font-medium">
            <FaDownload /> CV
          </a>
        </nav>
      </header>

      {/* Hero avec photo + présentation */}
      <section className="relative z-10 h-[85vh] flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur mon Portfolio
        </motion.h2>

        {/* Photo de profil */}
        <motion.img
          src={profilePicture}
          alt="Photo de profil"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg mt-8 mb-6 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Texte de présentation */}
        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Je m'appelle <span className="font-bold text-white">Tom Lelievre</span>, j’ai 
          <span className="text-purple-400"> 21 ans</span> et je suis actuellement étudiant en 
          <span className="text-purple-400"> 3ᵉ année </span> de BUT Informatique à Lille.  
          Passionné par les nouvelles technologies et le développement informatique,  
          je suis actuellement à la recherche d’un 
          <span className="text-green-400 font-semibold"> stage</span> afin de valider mon année, 
          sur une période allant du 
          <span className="text-green-400 font-semibold"> 16 mars au 3 juillet</span>.
        </motion.p>
      </section>

      {/* Projects */}
      <ProjectsSection /> 

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 p-12 text-center bg-white/5 backdrop-blur-md rounded-2xl mx-6 md:mx-20 my-8 shadow-lg"
      >
        <h3 className="text-3xl font-bold mb-12">Compétences</h3>

        {/* Hard Skills */}
        <div className="mb-12">
          <h4 className="text-2xl font-semibold mb-6 text-purple-400">💻 Hard Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Skill icon={<FaReact size={40} color="#61DBFB" />} name="React" />
            <Skill icon={<FaPaintBrush size={40} />} name="Tailwind CSS" />
            <Skill icon={<FaGithub size={40} />} name="Git / GitHub" />
            <Skill icon={<FaChartBar size={40} />} name="Matomo" />
            <Skill icon={<FaJava size={40} color="#f89820" />} name="Java" />
            <Skill icon={<FaPython size={40} color="#3776AB" />} name="Python" />
            <Skill icon={
              <div className="flex gap-2">
                <FaHtml5 size={40} color="#E34F26" />
                <FaCss3 size={40} color="#1572B6" />
              </div>
            }name="HTML / CSS"/>
            <Skill icon={<DiPostgresql size={40} color="#336791" />} name="PostgreSQL" />
            <Skill icon={<SiKotlin size={40} color="#7F52FF" />} name="Kotlin" />
            <Skill icon={<SiMongodb size={40} color="#47A248" />} name="MongoDB" />
            <Skill icon={<SiSpring size={40} color="#6DB33F" />} name="Spring" />
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 text-pink-400">🤝 Soft Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Skill icon={<span className="text-3xl">💬</span>} name="Communication" />
            <Skill icon={<span className="text-3xl">👥</span>} name="Travail en équipe" />
            <Skill icon={<span className="text-3xl">🧩</span>} name="Résolution de problèmes" />
            <Skill icon={<span className="text-3xl">⏳</span>} name="Gestion du temps" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactForm />

      {/* Footer */}
      <footer className="relative z-10 p-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Tom Lelievre — Tous droits réservés.
      </footer>
    </div>
  );
}

/* --- Composants réutilisables --- */
function Skill({ icon, name }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow hover:shadow-purple-500/30 transition"
      whileHover={{ scale: 1.1 }}
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
}
