import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { GiGraduateCap } from 'react-icons/gi'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { MdOutlinePersonPinCircle } from 'react-icons/md'

export default function ForCE() {
    return (
        <div className='bg-gray-50'>
            <div className=' lg:max-w-8/12 mx-auto py-20 px-5 lg:px-0'>



                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>

                    <div className='bg-[#e8f5f4] rounded-xl p-10'>
                        <div className='flex flex-col mb-5'>
                            <h1 className='bg-[#cdf5f2] text-[#298079] w-fit p-3 rounded-lg mb-3'><GiGraduateCap size={32} /></h1>
                            <h2 className='mb-3 text-xl font-semibold'>For Candidates</h2>
                            <p className='text-gray-600'>Find jobs that match your skills and career aspirations with AI-powered recommendations.</p>
                            <div className='mt-5'>
                                <ol className='space-y-4 text-lg'>
                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        AI-powered job recommendations</li>
                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        Resume parsing and skill extraction</li>
                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        Career guidance and skill gap analysis</li>

                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        Track applications in one place</li>
                                </ol>
                            </div>

                        </div>
                        <Link href="/"> <button className='hover:cursor-pointer hover:scale-105 transition transform duration-300 text-white flex items-center gap-4 bg-[#279f95] md:text-lg font-semibold rounded-lg px-4 py-3'>
                            Find Your Dream Jobs <FaArrowRight size={16} />

                        </button></Link>

                    </div>
                    <div className='bg-[#e0f6f4] rounded-xl  p-10'>
                        <div className='flex flex-col mb-5'>
                            <h1 className='bg-[#cdf5f2] text-[#298079] w-fit p-3 rounded-lg mb-3'><MdOutlinePersonPinCircle size={32} /></h1>
                            <h2 className='mb-3 text-xl font-semibold'>For Employers</h2>
                            <p className='text-gray-600'>Find the perfect candidates for your team with AI-matched scoring and filtering.</p>
                            <div className='mt-5'>
                                <ol className='space-y-4 text-lg'>
                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        AI candidate matching scores</li>
                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        Skills-based filtering</li>
                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        Easy job posting and management</li>

                                    <li className='flex items-center gap-2'><IoCheckmarkCircleOutline className='text-[#2a7d76]' size={20} />
                                        Shortlist and track applicants</li>
                                </ol>
                            </div>

                        </div>
                        <Link href="/"> <button className='hover:cursor-pointer hover:scale-105 transition transform duration-300 text-white flex items-center gap-4 bg-[#279f95] md:text-lg font-semibold rounded-lg px-4 py-3'>
                            Start Hiring <FaArrowRight size={16} />

                        </button></Link>
                    </div>
                </div>
            </div>

        </div >
    )
}
