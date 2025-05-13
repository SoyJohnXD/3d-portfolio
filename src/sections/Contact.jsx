import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
      alert(t("contact.alerts.success"));
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(t("contact.alerts.error"));
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container">
          <h3 className="head-text">{t("contact.title")}</h3>
          <p className="text-lg text-white-600 mt-3">{t("contact.subtitle")}</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">
                {t("contact.form.name.label")}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t("contact.form.name.placeholder")}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">
                {t("contact.form.email.label")}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t("contact.form.email.placeholder")}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">
                {t("contact.form.message.label")}
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={t("contact.form.message.placeholder")}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? t("contact.button.sending") : t("contact.button.send")}
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
