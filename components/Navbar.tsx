"use client";

import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/book-now", label: "Book Now" },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);

    // Ensure theme is loaded on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a placeholder or nothing on the server and during hydration
        return null; // or return a default image if you want
    }

    return (
        <header className="w-full border-b">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href={"/"} className="relative">
                    <Image
                        src={"/images/logo2.png"}
                        alt="Logo"
                        width={200}
                        height={40}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <Link href="/login">
                        <Button variant="outline" size="sm">
                            Login
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button size="sm">Signup</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Open menu"
                            >
                                <svg
                                    className="size-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="p-6 w-64 bg-white dark:bg-gray-900 shadow-lg"
                        >
                            <nav className="flex flex-col gap-6 mt-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* Auth buttons */}
                            <div className="mt-8 flex flex-col gap-3">
                                <Link href="/login">
                                    <Button
                                        variant="outline"
                                        className="w-full text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="w-full">Signup</Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
