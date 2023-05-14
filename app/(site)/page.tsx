import { getProjects } from "@/sanity/sanity-utils";
import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export default async function Home() {
  const projects = await getProjects();
  const posts = await getPosts();

  return (
    <div>
      <Hero />

      {/* Posts */}
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Posts</h2>
      {/* posts and post are all typed correctly here */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link
            href={`/posts/${post.slug}`}
            key={post._id}
            className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition"
          >
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {post.featuredImage && (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={300}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              {post.title}
            </div>
            {post.title} ID: {post._id}
          </Link>
        ))}
      </div>

      {/*
      ================== Projects ==================
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Projects</h2>
      // projects and project are all typed correctly here
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition"
          >
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              {project.name}
            </div>
            {project.name} ID: {project._id}
          </Link>
        ))}
      </div>
      */}
    </div>
  );
}
