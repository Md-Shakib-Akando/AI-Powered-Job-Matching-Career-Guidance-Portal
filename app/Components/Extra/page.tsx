import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Extra() {
    return (
        <div className=" bg-gradient-to-br from-[#0c3d6e] to-[#54b8ab] text-white py-20">
            <div className='flex flex-col justify-center items-center'>

                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='text-4xl   font-bold text-center'>Ready to Find Your Perfect Match?</h1>

                    </div>
                    <div className='my-4  '>
                        <p className='text-center text-lg text-gray-300'>Join thousands of candidates and employers who have found their perfect match.</p>
                    </div>
                    <div className='flex  my-5'>
                        <Link href="/"> <button className='text-white flex items-center gap-4 bg-[#f46e2c] md:text-xl font-semibold rounded-lg px-4 py-3'>
                            Create Free Account <FaArrowRight size={16} />

                        </button></Link>



                    </div>
                </div>


            </div>

        </div>

    )
}
