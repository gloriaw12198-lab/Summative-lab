import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";

function renderApp(initialRoute = "/") {
  // MemoryRouter lets routing behavior be tested without depending on a real
  // browser history implementation.
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>,
  );
}

describe("Project showcase", () => {
  it("renders the initial projects", () => {
    renderApp();

    expect(screen.getByText("Campus Connect")).toBeInTheDocument();
    expect(screen.getByText("Budget Lens")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("filters projects by search query", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.type(screen.getByLabelText(/search/i), "data visualization");

    expect(screen.getByText("Budget Lens")).toBeInTheDocument();
    expect(screen.queryByText("Campus Connect")).not.toBeInTheDocument();
  });

  it("adds a project from the form", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.type(screen.getByLabelText(/project title/i), "Portfolio CMS");
    await user.type(screen.getByLabelText(/category/i), "Full Stack");
    await user.type(
      screen.getByLabelText(/description/i),
      "A content management tool for personal project case studies.",
    );

    await user.click(screen.getByRole("button", { name: /add project/i }));

    expect(screen.getByText("Portfolio CMS")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("navigates between the showcase and about routes", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole("link", { name: /about/i }));

    expect(
      screen.getByRole("heading", { name: /built to grow with your work/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Campus Connect")).not.toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: /showcase/i }));

    expect(screen.getByText("Campus Connect")).toBeInTheDocument();
  });
});