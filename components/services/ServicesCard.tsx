"use client";
import { philosopher } from "@/app/fonts/fonts";
import { BookOpen, Check, Users2, Video, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

const features = [
    {
        id: "essential",
        icon: BookOpen,
        title: "Essential Nikah",
        tag: "Popular",
        desc: "Simple ceremony with consultation, English address, and signed Nikah certificates.",
        bullets: [
            "Free pre-ceremony consultation",
            "Imam-led ceremony with guidance",
            "Certificates for couple and witnesses",
        ],
    },
    {
        id: "online",
        icon: Video,
        title: "Online Nikah",
        tag: "Very Convenient",
        desc: "Nikah conducted securely via video call with certificates delivered digitally or by post.",
        bullets: [
            "Remote ceremony & verification",
            "Flexible scheduling across UK",
            "E-signed or mailed certificates",
        ],
    },
    {
        id: "event",
        icon: Users2,
        title: "Hosted Nikah Event",
        tag: "Large Gatherings",
        desc: "Full-service hosting with Qur'an recitation, ceremony, and address.",
        bullets: [
            "On-site coordination and hosting",
            "Qur'anic recitation & English speech",
            "Certificates prepared on the day",
        ],
    },
];

const ServicesCard = ({}) => {
    const [compareList, setCompareList] = useState<string[]>([]);
    const toggleCompare = (id: string) => {
        setCompareList((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };
    const compared = features.filter((f) => compareList.includes(f.id));
    return (
        <section
            id="services"
            className="border-t py-14 max-w-6xl mx-auto px-4"
        >
            <h2
                className={`text-2xl sm:text-3xl font-semibold mb-8 text-center sm:text-left ${philosopher.className}`}
            >
                Choose Your Nikah Option
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                {features.map((f) => (
                    <Card key={f.id} className="rounded-3xl shadow-sm">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <f.icon className="h-6 w-6" />
                                    <CardTitle>{f.title}</CardTitle>
                                </div>
                                <span className="text-xs text-center px-2 py-1 rounded-full bg-stone-100">
                                    {f.tag}
                                </span>
                            </div>
                            <CardDescription className="pt-2">
                                {f.desc}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {f.bullets.map((b) => (
                                    <li
                                        key={b}
                                        className="flex items-start gap-2"
                                    >
                                        <Check className="h-4 w-4 mt-0.5" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center gap-3">
                            <Button className="rounded-2xl" asChild>
                                <a href="#booking">Book Now</a>
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-2xl"
                                onClick={() => toggleCompare(f.id)}
                            >
                                {compareList.includes(f.id)
                                    ? "Remove"
                                    : "Compare"}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Compare Table */}
            {compared.length > 0 && (
                <div className="mt-12 overflow-x-auto">
                    <h3 className="text-xl font-semibold mb-4">
                        Compare Selected Options
                    </h3>
                    <div className="min-w-[600px] border rounded-3xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-stone-100">
                                <tr>
                                    <th className="p-3 text-left">Feature</th>
                                    {compared.map((f) => (
                                        <th
                                            key={f.id}
                                            className="p-3 text-left"
                                        >
                                            {f.title}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from(
                                    new Set(compared.flatMap((f) => f.bullets))
                                ).map((feat) => (
                                    <tr key={feat} className="border-t">
                                        <td className="p-3 font-medium">
                                            {feat}
                                        </td>
                                        {compared.map((f) => (
                                            <td
                                                key={f.id + feat}
                                                className="p-3"
                                            >
                                                {f.bullets.includes(feat) ? (
                                                    <Check className="h-4 w-4 text-green-600" />
                                                ) : (
                                                    <X className="h-4 w-4 text-stone-300" />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesCard;
