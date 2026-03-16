"use client";

import { motion } from "framer-motion";
import { Truck, RotateCcw, Tag, HeadphonesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
    {
        title: "Free Shipping",
        description: "On orders over $50",
        icon: Truck,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Free Returns",
        description: "Within 30 days",
        icon: RotateCcw,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Best Deals",
        description: "Guaranteed savings",
        icon: Tag,
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "Customer Support",
        description: "24/7 online help",
        icon: HeadphonesIcon,
        color: "bg-purple-50 text-purple-600",
    }
];

export default function Features() {
    return (
        <section id="benefits" className="py-12 px-6 bg-white border-y border-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-center gap-4 p-4 text-center md:text-left group cursor-pointer"
                        >
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", benefit.color)}>
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold text-foreground">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
