"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
    {
        title: "Create a Profile",
        desc: "Tell us about your furry, feathered, or scaly friends to get personalized recommendations.",
        icon: UserPlus,
        color: "text-blue-600",
        bg: "bg-blue-100/50",
    },
    {
        title: "Explore Services",
        desc: "Browse expert grooming, veterinary care, and premium products tailored for your pet.",
        icon: Search,
        color: "text-purple-600",
        bg: "bg-purple-100/50",
    },
    {
        title: "Book & Connect",
        desc: "Schedule appointments instantly or join community discussions with other pet parents.",
        icon: CalendarCheck,
        color: "text-rose-600",
        bg: "bg-rose-100/50",
    },
    {
        title: "Enjoy the Journey",
        desc: "Watch your pet thrive with the best care and a supportive community by your side.",
        icon: Sparkles,
        color: "text-amber-600",
        bg: "bg-amber-100/50",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-primary tracking-widest uppercase">The Process</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
                    >
                        How <span className="text-primary">A to Z pets</span> Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Everything you need to give your pet the best life possible, just a few clicks away.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Linear Connection for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft hover:shadow-medium transition-all group relative"
                        >
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center font-display font-bold text-slate-300 group-hover:text-primary transition-colors">
                                0{index + 1}
                            </div>
                            <div className={`w-16 h-16 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
