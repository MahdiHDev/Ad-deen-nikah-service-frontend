// import { philosopher } from "@/app/fonts/fonts";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { Button } from "../ui/button";

// const Header = () => {
//     return (
//         <header className="bg-white py-10 shadow-md ">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
//                     {/* Left Text Content */}
//                     <div className="w-full text-center lg:text-left">
//                         <h1
//                             className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 ${philosopher.className}`}
//                         >
//                             Assalamu Alaikum
//                         </h1>
//                         <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                             Welcome to <strong>Ad-Deen Nikkah Service</strong> —
//                             a trusted platform committed to helping Muslim
//                             individuals and families find their life partners in
//                             accordance with Islamic principles. We believe that
//                             marriage is a sacred bond and an essential part of
//                             the deen, and we are honored to assist you in
//                             fulfilling this beautiful Sunnah. Our service is
//                             rooted in modesty, integrity, and confidentiality.
//                             Whether you&apos;re searching for a spouse, guiding
//                             a loved one through their journey, or simply
//                             exploring, Ad-Deen is here to support you with
//                             sincerity and professionalism. We offer personalized
//                             support, curated profiles, and a respectful
//                             environment that prioritizes values over vanity.
//                         </p>
//                         <Link href="/book-now" className="">
//                             <Button
//                                 variant="outline"
//                                 size="lg"
//                                 className="cursor-pointer mt-3"
//                             >
//                                 Book Now
//                             </Button>
//                         </Link>

//                         <div className="flex gap-1 items-center mt-4 text-lg justify-center md:justify-start">
//                             <MdEmail className="size-6 text-stone-600" />
//                             <span> - adden.nikkah@gmail.com</span>
//                         </div>
//                         <div>
//                             <ul className="flex gap-4 justify-center md:justify-start mt-4 items-center">
//                                 <li>
//                                     <FaFacebook className="size-8 cursor-pointer" />
//                                 </li>
//                                 <li>
//                                     <FaInstagram className="size-8 cursor-pointer" />
//                                 </li>
//                                 <li>
//                                     <FaWhatsapp className="size-8 cursor-pointer" />
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-6 lg:p-0">
//                         <div>
//                             <Image
//                                 src="/images/Hero.png"
//                                 alt="Ad-Deen Nikah Service"
//                                 width={500} // fixed width, adjust as needed
//                                 height={500} // fixed height, adjust aspect ratio here
//                                 className="object-contain rounded-lg rotate-340 max-w-full h-auto"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

import { philosopher } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="relative h-[90vh] flex items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/home/hero-bg.jpg"
                    alt="Ad-Deen Nikah Service Background"
                    fill
                    className="object-cover object-bottom brightness-75"
                    priority
                />
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 text-center max-w-3xl px-6">
                <h1
                    className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${philosopher.className}`}
                >
                    Assalamu Alaikum
                </h1>

                <p className="text-lg sm:text-xl leading-relaxed mb-6">
                    Welcome to <strong>Ad-Deen Nikkah Service</strong> — a
                    trusted platform committed to helping Muslim individuals and
                    families find their life partners in accordance with Islamic
                    principles.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <Link href="/book-now">
                        <Button
                            size="lg"
                            className="px-8 shadow-md bg-white text-black hover:bg-gray-200"
                        >
                            Book Now
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 border-white text-white hover:text-white cursor-pointer bg-white-/10 hover:bg-white/20 duration-300"
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>

                {/* Email */}
                <div className="flex gap-2 items-center justify-center text-base mb-4">
                    <MdEmail className="size-5" />
                    <span>adden.nikkah@gmail.com</span>
                </div>

                {/* Social Links */}
                <ul className="flex gap-4 justify-center">
                    <li>
                        <a
                            href="#"
                            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                        >
                            <FaFacebook className="size-6" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                        >
                            <FaInstagram className="size-6" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                        >
                            <FaWhatsapp className="size-6" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
