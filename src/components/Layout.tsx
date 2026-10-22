
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site-layout">
      <header>
        <h2>Little Notes</h2>

        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          {" | "}
          <NavLink to="/posts">Posts</NavLink>
          {" | "}
          <NavLink to="/contact">Contact</NavLink>
          {" | "}
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Little Notes © 2026</p>
      </footer>
    </div>
  );
}
