import ServiceAccordion from "./ServiceAccordion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden"
      id="inicio"
    >
      {/* Scanlines efecto */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-30"></div>

      {/* Grid futurista de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Gradiente de fondo animado */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-8 relative z-10">
            {/* Badge animado */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-red-500/20 border border-cyan-500/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                Autolavado • Detallado Premium
              </span>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="block text-white">Brillo que</span>
                <span className="block bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                  impresiona
                </span>
                <span className="block text-white mt-2">protección que</span>
                <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                  dura
                </span>
              </h1>
            </div>

            {/* Descripción */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              En{" "}
              <span className="text-cyan-400 font-semibold">Optimus Prime</span>{" "}
              combinamos técnicas de detallado profesional con acabados de alto
              impacto visual. Vive la experiencia{" "}
              <span className="text-red-400 italic">retro‑futurista</span> y
              conduce como nuevo.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#paquetes"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                <span className="relative z-10">Ver paquetes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 border-2 border-red-500/50 text-red-400 font-bold rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-red-500/10 hover:border-red-400 hover:scale-105"
              >
                Cotizar ahora
              </a>
            </div>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: "✓", text: "Lavado exterior sin rayas" },
                { icon: "✓", text: "Aspirado profundo y detallado" },
                { icon: "✓", text: "Encerado premium y UV" },
                { icon: "✓", text: "Resultados garantizados" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-red-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold group-hover:border-cyan-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Anillos decorativos */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-2 border-cyan-500/20 animate-pulse"></div>
              <div
                className="absolute w-[90%] h-[90%] rounded-full border-2 border-red-500/20 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-3xl opacity-60 blur-3xl bg-gradient-to-tr from-cyan-500/30 via-transparent to-red-500/30"></div>

            {/* Imagen principal */}
            <div className="relative flex justify-center items-center lg:pl-8">
              <ServiceAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
