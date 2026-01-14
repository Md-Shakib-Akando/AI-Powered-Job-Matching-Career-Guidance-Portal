"use client"

import React from "react"

export default function JobPostFormView() {
    return (
        <div className="py-10">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-[#124271] rounded-t-2xl p-8 text-white">
                    <h1 className="text-3xl font-bold mb-2">Post New IT Job</h1>
                    <p className="text-purple-100">
                        Fill in the details to create a new job listing
                    </p>
                </div>

                {/* Form */}
                <form className="bg-white rounded-b-2xl shadow-xl p-8 space-y-6">
                    {/* Job Title */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Job Title *
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Senior Full Stack Developer"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all"
                        />
                    </div>

                    {/* Company Name & Location */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                placeholder="Your Company Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Location *
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Dhaka, Bangladesh"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Job Category & Employment Type */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Job Category *
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all bg-white">
                                <option>Select Category</option>
                                <option>Web Development</option>
                                <option>Mobile Development</option>
                                <option>DevOps & Cloud</option>
                                <option>Data Science & AI</option>
                                <option>Cybersecurity</option>
                                <option>UI/UX Design</option>
                                <option>Quality Assurance</option>
                                <option>IT Support</option>
                                <option>Database Administration</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Employment Type *
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all bg-white">
                                <option>Select Type</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                                <option>Freelance</option>
                                <option>Internship</option>
                            </select>
                        </div>
                    </div>

                    {/* Experience Level & Salary */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Experience Level *
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all bg-white">
                                <option>Select Level</option>
                                <option>Entry Level (0-2 years)</option>
                                <option>Mid Level (3-5 years)</option>
                                <option>Senior Level (5-10 years)</option>
                                <option>Lead/Principal (10+ years)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Salary Range
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. 50,000 - 80,000 BDT/month"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Required Skills *
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. React, Node.js, MongoDB, AWS"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all"
                        />
                    </div>

                    {/* Job Description */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Job Description *
                        </label>
                        <textarea
                            rows={6}
                            placeholder="Describe the role, responsibilities, and requirements..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all resize-none"
                        />
                    </div>

                    {/* Deadline & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Application Deadline *
                            </label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Contact Email *
                            </label>
                            <input
                                type="email"
                                placeholder="hr@company.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg input-focus outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Work Mode */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Work Mode *
                        </label>
                        <div className="flex flex-wrap gap-4">
                            {["On-site", "Remote", "Hybrid"].map((mode) => (
                                <label key={mode} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="workMode"
                                        className="w-4 h-4 text-purple-600"
                                    />
                                    <span className="ml-2 text-gray-700">{mode}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center items-center pt-6">
                        <button
                            type="submit"
                            className=" bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                        >
                            Post Job
                        </button>


                    </div>
                </form>
            </div>
        </div>
    )
}
