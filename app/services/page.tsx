"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    BookOpen,
    Check,
    Mail,
    Phone,
    Quote,
    Users2,
    Video,
    X,
} from "lucide-react";
import { useState } from "react";

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

const steps = [
    {
        title: "Consultation",
        desc: "Discuss your preferred date, location, and answer questions.",
    },
    { title: "Witnesses", desc: "Two adult male witnesses required." },
    { title: "Mahr (Dowry)", desc: "Agreement on dowry is confirmed." },
    {
        title: "Proposal & Acceptance",
        desc: "Declaration by bride and groom in the ceremony.",
    },
    { title: "Certificates", desc: "Nikah certificates handed to the couple." },
];

const faqs = [
    {
        q: "Do you provide a Nikah certificate?",
        a: "Yes. We issue official Nikah certificates for the couple and witnesses.",
    },
    {
        q: "Are you aligned with a mosque or scholar?",
        a: "Our qualified Imams serve communities across the UK and work with local scholars as needed.",
    },
    {
        q: "Requirements for a valid Nikah?",
        a: "Two adult male witnesses, agreed mahr, and proposal & acceptance from both parties.",
    },
];

const cities = [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Bradford",
    "Glasgow",
    "and more across the UK",
];

export default function ServicesPage() {
    const [compareList, setCompareList] = useState<string[]>([]);
    const toggleCompare = (id: string) => {
        setCompareList((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };
    const compared = features.filter((f) => compareList.includes(f.id));

    return (
        <div className="min-h-screen bg-white text-stone-900">
            {/* Top contact bar */}
            <div className="w-full border-b bg-white/80 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2">
                            <Phone className="h-4 w-4" /> +44 7759 787115
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <Mail className="h-4 w-4" /> info@nikahservice.co.uk
                        </span>
                    </div>
                    <nav className="flex items-center gap-4">
                        <a href="#home" className="hover:underline">
                            Home
                        </a>
                        <a href="#services" className="hover:underline">
                            Services
                        </a>
                        <a href="#about" className="hover:underline">
                            About Us
                        </a>
                        <a href="#quote" className="hover:underline">
                            Request a Quote
                        </a>
                        <a href="#booking" className="hover:underline">
                            Book Now
                        </a>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section id="home" className="py-16 max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-10 items-center"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold">
                            Nikah Services Tailored for the UK Muslim Community
                        </h1>
                        <p className="mt-4 text-stone-600 leading-relaxed">
                            Personalized Islamic marriage services, whether in
                            person or online. Our Imams guide with clarity and
                            care.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button className="rounded-2xl px-6 py-3" asChild>
                                <a href="#booking">Book Your Nikah</a>
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-2xl px-6 py-3"
                                asChild
                            >
                                <a href="#quote">Request a Quote</a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] w-full rounded-3xl border bg-white shadow-xl overflow-hidden grid place-items-center">
                            <Quote className="h-10 w-10 opacity-20" />
                            <p className="px-8 text-center text-stone-500 mt-2">
                                “And among His signs is that He created for you
                                from yourselves mates that you may find
                                tranquility in them; and He placed between you
                                affection and mercy.”
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Services Cards */}
            <section
                id="services"
                className="border-t py-14 max-w-6xl mx-auto px-4"
            >
                <h2 className="text-3xl font-semibold mb-8">
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
                                    <span className="text-xs px-2 py-1 rounded-full bg-stone-100">
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
                                        <th className="p-3 text-left">
                                            Feature
                                        </th>
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
                                        new Set(
                                            compared.flatMap((f) => f.bullets)
                                        )
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
                                                    {f.bullets.includes(
                                                        feat
                                                    ) ? (
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

            {/* Talaq Section, Shahada Section, FAQs, Contact, Footer can be added similarly as in the older full code */}
        </div>
    );
}
