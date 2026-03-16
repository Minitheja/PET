"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const breeds = [
    { name: "Golden Retriever", image: "🐕", slug: "golden-retriever" },
    { name: "Shih Tzu", image: "🐩", slug: "shih-tzu" },
    { name: "Labrador", image: "🦮", slug: "labrador" },
    { name: "Persian Cat", image: "🐈", slug: "persian-cat" },
    { name: "Beagle", image: "🐕‍🦺", slug: "beagle" },
    { name: "Indie Dog", image: "🐕", slug: "indie" }
];

export default function ShopByBreed() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-display font-bold text-foreground mb-4"
                        >
                            Shop By <span className="text-primary">Breed</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Specialized nutrition and accessories tailored for your pet&apos;s specific breed.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {breeds.map((breed, index) => (
                        <motion.div
                            key={breed.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full"
                        >
                            <Link
                                href={`/breed/${breed.slug}`}
                                className="group flex flex-col items-center text-center w-full"
                            >
                                <div className="w-full aspect-square rounded-[2rem] bg-orange-50 border border-border flex items-center justify-center text-6xl group-hover:scale-105 group-hover:shadow-medium group-hover:border-primary/30 transition-all duration-300 mb-4 pr-1 pl-1">
                                    {breed.image}
                                </div>
                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                                    {breed.name}
                                </h3>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                    Shop Now <ArrowRight className="w-3 h-3" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
