import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { philosopher } from "../fonts/fonts";

const page = () => {
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
            </div>
        </div>
    );
};

export default page;
