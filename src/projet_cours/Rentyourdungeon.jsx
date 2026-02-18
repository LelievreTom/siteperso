import { motion } from "framer-motion";
import { Sword, Dice5, Beer, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RentYourDungeonSite() {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/rentyourdungeon/reservation"); // redirection vers la page réservation
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-100 to-orange-200 text-gray-900 p-6 font-serif">
      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-amber-800"
        >
          🎲 Rent Your Dungeon
        </motion.h1>
        <p className="text-xl text-amber-900 mb-10">
          Louez votre salle et vivez votre aventure sur-mesure.
        </p>
        <button
          onClick={handleReservation}
          className="bg-amber-700 text-yellow-50 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Réserver une session
        </button>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 py-16">
        <ServiceCard
          icon={<Dice5 className="text-orange-700" />}
          title="Salles thématiques"
          text="Fantasy, science-fiction, horreur ou personnalisable pour tous vos scénarios."
        />
        <ServiceCard
          icon={<Sword className="text-red-700" />}
          title="Immersion totale"
          text="Décors, accessoires, costumes et isolation sonore pour une vraie expérience JDR."
        />
        <ServiceCard
          icon={<Beer className="text-yellow-800" />}
          title="Bar & snacks"
          text="Boissons et encas disponibles pour vos parties."
        />
      </section>

      {/* TARIFS */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-3xl font-bold mb-8 text-amber-800">Tarifs</h2>
        <div className="bg-yellow-100 rounded-2xl p-10 shadow-lg border-2 border-amber-600">
          <p className="text-5xl font-bold mb-4 text-amber-900">25€</p>
          <p className="text-amber-800 mb-2">par personne / session</p>
          <p className="text-amber-700">Réservez selon vos besoins directement sur la page de réservation.</p>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="max-w-6xl mx-auto text-center py-16">
        <Users className="mx-auto mb-4 text-red-700" />
        <h2 className="text-3xl font-bold mb-4 text-amber-800">Pour qui ?</h2>
        <p className="text-amber-900">
          Étudiants, amis, clubs et passionnés de jeux de rôle souhaitant vivre une aventure immersive ensemble.
        </p>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto text-center py-20 border-t border-amber-700">
        <h2 className="text-3xl font-bold mb-6 text-amber-800">Contact</h2>
        <p className="text-amber-900">rentyourdungeon@gmail.com</p>
        <p className="text-amber-900">Instagram : @rentyourdungeon</p>
      </section>

      <footer className="text-center text-amber-700 py-6 text-sm">
        © 2026 Rent Your Dungeon — Tous droits réservés
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-yellow-50 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition border-2 border-amber-600">
      <div className="mx-auto mb-4 w-fit">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-amber-800">{title}</h3>
      <p className="text-amber-700">{text}</p>
    </div>
  );
}
