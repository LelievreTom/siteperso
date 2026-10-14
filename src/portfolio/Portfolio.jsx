import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaPaintBrush, FaChartBar, FaJava, FaPython, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiSpring, SiAngular } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import ProjectsSection from "./Projects";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";
import profilePicture from "../assets/profil.jpeg";

const hardSkills = [
  { icon: <FaReact color="#61DBFB" />, name: "React", link: "https://react.dev" },
  { icon: <FaPaintBrush />, name: "Tailwind CSS", link: "https://tailwindcss.com" },
  { icon: <FaGithub />, name: "Git / GitHub", link: "https://github.com" },
  { icon: <FaChartBar />, name: "Matomo", link: "https://matomo.org" },
  { icon: <FaJava color="#f89820" />, name: "Java", link: "https://dev.java" },
  { icon: <FaPython color="#3776AB" />, name: "Python", link: "https://www.python.org" },
  { icon: <><FaHtml5 color="#E34F26" /><FaCss3 color="#1572B6" /></>, name: "HTML / CSS", link: "https://developer.mozilla.org/fr/docs/Web/HTML" },
  { icon: <DiPostgresql color="#336791" />, name: "PostgreSQL", link: "https://www.postgresql.org" },
  { icon: <SiKotlin color="#7F52FF" />, name: "Kotlin", link: "https://kotlinlang.org" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB", link: "https://www.mongodb.com" },
  { icon: <SiSpring color="#6DB33F" />, name: "Spring", link: "https://spring.io" },
  { icon: <SiAngular color="#DD0031" />, name: "Angular", link: "https://angular.io" },
];

const softSkills = ["Communication", "Travail en équipe", "Résolution de problèmes", "Gestion du temps"];

const navLinks = [
  { id: "projects", label: "projets" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-20% 0px -70% 0px" }
    );
    ["home", "projects", "skills", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-term-bg text-term-text font-mono text-sm md:text-base">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-term-line bg-term-bg/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center">
          <a href="#home" className="font-semibold">
            <span className="text-term-green">tom@lelievre</span>
            <span className="text-term-dim">:</span>
            <span className="text-term-blue">~</span>
            <span className="text-term-dim">$</span>
          </a>
          <nav className="flex gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition hover:text-term-green ${activeSection === link.id ? "text-term-green" : "text-term-dim"}`}
              >
                ./{link.label}
              </a>
            ))}
            <a href="/cv.pdf" download className="text-term-yellow hover:underline">
              cv.pdf
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-16">
          <motion.div
            className="w-full rounded-lg border border-term-line bg-term-panel shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-term-line">
              <span className="w-3 h-3 rounded-full bg-term-red" />
              <span className="w-3 h-3 rounded-full bg-term-yellow" />
              <span className="w-3 h-3 rounded-full bg-term-green" />
              <span className="ml-3 text-xs text-term-dim">tom@lelievre: ~</span>
            </div>

            <div className="p-6 md:p-10 flex flex-col-reverse md:flex-row gap-8 md:items-center">
              <div className="flex-1 space-y-6">
                <div>
                  <Prompt cmd="whoami" />
                  <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">Tom Lelievre</h1>
                  <p className="text-term-green mt-1">Développeur · Alternant Infotel × Epitech</p>
                </div>

                <div>
                  <Prompt cmd="cat a_propos.txt" />
                  <p className="mt-2 leading-relaxed max-w-2xl">
                    21 ans. Après un <span className="text-term-blue">BUT Informatique</span> à Lille,
                    je suis actuellement en <span className="text-term-green">alternance chez Infotel</span> et
                    à <span className="text-term-green">Epitech</span>. Passionné par les nouvelles technologies et le développement.
                  </p>
                </div>

                <div>
                  <Prompt cmd="ls liens/" />
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                    <a href="/cv.pdf" download className="text-term-yellow hover:underline">cv.pdf</a>
                    <a href="https://github.com/lelievretom" target="_blank" rel="noopener noreferrer" className="text-term-blue hover:underline">github/</a>
                    <a href="#projects" className="text-term-blue hover:underline">projets/</a>
                    <a href="#contact" className="text-term-blue hover:underline">contact/</a>
                  </div>
                </div>

                <p className="text-term-dim cursor">
                  <span className="text-term-green">$</span>
                </p>
              </div>

              <img
                src={profilePicture}
                alt="Photo de Tom Lelievre"
                className="w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover border border-term-line grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </motion.div>
        </section>

        <ProjectsSection />

        {/* Skills */}
        <section id="skills" className="py-16 scroll-mt-16">
          <SectionTitle cmd="ls ~/competences" />

          <p className="text-term-dim mb-4"># hard skills</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {hardSkills.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Documentation ${s.name}`}
                className="flex items-center gap-3 px-4 py-3 rounded border border-term-line bg-term-panel hover:border-term-green transition"
              >
                <span className="flex gap-1 text-xl">{s.icon}</span>
                <span>{s.name}</span>
              </a>
            ))}
          </div>

          <p className="text-term-dim mb-4"># soft skills</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {softSkills.map((s) => (
              <li key={s}>
                <span className="text-term-green">✓</span> {s}
              </li>
            ))}
          </ul>
        </section>

        <ContactForm />
      </main>

      <footer className="border-t border-term-line py-6 text-center text-term-dim text-xs">
        © {new Date().getFullYear()} Tom Lelievre — <span className="text-term-green">exit 0</span>
      </footer>
    </div>
  );
}

function Prompt({ cmd }) {
  return (
    <p>
      <span className="text-term-green">$</span> <span className="text-white">{cmd}</span>
    </p>
  );
}
