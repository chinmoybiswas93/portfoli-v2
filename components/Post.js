import { getPostFeaturedImage } from "@/lib/api";
import Image from "next/image";
import he from "he";

const Post = async ({ post }) => {
  const { guid } = await getPostFeaturedImage(post.id);
  const { rendered: featured_image } = guid;
  return (
    <div key={post.id}>
      <h2 className="text-xl">{he.decode(post.title.rendered)}</h2>
      <div className="relative">
        <Image
          src={featured_image}
          alt="Featured Image"
          width={300}
          height={200}
          style={{ objectFit: "cover", height:"200px", objectPosition:"top center"}}
        />
      </div>
    </div>
  );
};

export default Post;
