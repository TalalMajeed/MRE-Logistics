import { ShieldCheck, Clock, ThumbsUp, Headset } from "lucide-react";

export function MotivationSection() {
    const reasons = [
        {
            icon: ShieldCheck,
            title: "Secured Transport",
            desc: "Advanced cargo security protocols at every stage."
        },
        {
            icon: Clock,
            title: "Punctual Delivery",
            desc: "Highly optimized routing to ensure zero delays."
        },
        {
            icon: ThumbsUp,
            title: "Reliability",
            desc: "Guaranteed condition maintenance for all goods."
        },
        {
            icon: Headset,
            title: "24/7 Support",
            desc: "Always available customer support and tracking."
        }
    ];

    return (
        <section className="bg-[#111827] py-24 text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-primary text-sm font-bold tracking-[0.2em] mb-3 uppercase">Why Choose Us</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            More Than Just A Transport Company
                        </h2>
                        <p className="text-gray-400 font-medium leading-relaxed mb-10 text-lg">
                            We bring modern technology and extensive experience together to simplify complex logistical challenges, delivering absolute peace of mind for your business supply chains.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {reasons.map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group min-h-[500px] hidden lg:block">
                        {/* Graphic Frame */}
                        <div className="absolute inset-0 bg-primary translate-x-4 -translate-y-4" />
                        <div className="absolute inset-0 bg-cover bg-center z-10"
                            style={{ backgroundImage: "url('/contact-background.webp')" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
