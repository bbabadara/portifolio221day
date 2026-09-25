import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci ! Le formulaire est prêt à être connecté à votre service d\'envoi.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-box reveal">
          <div className="contact-info">
            <span className="section-label">{t('contact_label')}</span>
            <h2>{t('contact_title')}</h2>
            <p>{t('contact_text')}</p>
            <div className="contact-links">
              <a href="mailto:tonemail@example.com">
                <i className="fa-solid fa-envelope"></i>
                <span>tonemail@example.com</span>
              </a>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('form_name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('form_email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('form_message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Votre message..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <span>{t('form_send')}</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
