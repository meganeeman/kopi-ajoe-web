"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Store, Clock, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocationItem {
    code: string;
    name: string;
    isNew?: boolean;
    outlets: string;
    role: string;
    areas: string[];
    gmapsQuery: string;
}

const locations: LocationItem[] = [
    {
        code: "PYK",
        name: "Payakumbuh",
        outlets: "12 Titik Gerai",
        role: "Central Hub Pabrik & Distribusi Utama",
        areas: ["Pabrik Sungai Beringin", "Simpang Benteng", "Ngalau Indah", "Koto Nan Ampek", "Labuh Basilang"],
        gmapsQuery: "Kopi Ajoe Payakumbuh",
    },
    {
        code: "BKT",
        name: "Bukittinggi",
        outlets: "8 Titik Gerai",
        role: "Sentra Wisata Jam Gadang",
        areas: ["Jam Gadang", "Pasar Atas", "Aur Kuning", "Panorama", "Janjang 40"],
        gmapsQuery: "Kopi Ajoe Bukittinggi",
    },
    {
        code: "PDG",
        name: "Padang",
        outlets: "14 Titik Gerai",
        role: "Ibukota Pesisir & Area Kampus",
        areas: ["Khatib Sulaiman", "Taplau Pantai Padang", "UNAND Limau Manis", "Simpang Haru", "Ganting"],
        gmapsQuery: "Kopi Ajoe Padang",
    },
    {
        code: "P. PJG",
        name: "Padang Panjang",
        outlets: "4 Titik Gerai",
        role: "Lintas Perbukitan Lembah Anai",
        areas: ["Silaing Bawah", "Pasar Kuliner", "Bukit Surungan", "Simpang Mifan"],
        gmapsQuery: "Kopi Ajoe Padang Panjang",
    },
    {
        code: "PKU",
        name: "Pekanbaru",
        outlets: "9 Titik Gerai",
        role: "Hub Metropolitan Riau",
        areas: ["Sudirman", "Panam", "Riau", "Marpoyan Damai", "Arengka"],
        gmapsQuery: "Kopi Ajoe Pekanbaru",
    },
    {
        code: "PRMN",
        name: "Pariaman",
        outlets: "5 Titik Gerai",
        role: "Kawasan Pesisir Pantai Gandoriah",
        areas: ["Pantai Gandoriah", "Kuraitaji", "Alai Gelombang", "Pasar Pariaman"],
        gmapsQuery: "Kopi Ajoe Pariaman",
    },
    {
        code: "PASBAR",
        name: "Pasaman Barat",
        outlets: "4 Titik Gerai",
        role: "Sentra Perkebunan Pasaman",
        areas: ["Simpang Empat", "Ujung Gading", "Sasak", "Kinali"],
        gmapsQuery: "Kopi Ajoe Pasaman Barat",
    },
    {
        code: "L.A",
        name: "Lubuk Alung",
        outlets: "3 Titik Gerai",
        role: "Koridor Jalur Padang-Bukittinggi",
        areas: ["Simpang Lubuk Alung", "Pasar Sentral", "Enam Lingkung"],
        gmapsQuery: "Kopi Ajoe Lubuk Alung",
    },
    {
        code: "BKN",
        name: "Bangkinang",
        outlets: "4 Titik Gerai",
        role: "Gerbang Koridor Kampar",
        areas: ["Pusat Kota Bangkinang", "Simpang Kubu", "Rimbo Panjang"],
        gmapsQuery: "Kopi Ajoe Bangkinang",
    },
    {
        code: "BTS",
        name: "Batusangkar",
        outlets: "4 Titik Gerai",
        role: "Pusat Budaya Luhak Nan Tuo",
        areas: ["Istano Pagaruyung", "Pasar Batusangkar", "Lima Kaum"],
        gmapsQuery: "Kopi Ajoe Batusangkar",
    },
    {
        code: "L.B",
        name: "Lubuk Basung",
        outlets: "3 Titik Gerai",
        role: "Pusat Administrasi Kabupaten Agam",
        areas: ["Simpang Empat Agam", "Pasar Inpres", "Manggopoh"],
        gmapsQuery: "Kopi Ajoe Lubuk Basung",
    },
    {
        code: "SLK",
        name: "Solok",
        outlets: "5 Titik Gerai",
        role: "Lembah Pertanian & Penghasil Kopi",
        areas: ["Pasar Raya Solok", "Koto Baru", "Kupitan", "Simpang Rumbio"],
        gmapsQuery: "Kopi Ajoe Solok",
    },
    {
        code: "THORNS",
        name: "Duri",
        outlets: "4 Titik Gerai",
        role: "Zona Industri Mandau",
        areas: ["Hang Tuah", "Sudirman Duri", "Sebanga"],
        gmapsQuery: "Kopi Ajoe Duri",
    },
    {
        code: "DUMAI",
        name: "Dumai",
        outlets: "4 Titik Gerai",
        role: "Pesisir Pelabuhan Selat Melaka",
        areas: ["Pelintung", "Sukajadi", "Purnama"],
        gmapsQuery: "Kopi Ajoe Dumai",
    },
    {
        code: "LLG",
        name: "Lubuk Linggau",
        isNew: true,
        outlets: "5 Titik Gerai",
        role: "Ekspansi Perdana Luar Sumatera Barat",
        areas: ["Yos Sudarso", "Taba Jemekeh", "Kenanga", "Pasar Pemiri"],
        gmapsQuery: "Kopi Ajoe Lubuk Linggau",
    },
];

const comingSoon = ["Jambi", "Jakarta"];

export default function Locations() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCity, setSelectedCity] = useState<LocationItem>(locations[0]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            id="territory"
            ref={ref}
            className="bg-neutral-950 py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-16"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-red-900/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 flex flex-col items-center"
                >
                    <div className="relative">
                        <h2 className="relative z-10 text-center flex flex-col items-center justify-center">
                            <span className="text-[10rem] sm:text-[14rem] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-sm transform scale-150 opacity-50">
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
                        Redefining tradition. Dari jalanan Sumatera Barat meluas ke seluruh penjuru Sumatera.
                    </p>
                </motion.div>

                <div className="mb-16 relative">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-neutral-800" />
                        <h3 className="text-neutral-500 uppercase tracking-[0.2em] text-sm font-semibold">
                            Our Territory
                        </h3>
                        <div className="h-[1px] w-12 bg-neutral-800" />
                    </div>
                    <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-light mb-12">
                        Pilih kota untuk melihat titik operasional, sebaran gerai, dan navigasi gerobak Kopi Ajoe.
                    </p>

                    <div
                        className="flex flex-wrap justify-center gap-4 relative"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {locations.map((loc, index) => {
                            const isSelected = selectedCity.code === loc.code;
                            return (
                                <motion.button
                                    key={loc.code}
                                    type="button"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{
                                        delay: index * 0.02,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                    onClick={() => setSelectedCity(loc)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    className={cn(
                                        "relative group cursor-pointer overflow-hidden text-left focus:outline-none",
                                        "w-36 h-28 sm:w-44 sm:h-32 rounded-xl",
                                        "bg-neutral-900/50 border transition-all duration-300 ease-out",
                                        "flex flex-col items-center justify-center p-3",
                                        isSelected
                                            ? "border-red-500 bg-neutral-800/90 shadow-[0_0_25px_rgba(220,38,38,0.35)] scale-105 z-20"
                                            : hoveredIndex === index
                                            ? "border-white/20 bg-neutral-800 scale-105 z-10"
                                            : "border-white/5 hover:border-white/10"
                                    )}
                                >
                                    {isSelected && (
                                        <>
                                            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-red-500" />
                                            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-red-500" />
                                        </>
                                    )}

                                    <div className="z-10 flex flex-col items-center">
                                        {loc.isNew && (
                                            <span className="mb-1 text-[9px] font-bold uppercase tracking-widest text-red-500">
                                                New
                                            </span>
                                        )}
                                        <span
                                            className={cn(
                                                "text-2xl sm:text-3xl font-bold tracking-tighter transition-colors duration-300",
                                                isSelected
                                                    ? "text-white"
                                                    : "text-neutral-400 group-hover:text-white"
                                            )}
                                        >
                                            {loc.code}
                                        </span>

                                        <span
                                            className={cn(
                                                "text-[11px] font-mono uppercase tracking-widest mt-1",
                                                isSelected ? "text-red-400 font-semibold" : "text-neutral-500"
                                            )}
                                        >
                                            {loc.name}
                                        </span>
                                    </div>

                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-gradient-to-t from-red-950/30 to-transparent transition-opacity duration-300",
                                            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        )}
                                    />
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-20 text-left">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCity.code}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900/80 border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[90px] rounded-full pointer-events-none" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
                                            {selectedCity.name}
                                        </span>
                                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 border border-red-500/30 bg-red-950/40 px-2.5 py-1 rounded">
                                            {selectedCity.code}
                                        </span>
                                    </div>
                                    <p className="text-neutral-400 text-sm font-light flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-red-500" />
                                        {selectedCity.role}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2 bg-neutral-800/80 border border-white/5 rounded-xl px-4 py-2 text-neutral-200 text-xs font-medium">
                                        <Store className="w-4 h-4 text-red-400" />
                                        <span>{selectedCity.outlets}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-neutral-800/80 border border-white/5 rounded-xl px-4 py-2 text-neutral-200 text-xs font-medium">
                                        <Clock className="w-4 h-4 text-neutral-400" />
                                        <span>07:00 - 22:00 WIB</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                                    Area Operasional & Titik Gerobak Utama
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedCity.areas.map((area) => (
                                        <span
                                            key={area}
                                            className="px-3.5 py-1.5 rounded-lg bg-neutral-950/70 border border-white/10 text-neutral-300 text-xs font-mono"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href={`https://www.google.com/maps/search/${encodeURIComponent(selectedCity.gmapsQuery)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                                >
                                    <span>Lihat di Google Maps</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                                <a
                                    href={`https://wa.me/6281267890123?text=Halo%20Kopi%20Ajoe%2C%20saya%20ingin%20info%20gerai%20wilayah%20${encodeURIComponent(selectedCity.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/10"
                                >
                                    <span>Hubungi Admin Wilayah</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="relative inline-flex group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <div className="relative flex items-center gap-6 bg-neutral-900 rounded-full py-3 px-8 border border-neutral-800 ring-1 ring-white/10">
                        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                            Coming Soon
                        </span>

                        <div className="h-4 w-[1px] bg-neutral-800" />

                        <div className="flex gap-4">
                            {comingSoon.map((city) => (
                                <span
                                    key={city}
                                    className="text-neutral-200 font-mono text-sm tracking-wide flex items-center gap-1"
                                >
                                    {city}
                                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <p className="mt-16 text-xs text-neutral-600 tracking-wide font-mono">
                    Data gerai aktif diverifikasi terpusat dari sistem logistik Kopi Ajoe.
                </p>
            </div>
        </section>
    );
}
