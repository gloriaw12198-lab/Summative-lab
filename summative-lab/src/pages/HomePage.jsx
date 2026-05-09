import Hero from "../components/Hero.jsx";
import ProjectWorkspace from "../components/ProjectWorkspace.jsx";

function HomePage({
  projectCount,
  filteredProjects,
  searchQuery,
  onSearchChange,
  onAddProject,
}) {
  return (
    <>
      <Hero projectCount={projectCount} />
      <ProjectWorkspace
        filteredProjects={filteredProjects}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onAddProject={onAddProject}
      />
    </>
  );
}

export default HomePage;