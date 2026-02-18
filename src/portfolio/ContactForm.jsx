import { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);

  const SITE_KEY = "6LdWa80rAAAAAIA0f-QsNFJpRWbKhkfGuuQwV665";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captchaValue = recaptchaRef.current.getValue();

    if (!captchaValue) {
      setStatus({ type: "error", message: "Veuillez valider le captcha !" });
      return;
    }

    try {
      const res = await fetch("/sendMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: captchaValue }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: "Message envoyé avec succès !" });
        setFormData({ name: "", email: "", message: "" });
        recaptchaRef.current.reset();
      } else {
        setStatus({ type: "error", message: data.message || "Erreur lors de l'envoi." });
        recaptchaRef.current.reset();
      }
    } catch (error) {
      setStatus({ type: "error", message: "Erreur réseau. Veuillez réessayer." });
      recaptchaRef.current.reset();
    }
  };

  return (
    <section
      id="contact"
      className="relative p-12 text-center bg-white/5 backdrop-blur-md rounded-2xl mx-6 md:mx-20 my-8 shadow-lg"
    >
      <h3 className="text-3xl font-bold mb-8">Contactez-moi</h3>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-gray-400/30 bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:border-purple-400 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-gray-400/30 bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:border-purple-400 transition"
        />
        <textarea
          name="message"
          placeholder="Votre message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="p-4 rounded-xl border border-gray-400/30 bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:border-purple-400 transition resize-none"
        ></textarea>

        <div className="flex justify-center">
          <ReCAPTCHA sitekey={SITE_KEY} ref={recaptchaRef} />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:scale-105 transition text-white font-semibold"
        >
          <FaEnvelope /> Envoyer
        </button>

        {status && (
          <p
            className={`mt-2 font-semibold ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
