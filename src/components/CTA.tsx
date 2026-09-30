"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Smartphone, Apple, Play, Compass, Download, TrendingUp } from "lucide-react";
import { APP_CONFIG } from "@/config/appConfig";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import AppDownloadModal from "./AppDownloadModal";

export default function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { device } = useDeviceDetection();

    const handleDownloadClick = () => {
        if (!APP_CONFIG.isLive) {
            setIsModalOpen(true);
            return;
        }

        if (device === "ios") {
            window.open(APP_CONFIG.appStoreUrl, "_blank");
        } else if (device === "android") {
            window.open(APP_CONFIG.playStoreUrl, "_blank");
        } else {
            setIsModalOpen(true);
        }
    };

    const getDeviceLabel = () => {
        if (device === "ios") return "Download on App Store";
        if (device === "android") return "Get it on Google Play";
        return "Download Kopi Ajoe App";
    };

    const renderDeviceIcon = () => {
        if (device === "ios") return <Apple className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
        if (device === "android") return <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />;
        return <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />;
    };

    return (
        <>
            <section className="min-h-[85vh] relative bg-white text-black flex items-center justify-center overflow-hidden py-24 px-6">
                <div className="absolute inset-0 bg-linear-to-br from-neutral-200 via-neutral-100 to-white" />

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-red-600">
                            Aplikasi Kopi Ajoe Customer
                        </p>
                    </div>

                    <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-black leading-none">
                        YOUR DAILY <br /> RITUAL
                    </h2>

                    <p className="text-neutral-700 text-base sm:text-lg max-w-xl mx-auto font-light mb-12">
                        Pesan antar langsung tanpa perantara pihak ketiga dan lacak titik gerobak jalanan terdekat secara real-time lewat Aplikasi Resmi Kopi Ajoe.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
                            <motion.button
                                type="button"
                                onClick={handleDownloadClick}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 rounded-full bg-black text-white text-sm sm:text-base font-semibold uppercase tracking-wider overflow-hidden shadow-2xl transition-all w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                                    {renderDeviceIcon()}
                                    <span>{getDeviceLabel()}</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </motion.button>

                            <motion.a
                                href={APP_CONFIG.whatsappOrderUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black border border-black/15 text-sm sm:text-base font-semibold uppercase tracking-wider shadow-sm transition-all w-full sm:w-auto"
                            >
                                <MessageCircle className="w-4 h-4 text-emerald-600" />
                                <span>Pesan via WhatsApp</span>
                            </motion.a>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 pt-6 text-xs font-mono uppercase tracking-wider text-neutral-600">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-1.5 hover:text-black transition-colors border-b border-black/20 pb-0.5"
                            >
                                <Smartphone className="w-3.5 h-3.5 text-red-600" />
                                <span>Aplikasi Kopi Ajoe (Delivery & Live Cart)</span>
                            </button>

                            <span className="hidden sm:inline text-neutral-400">•</span>

                            <a
                                href={APP_CONFIG.whatsappOrderUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 hover:text-black transition-colors border-b border-black/20 pb-0.5"
                            >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>WhatsApp CS Fast Response</span>
                            </a>

                            <span className="hidden sm:inline text-neutral-400">•</span>

                            <a
                                href="#territory"
                                className="inline-flex items-center gap-1.5 hover:text-black transition-colors border-b border-black/20 pb-0.5"
                            >
                                <Compass className="w-3.5 h-3.5" />
                                <span>Titik Gerobak Jalanan</span>
                            </a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-12 w-full max-w-2xl bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 text-left shadow-2xl border border-neutral-800 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-2 max-w-md">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-mono uppercase tracking-wider font-semibold">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        <span>Peluang Kemitraan &amp; Investasi</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                                        Tertarik Menjadi Mitra Kopi Ajoe?
                                    </h3>
                                    <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                                        Pelajari skema bagi hasil, proyeksi balik modal (ROI), dan spesifikasi armada gerobak keliling listrik kami melalui proposal bisnis resmi.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                                    <motion.a
                                        href="/proposal-bisnis-kopi-ajoe.pdf"
                                        download="Proposal Bisnis Kopi Ajoe.pdf"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all text-center"
                                    >
                                        <Download className="w-4 h-4 stroke-[2.5]" />
                                        <span>Unduh Proposal (PDF)</span>
                                    </motion.a>

                                    <a
                                        href="https://wa.me/628212691657?text=Halo%20Admin%20Kopi%20Ajoe,%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20mengenai%20kemitraan%20Kopi%20Ajoe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors text-center"
                                    >
                                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Tanya via WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AppDownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
