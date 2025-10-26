export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-cyan-600">Optimus Prime</span> ·
          Todos los derechos reservados
        </p>

        <p className="flex items-center gap-1">
          Hecho con
          <span className="text-red-500 text-lg">❤</span>y{" "}
          <span className="text-cyan-600 font-semibold">brillo</span> ·{" "}
          <a
            href="#contacto"
            className="font-medium text-gray-600 hover:text-cyan-600 transition-colors"
          >
            Contacto
          </a>
        </p>
      </div>
    </footer>
  );
}
