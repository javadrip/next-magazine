import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {/* projects and project are all typed correctly here */}
      {projects.map(project => (
        <div key={project._id}>
          {project.name} ID: {project._id}
        </div>
      ))}
    </div>
  );
}
