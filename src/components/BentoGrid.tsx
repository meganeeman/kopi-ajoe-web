"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Flame, Milk, Sparkles, Leaf, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface BentoItem {
    title: string;
    badge: string;
    description: string;
    colSpan: string;
    image: string;
    icon: React.ReactNode;
}

const items: BentoItem[] = [
    {
        title: "Ajoe Strong",
        badge: "Top Coffee Series",
        description: "Racikan kopi berani dengan karakter espresso mantap, susu gurih seimbang, dan dorongan fokus maksimal untuk teman di jalan.",
        colSpan: "col-span-12 lg:col-span-7",
        image: "/images/STRONG.png",
        icon: <Flame className="w-6 h-6 text-red-500" />,
    },
    {
        title: "Ajoe Soft",
        badge: "Everyday Favorite",
        description: "Cita rasa kopi lembut dan creamy yang ramah di lambung, teman santai sempurna di setiap momen perjalanan.",
        colSpan: "col-span-12 lg:col-span-5",
        image: "/images/SOFT.png",
        icon: <Milk className="w-6 h-6 text-amber-200" />,
    },
    {
        title: "Ajoe Butter",
        badge: "Signature Icon",
        description: "Menu legendaris Kopi Ajoe dengan sentuhan salted butter gurih yang menyatu sempurna dengan aroma kopi sangrai lokal Minang.",
        colSpan: "col-span-12 lg:col-span-5",
        image: "/images/BUTTER.png",
        icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    },
    {
        title: "Ajoe Greentea",
        badge: "Top Non-Coffee",
        description: "Harmoni bubuk teh hijau matcha pilihan berpadu susu segar dingin yang manis lembut, menenangkan, dan menyegarkan.",
        colSpan: "col-span-12 lg:col-span-7",
        image: "/images/MATCHA.png",
        icon: <Leaf className="w-6 h-6 text-emerald-400" />,
    },
];

export default function BentoGrid() {
    return (
        <section
            id="what-makes-ajoe"
            className="relative z-20 min-h-screen bg-black text-white px-6 md:px-20 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center scroll-mt-24"
        >
            <div className="max-w-7xl mx-auto w-full mb-12 md:mb-16 relative z-10">
                <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-red-500 mb-3">
                    Top Four Signature
                </p>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-tight">
                        What Makes Ajoe
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-md font-light leading-relaxed">
                        Empat racikan andalan paling dicari yang mendefinisikan standar rasa Kopi Ajoe di seluruh jalanan Sumatera.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto w-full relative z-10">
                {items.map((item, i) => (
                    <motion.a
                        key={item.title}
                        href={`https://wa.me/628212691657?text=Halo%20Kopi%20Ajoe%2C%20saya%20ingin%20memesan%20${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 0.99 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={cn(
                            "group relative min-h-[380px] sm:min-h-[420px] rounded-3xl overflow-hidden cursor-pointer bg-neutral-900/80 border border-white/10 hover:border-red-500/50 transition-all duration-500 flex flex-col justify-between p-8 sm:p-12 shadow-2xl",
                            item.colSpan
                        )}
                    >
                        <div className="absolute right-0 bottom-0 top-0 w-1/2 sm:w-5/12 flex items-center justify-center p-4 pointer-events-none">
                            <div className="relative w-full h-full max-h-[340px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain object-bottom opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-transparent pointer-events-none" />

                        <div className="relative z-10 flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-red-500 bg-red-950/40 border border-red-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                                    {item.badge}
                                </span>
                            </div>

                            <span className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </div>

                        <div className="relative z-10 max-w-sm sm:max-w-md pt-16">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3 group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
