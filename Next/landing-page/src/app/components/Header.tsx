import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Cory Hisey
        </Link>
        <nav className="flex space-x-6">
          <Link href="#about" className="text-gray-400 hover:text-white">
            About
          </Link>
          <Link href="#projects" className="text-gray-400 hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}