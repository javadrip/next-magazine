import { createClient, groq } from "next-sanity";

// Functions that are used to grab data lives here
export async function getProjects() {
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
