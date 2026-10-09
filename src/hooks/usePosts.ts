import { useEffect, useState } from "react";
import type { Post } from "../types.ts";

export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) throw new Error("Failed to fetch posts.");
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (e) {
                setError(e instanceof Error ? e.message : "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return {posts, loading, error};
}