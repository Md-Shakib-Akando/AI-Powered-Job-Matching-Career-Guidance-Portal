import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-10/12 mx-auto px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">


                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#497fb5] to-[#54b8ab] flex items-center justify-center text-white font-bold">
                                JM
                            </div>
                            <span className="text-lg font-semibold text-gray-900">
                                JobMatch AI
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            AI-powered job matching to connect the right candidates with the
                            right opportunities.
                        </p>
                    </div>


                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">
                            For Candidates
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#">Browse Jobs</Link></li>
                            <li><Link href="#">Create Account</Link></li>
                            <li><Link href="#">My Applications</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">
                            For Employers
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#">Post a Job</Link></li>
                            <li><Link href="#">Find Candidates</Link></li>
                            <li><Link href="#">Employer Login</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">
                            Support
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#">Help Center</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
                    © 2025 JobMatch AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
