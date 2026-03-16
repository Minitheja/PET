"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Check } from "lucide-react";

const services = [
    {
        title: "Dog Grooming",
        description: "Full grooming tailored to your dog's breed and size.",
        price: "From $50",
        features: ["Deep Bath", "Haircut", "Nail Care", "Ear Clean"],
        popular: true,
    },
    {
        title: "Cat Grooming",
        description: "Gentle grooming services designed specifically for felines.",
        price: "From $60",
        features: ["Waterless Bath", "Brush Out", "Nail Trim", "Ear Clean"],
        popular: false,
    },
    {
        title: "Spa Treatments",
        description: "Luxury treatments for pampered pets.",
        price: "From $25",
        features: ["Blueberry Facial", "Mud Bath", "Massage", "Aromatherapy"],
        popular: false,
    },
    {
        title: "Nail Trimming",
        description: "Quick and stress-free nail trimming service.",
        price: "From $15",
        features: ["Trimming", "Filing", "Paw Balm", "Quick Checking"],
        popular: false,
    },
    {
        title: "Coat Styling",
        description: "Award-winning styling for special occasions or shows.",
        price: "From $80",
        features: ["Breed Specific Cut", "De-matting", "Blowout", "Bows/Bandana"],
        popular: false,
    },
    {
        title: "Flea & Tick Care",
        description: "Safe and effective treatments to protect your pet.",
        price: "From $40",
        features: ["Medicated Bath", "Manual Removal", "Prevention Oil", "Vet Consult"],
        popular: false,
    }
];

export default function GroomingServices() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="grooming" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
                    >
                        Pet Spa & <span className="text-primary">Grooming</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Expert care for your furry friends. From basic baths to award-winning styling, we handle it all with love.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => setActiveIndex(index)}
                            className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col cursor-pointer ${index === activeIndex
                                ? "bg-white border-primary shadow-medium ring-1 ring-primary/20"
                                : "bg-white border-slate-100 shadow-soft hover:shadow-medium"
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-medium">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <Scissors className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-bold text-foreground leading-tight">{service.title}</h3>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-sm">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-xs font-medium text-slate-600">
                                        <div className="w-5 h-5 bg-green-100/50 rounded-full flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-green-600 font-bold" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all mt-auto ${index === activeIndex
                                ? "bg-primary text-primary-foreground shadow-medium hover:opacity-90"
                                : "bg-slate-100 text-foreground hover:bg-slate-200"
                                }`}>
                                Book Appointment
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
