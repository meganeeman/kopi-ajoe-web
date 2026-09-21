"use client";

import { useInView, animate, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { label: "Team Members", value: 230, suffix: "+" },
    { label: "Mobile Coffee Units", value: 200, suffix: "+" },
    { label: "Coffee Beans / Month", value: 10, suffix: "T" },
    { label: "Cities Reached", value: 7, suffix: "+" },
];

const Counter = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            const node = ref.current;
            if (!node) return;

            const controls = animate(0, value, {
                duration: 2,
                ease: [0.76, 0, 0.24, 1],
                onUpdate: (latest) => {
                    node.textContent = Math.floor(latest).toLocaleString();
                }
            })
            return () => controls.stop();
        }
    }, [inView, value]);

    return <span ref={ref}>0</span>
}

export default function Stats() {
    return (
        <section className="min-h-[50vh] bg-black text-white px-6 md:px-20 py-24 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-2">
                            <Counter value={stat.value} />{stat.suffix}
                        </div>
                        <div className="text-neutral-500 uppercase tracking-widest text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
