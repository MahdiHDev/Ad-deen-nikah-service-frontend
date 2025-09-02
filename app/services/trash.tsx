import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
    BookOpen,
    Check,
    HeartHandshake,
    HelpCircle,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Quote,
    Scroll,
    Users2,
    Video,
} from "lucide-react";
import React from "react";

// Single-file Services page. White, clean, and event-friendly.
// Replace links/handlers with your app routes as needed.

const features = [
    {
        icon: BookOpen,
        title: "Essential Nikah",
        tag: "Popular",
        desc: "Straightforward ceremony with English address and signed Nikah certificates.",
        bullets: [
            "Free pre-ceremony consultation",
            "Imam-led ceremony with brief advice",
            "Certificates for the couple & witnesses",
        ],
    },
    {
        icon: Video,
        title: "Online Nikah",
        tag: "Very Convenient",
        desc: "Nikah conducted securely via video call. Certificates delivered digitally or by post.",
        bullets: [
            "Remote ceremony & identity checks",
            "Flexible scheduling across UK timezones",
            "E-signed or posted certificates",
        ],
    },
    {
        icon: Users2,
        title: "Hosted Nikah Event",
        tag: "For Large Gatherings",
        desc: "Full-service hosting with Qur'an recitation, ceremony, and address.",
        bullets: [
            "On‑site hosting and coordination",
            "Qur'anic recitation & English talk",
            "Certificates prepared on the day",
        ],
    },
];

const steps = [
    {
        title: "Consultation",
        desc: "We discuss your circumstances, preferred date, and location, and answer any questions.",
    },
    {
        title: "Witnesses",
        desc: "Two sane adult male witnesses are required to be present for the Nikah.",
    },
    {
        title: "Mahr (Dowry)",
        desc: "The bride and groom agree the mahr in advance as part of the Nikah contract.",
    },
    {
        title: "Proposal & Acceptance",
        desc: "In the ceremony, proposal and acceptance are declared and affirmed.",
    },
    {
        title: "Certificates",
        desc: "Nikah certificates are completed and handed to the couple.",
    },
];

const faqs = [
    {
        q: "Do you issue a Nikah certificate?",
        a: "Yes. Upon completion of the ceremony, we provide official Nikah certificates for the couple and witnesses. (Note: This is a religious document and not a UK civil marriage certificate.)",
    },
    {
        q: "Are you connected to a specific mosque or scholar?",
        a: "Our qualified Imams serve communities across the UK and operate in collaboration with local scholars and centres where appropriate.",
    },
    {
        q: "What are the core requirements for a valid Nikah?",
        a: "Presence of two sane adult male witnesses, agreement on mahr, and clear proposal and acceptance from both bride and groom.",
    },
];

const cities = [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Bradford",
    "Glasgow",
    "and many more across the UK",
];

export default function ServicesPage() {
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

            {/* Hero */}
            <section id="home" className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-white" />
                <div className="max-w-6xl mx-auto px-4 py-16 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-10 items-center"
                    >
                        <div>
                            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                                Nikah Services for the UK Muslim Community
                            </h1>
                            <p className="mt-4 text-stone-600 leading-relaxed">
                                A dedicated, personal service for Islamic
                                marriage (Nikah) — tailored to your needs,
                                whether in person or online. Our Imams focus on
                                clarity, compassion, and adherence to Islamic
                                principles.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button
                                    className="rounded-2xl px-6 py-5"
                                    asChild
                                >
                                    <a href="#booking">Book Your Nikah</a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-2xl px-6 py-5"
                                    asChild
                                >
                                    <a href="#quote">Request a Quote</a>
                                </Button>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm">
                                <Stat number="1.2k+" label="Nikahs Conducted" />
                                <Stat number="7+" label="Qualified Imams" />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] w-full rounded-3xl border bg-white shadow-xl overflow-hidden">
                                <div className="absolute inset-0 grid place-items-center">
                                    <Quote className="h-10 w-10 opacity-20" />
                                    <p className="px-8 text-center text-stone-500">
                                        “And among His signs is that He created
                                        for you from yourselves mates that you
                                        may find tranquility in them; and He
                                        placed between you affection and mercy.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <div className="flex items-end justify-between gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Which Nikah option suits you?
                        </h2>
                        <Button variant="outline" className="rounded-2xl">
                            Compare Options
                        </Button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <Card className="rounded-3xl shadow-sm">
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
                                                    <Check className="h-4 w-4 mt-0.5" />{" "}
                                                    <span>{b}</span>
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
                                            asChild
                                        >
                                            <a href="#quote">Get a Quote</a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="border-t bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        What happens during a Nikah?
                    </h2>
                    <p className="mt-3 text-stone-600 max-w-3xl">
                        Our Imam ensures the presence of witnesses and the free
                        consent of both bride and groom. Below is a simple
                        outline of the process.
                    </p>
                    <div className="mt-8 grid md:grid-cols-5 gap-4">
                        {steps.map((s, i) => (
                            <div
                                key={s.title}
                                className="rounded-3xl border bg-white p-5 shadow-sm"
                            >
                                <div className="text-xs text-stone-500 mb-1">
                                    Step {i + 1}
                                </div>
                                <div className="font-medium">{s.title}</div>
                                <div className="text-sm text-stone-600 mt-1">
                                    {s.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Talaq */}
            <section className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Islamic Divorce (Talaq)
                        </h2>
                        <p className="mt-3 text-stone-600">
                            Divorce is a last resort in Islam. Before any
                            decision, we encourage reconciliation: sincere
                            dialogue, family mediation, and guidance from
                            qualified Imams. If reconciliation is not possible,
                            we provide a structured, respectful pathway that
                            upholds fairness and dignity for both parties.
                        </p>
                        <div className="mt-4 grid sm:grid-cols-2 gap-3">
                            <Bullet>
                                Confidential guidance and documentation
                            </Bullet>
                            <Bullet>
                                Clear steps from start to conclusion
                            </Bullet>
                            <Bullet>
                                Compassionate, faith‑aligned support
                            </Bullet>
                            <Bullet>
                                Coordination with local scholars where needed
                            </Bullet>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <Button className="rounded-2xl" asChild>
                                <a href="#contact">Contact Us</a>
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-2xl"
                                asChild
                            >
                                <a href="#faqs">Read FAQs</a>
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-3xl border bg-white shadow-sm p-6">
                        <div className="flex items-center gap-3">
                            <HeartHandshake className="h-6 w-6" />
                            <div className="font-medium">Our approach</div>
                        </div>
                        <p className="mt-3 text-sm text-stone-600">
                            We aim for reconciliation first. If not achievable,
                            we proceed with clarity and care, ensuring all steps
                            follow Islamic guidance and local best practice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Shahada */}
            <section className="border-t bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
                    <div className="rounded-3xl border bg-white shadow-sm p-6 order-2 md:order-1">
                        <div className="flex items-center gap-3">
                            <Scroll className="h-6 w-6" />
                            <div className="font-medium">
                                Embracing Islam (Shahada)
                            </div>
                        </div>
                        <p className="mt-3 text-sm text-stone-600">
                            Shahada is the testimony of faith in the oneness of
                            Allah and in Muhammad (peace and blessings be upon
                            him) as His final messenger. If you are ready to
                            accept Islam or wish to learn more about the
                            process, we can guide you step by step.
                        </p>
                        <div className="mt-4 grid sm:grid-cols-2 gap-3">
                            <Bullet>Private or public declaration</Bullet>
                            <Bullet>Aftercare and learning resources</Bullet>
                            <Bullet>
                                Supportive, judgement‑free environment
                            </Bullet>
                            <Bullet>Certificate of Shahada upon request</Bullet>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Thinking about taking Shahada?
                        </h2>
                        <p className="mt-3 text-stone-600">
                            Speak with an Imam, ask questions freely, and
                            proceed at your own pace. We’re here to help with
                            sincerity and respect.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <Button className="rounded-2xl" asChild>
                                <a href="#contact">Talk to us</a>
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-2xl"
                                asChild
                            >
                                <a href="#faqs">Common Questions</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <div className="flex items-center gap-3 mb-6">
                        <HelpCircle className="h-6 w-6" />
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            FAQs
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((f, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="text-left">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-stone-700">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Contact / Coverage */}
            <section id="contact" className="border-t bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Contact Us
                        </h2>
                        <p className="mt-3 text-stone-600">
                            We operate across major UK cities and beyond. Send
                            us a message and we’ll get back to you promptly.
                        </p>
                        <div className="mt-6 grid gap-3">
                            <div className="inline-flex items-center gap-2">
                                <Phone className="h-4 w-4" /> +44 7759 787115
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <Mail className="h-4 w-4" />{" "}
                                info@nikahservice.co.uk
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4" />{" "}
                                {cities.join(" · ")}
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <Button
                                variant="outline"
                                className="rounded-2xl"
                                asChild
                            >
                                <a
                                    href="https://wa.me/447759787115"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    WhatsApp
                                </a>
                            </Button>
                            <Button className="rounded-2xl" asChild>
                                <a href="#booking">Book Now</a>
                            </Button>
                        </div>
                    </div>
                    <form
                        id="quote"
                        className="rounded-3xl border bg-white shadow-sm p-6"
                    >
                        <div className="text-xl font-medium">
                            Send us a message
                        </div>
                        <p className="text-sm text-stone-600 mb-4">
                            Fill out the form and we’ll reply shortly.
                        </p>
                        <div className="grid gap-4">
                            <div>
                                <label className="text-sm">Name</label>
                                <Input placeholder="Your full name" />
                            </div>
                            <div>
                                <label className="text-sm">Email</label>
                                <Input
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Message</label>
                                <Textarea
                                    placeholder="How can we help?"
                                    rows={5}
                                />
                            </div>
                            <Button className="rounded-2xl">Send</Button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="text-lg font-semibold">
                            nikahService
                        </div>
                        <p className="mt-2 text-sm text-stone-600">
                            A community initiative offering tailored Islamic
                            marriage (Nikah) services across the United Kingdom.
                        </p>
                    </div>
                    <div>
                        <div className="font-medium mb-2">Services</div>
                        <ul className="space-y-1 text-sm text-stone-700">
                            <li>
                                <a href="#services" className="hover:underline">
                                    Nikah Service
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:underline">
                                    Understanding Nikah
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:underline">
                                    Online Nikah
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Islamic Divorce
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Accepting Islam
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium mb-2">Connect</div>
                        <ul className="space-y-1 text-sm text-stone-700">
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/447759787115"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-xs text-stone-500 py-6 border-t">
                    © {new Date().getFullYear()} The Nikah Service. All rights
                    reserved.
                </div>
            </footer>
        </div>
    );
}

function Stat({ number, label }: { number: string; label: string }) {
    return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="text-2xl font-semibold">{number}</div>
            <div className="text-xs text-stone-500">{label}</div>
        </div>
    );
}

function Bullet({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-2 text-sm text-stone-700">
            <Check className="h-4 w-4 mt-0.5" />
            <span>{children}</span>
        </div>
    );
}
