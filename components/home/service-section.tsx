import { Truck, Train, Box, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServiceSection() {
    const services = [
        {
            icon: Truck,
            title: "Road Transport",
            description: "Nationwide ground shipping solutions with GPS tracking and reliable timelines."
        },
        {
            icon: Train,
            title: "Train Freight",
            description: "Economical and high-capacity rail transport for bulk deliveries."
        },
        {
            icon: Box,
            title: "Warehousing",
            description: "Secure storage solutions with modern inventory tracking systems."
        },
        {
            icon: Settings,
            title: "Contract Logistics",
            description: "End-to-end supply chain management tailored to your specific demands."
        }
    ];

    return (
        <section className="bg-[#f3f4f6] py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-primary text-sm font-bold tracking-[0.2em] mb-3 uppercase">What We Do</p>
                    <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight max-w-2xl mx-auto">
                        We Provide Best Logistics Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-[#f3f4f6] flex items-center justify-center rounded-none mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="w-8 h-8 text-[#111827] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#111827]">{service.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link href="/services" className="text-[#111827] font-bold text-sm tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-2">
                                Read More <span className="text-lg">»</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        asChild
                        className="bg-[#111827] text-white hover:bg-black px-10 h-14 text-sm font-bold tracking-wider rounded-none uppercase transition-colors"
                    >
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
