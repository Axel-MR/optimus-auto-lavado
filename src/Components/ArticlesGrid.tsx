export default function ArticlesGrid() {
  const articles = [
    {
      category: "Cuidado del Auto",
      title: "5 Consejos para Mantener el Brillo de tu Vehículo",
      desc: "Descubre cómo conservar la pintura impecable con simples rutinas de mantenimiento y productos ecológicos.",
      author: "Carlos Méndez",
      date: "Oct 25, 2025",
      img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1d?auto=format&fit=crop&w=870&q=80",
    },
    {
      category: "Servicios Premium",
      title: "Lavado Detallado: Más que un Simple Lavado",
      desc: "Conoce por qué el detallado automotriz marca la diferencia en cada rincón de tu coche, tanto por dentro como por fuera.",
      author: "Andrea López",
      date: "Oct 12, 2025",
      img: "https://images.unsplash.com/photo-1597007066438-8cf442cc5b7b?auto=format&fit=crop&w=876&q=80",
    },
    {
      category: "Tecnología",
      title: "El Futuro del Lavado Ecológico",
      desc: "Nuevas tecnologías que permiten limpiar tu auto con mínima cantidad de agua, cuidando el planeta sin sacrificar resultados.",
      author: "Luis Hernández",
      date: "Sep 30, 2025",
      img: "https://images.unsplash.com/photo-1607860108855-0f18b72d2d1d?auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <section className="bg-secondary/30 py-20" id="blog">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl font-medium mb-2">
              Noticias y Tips del Lavado
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Aprende sobre técnicas, innovación y mantenimiento para que tu
              vehículo luzca como nuevo cada día.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center text-sm font-medium uppercase tracking-wider group"
          >
            Ver Todo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              stroke="currentColor"
              fill="none"
              className="ml-2 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article
              key={a.title}
              className="article-card overflow-hidden rounded-lg bg-white"
            >
              <img
                src={a.img}
                alt={a.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  {a.category}
                </span>
                <h3 className="font-serif text-xl font-medium mt-3 mb-3">
                  {a.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{a.desc}</p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{a.author}</span>
                  <span>{a.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón móvil */}
        <div className="text-center mt-12 md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium uppercase tracking-wider group"
          >
            Ver más artículos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              stroke="currentColor"
              fill="none"
              className="ml-2 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
