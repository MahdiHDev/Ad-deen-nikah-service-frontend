"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Performance: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} className="py-14 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Top Label */}
                <div className="relative flex justify-center mb-12">
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
                    <span className="relative bg-white px-6 py-2 text-lg font-semibold rounded-full shadow-md border border-gray-200">
                        Our Performance
                    </span>
                </div>

                {/* Stats */}
                <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4 sm:gap-8 text-center">
                    {/* Stat 1 */}
                    <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                        <p className="text-3xl sm:text-4xl font-bold text-blue-500">
                            {inView && (
                                <CountUp
                                    end={1200}
                                    duration={2}
                                    separator=","
                                />
                            )}
                            +
                        </p>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                            Nikahs Conducted
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-4 sm:p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                        <p className="text-3xl sm:text-4xl font-bold text-purple-500">
                            {inView && <CountUp end={7} duration={2} />}+
                        </p>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                            Year Experience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Performance;
