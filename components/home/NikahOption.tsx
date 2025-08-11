"use client";

import { philosopher } from "@/app/fonts/fonts";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NextArrow = ({ onClick }: ArrowProps) => (
    <button
        onClick={onClick}
        className="absolute bottom-2 right-8 z-10 -translate-y-1/2 bg-gray-50 px-4 p-2 text-2xl hover:bg-gray-200 duration-300 cursor-pointer"
    >
        ❯
    </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
    <button
        onClick={onClick}
        className="absolute bottom-2 right-20 z-10 -translate-y-1/2 bg-gray-50 px-4 p-2 text-2xl  hover:bg-gray-200 duration-300 cursor-pointer"
    >
        ❮
    </button>
);

const NikahOption = () => {
    const settings = {
        // dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const nikahData = [
        {
            id: 1,
            image: "/images/home/eventImg4.jpg",
            title: "Simple Nikah",
            subtitle: "(SUITABLE FOR EVERYONE)",
            rating: 5,
            description:
                "Covers Free Consultation, Nikah Ceremony, English Speech & Nikah Certificates.",
        },
        {
            id: 2,
            image: "/images/home/eventImg.jpg",
            title: "Nikah Event",
            subtitle: "(SUITABLE FOR A LARGE EVENT)",
            rating: 5,
            description:
                "Free Consultation, Hosting, Quranic Recitation, Nikah Ceremony, English Speech & Nikah Certificates.",
        },
        {
            id: 3,
            image: "/images/home/eventImg3.jpg",
            title: "Online Nikah",
            subtitle: "(Very Convenient)",
            rating: 5,
            description:
                "Covers: Free Consultation, Nikah Ceremony via video conferencing & Nikah Certificate emailed or posted.",
        },
    ];

    return (
        <>
            <h1
                className={`text-center pt-10 text-2xl ${philosopher.className} font-semibold text-xl md:text-3xl`}
            >
                Which Nikah method suits you?
            </h1>

            <div className="slider-container max-w-6xl mx-auto py-5 md:py-10 md:px-4">
                <Slider {...settings}>
                    {nikahData.map((item) => (
                        <div key={item.id}>
                            <div className="shadow-lg m-4 border relative">
                                <div className="absolute top0 right-0 bg-stone-700 text-white p-4 px-6 text-3xl">
                                    {item.id}
                                </div>
                                <div className="overflow-hidden flex flex-col md:flex-row w-full mb-12 md:mb-0">
                                    {/* Left: Image */}
                                    <div className="md:w-1/2 relative h-64 md:h-96">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    {/* Right: Text */}
                                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                                        <div>
                                            <p className="text-sm text-gray-500 my-4">
                                                {item.subtitle}
                                            </p>
                                            <h2 className="text-2xl font-bold my-2">
                                                {item.title}
                                            </h2>
                                            <div className="flex items-center gap-1 mt-5 mb-4">
                                                {Array(item.rating)
                                                    .fill(0)
                                                    .map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className="text-yellow-500"
                                                        />
                                                    ))}
                                            </div>
                                            <p className="text-gray-700">
                                                {item.description}
                                            </p>
                                        </div>
                                        {/* <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                                        Book Now
                                    </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default NikahOption;
