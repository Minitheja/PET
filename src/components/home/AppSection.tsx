"use client";

import { motion } from "framer-motion";
import { Apple, PlayCircle, Smartphone, Bell, Heart, Shield } from "lucide-react";
import Image from "next/image";

export default function AppSection() {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Phone Mockup Placeholder */}
                        <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19] rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden bg-slate-900">
                            <Image
                                src="/app-mockup.png"
                                alt="A to Z pets Mobile App Mockup"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 flex items-center justify-center z-10">
                                <div className="w-16 h-3 bg-slate-950 rounded-full" />
                            </div>
                        </div>

                        {/* Floating Info Cards */}
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-20 right-0 lg:-right-10 bg-white p-4 rounded-2xl shadow-medium flex items-center gap-3 border border-border"
                        >
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Bell className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold font-display">Appointment</p>
                                <p className="text-[10px] text-muted-foreground">In 30 minutes</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-20 left-0 lg:-left-10 bg-white p-4 rounded-2xl shadow-medium flex items-center gap-3 border border-border"
                        >
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                <Heart className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold font-display">Health Tip</p>
                                <p className="text-[10px] text-muted-foreground">Keep pets hydrated</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex font-bold text-xs uppercase tracking-widest">
                            Available Now
                        </div>

                        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                            Your Pet&apos;s Better Half <span className="text-primary">is on Mobile</span>
                        </h2>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Experience the full power of A to Z pets on your mobile device. Book appointments, track health records, and explore expert resources on the go with our top-rated app.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: Smartphone, text: "Seamless UX" },
                                { icon: Bell, text: "Real-time Alerts" },
                                { icon: Shield, text: "Data Security" },
                                { icon: Heart, text: "Health Tracking" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-foreground py-2 text-sm">
                                    <item.icon className="w-5 h-5 text-primary" />
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-900 transition-all shadow-medium">
                                <Apple className="w-6 h-6" />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold leading-none mb-1">Download on</p>
                                    <p className="text-lg leading-none">App Store</p>
                                </div>
                            </button>
                            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-900 transition-all shadow-medium">
                                <PlayCircle className="w-6 h-6" />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold leading-none mb-1">Get it on</p>
                                    <p className="text-lg leading-none">Google Play</p>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
