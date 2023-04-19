import { PortableTextBlock } from "sanity";

export type Project = {
  // All properties with an underscore are generated automatically by Sanity
  _id: string;
  _createdAt: Date;

  // The rest of the properties are defined in the schema by us
  name: string;
  slug: string;
  image: string;
  url: string;
  // PortableTextBlock[] is how Sanity stores rich content
  content: PortableTextBlock[];
};
