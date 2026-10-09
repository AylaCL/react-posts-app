import { usePosts } from "./hooks/usePosts.ts";
import type { Post } from "./types.ts";
import { PostsBrowser } from "./components/PostsBrowser.tsx";
import { useState } from "react";
import { PostDetail } from "./components/PostDetail.tsx";

function App() {
    const {posts, loading, error} = usePosts();
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    if (selectedPost) {
        return (
            <PostDetail
                post={selectedPost}
                onClose={() => setSelectedPost(null)}
            />
        )
    }

    return (
        <>
            <PostsBrowser
                posts={posts}
                loading={loading}
                error={error}
                onView={setSelectedPost}
            />
        </>
    )
}

export default App
