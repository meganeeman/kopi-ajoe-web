"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const content = "Didirikan oleh Dede Saputra, Kopi Ajoe bermula dari mimpi sederhana untuk menghidupkan ekonomi kreatif. Kini, dengan ratusan armada sepeda listrik dan dukungan penuh petani lokal Sumatera Barat, kami mengolah kopi dari hulu hingga hilir. Setiap cangkir adalah buah kolaborasi yang memberdayakan, menyatukan kualitas rasa dengan misi sosial yang nyata.";

const Word = ({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity }} className="mr-3 relative">
            {children}
        </motion.span>
    );
};

import Background3D from "./Background3D";

export default function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"], // Start fading in when top of section hits bottom of screen
    });

    const words = content.split(" ");

    return (
        <section ref={container} className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden">
            <Background3D />
            <div className="relative z-10 max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] flex flex-wrap justify-center text-center">
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
        </section>
    );
}
