import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: 'fa-code', title: 'Web', key: 'about_web' },
    { icon: 'fa-mobile-screen-button', title: 'Mobile', key: 'about_mobile' },
    { icon: 'fa-lightbulb', title: t('about_solution'), key: 'about_solutions' },
    { icon: 'fa-rocket', title: t('about_performance'), key: 'about_performance_text' },
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">01</span>
          <div>
            <span className="section-label">{t('about_label')}</span>
            <h2>{t('about_title')}</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-intro">{t('about_intro')}</p>
            <p>{t('about_text')}</p>
            <a href="#contact" className="text-link">
              <span>{t('about_contact')}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="about-cards reveal">
            {cards.map((card, index) => (
              <div key={index} className="info-card">
                <i className={`fa-solid ${card.icon}`}></i>
                <h3>{card.title}</h3>
                <p>{t(card.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
