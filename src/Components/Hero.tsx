"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gray-100 py-24 flex justify-center items-center overflow-hidden">
      {/* Luces decorativas suaves */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Contenedor principal con fondo blanco y borde redondeado */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-xl max-w-7xl mx-auto px-8 py-16 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Texto principal */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            The Future of{" "}
            <motion.span
              className="text-cyan-600 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Car Detailing
            </motion.span>
            <br />
            with{" "}
            <motion.span
              className="text-red-500 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Cutting-Edge Care
            </motion.span>
          </h1>

          <motion.p
            className="text-lg text-gray-600 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tecnología avanzada para mantener tu vehículo con un acabado
            impecable. Brillo, protección y eficiencia sin igual.
          </motion.p>

          {/* Botones */}
          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="#paquetes"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 transition shadow-md"
            >
              Ver Paquetes
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-red-400 hover:text-red-500 transition"
            >
              Cotizar Ahora
            </motion.a>
          </motion.div>

          {/* Reseñas */}
          <motion.div
            className="flex flex-col items-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex text-yellow-400 gap-1 text-lg">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <p className="text-gray-500 text-sm mt-1">
              5.0 de <span className="text-cyan-600 font-semibold">120+</span>{" "}
              reseñas verificadas
            </p>
          </motion.div>
        </motion.div>

        {/* Tarjetas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Card 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition border border-gray-100"
          >
            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259bfe8e?q=80&w=800"
              alt="Auto brillando"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 bg-cyan-600 text-white rounded-b-2xl text-center flex flex-col justify-center">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-sm text-cyan-100">
                Autos transformados con acabado espejo
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-sm rounded-2xl p-8 flex flex-col justify-center text-center hover:shadow-lg transition border border-gray-100"
          >
            <div className="mx-auto mb-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-xl font-bold">
                💧
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-1">99%</h3>
            <p className="text-sm text-gray-500">Clientes satisfechos</p>
            <p className="text-xs text-cyan-600 mt-2">
              Basado en reseñas del último mes
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-red-50 shadow-sm rounded-2xl p-8 text-center flex flex-col justify-center hover:shadow-md transition border border-gray-100"
          >
            <h3 className="text-4xl font-bold text-red-600 mb-1">8+</h3>
            <p className="text-gray-600 text-sm">Años de experiencia premium</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-cyan-700 text-white rounded-2xl p-8 flex flex-col justify-center text-center hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="text-lg font-semibold mb-1">
              Brillo que Impresiona
            </h3>
            <p className="text-sm text-cyan-100">
              Protección cerámica y acabado futurista
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
