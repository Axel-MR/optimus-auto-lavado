"use client";

import { FiShield, FiClock, FiCpu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: string;
  description: string;
}

const items = [
  {
    id: 1,
    title: "Brillo extremo",
    Icon: FiShield,
    imgSrc:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
    description: "Pulido espejo y cera carnauba de alta pureza.",
  },
  {
    id: 2,
    title: "Protección duradera",
    Icon: FiShield,
    imgSrc:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    description: "Sellado UV y repelente de agua con nanotecnología.",
  },
  {
    id: 3,
    title: "Rapidez total",
    Icon: FiClock,
    imgSrc:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop",
    description: "Tu auto impecable en menos de 30 minutos.",
  },
  {
    id: 4,
    title: "Tecnología avanzada",
    Icon: FiCpu,
    imgSrc:
      "https://images.unsplash.com/photo-1623397646389-3c8b7d3b9b2a?q=80&w=1600&auto=format&fit=crop",
    description: "Sistemas de lavado automatizados y sin contacto.",
  },
];

export default function ServiceAccordion() {
  const [open, setOpen] = useState(items[0].id);

  // 🔁 Cambia automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prev) => {
        const currentIndex = items.findIndex((i) => i.id === prev);
        const nextIndex = (currentIndex + 1) % items.length;
        return items[nextIndex].id;
      });
    }, 4000); // ⏱ ajusta el tiempo aquí

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:w-[500px] h-[500px] overflow-hidden rounded-3xl border border-cyan-500/20 backdrop-blur-sm bg-black/20 shadow-xl">
      <div className="flex flex-col h-full divide-y divide-white/10">
        {items.map((item) => (
          <Panel key={item.id} {...item} open={open} setOpen={setOpen} />
        ))}
      </div>
    </div>
  );
}

function Panel({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}: PanelProps) {
  const isOpen = open === id;

  return (
    <>
      <button
        className="flex items-center justify-between px-4 py-3 text-left w-full hover:bg-cyan-500/5 transition-colors"
        onClick={() => setOpen(id)}
      >
        <div className="flex items-center gap-3">
          <Icon className="text-cyan-400 text-xl" />
          <span className="font-semibold text-white">{title}</span>
        </div>
        <span
          className={`text-sm transition-transform ${
            isOpen ? "rotate-90 text-cyan-400" : "text-gray-400"
          }`}
        >
          ▶
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden border-t border-cyan-500/10"
          >
            <div
              className="relative h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${imgSrc})` }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-4 text-sm text-white/80 bg-black/30">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
