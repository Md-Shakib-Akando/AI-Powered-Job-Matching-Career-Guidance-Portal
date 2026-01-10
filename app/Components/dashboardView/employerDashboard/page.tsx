import Link from 'next/link'
import React from 'react'

import {
    FaBriefcase,
    FaUsers,
    FaPlus,
    FaBuilding,
    FaBolt,
    FaExclamationCircle,
} from "react-icons/fa";
export default function EmployerDashboard() {
    return (
        <div className='px-10 py-5 bg-gray-100  space-y-4'>
            <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                        Employer Dashboard
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg mt-2">
                        Manage your job listings and find the perfect candidates
                    </p>
                </div>

                <div className="w-full md:w-auto">
                    <Link href="/">
                        <button className="w-full md:w-auto hover:scale-105 transition transform duration-300 text-white flex items-center justify-center gap-4 bg-[rgb(40,149,134)] font-medium rounded-lg px-5 py-3">
                            Post New Job
                        </button>
                    </Link>
                </div>
            </section>

            <section className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                    {/* Card 1 */}
                    <div className="flex items-center justify-between p-5 sm:p-6 lg:p-8 bg-white border-t-4 rounded-xl border-[rgb(40,149,134)] shadow-md">
                        <div>
                            <h2 className="  lg:text-xl font-semibold">
                                Total Jobs Posted
                            </h2>
                            <p className="text-2xl sm:text-3xl mt-1 font-semibold">0</p>
                        </div>
                        <div className="bg-blue-100 p-4 sm:p-5 rounded-xl">
                            C
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center justify-between p-5 sm:p-6 lg:p-8 bg-white border-t-4 rounded-xl border-[rgb(40,149,134)] shadow-md">
                        <div>
                            <h2 className="  lg:text-xl font-semibold">
                                Active Listings
                            </h2>
                            <p className="text-2xl sm:text-3xl mt-1 font-semibold">0</p>
                        </div>
                        <div className="bg-blue-100 p-4 sm:p-5 rounded-xl">
                            C
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center justify-between p-5 sm:p-6 lg:p-8 bg-white border-t-4 rounded-xl border-[rgb(40,149,134)] shadow-md">
                        <div>
                            <h2 className="  lg:text-xl font-semibold">
                                Total Applications
                            </h2>
                            <p className="text-2xl sm:text-3xl mt-1 font-semibold">0</p>
                        </div>
                        <div className="bg-blue-100 p-4 sm:p-5 rounded-xl">
                            C
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-center justify-between p-5 sm:p-6 lg:p-8 bg-white border-t-4 rounded-xl border-[rgb(40,149,134)] shadow-md">
                        <div>
                            <h2 className=" lg:text-xl font-semibold">
                                Pending Review
                            </h2>
                            <p className="text-2xl sm:text-3xl mt-1 font-semibold">0</p>
                        </div>
                        <div className="bg-blue-100 p-4 sm:p-5 rounded-xl">
                            C
                        </div>
                    </div>

                </div>
            </section>


            {/* Complete Profile Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-orange-200 bg-orange-50 p-5">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <FaExclamationCircle />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">
                            Complete Your Company Profile
                        </h3>
                        <p className="text-sm text-gray-600">
                            Set up your company profile to start posting jobs and attracting top talent
                        </p>
                    </div>
                </div>

                <button className="px-5 py-2.5 rounded-lg bg-[#0f2f4a] text-white text-sm font-medium hover:bg-[#0b253a] transition">
                    Set Up Company →
                </button>
            </div>

            {/* Listings + Applicants */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Job Listings */}
                <div className="rounded-xl border-t-4 border-[#0f2f4a] shadow-xl bg-white p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 font-semibold text-gray-900">
                            <FaBriefcase className="text-gray-500" />
                            Your Job Listings
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-800">
                            View All →
                        </button>
                    </div>

                    <div className="flex flex-col items-center text-center py-12">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <FaBriefcase className="text-gray-500 text-lg" />
                        </div>
                        <h4 className="font-medium text-gray-900">
                            No jobs posted yet
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Create your first job listing to start receiving applications
                        </p>

                        <button className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 text-white text-sm hover:bg-teal-600 transition">
                            <FaPlus />
                            Post Your First Job
                        </button>
                    </div>
                </div>

                {/* Applicants */}
                <div className="rounded-xl border-t-4 border-[#0f2f4a] shadow-xl bg-white p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 font-semibold text-gray-900">
                            <FaUsers className="text-gray-500" />
                            Recent Applicants
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-800">
                            View All →
                        </button>
                    </div>

                    <div className="flex flex-col items-center text-center py-12">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <FaUsers className="text-gray-500 text-lg" />
                        </div>
                        <h4 className="font-medium text-gray-900">
                            No applicants yet
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Post a job to start receiving applications
                        </p>
                    </div>
                </div>
            </div>


            <div className='bg-white  border-t-4 border-[#0f2f4a] rounded-xl shadow-xl p-4'>
                <div className="flex items-center gap-2 mb-6 font-semibold text-gray-900">
                    <FaBolt className="text-teal-600" />
                    Quick Actions
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="rounded-xl border border-[#0f2f4a] p-5 text-center hover:shadow-md transition">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                            <FaPlus className="text-gray-700" />
                        </div>
                        <h4 className="font-medium text-gray-900">Post New Job</h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Create a new job listing
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#0f2f4a] p-5 text-center hover:shadow-md transition">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-50 flex items-center justify-center">
                            <FaUsers className="text-teal-600" />
                        </div>
                        <h4 className="font-medium text-gray-900">View Applicants</h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Review candidate applications
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#0f2f4a] p-5 text-center hover:shadow-md transition">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-50 flex items-center justify-center">
                            <FaBuilding className="text-orange-600" />
                        </div>
                        <h4 className="font-medium text-gray-900">Company Profile</h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Update your company info
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
