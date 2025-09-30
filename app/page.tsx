import FaqAndContact from "@/components/home/FaqandContact";
import Header from "@/components/home/Header";
import History from "@/components/home/History";
import NikahOption from "@/components/home/NikahOption";
import Performance from "@/components/home/Performance";
import ServicesSection from "@/components/home/Services";
import WhatMakesUsDiffrent from "@/components/home/whatMakesUs";

export const metadata = {
    title: "Ad Deen Nikkah Service",
    description: "Welcome to Ad Deen Nikkah Service",
};

export default function Home() {
    return (
        <div>
            <Header />
            <WhatMakesUsDiffrent />
            <History />
            <ServicesSection />
            <NikahOption />
            <Performance />
            <FaqAndContact />
        </div>
    );
}
