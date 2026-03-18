"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, HandHeart, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
    { title: "Innovative Products", desc: "Crafting solutions for every aspect of your pet's life.", icon: Lightbulb, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Pet Parenting Support", desc: "Expert guidance for every step of your journey.", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
    { label: "Community", title: "Building a Pet Lover Community", desc: "Connecting families through shared love for pets.", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "Helping Animals in Need", desc: "Supporting shelters and rescue initiatives.", icon: HandHeart, color: "text-green-500", bg: "bg-green-50" },
];

export default function VisionMission() {
    return (
        <section id="vision" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 rounded-bl-[10rem] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                            <Heart className="w-4 h-4 text-primary fill-primary" />
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">Our Vision</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                            Raising Pets As <span className="text-primary">Family</span> 🧡
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            We believe that pets make us better humans. Our mission is to provide the best care, products, and support so you can give them the beautiful life they deserve.
                        </p>

                        <div className="flex flex-col gap-4 pt-4">
                            <Link href="#" className="flex items-center gap-3 font-bold text-foreground hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                Explore Innovations
                            </Link>
                            <Link href="#" className="flex items-center gap-3 font-bold text-foreground hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                Foundation Initiatives
                            </Link>
                            <Link href="#" className="flex items-center gap-3 font-bold text-foreground hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                Feed A Dog In Need
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-border p-6 rounded-3xl shadow-sm hover:shadow-medium transition-all group"
                            >
                                <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg text-foreground mb-2 leading-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
