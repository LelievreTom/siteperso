import { useState } from "react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    players: 0,
    duration: 0,
  });

  const [message, setMessage] = useState(null); // Message succès/erreur
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/sendResa.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: "success", text: "✅ Réservation envoyée avec succès !" });
        setFormData({ name: '', email: '', date: '', time: '', players: 1, duration: 1 });
      } else {
        setMessage({ type: "error", text: data.message || "Erreur lors de l'envoi." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Erreur serveur, impossible d'envoyer la réservation." });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-100 to-orange-200 text-gray-900 p-6 font-serif">
      <h1 className="text-4xl font-bold text-amber-800 text-center mb-12">Réservation</h1>

      {message && (
        <div
          className={`max-w-lg mx-auto mb-6 p-4 rounded-2xl text-center ${
            message.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-yellow-50 p-8 rounded-2xl shadow-lg text-gray-900 border-2 border-amber-600">
        <label className="block mb-4">
          Nom:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full mt-1 p-2 rounded border border-amber-700" />
        </label>

        <label className="block mb-4">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full mt-1 p-2 rounded border border-amber-700" />
        </label>

        <label className="block mb-4">
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full mt-1 p-2 rounded border border-amber-700" />
        </label>

        <label className="block mb-4">
          Heure:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full mt-1 p-2 rounded border border-amber-700" />
        </label>

        <label className="block mb-4">
          Nombre de joueurs:
          <input type="number" name="players" value={formData.players} onChange={handleChange} min="1" max="10" className="w-full mt-1 p-2 rounded border border-amber-700" />
        </label>

        <label className="block mb-6">
          Durée de la session (heures):
          <input type="number" name="duration" value={formData.duration} onChange={handleChange} min="1" max="12" className="w-full mt-1 p-2 rounded border border-amber-700" />
        </label>

        <button type="submit" disabled={loading} className="bg-amber-700 text-yellow-50 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition w-full">
          {loading ? "Envoi..." : "Confirmer la réservation"}
        </button>
      </form>
    </div>
  );
}
