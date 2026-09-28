"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Calendar, Newspaper } from "lucide-react";

interface StoryItem {
    num: string;
    tag: string;
    title: string;
    date: string;
    source: string;
    excerpt: string;
    content: string[];
    sourceUrl: string;
}

const featuredStory: StoryItem = {
    num: "00",
    tag: "Featured Movement",
    title: "Kopi Ajoe: From Padang to Beyond",
    date: "Ags 2026",
    source: "Liputan Khusus Sumbar",
    excerpt: "Perjalanan ekspansi dari gerobak sepeda listrik di jalanan Ranah Minang hingga menjadi gerakan kopi jalanan lintas provinsi.",
    content: [
        "Didirikan oleh Dede Saputra, Kopi Ajoe bermula dari mimpi sederhana untuk menghidupkan ekosistem ekonomi kreatif kerakyatan. Melalui perpaduan cita rasa kopi berkualitas tinggi dengan sistem armada sepeda listrik ramah lingkungan, Kopi Ajoe hadir menyapa masyarakat langsung di titik-titik mobilitas harian.",
        "Kini Kopi Ajoe telah mengoperasikan puluhan titik gerai dan gerobak di berbagai kota di Sumatera Barat, Riau, hingga Sumatera Selatan, didukung rantai pasok terpusat dari pabrik utama di Tanjung Munti, Sungai Beringin, Lima Puluh Kota.",
        "Setiap cangkir yang disajikan merupakan buah kolaborasi nyata antara petani kopi lokal, barista jalanan, dan tim logistik terintegrasi demi mewujudkan kopi berkualitas yang terjangkau bagi semua.",
    ],
    sourceUrl: "https://www.google.com/search?q=Kopi+Ajoe+Padang+Dede+Saputra",
};

const stories: StoryItem[] = [
    {
        num: "01",
        tag: "Expansion",
        title: "Ajoe Arrives in Lubuk Linggau",
        date: "Jul 06, 2026",
        source: "Linggau Pos",
        excerpt: "Dari Padang, Kopi Ajoe merambah Lubuk Linggau dan disambut antusias sebagai magnet baru pecinta kopi.",
        content: [
            "Langkah ekspansi Kopi Ajoe menembus batas provinsi Sumatera Barat dengan diresmikannya titik-titik gerobak kopi di Lubuk Linggau, Sumatera Selatan. Kehadiran Kopi Ajoe langsung mendapat sambutan hangat dari komunitas pecinta kopi setempat.",
            "Dengan mengusung konsep mobilitas tinggi dan harga ramah kantong, kehadiran Kopi Ajoe di Lubuk Linggau menjadi bukti nyata daya saing jenama lokal asal Ranah Minang di kancah regional.",
        ],
        sourceUrl: "https://www.google.com/search?q=Kopi+Ajoe+Lubuk+Linggau+Pos",
    },
    {
        num: "02",
        tag: "People",
        title: "230 People. One Ajoe.",
        date: "Okt 27, 2025",
        source: "Padang Ekspres",
        excerpt: "Di balik setiap cangkir, ada 230 karyawan yang menggerakkan misi ekonomi kreatif dari hulu hingga hilir.",
        content: [
            "Lebih dari sekadar entitas bisnis kopi, Kopi Ajoe adalah wadah pemberdayaan ratusan tenaga kerja muda. Sebanyak 230 karyawan aktif bergerak setiap hari, mulai dari tim sangrai pabrik, mekanik sepeda listrik, pengendara logistik armada, hingga barista garis depan.",
            "Ekosistem gotong royong ini membuktikan bahwa industri kreatif lokal mampu menyerap tenaga kerja dalam jumlah signifikan serta mencetak wirausahawan baru di sektor riil.",
        ],
        sourceUrl: "https://www.google.com/search?q=Kopi+Ajoe+230+Karyawan+Padang+Ekspres",
    },
    {
        num: "03",
        tag: "Coffee",
        title: "From Sumbar to Every Cup",
        date: "Okt 27, 2025",
        source: "Padang Ekspres",
        excerpt: "Sekitar 10 ton biji kopi kering setiap bulan diambil langsung dari petani rakyat Sumatera Barat.",
        content: [
            "Komitmen Kopi Ajoe terhadap kualitas berpijak pada kemitraan erat bersama kelompok tani kopi lokal. Setiap bulan, sekitar 10 ton biji kopi kering diserap langsung dari perkebunan rakyat di lereng pegunungan Sumatera Barat.",
            "Pola penyerapan hasil panen dengan harga adil ini memberikan kepastian pasar bagi para petani sekaligus menjaga standar mutu biji kopi yang diolah secara presisi di pabrik utama Kopi Ajoe.",
        ],
        sourceUrl: "https://www.google.com/search?q=Kopi+Ajoe+Petani+Biji+Kopi+Sumbar",
    },
];

export default function Stories() {
    const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveStory(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (activeStory) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeStory]);

    return (
        <section id="stories" className="relative bg-neutral-950 text-white px-6 md:px-20 py-32 overflow-hidden scroll-mt-16">
            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex flex-col items-center text-center mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-4">
                        From The Road
                    </p>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
                        Stories Behind Every Cup
                    </h2>
                    <p className="mt-6 text-neutral-400 text-lg max-w-2xl font-light">
                        Cerita perjalanan, dedikasi orang-orang, dan rekam jejak Kopi Ajoe di jalanan.
                    </p>
                </div>

                <motion.div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveStory(featuredStory)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setActiveStory(featuredStory);
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="group relative block rounded-3xl overflow-hidden h-[420px] md:h-[520px] border border-white/10 hover:border-red-500/50 cursor-pointer transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-neutral-900 to-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/15 via-transparent to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12 md:p-16">
                        <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-red-400 mb-4">
                            {featuredStory.tag}
                        </span>
                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter max-w-3xl leading-tight mb-4">
                            {featuredStory.title}
                        </h3>
                        <p className="text-neutral-300 text-sm md:text-base max-w-2xl font-light mb-6 line-clamp-2">
                            {featuredStory.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white group-hover:text-red-400 transition-colors">
                            Baca Cerita Lengkap <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {stories.map((s, i) => (
                    <motion.div
                        key={s.num}
                        role="button"
                        tabIndex={0}
                        onClick={() => setActiveStory(s)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setActiveStory(s);
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col justify-between min-h-[300px] hover:border-red-500/50 hover:bg-neutral-900 transition-all duration-300 cursor-pointer"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-5xl font-black text-white/10 tracking-tighter font-mono">
                                    {s.num}
                                </span>
                                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-red-500">
                                    {s.tag}
                                </span>
                            </div>
                            <h4 className="text-2xl font-bold mb-3 leading-tight group-hover:text-white transition-colors">
                                {s.title}
                            </h4>
                            <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                                {s.excerpt}
                            </p>
                        </div>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs text-neutral-500 tracking-widest uppercase font-mono">
                                {s.source}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-red-400 transition-colors">
                                Baca <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {activeStory && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveStory(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 w-full max-w-2xl bg-neutral-900 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[85vh] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 bg-red-950/40 border border-red-500/30 px-2.5 py-1 rounded">
                                        {activeStory.tag}
                                    </span>
                                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                                        <Newspaper className="w-3.5 h-3.5" />
                                        {activeStory.source}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setActiveStory(null)}
                                    className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                                {activeStory.title}
                            </h3>

                            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-6">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{activeStory.date}</span>
                            </div>

                            <div className="space-y-4 text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                                {activeStory.content.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                                <a
                                    href={activeStory.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                                >
                                    <span>Buka Rujukan Liputan</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>

                                <button
                                    type="button"
                                    onClick={() => setActiveStory(null)}
                                    className="px-5 py-2.5 rounded-full bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors border border-white/10 cursor-pointer"
                                >
                                    Tutup
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
