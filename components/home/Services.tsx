import { philosopher } from "@/app/fonts/fonts";
import React from "react";
import {
    FaComments,
    FaHandshake,
    FaHeartBroken,
    FaMosque,
} from "react-icons/fa";

const services = [
    {
        title: "Nikah Services",
        description:
            "We offer Nikah in person & online via video conferencing, available nationwide and internationally.",
        points: ["Simple Nikah", "Nikah Event", "Online Nikah"],
        icon: <FaHandshake className="text-gray-700 text-5xl mb-4" />,
    },
    {
        title: "Talaq / Khula",
        description:
            "The right of divorce is given to the husband unless stated otherwise in the marriage contract.",
        points: [],
        icon: <FaHeartBroken className="text-gray-700 text-5xl mb-4" />,
    },
    {
        title: "Shahadah",
        description:
            "For those who have decided to embrace the Islamic faith. A free service before Nikah or as you wish.",
        points: [],
        icon: <FaMosque className="text-gray-700 text-5xl mb-4" />,
    },
    {
        title: "Consultation",
        description:
            "Holistic Islamic counselling on faith, culture, family, and personal wellbeing.",
        points: [],
        icon: <FaComments className="text-gray-700 text-5xl mb-4" />,
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-14 bg-gray-100 px-4 sm:px-6">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2
                    className={`text-3xl sm:text-4xl font-bold text-gray-800 ${philosopher.className}`}
                >
                    Services We Offer
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    We provide a range of Islamic services with professionalism,
                    care, and deep respect for tradition.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-to-b from-white to-gray-100 p-8 rounded-2xl shadow-md text-center flex flex-col justify-between min-h-[340px] border border-gray-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:scale-105"
                    >
                        <div>
                            {service.icon}
                            <h3
                                className={`text-xl font-bold text-gray-800 mb-3 ${philosopher.className}`}
                            >
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {service.points.length > 0 && (
                                <ul className="text-gray-600 text-sm mt-4 space-y-1 list-disc list-inside">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="font-medium">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <button className="bg-gray-800 text-white mt-6 py-2 px-5 rounded-full text-sm font-semibold hover:bg-gray-700">
                            Request a Quote
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
