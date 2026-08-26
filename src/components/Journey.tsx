"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const milestones = [
    {
        year: "2024",
        title: "The Name",
        description:
            "Merek KOPI AJOE resmi didaftarkan pada 25 September 2024 atas nama Dede Saputra.",
    },
    {
        year: "2025",
        title: "The First Movement",
        description:
            "Ajoe tumbuh dan bergerak melintasi Sumatera Barat—dari Padang, Padangpanjang, Payakumbuh, hingga Pasaman dan Solok.",
    },
    {
        year: "2025",
        title: "200+ Electric Units",
        description:
            "Jaringan street coffee bertumbuh dengan sekitar 200 sepeda listrik yang menjangkau pelanggan di berbagai titik.",
    },
    {
        year: "2026",
        title: "Beyond Sumatra",
        description:
            "Kota baru, orang baru, semangat Ajoe yang sama. Ekspansi berlanjut ke luar Sumatera dengan dibukanya Lubuk Linggau.",
    },
];

export default function Journey() {
    return (
        <section className="relative bg-black text-white px-6 md:px-20 py-32 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-4">
                        The Ajoe Journey
                    </p>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
                        Tumbuh Cepat, <br /> Tetap Diri Sendiri
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    <div className="flex flex-col gap-16">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={`${m.year}-${i}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={cn(
                                    "relative flex gap-8 md:gap-0",
                                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                )}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-500/20 mt-2" />

                                <div className="pl-12 md:pl-0 md:w-1/2 md:px-12">
                                    <div className={cn(
                                        "flex flex-col",
                                        i % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"
                                    )}>
                                        <span className="text-5xl md:text-7xl font-black tracking-tighter text-white/10 mb-2">
                                            {m.year}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{m.title}</h3>
                                        <p className="text-neutral-400 font-light leading-relaxed max-w-md">
                                            {m.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
