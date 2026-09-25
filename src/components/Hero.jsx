import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-content reveal">
          <span className="hero-small">{t('hero_greeting')}</span>
          <h1>Badara</h1>
          <h2>{t('hero_role')}</h2>
          <p className="hero-description">{t('hero_description')}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>{t('hero_projects')}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>{t('hero_contact')}</span>
            </a>
          </div>
          <div className="hero-socials">
            <a href="#" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="code-card">
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer =
              </p>
              <p className="code-indent">{'{'}</p>
              <p className="code-indent-2">
                name: <span className="code-green">"Badara"</span>,
              </p>
              <p className="code-indent-2">
                role: <span className="code-green">"Web & Mobile"</span>,
              </p>
              <p className="code-indent-2">
                passion: <span className="code-green">"Coding"</span>
              </p>
              <p className="code-indent">{'};'}</p>
              <p className="code-cursor">_</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down">
        <span>{t('scroll')}</span>
        <i className="fa-solid fa-arrow-down"></i>
      </a>
    </section>
  );
};

export default Hero;
