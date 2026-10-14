import { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import redScpLogo from "../assets/scp-logo-red.PNG";
import { SERIES } from "./api";


const pad = (n) => String(n).padStart(3, "0");

export default function ScpLayout({ children }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/scp/recherche?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="min-h-screen bg-dossier-paper text-dossier-ink font-serif">
      <header className="bg-dossier-ink text-white border-b-4 border-dossier-red">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center gap-4">
          <Link to="/scp" className="flex items-center gap-3">
            <img src={redScpLogo} alt="" className="h-14 w-14" />
            <div className="flex flex-col">
              <span className="font-typewriter text-2xl tracking-wide">Fondation SCP</span>
              <span className="text-gray-400 text-sm italic">Sécuriser, Contenir, Protéger</span>
            </div>
          </Link>

          <form role="search" onSubmit={handleSearch} className="w-full sm:w-auto sm:ml-auto flex">
            <label htmlFor="scp-search" className="sr-only">Rechercher une anomalie</label>
            <input
              id="scp-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Numéro ou titre…"
              className="flex-1 sm:w-56 px-3 py-2 bg-white/10 border border-gray-500 border-r-0 placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button type="submit" className="px-4 py-2 bg-dossier-red font-typewriter hover:bg-red-700 transition">
              Rechercher
            </button>
          </form>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <nav aria-label="Séries SCP" className="lg:w-52 shrink-0 self-start border border-dossier-red bg-white/50 p-4">
          <h2 className="font-typewriter text-dossier-red text-lg border-b border-dossier-red pb-1 mb-3">
            Séries SCP
          </h2>
          <ul className="flex flex-wrap lg:flex-col gap-x-4 gap-y-1 text-sm">
            {SERIES.map((s) => (
              <li key={s.label}>
                <NavLink
                  to={`/scp/series/${s.start}-${s.end}`}
                  className={({ isActive }) =>
                    `hover:text-dossier-red transition ${isActive ? "text-dossier-red font-bold" : ""}`
                  }
                >
                  {s.label} ({pad(s.start)}–{pad(s.end)})
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 min-w-0">{children}</main>
      </div>

      <footer className="border-t border-dossier-ink/20 py-6 text-center text-xs text-dossier-ink/60">
        Fiction inspirée de l'univers SCP (CC BY-SA 3.0) ·{" "}
        <Link to="/" className="underline hover:text-dossier-red">retour au portfolio</Link>
      </footer>
    </div>
  );
}

const CLASSES = {
  "Sûr": "bg-green-800",
  Safe: "bg-green-800",
  Euclide: "bg-yellow-700",
  Keter: "bg-dossier-red",
  Thaumiel: "bg-purple-900",
  "Neutralisé": "bg-gray-600",
};

export function ClassBadge({ classe }) {
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-typewriter uppercase tracking-wider text-white ${CLASSES[classe] ?? "bg-gray-600"}`}>
      {classe === "Safe" ? "Sûr" : classe}
    </span>
  );
}

// [[texte]] → bande noire, révélée au survol
export function Redacted({ text = "" }) {
  return text.split(/\[\[(.+?)\]\]/).map((part, i) =>
    i % 2 ? (
      <span key={i} title="Information caviardée" className="bg-dossier-ink text-dossier-ink hover:text-white transition-colors px-0.5">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function ScpList({ scps }) {
  return (
    <ul className="divide-y divide-dossier-ink/15 border border-dossier-ink/20 bg-white/50">
      {scps.map((scp) => (
        <li key={scp._id}>
          <Link
            to={`/scp/${scp.numero}`}
            className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3 hover:bg-white transition"
          >
            <span className="font-typewriter text-dossier-red w-24 shrink-0">SCP-{scp.numero}</span>
            <span className="flex-1">{scp.titre}</span>
            <ClassBadge classe={scp.classe} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Status({ state, empty }) {
  if (state.status === "loading") return <p className="font-typewriter animate-pulse">Accès aux archives…</p>;
  if (state.status === "error")
    return <p className="font-typewriter text-dossier-red">Connexion aux archives impossible. Le serveur est-il lancé ?</p>;
  if (state.status === "notfound" || state.data?.length === 0) return <p className="italic">{empty}</p>;
  return null;
}
