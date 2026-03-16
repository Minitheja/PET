"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const huftCategories = [
    { name: "Balls", color: "bg-red-50" },
    { name: "Beds", color: "bg-blue-50" },
    { name: "Cat Trees", color: "bg-green-50" },
    { name: "Dog T-Shirts", color: "bg-yellow-50" },
    { name: "Raincoats", color: "bg-purple-50" },
    { name: "Bow Ties & Bandanas", color: "bg-pink-50" },
    { name: "Bowls", color: "bg-orange-50" },
    { name: "Catnip Toys", color: "bg-teal-50" },
    { name: "Chew Toys", color: "bg-red-50" },
    { name: "Collars", color: "bg-blue-50" },
    { name: "Leashes", color: "bg-green-50" },
    { name: "Harness", color: "bg-yellow-50" },
    { name: "Jackets", color: "bg-purple-50" },
    { name: "Plush Toys", color: "bg-pink-50" },
    { name: "Rope Toys", color: "bg-orange-50" },
    { name: "Squeaker Toys", color: "bg-teal-50" },
    { name: "Sweaters", color: "bg-blue-50" },
    { name: "Interactive Toys", color: "bg-pink-50" },
    { name: "Tick & Flea Control", color: "bg-slate-50" },
    { name: "Blankets", color: "bg-orange-50" },
];

export default function ProductCategories() {
    return (
        <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-bold text-foreground mb-4"
                    >
                        Explore <span className="text-primary">Categories</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need from toys and apparel to essential health and grooming products.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {huftCategories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link href="#" className="block group">
                                <div className={`aspect-square ${cat.color} rounded-3xl mb-4 p-4 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-medium border border-border group-hover:border-primary/20 bg-white`}>
                                    {/* Placeholder Image Space */}
                                    <div className={`absolute inset-0 ${cat.color} opacity-30`} />

                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-3 relative z-10 text-2xl font-bold group-hover:scale-110 transition-transform">
                                        {cat.name.charAt(0)}
                                    </div>
                                    <h3 className="font-bold text-foreground text-center relative z-10 group-hover:text-primary transition-colors text-sm px-2">
                                        {cat.name}
                                    </h3>

                                    <div className="mt-3 relative z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                                        <span className="text-xs font-bold bg-primary text-white px-3 py-1.5 rounded-full flex items-center gap-1">
                                            Shop <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
