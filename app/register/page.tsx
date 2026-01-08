'use client'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import logo from '../../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import { FaUser, FaBriefcase } from "react-icons/fa"
import { useRouter } from 'next/navigation'


export default function Register() {
    const [role, setRole] = useState<"candidate" | "employer">("candidate");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All fields are required");
            return;
        }
        try {
            const resUserExist = await fetch('api/userExist', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })
            const { user } = await resUserExist.json();
            if (user) {
                setError("User  email already exists");
                return;
            }
            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ role, name, email, password })
            })
            if (res.ok) {
                const form = e.target as HTMLFormElement;
                form.reset();
                setError('');
                alert("User registered successfully");
                router.push('/')
            }
        } catch (err) {
            setError("An error occurred during registration");
        }
    }


    return (
        <div className="min-h-[calc(100vh-108px)] flex">


            <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
                <div className="w-full max-w-md">

                    <Link href="/">
                        <p className="flex gap-1 items-center bg-gray-100 text-gray-800 w-fit px-2 py-1 rounded-full mb-8 cursor-pointer">
                            <IoIosArrowRoundBack size={28} /> Back To Home
                        </p>
                    </Link>

                    <div className="flex gap-2 items-center mb-12">
                        <div className='bg-blue-50 p-2 rounded-xl'>
                            <Image src={logo} alt="Logo" width={70} height={70} />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">Match Ai</h1>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-3">
                            Create your account
                        </h1>
                        <p className="text-lg text-gray-500">
                            Start your journey to find the perfect job or candidate
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-lg font-medium text-gray-700 ">I am a</label>

                            <div className="flex gap-4">
                                {/* Candidate */}
                                <button
                                    type="button"
                                    onClick={() => setRole("candidate")}

                                    className={`flex items-center justify-center gap-2 w-1/2 py-3 rounded-lg border
        transition font-medium
        ${role === "candidate"
                                            ? "border-teal-500 bg-teal-50 text-teal-600"
                                            : "border-gray-300 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <FaUser />
                                    Candidate
                                </button>

                                {/* Employer */}
                                <button
                                    type="button"
                                    onClick={() => setRole("employer")}

                                    className={`flex items-center justify-center gap-2 w-1/2 py-3 rounded-lg border
        transition font-medium
        ${role === "employer"
                                            ? "border-teal-500 bg-teal-50 text-teal-600"
                                            : "border-gray-300 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <FaBriefcase />
                                    Employer
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                onChange={e => setName(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                onChange={e => setEmail(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>


                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={e => setPassword(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>


                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-2 rounded-md
              hover:bg-blue-900 transition font-medium"
                        >
                            Register
                        </button>
                        <div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>
                        <Link href="/login">
                            <p className="text-center text-sm text-gray-600">
                                Already have an account?
                                <span className="ml-2 text-blue-700 hover:underline cursor-pointer">
                                    Sign In
                                </span>
                            </p>
                        </Link>
                    </form>
                </div>
            </div>


            <div className="hidden lg:flex w-1/2 ~bg-gradient-to-b from-[#124271] to-[#54b8ab]">
                <div className="flex flex-col justify-center items-center w-full text-white px-6">

                    <div className="bg-white/10 p-3 rounded-xl">
                        <Image src={logo} alt="Logo" width={100} height={100} />
                    </div>
                    {role == "candidate" ? (
                        <h1 className="text-4xl font-bold text-center mt-6">
                            Find Your Dream Job
                        </h1>
                    ) : (
                        <h1 className="text-4xl font-bold text-center mt-6">
                            Find Your Perfect Team
                        </h1>
                    )}
                    {role == "candidate" ? (<p className="text-lg text-gray-200 text-center my-6 max-w-xl">
                        Our AI analyzes your profile to match you with jobs that fit
                        your skills and career goals.
                    </p>) : (<p className="text-lg text-gray-200 text-center my-6 max-w-xl">
                        Our AI matches you with the most qualified candidates based on skills, experience, and culture fit.
                    </p>)}


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {[
                            { value: '10K+', label: 'Active Jobs' },
                            { value: '50K+', label: 'Candidates' },
                            { value: '5K+', label: 'Companies' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 rounded-xl px-10 py-6 text-center">
                                <h1 className="text-4xl font-bold">{item.value}</h1>
                                <p className="text-gray-200 mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
