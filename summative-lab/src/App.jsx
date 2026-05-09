import { NavLink, Route, Routes } from "react-router-dom";
import { useProjects } from "./hooks/useProjects.js";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  // Keep shared project/search state here so the hero count, form, and board
  // all stay in sync while page routes remain presentational.
  const {
    projects,
    filteredProjects,
    searchQuery,
    addProject,
    setSearchQuery,
  } = useProjects();

  return (
    <main className="page-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink to="/">Showcase</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              projectCount={projects.length}
              filteredProjects={filteredProjects}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onAddProject={addProject}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  );
}

export default App;
