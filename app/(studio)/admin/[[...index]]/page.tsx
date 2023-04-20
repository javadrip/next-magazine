// Sanity Studio is going to be rendered on the client side, hence the line below is required
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function AdminPage() {
  // NextStudio is a component that comes from the next-sanity package
  return <NextStudio config={config} />;
}
