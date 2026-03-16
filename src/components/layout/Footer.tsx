import Link from "next/link";
import { PawPrint, Facebook, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-50 border-t border-border pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary p-2 rounded-xl">
                                <PawPrint className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-display font-bold text-foreground">
                                A to Z <span className="text-primary">Pets</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            A to Z Pets is your all-in-one companion for pet care, premium supplies, grooming services, and a loving community.
                        </p>

                        {/* Newsletter Subscription */}
                        <div className="pt-4">
                            <h4 className="font-bold text-foreground mb-3 text-sm">Subscribe to our Newsletter</h4>
                            <div className="flex items-center max-w-sm bg-white rounded-xl border border-border p-1 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all shadow-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 bg-transparent text-sm w-full outline-none text-foreground placeholder-muted-foreground"
                                />
                                <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            {[Instagram, Youtube, Facebook, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-soft group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-foreground">Company</h4>
                        <ul className="space-y-4">
                            {["About Us", "Careers", "Awards", "Store Locator"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-foreground">Customer Care</h4>
                        <ul className="space-y-4">
                            {["Track Order", "Contact Us", "Returns", "Shipping Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-foreground">Community</h4>
                        <ul className="space-y-4">
                            {["Blog", "Pet Tribe", "Foundation"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground font-medium">
                        © {new Date().getFullYear()} A to Z Pets. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
