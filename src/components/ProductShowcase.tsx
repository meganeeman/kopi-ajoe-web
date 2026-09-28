"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductItem {
    id: string;
    src: string;
    title: string;
    category: string;
    filterCategory: "all" | "coffee" | "non-coffee" | "food";
    description: string;
    character: string;
}

const products: ProductItem[] = [
    {
        id: "strong",
        src: "/images/STRONG.png",
        title: "Ajoe Strong",
        category: "Coffee",
        filterCategory: "coffee",
        description: "Espresso mantap dengan sentuhan susu gurih dan cita rasa kopi yang dominan, diracik khusus untuk pecinta kopi sejati yang butuh fokus tinggi.",
        character: "Bold & Intense",
    },
    {
        id: "soft",
        src: "/images/SOFT.png",
        title: "Ajoe Soft",
        category: "Coffee",
        filterCategory: "coffee",
        description: "Perpaduan harmonis espresso ringan dengan kelembutan susu segar pilihan, pas dinikmati santai kapan saja di jalan.",
        character: "Creamy & Smooth",
    },
    {
        id: "butter",
        src: "/images/BUTTER.png",
        title: "Ajoe Butter",
        category: "Signature Series",
        filterCategory: "coffee",
        description: "Menu ikonik Kopi Ajoe dengan sentuhan salted butter gurih yang menyatu sempurna dengan aroma kopi sangrai lokal khas Minang.",
        character: "Rich & Buttery",
    },
    {
        id: "americano",
        src: "/images/AMERICANO.png",
        title: "Americano",
        category: "Black Coffee",
        filterCategory: "coffee",
        description: "Ekstraksi espresso murni biji kopi Sumatera Barat tanpa gula, menghadirkan aroma tanah vulkanik dan acidity segar yang otentik.",
        character: "Clean & Crisp",
    },
    {
        id: "chocolate",
        src: "/images/CHOCOLATE.png",
        title: "Chocolate Ajoe",
        category: "Non-Coffee",
        filterCategory: "non-coffee",
        description: "Cokelat pekat pilihan dengan tekstur kental dan rasa manis legit yang memanjakan di setiap tegukan.",
        character: "Deep Cocoa",
    },
    {
        id: "matcha",
        src: "/images/MATCHA.png",
        title: "Ajoe Greentea",
        category: "Non-Coffee",
        filterCategory: "non-coffee",
        description: "Racikan bubuk teh hijau matcha premium berpadu susu segar dingin yang menenangkan dengan sentuhan manis pas di lidah.",
        character: "Earthy & Sweet",
    },
    {
        id: "mangga",
        src: "/images/MANGGA.png",
        title: "Mangga Ajoe",
        category: "Refreshing",
        filterCategory: "non-coffee",
        description: "Sensasi buah mangga tropis segar yang manis semerbak, pelepas dahaga terbaik di tengah terik perjalanan.",
        character: "Fruity & Fresh",
    },
    {
        id: "roti",
        src: "/images/ROTI.png",
        title: "Roti Kopi Ajoe",
        category: "Food & Snack",
        filterCategory: "food",
        description: "Roti beraroma kopi khas dengan kerak renyah di luar dan isian mentega gurih lumer di dalam, teman sempurna secangkir kopi.",
        character: "Warm & Crunchy",
    },
];

const categoryTabs = [
    { id: "all", label: "Semua Racikan" },
    { id: "coffee", label: "Coffee Series" },
    { id: "non-coffee", label: "Non-Coffee" },
    { id: "food", label: "Food & Snack" },
];

const ProductCard = ({ product, index }: { product: ProductItem; index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            className="group relative w-full sm:w-[320px] md:w-[350px] aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900/90 border border-white/10 hover:border-red-500/50 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 shadow-2xl"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              550px circle at ${mouseX}px ${mouseY}px,
              rgba(220, 38, 38, 0.18),
              transparent 80%
            )
          `,
                }}
            />

            <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                    <Image
                        src={product.src}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className={cn(
                            "transition-transform duration-700 group-hover:scale-105",
                            product.id === "roti"
                                ? "object-contain object-center scale-90 group-hover:scale-95"
                                : "object-contain object-center"
                        )}
                        priority={index < 2}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="relative z-20 flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-red-500 uppercase tracking-widest bg-black/75 border border-red-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                    {product.category}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {product.character}
                </span>
            </div>

            <div className="relative z-20">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2 leading-none drop-shadow-md">
                    {product.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-2 drop-shadow">
                    {product.description}
                </p>

                <a
                    href={`https://wa.me/628212691657?text=Halo%20Kopi%20Ajoe%2C%20saya%20ingin%20memesan%20menu%20${encodeURIComponent(product.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-white/20 backdrop-blur-md"
                >
                    <span>Pesan Menu Ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </div>
        </motion.div>
    );
};

export default function ProductShowcase() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter((p) => p.filterCategory === selectedCategory);

    return (
        <section
            id="products"
            ref={containerRef}
            className="bg-neutral-950 py-32 overflow-hidden relative scroll-mt-16"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

            <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-black text-center text-white/5 uppercase tracking-tighter"
                >
                    Menu
                </motion.h2>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight text-center">
                        Racikan <span className="text-red-600">Ajoe</span>
                    </h2>
                </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2.5 px-4 mb-16 relative z-20 max-w-4xl mx-auto">
                {categoryTabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setSelectedCategory(tab.id)}
                        className={cn(
                            "px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border cursor-pointer",
                            selectedCategory === tab.id
                                ? "bg-white text-black border-white font-bold shadow-lg"
                                : "bg-neutral-900/60 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 relative z-10 max-w-7xl mx-auto">
                {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>

            <motion.div
                style={{ x: x1 }}
                className="absolute top-1/4 -left-24 text-[10rem] font-black text-white/5 whitespace-nowrap pointer-events-none"
            >
                CRAFTED FOR THE BOLD
            </motion.div>
            <motion.div
                style={{ x: x2 }}
                className="absolute bottom-1/4 -right-24 text-[10rem] font-black text-white/5 whitespace-nowrap pointer-events-none"
            >
                TASTE THE LEGEND
            </motion.div>
        </section>
    );
}
