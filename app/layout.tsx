import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next Magazine Starter",
  description:
    "A starter template for building a website using Next.js with Sanity.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            Vinleon
          </Link>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
