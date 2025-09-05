"use client";

import { philosopher } from "@/app/fonts/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

export default function NikahSteps() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={containerRef}
            className="relative border-t h-[300vh] bg-stone-50 p-4"
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                <h2
                    className={`text-2xl md:text-3xl font-semibold ${philosopher.className}`}
                >
                    What happens during a Nikah?
                </h2>
                <p className="mt-3 text-stone-600 max-w-3xl">
                    Our Imam ensures the presence of witnesses and the free
                    consent of both bride and groom. Below is a simple outline
                    of the process.
                </p>

                <div className="relative w-full max-w-4xl h-[400px] mt-10">
                    {steps.map((s, i) => {
                        const start = i * (1 / steps.length);
                        const end = (i + 1) * (1 / steps.length);

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const y = useTransform(
                            scrollYProgress,
                            [start, end],
                            ["100%", `${i * 20}px`] // leave ~30px visible from previous
                        );
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(
                            scrollYProgress,
                            [start, end],
                            [0, 1]
                        );

                        return (
                            <motion.div
                                key={s.title}
                                style={{ y, opacity }}
                                className="absolute top-0 left-0 w-full rounded-3xl border bg-white p-6 shadow-xl py-15"
                            >
                                <div className="text-xs text-stone-500 mb-1">
                                    Step {i + 1}
                                </div>
                                <div className="font-medium">{s.title}</div>
                                <div className="text-sm text-stone-600 mt-1">
                                    {s.desc}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
