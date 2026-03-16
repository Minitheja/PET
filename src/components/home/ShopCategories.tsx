"use client";

import { motion } from "framer-motion";


const pets = [
    { name: "Dogs", image: "/category-dog-food.png", color: "bg-orange-100", textColor: "text-orange-700", emoji: "🐶" },
    { name: "Cats", image: "/category-cat-food.png", color: "bg-blue-100", textColor: "text-blue-700", emoji: "🐱" },
    { name: "Puppies", image: "/category-puppy.png", color: "bg-purple-100", textColor: "text-purple-700", emoji: "🐾" },
    { name: "Kittens", image: "/category-kitten.png", color: "bg-pink-100", textColor: "text-pink-700", emoji: "🐾" },
    { name: "Small Animals", image: "/category-small.png", color: "bg-green-100", textColor: "text-green-700", emoji: "🐹" },
];

export default function ShopCategories() {
    return (
        <section id="shop" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-display font-bold text-foreground"
                        >
                            Shop by <span className="text-primary">Pet</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Find the perfect essentials tailored for your furry, feathery, or scaly friend.
                        </p>
                    </div>
                </div>

                <motion.div
                    className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide -mx-6 px-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {pets.map((pet) => (
                        <motion.div
                            key={pet.name}
                            whileHover={{ y: -5 }}
                            className="flex-shrink-0 w-64 group cursor-pointer"
                        >
                            <div className="aspect-[4/5] rounded-[2.5rem] bg-slate-100 mb-4 overflow-hidden relative border border-slate-200 group-hover:border-primary/50 transition-all bg-white shadow-sm hover:shadow-medium">
                                {/* Category Placeholder Image */}
                                <div className={`absolute inset-0 ${pet.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                    <div className={`w-20 h-20 rounded-3xl bg-white shadow-soft flex items-center justify-center mb-4 font-bold text-4xl group-hover:scale-110 transition-transform ${pet.textColor}`}>
                                        {pet.emoji}
                                    </div>
                                    <p className="text-sm font-bold text-foreground tracking-widest bg-white/80 px-4 py-1.5 rounded-full backdrop-blur-sm">Shop Now</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground text-center group-hover:text-primary transition-colors">
                                {pet.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
