import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "./SectionTitle";

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
    } catch {
      setStatus({ type: "error", message: "Erreur réseau. Veuillez réessayer." });
      recaptchaRef.current.reset();
    }
  };

  return (
    <section id="contact" className="py-16 scroll-mt-16">
      <SectionTitle cmd="./contact.sh" />

      <form onSubmit={handleSubmit} className="max-w-xl flex flex-col gap-5">
        <label className="flex flex-col gap-1">
          <span className="text-term-dim text-xs">--nom</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="name"
            className="w-full px-3 py-2 rounded border border-term-line bg-term-bg text-white placeholder-term-dim focus:outline-none focus:border-term-green transition" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-term-dim text-xs">--email</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email"
            className="w-full px-3 py-2 rounded border border-term-line bg-term-bg text-white placeholder-term-dim focus:outline-none focus:border-term-green transition" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-term-dim text-xs">--message</span>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows={6}
            className="w-full px-3 py-2 rounded border border-term-line bg-term-bg text-white placeholder-term-dim focus:outline-none focus:border-term-green transition resize-none" />
        </label>

        <ReCAPTCHA sitekey={SITE_KEY} ref={recaptchaRef} theme="dark" />

        <button
          type="submit"
          className="self-start px-5 py-2 rounded border border-term-green text-term-green hover:bg-term-green hover:text-term-bg transition font-semibold"
        >
          $ envoyer
        </button>

        {status && (
          <p role="status" className={status.type === "success" ? "text-term-green" : "text-term-red"}>
            {status.type === "success" ? "✓ " : "✗ "}{status.message}
          </p>
        )}
      </form>
    </section>
  );
}
