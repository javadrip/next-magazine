// Functions that are used to grab data lives here
// Generally a good practice to keep all types in sanity-utils.ts

import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Post } from "@/types/Post";

// ==================== POSTS ==================== //

// Typing getPosts here ensures that everywhere that uses getPosts will get typed appropriately
// Used to display a list of posts
export async function getPosts(): Promise<Post[]> {
  // clientConfig is imported from sanity/config/client-config.ts
  return createClient(clientConfig).fetch(
    // * grabs everything in the dataset
    // [] filters down the data
    // {} specifies the projection aka the data we want to see
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "author": author->username,
      "featuredImage": featuredImage.asset->url,
      "categories": categories[]->title,
      publishedAt,
      content
    }`
  );
}

// Used to display the content of a single post page
export async function getPost(slug: string): Promise<Post> {
  // clientConfig is imported from sanity/config/client-config.ts
  return createClient(clientConfig).fetch(
    // * grabs everything in the dataset
    // [] filters down the data
    // {} specifies the projection aka the data we want to see
    // The query still returns an array, so we need to grab the first element, hence the [0]
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "author": author->username,
      "featuredImage": featuredImage.asset->url,
      "categories": categories[]->title,
      publishedAt,
      content
    }`,
    // Short hand for { slug: slug }
    // slug value is taken from the getPost parameter slug
    { slug }
  );
}

// ==================== PROJECTS ==================== //

// Typing getProjects here ensures that everywhere that uses getProjects will get typed appropriately
// Used to display a list of projects
export async function getProjects(): Promise<Project[]> {
  // clientConfig is imported from sanity/config/client-config.ts
  return createClient(clientConfig).fetch(
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

// Used to display the content of a single project page
export async function getProject(slug: string): Promise<Project> {
  // clientConfig is imported from sanity/config/client-config.ts
  return createClient(clientConfig).fetch(
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
    // slug value is taken from the getProject parameter slug
    { slug }
  );
}

// Used to display a list of project pages
export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

// Used to display the content of a page
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
