import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

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
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            Vinleon
          </Link>

          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map(page => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
