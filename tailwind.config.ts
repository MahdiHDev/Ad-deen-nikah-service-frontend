import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                slideInRight: {
                    "0%": { opacity: 0, transform: "translateX(50%)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: 0, transform: "translateX(-50%)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
            },
            animation: {
                slideInRight: "slideInRight 0.5s ease-out",
                slideInLeft: "slideInLeft 0.5s ease-out",
            },
        },
    },
    plugins: [],
};
export default config;
