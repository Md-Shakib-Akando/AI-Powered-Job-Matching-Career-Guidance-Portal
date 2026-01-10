"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FaThLarge,
    FaBuilding,
    FaPlusCircle,
    FaBriefcase,
    FaUsers,
    FaSignOutAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const EmployerSideBar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Dashboard");

    const baseItem =
        "flex items-center gap-3 px-4 py-3 rounded-lg transition";
    const inactive =
        "text-gray-600 hover:bg-gray-100";
    const activeItem =
        "bg-[#163a5f] text-white";

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
                className={`fixed md:static top-0 left-0 z-50  min-h-screen bg-white border-r px-4 py-6 flex flex-col
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                {/* Close button (mobile) */}
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

                <nav className="flex flex-col gap-1 flex-grow">
                    {[
                        { name: "Dashboard", icon: <FaThLarge /> },
                        { name: "Company Profile", icon: <FaBuilding /> },
                        { name: "Post New Job", icon: <FaPlusCircle /> },
                        { name: "My Job Listings", icon: <FaBriefcase /> },
                        { name: "Applicants", icon: <FaUsers /> },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href="#"
                            onClick={() => {
                                setActive(item.name);
                                setOpen(false);
                            }}
                            className={`${baseItem} ${active === item.name ? activeItem : inactive
                                }`}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Sign Out */}
                <button className="mt-6 flex items-center gap-3 text-gray-500 hover:text-red-500 px-4 py-3 rounded-lg transition">
                    <FaSignOutAlt />
                    Sign Out
                </button>
            </aside>
        </>
    );
};

export default EmployerSideBar;
