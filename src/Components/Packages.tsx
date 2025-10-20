import { packages } from "../lib/data";

export default function Packages() {
  return (
    <section className="relative py-20 overflow-hidden" id="paquetes">
      {/* Fondo con grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Efectos de luz */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Nuestros Servicios
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Paquetes
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Elige el nivel de atención que tu coche merece. Todos incluyen
            productos premium y garantía de satisfacción.
          </p>
        </div>

        {/* Grid de paquetes */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((p, idx) => (
            <div
              key={p.name}
              className={`relative group ${
                p.popular ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {/* Badge Popular flotante */}
              {p.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full blur-lg opacity-75"></div>
                    <div className="relative px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm rounded-full uppercase tracking-wider">
                      ⭐ Más Popular
                    </div>
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div
                className={`relative h-full rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  p.popular
                    ? "bg-gradient-to-b from-cyan-500/10 to-black/40 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30"
                    : "bg-black/40 border border-white/10 hover:border-cyan-500/30 hover:bg-black/60"
                } group-hover:scale-105`}
              >
                {/* Glow effect en hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    p.popular
                      ? "bg-gradient-to-br from-cyan-500/5 to-transparent"
                      : ""
                  }`}
                ></div>

                <div className="relative p-8 flex flex-col h-full">
                  {/* Header del paquete */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className={`text-2xl font-bold ${
                          p.popular ? "text-cyan-400" : "text-white"
                        }`}
                      >
                        {p.name}
                      </h3>
                      {idx === 0 && <span className="text-2xl">🌟</span>}
                      {idx === 1 && <span className="text-2xl">💎</span>}
                      {idx === 2 && <span className="text-2xl">👑</span>}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-5xl font-extrabold ${
                          p.popular ? "text-cyan-400" : "text-white"
                        }`}
                      >
                        ${p.price}
                      </span>
                      <span className="text-gray-500 text-lg font-medium">
                        MXN
                      </span>
                    </div>
                    {p.popular && (
                      <p className="text-xs text-cyan-400/70 mt-2">
                        La mejor relación calidad-precio
                      </p>
                    )}
                  </div>

                  {/* Divisor */}
                  <div
                    className={`h-px mb-6 ${
                      p.popular
                        ? "bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                        : "bg-white/10"
                    }`}
                  ></div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm group/item"
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            p.popular
                              ? "bg-cyan-500/20 border border-cyan-500/50"
                              : "bg-white/10 border border-white/20"
                          } group-hover/item:scale-110 transition-transform`}
                        >
                          <svg
                            className={`w-3 h-3 ${
                              p.popular ? "text-cyan-400" : "text-gray-400"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contacto"
                    className={`block text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      p.popular
                        ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-black hover:from-cyan-400 hover:to-cyan-500 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
                        : "bg-white/5 text-white border-2 border-white/20 hover:bg-white/10 hover:border-cyan-500/50"
                    }`}
                  >
                    {p.popular ? "Elegir Ahora →" : "Seleccionar"}
                  </a>
                </div>
              </div>

              {/* Efecto de brillo en las esquinas para el popular */}
              {p.popular && (
                <>
                  <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-cyan-400"
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
              <span>Garantía de satisfacción</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span>Pago en efectivo o tarjeta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
