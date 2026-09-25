import { useLanguage } from '../hooks/useLanguage';

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: 'fa-html5', name: 'HTML5', desc: 'Semantic & Accessible' },
    { icon: 'fa-css3-alt', name: 'CSS3', desc: 'Responsive & Modern UI' },
    { icon: 'fa-js', name: 'JavaScript', desc: 'Interactive Web' },
    { icon: 'fa-react', name: 'React', desc: 'Modern Interfaces' },
    { icon: 'fa-node-js', name: 'Node.js', desc: 'Backend & APIs' },
    { icon: 'fa-git-alt', name: 'Git', desc: 'Version Control' },
    { icon: 'fa-database', name: 'Database', desc: 'SQL & NoSQL' },
    { icon: 'fa-mobile-screen', name: 'Mobile', desc: 'Cross-platform' },
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">02</span>
          <div>
            <span className="section-label">{t('skills_label')}</span>
            <h2>{t('skills_title')}</h2>
          </div>
        </div>
        <div className="skills-grid reveal">
          {skills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="skill-card">
              <i className={`fa-brands ${skill.icon}`}></i>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
