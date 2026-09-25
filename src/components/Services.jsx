import { useLanguage } from '../hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      number: '01',
      icon: 'fa-laptop-code',
      titleKey: 'service_web',
      descKey: 'service_web_text',
    },
    {
      number: '02',
      icon: 'fa-mobile-screen-button',
      titleKey: 'service_mobile',
      descKey: 'service_mobile_text',
    },
    {
      number: '03',
      icon: 'fa-palette',
      titleKey: 'service_ui',
      descKey: 'service_ui_text',
    },
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">04</span>
          <div>
            <span className="section-label">{t('services_label')}</span>
            <h2>{t('services_title')}</h2>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={`service-${index}`} className="service-card reveal">
              <span className="service-number">{service.number}</span>
              <i className={`fa-solid ${service.icon}`}></i>
              <h3>{t(service.titleKey)}</h3>
              <p>{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
