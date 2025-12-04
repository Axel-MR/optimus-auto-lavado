"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

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
            ].map((item, key) => (
              <Link key={key} href={`#${item}`} className="nav-link">
                {item}
              </Link>
            ))}
          </nav>

          {!open && (
            <button className="p-2 md:hidden" onClick={() => setOpen(true)}>
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-8 p-8">
          <button
            className="absolute top-8 right-8 p-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <IoCloseOutline className="w-10 h-10" />
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
          ].map((item, key) => (
            <Link
              key={key}
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
