"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { title: "Home", href: "#" },
    { title: "Our Story", href: "#about" },
    { title: "Products", href: "#products" },
    { title: "Brew Guide", href: "#" },
    { title: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Fixed Header */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white"
            >
                <a href="#" className="text-2xl font-bold tracking-tighter uppercase relative z-50">
                    Kopi Ajoe
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex flex-col items-end gap-1.5 focus:outline-none relative z-50"
                >
                    <span className="sr-only">Menu</span>
                    <div className="text-sm font-medium tracking-widest uppercase mb-1 hidden md:block">
                        {isOpen ? "Close" : "Menu"}
                    </div>
                    {/* Hamburger Icon Animation based on state could be here, using generic Text for Awwwards style */}
                </button>
            </motion.nav>

            {/* Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-[#0a0a0a] text-[#ededed] z-40 flex flex-col justify-between p-6 md:p-12 pb-20 md:pb-12"
                    >
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <div className="flex flex-col gap-6 text-center">
                                {navLinks.map((link, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <motion.a
                                            href={link.href}
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] }}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-5xl md:text-7xl font-bold tracking-tighter uppercase hover:text-gray-400 transition-colors"
                                        >
                                            <span className="relative group">
                                                {link.title}
                                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                                            </span>
                                        </motion.a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-end border-t border-white/20 pt-8 uppercase text-sm tracking-widest">
                            <div className="hidden md:block">
                                <p>Designed by Faker</p>
                            </div>
                            <div className="flex gap-6">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Instagram</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Twitter</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
