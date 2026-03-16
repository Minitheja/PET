"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PawPrint, ShoppingCart, User, Menu, X, Search, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
const navItems = [
    { name: "Shop", href: "#shop" },
    { name: "Grooming", href: "#grooming" },
    { name: "Adoption", href: "#adoption" },
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
            {/* Utility Bar - Updated to Navy Blue */}
            <div className="hidden md:flex justify-end items-center gap-6 px-6 py-2 bg-[#1d3a54] text-white text-xs font-medium">
                <Link href="#adoption" className="hover:text-[#2563EB] transition-colors">Adopt Joy</Link>
                <Link href="#store-locator" className="hover:text-[#2563EB] transition-colors">Store Locator</Link>
                <Link href="#track-order" className="hover:text-[#2563EB] transition-colors">Track Order</Link>
            </div>

            <div className="px-6 py-3 border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo - Matching The ELF Store branding colors */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0 hover:opacity-90 transition-opacity">
                        <div className="bg-white border border-slate-100 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-sm">
                            <PawPrint className="w-6 h-6 text-[#1d3a54]" />
                        </div>
                        <span className="text-xl md:text-2xl font-display font-bold text-[#1d3a54]">
                            A to Z <span className="text-[#2563EB]">Pets</span>
                        </span>
                    </Link>

                    {/* Desktop Center Nav - Dark Navy Links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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

                    {/* Desktop Right Icons */}
                    <div className="hidden md:flex items-center gap-3 xl:gap-5">
                        <div className="relative group cursor-pointer hidden lg:flex items-center gap-1 text-sm text-slate-500 hover:text-[#1d3a54] transition-colors">
                            <MapPin className="w-4 h-4 group-hover:text-[#1d3a54]" />
                            <span>Enter Pincode</span>
                        </div>
                        <div className="h-4 w-px bg-slate-200 mx-1 hidden lg:block"></div>
                        <button className="p-2 text-[#1d3a54] hover:text-[#2563EB] transition-colors relative">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-[#1d3a54] hover:text-[#2563EB] transition-colors relative">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-[#1d3a54] hover:text-[#2563EB] transition-colors relative">
                            <ShoppingCart className="w-5 h-5" />
                            {/* Optional cart badge indicator matching target */}
                            <span className="absolute top-0 right-0 w-4 h-4 bg-[#2563EB] text-white text-[10px] font-bold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">0</span>
                        </button>
                        <Link
                            href="/login"
                            className="text-sm font-bold text-white bg-[#1d3a54] border border-[#1d3a54] px-3 py-2 rounded-lg hover:bg-transparent hover:text-[#1d3a54] transition-colors flex items-center gap-2"
                        >
                            <User className="w-4 h-4" />
                            <span className="hidden xl:inline">Login / Signup</span>
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
                            {/* Mobile Utility */}
                            <div className="flex justify-between items-center bg-[#1d3a54] text-white p-4 rounded-xl mb-4">
                                <Link href="#adoption" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-[#2563EB] transition-colors">Adopt Joy</Link>
                                <Link href="#store-locator" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-[#2563EB] transition-colors">Store Locator</Link>
                                <Link href="#track-order" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-[#2563EB] transition-colors">Track Order</Link>
                            </div>

                            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl mb-4 text-sm text-[#1d3a54] border border-slate-100">
                                <MapPin className="w-4 h-4" />
                                <span>Enter Pincode</span>
                            </div>

                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-bold text-[#1d3a54] py-2 border-b border-slate-100 hover:text-[#2563EB] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="flex gap-4 mt-6">
                                <Link href="/login" className="flex-1 bg-[#1d3a54] text-white text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-[#1a334a] transition-colors">
                                    <User className="w-5 h-5" /> Login
                                </Link>
                                <button className="p-3 bg-slate-50 text-[#1d3a54] rounded-xl flex items-center justify-center border border-slate-100 shadow-sm hover:text-[#2563EB] transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <button className="p-3 bg-slate-50 text-[#1d3a54] rounded-xl flex items-center justify-center border border-slate-100 shadow-sm hover:text-[#2563EB] transition-colors relative">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="absolute top-1 right-1 w-4 h-4 bg-[#2563EB] text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
