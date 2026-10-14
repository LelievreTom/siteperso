import { useState } from "react";
import { useParams } from "react-router-dom";
import ScpLayout, { ClassBadge, Redacted, Status } from "./ScpLayout";
import { useApi } from "./api";

export default function ScpPage() {
  const { numero } = useParams();
  const state = useApi(`/scp/${encodeURIComponent(numero)}`);
  const scp = state.data;
  const niveau = Math.min(5, Math.max(0, Number(scp?.niveau) || 0));

  return (
    <ScpLayout>
      <Status state={state} empty={`Aucun dossier ne correspond à SCP-${numero}.`} />

      {state.status === "ok" && (
        <article className="relative bg-white/70 border border-dossier-ink/20 shadow-md p-6 md:p-10">
          {/* Tampon */}
          <div
            aria-hidden="true"
            className="absolute top-6 right-6 rotate-12 border-4 border-dossier-red text-dossier-red font-typewriter text-lg md:text-2xl px-3 py-1 opacity-70 select-none"
          >
            CLASSIFIÉ
          </div>

          <p className="font-typewriter text-xs uppercase tracking-widest text-dossier-ink/60 mb-4">
            Dossier de la Fondation · Accréditation niveau {niveau}/5
          </p>
          <h1 className="font-typewriter text-4xl md:text-5xl">SCP-{scp.numero}</h1>
          <p className="text-xl italic mt-1 mb-6 pr-28">« {scp.titre} »</p>

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-8 border-y border-dossier-ink/20 py-4">
            <dt className="font-bold">Objet n° :</dt>
            <dd>SCP-{scp.numero}</dd>
            <dt className="font-bold">Classe :</dt>
            <dd><ClassBadge classe={scp.classe} /></dd>
            <dt className="font-bold">Niveau :</dt>
            <dd aria-label={`${niveau} sur 5`} className="text-dossier-red tracking-widest">
              {"■".repeat(niveau)}{"□".repeat(5 - niveau)}
            </dd>
          </dl>

          {scp.images?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-8 items-start">
              {scp.images.map((image) => (
                <Figure key={image.src} {...image} />
              ))}
            </div>
          )}

          <Section title="Procédures de confinement spéciales" text={scp.procedures} />
          <Section title="Description" text={scp.description} />

          {scp.annexes?.map((annexe, i) => (
            <section key={i} className="mb-6 border-l-4 border-dossier-red/60 pl-4">
              <h2 className="font-typewriter text-dossier-red text-lg mb-2">
                Annexe {scp.numero}-{String.fromCharCode(65 + i)} : <Redacted text={annexe.titre} />
              </h2>
              <div className="leading-relaxed space-y-1">
                {annexe.contenu.split("\n").map((ligne, j) => (
                  <Ligne key={j} text={ligne} />
                ))}
              </div>
            </section>
          ))}

          <p className="text-xs text-dossier-ink/50 mt-8 font-typewriter">
            Dossier ouvert le {new Date(scp.dateCreation).toLocaleDateString("fr-FR")}
          </p>
        </article>
      )}
    </ScpLayout>
  );
}

function Section({ title, text }) {
  return (
    <section className="mb-6">
      <h2 className="font-typewriter text-dossier-red text-xl mb-2">{title}</h2>
      <p className="leading-relaxed whitespace-pre-line">
        <Redacted text={text} />
      </p>
    </section>
  );
}

// « Dr Vasseur : question » → nom en gras, comme une retranscription d'entretien
function Ligne({ text }) {
  const dialogue = text.match(/^([^:]{1,30}) : (.*)$/);
  if (!dialogue) return <p><Redacted text={text} /></p>;
  return (
    <p>
      <strong className="font-typewriter">{dialogue[1]} :</strong> <Redacted text={dialogue[2]} />
    </p>
  );
}

function Figure({ src, legende, type }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null; // image pas encore ajoutée dans public/

  return type === "photo" ? (
    <figure className="relative bg-white p-3 pb-2 shadow-md -rotate-1">
      <span aria-hidden="true" className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/80 rotate-2 shadow-sm" />
      <img src={src} alt={legende} onError={() => setVisible(false)} className="w-full aspect-[4/3] object-cover grayscale sepia-[.25] contrast-110" />
      <figcaption className="font-typewriter text-xs mt-2 text-dossier-ink/70">{legende}</figcaption>
    </figure>
  ) : (
    <figure className="border border-dossier-ink/30 bg-white/60 p-3">
      <img src={src} alt={legende} onError={() => setVisible(false)} className="w-full" />
      <figcaption className="font-typewriter text-xs mt-2 text-dossier-ink/70">{legende}</figcaption>
    </figure>
  );
}
