import Link from "next/link";
import { Send, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative w-full h-[350px] mb-20 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/contact-background.webp')" }}
                />
                <div className="absolute inset-0 bg-[#0c1322]/70" />
                <div className="relative z-10 text-center text-white mt-10">
                    <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Contact</h1>
                    <div className="flex items-center justify-center gap-3 text-sm md:text-base font-bold tracking-wider">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-white">Contact</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-full mb-8 transition-transform hover:scale-110 duration-300">
                            <Send className="w-10 h-10 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#111827]">Our Address</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            32-KM Multan Rd, Shamkay<br />Bhattian, Lahore
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-full mb-8 transition-transform hover:scale-110 duration-300">
                            <Phone className="w-10 h-10 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#111827]">Phone Number</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            +92 300 1234567
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-primary flex items-center justify-center rounded-full mb-8 transition-transform hover:scale-110 duration-300">
                            <Mail className="w-10 h-10 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#111827]">Email Address</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            info@mrelogistics.com.pk
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#f3f4f6] py-24 px-4">
                <div className="container mx-auto max-w-4xl bg-transparent">
                    <h2 className="text-3xl md:text-4xl font-black mb-10 text-[#111827]">Feel free to write Us</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                placeholder="Full Name"
                                className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                            />
                            <Input
                                placeholder="Email"
                                type="email"
                                className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                placeholder="Phone"
                                type="tel"
                                className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                            />
                            <Input
                                placeholder="Subject"
                                className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                            />
                        </div>
                        <Textarea
                            placeholder="Write your message"
                            className="bg-white border-transparent focus-visible:ring-primary shadow-sm min-h-[200px] resize-none rounded-none p-6 text-base"
                        />
                        <div className="pt-2">
                            <Button
                                type="button"
                                className="bg-[#111827] text-white hover:bg-black px-10 h-14 text-sm font-bold tracking-wider rounded-none uppercase transition-colors"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}