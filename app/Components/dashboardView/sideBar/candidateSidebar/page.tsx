"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
    FaThLarge,
    FaBuilding,

    FaUsers,
    FaSignOutAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const CandidateSideBar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const baseItem =
        "flex items-center gap-3 px-4 py-3 rounded-lg transition";
    const inactive =
        "text-gray-600 hover:bg-gray-100";
    const activeItem =
        "bg-[#163a5f] text-white";

    const menu = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: <FaThLarge />,
        },
        {
            name: "My Profile",
            href: "/dashboard/my-profile",
            icon: <FaBuilding />,
        },


        {
            name: "My-Applicants",
            href: "/dashboard/applicants",
            icon: <FaUsers />,
        },
        {
            name: "My-Resume",
            href: "/dashboard/applicants",
            icon: <FaUsers />,
        },
    ];

    return (
        <>
            {/* Mobile Hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
            >
                <FaBars className="text-xl" />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 z-50 h-screen md:h-full border-r border-gray-200 bg-white px-4 py-6 flex flex-col transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                {/* Close button */}
                <div className="md:hidden flex justify-end mb-4">
                    <button onClick={() => setOpen(false)}>
                        <FaTimes className="text-xl text-gray-600" />
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2 mb-8 px-2">
                    <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold">
                        J
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">JobMatch</h1>
                        <p className="text-xs text-gray-500">AI PORTAL</p>
                    </div>
                </div>

                {/* Employer Badge */}
                <div className="bg-[#3fb2a2] text-white rounded-xl px-4 py-3 mb-8">
                    <p className="text-sm font-medium">Employer</p>
                    <p className="text-xs opacity-90">crew</p>
                </div>

                {/* Menu */}
                <p className="text-xs font-semibold text-gray-400 mb-3 px-2">
                    MENU
                </p>

                <nav className="flex flex-col gap-1 ">
                    {menu.map((item) => {
                        const isActive =
                            pathname === item.href ||
                            pathname.startsWith(item.href + "/");

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`${baseItem} ${isActive ? activeItem : inactive
                                    }`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Actions */}
                <div className="mt-auto flex gap-2 items-center">
                    <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 px-4 py-3 border border-gray-300 hover:border-red-500 rounded-lg transition">
                        <FaSignOutAlt />
                        Sign Out
                    </button>

                    <Link href="/">
                        <button className=" flex items-center  gap-3 border border-gray-300 hover:border-red-500 text-gray-500 hover:text-red-500 px-4 py-3 rounded-lg transition">
                            <FaSignOutAlt />
                            Back to Home
                        </button>
                    </Link>
                </div>

            </aside>
        </>
    );
};

export default CandidateSideBar;
