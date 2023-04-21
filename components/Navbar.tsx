"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="text-lg font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
      >
        Vinleon
      </Link>
      <div className="flex items-center gap-5 text-sm text-gray-600">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </header>
  );
}
