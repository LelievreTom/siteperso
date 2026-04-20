import { FaFolderOpen, FaTools, FaCog, FaHardHat, FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";

const projets = [
  { nom: "Portfolio", url: "/portfolio", icon: <FaFolderOpen size={40} /> },
  { nom: "Jeu Pokémon", url: "/pokemon", icon: <FaGamepad size={40} /> },
  { nom: "En construction", url: "/scp", icon: <FaCog size={40} className="slow-spin" /> },
  { nom: "En construction", url: "#", icon: <FaHardHat size={40} className="animate-pulse" /> },
];


export default function App() {
  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      
      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Nom central avec effet pulse lumineux */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
          Tom Lelievre
        </h1>
      </div>

      {/* Carrés des projets */}
      {projets.map((projet, index) => {
        const positions = [
          "top-1/6 left-1/6",
          "top-1/6 right-1/6",
          "bottom-1/6 left-1/6",
          "bottom-1/6 right-1/6",
        ];
        return (
          <Link
            key={index}
            to={projet.url}
            className={`absolute w-36 h-36 md:w-44 md:h-44 flex flex-col gap-2 items-center justify-center 
            rounded-3xl bg-white/10 backdrop-blur-lg border border-white/30 text-white font-bold 
            shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-500 z-20 ${positions[index]}`}
          >
            {projet.icon}
            <span>{projet.nom}</span>
          </Link>
        );
      })}

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-white/70 text-sm">
        &copy; {new Date().getFullYear()} Tom Lelievre. Tous droits réservés.
      </div>
    </div>
  );
}
