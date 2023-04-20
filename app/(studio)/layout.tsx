import "../globals.css";

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
      <body>{children}</body>
    </html>
  );
}
