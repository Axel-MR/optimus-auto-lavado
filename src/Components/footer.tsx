export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Optimus Prime · Todos los derechos
          reservados
        </p>
        <p>
          Hecho con ❤ y brillo ·{" "}
          <a className="hover:text-white" href="#contacto">
            Contacto
          </a>
        </p>
      </div>
    </footer>
  );
}
