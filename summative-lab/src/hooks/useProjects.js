import { useMemo, useState } from "react";
import { initialProjects } from "../data/projects.js";

function normalize(value) {
  return value.trim().toLowerCase();
}

export function useProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize filtering so project cards are recalculated only when the list or
  // search text changes, which keeps render behavior predictable as the app grows.
  const filteredProjects = useMemo(() => {
    const query = normalize(searchQuery);

    if (!query) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableText = [
        project.title,
        project.category,
        project.description,
      ].join(" ");

      return normalize(searchableText).includes(query);
    });
  }, [projects, searchQuery]);

  function addProject(project) {
    // New projects are inserted first so the user's latest work appears at the
    // top of the showcase immediately after submission.
    const newProject = {
      ...project,
      id: crypto.randomUUID(),
      link: project.link.trim(),
    };

    setProjects((currentProjects) => [newProject, ...currentProjects]);
    setSearchQuery("");
  }

  return {
    projects,
    filteredProjects,
    searchQuery,
    addProject,
    setSearchQuery,
  };
}