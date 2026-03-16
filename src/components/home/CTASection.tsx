"use client";

import { motion } from "framer-motion";
import { ArrowRight, PawPrint } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-24 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] bg-primary overflow-hidden p-12 md:p-24 text-center"
                >
                    {/* Decorative background paw prints */}
                    <div className="absolute top-10 left-10 text-white/5 -rotate-12">
                        <PawPrint className="w-32 h-32 fill-current" />
                    </div>
                    <div className="absolute bottom-10 right-10 text-white/5 rotate-12">
                        <PawPrint className="w-48 h-48 fill-current" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-[1.1]">
                            Ready to Join the <span className="text-secondary italic">A to Z pets</span> Family?
                        </h2>

                        <p className="text-primary-foreground/80 text-xl leading-relaxed">
                            Create your account today and get 20% off your first purchase. Join over 10,000+ happy pet parents.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
                            <Link
                                href="/login"
                                className="bg-white text-primary px-10 py-5 rounded-[1.5rem] font-bold text-xl shadow-medium hover:translate-y-[-2px] hover:shadow-xl transition-all"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="#shop"
                                className="flex items-center gap-2 border border-white/30 text-white px-10 py-5 rounded-[1.5rem] font-bold text-xl hover:bg-white/10 transition-all"
                            >
                                Browse Products <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>

                        <p className="text-primary-foreground/60 text-sm font-medium">
                            No credit card required • Instant access • Trusted worldwide
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
