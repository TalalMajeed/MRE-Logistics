import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function QuoteSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Form */}
                    <div className="bg-[#f3f4f6] p-10 md:p-14">
                        <p className="text-primary text-sm font-bold tracking-[0.2em] mb-3 uppercase">Estimate Cost</p>
                        <h2 className="text-3xl md:text-4xl font-black mb-8 text-[#111827]">Request A Quote</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    placeholder="Personal Data"
                                    className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                                />
                                <Input
                                    placeholder="Email Address"
                                    type="email"
                                    className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    placeholder="Freight Type"
                                    className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                                />
                                <Input
                                    placeholder="Weight, kg"
                                    className="bg-white border-transparent focus-visible:ring-primary shadow-sm h-14 rounded-none px-6 text-base"
                                />
                            </div>
                            <Textarea
                                placeholder="Special Request / Additional Information"
                                className="bg-white border-transparent focus-visible:ring-primary shadow-sm min-h-[160px] resize-none rounded-none p-6 text-base"
                            />
                            <div className="pt-2">
                                <Button
                                    type="button"
                                    className="bg-primary text-white hover:bg-black px-10 h-14 text-sm font-bold tracking-wider rounded-none uppercase transition-colors w-full md:w-auto"
                                >
                                    Submit Request
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Right Image/Content */}
                    <div className="relative">
                        <div className="aspect-[4/3] bg-gray-200"
                            style={{ backgroundImage: "url('/contact-background.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
                        />
                        <div className="absolute -left-12 bottom-12 bg-[#111827] text-white p-8 max-w-sm hidden md:block">
                            <h3 className="text-2xl font-bold mb-3">Transparent Pricing</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We offer highly competitive rates for our world-class freight and contract logistics services across the nation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
