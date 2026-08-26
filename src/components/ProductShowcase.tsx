"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const products = [
    {
        id: 1,
        src: "/images/product/0a59bc1f-d762-4c86-b0d1-9c093c40353c.jpeg",
        title: "Kopi Susu Butter",
        category: "Signature Series",
        description: "Karakter khas yang creamy dengan sentuhan butter yang kaya.",
    },
    {
        id: 2,
        src: "/images/product/8a93d9f2-b6f6-4334-a1d6-85d03af1c314.jpeg",
        title: "Kopi Susu Gula Aren",
        category: "Fan Favorite",
        description: "Seimbang, dengan manisnya gula aren asli Sumatera Barat.",
    },
    {
        id: 3,
        src: "/images/product/9e55483b-7fa3-45b8-9436-eb2140edd63b.jpeg",
        title: "Kopi Karamel",
        category: "Sweet Series",
        description: "Lembut dengan finishing karamel yang manis di akhir.",
    },
    {
        id: 4,
        src: "/images/product/b9571b8f-4e34-4e30-b247-37887ea65686.jpeg",
        title: "Kopi Susu Original",
        category: "Classic",
        description: "Cita rasa otentik Padang, simpel dan nikmat.",
    },
    {
        id: 5,
        src: "/images/product/d0c10c83-c0b2-4cd7-b7bb-3ac38c8f2aed.jpeg",
        title: "Es Kopi Ajoe",
        category: "Refreshing",
        description: "Kopi dingin yang menghantar semangat di setiap tegukan.",
    },
];

const Card = ({ product, index }: { product: typeof products[0]; index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative h-[450px] w-full md:w-[350px] overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />

            {/* Image Container with Zoom effect */}
            <div className="h-full w-full overflow-hidden">
                <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">
                        {product.category}
                    </p>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-none">
                        {product.title}
                    </h3>
                    <p className="text-neutral-400 text-sm line-clamp-2 max-w-[90%] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {product.description}
                    </p>
                </motion.div>
            </div>
        </div>
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
        <section className="bg-neutral-950 py-32 overflow-hidden relative" ref={containerRef}>
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />

            <div className="container mx-auto px-4 mb-24 relative z-10">
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

            <div className="flex flex-wrap justify-center gap-8 px-4 relative z-10 max-w-7xl mx-auto">
                {products.map((product, index) => (
                    <Card key={product.id} product={product} index={index} />
                ))}
            </div>

            {/* Decorative floating text */}
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
