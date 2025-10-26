"use client";
import ContactDetails from "@/components/ContactDetails";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const steps = ["Service", "Details", "Review"];

export default function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState<"next" | "back">("next");
    const [formData, setFormData] = useState({
        service: "",
        services: ["Simple Nikah", "Online Nikah", "Event Nikah", "Shahadah"],
        name: "",
        email: "",
        city: "",
        country: "",
        date: "",
        time: "",
        venue: "",
        contactNumber: "",
        personalAddress: "",
        additionalInfo: "",
        details: "",
    });

    const nextStep = () => {
        setDirection("next");
        setStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const prevStep = () => {
        setDirection("back");
        setStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("✅ Submitted data:", formData);
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl my-2 md:my-4 font-semibold text-center">
                Booking
            </h1>
            {/* ✅ Floating WhatsApp Icon */}
            <Link
                href="https://api.whatsapp.com/send?phone=447917581501&text=Hi!%20I%27d%20like%20to%20book%20a%20Nikah%20service."
                target="_blank"
                className="flex items-center justify-center pb-6 gap-2"
            >
                <FaWhatsapp className=" text-3xl text-green-500" />
                <p className="font-semibold">For Quick Response</p>
            </Link>
            <ContactDetails />
            {/* <div className="space-y-2 text-center bg-green-600 p-6 mb-5 md:mb-10 rounded-md text-white">
                <Link
                    href={"https://api.whatsapp.com/send?phone=447917581501"}
                    className="flex justify-center items-center gap-2 text-2xl md:text-4xl font-bold cursor-pointer duration-300"
                >
                    <h2>Whats App Now</h2> <FaWhatsapp className="mt-1" />
                </Link>
                <p>(For Quick Response)</p>
            </div> */}
            <div className="p-6 bg-white   overflow-hidden relative">
                {/* Stepper */}
                <div className="flex justify-between items-center mb-8 relative">
                    {/* Line */}
                    <div className="absolute top-4 left-0 w-[98%] h-1 bg-gray-200 rounded-full">
                        <div
                            className="h-1 bg-green-600 rounded-full transition-all duration-500"
                            style={{
                                width: `${(step / (steps.length - 1)) * 100}%`,
                            }}
                        />
                    </div>

                    {steps.map((label, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-between relative z-10"
                        >
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full border font-semibold transition-all duration-300 text-white ${
                                    index <= step
                                        ? "bg-green-600  scale-110"
                                        : "bg-white !text-gray-500 scale-100"
                                }`}
                            >
                                {index + 1}
                            </div>
                            <p
                                className={`text-xs mt-2 transition-colors duration-300 ${
                                    index <= step
                                        ? "text-green-600 font-medium"
                                        : "text-gray-400"
                                }`}
                            >
                                {label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="relative">
                    {/* Step container */}
                    <div
                        key={step}
                        className={` w-full transition-all duration-500 ease-in-out ${
                            direction === "next"
                                ? "translate-x-0 animate-slideInRight"
                                : "translate-x-0 animate-slideInLeft"
                        }`}
                    >
                        {step === 0 && (
                            <div className="space-y-4">
                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-1">
                                        Service
                                    </label>
                                    <select
                                        className="w-full border p-2 rounded"
                                        value={formData.service}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                service: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        {formData.services.map((s, i) => (
                                            <option key={i} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2">
                                    <div className="w-full">
                                        <label className="block text-sm font-medium mb-1">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="Full Name"
                                            className="w-full border p-2 rounded"
                                            value={formData.date}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    date: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-sm font-medium mb-1">
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            placeholder="Full Name"
                                            className="w-full border p-2 rounded"
                                            value={formData.time}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    time: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Venue Address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="XXXX Hotel, Central London, Post Code XXXX, United Kingdom"
                                        className="w-full border p-2 rounded"
                                        value={formData.venue}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                venue: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="flex-col md:flex-row flex gap-4">
                                    <div className="w-full">
                                        <label className="block text-sm font-medium mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full border p-2 rounded"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full border p-2 rounded"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex-col md:flex-row flex gap-4">
                                    <div className="w-full">
                                        <label className="block text-sm font-medium mb-1">
                                            Contact Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="+44-XXXXXXXXX"
                                            className="w-full border p-2 rounded"
                                            value={formData.contactNumber}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    contactNumber:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-sm font-medium mb-1">
                                            Personal Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="House no. x, Central London, Post Code XXXX, United Kingdom"
                                            className="w-full border p-2 rounded"
                                            value={formData.personalAddress}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    personalAddress:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-1">
                                        Details
                                    </label>
                                    <textarea
                                        className="w-full border p-2 rounded"
                                        placeholder="write text..."
                                        value={formData.details}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                details: e.target.value,
                                            })
                                        }
                                    ></textarea>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-gray-700">
                                    Review Info
                                </h3>
                                <p>
                                    <strong>Name:</strong> {formData.name}
                                </p>
                                <p>
                                    <strong>Email:</strong> {formData.email}
                                </p>
                                <p>
                                    <strong>Contact Number:</strong>{" "}
                                    {formData.contactNumber}
                                </p>
                                <p>
                                    <strong>Services:</strong>{" "}
                                    {formData.service}
                                </p>
                                <p>
                                    <strong>Date:</strong> {formData.date}
                                </p>
                                <p>
                                    <strong>Time:</strong> {formData.time}
                                </p>
                                <p>
                                    <strong>Venu Address:</strong>{" "}
                                    {formData.venue}
                                </p>
                                <p>
                                    <strong>Personal Address:</strong>{" "}
                                    {formData.personalAddress}
                                </p>
                                <p>
                                    <strong>Details:</strong> {formData.details}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-8 ">
                        {step > 0 ? (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition"
                            >
                                Back
                            </button>
                        ) : (
                            <div />
                        )}

                        {step < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
