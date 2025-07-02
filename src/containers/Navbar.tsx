"use client";
import Image from "next/image";
import Link from "next/link";
import AssetImage from "../../public/logo.png";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-3 top-0 py-2 fixed bg-black z-30 w-full">
      <Image src={AssetImage} alt="Logo" width={75} height={75} />
      <nav className="flex gap-6 font-medium text-sm">
        <Link
          href="#reservaciones"
          className="hover:bg-orange-400 hover:rounded-xl py-2 px-4 "
        >
          Reservaciones
        </Link>
        <Link
          href="#menu"
          className="hover:bg-orange-400 hover:rounded-xl py-2 px-4"
        >
          Menu
        </Link>
        <Link
          href="#contacto"
          className="hover:bg-orange-400 hover:rounded-xl py-2 px-4"
        >
          Contacto
        </Link>
        <Link
          href="#contacto"
          className="hover:bg-orange-400 hover:rounded-xl py-2 px-4"
        >
          Direccion
        </Link>
      </nav>
    </header>
  );
}
