# Component Tree

This React application is structured as a component-based portfolio showcase. The layout follows the mock-up idea of a strong landing section followed by a project management area with a form and searchable project list.

## Visual Layout Flow

```txt
Page
├── Hero / Landing Section
│   ├── Portfolio label
│   ├── Main heading
│   ├── Introductory text
│   └── Project count summary panel
│
└── Workspace Section
    ├── Add Project Panel
    │   ├── Section heading
    │   └── Project form
    │       ├── Title input
    │       ├── Category input
    │       ├── Description textarea
    │       ├── Link input
    │       └── Submit button
    │
    └── Project Board
        ├── Board heading
        ├── Search field
        ├── Project grid
        │   └── Project card
        │       ├── Project title
        │       ├── Project description
        │       ├── Project category badge
        │       └── Project link
        └── Empty state message
```

## Component Hierarchy

The implemented React component tree is:

```txt
App
├── Navigation
├── Routes
│   ├── HomePage
│   │   ├── Hero
│   │   └── ProjectWorkspace
│   │       ├── ProjectForm
│   │       └── ProjectBoard
│   │           ├── SearchBar
│   │           ├── ProjectGrid
│   │           │   └── ProjectCard
│   │           └── EmptyState
│   └── AboutPage
```

## State Relationships

The shared project state lives in `useProjects`, which is called by `App`. This keeps state at the nearest parent level shared by the hero, form, and board.

```js
const [projects, setProjects] = useState(initialProjects);
const [searchQuery, setSearchQuery] = useState("");
```

The form owns its temporary input state locally because no other component needs field-level draft values.

```js
const [formData, setFormData] = useState({
  title: "",
  category: "",
  description: "",
  link: "",
});
```

Each project follows this data shape:

```js
{
  title: string,
  category: string,
  description: string,
  link: string
}
```

## Prop Relationships

```txt
App
├── Hero
│   Props:
│   └── projectCount = projects.length
│
├── ProjectForm
│   Props:
│   └── onAddProject(newProject)
│
└── ProjectBoard
    Props:
    ├── projects = filteredProjects
    ├── searchQuery
    └── onSearchChange(query)
```

More detailed prop flow:

```txt
Hero
└── projectCount

ProjectForm
└── onAddProject

ProjectBoard
├── SearchBar
│   ├── value = searchQuery
│   └── onChange = setSearchQuery
├── ProjectGrid
│   └── projects = filteredProjects
│       └── ProjectCard
│           └── project
└── EmptyState
    └── visible when filteredProjects.length === 0
```

## Interaction Flow

1. The app starts with an initial `projects` array.
2. `Hero` receives `projects.length` and displays the total number of projects.
3. `ProjectBoard` receives a filtered version of the project list.
4. `SearchBar` updates `searchQuery` whenever the user types.
5. The app filters projects by title, category, and description.
6. `ProjectForm` sends a new project object to `App` through `onAddProject`.
7. `App` adds the new project to the beginning of the `projects` array.
8. The project count and project grid update automatically.
9. The navigation uses React Router to switch between the showcase route and the about route without a full page refresh.

## Testing

Unit and interaction tests use Jest with React Testing Library.

The current tests cover:

- Rendering the initial project list and project count.
- Searching/filtering projects by category text.
- Adding a new project through the form.
- Navigating between the showcase route and the about route.

## Styling Direction

The visual structure is inspired by a modern portfolio mock-up:

- Large hero section at the top for immediate landing-page impact.
- A project count panel to make the page feel dashboard-like.
- A two-column desktop layout with the form beside the project gallery.
- Project cards arranged in a clean grid.
- Responsive stacking on smaller screens.
- Warm neutral background, bold accent colors, subtle borders, and compact rounded cards for a polished personal showcase feel.