import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
  title: "Next Magazine Studio",
  // Unique project ID, found in the Sanity dashboard
  projectId: "p8qypvm2",
  dataset: "production",
  apiVersion: "2023-04-18",
  // The URL where we want to deploy our Sanity Studio. Need to correnspond to folder name in app folder.
  basePath: "/admin",
  // deskTool is needed to view Sanity Studio
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
