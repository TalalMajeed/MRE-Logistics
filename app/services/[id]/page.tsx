import { notFound } from "next/navigation";
import Link from "next/link";
import servicesData from "@/public/services/services.json";
import { CheckCircle2 } from "lucide-react";

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const service = servicesData.find((s) => s.slug === id);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-24 lg:pb-32">
            <div className="relative w-full h-[350px] mb-20 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.image || "/contact-background.webp"}')` }}
                />
                <div className="absolute inset-0 bg-[#0c1322]/70" />
                <div className="relative z-10 text-center text-white mt-10 px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">{service.name}</h1>
                    <div className="flex items-center justify-center gap-3 text-sm md:text-base font-bold tracking-wider flex-wrap">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="text-gray-400">&gt;</span>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-white">{service.name}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-none p-8 md:p-12 border border-gray-100">
                        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-none text-sm font-bold tracking-widest mb-6 uppercase">
                            SERVICE DETAILS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#111827] tracking-tight uppercase">Overview</h2>
                        <p className="text-gray-600 font-medium leading-relaxed text-lg mb-10">
                            {service.description}
                        </p>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-black text-[#111827] tracking-tight uppercase">Key Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f3f4f6] p-8 rounded-none">
                                <div className="flex items-start gap-4 bg-white p-5 rounded-none group hover:bg-primary transition-colors duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-[#111827] mb-1 group-hover:text-white transition-colors">Reliable Service</h4>
                                        <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors">Consistent and dependable transportation.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-5 rounded-none group hover:bg-primary transition-colors duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-[#111827] mb-1 group-hover:text-white transition-colors">Timely Delivery</h4>
                                        <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors">On-time delivery across major destinations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-5 rounded-none group hover:bg-primary transition-colors duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-[#111827] mb-1 group-hover:text-white transition-colors">Secure Handling</h4>
                                        <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors">Your cargo is safe with our team.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white p-5 rounded-none group hover:bg-primary transition-colors duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-[#111827] mb-1 group-hover:text-white transition-colors">Nationwide Network</h4>
                                        <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors">Comprehensive coverage across Pakistan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-10 border-t border-gray-100 flex flex-wrap items-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-white hover:bg-black px-8 py-4 text-sm font-bold tracking-widest rounded-none uppercase transition-all duration-300">
                                Get a Quote
                            </Link>
                            <Link href="/services" className="inline-flex items-center justify-center bg-[#111827] text-white hover:bg-primary px-8 py-4 text-sm font-bold tracking-widest rounded-none uppercase transition-all duration-300">
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        id: service.slug,
    }));
}