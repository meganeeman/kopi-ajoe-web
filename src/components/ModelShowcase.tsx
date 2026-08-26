"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const models = [
    {
        src: "/images/product/models/Sejuta teman di jalan @kopiajoe 🫶🏻.jpg",
        quote: "Every cup tells a story.",
        author: "Urban Soul",
    },
    {
        src: "/images/product/models/Sejuta teman di jalan @kopiajoe 🫶🏻 (1).jpg",
        quote: "Strangers become friends.",
        author: "Daily Ritual",
    },
    {
        src: "/images/product/models/Sejuta teman di jalan @kopiajoe 🫶🏻 (2).jpg",
        quote: "Fuel for the journey.",
        author: "Street Life",
    },
    {
        src: "/images/product/models/Sejuta teman di jalan @kopiajoe 🫶🏻 (3).jpg",
        quote: "Moments of clarify.",
        author: "Night Shift",
    },
    {
        src: "/images/product/models/Sejuta teman di jalan @kopiajoe 🫶🏻 (4).jpg",
        quote: "Community in the making.",
        author: "Ajoe Collective",
    },
];

export default function ModelShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Horizontal scroll effect based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const smoothX = useSpring(x, { damping: 20, stiffness: 90 });
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[150vh] bg-neutral-950 flex flex-col justify-center overflow-hidden py-24"
        >
            {/* Cinematic Header */}
            <div className="container mx-auto px-6 mb-24 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mx-auto max-w-4xl"
                >

                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                        Sejuta Teman <br />
                        <span className="text-neutral-500">Di Jalan.</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                        It's not just about the coffee. It's about the connections brewed in every cup.
                        Real people, real stories, one unparalleled vibe.
                    </p>
                </motion.div>
            </div>

            {/* Horizontal Moving Strip */}
            <div className="w-full relative">
                <motion.div
                    style={{ x: smoothX, opacity }}
                    className="flex gap-8 px-6 w-max"
                >
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[450px] aspect-[3/4] group overflow-hidden rounded-md bg-neutral-900"
                        >
                            <Image
                                src={model.src}
                                alt="Kopi Ajoe Model"
                                fill
                                sizes="(max-width: 768px) 300px, 450px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-2xl font-serif italic text-white mb-2">"{model.quote}"</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Ambient decorative text */}
            <div className="absolute bottom-12 left-0 w-full overflow-hidden pointer-events-none opacity-10">
                <h3 className="text-[12rem] text-white font-black whitespace-nowrap animate-marquee">
                    COMMUNITY CULTURE LIFESTYLE
                </h3>
            </div>
        </section>
    );
}
