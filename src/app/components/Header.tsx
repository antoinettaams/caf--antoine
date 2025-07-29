"use client"; 

import { useState } from "react";
import Link from "next/link"; 
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white text-xl border-b border-cream bg-[#bb3b2b]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold">
          <Link href="/">
            Café Antoine
          </Link>
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link> 
          <Link href="/menu">Menu</Link>    
          <Link href="/contact">Contact</Link> 
        </nav>

        <div className="flex items-center gap-4 text-sm font-semibold">
          <span className="hidden md:inline">+229 54 74 56 96</span>
          <FaShoppingCart className="text-xl" />
          <FaUser className="text-xl" />

          {/* Bouton menu hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <FaBars className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-5 space-y-4">
            <li>
              <Link
                href="/"
                className="block text-sm text-gray-700 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)} 
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-sm text-gray-700 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-sm text-gray-700 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="block text-sm text-gray-700 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}