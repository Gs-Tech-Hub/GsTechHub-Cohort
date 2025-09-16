
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white font-poppins">
              Accelerator
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#programs" className="text-gray-300 hover:text-white transition-colors">
              Programs
            </Link>
            <Link href="#mentors" className="text-gray-300 hover:text-white transition-colors">
              Mentors
            </Link>
            <Link href="#apply" className="text-gray-300 hover:text-white transition-colors">
              Apply
            </Link>
          </nav>
          <div className="flex items-center">
            <button className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
