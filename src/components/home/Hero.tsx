"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Calendar, Shield, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white pt-16 pb-24 md:pt-24 md:pb-32 px-6">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-primary/20 rounded-full shadow-soft">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-primary">Your Pet&apos;s Happy Place</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1]">
                        Everything Your Pet Needs — <span className="text-primary relative inline-block">
                            In One Place
                            <motion.svg
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewBox="0 0 200 20"
                                className="absolute -bottom-2 left-0 w-full h-4 text-primary opacity-30"
                            >
                                <path d="M0 10 Q50 20 100 10 T200 10" fill="none" stroke="currentColor" strokeWidth="4" />
                            </motion.svg>
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                        Shop premium pet products, book grooming services, adopt pets, and connect with a community of pet lovers.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="#shop"
                            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold shadow-medium hover:translate-y-[-2px] transition-all"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Shop for Pets
                        </Link>
                        <Link
                            href="#grooming"
                            className="flex items-center gap-2 bg-white text-foreground border border-border px-8 py-4 rounded-2xl font-bold shadow-soft hover:bg-slate-50 hover:translate-y-[-2px] transition-all"
                        >
                            <Calendar className="w-5 h-5 text-primary" />
                            Book Grooming
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center gap-8 pt-8">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden ring-2 ring-primary/5">
                                    <div className="w-full h-full bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-500">P{i}</div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                            </div>
                            <p className="text-sm font-medium text-muted-foreground mt-1">10k+ Happy Pet Parents</p>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative group"
                >
                    {/* Main Hero Image Container */}
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-medium border-8 border-white bg-white">
                        <div className="aspect-[4/5] relative flex items-center justify-center overflow-hidden">
                            <Image
                                src="/hero-pets.png"
                                alt="Happy pets with owners"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 -left-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-medium border border-white max-w-[200px]"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Vet Care</p>
                                <p className="text-sm font-bold">100% Secure</p>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Certified experts for your pet&apos;s health.</p>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-10 -right-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-medium border border-white"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <PawPrint className="w-6 h-6 text-primary" />
                                </div>
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">New Arrival</p>
                                <p className="text-sm font-bold">Organic Treats</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-xs font-bold text-primary">$12.00</span>
                                    <span className="text-[10px] text-muted-foreground line-through">$18.00</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Circles */}
                    <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 border-[32px] border-primary/5 rounded-full" />
                    <div className="absolute -z-10 -bottom-20 -left-20 w-60 h-60 border-[24px] border-secondary/5 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}

// Re-using Lucide Icon locally for the SVG circle
function PawPrint({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="11" cy="5" r="2" /><circle cx="18" cy="9" r="2" /><circle cx="7" cy="9" r="2" /><circle cx="14" cy="5" r="2" /><path d="M12 13c-2 0-4 1.5-4 3.5 0 2.5 2 4.5 4 4.5s4-2 4-4.5c0-2-2-3.5-4-3.5z" />
        </svg>
    );
}
