import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Banner() {
    return (
        <div className="min-h-[calc(100vh-108px)] bg-gradient-to-br from-[#124271] to-[#54b8ab] text-white py-20">
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-white/10 rounded-full px-3 py-1 mt-7 mb-7'>
                    <h1 className=' md:text-lg'>AI-Powered Job Matching</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='text-4xl md:text-6xl xl:text-7xl font-bold text-center'>Find Your Perfect</h1>
                        <h2 className='text-4xl md:text-6xl xl:text-7xl  font-bold text-center mt-1 text-[#f78349]'>Career Match</h2>
                    </div>
                    <div className='my-3  md:w-2/3'>
                        <p className='text-center  md:text-xl xl:text-2xl text-gray-300'>Our AI analyzes skills, experience, and preferences to connect candidates with their dream jobs and help employers find the perfect team members.</p>
                    </div>
                    <div className='flex gap-6 my-10'>
                        <Link href="/"> <button className='hover:scale-105 transition transform duration-300 text-white flex items-center gap-4 bg-[#f46e2c] md:text-xl font-semibold rounded-lg px-4 py-3 hover:cursor-pointer'>
                            Get Started free <FaArrowRight size={16} />

                        </button></Link>
                        <Link href="/"> <button className='hover:scale-105 transition transform duration-300 text-white flex items-center gap-4 bg-white/10 border border-white/30 md:text-xl font-semibold rounded-lg px-4 py-3 hover:cursor-pointer'>
                            Browse Jobs

                        </button></Link>
                    </div>
                </div>


            </div>
            <div className='max-w-7xl mx-auto  px-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10  '>
                    <div className='bg-white/10 rounded-xl'>
                        <div className='px-12 py-4 flex flex-col items-center'>
                            <h1 className=' text-3xl md:text-5xl font-bold '>10K+</h1>
                            <h3 className='text-gray-200 -ml-3 mt-1'>Active Jobs</h3>
                        </div>
                    </div>
                    <div className='bg-white/10 rounded-xl'>
                        <div className='px-12 py-4 flex flex-col items-center'>
                            <h1 className='text-3xl md:text-5xl font-bold '>50K+</h1>
                            <h3 className='text-gray-200 -ml-3 mt-1'>Candidates</h3>
                        </div>
                    </div>
                    <div className='bg-white/10 rounded-xl'>
                        <div className='px-12 py-4 flex flex-col items-center'>
                            <h1 className='text-3xl md:text-5xl font-bold '>5K+</h1>
                            <h3 className='text-gray-200 -ml-3 mt-1'>Companies</h3>
                        </div>
                    </div>
                    <div className='bg-white/10 rounded-xl'>
                        <div className='px-12 py-4 flex flex-col items-center'>
                            <h1 className='text-3xl md:text-5xl font-bold '>95%</h1>
                            <h3 className='text-gray-200 -ml-3 mt-1'>Match Accuracy</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
