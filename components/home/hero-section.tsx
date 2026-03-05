import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/contact-background.webp')" }}
            />
            <div className="absolute inset-0 bg-[#0c1322]/70" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-10">
                <p className="text-primary text-sm md:text-base font-bold tracking-[0.2em] mb-4 uppercase">
                    Your Reliable Logistics Partner
                </p>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                    Fast & Safe Delivery <br />
                    Worldwide
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto">
                    We provide top-notch transportation and contract logistics services to ensure your goods reach their destination securely and on time.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        asChild
                        className="bg-primary text-white hover:bg-black px-8 h-14 text-sm font-bold tracking-wider rounded-none uppercase transition-colors"
                    >
                        <Link href="/services">Our Services</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 h-14 text-sm font-bold tracking-wider rounded-none uppercase transition-colors"
                    >
                        <Link href="/#quote-section">Get A Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
