import { useLanguage } from '../hooks/useLanguage';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      number: '01',
      type: 'Web Application',
      titleKey: 'project1_title',
      descKey: 'project1_description',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradientClass: 'project-one',
    },
    {
      number: '02',
      type: 'Mobile App',
      titleKey: 'project2_title',
      descKey: 'project2_description',
      tech: ['Flutter', 'Dart', 'API'],
      gradientClass: 'project-two',
    },
    {
      number: '03',
      type: 'Website',
      titleKey: 'project3_title',
      descKey: 'project3_description',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradientClass: 'project-three',
    },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">03</span>
          <div>
            <span className="section-label">{t('projects_label')}</span>
            <h2>{t('projects_title')}</h2>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={`${project.number}-${index}`} className="project-card reveal">
              <div className={`project-image ${project.gradientClass}`}>
                <span>{project.number}</span>
              </div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{t(project.titleKey)}</h3>
                <p>{t(project.descKey)}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={`${tech}-${techIndex}`}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" aria-label="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" aria-label="Live Demo">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
