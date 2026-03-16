"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";

const searches = [
    "Dog Food", "Cat Litter", "Puppy Toys", "Grain-Free Food",
    "Orthopedic Bed", "Flea & Tick Treatment", "Adult Cat Food",
    "Dog Grooming", "Cat Tree", "Tug Toys", "Dental Chews",
    "Winter Sweaters", "Interactive Cat Toys", "Slow Feeder Bowl"
];

export default function PopularSearches() {
    return (
        <section className="py-16 px-6 bg-slate-50 border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Search className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-foreground">Popular Searches</h2>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {searches.map((search, index) => (
                        <motion.div
                            key={search}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href="#"
                                className="inline-block px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                            >
                                {search}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
