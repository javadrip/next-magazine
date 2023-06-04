import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";
import { livvic, assistant } from "../../public/fonts";
import Navbar from "@/components/Navbar";

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
    <html lang="en" className={`${livvic.variable} ${assistant.variable}`}>
      <body id="home">
        <Navbar />
        <main className="max-w-3xl mx-auto p-2 mt-10">{children}</main>
      </body>
    </html>
  );
}
