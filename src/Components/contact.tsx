import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const phoneNumber = "525512345678";
  const whatsappNumber = "525512345678";
  const whatsappMessage =
    "Hola, me gustaría obtener más información sobre sus servicios";

  return (
    <section className="section" id="contacto">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Transformar tu Auto?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Contáctanos ahora y obtén una cotización personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Columna de Contacto Directo */}
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-bold text-xl mb-6">Contacto Directo</h3>

              {/* Botón WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-[1.02] mb-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold text-lg mb-1">WhatsApp</div>
                  <div className="text-white/70 text-sm">
                    Chatea con nosotros ahora
                  </div>
                  <div className="text-green-400 font-medium mt-1">
                    55 1234 5678
                  </div>
                </div>
                <div className="text-white/40 group-hover:text-white/60 transition-colors">
                  →
                </div>
              </a>

              {/* Botón Teléfono */}
              <a
                href={`tel:+${phoneNumber}`}
                className="group w-full flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold text-lg mb-1">Llamar Ahora</div>
                  <div className="text-white/70 text-sm">
                    Habla directamente con nosotros
                  </div>
                  <div className="text-blue-400 font-medium mt-1">
                    55 1234 5678
                  </div>
                </div>
                <div className="text-white/40 group-hover:text-white/60 transition-colors">
                  →
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contacto@optimusprime.com"
                className="group w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 mt-4"
              >
                <Mail className="w-5 h-5 text-white/60" />
                <div className="text-sm text-white/80 group-hover:text-white">
                  contacto@optimusprime.com
                </div>
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="card">
              <h4 className="font-semibold mb-3">Síguenos</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="badge hover:bg-pink-500/20 hover:border-pink-500/50 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="badge hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="badge hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Columna de Ubicación */}
          <div className="card">
            <h3 className="font-bold text-xl mb-4">Visítanos</h3>

            <div className="space-y-4 mb-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Dirección</div>
                  <div className="text-white/70 text-sm">
                    Av. Cybertron 1984, CDMX
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Horarios</div>
                  <div className="text-white/70 text-sm">
                    Lunes a Domingo: 9:00 AM - 7:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                className="w-full h-64"
                loading="lazy"
                src="https://www.google.com/maps?q=Ciudad%20de%20M%C3%A9xico&output=embed"
                title="Ubicación en mapa"
              />
            </div>

            <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-sm text-white/80">
                💡 <span className="font-medium">¿Primera vez?</span> Te
                ofrecemos una consulta gratuita para evaluar tu auto y diseñar
                el mejor plan para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
