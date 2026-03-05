import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
    const generalFaqs = [
        {
            q: "What transportation services do you provide?",
            a: "We provide comprehensive logistics and transportation services across Pakistan, including full truckload (FTL), less-than-truckload (LTL), industrial cargo transport, container movement, and specialized freight solutions. We also offer warehousing and distribution support."
        },
        {
            q: "Which cities do you operate in?",
            a: "We operate nationwide, covering all major commercial and industrial hubs including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, Gujranwala, Peshawar, and Quetta, along with remote and developing industrial zones."
        },
        {
            q: "Do you offer door-to-door delivery services?",
            a: "Yes, we provide reliable door-to-door delivery services across Pakistan, ensuring your cargo is picked up from your location and delivered safely to the final destination."
        },
        {
            q: "How can I track my shipment?",
            a: "We provide shipment tracking through our customer support team and tracking system. You can track your cargo status using your tracking number or by contacting our customer service."
        }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <p className="text-primary text-sm font-bold tracking-[0.2em] mb-3 uppercase">Have Questions?</p>
                    <h2 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="bg-[#f3f4f6] p-8 md:p-12">
                    <Accordion type="single" collapsible className="w-full">
                        {generalFaqs.map((faq, idx) => (
                            <AccordionItem value={`general-${idx}`} key={`general-${idx}`} className="border-b-gray-300">
                                <AccordionTrigger className="text-left text-lg font-bold text-[#111827] hover:text-primary transition-colors py-6">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
