// app/about/page.tsx
import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Main About Section */}
            <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                {/* Background Vector */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <Image
                        fill
                        src="/images/pattern.png" // vector pattern
                        alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div
                        className="flex flex-col-reverse md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-7xl mx-auto"
                        data-aos="fade-up"
                    >
                        {/* Text - Left */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                                About Us
                                <span className="absolute -bottom-1 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-20 h-1 bg-gray-800 rounded-full"></span>
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                <strong>Ad Deen Nikah Service</strong> is solely
                                led by
                                <strong> Imam Rayhan Ahmed</strong>, the
                                respected Imam and Khatib of
                                <strong> Shadwell Jame Masjid</strong>. Known
                                for his dedication to the Muslim community, he
                                ensures each Nikah is conducted with sincerity,
                                wisdom, and adherence to authentic Islamic
                                principles.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                As the only person behind Ad Deen Nikah Service,
                                Imam Rayhan Ahmed personally handles every step
                                of the process—offering guidance, compassion,
                                and professionalism from start to finish.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Whether for a simple Nikah or a larger event,
                                you can trust that your marriage will be
                                officiated in accordance with the Sunnah, making
                                your special day both meaningful and memorable.
                            </p>
                        </div>

                        {/* Image - Right */}
                        <div className="relative flex-shrink-0 w-60 md:w-76 lg:w-84 flex justify-center">
                            {/* Decorative Circle Behind Image */}
                            <div className="absolute -top-6 -right-6 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-gray-200 to-transparent rounded-full blur-2xl opacity-60"></div>

                            {/* Rounded Image with Border */}
                            <Image
                                src="/images/imam.png"
                                alt="Imam Rayhan Ahmed"
                                width={500}
                                height={500}
                                className="object-contain relative z-10 rounded-full border-4 border-gray-300"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800">
                {/* Hero Section */}
                <section className="relative py-12 md:py-20 max-w-6xl mx-auto px-4">
                    <blockquote className="text-lg md:text-xl italic border-l-4 border-green-500 pl-4 text-gray-700">
                        &quot;Whoever is able to marry, should marry... &quot;
                        <span className="block mt-2 font-semibold">
                            [Sahih al-Bukhari 5065]
                        </span>
                    </blockquote>
                    <p className="mt-6 text-gray-600 leading-relaxed">
                        The Islamic wedding contract is a solemn oath between
                        spouses and their official responsibility to one another
                        in front of Allah (SWT). Nikah is rooted in commitment,
                        sincerity, and dedication. Your decision to marry and be
                        halal for each other is not only an act of love — it is
                        an ethical and spiritual choice.
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        At{" "}
                        <span className="font-semibold">
                            Ad Deen Nikah Service
                        </span>
                        , we are here to fully support you in this sacred
                        covenant, making the process smooth, meaningful, and
                        true to Islamic values.
                    </p>
                </section>

                {/* Our History */}
                <section className="py-12 bg-white shadow-inner">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
                            Our History
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are a <strong>UK-based Nikah service</strong>{" "}
                            with professional networks across the country. Our
                            mission began with the goal of serving the growing
                            needs of Muslim communities by providing a reliable,
                            official, and Sharia-compliant Nikah service.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Whether at <strong>home</strong>, in the{" "}
                            <strong>community</strong>, or{" "}
                            <strong>online</strong>, we are equipped to conduct
                            your Nikah with ease. Our nationwide network of
                            officiators, celebrants, and support staff ensures
                            that your ceremony can be held wherever you are.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-12 bg-gradient-to-r from-green-50 to-green-100">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">
                            Our Mission
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>
                                Restore the true value of Nikah as a beautiful
                                Sunnah.
                            </li>
                            <li>
                                Make Nikah simple and accessible for everyone.
                            </li>
                            <li>
                                Deliver meaningful, engaging, and memorable
                                ceremonies.
                            </li>
                            <li>
                                Inspire both young and old to appreciate the
                                Prophetic tradition.
                            </li>
                            <li>
                                Combine professionalism with the beauty of
                                Islamic tradition.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Imams Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
                            Our Imams
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our network includes{" "}
                            <strong>trustworthy and experienced Imams</strong>{" "}
                            who are passionate about delivering a unique and
                            inspiring ceremony tailored to your needs.
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 mt-4 space-y-2">
                            <li>
                                Craft sermons to reflect your values and wishes.
                            </li>
                            <li>
                                Ensure the message resonates with everyone
                                present.
                            </li>
                            <li>
                                Speak fluently in English to engage diverse
                                audiences.
                            </li>
                            <li>
                                Uphold the Qur’an and Sunnah in every aspect of
                                the ceremony.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-12 bg-gradient-to-r from-green-50 to-green-100">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">
                            What We Do
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We provide a wide range of Islamic, Sharia-compliant
                            marriage services while adhering to both Fiqhi
                            rulings and UK legal guidelines.
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 mt-4 space-y-2">
                            <li>Nikah ceremonies (in-person & online)</li>
                            <li>Pre-marriage guidance</li>
                            <li>Post-marriage advice & counselling</li>
                            <li>Marital issue resolution</li>
                            <li>Confidential support for couples</li>
                        </ul>
                    </div>
                </section>

                {/* Closing */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-4 text-gray-600">
                        <p>
                            We believe marriage is a beautiful union that
                            safeguards individuals from societal ills and
                            strengthens the Muslim community. If your family
                            life is facing challenges, with the Grace of Allah
                            (SWT), we are here to guide you — offering a
                            confidential, understanding, and supportive ear.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
