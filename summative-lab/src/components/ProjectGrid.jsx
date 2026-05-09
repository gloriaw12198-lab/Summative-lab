import ProjectCard from "./ProjectCard.jsx";

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid" aria-live="polite">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;