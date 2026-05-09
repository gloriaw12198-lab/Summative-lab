function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-meta">
        <span className="category">{project.category}</span>
        {project.link && (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;