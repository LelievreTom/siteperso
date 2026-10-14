import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaReact, FaJava, FaPython, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiSpring, SiMongodb, SiCplusplus, SiAngular } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import SectionTitle from "./SectionTitle";

import projet1 from "../assets/projet1.png";
import projet2 from "../assets/projet2.png";
import projet3 from "../assets/projet3.png";
import projet4 from "../assets/projet4.png";
import projet5 from "../assets/projet5.png";

import pokemon from "../assets/pokemon.png";
import casadiusole from "../assets/projet6.png";

const techLinks = {
  React: "https://react.dev",
  Java: "https://dev.java",
  Python: "https://www.python.org",
  JavaScript: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  HTML: "https://developer.mozilla.org/fr/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/fr/docs/Web/CSS",
  Tailwind: "https://tailwindcss.com",
  NodeJS: "https://nodejs.org",
  Spring: "https://spring.io",
  MongoDB: "https://www.mongodb.com",
  PostgreSQL: "https://www.postgresql.org",
  C: "https://en.cppreference.com/w/c",
  Angular: "https://angular.io",
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("universitaire");

  const techIcons = {
    React: <FaReact className="text-[#61DBFB]" />,
    Java: <FaJava className="text-[#f89820]" />,
    Python: <FaPython className="text-[#3776AB]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    HTML: <FaHtml5 className="text-[#E34F26]" />,
    CSS: <FaCss3 className="text-[#1572B6]" />,
    Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
    NodeJS: <FaNodeJs className="text-[#339933]" />,
    Spring: <SiSpring className="text-[#6DB33F]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    PostgreSQL: <DiPostgresql className="text-[#336791]" />,
    C: <SiCplusplus className="text-[#00599C]" />,
    Angular: <SiAngular className="text-[#DD0031]" />,
  };

  // Projets par catégorie
  const projects = {
    universitaire: [
      { 
        title: "Jeu ludo-pédagogique", 
        desc: "Escape game textuel en Java, réalisé en binôme. L’utilisateur explore un manoir abandonné et doit répondre à des questions pour progresser. Graphismes en ASCII directement dans le terminal.", 
        img: projet1,
        tech: ["Java"]
      },
      { 
        title: "Classification de données", 
        desc: "Application permettant de charger et visualiser des jeux de données (iris, Pokémon) sur un nuage de points. Objectif : manipuler et comparer des modèles de classification.", 
        img: projet2,
        tech: ["Java"]
      },
      { 
        title: "Réussite", 
        desc: "Jeu d’échecs jouable dans le terminal, développé en équipe de 6 en 3 jours avec une méthodologie agile.", 
        img: projet3,
        tech: ["Java"]
      },
      { 
        title: "Aggron.io", 
        desc: "Jeu multijoueur inspiré d’Agar.io, codé en JavaScript. Les joueurs grossissent en absorbant les plus petits tout en évitant les plus gros, face à des bots.", 
        img: projet4,
        tech: ["JavaScript"]
      },
      { 
        title: "Chat App", 
        desc: "Application web temps réel où les utilisateurs peuvent créer des groupes privés, inviter des membres et échanger via un système de messagerie instantanée.", 
        img: projet5,
        tech: ["React", "Spring", "NodeJS"]
      },
      { 
        title: "Émulateur de processeur RISC-V", 
        desc: "Développement d’un émulateur de processeur RISC-V en ligne de commande permettant l’exécution de programmes compilés. Gestion des registres, de la mémoire et des instructions de base.", 
        img: null,
        tech: ["C"]
      },
      { 
        title: "Application web de réservation", 
        desc: "Conception d’une plateforme de réservation en ligne inspirée de Doctolib. Gestion des rendez-vous, des profils utilisateurs et des disponibilités en temps réel.", 
        img: null,
        tech: ["React", "Spring", "PostgreSQL"]
      },
    ],
    perso: [
      { 
        title: "Portfolio", 
        desc: "Mon site personnel en React & Tailwind. Celui que vous explorez actuellement 🚀.", 
        img: null,
        tech: ["React", "Tailwind"]
      },
      { 
        title: "CasaDiUSole", 
        desc: "Site vitrine conçu pour mettre en avant des chambres d’hôtes. Objectif : design chaleureux et navigation claire afin de refléter l’identité du lieu.",
        link: "https://lelievretom.github.io/CasaDiUSole/accueil.html",
        img: casadiusole,
        tech: ["HTML", "CSS"]
      },
      { 
        title: "Site SCP", 
        desc: "Un site web inspiré de l’univers de la Fondation SCP. Il reprend l’ambiance et la mise en page du site officiel, avec une expérience interactive autour des rapports d’anomalies.", 
        link: "/scp",
        img: null,
        status: "construction",
        tech: ["React", "Tailwind", "MongoDB"]
      },
      {
        title: "Jeu Pokémon",
        desc: "Un jeu pokémon inspiré d'un site existant, l'objectif est de choisir une ou plusieurs catégorie et d'entrer tous les pokémons existant de ces catégories.",
        link: "/pokemon",
        img: pokemon,
        tech: ["React", "Tailwind"]
      }
    ],

    stage: [
      { 
        title: "Infotel", 
        desc: "Stage de fin d'études (BUT Informatique). Développement et maintenance d'applications au sein des équipes d'Infotel.", 
        img: null,
        tech: ["Spring", "Angular", "Python"]
      },
      { 
        title: "qalmo", 
        desc: "Refonte complète du site web de qalmo en utilisant React et Tailwind CSS, avec un design moderne et responsive.", 
        link: "https://www.qalmo.fr", 
        img: null,
        tech: ["React", "Tailwind"]
      },
    ],
  };

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <SectionTitle cmd={`ls ~/projets/${activeTab}`} />

      {/* Onglets */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist">
        {["universitaire", "perso", "stage"].map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded border transition ${
              activeTab === tab
                ? "border-term-green text-term-green bg-term-green/10"
                : "border-term-line text-term-dim hover:text-term-text"
            }`}
          >
            {tab}/
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {projects[activeTab].map((proj) => (
            <ProjectCard key={proj.title} {...proj} techIcons={techIcons} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

const statusLabels = {
  encours: <span className="text-term-green">[en cours]</span>,
  construction: <span className="text-term-yellow">[wip]</span>,
};

// Lien interne (même site) ou externe
const isExternal = (link) => link.startsWith("http");

function ProjectCard({ title, desc, img, status, link, tech, techIcons }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const techList = (
    <div className="flex flex-wrap gap-2">
      {tech?.map((t) => (
        <a
          key={t}
          href={techLinks[t]}
          target="_blank"
          rel="noopener noreferrer"
          title={`Documentation ${t}`}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-2 py-0.5 text-xs rounded border border-term-line hover:border-term-green transition"
        >
          {techIcons[t]} {t}
        </a>
      ))}
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group text-left rounded-lg border border-term-line bg-term-panel hover:border-term-green transition overflow-hidden flex flex-col"
      >
        <div className="h-36 w-full border-b border-term-line bg-term-bg overflow-hidden">
          {img ? (
            <img src={img} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-term-dim text-xs">
              {"// pas d'aperçu"}
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col gap-3 flex-grow">
          <div className="flex justify-between items-baseline gap-2">
            <h3 className="font-semibold text-white group-hover:text-term-green transition">{title}</h3>
            {status && <span className="text-xs shrink-0">{statusLabels[status]}</span>}
          </div>
          <p className="text-term-dim text-xs leading-relaxed line-clamp-3">{desc}</p>
          <div className="mt-auto">{techList}</div>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg border border-term-line bg-term-panel"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-term-line text-xs text-term-dim">
                <span>cat {title.toLowerCase().replace(/\s+/g, "_")}.md</span>
                <button onClick={() => setOpen(false)} aria-label="Fermer" className="p-1 hover:text-term-red transition">
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {img && <img src={img} alt={title} className="w-full h-56 object-cover rounded border border-term-line" />}
                <h3 className="text-xl font-bold text-white">
                  # {title} {status && <span className="text-sm font-normal">{statusLabels[status]}</span>}
                </h3>
                {techList}
                <p className="leading-relaxed">{desc}</p>
                {link && (
                  <a
                    href={link}
                    {...(isExternal(link) && { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex items-center gap-2 text-term-blue hover:underline"
                  >
                    → ouvrir le projet {isExternal(link) && <FaExternalLinkAlt size={12} />}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
