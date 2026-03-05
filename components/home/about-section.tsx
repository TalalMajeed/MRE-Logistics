import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side Image - Placeholder / Style frame */}
                    <div className="relative group min-h-[400px]">
                        <div className="absolute inset-0 bg-[#f3f4f6]" />
                        <div className="absolute inset-4 bg-gray-200 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('/contact-background.webp')" }}
                        />
                        {/* Decorative Box */}
                        <div className="absolute -bottom-8 -right-8 bg-primary p-8 hidden md:block z-10">
                            <h4 className="text-white text-4xl font-black mb-2">35+</h4>
                            <p className="text-white/90 font-bold uppercase tracking-wider text-sm">Years of Experience</p>
                        </div>
                    </div>

                    {/* Right side content */}
                    <div>
                        <p className="text-primary text-sm font-bold tracking-[0.2em] mb-3 uppercase">About Us</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#111827] leading-tight">
                            Your Trusted Partner in Nationwide Logistics
                        </h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-8">
                            With over 35 years of experience, M Rafique Enterprises provides reliable and secure transport solutions across Pakistan. From industrial equipment to commercial goods, we ensure your cargo reaches its destination with professional precision.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-1">National Coverage</h4>
                                    <p className="text-gray-500 text-sm">Extensive network covering major national routes.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xl font-bold text-[#111827] mb-1">On-Time Delivery</h4>
                                    <p className="text-gray-500 text-sm">Committed to punctuality and strict timeline adherence.</p>
                                </div>
                            </div>
                        </div>

                        <Button
                            asChild
                            className="bg-[#111827] text-white hover:bg-primary px-10 h-14 text-sm font-bold tracking-wider rounded-none uppercase transition-colors"
                        >
                            <Link href="/about">Read More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
