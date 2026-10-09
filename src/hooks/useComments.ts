import { useEffect, useState } from "react";
import type { Comment } from "../types.ts";

export function useComments(postId: number) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchComments() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
                    {signal: controller.signal},
                )
                if (!response.ok) throw new Error("Failed to fetch comments");
                const data: Comment[] = await response.json();
                setComments(data);
            } catch (e) {
                if (e instanceof Error && e.name !== "AbortError") {
                    setError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchComments();
        return () => controller.abort();
    }, [postId]);
    return {comments, loading, error};
}