"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Coffee, Milk, Droplets, Bike } from "lucide-react";
import Image from "next/image";

const items = [
    {
        title: "Kopi Susu Butter",
        description: "A distinctive favorite with a rich, buttery character.",
        colSpan: "col-span-12 md:col-span-8",
        image: "/images/menu-butter.png",
        icon: <Coffee className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
    {
        title: "Kopi Susu Gula Aren",
        description: "Balanced coffee with the sweetness of pure palm sugar.",
        colSpan: "col-span-12 md:col-span-4",
        image: "/images/menu-gulaaren.png",
        icon: <Milk className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
    {
        title: "Kopi Karamel",
        description: "Smooth coffee with a sweet caramel finish.",
        colSpan: "col-span-12 md:col-span-4",
        image: "/images/menu-karamel.png",
        icon: <Droplets className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
    {
        title: "Coffee On The Move",
        description: "Bringing Ajoe coffee closer to people, wherever they are.",
        colSpan: "col-span-12 md:col-span-8",
        image: "/images/menu-move.png",
        icon: <Bike className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
];

export default function BentoGrid() {
    return (
        <section className="min-h-screen bg-black text-white px-6 md:px-20 py-24 flex flex-col justify-center">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">What Makes Ajoe</h2>
            </div>

            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto w-full">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={cn(
                            "group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer",
                            item.colSpan
                        )}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between p-8 md:p-12">
                            <div>
                                {/* Top Content if any */}
                            </div>
                            <div>
                                {item.icon}
                                <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-neutral-300 text-lg group-hover:text-white transition-colors">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
