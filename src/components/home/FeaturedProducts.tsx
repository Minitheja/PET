"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";

const products = [
    {
        name: "Dash Dog Winter Prism Sweater",
        brand: "Dash Dog",
        price: 35.99,
        originalPrice: 45.99,
        rating: 4.8,
        image: "🧥",
        discount: "20% OFF"
    },
    {
        name: "TLC Round Retreat Bed",
        brand: "TLC",
        price: 89.00,
        originalPrice: null,
        rating: 4.9,
        image: "🛏️",
        discount: null
    },
    {
        name: "Dash Dog Puffer Jacket",
        brand: "Dash Dog",
        price: 49.50,
        originalPrice: 55.00,
        rating: 4.7,
        image: "🧥",
        discount: "10% OFF"
    },
    {
        name: "HUFT Honey Hearts Hoodie",
        brand: "HUFT",
        price: 28.25,
        originalPrice: null,
        rating: 4.6,
        image: "👕",
        discount: null
    },
    {
        name: "Snuffle Pig Plush Toy",
        brand: "Playful Pets",
        price: 15.00,
        originalPrice: 20.00,
        rating: 4.8,
        image: "🐷",
        discount: "25% OFF"
    },
    {
        name: "Dog Bandana",
        brand: "Style Paw",
        price: 12.00,
        originalPrice: null,
        rating: 4.5,
        image: "🧣",
        discount: null
    },
    {
        name: "Dog Harness",
        brand: "SafeWalk",
        price: 34.00,
        originalPrice: null,
        rating: 4.9,
        image: "🦮",
        discount: null
    },
    {
        name: "Rope Tug Toy",
        brand: "ToughChew",
        price: 9.99,
        originalPrice: 14.99,
        rating: 4.7,
        image: "🪢",
        discount: "33% OFF"
    }
];

export default function FeaturedProducts() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-display font-bold text-foreground mb-4"
                        >
                            Featured <span className="text-primary">Products</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Handpicked premium supplies for your pets, delivered right to your doorstep.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {["Popular", "New Arrivals", "Best Deals"].map((tab) => (
                            <button key={tab} className="px-6 py-2 rounded-full border border-border text-sm font-bold hover:bg-slate-50 transition-colors">
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-square rounded-3xl bg-slate-50 border border-border overflow-hidden mb-4 group-hover:shadow-medium transition-all group-hover:border-primary/30">
                                {product.discount && (
                                    <div className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full shadow-sm text-[10px] font-bold tracking-widest uppercase">
                                        {product.discount}
                                    </div>
                                )}
                                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-muted-foreground hover:text-secondary shadow-sm transition-colors opacity-0 group-hover:opacity-100 border border-border">
                                    <Heart className="w-5 h-5" />
                                </button>

                                {/* Product Image or Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                                    <span className="text-8xl">{product.image}</span>
                                </div>

                                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-2xl font-bold shadow-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                        <ShoppingCart className="w-5 h-5" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2 px-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{product.brand}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-accent text-accent" />
                                        <span className="text-xs font-bold">{product.rating}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <p className="text-xl font-bold text-foreground">${product.price.toFixed(2)}</p>
                                    {product.originalPrice && (
                                        <p className="text-sm font-medium text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
