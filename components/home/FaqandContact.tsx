"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FaqAndContact = () => {
    const faqs = [
        {
            question: "Will a Nikah certificate be provided?",
            answer: "Yes, any Nikah ceremony conducted by NikahService.co.uk provides a certificate that will be approved and signed by a representative of NikahService.co.uk as well as the Imam himself.",
        },
        {
            question: "Are you aligned with a mosque or a scholar?",
            answer: "We believe in making Nikah available to all, independent of group or preference. We also assume that it should be done in full accordance with the Quran and Sunnah, with the understanding of noble companions. As such, we do not refer to any specific mosque.",
        },
        {
            question: "What are the requirements for a valid Nikah?",
            answer: "A Nikah is performed with a proposal (Ejaab) by the male or female and acceptance (Qabool) by the male or female in the past or present tense in the presence of two male Muslim witnesses or one male and two female witnesses with also stipulating the dowry (mahr).",
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
            {/* FAQ Section */}
            <div className="md:border-r border-gray-200 md:w-1/2">
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        FAQs
                    </h2>
                    <div className="w-full md:w-[80%] mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="p-4 cursor-pointer">
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="font-semibold">
                                        {faq.question}
                                    </h3>
                                    <span className="text-xl">
                                        {/* ? ( */}
                                        <IoIosArrowDown
                                            className={`duration-300 ${
                                                openIndex === index
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                        {/* ) : (
                                        "+"
                                    )} */}
                                    </span>
                                </div>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${
                                        openIndex === index
                                            ? "max-h-96 mt-2"
                                            : "max-h-0"
                                    }`}
                                >
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-center">
                    Contact Us
                </h2>
                <p className="text-center mb-6 mt-2">
                    Email:{" "}
                    <a
                        href="mailto:addeen.nikkah@gmail.com"
                        className="text-stone-500 hover:underline"
                    >
                        addeen.nikkah@gmail.com
                    </a>{" "}
                    | Phone:{" "}
                    <a
                        href="tel:+447917581501"
                        className="text-stone-500 hover:underline"
                    >
                        +44 7917 581501
                    </a>
                </p>

                <form className="space-y-2" onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-sm focus:ring focus:ring-blue-200"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-sm focus:ring focus:ring-blue-200"
                            placeholder="Your email"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-sm focus:ring focus:ring-blue-200"
                            rows={4}
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-sm hover:bg-blue-700 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FaqAndContact;
