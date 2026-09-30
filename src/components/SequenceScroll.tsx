"use client";

import { useScroll, useTransform, motion, useMotionValueEvent, useSpring, MotionValue } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import Preloader from "./Preloader";

const frameCount = 240;

interface StoryLineData {
    text: string;
    size: string;
    weight: string;
}

const storyLines: StoryLineData[] = [
    { text: "Kopi Ajoe", size: "text-6xl md:text-9xl", weight: "font-bold" },
    { text: "Kopi lebih dari sekadar minuman—", size: "text-2xl md:text-4xl", weight: "font-light" },
    { text: "ia adalah sebuah ritual.", size: "text-3xl md:text-5xl", weight: "font-semibold" },
    { text: "Lahir dari seleksi biji terbaik", size: "text-2xl md:text-4xl", weight: "font-light" },
    { text: "Dan dipanggang dengan presisi penuh jiwa,", size: "text-2xl md:text-4xl", weight: "font-light" },
    { text: "setiap butir bercerita tentang", size: "text-2xl md:text-3xl", weight: "font-light" },
    { text: "dedikasi, keanggunan,", size: "text-3xl md:text-5xl", weight: "font-semibold" },
    { text: "dan pencarian tanpa henti", size: "text-2xl md:text-4xl", weight: "font-light" },
    { text: "akan kesempurnaan rasa.", size: "text-4xl md:text-6xl", weight: "font-bold" },
];

function StoryLineItem({
    line,
    index,
    scrollYProgress,
}: {
    line: StoryLineData;
    index: number;
    scrollYProgress: MotionValue<number>;
}) {
    const start = 0.5 + index * 0.05;
    const peak = start + 0.025;
    const end = start + 0.06;
    const opacity = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [start, end], [100, -50]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute text-center max-w-4xl px-8"
        >
            <p className={cn(line.size, line.weight, "tracking-tight leading-tight drop-shadow-2xl")}>
                {line.text}
            </p>
        </motion.div>
    );
}

export default function SequenceScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const { scrollYProgress: rawProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scrollYProgress = useSpring(rawProgress, { stiffness: 90, damping: 30, mass: 0.5 });
    const currentIndex = useTransform(scrollYProgress, [0, 0.5], [1, frameCount]);

    const opacityHero = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
    const opacitySlogan1 = useTransform(scrollYProgress, [0.1, 0.15, 0.2], [0, 1, 0]);
    const opacitySlogan2 = useTransform(scrollYProgress, [0.25, 0.3, 0.35], [0, 1, 0]);
    const opacityCTA = useTransform(scrollYProgress, [0.4, 0.45, 0.5], [0, 1, 0]);
    const opacityCanvas = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = new Array(frameCount);
            let loadedCount = 0;
            let next = 1;
            const concurrency = 6;

            const worker = (): Promise<void> =>
                new Promise((resolve) => {
                    const run = () => {
                        if (next > frameCount) {
                            resolve();
                            return;
                        }
                        const idx = next++;
                        const img = new Image();
                        img.src = `/sequence/ezgif-frame-${idx.toString().padStart(3, "0")}.jpg`;
                        img.onload = img.onerror = () => {
                            loadedImages[idx - 1] = img;
                            loadedCount++;
                            setLoadingProgress((loadedCount / frameCount) * 100);
                            run();
                        };
                    };
                    run();
                });

            await Promise.all(Array.from({ length: concurrency }, worker));
            setImages(loadedImages);
            setTimeout(() => setLoaded(true), 500);
        };
        loadImages();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
            }, 200);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    const render = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const clampedIndex = Math.min(Math.max(Math.round(index), 1), frameCount);
        const img = images[clampedIndex - 1] || images[images.length - 1];
        if (img && img.complete && img.naturalWidth > 0) {
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    }, [images]);

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (loaded) render(Math.round(latest));
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (loaded && latest > 0.5) {
            render(frameCount);
        }
    });

    useEffect(() => {
        if (loaded) render(1);
    }, [loaded, canvasSize, render]);

    return (
        <div id="hero" ref={containerRef} className="h-[900vh] relative bg-black">
            <Preloader progress={loadingProgress} loading={!loaded} />

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.canvas
                    ref={canvasRef}
                    style={{ opacity: opacityCanvas }}
                    className="w-full h-full object-cover"
                />

                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.45, 0.55], [0, 0.5]) }}
                    className="absolute inset-0 bg-black pointer-events-none"
                />

                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center w-full h-full text-white">
                    <motion.div style={{ opacity: opacityHero }} className="absolute text-center drop-shadow-lg">
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase text-white">Kopi Ajoe</h1>
                        <p className="text-xl md:text-2xl mt-4 font-light tracking-widest uppercase text-white">Sejuta Teman Di Jalan</p>
                    </motion.div>

                    <motion.div style={{ opacity: opacitySlogan1 }} className="absolute left-10 md:left-20 max-w-lg">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Taste the <br /> Tradition.</h2>
                    </motion.div>

                    <motion.div style={{ opacity: opacitySlogan2 }} className="absolute right-10 md:right-20 text-right max-w-lg">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Brewed for <br /> Perfection.</h2>
                    </motion.div>

                    <motion.div style={{ opacity: opacityCTA }} className="absolute text-center pointer-events-auto">
                        <h2 className="text-5xl md:text-7xl font-bold mb-4">Ready to Sip?</h2>
                        <p className="text-neutral-400 tracking-widest uppercase text-sm">Keep scrolling</p>
                    </motion.div>

                    {storyLines.map((line, i) => (
                        <StoryLineItem
                            key={i}
                            line={line}
                            index={i}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
