import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
    const faqs = [
        {
            q: "How can I track my shipment?",
            a: "We provide state-of-the-art GPS tracking integrated with your shipping invoice number. Simply enter your shipment code in our tracker to find its precise location."
        },
        {
            q: "Do you offer international freight services?",
            a: "While our core operations are nationwide, we coordinate seamlessly with international shipping lines for both import and export freight routing."
        },
        {
            q: "What types of goods can be transported by your fleet?",
            a: "We cater to a massive variety of goods including construction materials, consumer products, industrial equipment, temperature-controlled cargo, and oversized machinery."
        },
        {
            q: "How are freight quotes calculated?",
            a: "Quotes are transparently derived from origin, destination, cargo weight, volume, and service tier (standard vs expedited)."
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
                        {faqs.map((faq, idx) => (
                            <AccordionItem value={`item-${idx}`} key={idx} className="border-b-gray-300">
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
