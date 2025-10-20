import { products } from "@/lib/data";

export default function Products() {
  return (
    <section className="relative py-20 overflow-hidden" id="productos">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Efectos de luz */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-red-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <svg
              className="w-4 h-4 text-cyan-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Calidad Premium
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-white">Productos </span>
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-red-400 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Usamos únicamente insumos de{" "}
            <span className="text-cyan-400 font-semibold">
              grado profesional
            </span>{" "}
            para garantizar resultados superiores y duraderos en cada servicio.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <article
              key={p.name}
              className="group relative"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Card Background con gradiente sutil */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-black/40 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Border glow effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative h-full bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                {/* Icon Container */}
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-red-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {p.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {p.desc}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/60 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-red-500/0 group-hover:bg-red-500/60 transition-all duration-500 delay-100"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer con info adicional */}
        <div className="mt-16 relative">
          {/* Divisor decorativo */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
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
                title: "Certificados",
                desc: "Productos aprobados por fabricantes",
              },
              {
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
                title: "Eco-friendly",
                desc: "Fórmulas biodegradables",
              },
              {
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
                title: "Acción Rápida",
                desc: "Resultados en menos tiempo",
              },
              {
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
                title: "Mejor Precio",
                desc: "Calidad profesional accesible",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/20 hover:bg-black/60 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-red-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
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
