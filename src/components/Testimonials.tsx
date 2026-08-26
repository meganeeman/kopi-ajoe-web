"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const press = [
    {
        text: "Kopi Ajoe telah memiliki 230 karyawan dan sekitar 200 sepeda listrik yang tersebar di berbagai daerah di Sumatera Barat.",
        source: "Padang Ekspres",
        date: "27 Okt 2025",
    },
    {
        text: "Kehadiran Kopi Ajoe di Kota Lubuk Linggau menjadi magnet baru bagi pecinta kopi.",
        source: "Linggau Pos",
        date: "06 Jul 2026",
    },
    {
        text: "Kopi Ajoe resmi hadir di Pekanbaru, tawarkan cita rasa premium dari biji kopi pilihan.",
        source: "Riau24",
        date: "Jun 2025",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { margin: "0px" });

    useEffect(() => {
        if (!inView) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % press.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [inView]);

    return (
        <section ref={sectionRef} className="h-screen bg-zinc-950 text-white flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-10 left-10 text-neutral-800">
                <Quote size={120} />
            </div>

            <div className="max-w-5xl px-6 relative z-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-10">
                    In The Press
                </p>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight mb-10">
                            &ldquo;{press[current].text}&rdquo;
                        </h3>
                        <p className="text-lg md:text-xl text-neutral-400 uppercase tracking-widest">
                            — {press[current].source}
                        </p>
                        <p className="text-sm text-neutral-600 mt-2 tracking-widest">
                            {press[current].date}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
                {press.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${current === i ? 'bg-white' : 'bg-neutral-700'}`}
                    />
                ))}
            </div>
        </section>
    );
}
