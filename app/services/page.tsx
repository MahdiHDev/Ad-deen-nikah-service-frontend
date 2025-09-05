import NikahSteps from "@/components/services/NikahSteps";
import ServicesCard from "@/components/services/ServicesCard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Check,
    HeartHandshake,
    HelpCircle,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Scroll,
} from "lucide-react";
import Image from "next/image";
import { philosopher } from "../fonts/fonts";

function Bullet({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-2 text-sm text-stone-700">
            <Check className="h-4 w-4 mt-0.5" />
            <span>{children}</span>
        </div>
    );
}

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
    return (
        <div className="min-h-screen bg-white text-stone-900">
            {/* Top contact bar */}
            {/* <div className="w-full border-b bg-white/80 backdrop-blur">
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
            </div> */}

            {/* Hero Section */}
            <section
                id="home"
                className="py-10 sm:py-16 max-w-6xl mx-auto px-4"
            >
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1
                            className={`text-3xl md:text-5xl font-semibold ${philosopher.className}`}
                        >
                            Nikah Services Tailored for the UK Muslim Community
                        </h1>
                        <p className="mt-4 text-stone-600 leading-relaxed">
                            Personalized Islamic marriage services, whether in
                            person or online. Our Imams guide with clarity and
                            care.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <Button
                                className="rounded-2xl px-4 sm:px-6 py-3"
                                asChild
                            >
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
                        <div className="w-full rounded-3xl border bg-white shadow-xl overflow-hidden">
                            {/* Image Container */}
                            <div className="aspect-[3/2] relative">
                                <Image
                                    src="/images/home/eventImg.jpg"
                                    alt="Nikah Event"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Caption Container */}
                            <div className="p-4">
                                <p className="text-center text-stone-500">
                                    “And among His signs is that He created for
                                    you from yourselves mates that you may find
                                    tranquility in them; and He placed between
                                    you affection and mercy.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Cards */}
            <ServicesCard />

            {/* How it works */}
            <section className="border-t bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <h2
                        className={`text-2xl md:text-3xl font-semibold ${philosopher.className}`}
                    >
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

            <NikahSteps />

            {/* Talaq */}
            <section className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2
                            className={`text-2xl md:text-3xl font-semibold ${philosopher.className}`}
                        >
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
                        <h2
                            className={`text-2xl md:text-3xl font-semibold ${philosopher.className}`}
                        >
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
                        <h2
                            className={`text-2xl md:text-3xl font-semibold ${philosopher.className}`}
                        >
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
            <section id="contact" className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">
                    <div>
                        <h2
                            className={`text-2xl md:text-3xl font-semibold ${philosopher.className}`}
                        >
                            Contact Us
                        </h2>
                        <p className="mt-3 text-stone-600">
                            We operate across major UK cities and beyond. Send
                            us a message and we’ll get back to you promptly.
                        </p>
                        <div className="mt-6 grid gap-3">
                            <div className="inline-flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0" /> +44 7759
                                787115
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0" />{" "}
                                info@nikahservice.co.uk
                            </div>
                            <div className="inline-flex gap-2">
                                <MapPin className="h-4 mt-2 md:mt-1  w-4 shrink-0" />{" "}
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
        </div>
    );
}
