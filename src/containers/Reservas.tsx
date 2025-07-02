"use client";

export default function Reservas() {
  return (
    <div className="min-h-screen w-full bg-gray-800 text-white">
      {/* Contacto */}
      <div id="Direccion" className="flex flex-wrap gap-7 px-10 pt-7 pb-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Llama</h1>
          <h2 className="text-xl">(352)-102-7709</h2>
        </div>

        <div className="flex flex-col gap-2 text-2xl">
          <h1 className="font-bold">Dirección</h1>
          <h3 className="text-lg">
            Vía Láctea #1387{" "}
            <a
              href="https://maps.app.goo.gl/HP8EmjUqh6awCKdX8"
              className="underline text-blue-400 hover:text-blue-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Ubicación
            </a>
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">Horarios</div>
          <div className="text-xl">Lunes a Domingo de 12:00pm - 7:00pm</div>
        </div>

        <div className="flex items-center ml-auto">
          <a href="/Reservaciones">
            <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none">
              Reservaciones
            </button>
          </a>
        </div>
      </div>

      <hr className="border-gray-600 my-6" />

      {/* Texto Menu centrado en viewport */}
      <div
        id="Texto-Menu"
        className="min-h-[calc(100vh-200px)] flex flex-row justify-center items-center gap-10 px-6 text-center"
      >
        <div className="max-w-2xl text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita est
          placeat ullam, aliquid sapiente laboriosam nostrum atque aliquam, quod
          id quia, obcaecati fuga tempora ex vitae? Fuga obcaecati magnam nemo.
        </div>

        <div className="">
          <button className="bg-orange-500 text-white px-10 py-2 rounded hover:bg-orange-600">
            Menu
          </button>
        </div>
      </div>
    </div>
  );
}
