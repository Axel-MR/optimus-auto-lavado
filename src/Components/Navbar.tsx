"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const links = [
  { href: "#precios", label: "Precios & Promos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo.svg"
              alt="Optimus Prime"
              className="h-8 w-8 transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span
            className="font-bold tracking-widest text-sm md:text-base bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            OPTIMUS PRIME
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white transition-colors relative group py-1"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          {/* Contact Buttons Desktop */}
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://wa.me/525512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            <a
              href="tel:+525512345678"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105"
              title="Llamar"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Llamar</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-lg">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}

            {/* Contact Buttons Mobile */}
            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/10">
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/40 text-green-400 hover:border-green-500/60 transition-all"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Contactar por WhatsApp</span>
              </a>

              <a
                href="tel:+525512345678"
                className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/40 text-blue-400 hover:border-blue-500/60 transition-all"
                onClick={() => setOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Llamar Ahora</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
