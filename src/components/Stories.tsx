"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stories = [
    {
        num: "01",
        tag: "Expansion",
        title: "Ajoe Arrives in Lubuk Linggau",
        date: "Jul 06, 2026",
        excerpt:
            "Dari Padang, Kopi Ajoe merambah Lubuk Linggau dan disambut antusias sebagai magnet baru pecinta kopi.",
        source: "Linggau Pos",
    },
    {
        num: "02",
        tag: "People",
        title: "230 People. One Ajoe.",
        date: "Oct 27, 2025",
        excerpt:
            "Di balik setiap cangkir, ada 230 karyawan yang menggerakkan misi ekonomi kreatif dari hulu hingga hilir.",
        source: "Padang Ekspres",
    },
    {
        num: "03",
        tag: "Coffee",
        title: "From Sumbar to Every Cup",
        date: "Oct 27, 2025",
        excerpt:
            "Sekitar 10 ton biji kopi kering setiap bulan diambil langsung dari petani rakyat Sumatera Barat.",
        source: "Padang Ekspres",
    },
];

export default function Stories() {
    return (
        <section className="relative bg-neutral-950 text-white px-6 md:px-20 py-32 overflow-hidden">
            {/* Featured */}
            <div className="max-w-7xl mx-auto mb-24">
                <div className="flex flex-col items-center text-center mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-4">
                        From The Road
                    </p>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
                        Stories Behind Every Cup
                    </h2>
                    <p className="mt-6 text-neutral-400 text-lg max-w-2xl font-light">
                        Stories, people, and moments behind every cup of Ajoe.
                    </p>
                </div>

                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="group relative block rounded-3xl overflow-hidden h-[420px] md:h-[520px] border border-white/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-neutral-900 to-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-4">
                            Featured Story
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter max-w-3xl leading-tight">
                            Kopi Ajoe: From Padang to Beyond
                        </h3>
                        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white group-hover:text-red-400 transition-colors">
                            Read Story <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </div>
                </motion.a>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {stories.map((s, i) => (
                    <motion.a
                        key={s.num}
                        href="#"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col min-h-[280px] hover:border-red-500/50 hover:bg-neutral-900 transition-colors"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-5xl font-black text-white/10 tracking-tighter">{s.num}</span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">{s.tag}</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-3 leading-tight">{s.title}</h4>
                        <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                            {s.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-xs text-neutral-500 tracking-widest uppercase">{s.date}</span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-red-400 transition-colors">
                                Read <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>

            <p className="max-w-7xl mx-auto mt-12 text-xs text-neutral-600 tracking-wide">
                Sumber: Padang Ekspres (27 Okt 2025), Linggau Pos (06 Jul 2026).
            </p>
        </section>
    );
}
