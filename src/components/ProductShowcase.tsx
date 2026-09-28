"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProductItem {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
    character: string;
}

const products: ProductItem[] = [
    {
        id: 1,
        src: "/images/product/0a59bc1f-d762-4c86-b0d1-9c093c40353c.jpeg",
        title: "Kopi Susu Butter",
        category: "Signature Series",
        description: "Karakter khas yang creamy dengan sentuhan butter yang gurih dan aroma panggang berani.",
        character: "Creamy & Bold",
    },
    {
        id: 2,
        src: "/images/product/8a93d9f2-b6f6-4334-a1d6-85d03af1c314.jpeg",
        title: "Kopi Susu Gula Aren",
        category: "Fan Favorite",
        description: "Keseimbangan presisi espresso lokal dengan manis legitnya gula aren asli Sumatera Barat.",
        character: "Balanced Sweet",
    },
    {
        id: 3,
        src: "/images/product/9e55483b-7fa3-45b8-9436-eb2140edd63b.jpeg",
        title: "Kopi Karamel",
        category: "Sweet Series",
        description: "Tekstur lembut berpadu aroma karamel kental yang memanjakan lidah hingga tegukan terakhir.",
        character: "Smooth & Rich",
    },
    {
        id: 4,
        src: "/images/product/b9571b8f-4e34-4e30-b247-37887ea65686.jpeg",
        title: "Kopi Susu Original",
        category: "Classic",
        description: "Cita rasa otentik kopi jalanan Ranah Minang, kuat, jujur, dan membangkitkan fokus.",
        character: "Strong & Authentic",
    },
    {
        id: 5,
        src: "/images/product/d0c10c83-c0b2-4cd7-b7bb-3ac38c8f2aed.jpeg",
        title: "Es Kopi Ajoe",
        category: "Refreshing",
        description: "Racikan dingin andalan teman di jalan yang menyegarkan di bawah terik matahari Sumatera.",
        character: "Cold & Energizing",
    },
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
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            className="group relative w-full sm:w-[320px] md:w-[350px] aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-red-500/50 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              550px circle at ${mouseX}px ${mouseY}px,
              rgba(220, 38, 38, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="absolute inset-0">
                <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-95"
                    priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
            </div>

            <div className="relative z-20 flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-red-500 uppercase tracking-widest bg-black/60 border border-red-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {product.category}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950/70 px-2.5 py-1 rounded-full border border-white/5">
                    {product.character}
                </span>
            </div>

            <div className="relative z-20">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2 leading-none">
                    {product.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                </p>

                <a
                    href={`https://wa.me/628212691657?text=Halo%20Kopi%20Ajoe%2C%20saya%20ingin%20memesan%20menu%20${encodeURIComponent(product.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-white/10"
                >
                    <span>Pesan Menu Ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </div>
        </motion.div>
    );
};

export default function ProductShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            id="products"
            ref={containerRef}
            className="bg-neutral-950 py-32 overflow-hidden relative scroll-mt-16"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

            <div className="container mx-auto px-4 mb-20 relative z-10">
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

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 relative z-10 max-w-7xl mx-auto">
                {products.map((product, index) => (
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
