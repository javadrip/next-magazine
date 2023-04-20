import { getProject } from "@/sanity/sanity-utils";

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

  console.log(params);

  return (
    <div>
      {project.name} | {params.project}
    </div>
  );
}
