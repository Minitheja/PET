"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PawPrint, ShoppingCart, User, Menu, X, Search, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
const navItems = [
    { name: "Mission", href: "#vision" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Community", href: "#community" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-soft"
                    : "bg-white"
            )}
        >
            <div className="px-6 py-4 border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0 hover:opacity-90 transition-opacity">
                        <div className="bg-white border border-slate-100 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-sm">
                            <PawPrint className="w-6 h-6 text-[#1d3a54]" />
                        </div>
                        <span className="text-xl md:text-2xl font-display font-bold text-[#1d3a54]">
                            A to Z <span className="text-[#2563EB]">pets</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-bold text-[#1d3a54] hover:text-[#2563EB] transition-colors whitespace-nowrap"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                         <Link
                            href="#community"
                            className="text-sm font-bold text-white bg-[#2563EB] px-6 py-2.5 rounded-xl hover:bg-[#1d3a54] transition-all shadow-medium"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-[#1d3a54]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4 p-6 bg-white pb-32">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-bold text-[#1d3a54] py-4 border-b border-slate-100 hover:text-[#2563EB] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#community"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 bg-[#2563EB] text-white text-center py-4 rounded-xl font-bold transition-all shadow-medium"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
