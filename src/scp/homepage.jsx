import { useState } from "react";
import { motion } from "framer-motion";
import scpLogo from "../assets/scp-logo.png";
import ScpLayout, { ScpList, Status } from "./ScpLayout";
import { useApi } from "./api";

export default function Foundation() {
  const [hovered, setHovered] = useState(false);
  const state = useApi("/scp");
  const latest =
    state.status === "ok"
      ? [...state.data].sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation)).slice(0, 5)
      : [];

  return (
    <ScpLayout>
      {/* Avertissement */}
      <section
        className="relative flex items-center justify-center text-center mb-12"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src={scpLogo}
          alt=""
          className="absolute w-56 h-56 opacity-10 pointer-events-none"
          animate={{ x: hovered ? 20 : 0, y: hovered ? -20 : 0, rotate: hovered ? 10 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
        <p className="relative font-typewriter text-base md:text-lg leading-relaxed max-w-3xl px-6 py-8 border-x-4 border-dossier-red">
          ATTENTION : LA BASE DE DONNÉES DE LA FONDATION EST CLASSIFIÉE.
          <br />
          L’ACCÈS AU PERSONNEL NON AUTORISÉ EST STRICTEMENT INTERDIT.
          <br />
          LES CONTREVENANTS SERONT TRAQUÉS, ARRÊTÉS ET EMPRISONNÉS.
        </p>
      </section>

      {/* Derniers dossiers */}
      <section className="mb-12">
        <h2 className="font-typewriter text-2xl text-dossier-red mb-4">Derniers dossiers ouverts</h2>
        <Status state={state} empty="Aucun dossier pour le moment." />
        {latest.length > 0 && <ScpList scps={latest} />}
      </section>

      {/* Présentation de la Fondation */}
      <article className="bg-white/70 border border-dossier-ink/20 shadow-md p-6 md:p-10 leading-relaxed space-y-4">
        <p>
          Bienvenue, membres du personnel. Cette plateforme est strictement confidentielle et réservée
          uniquement aux agents, chercheurs et membres autorisés du personnel de soutien. Votre rôle au sein
          de la Fondation dépendra de votre affectation, mais vous êtes désormais lié par le secret absolu et
          par l’obligation de respecter les protocoles de sécurité.
        </p>

        <h2 className="font-typewriter text-2xl text-dossier-red pt-4">Énoncé de la mission</h2>
        <p>
          La Fondation agit à l’échelle mondiale, hors des juridictions nationales, et reçoit un mandat des
          gouvernements pour identifier, contenir et sécuriser les objets, entités et phénomènes anormaux.
          Ces anomalies représentent une menace majeure pour la stabilité de notre monde, qu’il s’agisse de
          dangers physiques, psychologiques ou cognitifs.
        </p>
        <p>
          Votre rôle, en tant que membre du personnel, est de participer au maintien de la normalité afin que
          l’humanité continue de vivre sans peur, sans doute ni méfiance. La Fondation œuvre à préserver
          l’indépendance de l’espèce humaine contre toute influence d’origine extraterrestre,
          extradimensionnelle ou extranormale. Notre mission est triple :
        </p>

        <h3 className="font-typewriter text-xl pt-2">Sécuriser</h3>
        <p>
          La Fondation a pour priorité de localiser et sécuriser toute anomalie détectée. Son rôle est
          d’empêcher que ces phénomènes tombent entre les mains d’organisations hostiles ou civiles, grâce à
          une observation rigoureuse, une surveillance constante et une intervention rapide dès que la
          situation l’exige.
        </p>
        <h3 className="font-typewriter text-xl pt-2">Contenir</h3>
        <p>
          Une fois capturées, les anomalies sont confinées afin de neutraliser leur influence et d’empêcher
          toute propagation de leurs effets. Cela inclut leur relocalisation vers des sites sécurisés, leur
          dissimulation, leur démantèlement ainsi que la mise en œuvre de protocoles pour éviter toute
          exposition du public à leur existence.
        </p>
        <h3 className="font-typewriter text-xl pt-2">Protéger</h3>
        <p>
          La mission ultime de la Fondation est de protéger l’humanité, non seulement des effets des
          anomalies, mais également des anomalies elles-mêmes. Cette protection demeure active jusqu’à ce que
          ces phénomènes soient pleinement compris, ou que la science puisse en expliquer les propriétés et
          comportements. Dans les cas extrêmes, lorsque le confinement est jugé impossible, la neutralisation
          (voire la destruction) peut être autorisée en dernier recours.
        </p>

        <h2 className="font-typewriter text-2xl text-dossier-red pt-4">Les opérations de la Fondation</h2>
        <p>
          Les opérations de la Fondation sont menées de façon secrète et clandestine à travers le globe pour
          réaliser nos missions primaires.
        </p>
        <h3 className="font-typewriter text-xl pt-2">Les Procédures de Confinement Spéciales</h3>
        <p>
          Au cœur de nos activités se trouve une vaste base de données regroupant toutes les anomalies
          nécessitant des Procédures de Confinement Spéciales, communément abrégées « PCS ». Cette base
          répertorie leurs descriptions ainsi que les protocoles d’urgence à appliquer en cas de brèche ou
          d’incident majeur.
        </p>
        <p>
          Les anomalies peuvent se présenter sous de nombreuses formes : objets, entités, lieux ou phénomènes
          autonomes. Chacune est classée selon son niveau de dangerosité et confinée dans des sites sécurisés
          de la Fondation, ou maintenue sur place lorsqu’un transfert est impossible.
        </p>
        <h3 className="font-typewriter text-xl pt-2">Sécurité interne</h3>
        <p>
          Le secret est absolu. Chaque membre du personnel est soumis à un strict niveau de sécurité et au
          compartimentage de l’information. Toute violation des protocoles entraîne une identification
          immédiate, une mise en détention et des sanctions disciplinaires.
        </p>
        <h3 className="font-typewriter text-xl pt-2">Organisations rivales et Groupes d’Intérêt</h3>
        <p>
          La Fondation n’est pas la seule à connaître l’existence de l’anormal. D’autres Groupes d’Intérêt
          poursuivent leurs propres objectifs. Certains peuvent occasionnellement coopérer pour préserver la
          sécurité mondiale, mais la plupart cherchent uniquement à servir leurs intérêts.
        </p>
        <p>
          Tout contact avec ces organisations est considéré comme suspect. La collaboration non autorisée avec
          leurs membres constitue une faute grave pouvant mener à la neutralisation, ou à d’autres sanctions
          sévères.
        </p>

        <p className="font-typewriter text-xl text-dossier-red text-center pt-6">
          Rappelez-vous : Sécuriser. Contenir. Protéger.
          <br />
          <span className="text-base">
            Le moindre manquement aux protocoles met en danger la Fondation, l’humanité, et vous-même.
          </span>
        </p>
      </article>
    </ScpLayout>
  );
}
