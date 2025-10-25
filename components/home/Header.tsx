import { philosopher } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="relative h-[70vh] md:h-[100vh] flex items-center justify-center text-white">
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
