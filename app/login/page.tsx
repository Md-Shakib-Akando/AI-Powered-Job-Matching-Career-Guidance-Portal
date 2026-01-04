"use client"
import React, { useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import logo from '../../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password
            });

            if (res?.error) {
                setError(res.error);
            } else {
                alert('Login Successful');
                router.replace('/browseJobs');
            }
        } catch (err) {
            setError('An unexpected error occurred');
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
                            Welcome Back
                        </h1>
                        <p className="text-lg text-gray-500">
                            Sign in to access your dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

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
                            Login
                        </button>
                        {
                            error && <p className="text-red-500 text-sm text-center">{error}</p>
                        }
                        <Link href="/register">
                            <p className="text-center text-sm text-gray-600">
                                Don&apos;t have an account?
                                <span className="ml-2 text-blue-700 hover:underline cursor-pointer">
                                    Sign Up
                                </span>
                            </p>
                        </Link>
                    </form>
                </div>
            </div>


            <div className="hidden lg:flex w-1/2 bg-gradient-to-b from-[#124271] to-[#54b8ab]">
                <div className="flex flex-col justify-center items-center w-full text-white px-6">

                    <div className="bg-white/10 p-3 rounded-xl">
                        <Image src={logo} alt="Logo" width={100} height={100} />
                    </div>

                    <h1 className="text-4xl font-bold text-center mt-6">
                        Find Your Dream Job
                    </h1>

                    <p className="text-lg text-gray-200 text-center my-6 max-w-xl">
                        Our AI analyzes your profile to match you with jobs that fit
                        your skills and career goals.
                    </p>

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
