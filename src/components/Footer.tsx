"use client";

import React from "react";
import { ArrowUpRight, MapPin, Mail, Phone, Instagram, Music } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-white px-6 md:px-20 pt-24 pb-12 relative overflow-hidden scroll-mt-16">
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5">
                        <span className="text-3xl font-black tracking-tighter uppercase block mb-4">
                            Kopi Ajoe
                        </span>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm mb-6">
                            Gerakan kopi jalanan modern yang memberdayakan ratusan armada sepeda listrik dan menyerap hasil panen petani lokal Sumatera Barat dari hulu hingga ke cangkirmu.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://instagram.com/kopiajoe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-500 hover:bg-neutral-900 transition-all"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://tiktok.com/@kopiajoe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-500 hover:bg-neutral-900 transition-all"
                            >
                                <Music className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <p className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-4">
                            Pabrik Pusat & Distribusi
                        </p>
                        <div className="space-y-3 text-sm text-neutral-400 font-light">
                            <p className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-1" />
                                <span>
                                    Jorong Tanjung Munti, Kenagarian Sungai Beringin, Kec. Payakumbuh, Kab. Lima Puluh Kota, Sumatera Barat
                                </span>
                            </p>
                            <p className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                                <a href="https://wa.me/628212691657" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    +62 821-2691-657 (Hotline / CS)
                                </a>
                            </p>
                            <p className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                                <a href="mailto:admin@kopiajoe.com" className="hover:text-white transition-colors">
                                    admin@kopiajoe.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-4">
                            Navigasi Singkat
                        </p>
                        <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-neutral-400">
                            <li>
                                <a href="#hero" className="hover:text-white transition-colors flex items-center justify-between">
                                    <span>Beranda Utama</span>
                                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white transition-colors flex items-center justify-between">
                                    <span>Cerita Ajoe</span>
                                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                                </a>
                            </li>
                            <li>
                                <a href="#products" className="hover:text-white transition-colors flex items-center justify-between">
                                    <span>Katalog Racikan</span>
                                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                                </a>
                            </li>
                            <li>
                                <a href="#territory" className="hover:text-white transition-colors flex items-center justify-between">
                                    <span>Wilayah Operasional</span>
                                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                                </a>
                            </li>
                            <li>
                                <a href="#stories" className="hover:text-white transition-colors flex items-center justify-between">
                                    <span>Liputan & Berita</span>
                                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                    <div className="text-xs text-neutral-500 space-y-1 text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Kopi Ajoe Indonesia. All rights reserved.</p>
                        <p className="flex flex-wrap justify-center md:justify-start gap-4 pt-1">
                            <a href="/privacy-policy" className="hover:text-white transition-colors underline underline-offset-4">
                                Kebijakan Privasi
                            </a>
                            <a href="/support" className="hover:text-white transition-colors underline underline-offset-4">
                                Pusat Bantuan
                            </a>
                        </p>
                    </div>

                    <h1 className="text-[14vw] md:text-[12vw] leading-none font-black tracking-tighter text-white/5 select-none pointer-events-none">
                        KOPI AJOE
                    </h1>
                </div>
            </div>
        </footer>
    );
}
