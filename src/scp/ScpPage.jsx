import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ScpPage() {
  const { numero } = useParams();
  const [scp, setScp] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/scp/${numero}`)
      .then((res) => res.json())
      .then((data) => setScp(data))
      .catch((err) => console.error(err));
  }, [numero]);

  if (!scp) return <p className="p-8">Chargement...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">
        SCP-{scp.numero} : {scp.titre}
      </h1>
      <p className="mb-2"><strong>Classe :</strong> {scp.classe}</p>
      <p className="mb-2"><strong>Niveau :</strong> {scp.niveau}</p>
      <p className="mb-2"><strong>Procédures :</strong> {scp.procedures}</p>
      <p className="mb-2"><strong>Description :</strong> {scp.description}</p>
      <p className="text-gray-500 mt-4">
        Créé le : {new Date(scp.dateCreation).toLocaleDateString()}
      </p>
    </div>
  );
}
