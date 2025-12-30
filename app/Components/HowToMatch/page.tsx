import React from 'react'

export default function HowToMatch() {
    return (
        <div className='bg-gray-100'>
            <div className='xl:max-w-10/12 mx-auto py-20'>

                <div className='flex flex-col justify-center items-center'>
                    <div className=' text-center mb-10'>
                        <h1 className='text-4xl text-black font-bold my-4'>How JobMatch AI Works</h1>
                        <p className=' text-xl mb-10 text-gray-500'>Our intelligent matching system connects the right people with the right opportunities</p>
                    </div>
                    <div className='flex gap-5 md:gap-10'>
                        <div className='bg-white rounded-xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl text-gray-300 font-bold mb-5'>01</h1>
                                <h2 className='mb-3 text-xl font-semibold'>Create Your Profile</h2>
                                <p className='text-gray-600'>Upload your resume and let our AI extract your skills, experience, and qualifications automatically.</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl text-gray-300 font-bold mb-5'>02</h1>
                                <h2 className='mb-3 text-xl font-semibold'>AI Analysis</h2>
                                <p className='text-gray-600'>Our algorithm analyzes your profile against thousands of job listings to find the best matches.</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300'>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl text-gray-300 font-bold mb-5'>03</h1>
                                <h2 className='mb-3 text-xl font-semibold'>Get Matched</h2>
                                <p className='text-gray-600'>Receive personalized job recommendations with detailed match scores and career guidance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
