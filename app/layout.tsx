import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FirebaseProvider } from "@/context/Firebase";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <FirebaseProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </FirebaseProvider>
            </body>
        </html>
    );
}
