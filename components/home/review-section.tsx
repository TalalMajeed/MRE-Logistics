import { Star } from "lucide-react";

export function ReviewSection() {
    const reviews = [
        {
            text: "Exceptional service from start to finish. Our industrial machinery arrived three days ahead of schedule intact, without a single scratch. We'll be depending on MRE for all future large-scale transports.",
            name: "Ali Raza",
            role: "Supply Chain Manager",
            company: "TechBuild Industries",
        },
        {
            text: "Their contract logistics solutions have revolutionized the way we handle our warehoused stock. We've optimized delivery times by roughly 60% since switching.",
            name: "Hassan Farooq",
            role: "Operations Director",
            company: "Global Retailers",
        }
    ];

    return (
        <section className="bg-[#f3f4f6] py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-primary text-sm font-bold tracking-[0.2em] mb-3 uppercase">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-10 md:p-14 relative group">
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                                ))}
                            </div>
                            <p className="text-lg md:text-xl text-gray-500 font-medium italic leading-relaxed mb-8">
                                &quot;{review.text}&quot;
                            </p>
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                                <div className="w-14 h-14 bg-gray-200 rounded-full bg-cover"
                                    style={{ backgroundImage: "url('/contact-background.webp')" }}
                                />
                                <div>
                                    <h4 className="text-[#111827] font-bold text-lg">{review.name}</h4>
                                    <p className="text-primary text-sm font-bold">{review.role} - <span className="text-gray-400 font-medium">{review.company}</span></p>
                                </div>
                            </div>

                            {/* Decorative Quote Mark */}
                            <div className="absolute top-10 right-10 text-9xl text-gray-100 leading-none font-serif opacity-50 select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                                &quot;
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
