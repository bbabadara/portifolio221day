import { useLanguage } from '../hooks/useLanguage';

const Journey = () => {
  const { t } = useLanguage();

  const timeline = [
    {
      dateKey: 'timeline1_date',
      titleKey: 'timeline1_title',
      textKey: 'timeline1_text',
    },
    {
      dateKey: 'timeline2_date',
      titleKey: 'timeline2_title',
      textKey: 'timeline2_text',
    },
  ];

  return (
    <section className="section journey" id="journey">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">05</span>
          <div>
            <span className="section-label">{t('journey_label')}</span>
            <h2>{t('journey_title')}</h2>
          </div>
        </div>
        <div className="timeline reveal">
          {timeline.map((item, index) => (
            <div key={`timeline-${index}`} className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span>{t(item.dateKey)}</span>
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.textKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
