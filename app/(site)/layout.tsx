import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Next Magazine Starter",
  description:
    "A starter template for building a website using Next.js with Sanity.io",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get all of our pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <Navbar />
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
