import ProjectBoard from "./ProjectBoard.jsx";
import ProjectForm from "./ProjectForm.jsx";

function ProjectWorkspace({
  filteredProjects,
  searchQuery,
  onSearchChange,
  onAddProject,
}) {
  return (
    <section className="workspace" aria-label="Project management area">
      <ProjectForm onAddProject={onAddProject} />
      <ProjectBoard
        projects={filteredProjects}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
    </section>
  );
}

export default ProjectWorkspace;