import type { Metadata } from "next";
import "./globals.css";
import { Orbitron, Inter } from "next/font/google";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Optimus Prime — Autolavado",
  description:
    "Lavado de coches con estilo retro-futurista. Paquetes, productos, promociones y contacto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-grid-radial bg-[length:100%_100%] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
