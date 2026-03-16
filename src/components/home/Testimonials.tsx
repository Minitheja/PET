"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Dog Mom of Husky",
        content: "My dog loves the toys and the grooming service is top-notch! The convenience of having everything in one app is a game-changer.",
        rating: 5,
        avatar: "👩‍💼"
    },
    {
        name: "Mark Wilson",
        role: "Cat Parent",
        content: "Best pet platform for everything! From organic food to vet consultations, A to Z pets has truly exceeded my expectations.",
        rating: 5,
        avatar: "👨‍💻"
    },
    {
        name: "Emily Davis",
        role: "Shelter Volunteer",
        content: "The adoption section helped me find my perfect companion. The verification process makes you feel secure and supported.",
        rating: 5,
        avatar: "👩‍🎨"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-foreground"
                        >
                            Hear from Our <span className="text-primary">Happy Pet Parents</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                            Don&apos;t just take our word for it. Join thousands of satisfied owners who trust A to Z pets for their pets&apos; daily needs.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xl shadow-soft">
                                        😊
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                                </div>
                                <p className="text-sm font-bold text-foreground">4.9/5 Average Rating</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 relative group transition-all"
                            >
                                <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <Quote className="w-12 h-12 fill-current" />
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-soft">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                                    ))}
                                </div>

                                <p className="text-muted-foreground leading-relaxed italic">
                                    &quot;{testimonial.content}&quot;
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
