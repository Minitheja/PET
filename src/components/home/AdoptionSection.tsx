"use client";

import { motion } from "framer-motion";
import { Heart, Home, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdoptionSection() {
    return (
        <section id="adoption" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] bg-indigo-900 overflow-hidden">
                    {/* Decorative patterns */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/4" />
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 md:p-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Heart className="w-4 h-4 text-secondary fill-secondary" />
                                <span className="text-sm font-bold text-white">Save a Life Today</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                                Give a Loving Home to <span className="text-secondary">Pets in Need</span>
                            </h2>

                            <p className="text-indigo-100 text-xl leading-relaxed max-w-lg">
                                Hundreds of furry friends are waiting for their forever families. Find your new best friend and give them the love they deserve.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#"
                                    className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-bold shadow-medium hover:translate-y-[-2px] transition-all"
                                >
                                    Browse Pets
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                                >
                                    Adopt Now <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <Home className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">1,200+</p>
                                        <p className="text-indigo-200 text-xs">Pets Adopted</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <Heart className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">150+</p>
                                        <p className="text-indigo-200 text-xs">Active Shelters</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-white rounded-[2.5rem] border border-white/10 shadow-medium flex items-center justify-center p-2 overflow-hidden">
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                                    <Image
                                        src="/adoption-rescue.png"
                                        alt="Rescue pets waiting for adoption"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-medium"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase">Status</p>
                                        <p className="text-sm font-bold text-foreground">Shelter Verified</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Check({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
