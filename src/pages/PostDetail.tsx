
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();

  const post = posts.find((item) => item.id === Number(id));

  const [liked, setLiked] = useState(false);

  const [showNote, setShowNote] = useState(false);

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <p>This blog post does not exist.</p>
        <Link to="/posts">Back to posts</Link>
      </section>
    );
  }

  return (
    <article className="post-detail">
      <Link to="/posts">← Back to posts</Link>

      <p className="post-category">{post.category}</p>
      <p className="post-date">{post.date}</p>

      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>

      <div className="article-actions">
        <button onClick={() => setLiked(!liked)}>
          {liked ? "♥ Liked" : "♡ Like"}
        </button>

        <button onClick={() => setShowNote(!showNote)}>
          {showNote ? "Hide note" : "Show note"}
        </button>
      </div>

      {showNote && (
        <p role="status">
          Thanks for reading this story!
        </p>
      )}
    </article>
  );
}
