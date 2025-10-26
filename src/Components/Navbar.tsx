"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const links = [
  { href: "#precios", label: "Precios & Promos" },
  { href: "#contacto", label: "Contacto" },
  { href: "/Hola", label: "Cliente frecuente" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 flex justify-center">
      {/* Contenedor centrado y redondeado */}
      <div className="w-[95%] md:w-[90%] max-w-7xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl transition-all duration-300">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/optimus-logo.png"
                alt="Optimus Prime"
                className="h-9 w-9 transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span
              className="font-bold tracking-widest text-gray-900 text-sm md:text-base bg-gradient-to-r from-cyan-600 to-red-500 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              OPTIMUS PRIME
            </span>
          </a>

          {/* Navegación escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-700 hover:text-cyan-600 transition-colors relative group py-1 font-medium"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Botones de contacto */}
            <div className="flex items-center gap-3 ml-3">
              <a
                href="https://wa.me/3525920118"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-300 text-green-600 hover:bg-green-100 hover:border-green-400 hover:scale-105 transition-all duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>

              <a
                href="tel:+3525920118"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-600 hover:bg-cyan-100 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
                title="Llamar"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Llamar</span>
              </a>
            </div>
          </nav>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur-lg rounded-b-2xl">
            <nav className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-gray-700 hover:text-cyan-600 transition-colors py-2 border-b border-gray-100 last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}

              {/* Botones contacto móvil */}
              <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/3525920118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-green-50 border border-green-300 text-green-600 hover:bg-green-100 hover:border-green-400 transition-all"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>

                <a
                  href="tel:+3525920118"
                  className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-cyan-50 border border-cyan-300 text-cyan-600 hover:bg-cyan-100 hover:border-cyan-400 transition-all"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Llamar</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
