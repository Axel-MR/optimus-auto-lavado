"use client";

import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    time: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✉️ Opción 1: enviar por WhatsApp
    const phoneNumber = "4437253612"; // <--- cambia a tu número con código país
    const message = `Hola 👋, soy ${formData.name}. 
    Quisiera agendar un lavado a las ${formData.time}. 
    Mi correo es: ${formData.email}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Abre WhatsApp en nueva pestaña sin salir del sitio
    window.open(whatsappURL, "_blank");

    setSent(true);
  };

  return (
    <section
      className=" text-primary-foreground py-20 text-center"
      id="contacto"
    >
      <div className="max-w-2xl mx-auto">
        <span className="uppercase tracking-widest text-xs opacity-80 mb-3 inline-block">
          Agenda tu servicio
        </span>

        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
          Reserva tu lavado con nosotros
        </h2>

        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Indícanos tus datos y hora preferida. Te confirmaremos por WhatsApp o
          correo en minutos.
        </p>

        {!sent ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md border border-primary-foreground/20 px-4 py-3 focus:ring-2 focus:ring-primary-foreground/30 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md border border-primary-foreground/20 px-4 py-3 focus:ring-2 focus:ring-primary-foreground/30 focus:outline-none"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md border border-primary-foreground/20 px-4 py-3 focus:ring-2 focus:ring-primary-foreground/30 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-primary-foreground text-primary rounded-md px-5 py-3 font-medium hover:bg-primary-foreground/90 flex items-center justify-center group transition-all"
            >
              Enviar por WhatsApp
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
            </button>
          </form>
        ) : (
          <div className="mt-6 text-lg font-medium text-primary-foreground/90">
            ✅ ¡Gracias {formData.name}! Hemos generado tu mensaje para agendar
            el lavado a las {formData.time}. Si no se abrió WhatsApp
            automáticamente,{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setSent(false)}
            >
              inténtalo de nuevo.
            </span>
          </div>
        )}

        <p className="text-primary-foreground/60 text-xs mt-6">
          Tu información es confidencial. Solo la usaremos para coordinar tu
          cita.
        </p>
      </div>
    </section>
  );
}
