"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { ArrowUpRight } from "lucide-react";

interface NavLinkItem {
    title: string;
    targetId: string;
}

const navLinks: NavLinkItem[] = [
    { title: "Home", targetId: "hero" },
    { title: "Our Story", targetId: "about" },
    { title: "Products", targetId: "products" },
    { title: "Outlet Locations", targetId: "territory" },
    { title: "Contact", targetId: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const scrollToSection = (targetId: string) => {
        setIsOpen(false);
        document.body.style.overflow = "";

        setTimeout(() => {
            if (targetId === "hero") {
                if (lenis) {
                    lenis.scrollTo(0, { duration: 1.2 });
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
                return;
            }

            const element = document.getElementById(targetId);
            if (element) {
                if (lenis) {
                    lenis.scrollTo(element, { offset: -40, duration: 1.2 });
                } else {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, 150);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white"
            >
                <button
                    type="button"
                    onClick={() => scrollToSection("hero")}
                    className="text-2xl font-bold tracking-tighter uppercase relative z-50 bg-transparent border-0 cursor-pointer text-left text-white focus:outline-none"
                >
                    Kopi Ajoe
                </button>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex flex-col items-end gap-1.5 focus:outline-none relative z-50 bg-transparent border-0 cursor-pointer text-white"
                >
                    <span className="sr-only">Toggle Menu</span>
                    <div className="text-sm font-medium tracking-widest uppercase mb-1 hidden md:block">
                        {isOpen ? "Close" : "Menu"}
                    </div>
                    <div className="w-8 flex flex-col gap-1.5 items-end">
                        <span
                            className={`h-[2px] bg-white transition-all duration-300 ${
                                isOpen ? "w-8 rotate-45 translate-y-2" : "w-8"
                            }`}
                        />
                        <span
                            className={`h-[2px] bg-white transition-all duration-300 ${
                                isOpen ? "opacity-0" : "w-5"
                            }`}
                        />
                        <span
                            className={`h-[2px] bg-white transition-all duration-300 ${
                                isOpen ? "w-8 -rotate-45 -translate-y-2" : "w-6"
                            }`}
                        />
                    </div>
                </button>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-[#0a0a0a] text-[#ededed] z-40 flex flex-col justify-between p-6 md:p-12 pb-16 md:pb-12"
                    >
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <div className="flex flex-col gap-6 text-center w-full max-w-2xl">
                                {navLinks.map((link, i) => (
                                    <div key={link.targetId} className="overflow-hidden">
                                        <motion.button
                                            type="button"
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.08 * i,
                                                ease: [0.76, 0, 0.24, 1],
                                            }}
                                            onClick={() => scrollToSection(link.targetId)}
                                            className="block w-full text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer text-center"
                                        >
                                            <span className="relative group inline-block">
                                                {link.title}
                                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full" />
                                            </span>
                                        </motion.button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 pt-8 uppercase text-xs md:text-sm tracking-widest gap-4">
                            <div>
                                <p className="text-neutral-500">Kopi Ajoe Indonesia</p>
                            </div>
                            <div className="flex flex-wrap gap-6 items-center">
                                <a
                                    href="https://instagram.com/kopiajoe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-red-500 transition-colors"
                                >
                                    Instagram <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                                <a
                                    href="https://wa.me/6281267890123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-red-500 transition-colors"
                                >
                                    WhatsApp Order <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                                <a
                                    href="https://maps.google.com/?q=Kopi+Ajoe+Sungai+Beringin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-red-500 transition-colors"
                                >
                                    Pabrik Pusat <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
