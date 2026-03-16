"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        title: "5 Tips for Transitioning Your Pet to Organic Food",
        category: "Nutrition",
        date: "March 12, 2024",
        comments: 12,
        image: "/blog-1.png",
        excerpt: "Switching to organic isn't just a trend—it's a lifestyle change that can improve your pet's energy and health.",
    },
    {
        title: "The Ultimate Guide to In-Home Pet Grooming",
        category: "Grooming",
        date: "March 10, 2024",
        comments: 8,
        image: "/blog-2.png",
        excerpt: "Learn how to keep your pet looking their best between professional spa visits with these simple at-home tricks.",
    },
    {
        title: "Building a Stronger Bond with Your New Rescue",
        category: "Community",
        date: "March 08, 2024",
        comments: 24,
        image: "/blog-3.png",
        excerpt: "Adopting is the first step. Creating a lifelong bond takes patience, love, and the right approach.",
    },
];

export default function BlogSection() {
    return (
        <section id="blog" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex font-bold text-xs uppercase tracking-widest mb-4"
                        >
                            Latest Updates
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-display font-bold text-foreground"
                        >
                            Stories through <span className="text-secondary">Paws & Whiskers</span>
                        </motion.h2>
                    </div>
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        View All Posts <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all border border-slate-100"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-primary">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MessageSquare className="w-3.5 h-3.5" />
                                        {post.comments} Comments
                                    </div>
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                                <Link href="#" className="font-bold text-sm flex items-center gap-2">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
