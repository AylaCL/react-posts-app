import type { Post } from "../types.ts";

interface PostListProps {
    posts: Post[];
    onView: (post: Post) => void;
}

export function PostList({posts, onView}: PostListProps) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <span>{post.title}</span>
                    <button onClick={() => onView(post)}>View</button>
                </li>
            ))}
        </ul>
    )
}