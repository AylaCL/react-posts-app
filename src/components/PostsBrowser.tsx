import type { Post } from "../types.ts";
import { useState } from "react";
import { SearchBar } from "./SearchBar.tsx";
import { PostList } from "./PostList.tsx";

interface PostsBrowserProps {
    posts: Post[];
    loading: boolean;
    error: string | null;
    onView: (post: Post) => void;
}

export function PostsBrowser({posts, loading, error, onView}: PostsBrowserProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <SearchBar searchTerm={searchTerm} onChange={setSearchTerm}/>
            <PostList posts={filteredPosts} onView={onView}/>
        </>
    )
}