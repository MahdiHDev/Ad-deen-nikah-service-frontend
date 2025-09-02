"use client";
import { philosopher } from "@/app/fonts/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { TfiCheckBox } from "react-icons/tfi";

const WhatMakesUsDiffrent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className="bg-cover bg-no-repeat bg-gray-50">
            <div className="max-w-5xl py-5 md:py-10 mx-auto ">
                <h1
                    className={`text-center text-2xl md:text-4xl ${philosopher.className} font-medium`}
                >
                    What Makes Us Diffrent
                </h1>

                <div className="flex flex-col items-center md:flex-row md:gap-0 gap-10 justify-between p-8 md:pt-20">
                    <div className="" data-aos="fade-right">
                        <ul className="text-lg md:text-2xl space-y-2 md:space-y-4 *:flex *:items-center *:gap-2">
                            <li className="duration-300 hover:pl-4 cursor-pointer">
                                <TfiCheckBox /> Nationwide Availability
                            </li>
                            <li className="duration-300 hover:pl-4 cursor-pointer">
                                <TfiCheckBox /> English Speaking Imams
                            </li>
                            <li className="duration-300 hover:pl-4 cursor-pointer">
                                <TfiCheckBox /> Islamic Guidance
                            </li>
                            <li className="duration-300 hover:pl-4 cursor-pointer">
                                <TfiCheckBox /> Reliable & Trustworthy
                            </li>
                            <li className="duration-300 hover:pl-4 cursor-pointer">
                                <TfiCheckBox /> Simple & stress free booking
                                Process
                            </li>
                        </ul>
                    </div>
                    <div className="" data-aos="fade-left">
                        <Image
                            alt="bride Image"
                            className="rounded-md shadow-xl shadow-stone-600"
                            src="/images/bride.png"
                            height={300}
                            width={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatMakesUsDiffrent;
