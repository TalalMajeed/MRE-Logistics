import { Truck, Map, Users, Award } from "lucide-react";

export function StatsBar() {
    const stats = [
        {
            icon: Truck,
            count: "1,542",
            label: "Parcels Delivered"
        },
        {
            icon: Map,
            count: "20+",
            label: "Cities Covered"
        },
        {
            icon: Users,
            count: "1,200",
            label: "Satisfied Clients"
        },
        {
            icon: Award,
            count: "15",
            label: "Awards Won"
        }
    ];

    return (
        <div className="bg-[#111827] py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-[#1f2937] flex items-center justify-center rounded-full mb-6 group-hover:bg-primary transition-colors duration-300">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-2">{stat.count}</h3>
                            <p className="text-gray-400 font-bold tracking-wider uppercase text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
