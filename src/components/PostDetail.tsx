import type { Post } from "../types.ts";
import { useComments } from "../hooks/useComments.ts";

interface PostDetailProps {
    post: Post;
    onClose: () => void;
}

export function PostDetail({post, onClose}: PostDetailProps) {
    const {comments, loading, error} = useComments(post.id);

    return (
        <article>
            <button onClick={onClose}>Close</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <section>
                <h2>Comments</h2>
                {loading && <p>Loading</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && comments.length === 0 && (
                    <p>No comments yet.</p>
                )}
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}