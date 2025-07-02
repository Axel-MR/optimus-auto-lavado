"use client";

import Image from "next/image";
import Link from "next/link";
import FondoAsset from "../../public/Fondo.jpeg";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={FondoAsset}
        alt="Fondo marino"
      />

      {/* Capa de oscurecimiento */}

      {/* Contenido */}
      <section className="relative z-10 flex flex-col items-center justify-center text-gray-400 text-center px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Fresh Seafood & Ocean Views
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow">
            Welcome to Mar de Amores
          </p>
          <Link href="/Reservaciones">
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 px-6 py-3 text-white rounded-full font-semibold text-sm shadow-md">
              Reserve a Table
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
