import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "John Londoño",
          form_email: form.email,
          to_email: "johnjulin2@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_SECRET_ID
      );
      setLoading(false);
      alert("Mensaje enviado!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("algo salio mal");
    }
  };
  return (
    <section id="contact" className="max-w-7xl mx-auto c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container">
          <h3 className="head-text">Hablemos</h3>
          <p className="text-lg text-white-600 mt-3">
            Si estas buscando construir tu sitio web, mejorar tu plataforma ya
            existente, o hacer crecer tu proyecto de vida, Estoy aqui para
            ayudarte.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nombre completo:</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email:</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@example.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Mensaje:</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hola, te quiero contatar para este trabajo..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensaje"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
