
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const [name, setName] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const destination =
    (location.state as { from?: string } | null)?.from ?? "/profile";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim()) {
      signIn(name.trim());
      navigate(destination, { replace: true });
    }
  }

  return (
    <section>
      <h1>Sign In</h1>
      <p>Enter your name to open your profile.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="reader-name">Your name:</label>

        <input
          id="reader-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
