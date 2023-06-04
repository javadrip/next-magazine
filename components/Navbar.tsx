import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full backdrop-blur shadow p-1 z-10">
      <header className="font-livvic h-10 flex items-center justify-between max-w-3xl mx-auto p-2">
        <Link
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r gradient-colour bg-clip-text text-transparent"
        >
          Vinleon
        </Link>
        <div className="flex items-center gap-2 text-lg text-gray-600">
          <Link href="/" className="navbar-link navbar-button-colour">
            Skills
          </Link>
          <Link href="/" className="navbar-link navbar-button-colour">
            Projects
          </Link>
          <Link href="/" className="navbar-link navbar-button-colour">
            About
          </Link>
          <Link href="/" className="navbar-link navbar-button-colour">
            Contact
          </Link>
        </div>
      </header>
    </div>
  );
}
