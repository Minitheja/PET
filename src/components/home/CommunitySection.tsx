"use client";

import { motion } from "framer-motion";
import { Camera, Users, MessageCircle, HelpCircle } from "lucide-react";

const features = [
    { label: "Share Pet Photos", description: "Show off your furry friend's best moments.", icon: Camera, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Discuss Pet Care", description: "Get answers from experienced pet parents.", icon: MessageCircle, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Join Local Groups", description: "Connect with pet lovers in your area.", icon: Users, color: "text-green-600", bg: "bg-green-50" },
    { label: "Ask Vet Questions", description: "Get professional advice for your pet's health.", icon: HelpCircle, color: "text-pink-600", bg: "bg-pink-50" },
];

export default function CommunitySection() {
    return (
        <section id="community" className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full inline-flex font-bold text-xs uppercase tracking-widest mb-4"
                    >
                        A to Z pets Tribe
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
                    >
                        Join the <span className="text-primary">Pet Tribe</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Join our exclusive community of pet lovers. Connect, share, and learn with people who love pets as much as you do.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-medium transition-all group"
                        >
                            <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.label}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] bg-primary p-12 md:p-20 text-center text-white overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">
                            Ready to Join the Tribe?
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-medium hover:translate-y-[-2px] transition-all">
                                Join Pet Tribe
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
