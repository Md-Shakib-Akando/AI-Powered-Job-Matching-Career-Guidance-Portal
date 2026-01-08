"use client"

import Image from "next/image"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import logo from "../../../public/assets/logo.png"
import ProfileMenu from "../profileIcon/page"

export default function Navbar() {
    const { data: session, status } = useSession();
    const handleLogout = async () => {
        await signOut({ redirect: false })
        alert("Logged out successfully!")
        window.location.href = "/login"
    }

    return (
        <nav className="shadow-md pb-5">
            <div className="xl:max-w-10/12 mx-auto pt-5">
                <div className="flex justify-between items-center px-2 xl:px-0">

                    {/* Logo */}
                    <div className="flex gap-2 items-center">
                        <Link href="/"><Image src={logo} alt="Logo" width={80} height={150} /></Link>
                    </div>

                    {/* Right Menu */}
                    <div className="flex gap-3 md:gap-6 items-center">

                        <Link href="/browseJobs">Browse Job</Link>

                        {/* Loading state (optional but safe) */}
                        {status === "loading" && (
                            <span className="text-gray-400">Loading...</span>
                        )}

                        {/* Not Logged In */}
                        {status === "unauthenticated" && (
                            <>
                                <Link href="/login" className="hover:bg-gray-300 p-2 rounded-lg">
                                    Sign In
                                </Link>

                                <Link href="/login">
                                    <button className="hover:scale-105 transition duration-300 text-white bg-[#f46e2c] md:text-lg rounded-lg px-4 py-2">
                                        Get Started
                                    </button>
                                </Link>
                            </>
                        )}

                        {/* Logged In */}
                        {status === "authenticated" && (
                            <>
                                <ProfileMenu session={session} handleLogout={handleLogout}></ProfileMenu>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    )
}
