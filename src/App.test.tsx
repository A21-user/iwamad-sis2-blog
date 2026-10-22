
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("Little Notes blog", () => {
  it("shows the home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /welcome to little notes/i
      })
    ).toBeInTheDocument();
  });

  it("shows the blog posts page", () => {
    render(
      <MemoryRouter initialEntries={["/posts"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /blog posts/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Small Steps, Real Progress")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Collecting Little Moments")
    ).toBeInTheDocument();
  });

  it("shows the custom 404 page", () => {
    render(
      <MemoryRouter initialEntries={["/banana"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /oops! page not found/i
      })
    ).toBeInTheDocument();
  });
});
