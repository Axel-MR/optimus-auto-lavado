"use client";

import { useState, useEffect, useRef } from "react";

export default function FeaturedCarousel() {
  const slides = [
    {
      category: "Lavado Premium",
      title: "Brillo Extremo en Cada Detalle",
      desc: "Nuestro servicio estrella que combina limpieza profunda con cera protectora para dejar tu vehículo como nuevo.",
      author: "Equipo Optimus",
      img: "https://images.unsplash.com/photo-1607860108855-0f18b72d2d1d?auto=format&fit=crop&w=1170&q=80",
    },
    {
      category: "Detallado Interior",
      title: "Cuidado Total por Dentro y por Fuera",
      desc: "Eliminamos suciedad, olores y bacterias del interior de tu auto con productos biodegradables de alta calidad.",
      author: "Equipo Optimus",
      img: "https://images.unsplash.com/photo-1607860070880-7eae1b84b73a?auto=format&fit=crop&w=1170&q=80",
    },
    {
      category: "Lavado Ecológico",
      title: "Ahorra Agua, Cuida el Planeta",
      desc: "Innovación ecológica que permite lavar tu vehículo utilizando menos de 2 litros de agua por servicio.",
      author: "Optimus EcoWash",
      img: "https://images.unsplash.com/photo-1597007066438-8cf442cc5b7b?auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // autoplay con pausa al hover
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused]);

  return (
    <section
      className="py-20"
      id="servicios"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-medium mb-2">
              Servicios Destacados
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Conoce nuestros servicios premium diseñados para mantener tu
              vehículo en su mejor versión.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button
              onClick={prevSlide}
              className="border rounded-full p-2 hover:bg-secondary transition"
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="border rounded-full p-2 hover:bg-secondary transition"
              aria-label="Siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-full grid md:grid-cols-2 items-center gap-8"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="h-[400px] md:h-[500px] w-full object-cover"
                  />
                </div>
                <div className="md:pl-8">
                  <span className="bg-primary/5 text-primary rounded-full px-3 py-1 text-xs uppercase tracking-widest inline-block mb-4">
                    {slide.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-medium mb-6 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{slide.desc}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-secondary h-10 w-10 rounded-full mr-3"></div>
                      <span className="text-sm">{slide.author}</span>
                    </div>
                    <a
                      href="#contacto"
                      className="inline-flex items-center text-sm font-medium uppercase tracking-wider group"
                    >
                      Agendar
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        fill="none"
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 24 24"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-10 space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  current === i
                    ? "bg-primary w-6"
                    : "bg-gray-300 w-2 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
