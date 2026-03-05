import Link from "next/link";
import { Truck, Globe, Shield, Clock } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative w-full h-[350px] mb-20 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/contact-background.webp')" }}
                />
                <div className="absolute inset-0 bg-[#0c1322]/70" />
                <div className="relative z-10 text-center text-white mt-10">
                    <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">About Us</h1>
                    <div className="flex items-center justify-center gap-3 text-sm md:text-base font-bold tracking-wider">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-white">About</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-6 text-[#111827] leading-tight">We Provide The Best Logistics Solutions</h3>
                        <p className="text-gray-500 font-medium leading-relaxed mb-6 text-lg">
                            MRE Logistics is a premier logistics and supply chain service provider based in Lahore, Pakistan. We are committed to delivering safe, reliable, and efficient transportation solutions that empower businesses to scale their operations with ease.
                        </p>
                        <p className="text-gray-500 font-medium leading-relaxed mb-8 text-lg">
                            With years of industry expertise and a dedicated team, we handle everything from local distribution to complex supply chain management, ensuring your cargo reaches its destination exactly when you need it.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none shrink-0">
                                    <Truck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-2">Fast Delivery</h4>
                                    <p className="text-gray-500 font-medium">Timely and secure delivery of your goods.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none shrink-0">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-2">Safe & Secure</h4>
                                    <p className="text-gray-500 font-medium">Guaranteed safety for all your shipments.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none shrink-0">
                                    <Globe className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-2">Global Reach</h4>
                                    <p className="text-gray-500 font-medium">Connecting your business to the world.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none shrink-0">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-2">24/7 Support</h4>
                                    <p className="text-gray-500 font-medium">Always here to assist with your logistics needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[600px] bg-gray-100 rounded-none overflow-hidden flex items-center justify-center">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/contact-background.webp')" }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 bg-white p-8 rounded-none max-w-xs text-center transform translate-y-12 translate-x-12 hidden md:block border-b-4 border-primary">
                            <h3 className="text-4xl font-black text-[#111827] mb-2">10+</h3>
                            <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-[#f3f4f6] py-24 px-4">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Mission</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-[#111827]">Connecting the world with logistics</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-10 rounded-none hover:-translate-y-2 transition-transform duration-300 group">
                            <h4 className="text-2xl font-bold text-[#111827] mb-4">Quality Service</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                We go above and beyond to provide exceptional service that exceeds expectations, focusing on reliability and excellence in everything we do.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-none hover:-translate-y-2 transition-transform duration-300 group">
                            <h4 className="text-2xl font-bold text-[#111827] mb-4">Innovation</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                We embrace the latest technologies to create smarter, faster, and more efficient logistics solutions that drive industry progress.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-none hover:-translate-y-2 transition-transform duration-300 group">
                            <h4 className="text-2xl font-bold text-[#111827] mb-4">Sustainability</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Committed to reducing our carbon footprint through eco-friendly practices that support a healthier planet and a sustainable future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}