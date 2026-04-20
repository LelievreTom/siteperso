import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaPaintBrush, FaChartBar, FaEnvelope, FaJava, FaPython, FaHtml5, FaCss3, FaDownload } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiSpring, SiAngular } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import ProjectsSection from "./Projects";
import ContactForm from "./ContactForm";
import profilePicture from "../assets/profil.jpeg";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "projects", "skills", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navLinks = [
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-x-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 pointer-events-none">
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
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 flex justify-between items-center ${isScrolled ? "bg-gray-900/80 backdrop-blur-lg shadow-2xl py-3" : "bg-transparent py-6"
          }`}
      >
        <a href="#home">
          <h1 className="text-2xl font-bold tracking-wide hover:text-purple-400 transition cursor-pointer">
            Tom Lelievre
          </h1>
        </a>
        <nav className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-sm font-medium transition-all hover:text-purple-400 ${activeSection === link.id ? "text-purple-400" : "text-gray-300"
                }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
                />
              )}
            </a>
          ))}
          {/* Bouton pour télécharger le CV */}
          <a href="/cv.pdf" download className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:scale-105 transition text-white text-sm font-bold">
            <FaDownload /> CV
          </a>
        </nav>
      </header>

      {/* Hero avec photo + présentation */}
      <section id="home" className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
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
          <span className="text-purple-400"> 21 ans</span> et je suis actuellement en
          <span className="text-purple-400"> fin de 3ᵉ année</span> de BUT Informatique à Lille.
          Passionné par les nouvelles technologies et le développement informatique,
          je suis actuellement en <span className="text-green-400 font-semibold">stage chez Infotel</span>.
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
            <Skill icon={<FaReact size={40} color="#61DBFB" />} name="React" link="https://react.dev" />
            <Skill icon={<FaPaintBrush size={40} />} name="Tailwind CSS" link="https://tailwindcss.com" />
            <Skill icon={<FaGithub size={40} />} name="Git / GitHub" link="https://github.com" />
            <Skill icon={<FaChartBar size={40} />} name="Matomo" link="https://matomo.org" />
            <Skill icon={<FaJava size={40} color="#f89820" />} name="Java" link="https://dev.java" />
            <Skill icon={<FaPython size={40} color="#3776AB" />} name="Python" link="https://www.python.org" />
            <Skill icon={
              <div className="flex gap-2">
                <FaHtml5 size={40} color="#E34F26" />
                <FaCss3 size={40} color="#1572B6" />
              </div>
            } name="HTML / CSS" link="https://developer.mozilla.org/fr/docs/Web/HTML" />
            <Skill icon={<DiPostgresql size={40} color="#336791" />} name="PostgreSQL" link="https://www.postgresql.org" />
            <Skill icon={<SiKotlin size={40} color="#7F52FF" />} name="Kotlin" link="https://kotlinlang.org" />
            <Skill icon={<SiMongodb size={40} color="#47A248" />} name="MongoDB" link="https://www.mongodb.com" />
            <Skill icon={<SiSpring size={40} color="#6DB33F" />} name="Spring" link="https://spring.io" />
            <Skill icon={<SiAngular size={40} color="#DD0031" />} name="Angular" link="https://angular.io" />
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
function Skill({ icon, name, link }) {
  const content = (
    <motion.div
      className={`flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow transition ${link ? "hover:shadow-purple-500/50 cursor-pointer" : ""}`}
      whileHover={{ scale: 1.1 }}
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" title={`Documentation ${name}`}>
      {content}
    </a>
  ) : content;
}
