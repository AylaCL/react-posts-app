import { usePosts } from "./hooks/usePosts.ts";
import type { Post } from "./types.ts";
import { PostList } from "./components/PostList.tsx";

function App() {
    const {posts, loading, error} = usePosts();

    function handleViewPost(post: Post) {
        console.log("View clicked: ", post);
    }

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <h1>Posts List</h1>
            <PostList posts={posts} onView={handleViewPost}/>
        </>
    )
}

export default App
