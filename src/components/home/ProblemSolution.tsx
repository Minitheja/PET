"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Heart, Shield, Sparkles } from "lucide-react";

const problems = [
    "Fragmented pet health records across different apps.",
    "Uncertainty about the quality of pet products and services.",
    "Lack of reliable local pet communities and expert advice.",
    "Stressful scheduling for grooming and vet appointments.",
];

const solutions = [
    {
        title: "Unified Health Dashboard",
        desc: "All your pet's medical records, vaccinations, and nutrition plans in one secure place.",
        icon: Shield,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Expert-Verified Standards",
        desc: "Every product and service on A to Z pets is vetted by pet health professionals.",
        icon: CheckCircle2,
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        title: "Global Pet Tribe",
        desc: "Connect with a supportive community and get instant advice from the experts.",
        icon: Heart,
        color: "text-rose-600",
        bg: "bg-rose-50",
    },
    {
        title: "Smart Scheduling",
        desc: "Book grooming, vet visits, and playdates with a single tap in your unified calendar.",
        icon: Sparkles,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
];

export default function ProblemSolution() {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left side: The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-bold text-xs uppercase tracking-widest">
                            <AlertCircle className="w-4 h-4" />
                            The Challenges
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                            Being a pet parent is <span className="text-red-500">rewarding</span>, but often <span className="italic">overwhelming</span>.
                        </h2>
                        <ul className="space-y-6">
                            {problems.map((problem, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 text-muted-foreground text-lg"
                                >
                                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                    </div>
                                    {problem}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right side: The Solution (A to Z pets) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-100 hover:shadow-medium transition-all group"
                            >
                                <div className={`w-14 h-14 ${solution.bg} ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <solution.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-bold text-lg text-foreground mb-3 leading-tight">{solution.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-primary p-12 rounded-[3.5rem] relative overflow-hidden group shadow-medium hover:shadow-xl transition-all"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                            We built <span className="text-secondary italic">A to Z pets</span> because we&apos;re pet parents too.
                        </h3>
                        <p className="text-primary-foreground/80 text-lg">
                            Our platform isn&apos;t just a set of tools; it&apos;s a commitment to making pet parenting simpler, smarter, and more unified.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
