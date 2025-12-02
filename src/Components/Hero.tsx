export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <div className="animate-fade-in">
          <span className="bg-primary/5 text-primary rounded-full px-3 py-1 text-xs uppercase tracking-widest inline-block mb-5">
            Lavado Premium
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6">
            Brilla como nuevo en cada lavado
          </h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-lg">
            En{" "}
            <span className="font-medium text-primary">Optimus Car Wash</span>{" "}
            ofrecemos un servicio de limpieza profesional con productos
            ecológicos, detalle minucioso y resultados que hacen resaltar tu
            vehículo.
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center group text-sm font-medium uppercase tracking-wider"
          >
            Ver Servicios
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

        {/* Imagen del coche */}
        <div className="animate-scale-in relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1607860108855-0f18b72d2d1d?auto=format&fit=crop&w=1000&q=80"
              alt="Coche brillante después del lavado"
              className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
