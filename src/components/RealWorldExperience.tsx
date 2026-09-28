"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function RealWorldExperience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10% 0px -10% 0px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
    const yText = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);

    const smoothScale = useSpring(scale, { damping: 15, stiffness: 100 });

    return (
        <section
            ref={containerRef}
            className="relative h-[120vh] w-full bg-neutral-950 overflow-hidden flex items-center justify-center"
        >
            <motion.div
                style={{ scale: smoothScale, opacity }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <Image
                    src="/images/product/produccctt.jpg"
                    alt="Real World Experience"
                    fill
                    className="object-cover object-center filter grayscale brightness-50 contrast-125"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 opacity-90" />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                <motion.div
                    style={{ y: yText }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "100px" } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[2px] bg-red-500 mb-6"
                        />
                        <span className="text-red-500 font-mono text-sm tracking-[0.2em] uppercase">
                            The Experience
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        More Than <br />
                        <span className="italic font-serif text-neutral-400">Just Coffee.</span>
                    </h2>

                    <p className="text-lg text-neutral-300 max-w-lg font-light leading-relaxed">
                        It&apos;s the weight of the cup in your hand. The steam rising against the city lights.
                        The quiet moment before the chaos begins. When you hold it, you&apos;re not just
                        holding a drink—you&apos;re holding a standard.
                    </p>

                    <div className="flex items-center gap-4 text-white/50 text-xs font-mono tracking-widest uppercase mt-12">
                        <ArrowDown className="animate-bounce w-4 h-4" />
                        <span>Reality Awaits</span>
                    </div>
                </motion.div>

                <div className="hidden lg:block" />
            </div>

            <motion.div
                style={{ x: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                className="absolute bottom-24 right-12 z-20 text-right hidden md:block"
            >
                <h3 className="text-9xl font-black text-white/5 uppercase tracking-tighter leading-none">
                    Real
                </h3>
                <h3 className="text-9xl font-black text-white/5 uppercase tracking-tighter leading-none">
                    World
                </h3>
            </motion.div>
        </section>
    );
}
