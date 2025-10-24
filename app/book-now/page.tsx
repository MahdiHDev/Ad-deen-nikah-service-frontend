"use client";
import ContactDetails from "@/components/ContactDetails";
import { useState } from "react";

const steps = ["Service", "Details", "Review"];

export default function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState<"next" | "back">("next");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        country: "",
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
        <div className="max-w-7xl mx-auto p-4 ">
            <h1 className="text-3xl mt-4 mb-8">Booking</h1>
            <ContactDetails />
            <div className="p-6 bg-white rounded-2xl border-gray-300 border  overflow-hidden relative">
                {/* Stepper */}
                <div className="flex justify-between items-center mb-8 relative">
                    {/* Line */}
                    <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 rounded-full">
                        <div
                            className="h-1 bg-blue-600 rounded-full transition-all duration-500"
                            style={{
                                width: `${(step / (steps.length - 1)) * 100}%`,
                            }}
                        />
                    </div>

                    {steps.map((label, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center relative z-10 flex-1"
                        >
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold transition-all duration-300 ${
                                    index <= step
                                        ? "bg-green-600 scale-110"
                                        : "bg-gray-300 scale-100"
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
                <form
                    onSubmit={handleSubmit}
                    className="relative h-56 overflow-hidden"
                >
                    {/* Step container */}
                    <div
                        key={step}
                        className={`absolute w-full transition-all duration-500 ease-in-out ${
                            direction === "next"
                                ? "translate-x-0 animate-slideInRight"
                                : "translate-x-0 animate-slideInLeft"
                        }`}
                    >
                        {step === 0 && (
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border p-2 rounded"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                />
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
                        )}

                        {step === 1 && (
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="w-full border p-2 rounded"
                                    value={formData.city}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            city: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Country"
                                    className="w-full border p-2 rounded"
                                    value={formData.country}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            country: e.target.value,
                                        })
                                    }
                                />
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
                                    <strong>City:</strong> {formData.city}
                                </p>
                                <p>
                                    <strong>Country:</strong> {formData.country}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-8 absolute bottom-0 left-0 right-0">
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
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
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
