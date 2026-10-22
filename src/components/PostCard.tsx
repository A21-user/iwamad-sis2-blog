
import { Link } from "react-router-dom";
import type { BlogPost } from "../types";

type PostCardProps = {
  post: BlogPost;
};

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <Link to={`/posts/${post.id}`} className="post-image-link">
        <img
          className="post-image"
          src={post.image}
          alt={post.title}
        />
      </Link>

      <p className="post-category">{post.category}</p>
      <p className="post-date">{post.date}</p>

      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>

      <p>{post.excerpt}</p>

      <Link to={`/posts/${post.id}`} className="read-more">
        Read more →
      </Link>
    </article>
  );
}

export default PostCard;
