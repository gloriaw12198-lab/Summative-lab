import EmptyState from "./EmptyState.jsx";
import ProjectGrid from "./ProjectGrid.jsx";
import SearchBar from "./SearchBar.jsx";

function ProjectBoard({ projects, searchQuery, onSearchChange }) {
  return (
    <section className="project-board">
      <div className="board-topbar">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects</h2>
        </div>

        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>

      {projects.length > 0 ? (
        <ProjectGrid projects={projects} />
      ) : (
        <EmptyState message="No projects match your search yet." />
      )}
    </section>
  );
}

export default ProjectBoard;