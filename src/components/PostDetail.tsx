import type { Post } from "../types.ts";

interface PostDetailProps {
    post: Post;
    onClose: () => void;
}

export function PostDetail({post, onClose}: PostDetailProps) {
    return (
        <article>
            <button onClick={onClose}>Close</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    )
}