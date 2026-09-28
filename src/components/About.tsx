"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { Coffee, Bike, Users2 } from "lucide-react";

const Background3D = dynamic(() => import("./Background3D"), { ssr: false });

const content = "Didirikan oleh Dede Saputra, Kopi Ajoe bermula dari mimpi sederhana untuk menghidupkan ekonomi kreatif. Kini, dengan ratusan armada sepeda listrik dan dukungan penuh petani lokal Sumatera Barat, kami mengolah kopi dari hulu hingga hilir. Setiap cangkir adalah buah kolaborasi yang memberdayakan, menyatukan kualitas rasa dengan misi sosial yang nyata.";

const Word = ({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <motion.span style={{ opacity }} className="mr-2.5 sm:mr-3 relative inline-block">
            {children}
        </motion.span>
    );
};

const pillars = [
    {
        icon: Coffee,
        title: "Biji Kopi Rakyat",
        desc: "Menyerap langsung hasil panen kelompok tani lokal Sumatera Barat dengan standar sangrai presisi.",
    },
    {
        icon: Bike,
        title: "Armada Listrik",
        desc: "Ratusan unit sepeda listrik ramah lingkungan yang lincah menyapa pelanggan di berbagai simpul jalanan.",
    },
    {
        icon: Users2,
        title: "230+ Mitra Kerja",
        desc: "Membuka lapangan kerja riil bagi barista muda, mekanik armada, hingga staf produksi hulu ke hilir.",
    },
];

export default function About() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const words = content.split(" ");

    return (
        <section
            id="about"
            ref={container}
            className="relative min-h-screen bg-black text-white px-6 md:px-20 py-32 overflow-hidden scroll-mt-16 flex flex-col justify-center"
        >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <Suspense fallback={null}>
                    <Background3D />
                </Suspense>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-red-500 mb-3">
                        Our Story
                    </p>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                        Lahir Dari Jalanan, <br />
                        <span className="text-neutral-500">Bertumbuh Bersama.</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.3] flex flex-wrap justify-center text-center mb-24 drop-shadow-xl text-neutral-100">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return (
                            <Word key={i} range={[start, end]} progress={scrollYProgress}>
                                {word}
                            </Word>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="p-8 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
                            >
                                <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-500 mb-6">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm font-light leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
