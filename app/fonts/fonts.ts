import { Philosopher } from "next/font/google";

export const philosopher = Philosopher({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-philosopher", // Optional
    display: "swap",
});
