import React from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { CiFilter } from 'react-icons/ci'
import { FaClipboardList } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoIosPerson } from 'react-icons/io'

export default function BrowseJobs() {
    return (
        <div className='min-h-screen'>
            <div>
                <div>
                    <div className=" bg-gradient-to-br from-[#043566] to-[#43a598] text-white py-20">
                        <div className='flex flex-col justify-center items-center'>
                            <div className='bg-white/10 rounded-full px-3 py-1 mt-7 mb-7'>
                                <h1 className=' md:text-lg'>AI-Powered Job Matching</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <h1 className='text-3xl md:text-5xl xl:text-6xl font-bold text-center'>Find Your <span className="text-[#f78349]">Dream Job</span></h1>

                                </div>
                                <div className='my-6  md:w-2/3'>
                                    <p className='text-center  md:text-lg xl:text-xl text-gray-300'>Discover opportunities tailored to your skills and experience with our AI-powered job matching technology.</p>
                                </div>

                            </div>
                            <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-3 mt-7 mb-12 ">
                                <div className="flex items-center gap-2">


                                    <div className="flex items-center gap-2 flex-1 bg-gray-100 rounded-xl px-4 py-3">
                                        <FiSearch className="text-gray-500 text-lg" />
                                        <input
                                            type="text"
                                            placeholder="Job title, company, or keywords..."
                                            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
                                        />
                                    </div>


                                    <div className="flex items-center gap-2 flex-1 bg-gray-100 rounded-xl px-4 py-3">
                                        <HiOutlineLocationMarker className="text-gray-500 text-lg" />
                                        <input
                                            type="text"
                                            placeholder="Location..."
                                            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
                                        />
                                    </div>


                                    <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-medium transition hover:cursor-pointer">
                                        <FiSearch />
                                        Search
                                    </button>

                                </div>
                            </div>
                            <div className='flex gap-7 items-center'>
                                <div className='flex gap-1 items-center'>
                                    <BsBagCheck size={20} className='text-[#35d8c5]' />


                                    <p className='text-lg'><span className="font-semibold mr-1">120K+</span> Jobs Available</p>
                                </div>
                                <div className='flex gap-1 items-center'>

                                    <FaClipboardList size={20} className='text-[#f78349]' />
                                    <p className='text-lg'><span className="font-semibold mr-1">500+ </span> Companies</p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <IoIosPerson size={20} className='text-[#35d8c5]' />

                                    <p className='text-lg'><span className="font-semibold mr-1">10K+</span> Candidates</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='mt-12  '>
                        <div className='max-w-10/12 mx-auto flex justify-between items-center'>
                            <div className='flex  items-center   gap-4'>
                                <div className='flex items-center gap-1'>
                                    <CiFilter size={20} />
                                    <label htmlFor="">Filters : </label>
                                </div>
                                <div>
                                    <select className=" border rounded-md px-4 py-2">
                                        <option>All Types</option>
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Contract</option>
                                        <option>Internship</option>
                                    </select>
                                </div>
                                <div>
                                    <select className=" border rounded-md px-4 py-2">
                                        <option>All </option>
                                        <option>Remote</option>
                                        <option>On-site</option>

                                    </select>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <p className='font-semibold text-lg'>0</p>
                                <p className='text-gray-500'>jobs found</p>
                            </div>
                        </div>
                        <div className='pt-16 max-w-sm mx-auto'>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-3xl font-semibold mb-3'>No jobs found</h1>
                                <p className='text-center text-gray-500'>We couldn&apos;t find any jobs matching your criteria. Try adjusting your filters or search query.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
