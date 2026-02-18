import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projet1 from "../assets/projet1.png";
import projet2 from "../assets/projet2.png";
import projet3 from "../assets/projet3.png";
import projet4 from "../assets/projet4.png";
import projet5 from "../assets/projet5.png";
import casadiusole from "../assets/projet6.png";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("universitaire");

  // Projets par catégorie
  const projects = {
    universitaire: [
      { 
        title: "Jeu ludo-pédagogique", 
        desc: "Escape game textuel en Java, réalisé en binôme. L’utilisateur explore un manoir abandonné et doit répondre à des questions pour progresser. Graphismes en ASCII directement dans le terminal.", 
        img: projet1
      },
      { 
        title: "Classification de données", 
        desc: "Application permettant de charger et visualiser des jeux de données (iris, Pokémon) sur un nuage de points. Objectif : manipuler et comparer des modèles de classification.", 
        img: projet2
      },
      { 
        title: "Réussite", 
        desc: "Jeu d’échecs jouable dans le terminal, développé en équipe de 6 en 3 jours avec une méthodologie agile.", 
        img: projet3
      },
      { 
        title: "Aggron.io", 
        desc: "Jeu multijoueur inspiré d’Agar.io, codé en JavaScript. Les joueurs grossissent en absorbant les plus petits tout en évitant les plus gros, face à des bots.", 
        img: projet4
      },
      { 
        title: "Chat App", 
        desc: "Application web temps réel où les utilisateurs peuvent créer des groupes privés, inviter des membres et échanger via un système de messagerie instantanée.", 
        img: projet5 
      },
    ],
    perso: [
      { 
        title: "Portfolio", 
        desc: "Mon site personnel en React & Tailwind. Celui que vous explorez actuellement 🚀.", 
        img: null 
      },
      { 
        title: "CasaDiUSole", 
        desc: "Site vitrine conçu pour mettre en avant des chambres d’hôtes. Objectif : design chaleureux et navigation claire afin de refléter l’identité du lieu.",
        link: "https://lelievretom.github.io/CasaDiUSole/accueil.html",
        img: casadiusole 
      },
      { 
        title: "Site SCP", 
        desc: "Un site web inspiré de l’univers de la Fondation SCP. Il reprend l’ambiance et la mise en page du site officiel, avec une expérience interactive autour des rapports d’anomalies.", 
        img: null, 
        status: "construction" 
      },
    ],

    stage: [
      { 
        title: "qalmo", 
        desc: "Refonte complète du site web de qalmo en utilisant React et Tailwind CSS, avec un design moderne et responsive.", 
        link: "https://www.qalmo.fr", 
        img: null 
      },
    ],
  };

  return (
      <section id="projects" className="relative z-10 p-12 text-center">
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
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    );
}

function ProjectCard({ title, desc, img, status, link }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-visible">
        {/* Banderole si en construction */}
        {status === "construction" && (
          <div className="absolute top-1 -right-4 rotate-12 z-20">
            <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xs px-4 py-1 shadow-lg rounded-md overflow-hidden">
              🚧 En construction
              {/* Effet ruban aux bords avec triangles */}
              <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-600 clip-triangle-left"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-600 clip-triangle-right"></div>
            </div>
          </div>
        )}

        <motion.div
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen(true)}
        >
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="mt-2 text-gray-300">{desc}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-2 inline-block"
              onClick={(e) => e.stopPropagation()} 
            >
              🔗 Accéder au site
            </a>
          )}
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
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✖
              </button>

              {img ? (
                <img
                  src={img}
                  alt={title}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
              ) : status === "construction" ? (
                <div className="w-full h-56 flex items-center justify-center rounded-xl mb-4 bg-yellow-500/20 border border-yellow-500/40">
                  <span className="text-yellow-400 font-bold">🚧 En construction</span>
                </div>
              ) : null}

              <h4 className="text-2xl font-bold mb-2">{title}</h4>
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
