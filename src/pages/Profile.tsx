
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { readerName, signOut } = useAuth();

  return (
    <section>
      <h1>Welcome, {readerName}!</h1>
      <p>This is your protected profile page.</p>

      <button onClick={signOut}>Sign Out</button>
    </section>
  );
}
