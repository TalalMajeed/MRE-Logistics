import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-white pt-24 pb-8 px-4 relative mt-20">
            {/* CTA Banner */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%] w-full max-w-6xl px-4 z-10">
                <div className="bg-primary p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                        <svg width="300" height="300" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <p className="text-white/90 text-sm font-bold tracking-[0.2em] mb-3 uppercase">Get In Touch</p>
                        <h2 className="text-white text-2xl md:text-3xl font-black leading-tight max-w-md">
                            Looking For The Best Logistics Transport Services
                        </h2>
                    </div>

                    <Link
                        href="/quote"
                        className="relative z-10 bg-[#111827] text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-black transition-all group flex items-center gap-3"
                    >
                        Request A Quote <span className="group-hover:translate-x-1 transition-transform text-lg">»</span>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">MRE Logistics</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Leading provider of nationwide goods transportation and contract logistics services.
                        Delivering excellence across Pakistan.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b-2 border-primary pb-2 inline-block text-primary-foreground">Quick Links</h3>
                    <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b-2 border-primary pb-2 inline-block text-primary-foreground">Contact Us</h3>
                    <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                        <li className="flex gap-3 items-start">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>32-KM Multan Rd, Shamkay Bhattian, Lahore</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span>+92 300 1234567</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>info@mrelogistics.com.pk</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b-2 border-primary pb-2 inline-block text-primary-foreground">Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-800 border-none px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary outline-none rounded-l text-white"
                        />
                        <button className="bg-primary px-4 py-2 font-bold rounded-r hover:brightness-110 transition-colors">
                            Go
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-primary-foreground/60">
                <p>© {new Date().getFullYear()} MRE Logistics. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;