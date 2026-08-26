"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const locations: { code: string; name: string; isNew?: boolean }[] = [
    { code: "PYK", name: "Payakumbuh" },
    { code: "BKT", name: "Bukittinggi" },
    { code: "PDG", name: "Padang" },
    { code: "P. PJG", name: "Padang Panjang" },
    { code: "PKU", name: "Pekanbaru" },
    { code: "PRMN", name: "Pariaman" },
    { code: "PASBAR", name: "Pasaman Barat" },
    { code: "L.A", name: "Lubuk Alung" },
    { code: "BKN", name: "Bangkinang" },
    { code: "BTS", name: "Batusangkar" },
    { code: "L.B", name: "Lubuk Basung" },
    { code: "SLK", name: "Solok" },
    { code: "THORNS", name: "Duri" },
    { code: "DUMAI", name: "Dumai" },
    { code: "LLG", name: "Lubuk Linggau", isNew: true },
];

const comingSoon = ["Jambi", "Jakarta"];

export default function Locations() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            ref={ref}
            className="bg-neutral-950 py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-red-900/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                {/* Motto Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-32 flex flex-col items-center"
                >
                    <div className="relative">
                        <h2 className="relative z-10 text-center flex flex-col items-center justify-center">
                            <span className="text-[12rem] sm:text-[16rem] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-sm transform scale-150 opacity-50">
                                AJOE
                            </span>

                            <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white z-20 mix-blend-difference">
                                AJOE
                            </span>

                            <span className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.5em] text-neutral-400 uppercase my-4 z-20">
                                Tidak Harus
                            </span>

                            <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent z-20 drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                                JUAL SATE
                            </span>
                        </h2>
                    </div>
                    <p className="mt-8 text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Redefining tradition. It's not just about what we sell, it's about who we are.
                    </p>
                </motion.div>

                {/* Interactive Territory Grid */}
                <div className="mb-24 relative">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-neutral-800" />
                        <h3 className="text-neutral-500 uppercase tracking-[0.2em] text-sm font-semibold">Our Territory</h3>
                        <div className="h-[1px] w-12 bg-neutral-800" />
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-light mb-12">
                        Dari jalanan Padang ke kota-kota di luar Sumatera Barat.
                    </p>

                    <div
                        className="flex flex-wrap justify-center gap-4 relative"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {locations.map((loc, index) => (
                            <motion.div
                                key={loc.code}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    delay: index * 0.03,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={cn(
                                    "relative group cursor-pointer overflow-hidden",
                                    "w-40 h-32 md:w-48 md:h-36 rounded-xl",
                                    "bg-neutral-900/50 border border-white/5",
                                    "flex flex-col items-center justify-center",
                                    "transition-all duration-300 ease-out",
                                    hoveredIndex === index ? "scale-110 z-20 bg-neutral-800 border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.2)]" : "hover:bg-neutral-800",
                                    hoveredIndex !== null && hoveredIndex !== index ? "opacity-40 scale-95 blur-[1px]" : "opacity-100"
                                )}
                            >
                                {/* Active State Corner Accents */}
                                {hoveredIndex === index && (
                                    <>
                                        <motion.div layoutId="corner-tl" className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-red-500" />
                                        <motion.div layoutId="corner-br" className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-red-500" />
                                    </>
                                )}

                                <div className="z-10 flex flex-col items-center">
                                    {loc.isNew && (
                                        <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-red-500">
                                            New
                                        </span>
                                    )}
                                    <span className={cn(
                                        "text-3xl font-bold tracking-tighter transition-colors duration-300",
                                        hoveredIndex === index ? "text-white" : "text-neutral-400 group-hover:text-white"
                                    )}>
                                        {loc.code}
                                    </span>

                                    {/* Reveal full name nicely */}
                                    <motion.span
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                            marginTop: hoveredIndex === index ? 8 : 4
                                        }}
                                        className={cn(
                                            "text-xs font-mono uppercase tracking-widest text-neutral-500",
                                            hoveredIndex === index ? "text-red-400" : ""
                                        )}
                                    >
                                        {loc.name}
                                    </motion.span>
                                </div>

                                {/* Background Gradient on Hover */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent",
                                    "opacity-0 transition-opacity duration-300",
                                    hoveredIndex === index ? "opacity-100" : ""
                                )} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Coming Soon - Redesigned to be slimmer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="relative inline-flex group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center gap-6 bg-neutral-900 rounded-full py-3 px-8 border border-neutral-800 ring-1 ring-white/10">
                        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Coming Soon
                        </span>

                        <div className="h-4 w-[1px] bg-neutral-800" />

                        <div className="flex gap-4">
                            {comingSoon.map((city, i) => (
                                <span key={city} className="text-neutral-200 font-mono text-sm tracking-wide flex items-center gap-1">
                                    {city}
                                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <p className="mt-16 text-xs text-neutral-600 tracking-wide">
                    Sumber: liputan publik Riau24, Linggau Pos, dan Padang Ekspres.
                </p>
            </div>
        </section>
    );
}
