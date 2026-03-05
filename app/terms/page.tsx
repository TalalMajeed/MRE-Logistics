import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative w-full h-[350px] mb-20 flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/contact-background.webp')" }}
                />
                <div className="absolute inset-0 bg-[#0c1322]/70" />
                <div className="relative z-10 text-white mt-10">
                    <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight px-4">Terms & Conditions</h1>
                    <div className="flex items-center justify-center gap-3 text-sm md:text-base font-bold tracking-wider">
                        <Link href="/" className="hover:text-primary transition-colors uppercase">Home</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-white uppercase">Terms</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-24 max-w-4xl">
                <div className="prose prose-slate max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">1. Introduction</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            Welcome to M Rafique Enterprises (MRE Logistics). These terms and conditions (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our logistics and transport services, you agree to be bound by these Terms and our Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">2. Services Provided</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            MRE Logistics provides nationwide goods transport, haulage, and logistics solutions across Pakistan. We specialize in industrial, commercial, and general cargo transport. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">3. User Responsibilities</h2>
                        <ul className="list-disc pl-6 text-gray-500 font-medium space-y-3">
                            <li>You must provide accurate and complete information when booking shipments.</li>
                            <li>You are responsible for ensuring that all goods provided for transport are properly packed and labeled.</li>
                            <li>You agree to comply with all applicable local and national laws regarding the transport of goods in Pakistan.</li>
                            <li>You must not use our services for the transport of illegal, hazardous, or restricted materials without prior written authorization and proper documentation.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">4. Shipment & Cargo</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            MRE Logistics reserves the right to inspect any cargo provided for transport. We may refuse to transport any goods that we deem unsafe, improperly packed, or in violation of legal regulations. The sender remains liable for any damage caused to our vehicles or staff by undisclosed hazardous materials.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">5. Liability & Insurance</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            While MRE Logistics takes every precaution to ensure the safety of your goods, our liability is limited. We are not responsible for losses or damages caused by:
                        </p>
                        <ul className="list-disc pl-6 text-gray-500 font-medium space-y-3">
                            <li>Acts of God (Force Majeure) including natural disasters and extreme weather.</li>
                            <li>Civil unrest, strikes, or governmental actions.</li>
                            <li>Inherent vice or nature of the goods being transported.</li>
                            <li>Improper packaging or insufficient documentation provided by the sender.</li>
                        </ul>
                        <p className="text-gray-500 font-medium leading-relaxed mt-4 italic">
                            Customers are encouraged to arrange independent insurance for high-value shipments.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">6. Payment Terms</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            Payment schedules and rates are determined at the time of booking confirmation. MRE Logistics reserves the right to exercise a lien on goods in our possession until all outstanding transportation charges are paid in full.
                        </p>
                    </section>

                    <section className="mb-50">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">7. Governing Law</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any legal actions or proceedings arising out of these Terms shall be brought exclusively in the courts of Lahore.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}