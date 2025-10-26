import { products } from "@/lib/data";

export default function Products() {
  return (
    <section
      id="productos"
      className="relative py-24 bg-gray-50 text-gray-800 overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 180, 255, 0.2) 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 mb-6">
            <svg
              className="w-4 h-4 text-cyan-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase">
              Calidad Premium
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-gray-900">Productos </span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Usamos únicamente insumos de{" "}
            <span className="text-cyan-600 font-semibold">
              grado profesional
            </span>{" "}
            para garantizar resultados superiores y duraderos en cada servicio.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <article
              key={p.name}
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Glow suave al hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Contenido */}
              <div className="relative p-8 flex flex-col items-start">
                <div className="mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-blue-50 border border-cyan-200 group-hover:scale-110 transition-transform">
                    <span className="text-3xl text-cyan-600">{p.icon}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {p.name}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>

                {/* Decoraciones sutiles */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-200 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-blue-200 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer con info adicional */}
        <div className="mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent mb-12"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Certificados",
                desc: "Productos aprobados por fabricantes",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Eco-friendly",
                desc: "Fórmulas biodegradables",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                ),
              },
              {
                title: "Acción Rápida",
                desc: "Resultados en menos tiempo",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Mejor Precio",
                desc: "Calidad profesional accesible",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-cyan-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
