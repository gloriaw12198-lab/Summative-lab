# Personal Project Showcase

A responsive React portfolio app for displaying, searching, and adding personal projects. The layout is inspired by a modern landing-page mock-up with a large hero section, project summary panel, add-project form, and searchable project card grid.

## Features

- Landing page with a project showcase grid.
- Dynamic add-project form powered by React `useState`.
- Live search across project title, category, and description.
- React Router navigation between the Showcase and About pages.
- Responsive layout for desktop, tablet, and mobile screens.
- Jest and React Testing Library tests for rendering, form submission, search, and routing.

## Tech Stack

- React
- Vite
- React Router
- CSS
- Jest
- React Testing Library

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```txt
http://localhost:5173/
```

If port `5173` is already in use, Vite will choose the next available port.

## Usage

1. View the project cards on the Showcase page.
2. Use the search field to filter projects by title, category, or description.
3. Fill in the New Project form and submit it to add a project to the top of the list.
4. Use the navigation links to switch between the Showcase and About pages.

## Available Scripts

Run the development server:

```bash
npm run dev
```

Run unit and interaction tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```txt
src/
├── components/
│   ├── EmptyState.jsx
│   ├── Hero.jsx
│   ├── ProjectBoard.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectForm.jsx
│   ├── ProjectGrid.jsx
│   ├── ProjectWorkspace.jsx
│   └── SearchBar.jsx
├── data/
│   └── projects.js
├── hooks/
│   └── useProjects.js
├── pages/
│   ├── AboutPage.jsx
│   └── HomePage.jsx
├── styles/
│   └── style..css
└── tests/
    ├── App.test.jsx
    ├── setupPolyfills.cjs
    ├── setupTests.cjs
    └── styleMock.cjs
```

## Known Limitations

- Added projects are stored only in local React state, so they reset after a page refresh.
- The project link field is optional and does not fetch metadata or validate that the destination exists.
- There is no backend, authentication, image upload, or persistent database.
- The mock-up was interpreted visually because no local design file was provided in the repository.

## Testing Notes

The tests cover the key user-facing behaviors:

- Initial project rendering.
- Search filtering.
- Adding a project through the form.
- Navigation between app routes.
