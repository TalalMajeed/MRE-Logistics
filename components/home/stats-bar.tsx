"use client";

import { useEffect, useRef, useState } from "react";
import { Truck, Map, Users, Award } from "lucide-react";

export function StatsBar() {
    const stats = [
        {
            icon: Truck,
            value: 1542,
            suffix: "",
            label: "Parcels Delivered"
        },
        {
            icon: Map,
            value: 20,
            suffix: "+",
            label: "Cities Covered"
        },
        {
            icon: Users,
            value: 1200,
            suffix: "",
            label: "Satisfied Clients"
        },
        {
            icon: Award,
            value: 15,
            suffix: "",
            label: "Awards Won"
        }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));
    const hasAnimatedRef = useRef(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const duration = 2500;

        const startAnimation = () => {
            if (hasAnimatedRef.current) return;
            hasAnimatedRef.current = true;

            const start = performance.now();

            const animate = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                setCounts(
                    stats.map((stat) => Math.floor(stat.value * progress))
                );
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="bg-[#111827] py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-[#1f2937] flex items-center justify-center rounded-full mb-6 group-hover:bg-primary transition-colors duration-300">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-2">
                                {counts[idx].toLocaleString()}
                                {stat.suffix}
                            </h3>
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
