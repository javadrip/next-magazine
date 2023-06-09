import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

// Next automatically passes the route to params
export default async function Project({ params }: Props) {
  // params is an object with just one key of project
  // The key "project" comes from the dynamic route file name [project]
  const slug = params.project;
  // Type of getProject is defined in sanity-utils.ts
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-extrabold drop-shadow bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>

      {/* We can't just display content using {project.content} because it's an array of blocks */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
