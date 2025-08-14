import Link from "next/link";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-stone-50 to-stone-100 border-t border-stone-200 mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo / About */}
                    <div>
                        <h2 className="text-xl font-bold text-stone-700">
                            Ad Deen Nikah Service
                        </h2>
                        <p className="mt-3 text-sm text-stone-600">
                            Helping Muslim individuals and families find their
                            life partners in accordance with Islamic principles.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-stone-700 mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-stone-600 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-stone-900 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-stone-900 transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-stone-900 transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-stone-900 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-stone-700 mb-3">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm text-stone-600">
                            <li>Email: info@addeennikah.com</li>
                            <li>Phone: +880 1234-567890</li>
                            <li>Location: Sylhet, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-stone-700 mb-3">
                            Follow Us
                        </h3>
                        <div className="flex gap-3">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="p-2 bg-stone-200 rounded-full hover:bg-stone-300 transition"
                            >
                                <FaFacebookF className="text-stone-700" />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="p-2 bg-stone-200 rounded-full hover:bg-stone-300 transition"
                            >
                                <FaInstagram className="text-stone-700" />
                            </Link>
                            <Link
                                href="https://wa.me/8801234567890"
                                target="_blank"
                                className="p-2 bg-stone-200 rounded-full hover:bg-stone-300 transition"
                            >
                                <FaWhatsapp className="text-stone-700" />
                            </Link>
                            <Link
                                href="mailto:info@addeennikah.com"
                                className="p-2 bg-stone-200 rounded-full hover:bg-stone-300 transition"
                            >
                                <FaEnvelope className="text-stone-700" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-stone-200 mt-8 pt-5 text-center text-sm text-stone-500">
                    © {new Date().getFullYear()} Ad Deen Nikah Service. All
                    rights reserved.
                </div>
            </div>
        </footer>
    );
}
