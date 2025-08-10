import { philosopher } from "@/app/fonts/fonts";
import Image from "next/image";

const History = () => {
    return (
        <>
            <div className="bg-no-repeat bg-contain  h-auto md:bg-[url('/images/floral1-min.png')] bg-left">
                <div className="py-5 md:pt-10 max-w-6xl mx-auto flex md:flex-row flex-col md:gap-5 items-center ">
                    <div className="w-full md:w-[70%] p-4 md:px-6">
                        <h1
                            className={`text-2xl md:text-3xl font-bold ${philosopher.className}`}
                        >
                            Our History
                        </h1>
                        <p className="my-2 md:my-3 text-lg md:text-xl font-semibold leading-6">
                            Ad-Deen Nikah Service is one of the UK’s trusted
                            providers of Nikah services, helping Muslims begin
                            their marital journey with ease
                        </p>
                        <p>
                            Based in the UK, we operate through a wide network
                            of professional Imams and coordinators across
                            multiple regions, dedicated to serving the growing
                            needs of the Muslim community. Whether in the
                            comfort of your home, within your local community,
                            or through our convenient online Nikah services — we
                            offer flexible, accessible, and official Nikah
                            arrangements. With over{" "}
                            <span className="font-bold">1,200</span> successful
                            Nikah ceremonies conducted, our experienced and
                            qualified Imams are available to perform your Nikah
                            anytime, anywhere.
                        </p>
                    </div>{" "}
                    <div className=" md:w-[30%] p-4">
                        <Image
                            height={250}
                            width={250}
                            src="/images/quran.png"
                            alt="quran"
                        />
                    </div>
                </div>
            </div>
            {/* <div
                className="bg-no-repeat bg-contain bg-right "
                style={{
                    backgroundImage: "url('/images/floral1-min.png')",
                }}
            ></div> */}
            <div className="relative w-full">
                <div className="absolute inset-0 bg-[url('/images/floral1-min.png')] bg-contain  bg-no-repeat  bg-bottom-left md:bg-left scale-x-[-1] h-1/2 md:h-full" />
                <div className="relative z-10 p-4">
                    <div className="py-5 md:pt-10 max-w-6xl mx-auto flex md:flex-row flex-col-reverse gap-8 md:gap-5 items-center p-4">
                        <div className="w-full md:w-[50%] p-4 md:px-6 relative mx-auto">
                            <Image
                                height={500}
                                width={500}
                                src="/images/mosque.png"
                                alt="quran"
                                className="rounded-md"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="md:w-[50%]">
                            <h1
                                className={`text-2xl md:text-3xl font-bold ${philosopher.className}`}
                            >
                                What we do
                            </h1>
                            <p className="my-2 md:my-3 text-lg md:text-xl font-semibold leading-6">
                                We cater for all occasions, a simple Nikah at
                                home or a Nikah ceremony at a venue. We offer
                                free advice on understanding Nikah and Islamic
                                divorce Talaq.
                            </p>
                            <p>
                                We have a diverse range of trustworthy, and
                                reliable faith-based Imams who have a passion to
                                deliver a Unique Nikah ceremony for your
                                specific needs; be it in the form of Quranic
                                recitation or conducting a personalized speech.
                                The Imams will craft their sermon around the
                                needs and wishes of the couples while also
                                ensuring the message will resonate well with all
                                those present in the ceremony. We saw this
                                important need and developed this UK based Nikah
                                service where our Imams can speak about the
                                beauty of Islam to diverse audiences in English.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
