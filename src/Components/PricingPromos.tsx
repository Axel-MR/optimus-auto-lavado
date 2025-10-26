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
    setCurrentDay(days[new Date().getDay()]);
  }, []);

  return (
    <section
      id="precios"
      className="relative py-24 bg-gray-50 text-gray-800 overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-cyan-100 border border-cyan-200 mb-6">
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-semibold tracking-wider text-red-500 uppercase">
              Ofertas Especiales
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-gray-900">Precios & </span>
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-cyan-500 bg-clip-text text-transparent">
              Promociones
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestros{" "}
            <span className="text-red-500 font-semibold">
              descuentos exclusivos
            </span>{" "}
            cada día de la semana. ¡Ahorra más mientras tu auto brilla más!
          </p>
        </div>

        {/* Grid de promociones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {promotions.map((d, idx) => {
            const isToday = d.day === currentDay;
            return (
              <div key={idx} className="group relative">
                {/* Badge “Hoy” */}
                {isToday && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-400 rounded-full blur-md opacity-70 animate-pulse"></div>
                      <div className="relative px-4 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                        🔥 Hoy
                      </div>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative rounded-2xl p-6 h-full border transition-all duration-300 ${
                    isToday
                      ? "bg-gradient-to-b from-red-50 to-white border-red-300 shadow-md hover:shadow-lg"
                      : "bg-white border-gray-200 hover:border-red-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className={`text-lg font-bold ${
                        isToday ? "text-red-600" : "text-gray-900"
                      }`}
                    >
                      {d.day}
                    </h3>
                    <div
                      className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                        isToday
                          ? "bg-red-100 text-red-600 border border-red-200"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {d.badge}
                    </div>
                  </div>

                  {/* Descuento */}
                  <div className="mb-3">
                    <div
                      className={`text-5xl font-extrabold ${
                        isToday ? "text-red-500" : "text-gray-800"
                      }`}
                    >
                      {d.discount}
                      <span className="text-3xl">%</span>
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      Descuento
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px my-3 ${
                      isToday
                        ? "bg-gradient-to-r from-red-400/40 to-cyan-400/40"
                        : "bg-gray-200"
                    }`}
                  ></div>

                  {/* Descripción */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isToday ? "text-gray-700" : "text-gray-500"
                    }`}
                  >
                    {d.detail}
                  </p>

                  {/* Ahorro estimado */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Ahorra hasta</span>
                      <span
                        className={`font-bold ${
                          isToday ? "text-red-500" : "text-gray-700"
                        }`}
                      >
                        ${Math.round((d.discount / 100) * 500)} MXN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-500"
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
              className="w-5 h-5 text-red-500"
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
              className="w-5 h-5 text-red-500"
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
