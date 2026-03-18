"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Jessica Miller",
        role: "Cat Parent",
        content: "Best pet platform for everything! From health logs to vet consultations, A to Z pets has truly exceeded my expectations.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=jessica"
    },
    {
        name: "Robert Wilson",
        role: "Dog Dad",
        content: "Our puppy is a picky eater, but A to Z pets's expert guides helped us find the perfect diet. Now he's healthier than ever!",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=robert"
    },
    {
        name: "Sarah Jenkins",
        role: "Exotic Pet Owner",
        content: "Finding local services for lizards is tough. A to Z pets made it simple to find experts in my area. Highly recommended!",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=sarah"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex font-bold text-xs uppercase tracking-widest mb-4"
                    >
                        Success Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
                    >
                        What <span className="text-primary">Pet Parents</span> Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Don&apos;t just take our word for it. Join thousands of satisfied owners who trust A to Z pets for their pets&apos; daily needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white border border-slate-100 relative group transition-all shadow-lg hover:shadow-xl"
                        >
                            <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <Quote className="w-12 h-12 fill-current" />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-3xl shadow-inner overflow-hidden border-2 border-white">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
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

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-50 overflow-hidden bg-slate-200">
                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                        </div>
                        <p className="text-sm font-bold text-foreground">Loved by 10k+ Happy Pet Parents Globally</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
