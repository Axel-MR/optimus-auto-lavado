"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Wash {
  id: number;
  title: string;
  image: string;
  description: string;
}

const washes: Wash[] = [
  {
    id: 1,
    title: "Lavado Premium",
    image:
      "https://images.unsplash.com/photo-1607860108855-05c7c66fdd29?q=80&w=1600&auto=format&fit=crop",
    description: "Pulido completo con cera y detallado interior.",
  },
  {
    id: 2,
    title: "Lavado Rápido",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    description: "Limpieza exterior exprés con enjuague sin residuos.",
  },
  {
    id: 3,
    title: "Lavado Ecológico",
    image:
      "https://images.unsplash.com/photo-1597003030972-bdf3cbf49f7f?q=80&w=1600&auto=format&fit=crop",
    description: "Uso de productos biodegradables y ahorro de agua.",
  },
];

export default function WashCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % washes.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + washes.length) % washes.length);

  return (
    <section
      className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
      id="lavados"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.08),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Nuestros Servicios
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Lavados Recientes
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Descubre nuestros servicios de lavado profesional con los mejores
            resultados
          </p>
        </div>

        {/* Carrusel Principal */}
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={washes[index].id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Imagen con overlay gradiente mejorado */}
                <div className="relative w-full h-full">
                  <img
                    src={washes[index].image}
                    alt={washes[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />
                </div>

                {/* Contenido con mejor jerarquía */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-2xl"
                  >
                    <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      SERVICIO {index + 1} DE {washes.length}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                      {washes[index].title}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6 max-w-xl">
                      {washes[index].description}
                    </p>
                    <button className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Más información
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botones de navegación integrados */}
            <button
              onClick={prev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Indicadores mejorados */}
          <div className="flex justify-center items-center mt-8 gap-3">
            {washes.map((wash, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative"
                aria-label={`Ir a ${wash.title}`}
              >
                <div
                  className={`relative h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-12 bg-red-500 shadow-lg shadow-red-500/50"
                      : "w-2 bg-white/30 hover:bg-white/50 group-hover:w-8"
                  }`}
                />
                {i === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-red-500 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {washes.map((wash, i) => (
              <motion.button
                key={wash.id}
                onClick={() => setIndex(i)}
                className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  i === index
                    ? "ring-4 ring-red-500 scale-105 shadow-xl"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
                whileHover={{ y: -4 }}
              >
                <img
                  src={wash.image}
                  alt={wash.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs font-semibold text-white truncate">
                    {wash.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
