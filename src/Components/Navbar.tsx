"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-8 px-8 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight md:text-2xl"
          >
            Optimus Prime AutoLavado
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              "Home",
              "Productos",
              "Nosotros",
              "Planes",
              "Agenda",
              "Promos",
              "Contacto",
            ].map((item) => (
              <Link key={item} href="#" className="nav-link">
                {item}
              </Link>
            ))}
          </nav>

          <button className="p-2 md:hidden" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 p-8 transition-transform">
          <button
            className="absolute top-8 right-8"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
          {[
            "Home",
            "Features",
            "Productos",
            "Nosotros",
            "Planes",
            "Agenda",
            "Promos",
            "Contacto",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
