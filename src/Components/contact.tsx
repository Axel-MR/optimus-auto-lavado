import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const phoneNumber = "525512345678";
  const whatsappNumber = "525512345678";
  const whatsappMessage =
    "Hola, me gustaría obtener más información sobre sus servicios";

  return (
    <section
      id="contacto"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            ¿Listo para{" "}
            <span className="bg-linear-to-r from-cyan-600 to-red-500 bg-clip-text text-transparent">
              transformar tu auto?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contáctanos ahora y obtén una cotización personalizada con los
            mejores especialistas en detallado automotriz.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Columna izquierda - Contacto Directo */}
          <div className="space-y-6">
            {/* Tarjeta de contacto */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 transition-all hover:shadow-lg">
              <h3 className="font-bold text-2xl mb-6 text-gray-900">
                Contacto Directo
              </h3>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl border border-green-300 bg-green-50 hover:bg-green-100 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-lg text-gray-900">
                    WhatsApp
                  </div>
                  <div className="text-gray-500 text-sm">
                    Chatea con nosotros ahora
                  </div>
                  <div className="text-green-600 font-medium mt-1">
                    55 1234 5678
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-green-600 transition-colors">
                  →
                </div>
              </a>

              {/* Teléfono */}
              <a
                href={`tel:+${phoneNumber}`}
                className="group flex items-center gap-4 p-5 rounded-xl border border-cyan-300 bg-cyan-50 hover:bg-cyan-100 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-lg text-gray-900">
                    Llamar Ahora
                  </div>
                  <div className="text-gray-500 text-sm">
                    Habla directamente con nosotros
                  </div>
                  <div className="text-cyan-600 font-medium mt-1">
                    55 1234 5678
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-cyan-600 transition-colors">
                  →
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contacto@optimusprime.com"
                className="group flex items-center gap-3 p-4 mt-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all"
              >
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 group-hover:text-cyan-600">
                  contacto@optimusprime.com
                </span>
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 transition-all hover:shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Síguenos</h4>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#"
                  className="px-4 py-2 rounded-full text-sm font-medium border border-pink-300 text-pink-600 bg-pink-50 hover:bg-pink-100 transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-full text-sm font-medium border border-blue-300 text-blue-600 bg-blue-50 hover:bg-blue-100 transition"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-full text-sm font-medium border border-cyan-300 text-cyan-600 bg-cyan-50 hover:bg-cyan-100 transition"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Ubicación */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 transition-all hover:shadow-lg">
            <h3 className="font-bold text-2xl mb-6 text-gray-900">Visítanos</h3>

            <div className="space-y-5 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-600 mt-1 shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Dirección</div>
                  <p className="text-gray-500 text-sm">
                    Av. Cybertron 1984, CDMX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-600 mt-1 shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Horarios</div>
                  <p className="text-gray-500 text-sm">
                    Lunes a Domingo: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                className="w-full h-64"
                loading="lazy"
                src="https://www.google.com/maps?q=Ciudad%20de%20M%C3%A9xico&output=embed"
                title="Ubicación en mapa"
              />
            </div>

            {/* Nota */}
            <div className="mt-5 p-4 rounded-xl bg-cyan-50 border border-cyan-200">
              <p className="text-sm text-gray-700">
                💡 <span className="font-semibold">¿Primera vez?</span> Te
                ofrecemos una evaluación gratuita para diseñar el mejor plan
                para tu vehículo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
