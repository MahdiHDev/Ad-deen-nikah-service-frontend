"use client";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { philosopher } from "../fonts/fonts";

const page = () => {
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
    return (
        <div>
            <div className="max-w-7xl mx-auto p-4 md:py-10">
                <h1
                    className={`text-4xl text-center font-bold mb-4 ${philosopher.className}`}
                >
                    Request Quote
                </h1>
                <h2 className="mb-4 text-center mx-auto max-w-2xl">
                    To receive a precise quote, please fill in the request form
                    and kindly provide your correct contact details, we will get
                    back to you within 24 hours.
                </h2>
                <Link
                    href="https://api.whatsapp.com/send?phone=447917581501&text=Hi!%20I%27d%20like%20to%20book%20a%20Nikah%20service."
                    target="_blank"
                    className="flex items-center justify-center pb-6 gap-2"
                >
                    <FaWhatsapp className=" text-3xl text-green-500" />
                    <p className="font-semibold">For Quick Response</p>
                </Link>

                <form>
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border p-2 rounded"
                                    // value={formData.date}
                                    // onChange={(e) =>
                                    //     setFormData({
                                    //         ...formData,
                                    //         date: e.target.value,
                                    //     })
                                    // }
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border p-2 rounded"
                                    // value={formData.time}
                                    // onChange={(e) =>
                                    //     setFormData({
                                    //         ...formData,
                                    //         time: e.target.value,
                                    //     })
                                    // }
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="w-full border p-2 rounded"
                                    // value={formData.date}
                                    // onChange={(e) =>
                                    //     setFormData({
                                    //         ...formData,
                                    //         date: e.target.value,
                                    //     })
                                    // }
                                />
                            </div>
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
                        </div>

                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Nikah Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="Full Name"
                                    className="w-full border p-2 rounded"
                                    // value={formData.date}
                                    // onChange={(e) =>
                                    //     setFormData({
                                    //         ...formData,
                                    //         date: e.target.value,
                                    //     })
                                    // }
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Nikah Time
                                </label>
                                <input
                                    type="time"
                                    placeholder="Full Name"
                                    className="w-full border p-2 rounded"
                                    // value={formData.time}
                                    // onChange={(e) =>
                                    //     setFormData({
                                    //         ...formData,
                                    //         time: e.target.value,
                                    //     })
                                    // }
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
                                // value={formData.venue}
                                // onChange={(e) =>
                                //     setFormData({
                                //         ...formData,
                                //         venue: e.target.value,
                                //     })
                                // }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Any Additional Information
                            </label>
                            <input
                                type="text"
                                placeholder="XXXX Hotel, Central London, Post Code XXXX, United Kingdom"
                                className="w-full border p-2 rounded"
                                // value={formData.venue}
                                // onChange={(e) =>
                                //     setFormData({
                                //         ...formData,
                                //         venue: e.target.value,
                                //     })
                                // }
                            />
                        </div>
                        <button className="bg-stone-600 text-white px-6 py-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
