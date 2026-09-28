"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Apple, Play, ArrowUpRight, MessageCircle, Clock } from "lucide-react";
import { APP_CONFIG } from "@/config/appConfig";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";

interface AppDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AppDownloadModal({ isOpen, onClose }: AppDownloadModalProps) {
    const { device } = useDeviceDetection();

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleClose = (e?: React.MouseEvent | React.TouchEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                    onClick={() => handleClose()}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer pointer-events-none"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-neutral-900 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl text-white my-auto pointer-events-auto"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="sticky top-0 z-30 bg-neutral-900/95 backdrop-blur-md pb-4 pt-1 -mt-1 flex items-start justify-between gap-4 border-b border-white/5 mb-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-red-500 bg-red-950/50 border border-red-500/30 px-3 py-1 rounded-full">
                                    Aplikasi Resmi Kopi Ajoe
                                </span>
                                {device !== "unknown" && (
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                                        Perangkat: {device === "ios" ? "Apple iOS" : device === "android" ? "Android" : "Desktop"}
                                    </span>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleClose}
                                onTouchEnd={handleClose}
                                className="w-11 h-11 min-w-[44px] min-h-[44px] shrink-0 rounded-full bg-neutral-800/90 hover:bg-neutral-700 active:bg-neutral-600 active:scale-95 text-neutral-300 hover:text-white transition-all cursor-pointer border border-white/15 flex items-center justify-center touch-manipulation z-50 pointer-events-auto shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                aria-label="Tutup Modal"
                            >
                                <X className="w-5 h-5 pointer-events-none" />
                            </button>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">
                            Pesan Antar & Titik Gerobak Real-Time
                        </h3>

                        <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                            Nikmati kemudahan pesan antar tanpa markup harga pihak ketiga dan pantau posisi gerobak keliling Kopi Ajoe terdekat secara akurat di kotamu.
                        </p>

                        {!APP_CONFIG.isLive && (
                            <div className="bg-neutral-950/80 border border-red-500/30 rounded-2xl p-4 sm:p-5 mb-6 relative overflow-hidden">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-xl bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                                                Peluncuran Serentak Segera Hadir
                                            </p>
                                        </div>
                                        <p className="text-xs text-neutral-400 leading-relaxed">
                                            Versi iOS saat ini dalam tahap peninjauan Apple App Store. Versi Android akan dipublikasikan serentak agar seluruh pengguna dapat menikmati pengalaman yang sama secara bersamaan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="bg-neutral-950/60 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                            <Apple className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 border border-white/10 px-2 py-0.5 rounded">
                                            iOS / iPadOS
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-white text-base mb-1">Apple App Store</h4>
                                    <p className="text-xs text-neutral-400 mb-4">
                                        {APP_CONFIG.isLive ? "Tersedia untuk iPhone & iPad" : "Tahap Akhir Review Apple"}
                                    </p>
                                </div>

                                {APP_CONFIG.isLive ? (
                                    <a
                                        href={APP_CONFIG.appStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                                    >
                                        <span>Download App</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="w-full py-2.5 rounded-xl bg-neutral-800/80 text-neutral-500 text-xs font-mono uppercase tracking-wider cursor-not-allowed border border-white/5"
                                    >
                                        Segera di App Store
                                    </button>
                                )}
                            </div>

                            <div className="bg-neutral-950/60 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                            <Play className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                                        </div>
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 border border-white/10 px-2 py-0.5 rounded">
                                            Android OS
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-white text-base mb-1">Google Play Store</h4>
                                    <p className="text-xs text-neutral-400 mb-4">
                                        {APP_CONFIG.isLive ? "Tersedia untuk Android Phone & Tablet" : "Siap Rilis Serentak"}
                                    </p>
                                </div>

                                {APP_CONFIG.isLive ? (
                                    <a
                                        href={APP_CONFIG.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                                    >
                                        <span>Download Play Store</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="w-full py-2.5 rounded-xl bg-neutral-800/80 text-neutral-500 text-xs font-mono uppercase tracking-wider cursor-not-allowed border border-white/5"
                                    >
                                        Antrean Rilis Serentak
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                                        Mau Pesan Antar Sekarang?
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        Layanan pesan antar tetap aktif via WhatsApp Official selama masa peluncuran.
                                    </p>
                                </div>
                                <a
                                    href={APP_CONFIG.whatsappOrderUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-lg shadow-emerald-950/40"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Pesan via WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
