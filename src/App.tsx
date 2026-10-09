import { usePosts } from "./hooks/usePosts.ts";
import type { Post } from "./types.ts";
import { PostsBrowser } from "./components/PostsBrowser.tsx";

function App() {
    const {posts, loading, error} = usePosts();

    function handleViewPost(post: Post) {
        console.log("View clicked: ", post);
    }

    return (
        <>
            <PostsBrowser
                posts={posts}
                loading={loading}
                error={error}
                onView={handleViewPost}
            />
        </>
    )
}

export default App
