import React from 'react'
import { LuBrain } from 'react-icons/lu'

export default function SmartMatch() {
    return (
        <div className='bg-gray-100'>
            <div className='xl:max-w-9/12 mx-auto py-20 px-5 lg:px-0'>

                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-orange-100 rounded-full px-3 py-1 mt-7 mb-2'>
                        <h1 className='flex gap-2 items-center md:text-lg text-orange-500'><LuBrain size={20} /> Powered by AI</h1>
                    </div>
                    <div className=' text-center mb-10 '>
                        <h1 className='text-4xl text-black font-bold my-4'>Smart Matching Technology</h1>
                        <p className=' text-xl mb-10 text-gray-500'>Our AI goes beyond keywords to understand the full context of your career profile</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10'>
                        <div className='bg-white rounded-xl shadow-lg p-5 lg:p-10 hover:scale-102 transition-transform duration-300 hover:border hover:border-orange-400 '>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl text-orange-300 font-bold mb-5'>01</h1>
                                <h2 className='mb-3 text-xl font-semibold'>Resume Parsing</h2>
                                <p className='text-gray-600'>Automatically extract skills, experience, and education from uploaded resumes.</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-lg p-5 lg:p-10 hover:scale-102 transition-transform duration-300 hover:border hover:border-orange-400'>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl text-orange-300 font-bold mb-5'>02</h1>
                                <h2 className='mb-3 text-xl font-semibold'>Match Scoring</h2>
                                <p className='text-gray-600'>Get detailed match percentages based on skills (60%), experience (25%), and education (15%).</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-lg p-5 lg:p-10 hover:scale-102 transition-transform duration-300 hover:border hover:border-orange-400'>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl text-orange-300 font-bold mb-5'>03</h1>
                                <h2 className='mb-3 text-xl font-semibold'>Career Guidance</h2>
                                <p className='text-gray-600'>Receive personalized advice on skill gaps and recommended learning paths.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
