import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative w-full h-[350px] mb-20 flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/contact-background.webp')" }}
                />
                <div className="absolute inset-0 bg-[#0c1322]/70" />
                <div className="relative z-10 text-white mt-10">
                    <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight px-4">Privacy Policy</h1>
                    <div className="flex items-center justify-center gap-3 text-sm md:text-base font-bold tracking-wider">
                        <Link href="/" className="hover:text-primary transition-colors uppercase">Home</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-white uppercase">Privacy</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-24 max-w-4xl">
                <div className="prose prose-slate max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">1. Introduction</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            At M Rafique Enterprises (MRE Logistics), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explain how we collect, use, and safeguard your information when you visit our website or use our logistics services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">2. Information We Collect</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc pl-6 text-gray-500 font-medium space-y-3">
                            <li><strong>Personal Identification:</strong> Name, email address, phone number, and mailing address.</li>
                            <li><strong>Shipment Details:</strong> Origin and destination addresses, cargo descriptions, and recipient information.</li>
                            <li><strong>Payment Information:</strong> Transaction details and billing information (we do not store sensitive credit card data on our servers).</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses and browser types.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">3. How We Use Your Information</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            The information we collect is used for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-500 font-medium space-y-3">
                            <li>Processing and managing your shipment bookings.</li>
                            <li>Communicating with you regarding service updates or inquiries.</li>
                            <li>Improving our website and logistics operations.</li>
                            <li>Complying with legal and regulatory requirements in Pakistan.</li>
                            <li>Preventing fraudulent activities and ensuring the security of our services.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">4. Data Sharing and Disclosure</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            We do not sell or rent your personal information to third parties. We may share your information only with:
                        </p>
                        <ul className="list-disc pl-6 text-gray-500 font-medium space-y-3">
                            <li><strong>Service Providers:</strong> Partners who assist in transportation, delivery, and IT support.</li>
                            <li><strong>Legal Authorities:</strong> When required by law or to protect the rights and safety of MRE Logistics and its users.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">5. Data Security</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">6. Cookies</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain parts of our site.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">7. Your Rights</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            You have the right to access, update, or request the deletion of your personal information held by us. To exercise these rights, please contact our privacy team at the email provided below.
                        </p>
                    </section>

                    <section className="mb-50">
                        <h2 className="text-3xl font-black text-[#111827] mb-6">8. Changes to This Policy</h2>
                        <p className="text-gray-500 font-medium leading-relaxed mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We recommend reviewing this policy periodically for updates.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}