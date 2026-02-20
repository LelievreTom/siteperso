import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SeriesPage() {
  const { serie } = useParams();
  const [scps, setScps] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/scp/series/${serie}`)
      .then((res) => res.json())
      .then((data) => setScps(data))
      .catch((err) => console.error(err));
  }, [serie]);

  return (
    <div>
      <h1>Série {serie}</h1>
      {scps.length === 0 ? (
        <p>Aucun SCP dans cette série pour le moment.</p>
      ) : (
        <div className="grid gap-3 max-w-2xl">
          {scps.map((scp) => (
            <Link
              key={scp._id}
              to={`/scp/${scp.numero}`}
              className="border border-red-800 bg-white hover:bg-red-50 transition px-4 py-3 rounded shadow-sm"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold">
                  SCP-{scp.numero} : {scp.titre}
                </span>

                <span className="text-sm text-red-800 font-semibold">
                  Classe : {scp.classe}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
