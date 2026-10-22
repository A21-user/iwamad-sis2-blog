
import { Link, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { posts } from "./data/posts";
import PostCard from "./components/PostCard";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">A LITTLE CORNER OF THE INTERNET</p>

        <h1>Welcome to Little Notes!</h1>

        <p className="hero-description">
          Thoughts on learning, slow living, and finding beauty
          in everyday moments.
        </p>

        <Link to="/posts" className="hero-button">
          Explore the blog →
        </Link>
      </div>

      <div className="hero-image-wrapper">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85"
          alt="A cozy desk with a notebook and a cup of coffee"
        />
        <p className="image-caption">
          Little moments, lovely memories.
        </p>
      </div>
    </section>
  );
}

function Posts() {
  return (
    <section>
      <h1>Blog Posts</h1>
      <p>Read my latest stories and ideas.</p>

      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>
      <p>Feel free to get in touch!</p>
      <a href="ar_bakyt@kbtu.kz">
        ar_bakyt@kbtu.kz
      </a>
    </section>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />

          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
