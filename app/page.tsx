import Header from "@/components/home/Header";
import History from "@/components/home/History";
import Performance from "@/components/home/Performance";
import ServicesSection from "@/components/home/Services";
import WhatMakesUsDiffrent from "@/components/home/whatMakesUs";

export default function Home() {
    return (
        <div>
            <Header />
            <WhatMakesUsDiffrent />
            <History />
            <ServicesSection />
            <Performance />
        </div>
    );
}
