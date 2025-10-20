"use client";
import { promotions } from "@/lib/data";
import { useState, useEffect } from "react";

export default function PricingPromos() {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const today = days[new Date().getDay()];
    setCurrentDay(today);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" id="precios">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-cyan-500/10 border border-red-500/30 backdrop-blur-sm mb-6">
            <svg
              className="w-4 h-4 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-semibold tracking-wider text-red-400 uppercase">
              Ofertas Especiales
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-white">Precios & </span>
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-cyan-400 bg-clip-text text-transparent">
              Promociones
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Aprovecha nuestros{" "}
            <span className="text-red-400 font-semibold">
              descuentos exclusivos
            </span>{" "}
            diferentes cada día de la semana. ¡Ahorra más mientras tu auto
            brilla más!
          </p>
        </div>

        {/* Grid de promociones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {promotions.map((d, idx) => {
            const isToday = d.day === currentDay;

            return (
              <div
                key={d.day}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Badge "HOY" flotante */}
                {isToday && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 rounded-full blur-md opacity-75 animate-pulse"></div>
                      <div className="relative px-4 py-1 bg-gradient-to-r from-red-500 to-red-400 text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-lg">
                        🔥 Hoy
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Container */}
                <div
                  className={`relative h-full rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                    isToday
                      ? "bg-gradient-to-br from-red-500/20 via-black/60 to-red-500/10 border-2 border-red-500/60 shadow-xl shadow-red-500/30 scale-105"
                      : "bg-black/40 border border-white/10 hover:border-red-500/30 hover:bg-black/60"
                  } group-hover:scale-105 group-hover:shadow-lg ${
                    isToday
                      ? "group-hover:shadow-red-500/40"
                      : "group-hover:shadow-red-500/20"
                  }`}
                >
                  {/* Glow effect en hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isToday
                        ? "bg-gradient-to-br from-red-500/10 to-transparent"
                        : "bg-gradient-to-br from-red-500/5 to-transparent"
                    }`}
                  ></div>

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Header con día y badge */}
                    <div className="flex items-start justify-between mb-4">
                      <h3
                        className={`text-lg font-bold leading-tight ${
                          isToday
                            ? "text-red-400"
                            : "text-white group-hover:text-red-400"
                        } transition-colors`}
                      >
                        {d.day}
                      </h3>
                      <div
                        className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                          isToday
                            ? "bg-red-500/30 text-red-300 border border-red-400/50"
                            : "bg-white/5 text-gray-400 border border-white/10"
                        } group-hover:bg-red-500/20 group-hover:text-red-400 transition-all`}
                      >
                        {d.badge}
                      </div>
                    </div>

                    {/* Descuento grande */}
                    <div className="mb-3">
                      <div
                        className={`text-5xl font-extrabold leading-none ${
                          isToday
                            ? "text-red-400"
                            : "text-white group-hover:text-red-400"
                        } transition-colors`}
                      >
                        {d.discount}
                        <span className="text-3xl">%</span>
                      </div>
                      <div
                        className={`text-xs font-semibold mt-1 ${
                          isToday ? "text-red-400/70" : "text-gray-500"
                        } uppercase tracking-wider`}
                      >
                        Descuento
                      </div>
                    </div>

                    {/* Divisor */}
                    <div
                      className={`h-px mb-3 ${
                        isToday
                          ? "bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                          : "bg-white/10 group-hover:bg-red-500/30"
                      } transition-all`}
                    ></div>

                    {/* Detalle */}
                    <p
                      className={`text-sm leading-relaxed flex-grow ${
                        isToday
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300"
                      } transition-colors`}
                    >
                      {d.detail}
                    </p>

                    {/* Indicador visual de ahorro */}
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Ahorra hasta</span>
                        <span
                          className={`font-bold ${
                            isToday ? "text-red-400" : "text-white"
                          }`}
                        >
                          ${Math.round((d.discount / 100) * 500)} MXN
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner decoration */}
                  {isToday && (
                    <>
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                      <div
                        className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-red-400 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </>
                  )}

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-red-500/10 via-black/60 to-cyan-500/10 border border-red-500/30 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-cyan-500/20 border-2 border-red-500/40 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-1">
                  ¿Quieres más descuentos?
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Acumula puntos en cada servicio y canjéalos por descuentos
                  adicionales
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
                >
                  Consultar programa
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info adicional */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Promociones válidas todo el día</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Sin letra chica</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Acumulables con otros descuentos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
