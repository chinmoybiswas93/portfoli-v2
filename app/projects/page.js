import Post from "@/components/post";
import { getPosts } from "@/lib/api";

export default async function Project() {
  const posts = await getPosts();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Projects Page</h1>
      <div>
        {posts.length}
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
}
