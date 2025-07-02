"use client";
import Hero from "@/containers/Hero";
import Reservas from "@/containers/Reservas";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full  ">
      {/* Hero */}
      <Hero />
      {/* Reservaciones */}
      <Reservas />

      {/* Menú */}
      <section id="menu" className="bg-white text-center py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
        <p className="mb-6 text-gray-600">
          Explore our selection of delicious seafood dishes.
        </p>
        <Image
          src="/images/menu-illustration.png"
          alt="Menu Illustration"
          width={400}
          height={200}
          className="mx-auto mb-6"
        />
      </section>

      {/* Pedido por WhatsApp */}
      <section id="contacto" className="bg-[#fff0dc] text-center py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Order for Delivery</h2>
        <p className="mb-6 text-gray-600">
          Enjoy our dishes at home – order through WhatsApp
        </p>
        <a
          href="https://wa.me/5211234567890?text=Hola%2C%20quiero%20ordenar%20del%20men%C3%BA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
        >
          Order via WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Mar de Amores. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
