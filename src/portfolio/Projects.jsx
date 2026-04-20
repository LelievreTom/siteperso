import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTimes, FaExternalLinkAlt, FaImage, FaReact, FaJava, FaPython, 
  FaHtml5, FaCss3, FaJs, FaNodeJs, FaPaintBrush 
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiSpring, SiMongodb, SiCplusplus, SiAngular } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

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
        img: null, 
        status: "construction",
        tech: ["React", "Tailwind", "MongoDB"]
      },
      {
        title: "Jeu Pokémon",
        desc: "Un jeu pokémon inspiré d'un site existant, l'objectif est de choisir une ou plusieurs catégorie et d'entrer tous les pokémons existant de ces catégories.",
        link: "https://tomlelievre.fr/pokemon",
        img: pokemon,
        tech: ["React", "Tailwind"]
      }
    ],

    stage: [
      { 
        title: "Infotel", 
        desc: "Stage de fin d'études en cours. Développement et maintenance d'applications au sein des équipes d'Infotel.", 
        img: null,
        status: "encours",
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
      <section id="projects" className="relative z-50 p-12 text-center">
        <h3 className="text-3xl font-bold mb-8">Projets</h3>
  
        {/* Onglets */}
        <div className="flex justify-center gap-6 mb-8">
          {["universitaire", "perso", "stage"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
  
        {/* Liste des projets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {projects[activeTab].map((proj, idx) => (
              <ProjectCard
                key={idx}
                title={proj.title}
                desc={proj.desc}
                img={proj.img}
                status={proj.status}
                link={proj.link}
                tech={proj.tech}
                techIcons={techIcons}
                techLinks={techLinks}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    );
}

function ProjectCard({ title, desc, img, status, link, tech, techIcons, techLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-visible">
        {/* Banderole si en construction ou en cours */}
        {status && (
          <div className="absolute top-1 -right-4 rotate-12 z-20">
            <div className={`relative ${status === 'encours' ? 'bg-gradient-to-r from-green-400 to-emerald-600' : 'bg-gradient-to-r from-yellow-400 to-yellow-500'} text-black font-bold text-xs px-4 py-1 shadow-lg rounded-md overflow-hidden`}>
              {status === 'encours' ? '🚀 En cours' : '🚧 En construction'}
              {/* Effet ruban aux bords avec triangles */}
              <div className={`absolute top-0 left-0 w-3 h-3 ${status === 'encours' ? 'bg-green-700' : 'bg-yellow-600'} clip-triangle-left`}></div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 ${status === 'encours' ? 'bg-green-700' : 'bg-yellow-600'} clip-triangle-right`}></div>
            </div>
          </div>
        )}

        <motion.div
          className="rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition cursor-pointer overflow-hidden flex flex-col h-full"
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen(true)}
        >
          {/* Image de la carte */}
          <div className="h-44 w-full relative overflow-hidden bg-gray-800">
            {img ? (
              <img src={img} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/50 to-pink-900/50 text-white/50">
                <img 
                  src={`https://picsum.photos/seed/${title.replace(/\s+/g, '')}/600/400`} 
                  alt={title} 
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                  <FaImage size={30} className="mb-2 opacity-50" />
                  <span className="text-xs font-semibold uppercase tracking-widest opacity-50">Projet</span>
                </div>
              </div>
            )}
            
            {status === "construction" && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-yellow-400 font-bold flex items-center gap-2">
                  🚧 En construction
                </span>
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow">
            {/* Tech badges en haut de la description */}
            <div className="flex gap-2 mb-3">
              {tech?.map((t) => (
                <a 
                  key={t} 
                  href={techLinks[t]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={`Documentation ${t}`} 
                  className="text-xl hover:scale-120 transition-transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  {techIcons[t]}
                </a>
              ))}
            </div>
            
            <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
            <p className="text-gray-300 text-sm line-clamp-3 mb-4">{desc}</p>
            
            <div className="mt-auto flex justify-between items-center">
              <span className="text-purple-400 text-xs font-bold uppercase tracking-tighter cursor-pointer hover:underline">
                En savoir plus →
              </span>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]"
            style={{ position: "fixed" }} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <motion.div
                className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg w-full relative z-[10000]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
            >

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-[10001] bg-white text-black p-2 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center w-10 h-10 border-2 border-purple-500"
              >
                <FaTimes size={20} />
              </button>

              {img ? (
                <img
                  src={img}
                  alt={title}
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg border border-white/10"
                />
              ) : (
                <div className="w-full h-64 overflow-hidden rounded-xl mb-6 relative bg-gray-800 border border-white/10 shadow-lg">
                  <img 
                    src={`https://picsum.photos/seed/${title.replace(/\s+/g, '')}/800/600`} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-600 rounded-lg shadow-lg">
                        <FaImage className="text-white" size={24} />
                      </div>
                      <span className="text-sm font-medium text-white tracking-wide">Image de présentation</span>
                    </div>
                  </div>
                </div>
              )}

              <h4 className="text-2xl font-bold mb-2">{title}</h4>
              
              {/* Tech stack dans le modal */}
              <div className="flex flex-wrap gap-3 mb-4">
                {tech?.map((t) => (
                  <a 
                    key={t} 
                    href={techLinks[t]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all"
                  >
                    <span className="text-xl">{techIcons[t]}</span>
                    <span className="text-xs font-medium text-gray-300">{t}</span>
                  </a>
                ))}
              </div>

              <p className="text-gray-300">{desc}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline mt-3 inline-block"
                >
                  🔗 Accéder au site
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
