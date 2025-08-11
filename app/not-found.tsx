import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4">Sorry, this page could not be found.</p>
            <Link
                href="/"
                className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
                Go Home
            </Link>
        </div>
    );
}
