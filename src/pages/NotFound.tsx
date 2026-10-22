
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="error-code">404</p>

      <h1>Oops! Page not found.</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        Back to Home
      </Link>
    </section>
  );
}
