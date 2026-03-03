"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    ChevronDown,
    Search,
    Menu,
    X,
    Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
    "Nationwide Goods Transportation",
    "Full Truckload Services",
    "Less Than Truckload Services",
    "Industrial and Commercial Cargo Transport",
    "Container Transportation (20 ft & 40 ft)",
    "Door-to-Door Delivery Services",
    "Dedicated Fleet Services",
    "Bulk Cargo Transportation",
    "Heavy and Specialized Transport",
    "Contract Logistics Services",
    "Warehouse to Distributor Transportation",
    "Export Transportation Services",
    "Import Transportation Services"
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full flex flex-col items-center">
            {/* Top Bar */}
            <div className="w-full bg-[#111827] text-white py-2 px-4 concealed md:block">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>32-KM Multan Rd, Shamkay Bhattian, Lahore</span>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 border-l border-gray-700 pl-6">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>info@mrelogistics.com.pk</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-primary transition-colors">
                            <Facebook className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <nav className={cn(
                "w-full bg-white transition-all duration-300 z-50 px-4",
                isScrolled ? "fixed top-0 shadow-md py-2" : "relative py-4"
            )}>
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.webp"
                            alt="MRE Logistics Logo"
                            width={180}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="font-semibold text-[#1e293b] hover:text-primary transition-colors relative group">
                            Home
                            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                        <Link href="/about" className="font-semibold text-[#1e293b] hover:text-primary transition-colors relative group">
                            About
                            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 font-semibold text-[#1e293b] hover:text-primary transition-colors">
                                Services <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                            </button>

                            {/* Mega Dropdown */}
                            <div className={cn(
                                "absolute top-full left-[-200px] mt-2 w-[600px] bg-white shadow-xl rounded-lg border border-gray-100 p-6 grid grid-cols-2 gap-4 transition-all duration-300 transform origin-top z-[100]",
                                isServicesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                            )}>
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                                        className="text-sm text-gray-600 hover:text-primary hover:bg-primary/5 p-2 rounded transition-colors block"
                                    >
                                        {service}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/contact" className="font-semibold text-[#1e293b] hover:text-primary transition-colors relative group">
                            Contact
                            <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center border-r pr-4 mr-2">
                            <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary transition-colors" />
                        </div>

                        <Link
                            href="/quote"
                            className="relative hidden sm:inline-block px-8 py-3 bg-primary text-white font-bold transition-all hover:brightness-110"
                            style={{
                                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                            }}
                        >
                            Get Quote <span className="ml-2">»</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={cn(
                    "md:hidden absolute top-full left-0 w-full bg-white border-t transition-all duration-300 overflow-hidden",
                    isMenuOpen ? "max-h-[80vh] border-b pb-4" : "max-h-0"
                )}>
                    <div className="flex flex-col gap-4 p-4">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-semibold px-2 py-1">Home</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="font-semibold px-2 py-1">About</Link>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center justify-between font-semibold px-2 py-1 text-left w-full"
                            >
                                Services <ChevronDown className={cn("w-4 h-4", isServicesOpen && "rotate-180")} />
                            </button>
                            {isServicesOpen && (
                                <div className="flex flex-col gap-2 pl-6 bg-gray-50 py-2 rounded">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-sm text-gray-600 py-1"
                                        >
                                            {service}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="font-semibold px-2 py-1">Contact</Link>
                        <Link
                            href="/quote"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-primary text-white text-center py-3 font-bold rounded mt-2"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
