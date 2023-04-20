// Functions that are used to grab data lives here
// Generally a good practice to keep all types in sanity-utils.ts

import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

// Typing getProjects here ensures that everywhere that uses getProjects will get typed appropriately
export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "p8qypvm2",
    dataset: "production",
    apiVersion: "2023-04-18",
  });

  return client.fetch(
    // * grabs everything in the dataset
    // [] filters down the data
    // {} specifies the projection aka the data we want to see
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "p8qypvm2",
    dataset: "production",
    apiVersion: "2023-04-18",
  });

  return client.fetch(
    // * grabs everything in the dataset
    // [] filters down the data
    // {} specifies the projection aka the data we want to see
    // The query still returns an array, so we need to grab the first element, hence the [0]
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    // Short hand for { slug: slug }
    { slug }
  );
}
