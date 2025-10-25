import { useState } from "react";

export default function ContactDetails() {
    const [visible, setVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => setShouldRender(false), 500); // match transition time
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                visible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <div className="relative bg-sky-100 border border-sky-300 text-sky-800 px-6 py-4 rounded-md mb-6">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-3 text-sky-600 hover:text-sky-900 text-xl font-bold cursor-pointer"
                >
                    ×
                </button>

                <h3 className="font-semibold text-sky-900 mb-1">
                    Contact Details
                </h3>
                <p className="text-sm">
                    Email:{" "}
                    <a
                        href="mailto:info@nikahservice.co.uk"
                        className="text-sky-700 underline hover:text-sky-900"
                    >
                        info@nikahservice.co.uk
                    </a>{" "}
                    &nbsp; Phone:{" "}
                    <a
                        href="tel:+44759787115"
                        className="text-sky-700 underline hover:text-sky-900"
                    >
                        +44 7597 87115
                    </a>
                </p>
            </div>
        </div>
    );
}
