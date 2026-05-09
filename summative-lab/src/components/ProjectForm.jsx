import { useState } from "react";

const emptyProject = {
  title: "",
  category: "",
  description: "",
  link: "",
};

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState(emptyProject);

  function updateField(event) {
    const { name, value } = event.target;
    // All fields use the same handler; input names match keys in formData.
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddProject({
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      link: formData.link,
    });

    setFormData(emptyProject);
  }

  return (
    <aside className="project-form-panel">
      <div className="section-heading">
        <p className="eyebrow">Add Work</p>
        <h2>New project</h2>
      </div>

      <form className="project-form" onSubmit={handleSubmit}>
        <label htmlFor="projectTitle">Project title</label>
        <input
          id="projectTitle"
          name="title"
          type="text"
          placeholder="e.g. Study Planner"
          value={formData.title}
          onChange={updateField}
          required
        />

        <label htmlFor="projectCategory">Category</label>
        <input
          id="projectCategory"
          name="category"
          type="text"
          placeholder="Web App, UI Design, API..."
          value={formData.category}
          onChange={updateField}
          required
        />

        <label htmlFor="projectDescription">Description</label>
        <textarea
          id="projectDescription"
          name="description"
          rows="4"
          placeholder="Briefly describe what the project does."
          value={formData.description}
          onChange={updateField}
          required
        />

        <label htmlFor="projectLink">Project link</label>
        <input
          id="projectLink"
          name="link"
          type="url"
          placeholder="https://example.com"
          value={formData.link}
          onChange={updateField}
        />

        <button type="submit">Add project</button>
      </form>
    </aside>
  );
}

export default ProjectForm;