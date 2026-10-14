import { useParams, useSearchParams } from "react-router-dom";
import ScpLayout, { ScpList, Status } from "./ScpLayout";
import { SERIES, useApi } from "./api";

// Sert aussi de page de résultats : /scp/series/1-999 ou /scp/recherche?q=...
export default function SeriesPage() {
  const { serie } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const state = useApi(serie ? `/scp/series/${serie}` : `/scp?q=${encodeURIComponent(q)}`);
  const current = SERIES.find((s) => `${s.start}-${s.end}` === serie);
  const pad = (n) => String(n).padStart(3, "0");

  return (
    <ScpLayout>
      <h1 className="font-typewriter text-3xl mb-1">
        {serie ? `Série ${current?.label ?? serie}` : "Recherche"}
      </h1>
      <p className="text-dossier-ink/60 mb-6 italic">
        {current ? `Anomalies SCP-${pad(current.start)} à SCP-${pad(current.end)}` : serie ? "" : `Résultats pour « ${q} »`}
      </p>

      <Status state={state} empty={serie ? "Aucune anomalie répertoriée dans cette série pour le moment." : "Aucune anomalie ne correspond à cette recherche."} />
      {state.status === "ok" && state.data.length > 0 && <ScpList scps={state.data} />}
    </ScpLayout>
  );
}
