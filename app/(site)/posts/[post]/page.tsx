import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { post: string };
};

// Next automatically passes the route to params
export default async function Post({ params }: Props) {
  // params is an object with just one key of project
  // The key "project" comes from the dynamic route file name [project]
  const slug = params.post;
  // Type of getProject is defineostanity-utils.ts
  const post = await getPost(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-extrabold drop-shadow bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {post.title}
        </h1>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        {/* We can't just display content using {post.content} because it's an array of blocks */}
        <PortableText value={post.content} />
      </div>

      <Image
        src={post.featuredImage}
        alt={post.alt}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
