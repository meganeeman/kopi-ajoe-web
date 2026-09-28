"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, ShoppingBag, Smartphone } from "lucide-react";

export default function CTA() {
    return (
        <section className="min-h-[80vh] relative bg-white text-black flex items-center justify-center overflow-hidden py-24 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-100 to-white" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-red-600 mb-6">
                    Ready to Order
                </p>

                <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-black leading-none">
                    YOUR DAILY <br /> RITUAL
                </h2>

                <p className="text-neutral-700 text-base sm:text-lg max-w-xl mx-auto font-light mb-12">
                    Nikmati racikan otentik Kopi Ajoe sekarang juga langsung dari gerobak jalanan terdekat atau pesan antar cepat.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <motion.a
                        href="https://wa.me/6281267890123?text=Halo%20Kopi%20Ajoe%2C%20saya%20ingin%20memesan%20kopi"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="group relative inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-black text-white text-base sm:text-xl font-semibold uppercase tracking-wider overflow-hidden shadow-2xl transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                            <span>Shop Now</span>
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </motion.a>

                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 pt-4 text-xs font-mono uppercase tracking-wider text-neutral-600">
                        <a
                            href="https://wa.me/6281267890123?text=Halo%20Kopi%20Ajoe%2C%20saya%20ingin%20pesan%20antar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-black transition-colors border-b border-black/20 pb-0.5"
                        >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp CS Fast Response</span>
                        </a>

                        <span className="hidden sm:inline text-neutral-400">•</span>

                        <a
                            href="https://food.grab.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-black transition-colors border-b border-black/20 pb-0.5"
                        >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>GrabFood / Online Delivery</span>
                        </a>

                        <span className="hidden sm:inline text-neutral-400">•</span>

                        <a
                            href="#territory"
                            className="inline-flex items-center gap-1.5 hover:text-black transition-colors border-b border-black/20 pb-0.5"
                        >
                            <Smartphone className="w-3.5 h-3.5" />
                            <span>Titik Gerobak Jalanan</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
