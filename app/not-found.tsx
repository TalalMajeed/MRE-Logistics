import Link from "next/link";
import { MoveLeft, Truck } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[450px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/contact-background.webp')" }}
                />
                <div className="absolute inset-0 bg-[#0c1322]/70" />
                <div className="relative z-10 text-center text-white mt-10 px-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none">
                        <span className="text-[12rem] md:text-[20rem] font-black leading-none opacity-10 tracking-tighter">404</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">Page Not Found</h2>
                    <div className="flex items-center justify-center gap-3 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-primary">404 Error</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 -mt-24 relative z-20 pb-24">
                <div className="max-w-3xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-10 md:p-20 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8">
                        <Truck className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#111827] mb-4">Lost Your Way?</h3>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-[#111827] text-white hover:bg-black px-10 py-4 text-sm font-bold tracking-wider rounded-none uppercase transition-all hover:gap-4 group"
                        >
                            <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-primary text-white hover:brightness-110 px-10 py-4 text-sm font-bold tracking-wider rounded-none uppercase transition-all"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
