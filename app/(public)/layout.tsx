import Footer from "../Components/Footer/page";
import Navbar from "../Components/Navbar/page";


export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="bg-gradient-to-br from-[#124271] to-[rgb(84,184,171)] pt-5">
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}
